import React from 'react';
import { ProjectTypes } from '../data/projects';
import Link from 'next/link';
import Image from 'next/image';

type ProjectCardProps = {
  project: ProjectTypes;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      href={`/${project.slug}`}
      className='p-4 border-4 border-violet-light rounded-3xl hover:shadow-lg dark:hover:shadow-violet-light/40 transition-shadow text-center grid grid-cols-1 grid-rows-[1fr, 2fr] md:h-45 lg:h-50 gap-2'
    >
      <h1 className='text-lg'>{project.name}</h1>
      <Image
        src={project.image}
        alt={project.name}
        width={100}
        height={100}
        className='justify-self-center self-center rounded-md'
      />
    </Link>
  );
};

export default ProjectCard;
