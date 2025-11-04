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
      {projects.map((project: Project | PersonalProject) => (
        <ProjectCard key={project.name} project={project} appPage={false} />
      ))}
    </div>
  );

  return (
    <section id='projects' className='px-4 sm:px-10 h-full scroll-mt-24'>
      <h3 className='font-head text-3xl mb-8 text-center'>Projects</h3>
      <h4 className='text-2xl mb-8 text-center'>Professional Projects</h4>
      {projectsGrid(projects)}
      <h4 className='text-2xl mt-12 mb-8 text-center'>Vibe Coding Projects</h4>
      {projectsGrid(vibeCodingProjects)}
      <h4 className='text-2xl mt-12 mb-8 text-center'>Personal Projects</h4>
      {projectsGrid(personalProjects)}
    </section>
  );
};

export default Projects;
