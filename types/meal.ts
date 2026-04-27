import { FoodItem } from './food';

// src/types/meal.ts
export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export type MealLog = {
  id: string;
  type: MealType;
  foods: FoodItem[];
  totalCalories: number;
  time: string;
};
