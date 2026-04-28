// /store/auth.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
export const useAuthStore = create()(devtools(persist(set => ({
    token: null,
    setToken: token => set({ token }),
    logout: () => set({ token: null }),
}), {
    name: 'auth-storage',
    storage: createJSONStorage(() => AsyncStorage),
})));
