export interface JobOffer {
  id: number;
  title: string;
  location: string;
  date: string;
  status?: string;        // Ajouté
  applications?: number;  // Ajouté
}