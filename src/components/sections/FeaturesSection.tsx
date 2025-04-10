'use client';

import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityUpdateGoodIcon from '@mui/icons-material/SecurityUpdateGood';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { useTheme } from 'next-themes';
import { useTranslation } from '@/hooks/useTranslation';

const features = [
  {
    key: 'innovation',
    icon: <AutoAwesomeIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
  },
  {
    key: 'quality',
    icon: <CheckCircleIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
  },
  {
    key: 'support',
    icon: <SecurityUpdateGoodIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
  },
];

const featureImages = {
  light:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  dark: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
};

export default function FeaturesSection() {
  const { resolvedTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <Box sx={{ py: { xs: 12, md: 16 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              {t('features.title')}
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
              {t('features.subtitle')}
            </Typography>
            <Stack spacing={3}>
              {features.map((feature) => (
                <Box key={feature.key} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box sx={{ mt: 0.5 }}>{feature.icon}</Box>
                  <Box>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {t(`features.${feature.key}.title`)}
                    </Typography>
                    <Typography color="text.secondary">{t(`features.${feature.key}.description`)}</Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={resolvedTheme === 'dark' ? featureImages.dark : featureImages.light}
              alt={t('features.title')}
              sx={{
                width: '100%',
                height: 'auto',
                maxWidth: 600,
                borderRadius: 2,
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
