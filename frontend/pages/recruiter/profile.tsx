// pages/recruiter/Profile.tsx
import { Recruiter } from '../../types/company';

interface Props {
  recruiter: Recruiter | null;
}

export default function Profile({ recruiter }: Props) {
  if (!recruiter) {
    return <p>Profil non disponible.</p>;
  }

  return (
    <section className="p-4 max-w-3xl bg-white shadow-md rounded">
      <h2 className="text-xl font-bold text-blue-800 mb-4">Profil de l'entreprise</h2>

      <div className="flex justify-between items-start">
        {/* Infos à gauche */}
        <div className="space-y-2">
          <p><strong>Nom :</strong> {recruiter.company_name}</p>
          <p><strong>Email :</strong> {recruiter.email}</p>
          <p><strong>Adresse :</strong> {recruiter.address || 'Non renseignée'}</p>
          <p><strong>Téléphone :</strong> {recruiter.phone_number || 'Non renseigné'}</p>
          <p><strong>Secteur :</strong> {recruiter.sector || 'Non renseigné'}</p>
          <p><strong>Employés :</strong> {recruiter.employees || 'Non renseigné'}</p>
          <p><strong>Description :</strong> {recruiter.description || 'Non renseignée'}</p>

          
        </div>

        {/* Logo à droite */}
        <div className="ml-6">
          {recruiter.logo ? (
            <img
              src={`http://localhost:5000/${recruiter.logo}`}
              alt="Logo entreprise"
              className="w-32 h-32 object-contain rounded-full border p-1"
            />
          ) : (
            <div className="w-32 h-32 flex items-center justify-center border rounded text-gray-500">
              Pas de logo
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
