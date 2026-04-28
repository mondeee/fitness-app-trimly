import { Text, View } from 'react-native';

export const StatCard = ({ label, value, highlight = false }) => {
  return (
    <View className="flex-1 bg-[#111111] rounded-2xl p-4 mr-3">
      <Text className="text-gray-400 text-xs mb-1">{ label }</Text>
      <Text
        className={ `text-xl font-bold ${highlight ? 'text-orange-400' : 'text-white'
          }` }
      >
        { value }
      </Text>
    </View>
  );
};