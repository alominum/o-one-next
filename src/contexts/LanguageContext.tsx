'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { languages, defaultLanguage } from '@/config/i18n';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children, initialLanguage }: { children: React.ReactNode; initialLanguage: string }) {
  const [language, setLanguageState] = useState(initialLanguage);

  const setLanguage = (lang: string) => {
    if (languages.includes(lang)) {
      setLanguageState(lang);
      document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`;
    }
  };

  useEffect(() => {
    const cookie = document.cookie.match(/NEXT_LOCALE=([^;]+)/)?.[1];
    if (cookie && languages.includes(cookie)) {
      setLanguageState(cookie);
    }
  }, []);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}
