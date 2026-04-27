// screens/food/FoodSearchScreen.tsx
import { FlatList, Text, TextInput, View } from 'react-native';

export default function FoodSearchScreen() {
  return (
    <View className="flex-1 bg-background p-4">
      <TextInput
        placeholder="Search food..."
        placeholderTextColor="#94A3B8"
        className="bg-card p-4 rounded-xl text-white mb-4"
      />

      <FlatList
        data={[]}
        renderItem={({ item }) => (
          <View className="p-4 bg-card rounded-xl mb-2">
            <Text className="text-white">{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}
