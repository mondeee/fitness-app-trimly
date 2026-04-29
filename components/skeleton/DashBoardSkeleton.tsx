// screens/dashboard/DashboardSkeleton.tsx

import Header from '@/components/Header';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Skeleton } from './Skeleton';

export const DashboardSkeleton = () => {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1" style={{ paddingTop: insets.top }}>
      <Header />

      <ScrollView className="flex-1 px-4">
        {/* 🔥 Calories */}
        <Skeleton className="w-24 h-3 mb-2" />
        <Skeleton className="w-48 h-10 mb-6" />

        {/* 🔥 Macros */}
        {[...Array(3)].map((_, i) => (
          <View
            key={i}
            className="bg-card rounded-3xl p-4 mb-4 mx-4 flex-row items-center justify-between"
          >
            <View>
              <Skeleton className="w-20 h-3 mb-2" />
              <Skeleton className="w-32 h-6" />
            </View>

            <Skeleton className="w-14 h-14 rounded-full" />
          </View>
        ))}

        {/* 🔥 Fuel Log Header */}
        <View className="flex-row justify-between items-center mt-6 mb-2 px-4">
          <Skeleton className="w-24 h-4" />
          <Skeleton className="w-16 h-3" />
        </View>

        {/* 🔥 Meals */}
        {[...Array(3)].map((_, i) => (
          <View
            key={i}
            className="bg-card rounded-3xl p-4 py-6 mb-3 mx-4 flex-row items-center"
          >
            <Skeleton className="w-14 h-14 rounded-xl mr-3" />

            <View className="flex-1">
              <Skeleton className="w-16 h-3 mb-2" />
              <Skeleton className="w-32 h-4" />
            </View>

            <Skeleton className="w-16 h-4" />
          </View>
        ))}

        {/* 🔥 Add Meal */}
        <View className="mx-4 mt-2">
          <Skeleton className="w-full h-16 rounded-2xl" />
        </View>

        {/* 🔥 Insight */}
        <View className="mx-4 mt-4">
          <Skeleton className="w-full h-32 rounded-3xl" />
        </View>

        <View className="h-44" />
      </ScrollView>
    </View>
  );
};
