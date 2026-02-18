import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  test('submits query and dates to onSearch', () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);

    const q = screen.getByLabelText(/Search destinations/i);
    const start = screen.getByLabelText(/Start date/i);
    const end = screen.getByLabelText(/End date/i);
    const submit = screen.getByRole('button', { name: /Search/i });

    fireEvent.change(q, { target: { value: 'gorillas' } });
    fireEvent.change(start, { target: { value: '2026-03-01' } });
    fireEvent.change(end, { target: { value: '2026-03-10' } });
    fireEvent.click(submit);

    expect(onSearch).toHaveBeenCalledWith({ q: 'gorillas', start: '2026-03-01', end: '2026-03-10' });
  });

  test('shows validation error when end < start and does not call onSearch', () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);

    const start = screen.getByLabelText(/Start date/i);
    const end = screen.getByLabelText(/End date/i);
    const submit = screen.getByRole('button', { name: /Search/i });

    fireEvent.change(start, { target: { value: '2026-04-10' } });
    fireEvent.change(end, { target: { value: '2026-04-01' } });
    fireEvent.click(submit);

    expect(screen.getByRole('alert')).toHaveTextContent('End date must be the same or after start date');
    expect(onSearch).not.toHaveBeenCalled();
  });
});
