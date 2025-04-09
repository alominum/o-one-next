'use client';

import { Box, Container, Typography, Button } from '@mui/material';

export default function CTASection() {
  return (
    <Box sx={{ py: { xs: 12, md: 16 }, bgcolor: 'primary.main', color: 'white' }}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" sx={{ mb: 3 }}>
          Ready to Get Started?
        </Typography>
        <Typography variant="h5" align="center" sx={{ mb: 6, opacity: 0.9 }}>
          Let's discuss how we can help transform your business
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            size="large"
            href="/contact"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              fontSize: '1.125rem',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
