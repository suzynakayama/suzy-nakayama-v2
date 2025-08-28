import React from 'react';
import ProjectCard from '../../../components/ProjectCard';

import Link from 'next/link';
import { Book, books } from '../../../data/books';

const Books: React.FC = () => {
  const allBooks: Book[] = books;
  return (
    <div className='p-10 flex flex-col bg-white dark:bg-black text-violet-dark dark:text-violet-light'>
      <h3 className='font-head text-3xl mt-16 mb-26 text-center'>
        Yukimitsu Books
      </h3>
      <div className='md:pl-28 md:pr-28 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {allBooks.map(book => (
          <ProjectCard
            key={book.name}
            project={book}
            appPage={false}
            bookPage={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Books;
