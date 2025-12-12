import { Router } from "express";
import multer from "multer";
import {
  getUserProfile,
  updateUserProfile,
  addDiploma,
  addExperience,
  updateAllDiplomas,
  updateAllExperiences
} from "../controllers/userController";

const router = Router();

// Upload photo
const upload = multer({ dest: "uploads/" });

// ---------------- ROUTES ----------------
router.get("/:id", getUserProfile);

router.put("/:id", upload.single("photo"), updateUserProfile);

router.post("/:id/diploma", addDiploma);

router.post("/:id/experience", addExperience);

router.put("/:id/diplomas", updateAllDiplomas);

router.put("/:id/experiences", updateAllExperiences);

export default router;
