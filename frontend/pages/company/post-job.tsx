import { useState } from "react";
import Layout from "../../components/Layout";

export default function PostJob() {
  const [job, setJob] = useState({ title: "", description: "", location: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Offre publiée : ${job.title}`);
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Publier une offre</h1>
      <form className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-xl" onSubmit={handleSubmit}>
        <input
          className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Titre du poste"
          value={job.title}
          onChange={(e) => setJob({ ...job, title: e.target.value })}
        />
        <textarea
          className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Description"
          rows={5}
          value={job.description}
          onChange={(e) => setJob({ ...job, description: e.target.value })}
        />
        <input
          className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Localisation"
          value={job.location}
          onChange={(e) => setJob({ ...job, location: e.target.value })}
        />
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
          Publier
        </button>
      </form>
    </Layout>
  );
}
