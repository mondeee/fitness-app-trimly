import { Feather } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';

interface ServingSelectorProps {
  value: number;
  options: number[];
  onIncrement: () => void;
  onDecrement: () => void;
  onSelectOption: (val: number) => void;
}

export function ServingSelector({
  value,
  options,
  onIncrement,
  onDecrement,
  onSelectOption,
}: ServingSelectorProps) {
  const [isCustom, setIsCustom] = useState(false);
  const [customText, setCustomText] = useState('');
  const inputRef = useRef<TextInput>(null);

  const formatOption = (g: number) => (g >= 1000 ? `${g / 1000}KG` : `${g}G`);

  const isCustomSelected = !options.includes(value);

  const handleCustomChipPress = () => {
    setIsCustom(true);
    setCustomText(String(value));
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const handleCustomSubmit = () => {
    const parsed = parseInt(customText, 10);
    if (!isNaN(parsed) && parsed > 0) {
      onSelectOption(parsed);
    }
    setIsCustom(false);
  };

  return (
    <View className="mx-4">
      <Text className="text-white text-xl font-black mb-4">
        Select Serving Size
      </Text>

      {/* Stepper */}
      <View className="flex-row items-center justify-between mb-4">
        <Pressable
          onPress={onDecrement}
          className="w-14 h-14 rounded-full bg-card items-center justify-center active:opacity-70"
        >
          <Feather name="minus" size={20} color="white" />
        </Pressable>

        <View className="flex-row items-baseline gap-2">
          <Text className="text-white text-3xl font-black">{value}</Text>
          <Text className="text-subtext text-base font-semibold">grams</Text>
        </View>

        <Pressable
          onPress={onIncrement}
          className="w-14 h-14 rounded-full bg-primary items-center justify-center active:opacity-70"
        >
          <Feather name="plus" size={20} color="white" />
        </Pressable>
      </View>

      {/* Quick chips + custom */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="-mx-1"
      >
        {options.map(opt => {
          const isSelected = opt === value && !isCustomSelected;
          return (
            <Pressable
              key={opt}
              onPress={() => {
                onSelectOption(opt);
                setIsCustom(false);
              }}
              className={`px-5 py-3 rounded-full mr-2 border ${
                isSelected
                  ? 'bg-primary border-primary'
                  : 'bg-transparent border-zinc-700'
              }`}
            >
              <Text
                className={`text-sm font-bold tracking-wide ${isSelected ? 'text-white' : 'text-subtext'}`}
              >
                {formatOption(opt)}
              </Text>
            </Pressable>
          );
        })}

        {/* Custom chip */}
        <Pressable
          onPress={handleCustomChipPress}
          className={`px-4 py-3 rounded-full mr-2 border flex-row items-center gap-1 ${
            isCustomSelected || isCustom
              ? 'bg-primary border-primary'
              : 'bg-transparent border-zinc-700'
          }`}
        >
          {isCustom ? (
            <TextInput
              ref={inputRef}
              value={customText}
              onChangeText={setCustomText}
              onSubmitEditing={handleCustomSubmit}
              onBlur={handleCustomSubmit}
              keyboardType="numeric"
              returnKeyType="done"
              className="text-white text-sm font-bold min-w-10 text-center p-0"
              style={{
                color: 'white',
                fontSize: 14,
                fontWeight: 'bold',
                minWidth: 40,
              }}
              selectTextOnFocus
            />
          ) : (
            <>
              <Feather
                name="edit-2"
                size={12}
                color={isCustomSelected ? 'white' : '#94A3B8'}
              />
              <Text
                className={`text-sm font-bold tracking-wide ${isCustomSelected ? 'text-white' : 'text-subtext'}`}
              >
                {isCustomSelected ? `${value}G` : 'CUSTOM'}
              </Text>
            </>
          )}
        </Pressable>
      </ScrollView>
    </View>
  );
}
