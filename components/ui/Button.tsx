import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outlineLight';
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
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';
  
  const variants = {
    primary: 'text-white hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] focus:ring-opacity-50',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border-2 text-white hover:bg-[#5D0531]/25 hover:scale-[1.02] active:scale-[0.98] focus:ring-opacity-50',
    outlineLight: 'border-2 border-white text-white bg-white/10 hover:bg-white/25 hover:scale-[1.02] active:scale-[0.98] focus:ring-opacity-50',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  const primaryStyle = variant === 'primary' ? { backgroundColor: '#5D0531' } : undefined;
  const outlineStyle = variant === 'outline' ? { borderColor: '#5D0531', color: '#5D0531' } : undefined;
  const style = variant === 'primary' ? primaryStyle : variant === 'outline' ? outlineStyle : undefined;

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}


