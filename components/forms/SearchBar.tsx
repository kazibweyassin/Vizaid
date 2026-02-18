'use client';

import { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/Button';

type SearchParams = {
  q?: string;
  start?: string;
  end?: string;
};

type Props = {
  initialQuery?: string;
  initialStart?: string;
  initialEnd?: string;
  onSearch: (p: SearchParams) => void;
  className?: string;
  compact?: boolean;
};

export default function SearchBar({
  initialQuery = '',
  initialStart = '',
  initialEnd = '',
  onSearch,
  className = '',
  compact = false,
}: Props) {
  const [query, setQuery] = useState(initialQuery);
  const [start, setStart] = useState(initialStart);
  const [end, setEnd] = useState(initialEnd);
  const [error, setError] = useState('');
  const [recent, setRecent] = useState<string[]>([]);
  const [showRecent, setShowRecent] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const debounceRef = useRef<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('vizaid.recentSearches');
      if (raw) setRecent(JSON.parse(raw));
    } catch (e) {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    return () => {
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
    };
  }, []);

  const persistRecent = (q: string) => {
    if (!q) return;
    try {
      const next = [q, ...recent.filter((r) => r !== q)].slice(0, 5);
      setRecent(next);
      localStorage.setItem('vizaid.recentSearches', JSON.stringify(next));
    } catch (e) {
      /* ignore */
    }
  };

  const validate = () => {
    setError('');
    if (start && end && end < start) {
      setError('End date must be the same or after start date');
      return false;
    }
    return true;
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!validate()) return;
    const payload: SearchParams = {};
    if (query.trim()) payload.q = query.trim();
    if (start) payload.start = start;
    if (end) payload.end = end;
    persistRecent(query.trim());
    onSearch(payload);
    setShowRecent(false);
  };

  const handleClear = () => {
    setQuery('');
    setStart('');
    setEnd('');
    inputRef.current?.focus();
  };

  const handleType = (value: string) => {
    setQuery(value);
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => {
      // keep for future live-suggestions / analytics
    }, 300);
  };

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={`${className} ${compact ? 'py-2' : ''} flex items-center gap-3`}
      aria-label="Site search"
      onBlur={() => setTimeout(() => setShowRecent(false), 150)}
    >
      <div className={`flex-1 flex items-center gap-3 ${compact ? 'bg-white/90 rounded-lg p-2' : ''}`}>
        <label className="sr-only" htmlFor="search-q">
          Search destinations
        </label>
        <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          id="search-q"
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => handleType(e.target.value)}
          onFocus={() => setShowRecent(true)}
          placeholder="Search destinations, tours, wildlife..."
          className={`flex-1 border-none outline-none text-gray-900 placeholder-gray-400 ${compact ? 'text-sm' : 'text-lg'} px-2`}
          aria-label="Search destinations"
        />
        {query && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={handleClear}
            className="text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        )}
      </div>

      <div className="flex items-center gap-2">
        <label className="sr-only" htmlFor="start-date">
          Start date
        </label>
        <input
          id="start-date"
          type="date"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="border-none outline-none text-gray-900 text-sm bg-transparent cursor-pointer"
          min={new Date().toISOString().split('T')[0]}
          aria-label="Start date"
        />
        <span className="text-gray-400">-</span>
        <label className="sr-only" htmlFor="end-date">
          End date
        </label>
        <input
          id="end-date"
          type="date"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="border-none outline-none text-gray-900 text-sm bg-transparent cursor-pointer"
          min={start || new Date().toISOString().split('T')[0]}
          aria-label="End date"
        />
      </div>

      <Button type="submit" variant="primary" size={compact ? 'sm' : 'md'} className={compact ? 'px-4' : ''}>
        Search
      </Button>

      {error && (
        <div role="alert" className="text-sm text-rose-500 ml-3" id="search-error">
          {error}
        </div>
      )}

      {/* recent searches */}
      {showRecent && recent.length > 0 && (
        <div className="absolute mt-14 bg-white rounded shadow-md p-2 w-[260px] z-40">
          <div className="text-xs text-gray-500 px-2">Recent searches</div>
          <ul className="mt-1">
            {recent.map((r) => (
              <li key={r}>
                <button
                  type="button"
                  onClick={() => {
                    setQuery(r);
                    inputRef.current?.focus();
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm text-gray-800"
                >
                  {r}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}
