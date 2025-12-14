import { useState } from 'react';
import { registerUser, registerRecruiter } from '../../services/authService';
import { RegisterData, RegisterRecruiterData } from '../../types/auth';

export default function RegisterPage() {
  const [role, setRole] = useState<'candidate' | 'recruiter'>('candidate');
  const [message, setMessage] = useState('');

  // Candidat fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [lastTitle, setLastTitle] = useState('');

  // Recruteur fields
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPassword, setCompanyPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (role === 'candidate') {
        const data: RegisterData = {
          name: firstName,
          last_name: lastName,
          email,
          password,
          role,
          birthDate,
          lastTitle,
        };
        await registerUser(data);
        setMessage('Candidat inscrit avec succès !');

        // Reset champs candidat
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setBirthDate('');
        setLastTitle('');
      } else {
        const data: RegisterRecruiterData = {
          company_name: companyName,
          email: companyEmail,
          password: companyPassword,
          role: 'recruiter',
          address,
          phoneNumber,
        };
        await registerRecruiter(data);
        setMessage('Recruteur inscrit avec succès !');

        // Reset champs recruteur
        setCompanyName('');
        setCompanyEmail('');
        setCompanyPassword('');
        setAddress('');
        setPhoneNumber('');
      }

      // Reset role après submit
      setRole('candidate');

    } catch (err: any) {
      setMessage(err.message || 'Erreur serveur');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow w-96">
        <h1 className="text-2xl font-bold mb-4">Inscription</h1>

        {/* Selecteur Role en haut */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as 'candidate' | 'recruiter')}
          className="w-full p-2 mb-6 border rounded"
        >
          <option value="candidate">Candidat</option>
          <option value="recruiter">Recruteur</option>
        </select>

        {role === 'candidate' ? (
          <>
            <input type="text" placeholder="Prénom" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full p-2 mb-4 border rounded" required />
            <input type="text" placeholder="Nom" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full p-2 mb-4 border rounded" required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-4 border rounded" required />
            <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-4 border rounded" required />
            <input type="date" placeholder="Date de naissance" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className="w-full p-2 mb-4 border rounded" />
            <input type="text" placeholder="Dernier poste" value={lastTitle} onChange={(e) => setLastTitle(e.target.value)} className="w-full p-2 mb-4 border rounded" />
          </>
        ) : (
          <>
            <input type="text" placeholder="Nom de société" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full p-2 mb-4 border rounded" required />
            <input type="email" placeholder="Email" value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)} className="w-full p-2 mb-4 border rounded" required />
            <input type="password" placeholder="Mot de passe" value={companyPassword} onChange={(e) => setCompanyPassword(e.target.value)} className="w-full p-2 mb-4 border rounded" required />
            <input type="text" placeholder="Adresse" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full p-2 mb-4 border rounded" required />
            <input type="tel" placeholder="Numéro de téléphone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full p-2 mb-4 border rounded" required />
          </>
        )}

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          S’inscrire
        </button>

        {message && <p className="mt-4 text-red-500">{message}</p>}
      </form>
    </div>
  );
}
