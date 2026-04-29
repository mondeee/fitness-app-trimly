import { LinearGradient } from 'expo-linear-gradient';
import { Image, Text, View } from 'react-native';

interface FoodHeroProps {
  name: string;
  category: string;
  imageUrl: string;
}

export function FoodHero({ name, category, imageUrl }: FoodHeroProps) {
  return (
    <View style={{ width: '100%', height: 256, padding: 8 }}>
      <Image
        source={{ uri: imageUrl }}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 128,
        }}
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.95)']}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}
        >
          <Text className="text-primary text-xs font-bold tracking-widest uppercase mb-1">
            {category}
          </Text>
          <Text className="text-white text-3xl font-black">{name}</Text>
        </LinearGradient>
      </View>
    </View>
  );
}
