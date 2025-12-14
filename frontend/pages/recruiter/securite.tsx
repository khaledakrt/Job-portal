// frontend/components/securite.tsx
import { useState } from 'react';
import { Recruiter } from '../../types/company';

interface Props {
  recruiter: Recruiter | null;
}

export default function Securite({ recruiter }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [securityData, setSecurityData] = useState({
    email: recruiter?.email || '',
    password: '',
    confirmPassword: '',
    logo: null as File | null,
  });

  if (!recruiter) return <p>Chargement...</p>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'logo' && files) {
      setSecurityData(prev => ({ ...prev, logo: files[0] }));
    } else {
      setSecurityData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    if (securityData.password && securityData.password !== securityData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }
    console.log('Sécurité à sauvegarder :', securityData);
    setIsEditing(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Sécurité du compte</h2>

      {/* Affichage des infos actuelles */}
      {!isEditing && (
        <div className="flex justify-between items-center border p-4 rounded shadow-sm">
          <div className="space-y-2">
            <p><strong>Email :</strong> {recruiter.email}</p>
            <p><strong>Mot de passe :</strong> {'●'.repeat(8)}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded mt-2 hover:bg-blue-500 transition"
            >
              Mettre à jour mes coordonnées de connexion
            </button>
          </div>

          <div className="ml-6 flex-shrink-0">
            {recruiter.logo ? (
              <img
                src={`http://localhost:5000/${recruiter.logo}`}
                alt="Logo"
                className="w-24 h-24 object-contain rounded-full border p-1"
              />
            ) : (
              <div className="w-24 h-24 flex items-center justify-center border rounded-full bg-gray-100 text-gray-500">
                Pas de logo
              </div>
            )}
          </div>
        </div>
      )}

      {/* Formulaire de modification */}
      {isEditing && (
        <div className="mt-4 border p-4 rounded shadow-sm">
          <div className="flex justify-between items-start">
            <div className="flex-1 space-y-3">
              <div>
                <label className="block font-medium">Email :</label>
                <input
                  type="email"
                  name="email"
                  value={securityData.email}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              <div>
                <label className="block font-medium">Nouveau mot de passe :</label>
                <input
                  type="password"
                  name="password"
                  value={securityData.password}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              <div>
                <label className="block font-medium">Confirmer mot de passe :</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={securityData.confirmPassword}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              <div>
                <label className="block font-medium">Logo / Avatar :</label>
                <input type="file" name="logo" onChange={handleChange} />
              </div>

              <div className="flex gap-3 mt-2">
                <button
                  onClick={handleSave}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
                >
                  Sauvegarder
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
                >
                  Annuler
                </button>
              </div>
            </div>

            <div className="ml-6 flex-shrink-0">
              {recruiter.logo && (
                <img
                  src={`http://localhost:5000/${recruiter.logo}`}
                  alt="Logo"
                  className="w-24 h-24 object-contain rounded-full border p-1"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
