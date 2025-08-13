import React from 'react';
import {
  projects,
  personalProjects,
  ProjectTypes,
} from '../../../data/projects';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../../components/Button';

const project = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data: ProjectTypes[] = [...projects, ...personalProjects];
  const project: ProjectTypes | undefined = data.find(
    project => project.slug === slug
  );
  const isProfessional = project && 'technologies' in project;
  console.log(isProfessional, project);

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
      className='p-10 flex flex-col bg-white dark:bg-black text-violet-dark 
  dark:text-violet-light'
    >
      <Link
        href='/#projects'
        className='mb-8 text-violet-dark dark:text-violet-light text-sm'
      >
        ← Back to Projects
      </Link>
      {project ? (
        <>
          <h1 className='text-3xl font-bold mb-8 self-center'>
            {project.name}
          </h1>
          <Image
            src={project.image}
            alt={project.name}
            width={150}
            height={150}
            className='self-center rounded-md'
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
                <Button className='border-2 border-violet-light m-4 pl-3 pr-3 hover:shadow-lg dark:hover:shadow-violet-light/40'>
                  <Link href={project.url} target='_blank'>
                    View Project
                  </Link>
                </Button>
              )}
              {isProfessional && project.git && (
                <Button className='border-2 border-violet-light m-4 pl-3 pr-3 hover:shadow-lg dark:hover:shadow-violet-light/40'>
                  <Link href={project.git} target='_blank'>
                    View Code
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </>
      ) : (
        <p>Project not found</p>
      )}
    </div>
  );
};

export default project;
