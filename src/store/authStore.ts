import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AuthStore {
  token: string | null;
  setToken: (token: string) => void;
}

export const useAuthStore = create<AuthStore, [['zustand/persist', unknown]]>(
  persist(
    (set) => ({
      token: '',
      setToken: (token: string) => {
        set({ token });
      },
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
