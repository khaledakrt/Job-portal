export type Diploma = {
  id?: number;
  level: string;
  year: string;
  university: string;
};

export type Experience = {
  id?: number;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description?: string;
};

export type User = {
  id: number;
  name: string;
  last_name: string;
  birthDate: string;
  lastTitle: string;
  photo?: string;
  diplomas: Diploma[];
  experiences: Experience[];
};

export type University = {
  id: number;
  name: string;
};
