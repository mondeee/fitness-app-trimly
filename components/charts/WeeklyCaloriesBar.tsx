import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

// 🧠 realistic mock data
const DATA = [
  { day: 'MON', value: 1600 },
  { day: 'TUE', value: 1750 },
  { day: 'WED', value: 1900 },
  { day: 'THU', value: 1840 },
  { day: 'FRI', value: 0 },
  { day: 'SAT', value: 0 },
  { day: 'SUN', value: 0 },
];

export const WeeklyCaloriesBars = () => {
  const [activeDay, setActiveDay] = useState('MON'); // 👈 state

  const max = Math.max(...DATA.map(d => d.value || 2000));

  return (
    <View className="bg-[#111111] rounded-3xl p-5 mb-4">
      {/* 🔥 Header */}
      <View className="flex-row justify-between items-start mb-6">
        <View>
          <Text className="text-white text-3xl font-black leading-tight">
            Weekly
          </Text>
          <Text className="text-white text-3xl font-black leading-tight">
            Calories
          </Text>
          <Text className="text-gray-400 mt-1">Avg. 1,840 kcal / day</Text>
        </View>

        <View className="bg-[#2A1E18] px-4 py-2 rounded-full">
          <Text className="text-orange-400 font-semibold">
            -12% vs last week
          </Text>
        </View>
      </View>

      {/* 📊 Bars */}
      <View className="flex-row items-end justify-between h-48">
        {DATA.map((item, index) => {
          const height = (item.value / max) * 140;

          const isActive = item.day === activeDay;
          const hasData = item.value > 0;

          return (
            <Pressable
              key={index}
              onPress={() => setActiveDay(item.day)}
              className="items-center flex-1"
            >
              {/* Background bar */}
              <View className="absolute bottom-6 w-10 h-[140px] rounded-full bg-[#1A1A1A]" />

              {/* Active glow */}
              {isActive && (
                <View
                  className="absolute bottom-6 w-10 rounded-full bg-orange-500 opacity-20"
                  style={{ height: 160 }}
                />
              )}

              {/* Actual bar */}
              {hasData && (
                <View
                  className={`w-10 rounded-full ${
                    isActive ? 'bg-orange-400' : 'bg-orange-300'
                  }`}
                  style={{ height }}
                />
              )}

              {/* Label */}
              <Text
                className={`mt-2 text-xs tracking-widest ${
                  isActive ? 'text-orange-400' : 'text-gray-500'
                }`}
              >
                {item.day}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};
