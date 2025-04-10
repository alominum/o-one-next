import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/providers/ThemeProvider';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { languages, defaultLanguage } from '@/config/i18n';
import { headers } from 'next/headers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'O-One - Technology Solutions',
  description: 'Transform your business with our technology solutions',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = headers();
  const cookie = headersList.get('cookie');
  const language = cookie?.match(/NEXT_LOCALE=([^;]+)/)?.[1] || defaultLanguage;

  return (
    <html lang={language} suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider initialLanguage={language}>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
