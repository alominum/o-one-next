'use client';

import { Box, Container, Grid, Typography, Link as MuiLink, IconButton } from '@mui/material';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTranslation } from '@/hooks/useTranslation';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {t('footer.about.title')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('footer.about.description')}
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {t('footer.links.title')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink component={Link} href="/services" color="text.secondary">
                {t('footer.links.services')}
              </MuiLink>
              <MuiLink component={Link} href="/about" color="text.secondary">
                {t('footer.links.about')}
              </MuiLink>
              <MuiLink component={Link} href="/contact" color="text.secondary">
                {t('footer.links.contact')}
              </MuiLink>
              <MuiLink component={Link} href="/privacy" color="text.secondary">
                {t('footer.links.privacy')}
              </MuiLink>
              <MuiLink component={Link} href="/terms" color="text.secondary">
                {t('footer.links.terms')}
              </MuiLink>
            </Box>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {t('footer.contact.title')}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {t('footer.contact.address')}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {t('footer.contact.phone')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('footer.contact.email')}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" href="https://github.com" target="_blank" rel="noopener">
                <GitHubIcon />
              </IconButton>
              <IconButton color="inherit" href="https://linkedin.com" target="_blank" rel="noopener">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com" target="_blank" rel="noopener">
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
          {t('footer.copyright')}
        </Typography>
      </Container>
    </Box>
  );
}
