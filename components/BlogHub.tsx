'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { blogTopics } from '@/data/blogs';
import { GuideCard } from '@/components/GuideCard';

const clusters = [
  { id: 'all', label: 'All topics' },
  { id: 'mobile-repair', label: 'Repair' },
  { id: 'mobile-phones', label: 'Phones' },
  { id: 'gadgets-accessories', label: 'Gadgets' },
  { id: 'smart-home', label: 'Smart home' },
  { id: 'power-banks', label: 'Power banks' }
];

export function BlogHub() {
  const [selectedCluster, setSelectedCluster] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return blogTopics.filter(post => {
      const matchesCluster = selectedCluster === 'all' || post.cluster === selectedCluster;
      const matchesSearch =
        query === '' ||
        post.title.toLowerCase().includes(query) ||
        post.primaryQuery.toLowerCase().includes(query) ||
        post.problemSolved.toLowerCase().includes(query);

      return matchesCluster && matchesSearch;
    });
  }, [selectedCluster, searchQuery]);

  return (
    <div className="pb-12 md:pb-16">
      {/* Intro */}
      <section className="border-b border-line bg-surface">
        <div className="container-page py-8 md:py-10">
          <h1 className="display-1">Guides and repair notes</h1>
          <p className="lede mt-3 max-w-2xl">
            Notes written at the bench: what fails, what it costs, and what you can check at home before
            bringing a device in. {blogTopics.length} articles so far.
          </p>
        </div>
      </section>

      {/* Search + filters */}
      <div className="container-page pt-6">
        <label htmlFor="blog-search" className="sr-only">
          Search guides
        </label>
        <div className="relative max-w-md">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted"
            aria-hidden="true"
          />
          <input
            id="blog-search"
            type="search"
            value={searchQuery}
            onChange={event => setSearchQuery(event.target.value)}
            placeholder="Search, for example: charging port"
            className="h-10 w-full rounded border border-line bg-white pl-9 pr-3 text-sm text-ink placeholder:text-muted focus:border-brand-500 focus:outline-none"
          />
        </div>

          <div className="mt-4 flex flex-wrap items-center gap-2 border-b border-line pb-3">
          {clusters.map(cluster => {
            const active = selectedCluster === cluster.id;
            return (
              <button
                key={cluster.id}
                type="button"
                onClick={() => setSelectedCluster(cluster.id)}
                aria-pressed={active}
                className={`min-h-11 rounded px-3 py-2 text-sm transition-colors ${
                  active ? 'bg-ink text-white' : 'text-ink-soft hover:bg-white hover:text-ink'
                }`}
              >
                {cluster.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Guides */}
      <section className="container-page pt-6">
        <h2 className="sr-only">All guides</h2>
        <p className="text-sm text-muted" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? 'guide' : 'guides'}
        </p>

        {filtered.length === 0 ? (
          <div className="mt-4 rounded-card border border-line bg-surface p-5">
            <p className="text-sm text-muted">
              Nothing matches that search. Try a different word, or send us a message and we will answer
              directly.
            </p>
            <Link href="/contact" className="btn-outline mt-3">
              Ask a question
            </Link>
          </div>
        ) : (
          <div className="mt-2 grid gap-x-8 sm:grid-cols-2">
            {filtered.map(post => (
              <GuideCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
