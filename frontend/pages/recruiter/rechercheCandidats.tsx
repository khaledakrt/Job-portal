import { Candidate } from '../../types/candidate';

interface Props {
  candidates: Candidate[];
}

export default function RechercheCandidats({ candidates }: Props) {
  return (
    <section>
      <h2 className="text-xl font-bold text-blue-800 mb-4">Recherche de candidats</h2>
      <form className="flex flex-wrap gap-2 mb-4">
        <input type="text" placeholder="Nom / Compétence" className="p-2 rounded border flex-1" />
        <input type="text" placeholder="Lieu" className="p-2 rounded border flex-1" />
        <button type="submit" className="bg-blue-800 text-white p-2 rounded hover:bg-blue-700">Rechercher</button>
      </form>
      <div className="flex flex-col gap-4">
        {candidates.map((c) => (
          <div key={c.id} className="bg-gray-50 p-4 rounded shadow flex justify-between items-center">
            <div>
              <h3 className="font-bold text-blue-800">{c.name}</h3>
              <p><strong>Email :</strong> {c.email}</p>
              <p><strong>Compétences :</strong> {c.skills}</p>
            </div>
            <button className="bg-green-600 text-white p-2 rounded hover:bg-green-700">Contacter</button>
          </div>
        ))}
      </div>
    </section>
  );
}
