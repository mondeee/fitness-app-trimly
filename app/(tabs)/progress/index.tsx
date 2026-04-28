import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { StatCard } from '@/components/cards/StatCard';
import { StreakCard } from '@/components/cards/StreakCard';
import { WeeklyCaloriesBars } from '@/components/charts/WeeklyCaloriesBar';
import { WeightTrendChart } from '@/components/charts/WeightTrendChart';
import Header from '@/components/Header';

// ----------------------
// 🧠 Mock Data
// ----------------------

const weeklyData = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  values: [1850, 1920, 1780, 2000, 2100, 2400, 2200],
};

const stats = {
  avgCalories: 2035,
  consistency: '82%',
  proteinAvg: '132g',
};

const insight =
  "You're most consistent during weekdays but tend to spike on weekends. Try balancing Saturday meals.";

// ----------------------
// 🏠 Screen
// ----------------------

export default function ProgressScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-black" style={{ paddingTop: insets.top }}>
      <ScrollView className="px-4">
        {/* 🔥 Header */}
        <Header />

        {/* 🔥 Title */}
        <Text className="text-white text-2xl font-bold mb-4">Progress</Text>
        <StreakCard />

        {/* 📈 Chart */}
        <WeeklyCaloriesBars />
        <WeightTrendChart />
        {/* <WeeklyCaloriesChart data={weeklyData} /> */}

        {/* 📊 Stats */}
        <View className="flex-row mt-6">
          <StatCard label="Avg Calories" value={stats.avgCalories} />
          <StatCard label="Consistency" value={stats.consistency} highlight />
        </View>

        {/* 🧠 Insight */}
        {/* <ProgressInsightCard text={insight} /> */}

        <View className="h-44" />
      </ScrollView>
    </View>
  );
}
