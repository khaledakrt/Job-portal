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
import { Router } from 'express';
import { db } from '../db'; // ta connexion à la DB

const router = Router();

// 1️⃣ Récupérer profil complet
router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const [userRows]: any = await db.query('SELECT * FROM users WHERE id = ?', [userId]);
    if (!userRows.length) return res.status(404).json({ message: 'User not found' });

    const [diplomas]: any = await db.query('SELECT * FROM diplomas WHERE userId = ?', [userId]);
    const [experiences]: any = await db.query('SELECT * FROM experiences WHERE userId = ?', [userId]);

    res.json({ ...userRows[0], diplomas, experiences });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

// 2️⃣ Mettre à jour infos personnelles
router.put('/:id', async (req, res) => {
  const userId = req.params.id;
  const { name, last_name, birthDate, photo, lastTitle } = req.body;
  try {
    await db.query(
      'UPDATE users SET name = ?, last_name = ?, birthDate = ?, photo = ?, lastTitle = ? WHERE id = ?',
      [name, last_name, birthDate, photo, lastTitle, userId]
    );
    res.json({ message: 'Profil mis à jour' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

// 3️⃣ Ajouter un diplôme
router.post('/:id/diploma', async (req, res) => {
  const userId = req.params.id;
  const { level, year, university } = req.body;
  try {
    await db.query(
      'INSERT INTO diplomas (userId, level, year, university) VALUES (?, ?, ?, ?)',
      [userId, level, year, university]
    );
    res.json({ message: 'Diplôme ajouté' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

// 4️⃣ Ajouter une expérience
router.post('/:id/experience', async (req, res) => {
  const userId = req.params.id;
  const { title, company, startDate, endDate, description } = req.body;
  try {
    await db.query(
      'INSERT INTO experiences (userId, title, company, startDate, endDate, description) VALUES (?, ?, ?, ?, ?, ?)',
      [userId, title, company, startDate, endDate, description]
    );
    res.json({ message: 'Expérience ajoutée' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

// 5️⃣ Récupérer universités
router.get('/universities/list', async (req, res) => {
  try {
    const [rows]: any = await db.query('SELECT * FROM universities');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});
// routes/user.ts

// Mettre à jour tous les diplômes
router.put('/:id/diplomas', async (req, res) => {
  const userId = req.params.id;
  const diplomas: Diploma[] = req.body; // [{level, year, university}, ...]

  try {
    // Supprimer les diplômes existants
    await db.query('DELETE FROM diplomas WHERE userId = ?', [userId]);

    // Insérer les nouveaux
    for (const d of diplomas) {
      await db.query(
        'INSERT INTO diplomas (userId, level, year, university) VALUES (?, ?, ?, ?)',
        [userId, d.level, d.year, d.university]
      );
    }
    res.json({ message: 'Diplômes mis à jour' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});
router.put('/:id/experiences', async (req, res) => {
  const userId = req.params.id;
  const experiences: Experience[] = req.body;

  try {
    await db.query('DELETE FROM experiences WHERE userId = ?', [userId]);

    for (const e of experiences) {
      await db.query(
        'INSERT INTO experiences (userId, title, company, startDate, endDate, description) VALUES (?, ?, ?, ?, ?, ?)',
        [userId, e.title, e.company, e.startDate, e.endDate, e.description]
      );
    }
    res.json({ message: 'Expériences mises à jour' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

export default router;
