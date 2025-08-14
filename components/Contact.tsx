import React from 'react';
import Link from 'next/link';
import { FileDown, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section
      id='contact'
      className='flex flex-col items-center h-[20vh] scroll-mt-24'
    >
      <h3 className='font-head text-3xl mb-6'>Contact Me</h3>
      <div className='flex gap-5'>
        <Link
          href='files/suzynakayama.pdf'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='resume'
          className='focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-dark dark:focus-visible:outline-violet-light'
        >
          <FileDown className='w-6 h-6 inline-block' />
        </Link>
        <Link
          href='https://www.linkedin.com/in/suzy-nakayama/'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='linkedin'
          className='focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-dark dark:focus-visible:outline-violet-light'
        >
          <Linkedin className='w-6 h-6 inline-block' />
        </Link>
        <Link
          href='https://github.com/suzynakayama'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='github'
          className='focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-dark dark:focus-visible:outline-violet-light'
        >
          <Github className='w-6 h-6 inline-block' />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
