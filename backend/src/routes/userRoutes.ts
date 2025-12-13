import { Router } from "express";
import multer from "multer";
import {
  getUserProfile,
  updateUserProfile,
  addDiploma,
  addExperience,
  updateAllDiplomas,
  updateAllExperiences,
  updateUserLanguages,
  updateUserSkills
} from "../controllers/userController";
import { db } from "../index";

const router = Router();

// Upload photo
const upload = multer({ dest: "uploads/" });

// --------------------------------------------------
// ROUTES
// --------------------------------------------------

// 1️⃣ Profil utilisateur
router.get("/:id", getUserProfile);

// 2️⃣ 🔴 UPDATE SUMMARY (DOIT ÊTRE AVANT /:id)
router.put("/:id/summary", async (req, res) => {
  const userId = req.params.id;
  const { summary } = req.body;

  if (!summary) {
    return res.status(400).json({ message: "Summary required" });
  }

  try {
    await db.query(
      "UPDATE users SET summary = ? WHERE id = ?",
      [summary, userId]
    );

    res.json({ summary });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

// LANGUES
router.put("/:id/languages", updateUserLanguages);

// COMPÉTENCES
router.put("/:id/skills", updateUserSkills);


// 3️⃣ Diplômes
router.post("/:id/diploma", addDiploma);
router.put("/:id/diplomas", updateAllDiplomas);

// 4️⃣ Expériences
router.post("/:id/experience", addExperience);
router.put("/:id/experiences", updateAllExperiences);

// LANGUES (avant PUT /:id)
router.put("/:id/languages", async (req, res) => {
  const userId = req.params.id;
  const { languages } = req.body;

  if (!languages) {
    return res.status(400).json({ message: "Languages required" });
  }

  try {
    await db.query(
      "UPDATE users SET languages = ? WHERE id = ?",
      [JSON.stringify(languages), userId]  // stocker en JSON
    );
    res.json({ languages });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

// COMPÉTENCES (avant PUT /:id)
router.put("/:id/skills", async (req, res) => {
  const userId = req.params.id;
  const { skills } = req.body;

  if (!skills) {
    return res.status(400).json({ message: "Skills required" });
  }

  try {
    await db.query(
      "UPDATE users SET skills = ? WHERE id = ?",
      [JSON.stringify(skills), userId]  // stocker en JSON
    );
    res.json({ skills });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});


// 5️⃣ 🔴 UPDATE USER (TOUJOURS À LA FIN)
router.put("/:id", upload.single("photo"), updateUserProfile);

export default router;
