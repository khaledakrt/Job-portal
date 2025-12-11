import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // charge les variables du .env

export const db = mysql.createPool({
  host: process.env.DB_HOST,      // depuis ton .env
  user: process.env.DB_USER,      // depuis ton .env
  password: process.env.DB_PASSWORD, // depuis ton .env
  database: process.env.DB_NAME,  // depuis ton .env
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
