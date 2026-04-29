import { Text, View } from 'react-native';
import { MicronutrientRow } from './MicroNutrientRow';

interface Micronutrient {
  name: string;
  amount: number;
  unit: string;
  dailyPercent: number;
}

interface MicronutrientsSectionProps {
  items: Micronutrient[];
}

export function MicronutrientsSection({ items }: MicronutrientsSectionProps) {
  return (
    <View className="mx-4">
      <Text className="text-white text-xl font-black mb-2">Micronutrients</Text>
      <View className="bg-card rounded-2xl px-4">
        {items.map((item, index) => (
          <MicronutrientRow
            key={item.name}
            {...item}
            isLast={index === items.length - 1}
          />
        ))}
      </View>
    </View>
  );
}
