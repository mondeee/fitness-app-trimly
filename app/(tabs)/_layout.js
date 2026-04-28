import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/theme';
import { useColorScheme } from 'nativewind';
export default function TabLayout() {
    const colorScheme = useColorScheme();
    return (<Tabs screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme.colorScheme ?? 'light'].tint,
            headerShown: false,
        }}>
      <Tabs.Screen name="dashboard/index" options={{
            title: 'Dashboard',
        }}/>
      <Tabs.Screen name="foodsearch/index" options={{
            title: 'Food Search',
        }}/>
      <Tabs.Screen name="logmeal/index" options={{
            title: 'Log Meal',
        }}/>

      <Tabs.Screen name="progress/index" options={{
            title: 'Progress',
        }}/>

      <Tabs.Screen name="index" options={{
            href: null,
        }}/>
    </Tabs>);
}
