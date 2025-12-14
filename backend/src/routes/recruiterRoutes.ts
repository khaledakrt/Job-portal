import express from "express";
import { registerRecruiter } from "../controllers/registerRecruiterController";
import { loginRecruiter } from "../controllers/loginRecruiterController";
import { getProfile } from "../controllers/recruiterController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/register", registerRecruiter);
router.post("/login", loginRecruiter);

// ✅ nouvelle route pour récupérer le profil du recruteur
router.get("/profile", authMiddleware, getProfile);

export default router;
