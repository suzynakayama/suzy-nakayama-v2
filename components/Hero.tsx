import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import profilePhoto from '../public/images/suzy-profile.png';
import { buttonBase, buttonVariants } from './Button';
import StarBadge from './StarBadge';

const Hero: React.FC = () => {
  return (
    <section
      id='hero'
      className='relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32 px-6 sm:px-10 scroll-mt-24'
    >
      <div
        aria-hidden='true'
        className='blob w-80 h-80 bg-periwinkle opacity-30 -top-10 -right-20'
      />
      <div
        aria-hidden='true'
        className='blob w-60 h-60 bg-marigold opacity-15 bottom-0 -left-16 [animation-delay:-8s]'
      />

      <div className='relative mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-16 md:gap-10 items-center'>
        <div className='relative'>
          <span
            aria-hidden='true'
            className='hand-label absolute -top-8 -left-1 text-3xl -rotate-6'
          >
            hello!
          </span>
          {/* <p className='font-mono text-sm text-sky mb-4'>
            <span className='text-marigold'>&gt; </span>hi, I am
          </p> */}
          <h1 className='font-display text-6xl sm:text-7xl lg:text-8xl leading-[0.95] mb-6 text-balance'>
            Suzy <span className='text-periwinkle'>Nakayama</span>
          </h1>
          <p className='text-lg sm:text-xl mb-2'>
            Full-Stack &amp; AI-Ready Software Engineer
          </p>
          <p className='text-mist-soft mb-2'>
            Secret (level II) Security Clearance
          </p>
          <p className='font-mono text-sm text-mist-soft mb-8'>
            TypeScript · Python · React · React Native · AI Tools
          </p>
          <div className='flex flex-wrap gap-3'>
            <Link
              href='#projects'
              className={`${buttonBase} ${buttonVariants.primary}`}
            >
              See my work
            </Link>
            <Link
              href='files/suzynakayama.pdf'
              target='_blank'
              rel='noreferrer noopener'
              className={`${buttonBase} ${buttonVariants.ghost}`}
            >
              Resume
            </Link>
          </div>
        </div>

        <div className='relative justify-self-center w-56 sm:w-64'>
          {/* Offset frame behind the photo */}
          <div
            aria-hidden='true'
            className='absolute inset-0 translate-x-3.5 -translate-y-3.5 rounded-[28px] border-2 border-periwinkle'
          />
          <Image
            src={profilePhoto}
            alt='Suzy Nakayama'
            priority
            className='relative w-full aspect-[4/5] object-cover rounded-[28px] border border-ink-line'
          />
          {/* Styled like a JSX tag in a code editor */}
          <span className='absolute bottom-4 left-4 rounded-full bg-ink/90 border border-ink-line-strong px-3 py-1.5 font-mono text-xs font-semibold whitespace-nowrap'>
            <span className='text-sky'>&lt;</span>
            <span className='font-bold text-sky'>Suzy Nakayama</span>{' '}
            <span className='text-sky'>/&gt;</span>
          </span>
          <StarBadge className='absolute -top-5 -right-5' />
          <span
            aria-hidden='true'
            className='hand-label absolute -bottom-9 -right-10 text-2xl -rotate-20'
          >
            that&apos;s me ↖
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
