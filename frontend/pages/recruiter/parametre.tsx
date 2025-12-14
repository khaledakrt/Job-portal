// frontend/components/Parametres.tsx
import { useState } from 'react';
import { Recruiter } from '../../types/company';

interface Props {
  recruiter: Recruiter | null;
}

export default function Parametres({ recruiter }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    sector: recruiter?.sector || '',
    employees: recruiter?.employees || '',
    description: recruiter?.description || '',
    address: recruiter?.address || '',
    phone_number: recruiter?.phone_number || '',
  });

  if (!recruiter) return <p>Chargement des paramètres...</p>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log('Données à sauvegarder :', formData);
    setIsEditing(false);
  };

  return (
    <section className="p-6 w-full bg-white shadow-lg rounded-xl border border-gray-200">
      <h2 className="text-2xl font-extrabold text-blue-800 mb-6">Paramètres du compte</h2>

      <div className="grid grid-cols-12 gap-6">
        {/* Colonne gauche : Infos + logo */}
        <div className="col-span-12 md:col-span-12 lg:col-span-12 flex flex-col md:flex-row gap-6">
          <div className="flex-1 min-w-0 space-y-4">
            <p className="text-gray-700"><span className="font-semibold">Nom :</span> {recruiter.company_name}</p>

            {isEditing ? (
              <>
                <div className="flex flex-col">
                  <label className="font-medium mb-1 text-gray-600">Secteur :</label>
                  <select
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 transition"
                  >
                    <option value="">Sélectionner un secteur</option>
                    <option value="Technologie">Technologie</option>
                    <option value="Santé">Santé</option>
                    <option value="Finance">Finance</option>
                    <option value="Education">Education</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="font-medium mb-1 text-gray-600">Employés :</label>
                  <select
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 transition"
                  >
                    <option value="">Sélectionner</option>
                    <option value="1-10">1 à 10</option>
                    <option value="10-20">10 à 20</option>
                    <option value="20-40">20 à 40</option>
                    <option value="50-100">50 à 100</option>
                    <option value="100+">Plus de 100</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="font-medium mb-1 text-gray-600">Description :</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Présentez votre société"
                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 transition"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-medium mb-1 text-gray-600">Adresse :</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 transition"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-medium mb-1 text-gray-600">Téléphone :</label>
                  <input
                    type="text"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 transition"
                  />
                </div>

                <div className="mt-4 flex gap-3">
                  <button
                    onClick={handleSave}
                    className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg transition shadow"
                  >
                    Sauvegarder
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg transition shadow"
                  >
                    Annuler
                  </button>
                </div>
              </>
            ) : (
              <>
                <p><span className="font-semibold">Adresse :</span> {recruiter.address || 'Non renseignée'}</p>
                <p><span className="font-semibold">Téléphone :</span> {recruiter.phone_number || 'Non renseigné'}</p>
                <p><span className="font-semibold">Secteur :</span> {recruiter.sector || 'Non renseigné'}</p>
                <p><span className="font-semibold">Employés :</span> {recruiter.employees || 'Non renseigné'}</p>
                <p><span className="font-semibold">Description :</span> {recruiter.description || 'Non renseignée'}</p>

                <button
                  className="mt-4 bg-blue-800 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition shadow"
                  onClick={() => setIsEditing(true)}
                >
                  Modifier Paramètres
                </button>
              </>
            )}
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 w-32 md:w-40 self-start">
            {recruiter.logo ? (
              <img
                src={`http://localhost:5000/${recruiter.logo}`}
                alt="Logo entreprise"
                className="w-32 md:w-40 h-32 md:h-40 object-contain rounded-full border p-1 shadow"
              />
            ) : (
              <div className="w-32 md:w-40 h-32 md:h-40 flex items-center justify-center border rounded-full text-gray-500 bg-gray-100 shadow">
                Pas de logo
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
