import { Text, View } from 'react-native';

interface MicronutrientRowProps {
  name: string;
  amount: number;
  unit: string;
  dailyPercent: number;
  isLast?: boolean;
}

export function MicronutrientRow({
  name,
  amount,
  unit,
  dailyPercent,
  isLast = false,
}: MicronutrientRowProps) {
  return (
    <View
      className={`flex-row items-center justify-between py-4 ${
        !isLast ? 'border-b border-zinc-800' : ''
      }`}
    >
      <View>
        <Text className="text-subtext text-xs font-bold tracking-widest uppercase mb-1">
          {name}
        </Text>
        <Text className="text-white text-base font-bold">
          {amount}
          {unit}
        </Text>
      </View>
      <Text className="text-primary text-sm font-bold">{dailyPercent}%</Text>
    </View>
  );
}
