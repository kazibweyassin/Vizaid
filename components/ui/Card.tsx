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
      <div
        className={cn('rounded-2xl p-6 relative overflow-hidden', hover && 'transition-all duration-300 hover:-translate-y-1 cursor-pointer', className)}
        style={{ background: '#0f1923', border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 8px 40px rgba(0,0,0,0.35)' }}
      >
        {/* decorative oversized quote */}
        <div className="absolute -top-6 -left-6 text-[120px] leading-none text-white/5 pointer-events-none select-none">“</div>

        {/* optional badge + rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {badge && <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{backgroundColor: 'rgba(201,151,58,0.15)', color: '#C9973A'}}>{badge}</span>}
          </div>
          {typeof rating === 'number' && (
            <div className="flex items-center gap-1 text-sm font-semibold text-white/60">
              <span style={{color: '#C9973A'}}>{'★'.repeat(Math.round(rating))}</span>
              <span className="text-xs">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>

        <div>{children}</div>
      </div>
    );
  }

  return (
    <div
      className={cn('rounded-xl p-6', hover && 'transition-all duration-300 hover:-translate-y-1 cursor-pointer', className)}
      style={{ background: '#0f1923', border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 8px 40px rgba(0,0,0,0.35)' }}
    >
      {children}
    </div>
  );
}




