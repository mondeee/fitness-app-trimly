// components/cards/Card.tsx
import { View } from 'react-native';

export default function Card({ children }) {
  return <View className="bg-card p-4 rounded-2xl mb-4">{children}</View>;
}
