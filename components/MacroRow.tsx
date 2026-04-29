import { View } from 'react-native';
import { MacroPill } from './MacroPill';

interface Macros {
  protein: { value: number; color: string };
  carbs: { value: number; color: string };
  fats: { value: number; color: string };
}

interface MacroRowProps {
  macros: Macros;
}

export function MacroRow({ macros }: MacroRowProps) {
  return (
    <View className="flex-row gap-3 mx-4">
      <MacroPill
        label="Protein"
        value={macros.protein.value}
        accentColor={macros.protein.color}
      />
      <MacroPill
        label="Carbs"
        value={macros.carbs.value}
        accentColor={macros.carbs.color}
      />
      <MacroPill
        label="Fats"
        value={macros.fats.value}
        accentColor={macros.fats.color}
      />
    </View>
  );
}
