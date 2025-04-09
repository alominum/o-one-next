'use client';

import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityUpdateGoodIcon from '@mui/icons-material/SecurityUpdateGood';

const features = [
  {
    title: 'Fast & Efficient',
    description: 'Our solutions are optimized for performance and speed.',
    icon: <SpeedIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
  },
  {
    title: 'Secure by Design',
    description: 'Security is built into every aspect of our solutions.',
    icon: <SecurityUpdateGoodIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
  },
  {
    title: 'Quality Guaranteed',
    description: 'We maintain the highest standards of quality and reliability.',
    icon: <CheckCircleIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
  },
];

export default function FeaturesSection() {
  return (
    <Box sx={{ py: { xs: 12, md: 16 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Why Choose Us
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
              We deliver excellence in every project
            </Typography>
            <Stack spacing={3}>
              {features.map((feature, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box sx={{ mt: 0.5 }}>{feature.icon}</Box>
                  <Box>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">{feature.description}</Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/features-image.svg"
              alt="Features"
              sx={{
                width: '100%',
                height: 'auto',
                maxWidth: 600,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
