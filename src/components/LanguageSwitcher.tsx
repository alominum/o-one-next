'use client';

import { Button, ButtonGroup } from '@mui/material';
import { useLanguage } from '@/contexts/LanguageContext';
import { languages, languageNames } from '@/config/i18n';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <ButtonGroup size="small" aria-label="language selector">
      {languages.map((lang) => (
        <Button key={lang} onClick={() => setLanguage(lang)} variant={language === lang ? 'contained' : 'outlined'}>
          {languageNames[lang]}
        </Button>
      ))}
    </ButtonGroup>
  );
}
