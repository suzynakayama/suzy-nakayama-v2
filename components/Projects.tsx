import React from 'react';
import {
  projects,
  personalProjects,
  Project,
  Projects as ProjectsArr,
  vibeCodingProjects,
  VibeCodingProjects as VibeCodingProjectsArr,
  PersonalProject,
  PersonalProjects,
} from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectsGrid = (
    projects: ProjectsArr | PersonalProjects | VibeCodingProjectsArr
  ) => (
    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
      {projects.map((project: Project | PersonalProject, index) => (
        <ProjectCard
          key={project.name}
          project={project}
          appPage={false}
          index={index}
        />
      ))}
    </div>
  );

  const groupTitle = (title: string, accent: string) => (
    <h3
      className={`border-l-4 ${accent} pl-3 text-xl font-bold mt-14 mb-6 first-of-type:mt-0`}
    >
      {title}
    </h3>
  );

  return (
    <section
      id='projects'
      className='px-6 sm:px-10 scroll-mt-24 mx-auto w-full max-w-5xl'
    >
      <div className='flex flex-wrap items-baseline gap-4 mb-10'>
        <h2 className='font-head text-4xl sm:text-5xl uppercase tracking-wide leading-none'>
          Projects
        </h2>
        <span aria-hidden='true' className='hand-label text-2xl'>
          things I built
        </span>
      </div>
      {groupTitle('Professional Projects', 'border-periwinkle')}
      {projectsGrid(projects)}
      {groupTitle('Vibe Coding Projects', 'border-sky')}
      {projectsGrid(vibeCodingProjects)}
      {groupTitle('Personal Projects', 'border-marigold')}
      {projectsGrid(personalProjects)}
    </section>
  );
};

export default Projects;
