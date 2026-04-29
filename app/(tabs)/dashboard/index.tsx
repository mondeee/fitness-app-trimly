// screens/dashboard/DashboardScreen.tsx
import AddMealCard from '@/components/cards/AddMealCard';
import InsightCard from '@/components/cards/InsightCard';
import { MacroCard } from '@/components/cards/MacroCard';
import { MealCard } from '@/components/cards/MealCard';
import Header from '@/components/Header';
import { DashboardSkeleton } from '@/components/skeleton/DashBoardSkeleton';
import { dashboard } from '@/data/mock';
import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function DashboardScreen() {
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(true);
  const { calories, macros, meals } = dashboard;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <View className="flex-1" style={{ paddingTop: insets.top }}>
      <Header />
      <ScrollView className="flex-1 px-4">
        {/* 🔥 Header */}

        {/* 🔥 Calories */}
        <Text className="text-orange-400 text-xs tracking-widest mb-1">
          DAILY FUEL
        </Text>

        <Text className="text-white text-6xl font-black">
          {calories.consumed}
          <Text className="text-gray-400 text-2xl">
            {' '}
            / {calories.goal} kcal
          </Text>
        </Text>

        {/* 🔥 Macros */}
        <View className="mt-6">
          {macros.map((m, i) => (
            <MacroCard key={i} item={m} />
          ))}
        </View>

        {/* 🔥 Fuel Log Header */}
        <View className="flex-row justify-between items-center mt-6 mb-2">
          <Text className="text-white text-xl font-black">FUEL LOG</Text>
          <Text className="text-orange-400 text-xs">HISTORY →</Text>
        </View>

        {/* 🔥 Meals */}
        {meals.map(meal => (
          <MealCard key={meal.id} meal={meal} />
        ))}

        <AddMealCard />

        {/* 🔥 Insight */}
        <InsightCard />

        <View className="h-44" />
      </ScrollView>
    </View>
  );
}
