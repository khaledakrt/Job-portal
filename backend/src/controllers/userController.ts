import { Request, Response } from "express";
import { db } from "../index";

// Types internes
type Diploma = {
  level: string;
  year: string;
  university: string;
};

type Experience = {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description?: string;
};

// ---------------------------------------------------------
// 1️⃣ GET Profil complet
// ---------------------------------------------------------
export const getUserProfile = async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    const [userRows]: any = await db.query(
      "SELECT id, name, last_name, birthDate, photo FROM users WHERE id = ?",
      [userId]
    );

    if (!userRows.length)
      return res.status(404).json({ message: "User not found" });

    const user = userRows[0];

    const [lastExp]: any = await db.query(
      `SELECT title FROM experiences 
       WHERE userId = ? ORDER BY endDate DESC, startDate DESC LIMIT 1`,
      [userId]
    );

    const [diplomas]: any = await db.query(
      "SELECT * FROM diplomas WHERE userId = ?",
      [userId]
    );

    const [experiences]: any = await db.query(
      "SELECT * FROM experiences WHERE userId = ? ORDER BY startDate DESC",
      [userId]
    );

    res.json({
      ...user,
      photo: user.photo || null,
      lastTitle: lastExp.length ? lastExp[0].title : null,
      diplomas,
      experiences,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// ---------------------------------------------------------
// 2️⃣ UPDATE user + photo
// ---------------------------------------------------------
export const updateUserProfile = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const { name, last_name, birthDate, lastTitle } = req.body;
  const photo = req.file?.filename;

  try {
    await db.query(
      `UPDATE users SET 
        name = ?, 
        last_name = ?, 
        birthDate = ?, 
        photo = COALESCE(?, photo),
        lastTitle = ?
       WHERE id = ?`,
      [name, last_name, birthDate, photo, lastTitle, userId]
    );

    return getUserProfile(req, res);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// ---------------------------------------------------------
// 3️⃣ Ajouter diplôme
// ---------------------------------------------------------
export const addDiploma = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const { level, year, university } = req.body;

  if (!level || !year || !university)
    return res.status(400).json({ message: "Missing diploma data" });

  try {
    await db.query(
      "INSERT INTO diplomas (userId, level, year, university) VALUES (?, ?, ?, ?)",
      [userId, level, year, university]
    );

    res.json({ message: "Diplôme ajouté" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// ---------------------------------------------------------
// 4️⃣ Ajouter expérience
// ---------------------------------------------------------
export const addExperience = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const { title, company, startDate, endDate, description } = req.body;

  if (!title || !company || !startDate)
    return res.status(400).json({ message: "Missing experience data" });

  try {
    await db.query(
      `
      INSERT INTO experiences 
      (userId, title, company, startDate, endDate, description)
      VALUES (?, ?, ?, ?, ?, ?)`,
      [userId, title, company, startDate, endDate || null, description || null]
    );

    res.json({ message: "Expérience ajoutée" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// ---------------------------------------------------------
// 5️⃣ Update diplômes en masse
// ---------------------------------------------------------
export const updateAllDiplomas = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const diplomas: Diploma[] = req.body;

  if (!Array.isArray(diplomas))
    return res.status(400).json({ message: "Invalid data" });

  try {
    await db.query("DELETE FROM diplomas WHERE userId = ?", [userId]);

    for (const d of diplomas) {
      await db.query(
        "INSERT INTO diplomas (userId, level, year, university) VALUES (?, ?, ?, ?)",
        [userId, d.level, d.year, d.university]
      );
    }

    res.json({ message: "Diplômes mis à jour" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// ---------------------------------------------------------
// 6️⃣ Update expériences en masse
// ---------------------------------------------------------
export const updateAllExperiences = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const experiences: Experience[] = req.body;

  if (!Array.isArray(experiences))
    return res.status(400).json({ message: "Invalid data" });

  try {
    await db.query("DELETE FROM experiences WHERE userId = ?", [userId]);

    for (const e of experiences) {
      await db.query(
        `
        INSERT INTO experiences 
        (userId, title, company, startDate, endDate, description)
        VALUES (?, ?, ?, ?, ?, ?)`,
        [
          userId,
          e.title,
          e.company,
          e.startDate,
          e.endDate || null,
          e.description || null,
        ]
      );
    }

    res.json({ message: "Expériences mises à jour" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
