import { SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  variant?: 'light' | 'dark';
  options: { value: string; label: string }[];
}

export default function Select({ label, error, variant = 'light', options, className, ...props }: SelectProps) {
  const isDark = variant === 'dark';

  return (
    <div className="w-full">
      {label && (
        <label className={cn('block text-sm font-medium mb-1', isDark ? 'text-white/80' : 'text-gray-700')}>
          {label}
          {props.required && <span className={cn('ml-1', isDark ? 'text-[#C9973A]' : 'text-[#5D0531]')}>*</span>}
        </label>
      )}
      <select
        className={cn(
          'w-full px-4 py-2 rounded-lg outline-none transition-colors',
          isDark
            ? 'bg-white/5 border border-white/20 text-white focus:border-[#C9973A]/50 focus:ring-2 focus:ring-[#C9973A]/20 [&>option]:bg-[#0f1923] [&>option]:text-white'
            : 'border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
          error && 'border-rose-500 focus:ring-rose-500/50',
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className={cn('mt-1 text-sm', isDark ? 'text-rose-400' : 'text-[#5D0531]')}>{error}</p>
      )}
    </div>
  );
}
