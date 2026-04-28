import React from 'react';
import { Text, View } from 'react-native';

const ActionCard = ({ title, subtitle, icon }) => {
  return (
    <View className="flex-1 bg-[#1A1A1A] rounded-3xl p-5 mr-3">
      <Text className="text-2xl mb-3">{icon}</Text>
      <Text className="text-orange-400 font-bold text-lg mb-1">{title}</Text>
      <Text className="text-gray-400 text-sm">{subtitle}</Text>
    </View>
  );
};

export default ActionCard;
