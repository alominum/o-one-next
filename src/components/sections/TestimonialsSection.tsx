'use client';

import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    content: 'Their team delivered exceptional results, exceeding our expectations in both quality and timeline.',
    avatar: '/avatars/avatar1.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'CEO, StartupX',
    content: 'The security solutions implemented have significantly improved our infrastructure.',
    avatar: '/avatars/avatar2.jpg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'IT Director, Global Inc',
    content: 'Professional, reliable, and innovative - exactly what we needed for our digital transformation.',
    avatar: '/avatars/avatar3.jpg',
  },
];

export default function TestimonialsSection() {
  return (
    <Box sx={{ py: { xs: 12, md: 16 } }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 2 }}>
          What Our Clients Say
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 8 }}>
          Trusted by businesses worldwide
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Stack spacing={2} alignItems="center" sx={{ mb: 3 }}>
                    <Avatar src={testimonial.avatar} sx={{ width: 64, height: 64 }} />
                    <Box>
                      <Typography variant="h6" align="center">
                        {testimonial.name}
                      </Typography>
                      <Typography color="text.secondary" align="center">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography color="text.secondary" align="center">
                    "{testimonial.content}"
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} sx={{ color: 'primary.main', fontSize: 20 }} />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
