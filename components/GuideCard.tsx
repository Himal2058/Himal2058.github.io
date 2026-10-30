import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/data/blogs';

interface GuideCardProps {
  post: BlogPost;
}

export function GuideCard({ post }: GuideCardProps) {
  const clusterLabel = {
    'mobile-repair': 'Repair',
    'mobile-phones': 'Phones',
    'gadgets-accessories': 'Gadgets',
    'smart-home': 'Smart home',
    'power-banks': 'Power banks'
  }[post.cluster];

  return (
    <article className="group overflow-hidden rounded-card border border-line bg-surface transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[var(--shadow-soft)]">
      <Link href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
        <div className="relative aspect-[16/9] overflow-hidden bg-brand-50">
          <Image src={post.image} alt="" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        </div>
      </Link>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3 text-xs text-muted">
          <span className="chip-brand">{clusterLabel}</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="mt-3 text-base font-semibold leading-snug text-ink">
          <Link href={`/blog/${post.slug}`} className="hover:text-brand-700">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-brand-700 hover:text-brand-900 hover:underline hover:underline-offset-2">
          Read guide <span aria-hidden="true" className="ml-1">→</span>
        </Link>
      </div>
    </article>
  );
}
