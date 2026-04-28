import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';

export const StreakCard = () => {
  return (
    <View className="bg-primary rounded-[32px] p-6 overflow-hidden my-4">
      {/* 🔥 Background Icon (faded) */}
      <View className="absolute right-[-10] bottom-[-10] opacity-20">
        <Feather name="activity" size={160} color="#7C2D12" />
      </View>

      {/* 🏷 Label */}
      <Text className="text-[#7C2D12] tracking-[2px] text-xs mb-2">
        UNSTOPPABLE
      </Text>

      {/* 🔥 Main Title */}
      <Text className="text-[#4A1D0F] text-5xl font-black leading-[56px]">
        12 Day{'\n'}Streak!
      </Text>

      {/* 📝 Description */}
      <Text className="text-[#5B2A1A] mt-4 leading-6">
        You've stayed under your calorie limit for nearly two weeks. Keep the
        fire burning.
      </Text>
    </View>
  );
};
