import { useState } from 'react';
import { useRouter } from 'next/router';
import { loginUser } from '../../services/authService';
import { LoginData, UserData } from '../../types/auth';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    const loginData: LoginData = { email, password };

    try {
      const user: UserData = await loginUser(loginData);

      // Stocker l'utilisateur dans localStorage
      localStorage.setItem('user', JSON.stringify(user));

      // Déclencher un event pour mettre à jour le Navbar
      window.dispatchEvent(new Event('authChange'));

      // Rediriger vers le profil
      router.push('/candidate/profile');

    } catch (err: any) {
      console.error(err);
      setMessage(err.message || 'Erreur serveur');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow w-96">
        <h1 className="text-2xl font-bold mb-4">Connexion</h1>

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
