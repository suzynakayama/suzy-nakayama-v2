import React from 'react';
import Image from 'next/image';
import profilePhoto from '../public/images/suzy-profile.jpg';

const Hero: React.FC = () => {
  return (
    <section className='grid items-center text-center pt-6 md:pt-0 grid-cols-1 md:grid-cols-2'>
      <div className='md:justify-self-end'>
        <h2 className='font-head text-3xl sm:text-4xl lg:text-5xl'>
          Hi, I am Suzy Nakayama
        </h2>
        <p className='font-body mt-4 text-sm sm:text-base lg:text-lg'>
          Full-Stack Software Engineer
        </p>
        <p className='font-body mt-2 text-sm sm:text-base lg:text-md'>
          Typescript | Python | React
        </p>
      </div>

      <div className='flex justify-center pt-8 md:pt-0'>
        <Image
          src={profilePhoto}
          alt='Suzy Nakayama'
          className='w-36 h-48 md:w-40 md:h-56 rounded-full border-4 border-violet-light'
        />
      </div>
    </section>
  );
};

export default Hero;
