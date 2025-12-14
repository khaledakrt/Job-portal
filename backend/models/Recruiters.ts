export interface Recruiter {
  id?: number;
  company_name: string;
  email: string;
  password?: string;
  address?: string;
  phoneNumber?: string;
  role?: 'recruiter';
  logo?: string;
  sector?: string;
  employees?: number;
  description?: string;
  created_at?: string;
  updated_at?: string;
}
