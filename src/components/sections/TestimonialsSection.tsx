'use client';

import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Stack } from '@mui/material';
import { useTranslation } from '@/hooks/useTranslation';

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'CEO',
    company: 'TechCorp',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=1976D2&color=fff&size=160',
    content: 'Working with O-One has been transformative for our business. Their innovative solutions helped us stay ahead of the competition.',
  },
  {
    name: 'Michael Chen',
    position: 'CTO',
    company: 'InnovateTech',
    avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=2196F3&color=fff&size=160',
    content: 'The team at O-One delivered exceptional results. Their technical expertise and dedication to quality are unmatched.',
  },
  {
    name: 'Emma Davis',
    position: 'Director',
    company: 'FutureScale',
    avatar: 'https://ui-avatars.com/api/?name=Emma+Davis&background=64B5F6&color=fff&size=160',
    content: 'O-One&apos;s cloud solutions have significantly improved our operational efficiency. They&apos;re true partners in our success.',
  },
];

export default function TestimonialsSection() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 2 }}>
          {t('testimonials.title')}
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 8 }}>
          {t('testimonials.subtitle')}
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item key={index} xs={12} md={4}>
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
                <CardContent sx={{ flexGrow: 1 }}>
                  <Stack spacing={2} alignItems="center" sx={{ mb: 3 }}>
                    <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ width: 80, height: 80 }} />
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" align="center">
                        {testimonial.name}
                      </Typography>
                      <Typography color="text.secondary" align="center">
                        {testimonial.position} - {t('testimonials.position')}
                      </Typography>
                      <Typography color="text.secondary" align="center">
                        {testimonial.company} - {t('testimonials.company')}
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography variant="body1" align="center" sx={{ fontStyle: 'italic' }}>
                    &ldquo;{testimonial.content}&rdquo;
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
