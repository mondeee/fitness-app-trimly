import { Dimensions, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export const WeightTrendChart = () => {
  // 🧠 realistic mock data (slight fluctuations, downward trend)
  const data = [
    182, 181.5, 181, 180.8, 180.9, 180.4, 179.8, 179.2, 178.9, 178.4,
  ];

  const labels = new Array(data.length).fill('');

  const currentWeight = data[data.length - 1];
  const diff = (data[0] - currentWeight).toFixed(1);

  return (
    <View className="bg-[#111111] rounded-3xl p-5 mb-4">
      {/* 🔥 Header */}
      <View className="flex-row justify-between items-start mb-4">
        <View>
          <Text className="text-white text-lg font-bold">Weight Trend</Text>
          <Text className="text-gray-400 text-sm">Last 30 Days</Text>
        </View>

        <View className="items-end">
          <Text className="text-white text-3xl font-black">
            {currentWeight}
            <Text className="text-gray-400 text-lg"> LBS</Text>
          </Text>

          <Text className="text-red-400 text-sm">↓ {diff} lbs</Text>
        </View>
      </View>

      {/* 📈 Chart */}
      <LineChart
        data={{
          labels,
          datasets: [{ data }],
        }}
        width={screenWidth - 60}
        height={140}
        withDots={false}
        withInnerLines={false}
        withOuterLines={false}
        withHorizontalLabels={false}
        withVerticalLabels={false}
        chartConfig={{
          backgroundGradientFrom: '#111111',
          backgroundGradientTo: '#111111',
          decimalPlaces: 1,
          color: () => '#FB923C', // orange line
        }}
        bezier
        style={{
          paddingRight: 0,
        }}
      />

      {/* 🔥 Last Point Indicator (fake overlay dot) */}
      <View className="absolute right-6 bottom-8 w-4 h-4 rounded-full bg-orange-400 opacity-80" />
      <View className="absolute right-6 bottom-8 w-2 h-2 rounded-full bg-orange-300" />
    </View>
  );
};
