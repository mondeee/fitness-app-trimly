// screens/food/LogMealScreen.tsx
import { MissionCard } from '@/components/cards/MissionCard';
import { Header } from '@/components/Header';
import { MenuRow } from '@/components/MenuRow';
import { MenuSection } from '@/components/MenuSection';
import { ProfileStatsRow } from '@/components/ProfileStatRow';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View className="flex-1 bg-black" style={{ paddingTop: insets.top }}>
      <Header />

      <ScrollView className="flex-1 px-4">
        {/* Stats */}
        <ProfileStatsRow
          currentWeight={178}
          streak={12}
          weightLoss={-15}
          unit="LBS"
        />

        {/* Mission Card */}
        <View className="mb-6">
          <MissionCard
            missionName="Shred"
            progress={82}
            startWeight={193}
            targetWeight={175}
            unit="LBS"
          />
        </View>

        {/* Profile Section */}
        <MenuSection title="Profile">
          <MenuRow icon="user" label="Personal Details" onPress={() => {}} />
          <MenuRow
            icon="activity"
            label="Health Data"
            isLast
            onPress={() => {}}
          />
        </MenuSection>

        {/* App Settings Section */}
        <MenuSection title="App Settings">
          <MenuRow icon="bell" label="Notifications" onPress={() => {}} />
          <MenuRow
            icon="sliders"
            label="Measurement Units"
            badge="Imperial"
            onPress={() => {}}
          />
          <MenuRow
            icon="heart"
            label="Apple Health"
            badge="Connected"
            badgeColor="#22c55e"
            isLast
            onPress={() => {}}
          />
        </MenuSection>

        {/* Account Section */}
        <MenuSection title="Account">
          <MenuRow
            icon="credit-card"
            label="Subscription"
            isLast
            onPress={() => {}}
          />
        </MenuSection>

        {/* Logout — standalone row */}
        <View className="mx-4 bg-surface rounded-2xl overflow-hidden">
          <MenuRow
            icon="log-out"
            label="Logout"
            isLast
            danger
            onPress={() => {}}
          />
        </View>

        <View className="h-44" />
      </ScrollView>
    </View>
  );
}
