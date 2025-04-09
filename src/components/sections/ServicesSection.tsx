'use client';

import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';

const services = [
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs.',
    icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions for your business.',
    icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    title: 'Network Solutions',
    description: 'Robust network infrastructure design and implementation.',
    icon: <NetworkCheckIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
];

export default function ServicesSection() {
  return (
    <Box sx={{ py: { xs: 12, md: 16 } }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 2 }}>
          Our Services
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 8 }}>
          Comprehensive solutions for your business needs
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Box sx={{ mb: 3 }}>{service.icon}</Box>
                  <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary">{service.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
