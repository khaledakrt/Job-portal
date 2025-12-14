import { Recruiter } from '../../types/company';
import { JobOffer } from '../../types/job';

interface Props {
  recruiter: Recruiter | null;
  jobOffers: JobOffer[];
}

export default function OffresJob({ recruiter, jobOffers }: Props) {
  return (
    <section>
      <h2 className="text-xl font-bold text-blue-800 mb-4">Offres publiées</h2>
      <div className="flex flex-col gap-4">
        {jobOffers.map((job) => (
          <div key={job.id} className="bg-gray-50 p-4 rounded shadow flex justify-between items-center">
            <div>
              {recruiter?.logo && <img src={recruiter.logo} alt="Logo" className="w-16 mb-2" />}
              <h3 className="font-bold text-blue-800">{job.title}</h3>
              <p><strong>Lieu :</strong> {job.location}</p>
              <p><strong>Date :</strong> {job.date}</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-green-600 text-white p-2 rounded hover:bg-green-700">  Consulter  </button>
              <button className="bg-red-600 text-white p-2 rounded hover:bg-red-700">Supprimer</button>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 bg-teal-600 text-white p-2 rounded hover:bg-teal-700">Ajouter une offre</button>
    </section>
  );
}
