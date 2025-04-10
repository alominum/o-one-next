'use client';

import { Dialog, DialogTitle, DialogContent, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Paper } from '@mui/material';
import { useLanguage } from '@/contexts/LanguageContext';
import { languages, languageNames, Language } from '@/config/i18n';
import { useTranslation } from '@/hooks/useTranslation';

interface LanguageDialogProps {
  open: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
}

export default function LanguageDialog({ open, onClose, anchorEl }: LanguageDialogProps) {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    onClose();
  };

  if (!anchorEl) return null;

  const anchorRect = anchorEl.getBoundingClientRect();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          position: 'absolute',
          top: anchorRect.bottom + 8,
          right: window.innerWidth - anchorRect.right,
          width: 200,
          maxHeight: 'none',
        },
      }}
    >
      <DialogTitle sx={{ p: 2, pb: 1 }}>{t('nav.changeLanguage')}</DialogTitle>
      <DialogContent sx={{ p: 0 }}>
        <List>
          {languages.map((lang) => (
            <ListItem key={lang} disablePadding>
              <ListItemButton selected={language === lang} onClick={() => handleLanguageChange(lang)}>
                <ListItemText primary={languageNames[lang]} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
}
