import { LanguageData } from '@/atoms/system/language';

import den from '@public/static/language/en-US/dark.svg';
import len from '@public/static/language/en-US/light.svg';
import dko from '@public/static/language/ko-KR/dark.svg';
import lko from '@public/static/language/ko-KR/light.svg';
import duk from '@public/static/language/uk-UA/dark.svg';
import luk from '@public/static/language/uk-UA/light.svg';
import dru from '@public/static/language/ru-RU/dark.svg';
import lru from '@public/static/language/ru-RU/light.svg';

export const en: LanguageData = {
  id: 'en-US',
  value: 'en',
  text: 'globals.language.en-US',
  islogo: true,
  icons: {
    dark: den,
    light: len,
  },
};

export const ko: LanguageData = {
  id: 'ko-KR',
  value: 'ko',
  text: 'globals.language.ko-KR',
  islogo: true,
  icons: {
    dark: dko,
    light: lko,
  },
};

export const ru: LanguageData = {
  id: 'ru-RU',
  value: 'ru',
  text: 'globals.language.ru-RU',
  islogo: true,
  icons: {
    dark: dru,
    light: lru,
  },
};

export const uk: LanguageData = {
  id: 'uk-UA',
  value: 'uk',
  text: 'globals.language.uk-UA',
  islogo: true,
  icons: {
    dark: duk,
    light: luk,
  },
};

export const languages = [en, ko, ru, uk];

export default languages;
