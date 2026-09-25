import React from 'react';

type ButtonVariant = 'primary' | 'ghost';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
}

export const buttonBase =
  'inline-flex items-center justify-center gap-2 cursor-pointer rounded-full px-5 py-3 border-2 font-body text-xs font-bold uppercase tracking-[0.08em] transition-colors';

export const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'bg-marigold border-marigold text-ink hover:bg-sky hover:border-sky',
  ghost:
    'bg-transparent border-ink-line-strong text-mist hover:bg-periwinkle hover:border-periwinkle hover:text-ink',
};

const Button = ({
  onClick,
  children,
  className = '',
  variant = 'ghost',
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${buttonBase} ${buttonVariants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
