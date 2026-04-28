import { Text, View } from 'react-native';

interface ProfileStatCardProps {
  label: string;
  value: string | number;
  unit: string;
  valueClassName?: string;
}

export function ProfileStatCard({
  label,
  value,
  unit,
  valueClassName = 'text-white',
}: ProfileStatCardProps) {
  return (
    <View className="flex-1 bg-surface rounded-2xl p-4 items-center">
      <Text className="text-zinc-500 text-xs font-semibold tracking-widest uppercase mb-1">
        {label}
      </Text>
      <Text className={`text-2xl font-black ${valueClassName}`}>{value}</Text>
      <Text className="text-primary text-xs font-semibold tracking-widest mt-0.5">
        {unit}
      </Text>
    </View>
  );
}
