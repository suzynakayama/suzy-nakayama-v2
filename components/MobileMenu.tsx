'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Menu } from 'lucide-react';
import Link from 'next/link';
import { navLinks } from './Header';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    // Lock page scroll and move focus into the menu while it is open
    const openButton = openRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      openButton?.focus();
    };
  }, [open]);

  const linkClass =
    'block py-2 text-2xl hover:text-sky transition-colors';

  // Rendered into <body> because the header's backdrop-blur would otherwise
  // trap this fixed overlay inside the 80px header box
  const overlay = (
    <div
      className='fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm flex justify-end md:hidden'
      onClick={() => setOpen(false)}
    >
      {/* Menu drawer */}
      <nav
        id='mobile-menu'
        role='dialog'
        aria-modal='true'
        aria-label='Menu'
        className='relative w-72 max-w-[85vw] h-full overflow-y-auto bg-ink-soft border-l border-ink-line text-mist px-6 pt-[calc(1.25rem+env(safe-area-inset-top,0px))] pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] flex flex-col'
        onClick={e => e.stopPropagation()}
      >
        <div className='flex items-center justify-between mb-10'>
          <h2 className='font-head text-3xl uppercase tracking-wide'>Menu</h2>
          <button
            ref={closeRef}
            onClick={() => setOpen(false)}
            aria-label='Close menu'
            className='p-2 rounded-full text-mist hover:text-sky transition-colors'
          >
            <X size={24} />
          </button>
        </div>

        <ul className='space-y-4 font-body'>
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href='files/suzynakayama.pdf'
              target='_blank'
              rel='noreferrer noopener'
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              Resume
            </Link>
          </li>
        </ul>

        <span aria-hidden='true' className='hand-label text-2xl mt-auto pt-10'>
          see you around ✦
        </span>
      </nav>
    </div>
  );

  return (
    <>
      {/* Hamburger Button */}
      <button
        ref={openRef}
        onClick={() => setOpen(true)}
        className='p-2 rounded-full text-mist hover:text-sky transition-colors md:hidden'
        aria-label='Open menu'
        aria-expanded={open}
        aria-controls='mobile-menu'
      >
        <Menu size={24} />
      </button>

      {open && createPortal(overlay, document.body)}
    </>
  );
};

export default MobileMenu;
