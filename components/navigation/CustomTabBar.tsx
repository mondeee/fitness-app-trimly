import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export const CustomTabBar = ({ state, descriptors, navigation }) => {
  const visibleRoutes = state.routes.filter(r => r.name !== 'index');
  const leftRoutes = visibleRoutes.slice(0, 2); // dashboard, foodsearch
  const rightRoutes = visibleRoutes.slice(2); // progress, profile

  const getIcon = (name: string) => {
    switch (name) {
      case 'dashboard/index':
        return 'home';
      case 'foodsearch/index':
        return 'search';
      case 'progress/index':
        return 'trending-up';
      case 'profile/index':
        return 'user';
      default:
        return 'circle';
    }
  };

  const labelMap: Record<string, string> = {
    'dashboard/index': 'HOME',
    'foodsearch/index': 'SEARCH',
    'progress/index': 'PROGRESS',
    'profile/index': 'PROFILE',
  };

  const renderTab = (route: any, index: number) => {
    // match focused state — left tabs are 0,1 and right are 2,3 in original state
    const originalIndex = state.routes.findIndex(
      (r: any) => r.key === route.key,
    );
    const isFocused = state.index === originalIndex;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });
      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    };

    return (
      <Pressable
        key={route.key}
        onPress={onPress}
        className="items-center mx-3"
      >
        <View
          className={`w-14 h-14 rounded-full items-center justify-center mb-1 ${isFocused ? 'bg-orange-500' : ''}`}
          style={
            isFocused
              ? { shadowColor: '#FB923C', shadowOpacity: 0.6, shadowRadius: 20 }
              : {}
          }
        >
          <Feather
            name={getIcon(route.name)}
            size={20}
            color={isFocused ? 'black' : '#6B7280'}
          />
        </View>
        <Text
          className={`text-[10px] tracking-widest ${isFocused ? 'text-orange-400' : 'text-gray-500'}`}
        >
          {labelMap[route.name]}
        </Text>
      </Pressable>
    );
  };

  return (
    <View className="absolute bottom-0 w-full items-center pb-6">
      <View className="flex-row bg-black px-6 py-4 rounded-full border border-[#1A1A1A] items-center">
        {leftRoutes.map(renderTab)}

        {/* Hardcoded modal button — not a tab */}
        <Pressable
          onPress={() => router.push('/logmeal')}
          className="items-center mx-3"
        >
          <View
            className="w-14 h-14 rounded-full items-center justify-center mb-1 bg-orange-500"
            style={{
              shadowColor: '#FB923C',
              shadowOpacity: 0.6,
              shadowRadius: 20,
            }}
          >
            <Feather name="plus" size={20} color="black" />
          </View>
          <Text className="text-[10px] tracking-widest text-gray-500">ADD</Text>
        </Pressable>

        {rightRoutes.map(renderTab)}
      </View>
    </View>
  );
};
