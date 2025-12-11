import Link from "next/link";

export default function Home() {
  const jobs = [
    { title: "Développeur Frontend", company: "Entreprise X", location: "Paris" },
    { title: "Data Analyst", company: "Entreprise Y", location: "Lyon" },
    { title: "Chef de projet", company: "Entreprise Z", location: "Marseille" },
  ];

  return (
    <div className="min-h-screen bg-grayLight">

      {/* Hero */}
      <header className="bg-gradient-to-r from-primary to-accent text-white py-24 text-center">
        <h1 className="text-5xl font-bold">Trouvez votre emploi idéal</h1>
        <p className="mt-4 text-xl">Postulez facilement et rapidement aux offres qui vous intéressent</p>
        <Link href="/jobs" className="mt-6 inline-block bg-yellow text-primary font-bold px-6 py-3 rounded-lg hover:bg-yellow/80 transition">
          Voir les offres
        </Link>
      </header>

      {/* Recent Jobs */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-textDark">Offres récentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-textDark">{job.title}</h3>
              <p className="text-gray-600 mt-2">{job.company} - {job.location}</p>
              <Link href={`/jobs/${idx+1}`} className="mt-4 inline-block bg-accent text-white px-4 py-2 rounded hover:bg-accent/90 transition">
                Postuler
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
