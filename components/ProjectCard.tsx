import React from 'react';
import { ProjectTypes } from '../data/projects';
import Link from 'next/link';
import Image from 'next/image';

type ProjectCardProps = {
  project: ProjectTypes;
  appPage: boolean;
  bookPage?: boolean;
};

const ProjectCard = ({ project, appPage, bookPage }: ProjectCardProps) => {
  return (
    <Link
      href={
        appPage
          ? `/apps/${project.slug}`
          : bookPage
          ? `/books/${project.slug}`
          : `/${project.slug}`
      }
      className='p-4 border-4 border-violet-light rounded-3xl hover:shadow-lg dark:hover:shadow-violet-light/40 transition-shadow text-center grid grid-cols-1 gap-2 min-h-[200px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-dark dark:focus-visible:outline-violet-light'
    >
      <h1 className='text-lg'>{project.name}</h1>
      <Image
        src={project.image}
        alt={project.name}
        width={100}
        height={100}
        placeholder='blur'
        blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyayoQfghX/2Q=='
        className='justify-self-center self-center rounded-md transition-opacity'
      />
    </Link>
  );
};

export default ProjectCard;
