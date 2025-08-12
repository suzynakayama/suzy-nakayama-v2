import React from 'react';

const Projects = () => {
  return (
    <section id='projects'>
      <h3 className='font-head text-3xl mb-6 text-center'>Projects</h3>
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {/* {projects.map(p => (
              <ProjectCard key={p.slug} project={p} />
            ))} */}
      </div>
    </section>
  );
};

export default Projects;
