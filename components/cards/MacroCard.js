import React from 'react';
import { Text, View } from 'react-native';
import { CircularProgressBar } from '../CircularprogressBar';
export const MacroCard = ({ item }) => {
    return (<View className="bg-card rounded-3xl p-4 mb-4 mx-4 flex-row items-center justify-between">
      <View>
        <Text className="text-subtext uppercase tracking-widest">
          {item.label}
        </Text>
        <Text className="text-white text-2xl font-bold mt-1">
          {item.value}g{' '}
          <Text className="text-subtext text-base">/ {item.goal}g</Text>
        </Text>
      </View>

      {/* Fake circular progress */}
      <CircularProgressBar percent={item.percent}/>
    </View>);
};
