import React from 'react';
import { projects, personalProjects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id='projects' className='px-4 sm:px-10 h-full scroll-mt-24'>
      <h3 className='font-head text-3xl mb-8 text-center'>Projects</h3>
      <h4 className='text-2xl mb-8 text-center'>Professional Projects</h4>
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map(project => (
          <ProjectCard key={project.name} project={project} appPage={false} />
        ))}
      </div>
      <h4 className='text-2xl mt-12 mb-8 text-center'>Personal Projects</h4>
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {personalProjects.map(project => (
          <ProjectCard key={project.name} project={project} appPage={false} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
