export interface CaseItem {
  id: number;
  slug: string;
  category: string;
  images: {id:number, path:string, isTitle: boolean}[];
  name: string;
  description: {introduction:string, diagnos:string, treatment:string}[];
  link: string;
  totalCost: number;
  priceId: { id: number, name: string }[];
}