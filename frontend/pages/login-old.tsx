import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log('Réponse backend login :', data);

      if (!res.ok) {
        setMessage(data.message || 'Email ou mot de passe incorrect');
        return;
      }

      // Stocker l'utilisateur complet dans localStorage
      const userData = {
        id: data.id,
        name: data.name || '',
        birthDate: data.birthDate || '',
        photo: data.photo || '',
        education: data.education || '',
        experiences: data.experiences || [],
      };

      localStorage.setItem('user', JSON.stringify(userData));

      // Déclencher l'event pour mettre à jour le Navbar
      window.dispatchEvent(new Event('authChange'));

      // Rediriger vers le profil
      router.push('/profile');
    } catch (err) {
      console.error(err);
      setMessage('Erreur serveur');
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
