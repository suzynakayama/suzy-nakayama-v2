'use client';

import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';
import logoWhite from '../public/images/Logo-white.png';
import logoBlack from '../public/images/Logo-black.png';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <header className='flex items-center justify-between px-6 py-4 dark:bg-violet-light text-violet-dark shadow-md dark:shadow-violet-light/40'>
      {/* Logo */}
      {isDark ? (
        <Image
          src={logoWhite}
          alt='LogoWhite'
          width={40}
          height={40}
          className='w-15 h-15 rounded-full bg-violet-dark p-2'
        />
      ) : (
        <Image
          src={logoBlack}
          alt='LogoBlack'
          width={40}
          height={40}
          className='w-15 h-15 rounded-full bg-violet-light p-2'
        />
      )}

      {/* Nav desktop */}
      <nav className='hidden md:flex justify-self-end space-x-8 font-body text-lg'>
        <Link href='#about' className='hover:underline'>
          About
        </Link>
        <Link href='#projects' className='hover:underline'>
          Projects
        </Link>
        <Link href='#contact' className='hover:underline'>
          Contact
        </Link>
      </nav>

      {/* Nav mobile */}
      <MobileMenu />

      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
    </header>
  );
};

export default Header;
