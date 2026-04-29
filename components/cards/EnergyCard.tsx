import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';

interface EnergyCardProps {
  kcal: number;
}

export function EnergyCard({ kcal }: EnergyCardProps) {
  return (
    <View className="bg-card rounded-2xl p-5 mx-4 flex-row items-center justify-between">
      <View>
        <Text className="text-subtext text-xs font-semibold tracking-widest uppercase mb-2">
          Total Energy
        </Text>
        <View className="flex-row items-baseline gap-2">
          <Text className="text-primary text-5xl font-black">{kcal}</Text>
          <Text className="text-white text-lg font-semibold">kcal</Text>
        </View>
      </View>
      <Feather name="zap" size={48} color="#2a2a2a" />
    </View>
  );
}
