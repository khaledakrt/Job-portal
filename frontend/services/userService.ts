import { User, Diploma, Experience } from "../types/user";

const API_URL = "http://localhost:5000/api";

export const getUserById = async (id: number): Promise<User> => {
  const res = await fetch(`${API_URL}/user/${id}`);
  if (!res.ok) throw new Error("Erreur chargement profil");
  return res.json();
};

export const updateUser = async (id: number, data: FormData): Promise<User> => {
  const res = await fetch(`${API_URL}/user/${id}`, {
    method: "PUT",
    body: data,
  });
  if (!res.ok) throw new Error("Erreur mise à jour");
  return res.json();
};

export const updateDiplomas = async (id: number, diplomas: Diploma[]) => {
  const res = await fetch(`${API_URL}/user/${id}/diplomas`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(diplomas),
  });
  if (!res.ok) throw new Error("Erreur update diplomas");
  return res.json();
};

export const updateExperiences = async (id: number, experiences: Experience[]) => {
  const res = await fetch(`${API_URL}/user/${id}/experiences`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(experiences),
  });
  if (!res.ok) throw new Error("Erreur update experiences");
  return res.json();
};

export const getUniversities = async () => {
  const res = await fetch(`${API_URL}/universities`);
  return res.json();
};


