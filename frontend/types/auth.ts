// types/auth.ts
export interface RegisterData {
  name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
  birthDate?: string;
  lastTitle?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface UserData {
  id: string;
  name?: string;
  birthDate?: string;
  photo?: string;
  education?: string;
  experiences?: any[];
}
