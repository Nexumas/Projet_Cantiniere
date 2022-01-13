import {LtIngredient} from '../ingredient/ingredient';

export interface LtMeal {
  category: number;
  weeks: string[];
  label: string;
  id: number;
  ingredients: LtIngredient[];
  imageId: number,
  price: number
}
