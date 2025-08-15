import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../../../../components/Button';
import NotFound from '@/app/not-found';
import Footer from '../../../../components/Footer';
import { Projects, projects } from '../../../../data/projects';

const App = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const apps: Projects = projects.filter(project => project.app === true);
  const app = apps.find(app => app.slug === slug);

  return (
    <div
      className='p-10 flex flex-col bg-white dark:bg-black text-violet-dark 
  dark:text-violet-light  '
    >
      <Link
        href='/apps'
        className='mb-8 text-violet-dark dark:text-violet-light text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-dark dark:focus-visible:outline-violet-light'
      >
        ← Back to Apps
      </Link>
      {app ? (
        <>
          <h1 className='text-3xl font-bold mb-8 self-center'>{app.name}</h1>
          <Image
            src={app.image}
            alt={app.name}
            width={150}
            height={150}
            className='self-center rounded-md transition-opacity'
          />
          <div className='w-[85vw] md:w-[75vw] self-center'>
            <p className='text-md md:text-lg mt-8 text-justify'>
              {app.description}
            </p>
            {app.tbr && (
              <p className='text-md mt-8 text-justify italic'>
                To be released soon.
              </p>
            )}
            <div className='mt-4 self-center flex flex-row justify-center'>
              {app.url && (
                <Button className='border-2 border-violet-light m-4 pl-3 pr-3 hover:shadow-lg dark:hover:shadow-violet-light/40'>
                  <Link href={app.url} target='_blank'>
                    View App in Play Store
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </>
      ) : (
        <NotFound />
      )}
      <Footer />
    </div>
  );
};

export default App;
