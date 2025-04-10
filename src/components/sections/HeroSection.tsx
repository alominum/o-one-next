'use client';

import { Box, Container, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { useTheme } from 'next-themes';

export default function HeroSection() {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();

  const lightModeImage =
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80';
  const darkModeImage =
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';

  return (
    <Box
      sx={{
        py: { xs: 12, md: 16 },
        bgcolor: 'background.default',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: `url(${resolvedTheme === 'dark' ? darkModeImage : lightModeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: resolvedTheme === 'dark' ? 0.15 : 0.1,
          zIndex: 0,
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                color: 'text.primary',
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              {t('hero.title')}
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary' }}>
              {t('hero.subtitle')}
            </Typography>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              size="large"
              sx={{
                fontSize: '1.125rem',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            >
              {t('hero.ctaButton')}
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={resolvedTheme === 'dark' ? darkModeImage : lightModeImage}
              alt="Technology Solutions"
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
