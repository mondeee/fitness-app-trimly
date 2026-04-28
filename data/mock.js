// src/data/mock.ts
export const meals = [
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
