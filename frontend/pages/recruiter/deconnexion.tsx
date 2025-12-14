// frontend/components/deconnexion.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Deconnexion() {
  const router = useRouter();

  useEffect(() => {
    // Supprimer le token et rediriger
    localStorage.removeItem('token');
    router.push('/auth/login');
  }, [router]);

  return (
    <div className="p-4 text-center">
      <p className="text-gray-700">Déconnexion en cours...</p>
    </div>
  );
}
