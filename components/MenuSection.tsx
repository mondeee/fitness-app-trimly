import { Text, View } from 'react-native';

interface MenuSectionProps {
  title: string;
  children: React.ReactNode;
}

export function MenuSection({ title, children }: MenuSectionProps) {
  return (
    <View className="mx-4 mb-4">
      <Text className="text-zinc-500 text-xs font-bold tracking-widest uppercase mb-3 px-1">
        {title}
      </Text>
      <View className="bg-surface rounded-2xl overflow-hidden">{children}</View>
    </View>
  );
}
