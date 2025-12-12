// pages/profile.tsx
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type Diploma = {
  id?: number;
  level: string;
  year: string;
  university: string;
};

type Experience = {
  id?: number;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description?: string;
};
type User = {
  id: number;
  name: string;
  last_name: string;
  birthDate: string;
  lastTitle: string;
  photo?: string;
  diplomas: Diploma[];
  experiences: Experience[];
};
type University = {
  id: number;
  name: string;
};

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  // Infos personnelles
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [lastTitle, setLastTitle] = useState("");
  const [photo, setPhoto] = useState<string>("");
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [editMode, setEditMode] = useState(false);

  // Diplômes
  const [diplomas, setDiplomas] = useState<Diploma[]>([]);
  const [universities, setUniversities] = useState<University[]>([]);
  const [univQuery, setUnivQuery] = useState("");
  const [filteredUniversities, setFilteredUniversities] = useState<University[]>([]);
  const [editingDiplomaIndex, setEditingDiplomaIndex] = useState<number | null>(null);
  const [newDiploma, setNewDiploma] = useState<Diploma>({ level: "", year: "", university: "" });

  // Expériences
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [editingExpIndex, setEditingExpIndex] = useState<number | null>(null);
  const [newExp, setNewExp] = useState<Experience>({
    title: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  // Charger utilisateur
  useEffect(() => {
    const fetchUserProfile = async () => {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
        router.push("/login");
        return;
      }
      const parsedUser = JSON.parse(storedUser);
      if (!parsedUser.id) {
        router.push("/login");
        return;
      }

      try {
        const res = await fetch(`http://localhost:5000/api/user/${parsedUser.id}`);
        if (!res.ok) throw new Error("Erreur chargement profil");
        const data = await res.json();
        setUser(data);

        setFirstName(data.name || "");
        setLastName(data.last_name || "");
        setLastTitle(data.lastTitle || "");
        setPhoto(data.photo || "");

// ✅ Ne garder que YYYY-MM-DD
        setBirthDate(data.birthDate ? data.birthDate.split("T")[0] : "");


        setDiplomas(data.diplomas || []);
        setExperiences(data.experiences || []);

        localStorage.setItem("user", JSON.stringify(data));
      } catch (err) {
        console.error(err);
      }
    };
    fetchUserProfile();
  }, [router]);

  // Charger universités
  useEffect(() => {
    fetch("http://localhost:5000/api/universities")
      .then(res => res.json())
      .then(data => setUniversities(data))
      .catch(err => console.error(err));
  }, []);

  // Filtrer universités pour autocomplete
  useEffect(() => {
    setFilteredUniversities(
      universities.filter(u => u.name.toLowerCase().includes(univQuery.toLowerCase()))
    );
  }, [univQuery, universities]);

  if (!user) return <p>Chargement...</p>;

  // Sauvegarde profil
  const handleSaveProfile = async () => {
  try {
    const formData = new FormData();
    formData.append("name", firstName);
    formData.append("last_name", lastName);
    formData.append("birthDate", birthDate);
    formData.append("lastTitle", lastTitle);
    if (photoFile) formData.append("photo", photoFile);

    const res = await fetch(`http://localhost:5000/api/user/${user.id}`, {
      method: "PUT",
      body: formData,
    });

    if (!res.ok) throw new Error("Erreur lors de la mise à jour");

    const data: User = await res.json();

    // 🔹 Mettre à jour tous les états
    setUser(data);
    setFirstName(data.name || "");
    setLastName(data.last_name || "");
    setBirthDate(data.birthDate ? data.birthDate.split("T")[0] : "");
    setLastTitle(data.lastTitle || "");
    setPhoto(data.photo ? data.photo.replace("/uploads/", "") : "");
    setDiplomas(data.diplomas || []);
    setExperiences(data.experiences || []);

    // 🔹 Sauvegarder dans localStorage
    localStorage.setItem("user", JSON.stringify(data));

    setEditMode(false);
    alert("Profil mis à jour !");
  } catch (err) {
    console.error(err);
    alert("Erreur lors de la mise à jour du profil");
  }
};


  

  // Sauvegarde diplômes
  const handleSaveDiploma = async (index?: number) => {
    const updatedDiplomas = [...diplomas];
    if (index !== undefined && index >= 0) updatedDiplomas[index] = newDiploma;
    else updatedDiplomas.push(newDiploma);

    try {
      await fetch(`http://localhost:5000/api/user/${user.id}/diplomas`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedDiplomas),
      });
      setDiplomas(updatedDiplomas);
setUser((prev: User) => ({ ...prev, diplomas: updatedDiplomas }));
      setEditingDiplomaIndex(null);
      setNewDiploma({ level: "", year: "", university: "" });
      setUnivQuery("");
    } catch (err) {
      console.error(err);
    }
  };

  // Sauvegarde expériences
  const handleSaveExperience = async (index?: number) => {
    const updatedExps = [...experiences];
    if (index !== undefined && index >= 0) updatedExps[index] = newExp;
    else updatedExps.push(newExp);

    try {
      await fetch(`http://localhost:5000/api/user/${user.id}/experiences`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedExps),
      });
      setExperiences(updatedExps);
