import { Text, View } from 'react-native';

export const ProgressInsightCard = ({ text }) => {
  return (
    <View className="bg-orange-500 rounded-3xl p-5 mt-4">
      <Text className="text-black font-black text-xl mb-2">
        INSIGHT
      </Text>
      <Text className="text-black">{ text }</Text>
    </View>
  );
};