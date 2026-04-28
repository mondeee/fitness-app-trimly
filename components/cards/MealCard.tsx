// components/cards/MealCard.tsx
import { Image, Text, View } from 'react-native';

export const MealCard = ({ meal }) => {
  return (
    <View className="bg-card rounded-3xl p-4 py-6 mb-3 mx-4 flex-row items-center">
      <Image
        source={ { uri: meal.image } }
        className="w-14 h-14 rounded-xl mr-3"
      />

      <View className="flex-1">
        <Text className="text-subtext text-xs uppercase">{ meal.type }</Text>

        <Text className="text-white font-semibold">{ meal.title }</Text>
      </View>

      <Text className="text-orange-400 font-bold">{ meal.calories } kcal</Text>
    </View>
  );
};
