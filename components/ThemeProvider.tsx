import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

// Blue Hour is a dark-only design
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute='class' forcedTheme='dark'>
      {children}
    </NextThemesProvider>
  );
}
