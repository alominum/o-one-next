'use client';

import { Inter } from 'next/font/google';
import ThemeProvider from '@/components/providers/ThemeProvider';
import { dir } from 'i18next';
import { languages } from '@/config/i18n';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  return (
    <html lang={locale} dir={dir(locale)} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
