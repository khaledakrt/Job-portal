import { Request, Response } from "express";
import mysql from "mysql2/promise";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const loginRecruiter = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email et mot de passe requis" });
  }

  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [rows]: any = await connection.execute(
      `SELECT * FROM recruiters WHERE email = ?`,
      [email]
    );

    await connection.end();

    if (rows.length === 0) {
      return res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }

    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }

    // Ici tu peux générer un token JWT si besoin
    return res.json({
      message: "Connexion réussie",
      user: {
        id: user.id,
        company_name: user.company_name,
        email: user.email,
        address: user.address,
        phoneNumber: user.phone_number,
      },
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
};
