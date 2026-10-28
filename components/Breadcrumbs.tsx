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
  const allItems: BreadcrumbItem[] = [
    { name: 'Home', url: '/' },
    ...items
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(allItems)} />
      <nav aria-label="Breadcrumb" className="py-3 px-4 bg-gray-100 rounded-lg text-sm text-gray-600 mb-6 flex flex-wrap items-center gap-1.5">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition">
          <Home className="w-3.5 h-3.5 mr-1" />
          <span className="sr-only">Home</span>
        </Link>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={item.url}>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400 mx-0.5 flex-shrink-0" />
              {isLast ? (
                <span className="font-semibold text-gray-900 truncate max-w-xs md:max-w-md" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.url} className="text-gray-600 hover:text-blue-600 transition truncate max-w-[150px] md:max-w-xs">
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
