// components/ui/AppButton.tsx
import React from 'react';
import { Pressable, Text } from 'react-native';

export default function AppButton({ title, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-primary py-4 rounded-2xl items-center active:opacity-80"
    >
      <Text className="text-white font-bold">{title}</Text>
    </Pressable>
  );
}