setUser((prev: User) => ({ ...prev, experiences: updatedExps }));
      setEditingExpIndex(null);
      setNewExp({ title: "", company: "", startDate: "", endDate: "", description: "" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded shadow p-6 space-y-8">

        {/* PROFIL */}
        <div className="flex items-start space-x-10">
          <div>
    <img
      src={user?.photo ? `http://localhost:5000/uploads/${user.photo}` : "/default-avatar.png"}
      alt="Photo profil"
      className="w-40 h-40 rounded-full border object-cover" // 🔹 Taille plus grande
    />
    {editMode && (
      <input
        type="file"
        accept="image/*"
        onChange={e => e.target.files && setPhotoFile(e.target.files[0])}
        className="mt-2"
      />
    )}
  </div>
          <div className="flex-1 space-y-3 text-lg"> {/* texte un peu plus grand, plus d'espace vertical */}
  {editMode ? (
    <>
      <input
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder="Prénom"
        className="border p-2 w-full rounded"
      />
      <input
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder="Nom"
        className="border p-2 w-full rounded"
      />
      <input
        type="date"
        value={birthDate}
        onChange={e => setBirthDate(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <input
        value={lastTitle}
        onChange={e => setLastTitle(e.target.value)}
        placeholder="Dernier poste"
        className="border p-2 w-full rounded"
      />
      <div className="flex space-x-2 mt-2">
        <button
          onClick={handleSaveProfile}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Enregistrer
        </button>
        <button
          onClick={() => setEditMode(false)}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Annuler
        </button>
      </div>
    </>
  ) : (
    <>
      <p><span className="font-bold">Prénom :</span> {firstName}</p>
      <p><span className="font-bold">Nom :</span> {lastName}</p>
      <p><span className="font-bold">Date de naissance :</span> {birthDate}</p>
      <p><span className="font-bold">Dernier poste :</span> {lastTitle}</p>
      <button
        onClick={() => setEditMode(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Modifier
      </button>
    </>
  )}
</div>

        </div>

        {/* FORMATIONS */}
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">🎓 Formation professionnelle</h2>
          <div className="space-y-4">
            {diplomas.map((d, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm flex justify-between items-center">
                {editingDiplomaIndex === idx ? (
                  <div className="flex flex-wrap gap-3 w-full">
                    <input value={newDiploma.level} onChange={e => setNewDiploma({ ...newDiploma, level: e.target.value })} placeholder="Niveau" className="border p-2 rounded w-40" />
                    <input
  type="date" // 🔹 calendrier complet
  value={newDiploma.year}
  onChange={e => setNewDiploma({ ...newDiploma, year: e.target.value })}
  className="border p-2 rounded w-40"
/>
                    <div className="relative w-60">
  <input
    value={newDiploma.university} // 🔹 afficher la valeur réelle
    onChange={e => {
      const val = e.target.value;
      setNewDiploma({ ...newDiploma, university: val });
      setUnivQuery(val); // 🔹 filtrer suggestions
    }}
    placeholder="Université"
    className="border p-2 rounded w-full"
  />
  {filteredUniversities.length > 0 && (
    <ul className="absolute z-10 bg-white border mt-1 max-h-40 overflow-auto rounded shadow w-full">
      {filteredUniversities.map(u => (
        <li
          key={u.id}
          className="p-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => {
            setNewDiploma({ ...newDiploma, university: u.name });
            setFilteredUniversities([]); // fermer la liste
          }}
        >
          {u.name}
        </li>
      ))}
    </ul>
  )}
</div>

                    <button onClick={() => handleSaveDiploma(idx)} className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700">Sauvegarder</button>
                  </div>
                ) : (
                  <div className="flex-1 text-gray-900 space-y-1">
                    <p><span className="font-semibold text-blue-700">Diplôme :</span> {d.level}</p>
                    <p><span className="font-semibold text-blue-700">Université :</span> {d.university}</p>
                    <p><span className="font-semibold text-blue-700">Année :</span> {d.year}</p>
                  </div>
                )}
                {editingDiplomaIndex !== idx && (
                  <button onClick={() => { setEditingDiplomaIndex(idx); setNewDiploma(d); setUnivQuery(d.university); }} className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded">Modifier</button>
                )}
              </div>
            ))}

            <button onClick={() => setEditingDiplomaIndex(-1)} className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">➕ Ajouter un diplôme</button>

            {editingDiplomaIndex === -1 && (
              <div className="flex flex-wrap gap-3 mt-3 bg-gray-50 p-4 border rounded-lg shadow-sm">
                <input value={newDiploma.level} onChange={e => setNewDiploma({ ...newDiploma, level: e.target.value })} placeholder="Niveau" className="border p-2 rounded w-40" />
                <input
  type="date" // 🔹 calendrier complet
  value={newDiploma.year}
  onChange={e => setNewDiploma({ ...newDiploma, year: e.target.value })}
  className="border p-2 rounded w-40"
/>
                <div className="relative w-60">
  <input
    value={newDiploma.university} // 🔹 afficher la valeur réelle
    onChange={e => {
      const val = e.target.value;
      setNewDiploma({ ...newDiploma, university: val });
      setUnivQuery(val); // 🔹 filtrer suggestions
    }}
    placeholder="Université"
    className="border p-2 rounded w-full"
  />
  {filteredUniversities.length > 0 && (
    <ul className="absolute z-10 bg-white border mt-1 max-h-40 overflow-auto rounded shadow w-full">
      {filteredUniversities.map(u => (
        <li
          key={u.id}
          className="p-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => {
            setNewDiploma({ ...newDiploma, university: u.name });
            setFilteredUniversities([]); // fermer la liste
          }}
        >
          {u.name}
        </li>
      ))}
    </ul>
  )}
</div>

                <button onClick={() => handleSaveDiploma()} className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700">Enregistrer</button>
              </div>
            )}
          </div>
        </div>

        {/* EXPÉRIENCES */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">🧳 Expériences professionnelles</h2>
          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm flex justify-between items-start">
                {editingExpIndex === idx ? (
                  <div className="flex flex-wrap gap-3 w-full">
                    <input value={newExp.title} onChange={e => setNewExp({ ...newExp, title: e.target.value })} placeholder="Titre" className="border p-2 rounded w-48" />
                    <input value={newExp.company} onChange={e => setNewExp({ ...newExp, company: e.target.value })} placeholder="Société" className="border p-2 rounded w-48" />
                    <input type="date" value={newExp.startDate} onChange={e => setNewExp({ ...newExp, startDate: e.target.value })} className="border p-2 rounded" />
                    <input type="date" value={newExp.endDate} onChange={e => setNewExp({ ...newExp, endDate: e.target.value })} className="border p-2 rounded" />
                    <textarea value={newExp.description} onChange={e => setNewExp({ ...newExp, description: e.target.value })} placeholder="Description" className="border p-2 rounded w-full h-32" />
                    <button onClick={() => handleSaveExperience(idx)} className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700">Sauvegarder</button>
                  </div>
                ) : (
                  <div className="flex-1 text-gray-900 space-y-1">
                    <p><span className="font-semibold text-blue-700">Poste :</span> {exp.title}</p>
                    <p><span className="font-semibold text-blue-700">Entreprise :</span> {exp.company}</p>
                    <p><span className="font-semibold text-blue-700">Période :</span> {exp.startDate} — {exp.endDate || "Aujourd'hui"}</p>
                    {exp.description && <p className="whitespace-pre-line">
  <span className="font-semibold text-blue-700">Description :</span>
  <br />
  {exp.description}
</p>
}
                  </div>
                )}
                {editingExpIndex !== idx && (
                  <button onClick={() => { setEditingExpIndex(idx); setNewExp(exp); }} className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded">Modifier</button>
                )}
              </div>
            ))}

            <button onClick={() => setEditingExpIndex(-1)} className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">➕ Ajouter une expérience</button>

            {editingExpIndex === -1 && (
              <div className="flex flex-wrap gap-3 mt-3 bg-gray-50 p-4 border rounded-lg shadow-sm">
                <input value={newExp.title} onChange={e => setNewExp({ ...newExp, title: e.target.value })} placeholder="Titre" className="border p-2 rounded w-48" />
                <input value={newExp.company} onChange={e => setNewExp({ ...newExp, company: e.target.value })} placeholder="Société" className="border p-2 rounded w-48" />
                <input type="date" value={newExp.startDate} onChange={e => setNewExp({ ...newExp, startDate: e.target.value })} className="border p-2 rounded" />
                <input type="date" value={newExp.endDate} onChange={e => setNewExp({ ...newExp, endDate: e.target.value })} className="border p-2 rounded" />
                <textarea value={newExp.description} onChange={e => setNewExp({ ...newExp, description: e.target.value })} placeholder="Description" className="border p-2 rounded w-full h-32" />
                <button onClick={() => handleSaveExperience()} className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700">Ajouter</button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
