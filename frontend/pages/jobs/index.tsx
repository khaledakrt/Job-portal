import Link from "next/link";
import { useState } from "react";

export default function Jobs() {
  const jobs = [
    { id: 1, title: "Développeur Backend", company: "Entreprise A", location: "Paris" },
    { id: 2, title: "UX Designer", company: "Entreprise B", location: "Lyon" },
    { id: 3, title: "DevOps Engineer", company: "Entreprise C", location: "Marseille" },
  ];

  const [filter, setFilter] = useState("");

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(filter.toLowerCase()) ||
    job.company.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-grayLight">
     
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-textDark">Toutes les offres</h2>

        {/* Filter */}
        <input
          type="text"
          placeholder="Rechercher..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mb-6 px-4 py-2 rounded-lg border border-gray-300 focus:ring-accent focus:border-accent w-full md:w-1/3"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map(job => (
            <div key={job.id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl text-textDark">{job.title}</h3>
              <p className="text-gray-600 mt-2">{job.company} - {job.location}</p>
              <Link href={`/jobs/${job.id}`} className="mt-4 inline-block bg-accent text-white px-4 py-2 rounded hover:bg-accent/90 transition">
                Postuler
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
