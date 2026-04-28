import React from 'react';
import { Text, View } from 'react-native';
const AddMealCard = () => {
    return (<View className="border border-dashed border-gray-600 rounded-2xl p-4 m-4 flex-row items-center">
      <View className="w-12 h-12 bg-card rounded-xl items-center justify-center mr-3">
        <Text className="text-white text-xl">+</Text>
      </View>

      <View className="flex-1">
        <Text className="text-subtext text-xs uppercase">Snack</Text>
        <Text className="text-gray-400 italic">Add something...</Text>
      </View>
    </View>);
};
export default AddMealCard;
