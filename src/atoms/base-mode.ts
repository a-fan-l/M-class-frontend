import { atom } from 'jotai';

export type ThemeMode = 'light' | 'dark';

// 创建 mode atom
export const modeAtom = atom<ThemeMode>('light');

// 创建 open atom
export const openAtom = atom<boolean>(false);

// 创建派生 atom 用于更新 mode
export const updateModeAtom = atom(
  null,
  (get, set, newMode: ThemeMode) => {
    set(modeAtom, newMode);
  }
);

// 创建派生 atom 用于更新 open
export const updateOpenAtom = atom(
  null,
  (get, set, newOpen: boolean) => {
    set(openAtom, newOpen);
  }
);
