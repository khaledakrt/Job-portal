import { Request, Response } from "express";
import { db } from "../index";

// Récupérer toutes les langues
export const getLanguages = async (req: Request, res: Response) => {
  try {
    const [rows]: any = await db.query("SELECT * FROM languages ORDER BY name");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Récupérer toutes les compétences
export const getSkills = async (req: Request, res: Response) => {
  try {
    const [rows]: any = await db.query("SELECT * FROM skills ORDER BY name");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
