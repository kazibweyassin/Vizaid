import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'text-white hover:opacity-90 focus:ring-opacity-50',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border-2 text-white hover:opacity-90 focus:ring-opacity-50',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  const primaryStyle = variant === 'primary' ? { backgroundColor: '#5D0531' } : undefined;
  const outlineStyle = variant === 'outline' ? { borderColor: '#5D0531', color: '#5D0531' } : undefined;

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      style={variant === 'primary' ? primaryStyle : variant === 'outline' ? outlineStyle : undefined}
      {...props}
    >
      {children}
    </button>
  );
}


