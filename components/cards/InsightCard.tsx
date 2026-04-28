import React from 'react';
import { Pressable, Text, View } from 'react-native';

export const InsightCard = () => {
  return (
    <View className="bg-primary rounded-3xl p-6 mt-6">
      <Text className="text-black text-2xl font-black mb-2">KILLING IT!</Text>

      <Text className="text-black text-sm mb-4">
        You're 240 kcal under your goal and your protein intake is up 12% from
        yesterday.
      </Text>

      <Pressable className="bg-black px-4 py-3 rounded-full self-start">
        <Text className="text-white font-bold text-xs">VIEW DETAILS</Text>
      </Pressable>
    </View>
  );
};

export default InsightCard;
