// pages/profile.tsx
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { User, Diploma, Experience, University } from "../../types/user";
import {
  getUserById,
  updateUser,
  updateUserSummary,
  updateDiplomas,
  updateExperiences,
  getUniversities,
  getLanguagesFromDB,
  getSkillsFromDB,
  updateUserLanguages, // <- ajouté
  updateUserSkills     // <- ajouté
} from "../../services/userService";
import jsPDF from "jspdf";

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  // Infos personnelles
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [lastTitle, setLastTitle] = useState("");
  const [photo, setPhoto] = useState<string>("");
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [editProfile, setEditProfile] = useState(false);

  // Résumé
  const [summary, setSummary] = useState("");
  const [editSummary, setEditSummary] = useState(false);

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

  // LANGUES
  const [languages, setLanguages] = useState<string[]>([]);
  const [editingLang, setEditingLang] = useState(false);
  const [newLang, setNewLang] = useState("");
  const [allLanguages, setAllLanguages] = useState<string[]>([]);
  const [filteredLanguages, setFilteredLanguages] = useState<string[]>([]);

  // COMPÉTENCES
  const [skills, setSkills] = useState<string[]>([]);
  const [editingSkill, setEditingSkill] = useState(false);
  const [newSkill, setNewSkill] = useState("");
  const [allSkills, setAllSkills] = useState<string[]>([]);
  const [filteredSkills, setFilteredSkills] = useState<string[]>([]);


