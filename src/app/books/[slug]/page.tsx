import Image from 'next/image';
import Link from 'next/link';
import React, { JSX } from 'react';
import Button from '../../../../components/Button';
import NotFound from '@/app/not-found';
import Footer from '../../../../components/Footer';
import { books, Book as BookType } from '../../../../data/books';

const Book = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const book: BookType | undefined = books.find(book => book.slug === slug);
  const buttons = [];

  if (book && book.url) {
    for (const key in book.url) {
      buttons.push(
        <Button
          key={key}
          className='border-2 border-violet-light m-4 pl-3 pr-3 hover:shadow-lg dark:hover:shadow-violet-light/40'
        >
          <Link href={book.url[key].link} target='_blank'>
            {book.url[key].btn}
          </Link>
        </Button>
      );
    }
  }

  return (
    <div
      className='p-10 flex flex-col bg-white dark:bg-black text-violet-dark 
  dark:text-violet-light  '
    >
      <Link
        href='/books'
        className='mb-8 text-violet-dark dark:text-violet-light text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-dark dark:focus-visible:outline-violet-light'
      >
        ← Back to Books
      </Link>
      {book ? (
        <>
          <h1 className='text-3xl font-bold mb-8 self-center'>{book.name}</h1>
          <Image
            src={book.image}
            alt={book.name}
            width={150}
            height={150}
            className='self-center rounded-md transition-opacity'
          />
          <div className='w-[85vw] md:w-[75vw] self-center'>
            <p className='text-md md:text-lg mt-8 text-justify'>
              {book.description}
            </p>
            {book.tbr && (
              <p className='text-md mt-8 text-justify italic'>
                To be released soon.
              </p>
            )}
            <div className='mt-4 self-center flex flex-col sm:flex-row justify-center'>
              {book.url && buttons.map(button => button)}
            </div>
          </div>
        </>
      ) : (
        <NotFound />
      )}
      <Footer />
    </div>
  );
};

export default Book;
