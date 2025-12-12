export interface Experience {
  id?: number;
  userId: number;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description?: string;
}