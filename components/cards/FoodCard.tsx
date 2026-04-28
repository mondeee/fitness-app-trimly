import React from 'react';
import { Image, Text, View } from 'react-native';

const FoodCard = ({ item }) => {
  return (
    <View className="bg-[#111111] rounded-3xl p-4 flex-row items-center mb-4">
      {/* Image */}
      <Image
        source={{ uri: item.image }}
        className="w-16 h-16 rounded-full mr-4"
      />

      {/* Text */}
      <View className="flex-1">
        <Text className="text-white text-lg font-bold">{item.name}</Text>
        <Text className="text-gray-400 mt-1">{item.subtitle}</Text>
      </View>

      {/* Calories */}
      <View className="items-end">
        <Text className="text-orange-400 text-2xl font-black">
          {item.calories}
        </Text>
        <Text className="text-gray-500 text-xs tracking-widest">KCAL</Text>
      </View>
    </View>
  );
};

export default FoodCard;
