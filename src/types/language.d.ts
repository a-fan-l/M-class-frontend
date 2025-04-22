export type LanguageKey = 'en' | 'ko' | 'uk' | 'ru';

export interface LanguageBaseData {
  id: keyof LanguageConfig;
  text?: string;
  desc?: string;
  value: string;
  islogo?: boolean;
}

export type LanguageData<
  T = {
    icons?: {
      light?: React.FC<React.SVGProps<SVGSVGElement>>;
      dark?: React.FC<React.SVGProps<SVGSVGElement>>;
    };
  },
> = LanguageBaseData & T;

// 基础语言配置
interface BaseLanguageConfig {
  'en': LanguageData;
  'ko': LanguageData;
  'uk': LanguageData;
  'ru': LanguageData;
}

export interface LanguageConfig extends BaseLanguageConfig {} 