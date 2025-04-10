'use client';

import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box, Tabs, Tab, Typography } from '@mui/material';
import { useTranslation } from '@/hooks/useTranslation';

interface LoginRegisterDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function LoginRegisterDialog({ open, onClose }: LoginRegisterDialogProps) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label={t('nav.login')} />
          <Tab label={t('nav.register')} />
        </Tabs>
      </DialogTitle>
      <DialogContent>
        <Box component="form" sx={{ mt: 2 }}>
          {activeTab === 0 ? (
            // Login Form
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField label={t('nav.email')} type="email" fullWidth required />
              <TextField label={t('nav.password')} type="password" fullWidth required />
            </Box>
          ) : (
            // Register Form
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField label={t('nav.name')} fullWidth required />
              <TextField label={t('nav.email')} type="email" fullWidth required />
              <TextField label={t('nav.password')} type="password" fullWidth required />
              <TextField label={t('nav.confirmPassword')} type="password" fullWidth required />
            </Box>
          )}
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
        <Button onClick={onClose}>{t('nav.cancel')}</Button>
        <Button variant="contained" color="primary">
          {activeTab === 0 ? t('nav.login') : t('nav.register')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
