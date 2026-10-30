'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

const categories = [
  { id: 'all', label: 'Everything', href: null },
  { id: 'mobile-phones', label: 'Phones', href: '/mobile-phones' },
  { id: 'gadgets-accessories', label: 'Gadgets', href: '/gadgets-accessories' },
  { id: 'smart-home', label: 'Smart home', href: '/smart-home' },
  { id: 'power-banks', label: 'Power banks', href: '/power-banks' }
] as const;

const sortOptions = [
  { id: 'featured', label: 'Default' },
  { id: 'price-asc', label: 'Price, low to high' },
  { id: 'price-desc', label: 'Price, high to low' }
] as const;

type SortId = (typeof sortOptions)[number]['id'];

export function ProductCatalogue() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sort, setSort] = useState<SortId>('featured');

  const filtered = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const matches = products.filter(product => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchesQuery =
        query === '' ||
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.highlights.some(highlight => highlight.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });

    const sorted = [...matches];

    if (sort === 'price-asc') sorted.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') sorted.sort((a, b) => b.price - a.price);

    return sorted;
  }, [selectedCategory, searchQuery, sort]);

  const countFor = (id: string) =>
    id === 'all' ? products.length : products.filter(product => product.category === id).length;

  return (
    <div className="pb-12 md:pb-16">
      {/* Search + filters */}
      <div className="container-page pt-6">
        <div className="flex flex-col gap-3 border-b border-line pb-3 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-wrap items-center gap-1">
            {categories.map(category => {
              const active = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  aria-pressed={active}
                  className={`rounded px-3 py-1.5 text-sm ${
                    active ? 'bg-ink text-white' : 'text-ink-soft hover:bg-white hover:text-ink'
                  }`}
                >
                  {category.label} ({countFor(category.id)})
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <label htmlFor="catalogue-search" className="sr-only">
                Search products
              </label>
              <Search
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <input
                id="catalogue-search"
                type="search"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                placeholder="Search products"
                className="h-10 w-56 rounded border border-line bg-white pl-9 pr-3 text-sm text-ink placeholder:text-muted focus:border-brand-500 focus:outline-none sm:w-64"
              />
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="catalogue-sort" className="text-sm text-muted">
                Sort
              </label>
              <select
                id="catalogue-sort"
                value={sort}
                onChange={event => setSort(event.target.value as SortId)}
                className="h-10 rounded border border-line bg-white px-2 text-sm text-ink focus:border-brand-500 focus:outline-none"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <p className="mt-3 text-sm text-muted" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
        </p>
      </div>

      {/* Results */}
      <section className="container-page mt-4">
        <h2 className="sr-only">Products</h2>

        {filtered.length === 0 ? (
          <div className="rounded-card border border-line bg-surface p-5">
            <p className="text-sm text-muted">
              Nothing matches that search. Stock changes often, so message the shop and we will check the
              shelf or order it in.
            </p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="btn-outline"
              >
                Clear filters
              </button>
              <Link href="/contact" className="btn-primary">
                Ask the shop
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Category links */}
      <section className="container-page pt-10">
        <h2 className="heading-3">Browse a collection</h2>
        <div className="mt-3 divide-y divide-line border-y border-line">
          {categories
            .filter(category => category.href)
            .map(category => (
              <Link
                key={category.id}
                href={category.href as string}
                className="flex items-baseline justify-between gap-3 py-3 text-sm hover:bg-white"
              >
                <span className="font-medium text-ink">{category.label}</span>
                <span className="text-muted">{countFor(category.id)} products</span>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
