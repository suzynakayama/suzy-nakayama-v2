'use client';

import React from 'react';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';
import logoBlack from '../public/images/logo-black.png';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='fixed w-full h-20 flex items-center justify-between px-6 py-4 bg-white dark:bg-black text-violet-dark dark:text-violet-light shadow-md dark:shadow-violet-light/40'>
      {/* Logo */}
      <Image
        src={logoBlack}
        alt='LogoBlack'
        width={40}
        height={40}
        className='w-16 h-16 rounded-full bg-violet-light p-2'
      />

      {/* Nav desktop */}
      <nav className='hidden md:flex justify-self-end space-x-8 font-body text-lg'>
        <Link href='#hero' className='hover:underline'>
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

      <ThemeToggle />
    </header>
  );
};

export default Header;
