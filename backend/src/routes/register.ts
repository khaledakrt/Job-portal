// Route POST /api/register
import { Router, Request, Response } from 'express';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const router = Router();

// Route POST /api/register
router.post('/', async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  try {
    console.log('Données reçues pour inscription:', req.body);

    const hashedPassword = await bcrypt.hash(password, 10);

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    await connection.execute(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, hashedPassword, role || 'candidate']
    );

    await connection.end();
    res.json({ message: 'Utilisateur créé avec succès' });
  } catch (error: any) {
    console.error('Erreur backend:', error);
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ message: 'Email déjà utilisé' });
    }
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

export default router;
