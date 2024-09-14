export interface CaseItem {
  id: number;
  category: string;
  images: {id:number, path:string, isTitle: boolean}[];
  name: string;
  description: string;
  link: string;
  totalCost: number;
  priceId: { id: number, name: string }[]
}