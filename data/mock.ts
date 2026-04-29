// src/data/mock.ts

import { MealLog } from '@/types/meal';

export const meals: MealLog[] = [
  {
    id: '1',
    type: 'breakfast',
    time: '08:30',
    totalCalories: 450,
    foods: [
      { id: 'f1', name: 'Egg', calories: 150, protein: 12, carbs: 1, fat: 10 },
      { id: 'f2', name: 'Rice', calories: 300, protein: 6, carbs: 60, fat: 2 },
    ],
  },
];

export const dashboard = {
  calories: {
    consumed: 1842,
    goal: 2400,
  },
  macros: [
    {
      label: 'Protein',
      value: 145,
      goal: 180,
      percent: 80,
      color: '#FF8A65',
    },
    {
      label: 'Carbs',
      value: 160,
      goal: 220,
      percent: 72,
      color: '#FF8A65',
    },
    {
      label: 'Fat',
      value: 42,
      goal: 65,
      percent: 12,
      color: '#FBBF24',
    },
  ],
  meals: [
    {
      id: '1',
      type: 'Breakfast',
      title: 'Avocado Toast & Eggs',
      calories: 420,
      image: 'https://picsum.photos/100',
    },
    {
      id: '2',
      type: 'Lunch',
      title: 'Salmon Quinoa Bowl',
      calories: 685,
      image: 'https://picsum.photos/101',
    },
    {
      id: '3',
      type: 'Dinner',
      title: 'Grilled Steak & Greens',
      calories: 737,
      image: 'https://picsum.photos/102',
    },
  ],
};

export const filters = ['All', 'Recent', 'Favorites', 'Custom'];

export const foods = [
  {
    id: '1',
    name: 'Avocado',
    subtitle: '1 medium (150g)',
    calories: 240,
    image: 'https://picsum.photos/200?1',
  },
  {
    id: '2',
    name: 'Chicken Breast',
    subtitle: 'Cooked, 200g',
    calories: 330,
    image: 'https://picsum.photos/200?2',
  },
  {
    id: '3',
    name: 'Brown Rice',
    subtitle: '1 cup, steamed',
    calories: 216,
    image: 'https://picsum.photos/200?3',
  },
];

export const MEAL_DATA = {
  name: 'Grilled Chicken',
  category: 'Protein Hero',
  imageUrl:
    'https://media.istockphoto.com/id/1978764024/photo/grilled-chicken-breast-whole-and-sliced-on-a-cutting-board-with-lemon.jpg?s=2048x2048&w=is&k=20&c=7VxJJd85lnPbZT5Lil1gplveIT7OqWeBK1IA7xugKDc=',
  kcal: 284,
  macros: {
    protein: { value: 52, color: '#FF6B2C' },
    carbs: { value: 0, color: '#94A3B8' },
    fats: { value: 6, color: '#EAB308' },
  },
  servingOptions: [100, 250, 500, 1000],
  defaultServing: 250,
  micronutrients: [
    { name: 'Sodium', amount: 74, unit: 'mg', dailyPercent: 3 },
    { name: 'Potassium', amount: 256, unit: 'mg', dailyPercent: 7 },
    { name: 'Cholesterol', amount: 85, unit: 'mg', dailyPercent: 28 },
    { name: 'Vitamin B6', amount: 1.3, unit: 'mg', dailyPercent: 65 },
    { name: 'Iron', amount: 1.4, unit: 'mg', dailyPercent: 8 },
  ],
};
