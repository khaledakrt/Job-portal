// registerRecruiterController.ts
import { Request, Response } from "express";
import mysql from "mysql2/promise";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const registerRecruiter = async (req: Request, res: Response) => {
  const { company_name, email, password, address, phoneNumber } = req.body;

  if (!company_name || !email || !password || !address || !phoneNumber) {
    return res.status(400).json({ message: "Tous les champs sont requis" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    await connection.execute(
      `INSERT INTO recruiters (company_name, email, password, address, phone_number, role)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [company_name, email, hashedPassword, address, phoneNumber, "recruiter"]
    );

    await connection.end();

    return res.json({ message: "Recruteur créé avec succès" });
  } catch (error: any) {
    console.error(error);

    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ message: "Email déjà utilisé" });
    }

    return res.status(500).json({ message: "Erreur serveur" });
  }
};
