'use client';

import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { useTranslation } from '@/hooks/useTranslation';
import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const services = [
  {
    key: 'webDev',
    icon: <WebIcon sx={{ fontSize: 40 }} />,
  },
  {
    key: 'mobileDev',
    icon: <PhoneIphoneIcon sx={{ fontSize: 40 }} />,
  },
  {
    key: 'cloud',
    icon: <CloudIcon sx={{ fontSize: 40 }} />,
  },
  {
    key: 'cyberSecurity',
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
  },
  {
    key: 'network',
    icon: <NetworkCheckIcon sx={{ fontSize: 40 }} />,
  },
  {
    key: 'ai',
    icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
  },
];

export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 2 }}>
          {t('services.title')}
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 8 }}>
          {t('services.subtitle')}
        </Typography>
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item key={service.key} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ mb: 2, color: 'primary.main' }}>{service.icon}</Box>
                  <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                    {t(`services.${service.key}.title`)}
                  </Typography>
                  <Typography color="text.secondary">{t(`services.${service.key}.description`)}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