const handleDownloadPDF = () => {
  if (!user) return;

  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Profil Candidat", 10, 20);

  doc.setFontSize(14);
  doc.text(`Nom : ${user.name} ${user.last_name}`, 10, 40);
  doc.text(`Date de naissance : ${user.birthDate}`, 10, 50);
  doc.text(`Résumé : ${user.summary || "Aucun résumé"}`, 10, 60);

  // Langues
  doc.text(`Langues : ${user.languages?.join(", ") || "Aucune"}`, 10, 70);

  // Compétences
  doc.text(`Compétences : ${user.skills?.join(", ") || "Aucune"}`, 10, 80);

  // Diplômes
  if (user.diplomas?.length) {
    let y = 90;
    user.diplomas.forEach(d => {
      doc.text(`Diplôme : ${d.level}, Université : ${d.university}, Année : ${d.year}`, 10, y);
      y += 10;
    });
  }

  // Expériences
  if (user.experiences?.length) {
    let y = 120;
    user.experiences.forEach(exp => {
      doc.text(`Poste : ${exp.title} | ${exp.company}`, 10, y);
      doc.text(`Période : ${exp.startDate} — ${exp.endDate || "Aujourd'hui"}`, 10, y + 10);
      doc.text(`Description : ${exp.description}`, 10, y + 20);
      y += 30;
    });
  }

  doc.save("profil.pdf");
};

  
  // Charger utilisateur
  useEffect(() => {
    const fetchUserProfile = async () => {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) return router.push("/login");

      const parsedUser = JSON.parse(storedUser);
      if (!parsedUser.id) return router.push("/login");

      try {
        const data = await getUserById(parsedUser.id);
        setUser(data);

        setFirstName(data.name || "");
        setLastName(data.last_name || "");
        setBirthDate(data.birthDate ? data.birthDate.split("T")[0] : "");
        setLastTitle(data.lastTitle || "");
        setPhoto(data.photo || "");
        setSummary(data.summary || "");
        setDiplomas(data.diplomas || []);
        setExperiences(data.experiences || []);
        setLanguages(data.languages || []);
        setSkills(data.skills || []);

        localStorage.setItem("user", JSON.stringify(data));
      } catch (err) {
        console.error(err);
      }
    };
    fetchUserProfile();
  }, [router]);

  // Charger universités
  useEffect(() => {
    const fetchUnivs = async () => {
      try {
        const data = await getUniversities();
        setUniversities(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUnivs();
  }, []);

  // Filtrer universités pour autocomplete
  useEffect(() => {
    setFilteredUniversities(
      univQuery === ""
        ? universities
        : universities.filter(u =>
            u.name.toLowerCase().includes(univQuery.toLowerCase())
          )
    );
  }, [univQuery, universities]);

  // Charger toutes les langues et compétences depuis la DB
  useEffect(() => {
    const fetchLanguagesAndSkills = async () => {
      try {
        const langs = await getLanguagesFromDB();
        const skills = await getSkillsFromDB();
        setAllLanguages(langs);
        setAllSkills(skills);
      } catch (err) {
        console.error(err);
      }
    };
    fetchLanguagesAndSkills();
  }, []);

  // Filtrer langues et compétences pour autocomplete
  useEffect(() => {
    setFilteredLanguages(
      newLang === "" ? [] : allLanguages.filter(l => l.toLowerCase().includes(newLang.toLowerCase()))
    );
  }, [newLang, allLanguages]);

  useEffect(() => {
    setFilteredSkills(
      newSkill === "" ? [] : allSkills.filter(s => s.toLowerCase().includes(newSkill.toLowerCase()))
    );
  }, [newSkill, allSkills]);

  // ---------- Fonctions de sauvegarde ----------
  const handleSaveProfile = async () => {
    try {
      if (!user?.id) { alert("Erreur : utilisateur non défini"); return; }
      const formData = new FormData();
      formData.append("name", firstName);
      formData.append("last_name", lastName);
      formData.append("birthDate", birthDate);
      formData.append("lastTitle", lastTitle);
      if (photoFile) formData.append("photo", photoFile);
      const data = await updateUser(user.id, formData);
      setUser(data);
      setEditProfile(false);
      alert("Profil mis à jour !");
    } catch (err) { console.error(err); alert("Erreur lors de la mise à jour du profil"); }
  };

  const handleSaveSummary = async () => {
    try {
      if (!user?.id) { alert("Erreur : utilisateur non défini"); return; }
      const data = await updateUserSummary(user.id, summary);
      setSummary(data.summary);
      setEditSummary(false);
      alert("Résumé mis à jour !");
    } catch (err) { console.error(err); alert("Erreur lors de la mise à jour du résumé"); }
  };

  const handleSaveDiploma = async (index?: number) => {
    const updatedDiplomas = [...diplomas];
    if (index !== undefined && index >= 0) updatedDiplomas[index] = newDiploma;
    else updatedDiplomas.push(newDiploma);

    try {
      if (!user?.id) { alert("Erreur : utilisateur non défini"); return; }
      const data = await updateDiplomas(user.id, updatedDiplomas);
      const diplomasArray = Array.isArray(data) ? data : updatedDiplomas;
      setDiplomas(diplomasArray);
      setUser(prev => (prev ? { ...prev, diplomas: diplomasArray } : null));
      setEditingDiplomaIndex(null);
      setNewDiploma({ level: "", year: "", university: "" });
      setUnivQuery("");
    } catch (err) { console.error(err); }
  };

  const handleSaveExperience = async (index?: number) => {
    const updatedExps = [...experiences];
    if (index !== undefined && index >= 0) updatedExps[index] = newExp;
    else updatedExps.push(newExp);

    try {
      if (!user?.id) { alert("Erreur : utilisateur non défini"); return; }
      const data = await updateExperiences(user.id, updatedExps);
      const expsArray = Array.isArray(data) ? data : updatedExps;
      setExperiences(expsArray);
      setUser(prev => (prev ? { ...prev, experiences: expsArray } : null));
      setEditingExpIndex(null);
      setNewExp({ title: "", company: "", startDate: "", endDate: "", description: "" });
    } catch (err) { console.error(err); }
  };

  const handleSaveLanguages = async () => {
  console.log("clicked save languages", newLang, languages);
  if (!user?.id) return;

  try {
    // Envoie tout le tableau languages vers le backend
    const data = await updateUserLanguages(user.id, languages);
    console.log("response from backend:", data);

    // Met à jour le state avec la valeur renvoyée par le backend
    setLanguages(Array.isArray(data.languages) ? data.languages : languages);

    setNewLang("");      // vide l'input
    setEditingLang(false); // ferme l'input
  } catch (err) {
    console.error(err);
    alert("Erreur lors de la sauvegarde de la langue");
  }
};




  const handleSaveSkills = async () => {
  if (!user?.id) return;

  try {
    // Envoie tout le tableau skills au backend
    const data = await updateUserSkills(user.id, skills);
    console.log("response from backend:", data);

    // Met à jour le state avec la valeur renvoyée par le backend
    setSkills(Array.isArray(data.skills) ? data.skills : skills);

    setNewSkill("");      // vide l'input
    setEditingSkill(false); // ferme l'input
  } catch (err) {
    console.error(err);
    alert("Erreur lors de la sauvegarde des compétences");
  }
};


  if (!user) return <p>Chargement...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded shadow p-6 space-y-8">
        
        {/* PROFIL */}
        
        {/* ton JSX du profil, résumé, diplômes et expériences reste inchangé */}
 {/* PROFIL */}
        <div className="flex items-start space-x-10">
          <div>
            <img
              src={user?.photo ? `http://localhost:5000/uploads/${user.photo}` : "/default-avatar.png"}
              alt="Photo profil"
              className="w-40 h-40 rounded-full border object-cover"
            />
            {editProfile && (
              <input
                type="file"
                accept="image/*"
                onChange={(e) => e.target.files && setPhotoFile(e.target.files[0])}
                className="mt-2"
              />
            )}
          </div>
          <div className="flex-1 space-y-3 text-lg">
            {editProfile ? (
              <>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Prénom" className="border p-2 w-full rounded" />
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Nom" className="border p-2 w-full rounded" />
                <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className="border p-2 w-full rounded" />
                <input value={lastTitle} onChange={(e) => setLastTitle(e.target.value)} placeholder="Dernier poste" className="border p-2 w-full rounded" />
                <div className="flex gap-2 mt-2">
                  <button onClick={handleSaveProfile} className="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800">Sauvegarder</button>
                  <button onClick={() => setEditProfile(false)} className="bg-gray-300 px-4 py-2 rounded">Annuler</button>
                </div>
              </>
            ) : (
              <>
                <p><span className="font-bold">Prénom :</span> {firstName}</p>
                <p><span className="font-bold">Nom :</span> {lastName}</p>
                <p><span className="font-bold">Date de naissance :</span> {birthDate}</p>
                <p><span className="font-bold">Dernier poste :</span> {lastTitle}</p>
                <button onClick={() => setEditProfile(true)} className="bg-gray-200 px-1 py-1 rounded hover:bg-gray-300 ml-4">Modifier</button>
              </>
            )}
          </div>
        </div>

        {/* RÉSUMÉ */}
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">📝 Résumé</h2>
          {editSummary ? (
            <div className="flex flex-col gap-2">
              <textarea value={summary} onChange={e => setSummary(e.target.value)} className="border p-2 rounded w-full h-32" placeholder="Écrire le résumé du candidat..." />
              <div className="flex gap-2">
                <button onClick={handleSaveSummary} className="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800">Sauvegarder</button>
                <button onClick={() => setEditSummary(false)} className="bg-gray-300 px-3 py-1 rounded">Annuler</button>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-start">
              <p>{summary || "Aucun résumé ajouté."}</p>
              <button onClick={() => setEditSummary(true)} className="bg-gray-200 px-1 py-1 rounded hover:bg-gray-300 ml-4">Modifier</button>
            </div>
          )}
        </div>
{/* FORMATIONS */}
<div className="p-4 bg-green-50 rounded-lg shadow-sm">
  <h2 className="text-xl font-semibold text-green-700 mb-4">🎓 Formations</h2>
  <div className="space-y-4">
    {/* Diplômes existants */}
    {diplomas.map((d, idx) => (
      <div key={idx} className="p-4 bg-green-100 rounded-lg flex justify-between items-start">
        {editingDiplomaIndex === idx ? (
          <div className="flex flex-col gap-2 w-full">
            <input
              value={newDiploma.level}
              onChange={e => setNewDiploma({ ...newDiploma, level: e.target.value })}
              placeholder="Diplôme"
              className="border p-2 rounded w-full"
            />
            <input
              type="date"
              value={newDiploma.year}
              onChange={e => setNewDiploma({ ...newDiploma, year: e.target.value })}
              className="border p-2 rounded w-full"
            />
            <div className="relative w-full">
              <input
                value={newDiploma.university}
                onChange={e => {
                  setNewDiploma({ ...newDiploma, university: e.target.value });
                  setUnivQuery(e.target.value);
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
                        setFilteredUniversities([]);
                      }}
                    >
                      {u.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleSaveDiploma(idx)}
                className="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800"
              >
                Sauvegarder
              </button>
              <button
                onClick={() => setEditingDiplomaIndex(null)}
                className="bg-gray-300 px-3 py-1 rounded"
              >
                Annuler
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-between w-full items-start">
            <div>
              <p className="font-bold text-green-800">{d.level}</p>
              <p className="text-gray-600">{d.university}, {d.year}</p>
            </div>
            <button
              onClick={() => { setEditingDiplomaIndex(idx); setNewDiploma(d); }}
              className="bg-gray-200 px-1 py-1 rounded hover:bg-gray-300"
            >
              Modifier
            </button>
          </div>
        )}
      </div>
    ))}

    {/* Ajouter un nouveau diplôme */}
    {editingDiplomaIndex === -1 ? (
      <div className="flex flex-col gap-2 p-4 bg-green-100 rounded-lg">
        <input
          value={newDiploma.level}
          onChange={e => setNewDiploma({ ...newDiploma, level: e.target.value })}
          placeholder="Diplôme"
          className="border p-2 rounded w-full"
        />
        <input
          type="date"
          value={newDiploma.year}
          onChange={e => setNewDiploma({ ...newDiploma, year: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <div className="relative w-full">
          <input
            value={newDiploma.university}
            onChange={e => {
              setNewDiploma({ ...newDiploma, university: e.target.value });
              setUnivQuery(e.target.value);
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
                    setFilteredUniversities([]);
                  }}
                >
                  {u.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => handleSaveDiploma()}
            className="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800"
          >
            Sauvegarder
          </button>
          <button
            onClick={() => setEditingDiplomaIndex(null)}
            className="bg-gray-300 px-3 py-1 rounded"
          >
            Annuler
          </button>
        </div>
      </div>
    ) : (
      <button
        onClick={() => {
          setEditingDiplomaIndex(-1);
          setNewDiploma({ level: "", year: "", university: "" });
          setUnivQuery("");
        }}
        className="mt-2 bg-green-600 text-white px-2 py-1 text-sm rounded hover:bg-green-700"
      >
        ➕ Ajouter un diplôme
      </button>
    )}
  </div>
</div>


        {/* EXPÉRIENCES PROFESSIONNELLES */}
<div className="mb-8 p-4 bg-blue-50 rounded-lg shadow-sm relative">
  <h2 className="text-xl font-semibold text-blue-700 mb-4">💼 Expériences professionnelles</h2>

  <div className="space-y-4">
    {experiences.map((exp, idx) => (
      <div key={idx} className="p-4 bg-blue-100 rounded-lg">
        {editingExpIndex === idx ? (
          <div className="flex flex-col gap-2 w-full">
            <input
              className="border p-2 rounded w-full"
              value={newExp.title}
              onChange={(e) => setNewExp({ ...newExp, title: e.target.value })}
              placeholder="Poste"
            />
            <input
              className="border p-2 rounded w-full"
              value={newExp.company}
              onChange={(e) => setNewExp({ ...newExp, company: e.target.value })}
              placeholder="Entreprise"
            />
            <input
              type="date"
              className="border p-2 rounded w-full"
              value={newExp.startDate}
              onChange={(e) => setNewExp({ ...newExp, startDate: e.target.value })}
            />
            <input
              type="date"
              className="border p-2 rounded w-full"
              value={newExp.endDate}
              onChange={(e) => setNewExp({ ...newExp, endDate: e.target.value })}
            />
            <textarea
              className="border p-2 rounded w-full h-24"
              value={newExp.description}
              onChange={(e) => setNewExp({ ...newExp, description: e.target.value })}
              placeholder="Description"
            />
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleSaveExperience(idx)}
                className="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800"
              >
                Sauvegarder
              </button>
              <button
                onClick={() => setEditingExpIndex(null)}
                className="bg-gray-300 px-3 py-1 rounded"
              >
                Annuler
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-1">
            <p className="font-bold text-blue-800">{exp.title}</p>
            <p className="text-gray-600">
              {exp.company} | {exp.startDate} — {exp.endDate || "Aujourd'hui"}
            </p>
            <p className="text-gray-600">{exp.description}</p>
            {/* Modifier button below, aligned right */}
            <div className="flex justify-end mt-2">
              <button
                onClick={() => { setEditingExpIndex(idx); setNewExp(exp); }}
                className="bg-gray-200 px-1 py-1 rounded hover:bg-gray-300 ml-4"
              >
                Modifier
              </button>
            </div>
          </div>
        )}
      </div>
    ))}

    {/* Ajouter nouvelle expérience */}
    {editingExpIndex === -1 ? (
      <div className="flex flex-col gap-2 mt-2 bg-blue-100 p-4 rounded-lg">
        <input
          className="border p-2 rounded w-full"
          value={newExp.title}
          onChange={(e) => setNewExp({ ...newExp, title: e.target.value })}
          placeholder="Poste"
        />
        <input
          className="border p-2 rounded w-full"
          value={newExp.company}
          onChange={(e) => setNewExp({ ...newExp, company: e.target.value })}
          placeholder="Entreprise"
        />
        <input
          type="date"
          className="border p-2 rounded w-full"
          value={newExp.startDate}
          onChange={(e) => setNewExp({ ...newExp, startDate: e.target.value })}
        />
        <input
          type="date"
          className="border p-2 rounded w-full"
          value={newExp.endDate}
          onChange={(e) => setNewExp({ ...newExp, endDate: e.target.value })}
        />
        <textarea
          className="border p-2 rounded w-full h-24"
          value={newExp.description}
          onChange={(e) => setNewExp({ ...newExp, description: e.target.value })}
          placeholder="Description"
        />
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => handleSaveExperience()}
            className="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800"
          >
            Sauvegarder
          </button>
          <button
            onClick={() => setEditingExpIndex(null)}
            className="bg-gray-300 px-3 py-1 rounded"
          >
            Annuler
          </button>
        </div>
      </div>
    ) : (
      <button
        onClick={() => { setEditingExpIndex(-1); setNewExp({ title: "", company: "", startDate: "", endDate: "", description: "" }); }}
        className="mt-2 bg-green-600 text-white px-2 py-1 text-sm rounded hover:bg-green-700"
      >
        ➕ Ajouter une expérience
      </button>
    )}
  </div>
</div>

        {/* LANGUES */}
<div className="p-4 bg-blue-50 rounded-lg shadow-sm">
  <h2 className="text-xl font-semibold text-blue-700 mb-4">🗣️ Langues parlées</h2>
  <div className="flex flex-wrap gap-2 mb-2">
    {languages.map((lang, idx) => (
      <span key={idx} className="bg-blue-200 px-3 py-1 rounded flex items-center gap-1">
        {lang}
        <button
          onClick={() => setLanguages(languages.filter(l => l !== lang))}
          className="text-red-500 font-bold"
        >
          ×
        </button>
      </span>
    ))}
  </div>

  {!editingLang && (
    <button
      onClick={() => setEditingLang(true)}
      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
    >
      ➕ Ajouter langue
    </button>
  )}

  {editingLang && (
  <div className="relative mt-2">
    <input
      value={newLang}
      onChange={e => setNewLang(e.target.value)}
      placeholder="Nouvelle langue"
      className="border p-2 rounded w-full"
    />
    {newLang && filteredLanguages.length > 0 && (
      <ul className="absolute z-10 bg-white border mt-1 max-h-40 overflow-auto rounded shadow w-full">
        {filteredLanguages.map(lang => (
          <li
            key={lang}
            className="p-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => {
              if (!languages.includes(lang)) setLanguages([...languages, lang]);
              setNewLang("");
            }}
          >
            {lang}
          </li>
        ))}
      </ul>
    )}
    <div className="flex gap-2 mt-2">
      <button onClick={handleSaveLanguages} className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-800">
        Sauvegarder
      </button>
      <button onClick={() => { setEditingLang(false); setNewLang(""); }} className="bg-gray-300 px-3 py-1 rounded">
        Annuler
      </button>
    </div>
  </div>
)}

</div>

{/* COMPÉTENCES */}
<div className="p-4 bg-purple-50 rounded-lg shadow-sm">
  <h2 className="text-xl font-semibold text-purple-700 mb-4">💻 Compétences</h2>
  <div className="flex flex-wrap gap-2 mb-2">
    {skills.map((skill, idx) => (
      <span key={idx} className="bg-purple-200 px-3 py-1 rounded flex items-center gap-1">
        {skill}
        <button
          onClick={() => setSkills(skills.filter(s => s !== skill))}
          className="text-red-500 font-bold"
        >
          ×
        </button>
      </span>
    ))}
  </div>

  {!editingSkill && (
    <button
      onClick={() => setEditingSkill(true)}
      className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
    >
      ➕ Ajouter compétence
    </button>
  )}

  {editingSkill && (
  <div className="relative mt-2">
    <input
      value={newSkill}
      onChange={e => setNewSkill(e.target.value)}
      placeholder="Nouvelle compétence"
      className="border p-2 rounded w-full"
    />
    {newSkill && filteredSkills.length > 0 && (
      <ul className="absolute z-10 bg-white border mt-1 max-h-40 overflow-auto rounded shadow w-full">
        {filteredSkills.map(skill => (
          <li
            key={skill}
            className="p-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => {
              if (!skills.includes(skill)) setSkills([...skills, skill]);
              setNewSkill("");
            }}
          >
            {skill}
          </li>
        ))}
      </ul>
    )}
    <div className="flex gap-2 mt-2">
      <button onClick={handleSaveSkills} className="bg-purple-700 text-white px-3 py-1 rounded hover:bg-purple-800">
        Sauvegarder
      </button>
      <button onClick={() => { setEditingSkill(false); setNewSkill(""); }} className="bg-gray-300 px-3 py-1 rounded">
        Annuler
      </button>
    </div>
    
  </div>
  
)}


</div>

<div className="max-w-5xl mx-auto bg-white rounded shadow p-6 space-y-8 relative">
  {/* tout ton contenu existant ... */}

  {/* BOUTON TÉLÉCHARGER CV */}
  <button
    onClick={handleDownloadPDF}
    className="absolute bottom-6 right-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
  >
    Télécharger CV
  </button>
</div>

      
      
      
      
      
      </div>
      
    </div>
    
  );
  
}
