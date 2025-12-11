import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import jobsRouter from './routes/jobs';
import authRouter from './routes/auth';
import registerRouter from './routes/register';
import userRouter from './routes/user';
import universitiesRouter from './routes/universities';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connexion à la DB
export const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'job_portal',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Routes
app.use('/api/jobs', jobsRouter);
app.use('/api/auth', authRouter);
app.use('/api/register', registerRouter);
app.use('/api/user', userRouter);           // ✅ une seule fois
app.use('/api/universities', universitiesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
