import { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'light' | 'dark';
}

export default function Input({ label, error, variant = 'light', className, ...props }: InputProps) {
  const isDark = variant === 'dark';

  return (
    <div className="w-full">
      {label && (
        <label className={cn('block text-sm font-medium mb-1', isDark ? 'text-white/80' : 'text-gray-700')}>
          {label}
          {props.required && <span className={cn('ml-1', isDark ? 'text-[#C9973A]' : 'text-[#5D0531]')}>*</span>}
        </label>
      )}
      <input
        className={cn(
          'w-full px-4 py-2 rounded-lg outline-none transition-colors',
          isDark
            ? 'bg-white/5 border border-white/20 text-white placeholder-white/40 focus:border-[#C9973A]/50 focus:ring-2 focus:ring-[#C9973A]/20'
            : 'border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
          error && 'border-rose-500 focus:ring-rose-500/50',
          className
        )}
        {...props}
      />
      {error && (
        <p className={cn('mt-1 text-sm', isDark ? 'text-rose-400' : 'text-[#5D0531]')}>{error}</p>
      )}
    </div>
  );
}
