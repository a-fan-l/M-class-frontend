import { defineRouting } from 'next-intl/routing';
import { d_language, languages } from '@i18n/config.mjs';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: languages,

  // Used when no locale matches
  defaultLocale: d_language,
});
