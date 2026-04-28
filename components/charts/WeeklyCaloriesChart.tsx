import { Dimensions, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export const WeeklyCaloriesChart = ({ data }) => {
  return (
    <View className="bg-[#111111] rounded-3xl p-4">
      <LineChart
        data={ {
          labels: data.labels,
          datasets: [{ data: data.values }],
        } }
        width={ screenWidth - 32 }
        height={ 220 }
        yAxisSuffix=""
        withDots
        withShadow={ false }
        withInnerLines={ false }
        withOuterLines={ false }
        chartConfig={ {
          backgroundGradientFrom: '#111111',
          backgroundGradientTo: '#111111',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(249,115,22, ${opacity})`,
          labelColor: () => '#6B7280',
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: '#FB923C',
          },
        } }
        bezier
        style={ {
          borderRadius: 16,
        } }
      />
    </View>
  );
};