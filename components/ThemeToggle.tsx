'use client';
import Button from './Button';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='p-2 rounded hover:bg-violet-light dark:hover:bg-violet-dark transition'
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </Button>
  );
};

export default ThemeToggle;
