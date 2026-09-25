import React from 'react';
import { ProjectTypes } from '../data/projects';
import Link from 'next/link';
import Image from 'next/image';

// Accents rotate through the three Blue Hour colors, each keeping its role
const accents = [
  'hover:border-periwinkle hover:shadow-[0_14px_38px_-10px_rgb(124_140_255/0.55)]',
  'hover:border-sky hover:shadow-[0_14px_38px_-10px_rgb(92_207_255/0.55)]',
  'hover:border-marigold hover:shadow-[0_14px_38px_-10px_rgb(255_176_32/0.55)]',
];

type ProjectCardProps = {
  project: ProjectTypes;
  appPage: boolean;
  bookPage?: boolean;
  index?: number;
};

const ProjectCard = ({
  project,
  appPage,
  bookPage,
  index = 0,
}: ProjectCardProps) => {
  return (
    <Link
      href={
        appPage
          ? `/apps/${project.slug}`
          : bookPage
          ? `/books/${project.slug}`
          : `/${project.slug}`
      }
      className={`p-5 bg-ink-soft border border-ink-line rounded-2xl text-center grid grid-cols-1 gap-3 min-h-[200px] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 ${
        accents[index % accents.length]
      }`}
    >
      <h4 className='text-lg font-bold'>{project.name}</h4>
      <Image
        src={project.image}
        alt={project.name}
        width={100}
        height={100}
        placeholder='blur'
        blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyayoQfghX/2Q=='
        className='justify-self-center self-center rounded-xl'
      />
    </Link>
  );
};

export default ProjectCard;
