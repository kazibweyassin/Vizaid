import { tourPackages } from './tours-data';
import { TourPackage } from '@/types';

export interface SearchFilters {
  query?: string;
  type?: 'domestic' | 'international';
  category?: string;
  minPrice?: number;
  maxPrice?: number;
}

export function searchTours(filters: SearchFilters): TourPackage[] {
  let results = [...tourPackages];

  // Search by query (title, destination, description, category)
  if (filters.query) {
    const query = filters.query.toLowerCase();
    results = results.filter((tour) => {
      const searchableText = [
        tour.title,
        tour.destination,
        tour.description,
        tour.category,
        ...tour.highlights,
      ]
        .join(' ')
        .toLowerCase();
      return searchableText.includes(query);
    });
  }

  // Filter by type
  if (filters.type) {
    results = results.filter((tour) => tour.type === filters.type);
  }

  // Filter by category
  if (filters.category) {
    results = results.filter((tour) => tour.category.toLowerCase() === filters.category?.toLowerCase());
  }

  // Filter by price range
  if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
    results = results.filter((tour) => {
      const priceMatch = tour.price.match(/\$?([\d,]+)/);
      if (!priceMatch) return true;
      
      const price = parseFloat(priceMatch[1].replace(/,/g, ''));
      const minPrice = filters.minPrice ?? 0;
      const maxPrice = filters.maxPrice ?? Infinity;
      
      return price >= minPrice && price <= maxPrice;
    });
  }

  return results;
}

export function getSearchSuggestions(query: string): string[] {
  if (!query || query.length < 2) return [];

  const suggestions = new Set<string>();
  const lowerQuery = query.toLowerCase();

  tourPackages.forEach((tour) => {
    // Add destination if it matches
    if (tour.destination.toLowerCase().includes(lowerQuery)) {
      suggestions.add(tour.destination);
    }
    // Add category if it matches
    if (tour.category.toLowerCase().includes(lowerQuery)) {
      suggestions.add(tour.category);
    }
    // Add title words if they match
    tour.title.split(' ').forEach((word) => {
      if (word.toLowerCase().includes(lowerQuery) && word.length > 3) {
        suggestions.add(word);
      }
    });
  });

  return Array.from(suggestions).slice(0, 5);
}

