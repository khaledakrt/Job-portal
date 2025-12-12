import { Request, Response } from 'express';
import { db } from '../db';

export const getAllDiploma = async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query('SELECT * FROM diplomas');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
};
