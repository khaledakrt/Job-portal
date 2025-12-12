import { Router } from "express";
import { db } from "../index"; // connexion à la DB
import multer from "multer";

// types pour les diplômes et expériences
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

// Multer config pour upload photo
const upload = multer({
  dest: "uploads/", // dossier temporaire
});

const router = Router();

// ---------------------------------------------------------
// 1️⃣ Récupérer profil complet
// ---------------------------------------------------------
router.get("/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    // Infos de base du user
    const [userRows]: any = await db.query(
      "SELECT id, name, last_name, birthDate, photo FROM users WHERE id = ?",
      [userId]
    );

    if (!userRows.length)
      return res.status(404).json({ message: "User not found" });

    const user = userRows[0];

    // Dernier poste
    const [lastExp]: any = await db.query(
      `SELECT title FROM experiences WHERE userId = ? ORDER BY endDate DESC, startDate DESC LIMIT 1`,
      [userId]
    );

    // Diplômes et expériences
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
});

// ---------------------------------------------------------
// 2️⃣ Mettre à jour infos personnelles + photo
// ---------------------------------------------------------
router.put("/:id", upload.single("photo"), async (req, res) => {
  const userId = req.params.id;
  const { name, last_name, birthDate, lastTitle } = req.body;
  const photoFile = req.file?.filename;

  if (!req.body) {
    return res.status(400).json({ message: "Données manquantes" });
  }

  try {
    // Mettre à jour l'utilisateur
    await db.query(
      `UPDATE users SET 
        name = ?, 
        last_name = ?, 
        birthDate = ?, 
        photo = COALESCE(?, photo),
        lastTitle = ?
       WHERE id = ?`,
      [name, last_name, birthDate, photoFile, lastTitle, userId]
    );

    // 🔹 Récupérer le profil complet après mise à jour
    const [userRows]: any = await db.query(
      "SELECT id, name, last_name, birthDate, photo FROM users WHERE id = ?",
      [userId]
    );
    const user = userRows[0];

    const [lastExp]: any = await db.query(
      `SELECT title FROM experiences WHERE userId = ? ORDER BY endDate DESC, startDate DESC LIMIT 1`,
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
});


// ---------------------------------------------------------
// 3️⃣ Ajouter un diplôme
// ---------------------------------------------------------
router.post("/:id/diploma", async (req, res) => {
  const userId = req.params.id;
  const { level, year, university } = req.body;

  if (!level || !year || !university) {
    return res.status(400).json({ message: "Données de diplôme manquantes" });
  }

  try {
    await db.query(
      "INSERT INTO diplomas (userId, level, year, university) VALUES (?, ?, ?, ?)",
      [userId, level, year, university]
    );
    res.json({ message: "Diplôme ajouté" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

// ---------------------------------------------------------
// 4️⃣ Ajouter une expérience
// ---------------------------------------------------------
router.post("/:id/experience", async (req, res) => {
  const userId = req.params.id;
  const { title, company, startDate, endDate, description } = req.body;

  if (!title || !company || !startDate) {
    return res
      .status(400)
      .json({ message: "Données d'expérience manquantes" });
  }

  try {
    await db.query(
      `
      INSERT INTO experiences 
      (userId, title, company, startDate, endDate, description)
      VALUES (?, ?, ?, ?, ?, ?)
      `,
      [userId, title, company, startDate, endDate || null, description || null]
    );
    res.json({ message: "Expérience ajoutée" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

// ---------------------------------------------------------
// 5️⃣ Mettre à jour tous les diplômes
// ---------------------------------------------------------
router.put("/:id/diplomas", async (req, res) => {
  const userId = req.params.id;
  const diplomas: Diploma[] = req.body;

  if (!Array.isArray(diplomas)) {
    return res.status(400).json({ message: "Données invalides" });
  }

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
});

// ---------------------------------------------------------
// 6️⃣ Mettre à jour toutes les expériences
// ---------------------------------------------------------
router.put("/:id/experiences", async (req, res) => {
  const userId = req.params.id;
  const experiences: Experience[] = req.body;

  if (!Array.isArray(experiences)) {
    return res.status(400).json({ message: "Données invalides" });
  }

  try {
    await db.query("DELETE FROM experiences WHERE userId = ?", [userId]);

    for (const e of experiences) {
      await db.query(
        `
        INSERT INTO experiences 
        (userId, title, company, startDate, endDate, description)
        VALUES (?, ?, ?, ?, ?, ?)
        `,
        [userId, e.title, e.company, e.startDate, e.endDate || null, e.description || null]
      );
    }

    res.json({ message: "Expériences mises à jour" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

export default router;
