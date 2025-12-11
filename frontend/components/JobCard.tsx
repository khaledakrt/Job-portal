import Link from "next/link";

interface JobCardProps {
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    type?: string;
  };
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
      <h2 className="text-xl font-semibold mb-1">{job.title}</h2>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-400 mb-2">{job.location}</p>
      {job.type && (
        <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm mb-2">
          {job.type}
        </span>
      )}
      <Link
        href={`/jobs/${job.id}`}
        className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Voir l’offre
      </Link>
    </div>
  );
}
