export interface User {
  id?: number;
  name: string;
  last_name?: string;
  birthDate?: string;  // YYYY-MM-DD
  photo?: string;      // juste le nom ou chemin du fichier
  lastTitle?: string;
  email: string;
  password: string;
  role: 'candidate' | 'recruiter';
  created_at?: string;
  languages?: string[];
  summary: string;

}
