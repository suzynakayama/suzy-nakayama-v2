'use client';

import { useEffect } from 'react';

interface ThemeToggleProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const ThemeToggle = ({ isDark, setIsDark }: ThemeToggleProps) => {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className='p-2 rounded hover:bg-violet-light transition'
    >
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default ThemeToggle;
