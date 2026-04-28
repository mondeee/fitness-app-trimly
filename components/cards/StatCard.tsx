import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';

export const StatCard = ({
  label,
  value,
  highlight = false,
  icon = 'bell',
}) => {
  return (
    <View className="flex-1 bg-[#111111] rounded-2xl h-36 p-8 mr-3 justify-center">
      {icon && <Feather name={icon} size={22} color="#F97316" />}
      <Text className="text-gray-400 text-xs mb-1 mt-4">{label}</Text>
      <Text
        className={`text-xl font-bold ${
          highlight ? 'text-orange-400' : 'text-white'
        }`}
      >
        {value}
      </Text>
    </View>
  );
};
