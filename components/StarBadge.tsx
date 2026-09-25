import React from 'react';

// Signature sticker: a twinkling star in a marigold circle
const StarBadge = ({ className = '' }: { className?: string }) => {
  return (
    <div
      aria-hidden='true'
      className={`grid place-items-center w-14 h-14 rounded-full bg-marigold text-ink shadow-[0_0_0_4px_var(--color-ink),0_10px_30px_rgb(255_176_32/0.45)] ${className}`}
    >
      <svg
        viewBox='0 0 24 24'
        fill='currentColor'
        className='w-6 h-6 animate-twinkle'
      >
        <path d='M12 1.5 14.2 9.8 22.5 12 14.2 14.2 12 22.5 9.8 14.2 1.5 12 9.8 9.8Z' />
      </svg>
    </div>
  );
};

export default StarBadge;
