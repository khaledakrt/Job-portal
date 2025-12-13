const API_URL = "http://localhost:5000/api/choices";

/* ---------------------------------------------------------
   Fonction : getLanguages
   Récupère toutes les langues depuis l'API
--------------------------------------------------------- */
export const getLanguages = async (): Promise<{ id: number; name: string }[]> => {
  const res = await fetch(`${API_URL}/languages`);
  if (!res.ok) throw new Error("Erreur récupération des langues");
  return res.json();
};

/* ---------------------------------------------------------
   Fonction : getSkills
   Récupère toutes les compétences depuis l'API
--------------------------------------------------------- */
export const getSkills = async (): Promise<{ id: number; name: string }[]> => {
  const res = await fetch(`${API_URL}/skills`);
  if (!res.ok) throw new Error("Erreur récupération des compétences");
  return res.json();
};
