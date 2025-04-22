import { MODE_STORAGE_KEY } from '@constants/system/index';
import { modeAtom, openAtom, updateModeAtom, updateOpenAtom, ThemeMode } from '@/atoms/system/base-mode';
import { useAtom } from 'jotai';
import storage from '@/utils/system/storage';

export const useMode = () => {
  const [mode] = useAtom(modeAtom);
  const [open] = useAtom(openAtom);
  const [, setMode] = useAtom(updateModeAtom);
  const [, setOpen] = useAtom(updateOpenAtom);

  const modify = (params: ThemeMode) => {
    if (params === mode) return;
    setMode(params);
    storage.setItem({ key: MODE_STORAGE_KEY, value: params });
  };

  // 切换语言的方法
  const change = (params: ThemeMode) => {
    if (params === mode) return;
    modify(params);
  };

  // 初始化语言
  const setup = () => {
    if (typeof window !== 'undefined') {
      const res = storage.getItem({ key: MODE_STORAGE_KEY });
      if (res) {
        modify(res as ThemeMode);
      }
    }
  };

  return {
    mode,
    open,
    show: setOpen,
    change,
    modify,
    setup,
  };
};

export default useMode;
