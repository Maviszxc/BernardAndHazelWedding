import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={twMerge(
          clsx(
            'inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-700/50 disabled:opacity-50 disabled:pointer-events-none',
            {
              'bg-navy-600 text-white hover:bg-navy-700 shadow-lg shadow-navy-600/20 hover:shadow-xl hover:shadow-navy-600/30': variant === 'primary',
              'border-2 border-navy-600 text-navy-600 hover:bg-navy-50 hover:border-navy-700 hover:text-navy-700': variant === 'outline',
              'text-navy-600 hover:bg-navy-50 hover:text-navy-700': variant === 'ghost',
              'h-9 px-4 text-sm': size === 'sm',
              'h-11 px-6 text-base': size === 'md',
              'h-12 px-8 text-lg': size === 'lg',
            },
            className
          )
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };