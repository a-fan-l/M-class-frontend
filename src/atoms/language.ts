import { atom } from 'jotai';
import { en } from '@constants/system/index';

export type LanguageKey = keyof LanguageConfig;

export type LanguageData<
  T = {
    icons?: {
      light?: React.FC<React.SVGProps<SVGSVGElement>>;
      dark?: React.FC<React.SVGProps<SVGSVGElement>>;
    };
  },
> = LanguageBaseData & {} & T;

export interface LanguageBaseData {
  id: keyof LanguageConfig;
  text?: string;
  desc?: string;
  value: string;
  islogo?: boolean;
}

// 基础语言配置
interface BaseLanguageConfig {
  'en-US': LanguageData;
  'ko-KR': LanguageData;
  'uk-UA': LanguageData;
  'ru-RU': LanguageData;
}

export interface LanguageConfig extends BaseLanguageConfig {}

// 语言状态
export const languageOpenAtom = atom(false);
export const currentLanguageAtom = atom(en.value);

// 语言操作
export const showLanguageSelectorAtom = atom(
  null,
  (get, set, isOpen: boolean) => {
    set(languageOpenAtom, isOpen);
  }
);

export const changeLanguageAtom = atom(
  null,
  (get, set, language: string) => {
    set(currentLanguageAtom, language);
  }
);
