// screens/food/FoodSearchScreen.tsx
import FoodCard from '@/components/cards/FoodCard';
import FilterChip from '@/components/FilterChip';
import Header from '@/components/Header';
import { filters, foods } from '@/data/mock';
import { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function FoodSearchScreen() {
  const [active, setActive] = useState('All');
  const insets = useSafeAreaInsets();
  return (
    <View className="flex-1 bg-black" style={{ paddingTop: insets.top }}>
      <Header />

      <ScrollView className="px-4">
        {/* 🔥 Header (Pixel-focused) */}

        {/* 🔍 Search Bar */}
        <View className="bg-[#111111] rounded-full px-5 py-4 flex-row items-center mb-4">
          <Text className="text-gray-500 mr-3">🔍</Text>
          <TextInput
            placeholder="Search food, brands, or meals"
            placeholderTextColor="#6B7280"
            className="flex-1 text-white"
          />
        </View>

        {/* 🧩 Filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-6"
        >
          {filters.map(f => (
            <FilterChip
              key={f}
              label={f}
              active={active === f}
              onPress={() => {
                setActive(f);
                // empty for now
              }}
            />
          ))}
        </ScrollView>

        {/* 🔥 Section Title */}
        <Text className="text-gray-500 tracking-widest mb-4">
          POPULAR MATCHES
        </Text>

        {/* 🍱 Food List */}
        {foods.map(item => (
          <FoodCard key={item.id} item={item} />
        ))}

        {/* 🔥 Bottom Actions */}
        <View className="flex-row mt-4">
          <View className="flex-1 bg-[#2A1E18] rounded-3xl p-5 mr-3">
            <Text className="text-2xl mb-3">🍴</Text>
            <Text className="text-orange-400 font-bold text-lg mb-1">
              Can’t find it?
            </Text>
            <Text className="text-gray-400 text-sm">
              Create a custom food entry
            </Text>
          </View>

          <View className="flex-1 bg-[#1A1A1A] rounded-3xl p-5">
            <Text className="text-2xl mb-3">📊</Text>
            <Text className="text-white font-bold text-lg mb-1">
              Scan Label
            </Text>
            <Text className="text-gray-400 text-sm">
              Instant nutrition logging
            </Text>
          </View>
        </View>

        <View className="h-44" />
      </ScrollView>
    </View>
  );
}
