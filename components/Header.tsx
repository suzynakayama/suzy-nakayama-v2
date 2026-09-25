'use client';

import React from 'react';
import MobileMenu from './MobileMenu';
import Link from 'next/link';

export const navLinks = [
  { href: '#hero', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  return (
    <header className='fixed top-0 z-30 w-full h-20 flex items-center justify-between px-6 py-4 bg-ink/80 backdrop-blur-md border-b border-ink-line text-mist'>
      {/* Wordmark */}
      <Link href='#hero' className='font-display text-2xl leading-none'>
        <span className='text-periwinkle'>Suzy</span>
        <span className='text-marigold'> Nakayama</span>
      </Link>

      {/* Nav desktop */}
      <nav className='hidden md:flex items-center gap-8 font-body text-sm'>
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className='text-mist-soft hover:text-sky transition-colors'
          >
            {link.label}
          </Link>
        ))}
        <Link
          href='files/suzynakayama.pdf'
          target='_blank'
          rel='noreferrer noopener'
          className='rounded-full border-2 border-ink-line-strong px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] hover:bg-periwinkle hover:border-periwinkle hover:text-ink transition-colors'
        >
          Resume
        </Link>
      </nav>

      {/* Nav mobile */}
      <MobileMenu />
    </header>
  );
};

export default Header;
