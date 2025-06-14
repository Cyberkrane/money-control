import { CategoryValue } from "../constants/category.constants";

export interface Buys {
  id: string;
  description: string;
  category: CategoryValue;
  price: number;
  date: Date;
}
