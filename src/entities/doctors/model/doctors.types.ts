export interface DoctorItem {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  category: string;
  specialty: { id: number; name: string; }[];
  experienceYears: number;
  treatmentProfile: { id: number, name: string, percent: number }[]
  education: { id: number; edStart: string; edEnd: string; name: string; }[];
  advancedTraining: { id: number; year: string; name: string; }[];
  imgPath: string;
  rating: string;
  slug: string;
}