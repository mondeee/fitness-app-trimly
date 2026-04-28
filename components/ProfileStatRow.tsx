import { View } from 'react-native';
import { ProfileStatCard } from './cards/ProfileStatCard';

interface ProfileStatsRowProps {
  currentWeight: number;
  streak: number;
  weightLoss: number;
  unit?: string;
}

export function ProfileStatsRow({
  currentWeight,
  streak,
  weightLoss,
  unit = 'LBS',
}: ProfileStatsRowProps) {
  const lossDisplay = weightLoss <= 0 ? `${weightLoss}` : `+${weightLoss}`;

  return (
    <View className="flex-row gap-3 px-4 mb-4">
      <ProfileStatCard label="Current" value={currentWeight} unit={unit} />
      <ProfileStatCard label="Streak" value={streak} unit="DAYS" />
      <ProfileStatCard
        label="Loss"
        value={lossDisplay}
        unit={unit}
        valueClassName={weightLoss <= 0 ? 'text-white' : 'text-red-400'}
      />
    </View>
  );
}
