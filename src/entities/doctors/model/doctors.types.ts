export interface DoctorItem {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  category: string;
  specialty: { id: number; name: string; }[];
  experienceYears: number;
  education: { id: number; edStart: string; edEnd: string; name: string; }[];
  advancedTraining: { id: number; year: string; name: string; }[];
  sheldue: { date: string; startTime: string, endTime: string }[];
  imgPath: string;
  rating: string;
}
