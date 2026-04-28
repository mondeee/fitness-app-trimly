import { Feather } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

interface MenuRowProps {
  icon: React.ComponentProps<typeof Feather>['name'];
  label: string;
  badge?: string;
  badgeColor?: string;
  isLast?: boolean;
  onPress?: () => void;
  danger?: boolean;
}

export function MenuRow({
  icon,
  label,
  badge,
  badgeColor = '#71717a',
  isLast = false,
  onPress,
  danger = false,
}: MenuRowProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-center px-4 py-4 active:bg-zinc-700/50 ${
        !isLast ? 'border-b border-zinc-700/60' : ''
      }`}
    >
      {/* Icon */}
      <View className="w-8 h-8 items-center justify-center mr-3">
        <Feather name={icon} size={20} color={danger ? '#f97316' : '#a1a1aa'} />
      </View>

      {/* Label */}
      <Text
        className={`flex-1 text-base font-semibold ${danger ? 'text-primary' : 'text-white'}`}
      >
        {label}
      </Text>

      {/* Badge + chevron */}
      <View className="flex-row items-center gap-2">
        {badge && (
          <Text className="text-sm font-medium" style={{ color: badgeColor }}>
            {badge}
          </Text>
        )}
        {!danger && <Feather name="chevron-right" size={18} color="#52525b" />}
      </View>
    </Pressable>
  );
}
