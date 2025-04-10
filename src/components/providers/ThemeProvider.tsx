'use client';

import { ThemeProvider as MUIThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from 'next-themes';
import { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
}

function ThemeWrapper({ children }: Props) {
  const { resolvedTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const theme = createTheme({
    palette: {
      mode: resolvedTheme as 'light' | 'dark',
      primary: {
        main: '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0',
      },
      secondary: {
        main: '#9c27b0',
        light: '#ba68c8',
        dark: '#7b1fa2',
      },
      background: {
        default: resolvedTheme === 'dark' ? '#121212' : '#ffffff',
        paper: resolvedTheme === 'dark' ? '#1e1e1e' : '#ffffff',
      },
      text: {
        primary: resolvedTheme === 'dark' ? '#ffffff' : 'rgba(0, 0, 0, 0.87)',
        secondary: resolvedTheme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: resolvedTheme === 'dark' ? '#1e1e1e' : '#ffffff',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: resolvedTheme === 'dark' ? '#1e1e1e' : '#ffffff',
          },
        },
      },
    },
  });

  if (!mounted) {
    return null;
  }

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default function ThemeProvider({ children }: Props) {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ThemeWrapper>{children}</ThemeWrapper>
    </NextThemeProvider>
  );
}
