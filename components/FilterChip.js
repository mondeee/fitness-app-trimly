import React from 'react';
import { Pressable, Text } from 'react-native';
const FilterChip = ({ label, active, onPress }) => {
    return (<Pressable onPress={onPress} className={`px-5 py-3 rounded-full mr-3 ${active ? 'bg-orange-500' : 'bg-[#1A1A1A]'}`}>
      <Text className={`font-semibold ${active ? 'text-black' : 'text-gray-400'}`}>
        {label}
      </Text>
    </Pressable>);
};
export default FilterChip;
