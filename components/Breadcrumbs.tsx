import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { JsonLd, getBreadcrumbSchema } from './JsonLd';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ name: 'Home', url: '/' }, ...items];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(allItems)} />
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-sm text-muted">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded py-1 font-medium text-muted transition hover:text-brand-700"
        >
          <Home className="size-3.5" aria-hidden="true" />
          <span>Home</span>
        </Link>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={item.url}>
              <ChevronRight className="size-3.5 shrink-0 text-line-strong" aria-hidden="true" />
              {isLast ? (
                <span
                  className="max-w-[16rem] truncate py-1 font-semibold text-ink sm:max-w-md"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="max-w-[10rem] truncate rounded py-1 font-medium transition hover:text-brand-700 sm:max-w-xs"
                >
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}
