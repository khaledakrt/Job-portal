import mysql from "mysql2/promise";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export const loginUser = async (email: string, password: string) => {
  const connection = await mysql.createConnection(dbConfig);
  const [rows]: any = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
  await connection.end();

  if (rows.length === 0) {
    const err: any = new Error("Utilisateur non trouvé");
    err.status = 401;
    throw err;
  }

  const user = rows[0];
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    const err: any = new Error("Mot de passe incorrect");
    err.status = 401;
    throw err;
  }

  const { password: _, ...userData } = user;
  return userData;
};
