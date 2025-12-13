import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import jobsRouter from './routes/jobs';
import authRouter from './routes/authRoutes';
import userRouter from './routes/userRoutes';
import universitiesRouter from './routes/universitiesRouter';
import path from 'path';
import multer from 'multer';
import registerRouter from "./routes/registerRoutes";
import choiceRoute from "./routes/choiceRoute";
import { updateUserLanguages } from "./controllers/userController";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 📌 Servir les fichiers uploadés
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Connexion à la DB
export const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'job_portal',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  dateStrings: true,
});

// 📌 Config Multer pour l'upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '../uploads')),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  },
});
const upload = multer({ storage });

// Routes existantes
app.use('/api/jobs', jobsRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

app.use("/api/register", registerRouter);
app.use('/api/user', userRouter);
app.use('/api/universities', universitiesRouter);

// 📌 Route pour uploader la photo d'un utilisateur
app.post('/api/user/:id/photo', upload.single('photo'), async (req, res) => {
  try {
    const userId = req.params.id;
    const file = req.file;

    if (!file) return res.status(400).json({ message: 'Aucun fichier uploadé' });

    // Mettre à jour la DB avec le nom du fichier
    await db.execute('UPDATE users SET photo = ? WHERE id = ?', [file.filename, userId]);

    res.json({ message: 'Photo uploadée avec succès', filename: file.filename });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// 📌 Route pour récupérer un utilisateur par id
app.get('/api/user/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [userId]);
    res.json((rows as any)[0] || null);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});
// Route choices
app.use("/api/choices", choiceRoute);
app.put("/users/:id/languages", updateUserLanguages);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
