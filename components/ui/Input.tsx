import { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {props.required && <span className="ml-1" style={{color: '#5D0531'}}>*</span>}
        </label>
      )}
      <input
        className={cn(
          'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors',
          error && 'focus:ring-2 focus:border-0 focus:ring-opacity-50',
          error && `border-[#5D0531] focus:ring-[#5D0531]/50`,
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm" style={{color: '#5D0531'}}>{error}</p>}
    </div>
  );
}



