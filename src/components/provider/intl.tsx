'use client';

import { NextIntlClientProvider, IntlConfig } from 'next-intl';
import React from 'react';

export interface IIndexProps {
  children?: React.ReactNode;
  messages?: IntlConfig['messages'];
  locale: IntlConfig['locale'];
}

const index: React.FC<IIndexProps> = ({ children, messages, locale }) => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="Asia/Shanghai">
      {children}
    </NextIntlClientProvider>
  );
};

export default index;
