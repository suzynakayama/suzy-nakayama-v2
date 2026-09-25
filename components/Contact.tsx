import React from 'react';
import Link from 'next/link';
import { FileDown, Linkedin, Github } from 'lucide-react';

const links = [
  {
    href: 'files/suzynakayama.pdf',
    label: 'resume',
    Icon: FileDown,
    hover: 'hover:bg-marigold hover:border-marigold',
  },
  {
    href: 'https://www.linkedin.com/in/suzy-nakayama/',
    label: 'linkedin',
    Icon: Linkedin,
    hover: 'hover:bg-periwinkle hover:border-periwinkle',
  },
  {
    href: 'https://github.com/suzynakayama',
    label: 'github',
    Icon: Github,
    hover: 'hover:bg-sky hover:border-sky',
  },
];

const Contact: React.FC = () => {
  return (
    <section
      id='contact'
      className='px-6 sm:px-10 pb-16 scroll-mt-24 mx-auto w-full max-w-5xl'
    >
      <div className='relative rounded-2xl bg-ink-soft border border-ink-line p-8 sm:p-10 flex flex-col items-center text-center gap-4'>
        <span aria-hidden='true' className='hand-label text-2xl'>
          say hi ↓
        </span>
        <h2 className='font-head text-4xl sm:text-5xl uppercase tracking-wide leading-none'>
          Let&apos;s build something
        </h2>
        <p className='text-mist-soft max-w-prose'>
          Find me on LinkedIn and GitHub, or grab a copy of my resume.
        </p>
        <div className='flex gap-4 mt-2'>
          {links.map(({ href, label, Icon, hover }) => (
            <Link
              key={label}
              href={href}
              target='_blank'
              rel='noreferrer noopener'
              aria-label={label}
              className={`grid place-items-center w-12 h-12 rounded-full border-2 border-ink-line-strong text-mist hover:text-ink transition-colors ${hover}`}
            >
              <Icon className='w-5 h-5' />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
