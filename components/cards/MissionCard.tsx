import { Text, View } from 'react-native';

interface MissionCardProps {
  missionName: string;
  progress: number; // 0 to 100
  startWeight: number;
  targetWeight: number;
  unit?: string;
}

export function MissionCard({
  missionName,
  progress,
  startWeight,
  targetWeight,
  unit = 'LBS',
}: MissionCardProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <View className="bg-surface rounded-2xl p-5 mx-4">
      <View className="flex-row items-start justify-between mb-3">
        <View>
          <Text className="text-primary text-xs font-semibold tracking-widest uppercase mb-1">
            Current Mission
          </Text>
          <Text className="text-white text-3xl font-black italic tracking-tight">
            {missionName.toUpperCase()}
          </Text>
        </View>
        <View className="bg-zinc-700 rounded-full px-3 py-1">
          <Text className="text-white text-xs font-bold">
            {clampedProgress}%
          </Text>
        </View>
      </View>

      {/* Progress Bar */}
      <View className="h-2 bg-zinc-700 rounded-full overflow-hidden mb-3">
        <View
          className="h-full bg-primary rounded-full"
          style={{ width: `${clampedProgress}%` }}
        />
      </View>

      <View className="flex-row justify-between">
        <Text className="text-zinc-500 text-xs font-medium tracking-wide">
          START: {startWeight} {unit}
        </Text>
        <Text className="text-zinc-500 text-xs font-medium tracking-wide">
          TARGET: {targetWeight} {unit}
        </Text>
      </View>
    </View>
  );
}
