'use client';

import { Box, Container, Typography, Button, Grid } from '@mui/material';

export default function HeroSection() {
  return (
    <Box
      sx={{
        py: { xs: 12, md: 16 },
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage:
            'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
          zIndex: 0,
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h1" sx={{ mb: 3, color: 'text.primary' }}>
              Let&apos;s Build Together
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary' }}>
              Transform your business with our technology solutions
            </Typography>
            <Button
              variant="contained"
              size="large"
              href="/contact"
              sx={{
                fontSize: '1.125rem',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            >
              Get Started
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
