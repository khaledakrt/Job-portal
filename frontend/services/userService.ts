import { User, Diploma, Experience } from "../types/user";
import axios from "axios";

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
export const updateUserSummary = async (
  id: number,
  summary: string
): Promise<{ summary: string }> => {
  const res = await fetch(`${API_URL}/user/${id}/summary`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ summary }),
  });

  if (!res.ok) throw new Error("Erreur mise à jour résumé");
  return res.json();
};

// Mettre à jour les langues
export const updateUserLanguages = async (id: number, languages: string[]): Promise<User> => {
  const res = await fetch(`${API_URL}/user/${id}/languages`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ languages }),
  });
  if (!res.ok) throw new Error("Erreur mise à jour langues");
  return res.json();
};

// Mettre à jour les compétences
export const updateUserSkills = async (id: number, skills: string[]): Promise<User> => {
  const res = await fetch(`${API_URL}/user/${id}/skills`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ skills }),
  });
  if (!res.ok) throw new Error("Erreur mise à jour compétences");
  return res.json();
};

// frontend/services/userService.ts
const API_CHOICES_URL = "http://localhost:5000/api/choices";

// Récupérer toutes les langues depuis la DB MySQL
export const getLanguagesFromDB = async (): Promise<string[]> => {
  try {
    const res = await fetch(`${API_CHOICES_URL}/languages`);
    if (!res.ok) throw new Error("Erreur récupération des langues");
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

// Récupérer toutes les compétences depuis la DB MySQL
export const getSkillsFromDB = async (): Promise<string[]> => {
  try {
    const res = await fetch(`${API_CHOICES_URL}/skills`);
    if (!res.ok) throw new Error("Erreur récupération des compétences");
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};