import { useState } from 'react';
import { useRouter } from 'next/router';
import { loginUser, loginRecruiter } from '../../services/authService';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<'candidate' | 'recruiter'>('candidate');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      let result;

      if (role === 'candidate') {
  const result = await loginUser({ email, password });
  const userData = { ...result, role: 'candidate' }; // <-- pas result.user
  localStorage.setItem('user', JSON.stringify(userData));
  router.push('/candidate/profile');
} else {
  const result = await loginRecruiter({ email, password });
  const userData = { ...result, role: 'recruiter' }; // <-- pas result.user
  localStorage.setItem('user', JSON.stringify(userData));
  router.push('/recruiter/RecruiterDashboard');
}

      console.log('Connexion réussie :', result);
    } catch (err: any) {
      console.error(err);
      setMessage(err.message || 'Erreur serveur');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow w-96">
        <h1 className="text-2xl font-bold mb-4">Connexion</h1>

        {/* Sélecteur de rôle */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as 'candidate' | 'recruiter')}
          className="w-full p-2 mb-6 border rounded"
        >
          <option value="candidate">Candidat</option>
          <option value="recruiter">Recruteur</option>
        </select>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Se connecter
        </button>

        {message && <p className="mt-4 text-red-500">{message}</p>}
      </form>
    </div>
  );
}
