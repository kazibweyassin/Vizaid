import { TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export default function Textarea({ label, error, className, ...props }: TextareaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {props.required && <span className="ml-1" style={{color: '#5D0531'}}>*</span>}
        </label>
      )}
      <textarea
        className={cn(
          'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none',
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



