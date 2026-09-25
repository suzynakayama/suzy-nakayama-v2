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
      className='p-10 flex flex-col '
    >
      <Link
        href='/apps'
        className='mb-8 self-start font-mono text-sm text-sky hover:text-marigold transition-colors'
      >
        ← Back to Apps
      </Link>
      {app ? (
        <>
          <h1 className='font-head text-4xl sm:text-5xl uppercase tracking-wide text-center text-balance mb-8 self-center'>{app.name}</h1>
          <Image
            src={app.image}
            alt={app.name}
            width={150}
            height={150}
            className='self-center rounded-2xl border border-ink-line'
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
                <Link href={app.url} target='_blank'>
                  <Button variant='primary' className='m-2'>
                    View App in Play Store
                  </Button>
                </Link>
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
