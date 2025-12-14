import { Request, Response } from 'express';
import { db } from '../db';

export const getProfile = async (req: any, res: Response) => {
  try {
    const recruiterId = req.user?.id; // rempli par ton middleware auth
    if (!recruiterId) return res.status(401).json({ message: 'Non autorisé' });

    const [rows] = await db.query('SELECT * FROM recruiters WHERE id = ?', [recruiterId]);
    const recruiterData = (rows as any[])[0];

    if (!recruiterData) return res.status(404).json({ message: 'Recruteur non trouvé' });

    // renvoie directement les données récupérées
    res.json(recruiterData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};
