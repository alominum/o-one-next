import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/i18n';

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: string, params?: Record<string, string>) => {
    // Split the key by dots to handle nested objects
    const keys = key.split('.');

    // Start with the translations for the current language
    let current: any = translations[language];

    // Traverse the nested structure
    for (const k of keys) {
      if (current === undefined) return key;
      current = current[k];
    }

    // If we didn't find a translation, return the key
    if (current === undefined) return key;

    // Handle parameters if provided
    if (params) {
      return Object.entries(params).reduce((acc, [key, value]) => acc.replace(`{${key}}`, value), current);
    }

    return current;
  };

  return { t };
}
