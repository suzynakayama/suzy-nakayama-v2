import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className='flex flex-col items-center min-h-screen p-4'>
      <h1 className='font-head text-4xl sm:text-5xl uppercase tracking-wide mt-16 mb-8 md:mb-16'>Page Not Found</h1>
      <p className='text-md md:text-lg text-mist-soft'>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
