import type { Metadata } from 'next';
import { Russo_One } from 'next/font/google';
import { getLocales } from '@tools/locales';

import Provider from '@components/provider';
import '@styles/globals.css';
import Layout from './_components/layout';

const russo = Russo_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = params;
  const messages = await getLocales(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${russo.className} antialiased`}>
        <Provider locale={locale} messages={messages}>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
} 