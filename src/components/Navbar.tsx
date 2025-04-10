'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from 'next-themes';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LanguageIcon from '@mui/icons-material/Language';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import LoginRegisterDialog from './LoginRegisterDialog';
import LanguageDialog from './LanguageDialog';
import { useLanguage } from '@/contexts/LanguageContext';
import { languageNames, Language } from '@/config/i18n';

const pages = [
  { name: 'home', href: '/' },
  { name: 'services', href: '/services' },
  { name: 'about', href: '/about' },
  { name: 'contact', href: '/contact' },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [loginDialogOpen, setLoginDialogOpen] = React.useState(false);
  const [languageDialogOpen, setLanguageDialogOpen] = React.useState(false);
  const [languageButtonEl, setLanguageButtonEl] = React.useState<HTMLElement | null>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useTranslation();
  const { language } = useLanguage();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLoginClick = () => {
    setLoginDialogOpen(true);
  };

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageButtonEl(event.currentTarget);
    setLanguageDialogOpen(true);
  };

  const handleMobileLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    handleCloseNavMenu();
    handleLanguageClick(event);
  };

  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
            <Link href="/">
              <Image src="/logo.svg" alt="O-One Logo" width={120} height={40} />
            </Link>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} href={page.href}>
                  <Typography textAlign="center">{t(`nav.${page.name}`)}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleLoginClick}>
                <Typography textAlign="center">{t('nav.login')}</Typography>
              </MenuItem>
              <MenuItem onClick={handleMobileLanguageClick}>
                <Typography textAlign="center">{t('nav.changeLanguage')}</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
            <Link href="/">
              <Image src="/logo.svg" alt="O-One Logo" width={120} height={40} />
            </Link>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button key={page.name} component={Link} href={page.href} onClick={handleCloseNavMenu} sx={{ mx: 1, color: 'text.primary' }}>
                {t(`nav.${page.name}`)}
              </Button>
            ))}
          </Box>

          {/* Right-side buttons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button variant="outlined" onClick={handleLoginClick} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {t('nav.login')}
            </Button>
            <Tooltip title={t('nav.changeLanguage')}>
              <Button onClick={handleLanguageClick} startIcon={<LanguageIcon />} sx={{ color: 'text.primary', display: { xs: 'none', md: 'flex' } }}>
                {languageNames[language as Language]}
              </Button>
            </Tooltip>
            <Tooltip title={t('nav.toggleTheme')}>
              <IconButton onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} color="inherit">
                {resolvedTheme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>

      {/* Dialogs */}
      <LoginRegisterDialog open={loginDialogOpen} onClose={() => setLoginDialogOpen(false)} />
      <LanguageDialog open={languageDialogOpen} onClose={() => setLanguageDialogOpen(false)} anchorEl={languageButtonEl} />
    </AppBar>
  );
}

export default Navbar;
