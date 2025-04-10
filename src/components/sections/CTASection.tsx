'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" align="center" sx={{ mb: 3 }}>
          {t('cta.title')}
        </Typography>
        <Typography variant="h5" align="center" sx={{ mb: 6, opacity: 0.9 }}>
          {t('cta.subtitle')}
        </Typography>
        <Button
          component={Link}
          href="/contact"
          variant="contained"
          size="large"
          sx={{
            bgcolor: 'background.paper',
            color: 'primary.main',
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            '&:hover': {
              bgcolor: 'background.paper',
              opacity: 0.9,
            },
          }}
        >
          {t('cta.button')}
        </Button>
      </Container>
    </Box>
  );
}
