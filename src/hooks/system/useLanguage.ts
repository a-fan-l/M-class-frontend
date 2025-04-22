import { useEffect } from 'react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useCreation } from 'ahooks';
import { useTranslations } from 'next-intl';
import { languageOpenAtom, currentLanguageAtom, LanguageData, changeLanguageAtom, showLanguageSelectorAtom } from '@atoms/language';
import { setItem, getItem } from '@/utils/system/storage';
import { languages, LANGUAGE_STORAGE_KEY } from '@/constants/system/index';
import { useMode } from './useMode';

export type { LanguageData };

const useLanguage = () => {
  const t = useTranslations();
  const { mode } = useMode();

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
    [t] // Depend on t to update when translations change
  );

  // Memoize the current language object
  const olanguage = useCreation(
    () => data.find((o) => o.value === current) || data[0],
    [current, data]
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
    setItem({ key: LANGUAGE_STORAGE_KEY, value: params.value });
  };

  // Initialize the language from storage
  const init = () => {
    const storedLang = getItem({ key: LANGUAGE_STORAGE_KEY });
    const lang = data.find((o) => o.value === storedLang) || data[0];
    change(lang);
  };

  // Run init on mount to set the initial language
  useEffect(() => {
    init();
  }, []); // Empty dependency array to run once on mount

  return {
    data, // List of available languages
    open, // Language selector open state
    show: setShowLanguageSelector, // Function to show/hide the selector
    language: current, // Current language value
    olanguage, // Current language object
    mode, // Current theme mode (dark/light)
    toggle, // Toggle selector visibility
    close, // Close the selector
    change, // Change the language
    init, // Initialize the language
    findLogo, // Get the appropriate logo
  };
};

export default useLanguage;