'use client';

import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import Link from 'next/link';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(true)}
        className='p-2 rounded transition md:hidden'
        aria-label='Open menu'
      >
        <Menu size={24} className='text-violet-dark dark:text-violet-light' />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className='fixed inset-0 bg-black/70 dark:bg-violet-light/50 z-40 flex justify-end'
          onClick={() => setOpen(false)}
        >
          {/* Menu drawer */}
          <nav
            className='w-46 bg-violet-light dark:bg-black text-violet-dark dark:text-violet-light p-6'
            onClick={e => e.stopPropagation()}
          >
            <div className='flex items-center justify-between mb-8'>
              <h2 className='font-head text-2xl'>Menu</h2>
              <button
                onClick={() => setOpen(false)}
                aria-label='Close menu'
                className='p-2 rounded transition'
              >
                <X
                  size={24}
                  className='text-violet-dark dark:text-violet-light'
                />
              </button>
            </div>

            <ul className='space-y-6 font-body text-lg'>
              <li>
                <Link
                  href='#about'
                  onClick={() => setOpen(false)}
                  className='hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-dark dark:focus-visible:outline-violet-light'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='#projects'
                  onClick={() => setOpen(false)}
                  className='hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-dark dark:focus-visible:outline-violet-light'
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href='#contact'
                  onClick={() => setOpen(false)}
                  className='hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-dark dark:focus-visible:outline-violet-light'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
