import { Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
function getProgressColor(percent) {
    if (percent < 50)
        return '#FBBF24'; // yellow
    if (percent < 80)
        return '#FB923C'; // orange
    return '#FF6B3D'; // strong orange
}
export const CircularProgressBar = ({ percent }) => {
    const size = 64;
    const strokeWidth = 6;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (circumference * percent) / 100;
    const color = getProgressColor(percent);
    return (<View className="items-center justify-center">
      <Svg width={size} height={size}>
        {/* Background circle */}
        <Circle stroke="#2A2A2A" fill="none" cx={size / 2} cy={size / 2} r={radius} strokeWidth={strokeWidth}/>

        {/* Progress circle */}
        <Circle stroke={color} fill="none" cx={size / 2} cy={size / 2} r={radius} strokeWidth={strokeWidth} strokeDasharray={`${circumference}`} strokeDashoffset={strokeDashoffset} strokeLinecap="round" rotation="-90" origin={`${size / 2}, ${size / 2}`}/>
      </Svg>

      <Text className="absolute text-white text-xs font-bold">{percent}%</Text>
    </View>);
};
