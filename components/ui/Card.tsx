import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'premium';
  badge?: string;
  rating?: number;
}

export default function Card({ children, className, hover = false, variant = 'default', badge, rating }: CardProps) {
  if (variant === 'premium') {
    return (
      <div className={cn('bg-white rounded-2xl shadow-2xl p-6 relative overflow-hidden', hover && 'transition-transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer', className)}>
        {/* decorative oversized quote */}
        <div className="absolute -top-6 -left-6 text-[120px] leading-none text-black/5 pointer-events-none select-none">“</div>

        {/* optional badge + rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {badge && <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{backgroundColor: 'rgba(93,5,49,0.06)', color: '#5D0531'}}>{badge}</span>}
          </div>
          {typeof rating === 'number' && (
            <div className="flex items-center gap-1 text-sm font-semibold text-gray-600">
              <span style={{color: '#C9973A'}}>{'★'.repeat(Math.round(rating))}</span>
              <span className="text-xs text-gray-400">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>

        <div>{children}</div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md p-6',
        hover && 'transition-transform hover:scale-105 hover:shadow-lg cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
}




