import { useState } from "react";

export default function SearchFilters({ onSearch }: { onSearch: (filters: any) => void }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch({ title, location });
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 mb-6">
      <input
        type="text"
        placeholder="Titre du poste"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
      />
      <input
        type="text"
        placeholder="Localisation"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Rechercher
      </button>
    </div>
  );
}
