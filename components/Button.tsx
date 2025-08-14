import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ onClick, children, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer p-2 rounded hover:bg-violet-light dark:hover:bg-black dark:hover:text-violet-light rounded-full transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-dark dark:focus-visible:outline-violet-light ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
