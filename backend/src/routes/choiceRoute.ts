// backend/src/routes/choiceRoute.ts
import { Router } from "express";
import { db } from "../db";

const router = Router();

// Récupérer toutes les langues
router.get("/languages", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT name FROM languages"); // table languages
    const languages = (rows as any[]).map(r => r.name);
    res.json(languages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur récupération langues" });
  }
});

// Récupérer toutes les compétences
router.get("/skills", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT name FROM skills"); // table skills
    const skills = (rows as any[]).map(r => r.name);
    res.json(skills);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur récupération compétences" });
  }
});

export default router;
