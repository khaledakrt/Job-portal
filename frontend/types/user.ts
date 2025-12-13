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


//export interface User {
  //id?: number;
 // name: string;
  //last_name?: string;
 // birthDate?: string;  // YYYY-MM-DD
 // photo?: string;      // juste le nom ou chemin du fichier
  //diplomas: Diploma[];
 // experiences: Experience[];
 // lastTitle?: string;
 // email: string;
 // password: string;
 // role: 'candidate' | 'recruiter';
 // created_at?: string;
 // summary?: string;     // ← ajouté
 // languages?: string[]; // ← ajouté
 // skills?: string[];    // ← ajouté
//};


export type University = {
  id: number;
  name: string;
};

export interface User {
  id?: number;
  name: string;
  last_name?: string;
  birthDate?: string;  // YYYY-MM-DD
  photo?: string;      // juste le nom ou chemin du fichier
  diplomas: Diploma[];
  experiences: Experience[];
  lastTitle?: string;
  email: string;
  password: string;
  role: 'candidate' | 'recruiter';
  created_at?: string;
  summary?: string;     // ← ajouté
  languages?: string[]; // ← ajouté
  skills?: string[];    // ← ajouté
}
