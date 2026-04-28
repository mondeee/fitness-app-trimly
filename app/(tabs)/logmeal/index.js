// screens/food/LogMealScreen.tsx
import AppButton from '@/components/ui/AppButton';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function LogMealScreen() {
    return (<SafeAreaView className="flex-1 bg-black p-4">
      <Text className="text-white text-xl mb-4">Log Meal</Text>

      {/* Food list placeholder */}

      <AppButton title="Save Meal" onPress={() => { }}/>
    </SafeAreaView>);
}
