// pages/recruiter/RecruiterDashboard.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Recruiter } from '../../types/company';
import { JobOffer } from '../../types/job';
import { Candidate } from '../../types/candidate';

import Profile from './profile';
import OffresJob from './offresJob';
import RechercheCandidats from './rechercheCandidats';
import Parametres from './parametre';
import Securite from './securite';
import Deconnexion from './deconnexion';


import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function RecruiterDashboard() {
  const router = useRouter();
  const [recruiter, setRecruiter] = useState<Recruiter | null>(null);
  const [activeTab, setActiveTab] = useState<'profile' | 'jobs' | 'candidates' | 'parametre' | 'securite' | 'deconnexion'>('profile');

  const [jobOffers] = useState<JobOffer[]>([
    { id: 1, title: 'Développeur Frontend', location: 'Tunis', date: '01/12/2025', status: 'Active', applications: 5 },
    { id: 2, title: 'Designer UI/UX', location: 'Tunis', date: '05/12/2025', status: 'Active', applications: 3 },
    { id: 3, title: 'Project Manager', location: 'Tunis', date: '20/11/2025', status: 'Clôturée', applications: 12 },
  ]);

  const [candidates] = useState<Candidate[]>([
    { id: 1, name: 'Ali Ben', email: 'ali@example.com', skills: 'React, Node.js' },
    { id: 2, name: 'Sara Khaled', email: 'sara@example.com', skills: 'Angular, Java' },
  ]);

  useEffect(() => {
    const fetchRecruiter = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get<Recruiter>('http://localhost:5000/api/recruiter/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRecruiter(response.data);
      } catch (err) {
        console.error(err);
        router.push('/auth/login');
      }
    };

    fetchRecruiter();
  }, [router]);

  if (!recruiter) return <p>Chargement...</p>;

  return (
    <div className="flex">
      {/* SIDEBAR */}
      <aside className="flex flex-col min-h-screen w-[250px] bg-[#1E3A8A] text-white">
        <div className="cursor-pointer text-center font-bold text-2xl py-6 bg-[#162c61]" 
             onClick={() => document.getElementById('sidebar')?.classList.toggle('collapsed')}>
          JobPortal
        </div>
        <nav className="flex-1 flex flex-col">
          <TabButton activeTab={activeTab} setActiveTab={setActiveTab} tab="profile" icon="fa-home" label="Dashboard" />
          <TabButton activeTab={activeTab} setActiveTab={setActiveTab} tab="jobs" icon="fa-briefcase" label="Offres" />
          <TabButton activeTab={activeTab} setActiveTab={setActiveTab} tab="candidates" icon="fa-users" label="Candidats" />
          <TabButton activeTab={activeTab} setActiveTab={setActiveTab} tab="parametre" icon="fa-cog" label="Paramètres" />
          <TabButton activeTab={activeTab} setActiveTab={setActiveTab} tab="securite" icon="fa-cog" label="Securité" />
          <TabButton activeTab={activeTab} setActiveTab={setActiveTab} tab="deconnexion" icon="fa-cog" label="Deconnexion" />
        </nav>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-6 bg-[#f4f5f7]">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-[1.8em] text-[#1E3A8A]">Dashboard Recruteur</h1>
          <div className="flex items-center gap-3">
            <input type="text" placeholder="Rechercher..." className="px-3 py-2 rounded border border-gray-300"/>
            <i className="fa fa-bell cursor-pointer text-xl"></i>
            <i className="fa fa-user-circle cursor-pointer text-xl"></i>
          </div>
        </header>

        {/* Contenu dynamique selon l'onglet */}
        {activeTab === 'profile' && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mb-8">
              <Card title="Offres actives" value="12" id="miniChart1" />
              <Card title="Candidatures en attente" value="34" id="miniChart2" />
              <Card title="Alertes importantes" value="2" id="miniChart3" />
              <Card title="Temps moyen embauche" value="21j" id="miniChart4" />
            </div>

            {/* Profil */}
            <div className="bg-white p-6 rounded-xl shadow mb-8">
              <Profile recruiter={recruiter} />
            </div>

            {/* Offres récentes */}
            <div className="text-[#1E3A8A] text-[1.2em] mb-2">Offres récentes</div>
            <table className="w-full rounded-xl overflow-hidden shadow mb-8">
              <thead>
                <tr className="bg-[#1E3A8A] text-white">
                  <th className="p-2">Titre</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Candidatures</th>
                  <th className="p-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {jobOffers.map((offer) => (
                  <tr key={offer.id} className="hover:bg-blue-100">
                    <td className="p-2">{offer.title}</td>
                    <td className="p-2">{offer.status}</td>
                    <td className="p-2">{offer.applications}</td>
                    <td className="p-2">{offer.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Chart */}
            <div className="bg-white p-6 rounded-xl shadow">
              <canvas id="candidaturesChart" className="w-full h-[300px]"></canvas>
            </div>
          </>
        )}

        {activeTab === 'jobs' && <OffresJob recruiter={recruiter} jobOffers={jobOffers} />}
        {activeTab === 'candidates' && <RechercheCandidats candidates={candidates} />}
        {activeTab === 'parametre' && (
  <div className="bg-white p-6 rounded-xl shadow mb-8">
    <Parametres recruiter={recruiter} />
  </div>
)}

{activeTab === 'securite' && (
  <div className="bg-white p-6 rounded-xl shadow mb-8">
    <Securite recruiter={recruiter} />
  </div>
)}

{activeTab === 'deconnexion' && (
  <div className="bg-white p-6 rounded-xl shadow mb-8">
    <Deconnexion />
  </div>
)}

      </main>
    </div>
  );
}

// Composant pour bouton de l'onglet
function TabButton({ activeTab, setActiveTab, tab, icon, label }: 
  { activeTab: string; setActiveTab: (tab: any) => void; tab: string; icon: string; label: string }) {
  return (
    <button className={`w-full flex items-center gap-3 px-4 py-3 ${activeTab === tab ? 'bg-[#374b9a]' : ''}`}
            onClick={() => setActiveTab(tab as any)}>
      <i className={`fa ${icon}`}></i> <span>{label}</span>
    </button>
  );
}

// Composant Card
function Card({ title, value, id }: { title: string; value: string; id: string }) {
  return (
    <div className="relative bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
      <h2 className="text-[#1E3A8A] font-semibold mb-2">{title}</h2>
      <p className="text-[#FBBF24] text-2xl font-bold">{value}</p>
      <canvas id={id} className="absolute bottom-2 right-2 w-16 h-10 opacity-30"></canvas>
    </div>
  );
}
