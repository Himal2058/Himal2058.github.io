import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Truck } from 'lucide-react';
import { Product } from '@/data/products';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductCard } from '@/components/ProductCard';
import { FAQAccordion, FAQItem } from '@/components/FAQAccordion';

interface SubcategoryViewProps {
  title: string;
  h1: string;
  description: string;
  parentName: string;
  parentUrl: string;
  currentUrl: string;
  products: Product[];
  highlights: string[];
  faqs?: FAQItem[];
}

export function SubcategoryView({
  title,
  h1,
  description,
  parentName,
  parentUrl,
  currentUrl,
  products: items,
  highlights,
  faqs
}: SubcategoryViewProps) {
  return (
    <div className="pb-12 md:pb-16">
      <div className="container-page pt-6">
        <Breadcrumbs
          items={[
            { name: parentName, url: parentUrl },
            { name: title, url: currentUrl }
          ]}
        />
      </div>

      {/* Intro */}
      <section className="border-b border-line bg-surface">
        <div className="container-page py-8 md:py-10">
          <h1 className="display-1">{h1}</h1>
          <p className="lede mt-3 max-w-2xl">{description}</p>

          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
            {highlights.map(highlight => (
              <li key={highlight} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-brand-600" aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Products */}
      <section className="container-page pt-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-2">
          <h2 className="heading-3">{title}</h2>
          <p className="text-sm text-muted">
            {items.length} {items.length === 1 ? 'model' : 'models'}
          </p>
        </div>

        {items.length === 0 ? (
          <div className="mt-4 rounded-card border border-line bg-surface p-5">
            <p className="text-sm text-muted">
              Nothing in this category right now. Message us and we will tell you when stock arrives.
            </p>
            <Link href="/contact" className="btn-outline mt-3">
              Ask about stock
            </Link>
          </div>
        ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className="container-page pt-10">
          <h2 className="heading-3">Questions</h2>
          <div className="mt-3 max-w-3xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </section>
      )}

      <div className="container-page flex flex-col gap-3 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <Link href={parentUrl} className="inline-flex items-center gap-1.5 text-muted hover:text-brand-700 hover:underline">
          <ArrowLeft className="size-4" aria-hidden="true" />
          <span>Back to {parentName.toLowerCase()}</span>
        </Link>
        <p className="inline-flex items-center gap-1.5 text-muted">
          <Truck className="size-4" aria-hidden="true" />
          Delivery in Itahari, Dharan and Biratnagar
        </p>
      </div>
    </div>
  );
}
