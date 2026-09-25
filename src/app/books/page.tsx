import React from 'react';
import ProjectCard from '../../../components/ProjectCard';

import Link from 'next/link';
import { Book, books } from '../../../data/books';

const Books: React.FC = () => {
  const allBooks: Book[] = books;
  return (
    <div className='p-10 flex flex-col '>
      <h3 className='font-head text-4xl sm:text-5xl uppercase tracking-wide mt-16 mb-16 text-center'>
        Yukimitsu Books
      </h3>
      <div className='md:pl-28 md:pr-28 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {allBooks.map((book, index) => (
          <ProjectCard
            key={book.name}
            project={book}
            appPage={false}
            bookPage={true}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Books;
