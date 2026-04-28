import { Feather } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

export const CustomTabBar = ({ state, descriptors, navigation }) => {
  const visibleRoutes = state.routes.filter((route) => {
    return route.name !== 'index'; // hide root index
  });
  return (
    <View className="absolute bottom-0 w-full items-center pb-6">

      <View className="flex-row bg-black px-6 py-4 rounded-full border border-[#1A1A1A]">

        { visibleRoutes.map((route, index) => {
          const isFocused = state.index === index;

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

          const getIcon = () => {
            switch (route.name) {
              case 'dashboard/index':
                return 'home';
              case 'foodsearch/index':
                return 'search';
              case 'logmeal/index':
                return 'plus';
              case 'progress/index':
                return 'trending-up';
              case 'profile/index':
                return 'user';
              default:
                return 'circle';
            }
          };

          const labelMap = {
            'dashboard/index': 'HOME',
            'foodsearch/index': 'SEARCH',
            'logmeal/index': 'ADD',
            'progress/index': 'PROGRESS',
            'profile/index': 'PROFILE',
          };

          return (
            <Pressable
              key={ route.key }
              onPress={ onPress }
              className="items-center mx-3"
            >
              {/* Active Circle */ }
              <View
                className={ `w-14 h-14 rounded-full items-center justify-center mb-1 ${isFocused ? 'bg-orange-500' : ''
                  }` }
                style={
                  isFocused
                    ? {
                      shadowColor: '#FB923C',
                      shadowOpacity: 0.6,
                      shadowRadius: 20,
                    }
                    : {}
                }
              >
                <Feather
                  name={ getIcon() }
                  size={ 20 }
                  color={ isFocused ? 'black' : '#6B7280' }
                />
              </View>

              <Text
                className={ `text-[10px] tracking-widest ${isFocused ? 'text-orange-400' : 'text-gray-500'
                  }` }
              >
                { labelMap[route.name] }
              </Text>
            </Pressable>
          );
        }) }
      </View>
    </View>
  );
};