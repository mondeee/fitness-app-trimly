// screens/progress/ProgressScreen.tsx
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
export default function ProgressScreen() {
    const insets = useSafeAreaInsets();
    return (<View className="flex-1 bg-black p-4" style={{ paddingTop: insets.top }}>
      <Text className="text-white text-xl mb-4">Progress</Text>

      {/* Chart goes here */}
    </View>);
}
