import { atom } from 'jotai';
import { produce } from 'immer';

export type ThemeMode = 'light' | 'dark';

// 主题模式状态
export const themeModeAtom = atom<ThemeMode>('light');

// 主题开关状态
export const themeOpenAtom = atom(false);

// Action: 显示/隐藏主题选择器
export const showThemeSelectorAtom = atom(
  null,
  (get, set, isOpen: boolean) => {
    set(themeOpenAtom, isOpen);
  }
);

// Action: 切换主题模式
export const changeThemeModeAtom = atom(
  null,
  (get, set, mode: ThemeMode) => {
    set(themeModeAtom, produce((draft) => {
      draft = mode;
    }));
  }
); 