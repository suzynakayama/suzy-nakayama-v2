import React from 'react';
import {
  projects,
  personalProjects,
  ProjectTypes,
  vibeCodingProjects,
} from '../../../data/projects';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../../components/Button';
import Footer from '../../../components/Footer';
import NotFound from '../not-found';

const project = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data: ProjectTypes[] = [
    ...projects,
    ...vibeCodingProjects,
    ...personalProjects,
  ];
  const project: ProjectTypes | undefined = data.find(
    project => project.slug === slug
  );
  const isProfessional = project && 'technologies' in project;

  const professionalProjectInfo = () => {
    if (!project) return null;
    if (!isProfessional) return null;
    return (
      <>
        {project?.difficulties && (
          <p className='text-md md:text-lg mt-8 text-justify'>
            Difficulties: {project.difficulties}
          </p>
        )}
        {project?.technologies && (
          <p className='text-md md:text-lg mt-8 text-justify'>
            Technologies: {project.technologies}
          </p>
        )}
      </>
    );
  };

  return (
    <div
      className='p-10 flex flex-col min-h-screen'
    >
      <Link
        href='/#projects'
        className='mb-8 self-start font-mono text-sm text-sky hover:text-marigold transition-colors'
      >
        ← Back to Projects
      </Link>
      {project ? (
        <>
          <h1 className='font-head text-4xl sm:text-5xl uppercase tracking-wide text-center text-balance mb-8 self-center'>
            {project.name}
          </h1>
          <Image
            src={project.image}
            alt={project.name}
            width={150}
            height={150}
            className='self-center rounded-2xl border border-ink-line'
          />
          <div className='w-[85vw] md:w-[75vw] self-center'>
            <p className='text-md md:text-lg mt-8 text-justify'>
              {project.description}
            </p>
            {isProfessional && professionalProjectInfo()}
            {project.tbr && (
              <p className='text-md mt-8 text-justify italic'>
                To be released soon.
              </p>
            )}
            <div className='mt-4 self-center flex flex-row justify-center'>
              {project.url && (
                <Link href={project.url} target='_blank'>
                  <Button variant='primary' className='m-2'>
                    View Project
                  </Button>
                </Link>
              )}
              {isProfessional && project.git && (
                <Link href={project.git} target='_blank'>
                  <Button className='m-2'>
                    View Code
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

export default project;
