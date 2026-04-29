import { EnergyCard } from '@/components/cards/EnergyCard';
import { FoodHero } from '@/components/Foodhero';
import { MacroRow } from '@/components/MacroRow';
import { MicronutrientsSection } from '@/components/MicroNutrientSelection';
import { ServingSelector } from '@/components/ServingSelector';
import AppButton from '@/components/ui/AppButton';
import { MEAL_DATA } from '@/data/mock';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const STEP = 50;

export default function LogMealScreen() {
  const insets = useSafeAreaInsets();
  const [serving, setServing] = useState(MEAL_DATA.defaultServing);

  // Scale nutrition values relative to base 100g
  const scale = serving / 100;
  const scaledKcal = Math.round(MEAL_DATA.kcal * scale);
  const scaledMacros = {
    protein: {
      ...MEAL_DATA.macros.protein,
      value: Math.round(MEAL_DATA.macros.protein.value * scale),
    },
    carbs: {
      ...MEAL_DATA.macros.carbs,
      value: Math.round(MEAL_DATA.macros.carbs.value * scale),
    },
    fats: {
      ...MEAL_DATA.macros.fats,
      value: Math.round(MEAL_DATA.macros.fats.value * scale),
    },
  };
  const scaledMicros = MEAL_DATA.micronutrients.map(m => ({
    ...m,
    amount: parseFloat((m.amount * scale).toFixed(1)),
  }));

  return (
    <View className="flex-1 bg-black p-4" style={{ paddingTop: insets.top }}>
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 100 }}
      >
        {/* Hero image */}
        <FoodHero
          name={MEAL_DATA.name}
          category={MEAL_DATA.category}
          imageUrl={MEAL_DATA.imageUrl}
        />

        <View className="gap-4 pt-4">
          {/* Calories */}
          <EnergyCard kcal={scaledKcal} />

          {/* Macros */}
          <MacroRow macros={scaledMacros} />

          {/* Serving */}
          <ServingSelector
            value={serving}
            options={MEAL_DATA.servingOptions}
            onIncrement={() => setServing(p => p + STEP)}
            onDecrement={() => setServing(p => Math.max(STEP, p - STEP))}
            onSelectOption={setServing}
          />

          {/* Micros */}
          <MicronutrientsSection items={scaledMicros} />
        </View>
      </ScrollView>

      {/* Sticky CTA */}
      <View
        className="absolute bottom-0 left-0 right-0 px-4 bg-black/90"
        style={{ paddingBottom: insets.bottom + 12, paddingTop: 12 }}
      >
        <AppButton
          title="Add to Diary"
          onPress={() => {
            router.back();
          }}
        />
      </View>
    </View>
  );
}
