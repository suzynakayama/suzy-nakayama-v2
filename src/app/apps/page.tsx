import React from 'react';
import ProjectCard from '../../../components/ProjectCard';
import { Projects, projects } from '../../../data/projects';
import Link from 'next/link';

const Apps: React.FC = () => {
  const apps: Projects = projects.filter(project => project.app === true);
  return (
    <div className='p-10 flex flex-col bg-white dark:bg-black text-violet-dark dark:text-violet-light'>
      <Link
        href='/'
        className='mb-20 text-violet-dark dark:text-violet-light text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-dark dark:focus-visible:outline-violet-light'
      >
        ← Back to Home
      </Link>
      <h3 className='font-head text-3xl mb-26 text-center'>
        Suzy Nakayama Apps
      </h3>
      <div className='md:pl-28 md:pr-28 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {apps.map(app => (
          <ProjectCard key={app.name} project={app} appPage={true} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
