import { CustomTabBar } from '@/components/navigation/CustomTabBar';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="dashboard/index" />
      <Tabs.Screen name="foodsearch/index" />
      <Tabs.Screen name="logmeal/index" />
      <Tabs.Screen name="progress/index" />
      <Tabs.Screen name="profile/index" />
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
