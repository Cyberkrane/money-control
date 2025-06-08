import { CategoryKey } from "../constants/category.constants";

export interface Buys {
  id: string;
  name: string;
  category: CategoryKey;
  price: number;
}
