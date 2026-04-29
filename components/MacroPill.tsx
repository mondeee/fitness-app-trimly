import { Text, View } from 'react-native';

interface MacroPillProps {
  label: string;
  value: number;
  accentColor: string;
}

export function MacroPill({ label, value, accentColor }: MacroPillProps) {
  return (
    <View className="flex-1 bg-card rounded-2xl p-4">
      <Text className="text-subtext text-xs font-bold tracking-widest uppercase mb-2">
        {label}
      </Text>
      <View className="flex-row items-baseline">
        <Text className="text-white text-2xl font-black">{value}</Text>
        <Text className="text-subtext text-sm font-semibold ml-0.5">g</Text>
      </View>
      {/* accent bar */}
      <View
        className="h-0.5 w-8 rounded-full mt-3"
        style={{ backgroundColor: accentColor }}
      />
    </View>
  );
}
