export interface Recruiter {
  id?: number;
  company_name: string;
  email: string;
  password?: string;
  address?: string;
  phone_number?: string;   // nom exact de la DB
  role?: 'recruiter';
  logo?: string;
  sector?: string;
  employees?: number;
  description?: string;
  created_at?: string;
  updated_at?: string;
}
