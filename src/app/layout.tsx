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
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        url: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = headers();
  const cookies = headersList.get('cookie') || '';
  const languageMatch = cookies.match(/NEXT_LOCALE=([^;]+)/);
  const language = languageMatch ? languageMatch[1] : defaultLanguage;

  return (
    <html lang={language} suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
