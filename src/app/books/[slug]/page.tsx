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
        <Link href={book.url[key].link} target='_blank'>
          <Button
            key={key}
            className='m-2'
          >
            {book.url[key].btn}
          </Button>
        </Link>
      );
    }
  }

  return (
    <div
      className='p-10 flex flex-col '
    >
      <Link
        href='/books'
        className='mb-8 self-start font-mono text-sm text-sky hover:text-marigold transition-colors'
      >
        ← Back to Books
      </Link>
      {book ? (
        <>
          <h1 className='font-head text-4xl sm:text-5xl uppercase tracking-wide text-center text-balance mb-8 self-center'>{book.name}</h1>
          <Image
            src={book.image}
            alt={book.name}
            width={150}
            height={150}
            className='self-center rounded-2xl border border-ink-line'
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
