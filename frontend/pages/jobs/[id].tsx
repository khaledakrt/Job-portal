import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export default function JobDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState<any>(null);

  useEffect(() => {
    if (id) {
      setJob({
        id,
        title: "Développeur React",
        company: "ABC Corp",
        location: "Paris",
        type: "CDI",
        description:
          "Développement front-end en React et Next.js. Participation aux projets internes et externes.",
      });
    }
  }, [id]);

  if (!job) return <Layout><p>Chargement...</p></Layout>;

  return (
    <Layout>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
        <p className="text-gray-600 mb-2">{job.company} - {job.location}</p>
        <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm mb-4">{job.type}</span>
        <p className="mb-4">{job.description}</p>
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
          Postuler
        </button>
      </div>
    </Layout>
  );
}
