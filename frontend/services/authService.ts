// services/authService.ts
export interface RegisterData {
  name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
  birthDate?: string;
  lastTitle?: string;
}

export const registerUser = async (data: RegisterData) => {
  const res = await fetch('http://localhost:5000/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  if (!res.ok) throw new Error(result.message);
  return result;
};

import { LoginData, UserData } from '../types/auth';

export const loginUser = async (data: LoginData): Promise<UserData> => {
  const res = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) throw new Error(result.message || 'Email ou mot de passe incorrect');

  return result;
};
