import React from 'react';
import ProjectCard from '../../../components/ProjectCard';
import { Projects, projects } from '../../../data/projects';
import Link from 'next/link';

const Apps: React.FC = () => {
  const apps: Projects = projects.filter(project => project.app === true);
  return (
    <div className='p-10 flex flex-col '>
      <Link
        href='/'
        className='mb-20 self-start font-mono text-sm text-sky hover:text-marigold transition-colors'
      >
        ← Back to Home
      </Link>
      <h3 className='font-head text-4xl sm:text-5xl uppercase tracking-wide mb-16 text-center'>
        Suzy Nakayama Apps
      </h3>
      <div className='md:pl-28 md:pr-28 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {apps.map((app, index) => (
          <ProjectCard
            key={app.name}
            project={app}
            appPage={true}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Apps;
