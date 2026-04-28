import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';
export const Header = () => {
    return (<View className="flex-row items-center justify-between mb-6">
      {/* Avatar */}
      <View className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden">
        <Image source={{ uri: 'https://i.pravatar.cc/100' }} className="w-full h-full"/>
      </View>

      {/* Logo */}
      <Text className="text-orange-500 text-xl font-black tracking-widest">
        TRIMLY
      </Text>

      {/* Bell Icon */}
      <Feather name="bell" size={22} color="#F97316"/>
    </View>);
};
export default Header;
