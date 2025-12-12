// routes/register.ts
import { Router, Request, Response } from 'express';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

// POST /api/register
router.post('/', async (req: Request, res: Response) => {
  const { name, last_name, email, password, role, birthDate, lastTitle } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'job_portal',
    });

    // ⚡ Ajout de birthDate et lastTitle dans l'insertion
    await connection.execute(
      `INSERT INTO users (name, last_name, email, password, role, birthDate, lastTitle)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, last_name || null, email, hashedPassword, role || 'candidate', birthDate || null, lastTitle || null]
    );

    await connection.end();

    res.json({ message: 'Utilisateur créé avec succès' });
  } catch (err: any) {
    console.error(err);
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ message: 'Email déjà utilisé' });
    }
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

export default router;
