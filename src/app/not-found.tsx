import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className='flex flex-col items-center min-h-screen bg-white dark:bg-black text-violet-dark dark:text-violet-light p-4'>
      <h1 className='text-3xl mb-8 md:mb-16'>Page Not Found</h1>
      <p className='text-md md:text-lg text-justify'>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
