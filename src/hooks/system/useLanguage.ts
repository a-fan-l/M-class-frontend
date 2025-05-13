import { useEffect, useState } from 'react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useCreation } from 'ahooks';
import { useTranslations } from 'next-intl';
import { languageOpenAtom, currentLanguageAtom, LanguageData, changeLanguageAtom, showLanguageSelectorAtom } from '@/atoms/system/language';
import { setItem, getItem } from '@/utils/index';
import { languages, LANGUAGE_STORAGE_KEY } from '@/constants/system/index';
import { useMode } from './useMode';

export type { LanguageData };

const useLanguage = () => {
  const t = useTranslations();
  const { mode } = useMode();
  const [isInitialized, setIsInitialized] = useState(false);

  // Read and write the language selector's open state
  const [open, setOpen] = useAtom(languageOpenAtom);
  // Read the current language
  const current = useAtomValue(currentLanguageAtom);
  // Get setters for language actions
  const setLanguage = useSetAtom(changeLanguageAtom);
  const setShowLanguageSelector = useSetAtom(showLanguageSelectorAtom);

  // Memoize language data with translations
  const data: LanguageData[] = useCreation(
    () =>
      languages.map((o) => ({
        ...o,
        text: t(o.text!),
        icons: {
          ...o?.icons,
        },
      })),
    [t]
  );

  // Memoize the current language object
  const olanguage = useCreation(
    () => {
      if (!isInitialized) {
        const storedLang = getItem({ key: LANGUAGE_STORAGE_KEY });
        return data.find((o) => o.value === storedLang) || data[0];
      }
      return data.find((o) => o.value === current) || data[0];
    },
    [current, data, isInitialized]
  );

  // Find the appropriate logo based on the mode (dark/light)
  const findLogo = (params?: LanguageData) =>
    params?.icons?.[mode as 'dark' | 'light'];

  // Toggle the language selector visibility
  const toggle = (isOpen = false) => {
    setShowLanguageSelector(isOpen);
  };

  // Close the language selector
  const close = () => {
    setShowLanguageSelector(false);
  };

  // Change the language and persist it to storage
  const change = (params: LanguageData) => {
    if (params.value === current) return;
    setLanguage(params.value);
    if (typeof window !== 'undefined') {
      setItem({ key: LANGUAGE_STORAGE_KEY, value: params.value });
    }
  };

  // Initialize the language from storage
  const init = () => {
    if (typeof window !== 'undefined') {
      const storedLang = getItem({ key: LANGUAGE_STORAGE_KEY });
      const lang = data.find((o) => o.value === storedLang) || data[0];
      change(lang);
    }
    setIsInitialized(true);
  };

  // Run init on mount to set the initial language
  useEffect(() => {
    init();
  }, []);

  return {
    data,
    open,
    show: setShowLanguageSelector,
    language: current,
    olanguage,
    mode,
    toggle,
    close,
    change,
    init,
    findLogo,
    isInitialized,
  };
};

export default useLanguage;