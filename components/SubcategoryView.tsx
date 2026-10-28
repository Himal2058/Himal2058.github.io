import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';
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
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[
          { name: parentName, url: parentUrl },
          { name: title, url: currentUrl }
        ]} />

        {/* Hero Section */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm mb-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
              {parentName} Subcategory
            </span>
            <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {h1}
            </h1>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              {description}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              {highlights.map((h, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{h}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Available Products & Models</h2>
            <span className="text-xs text-slate-500">{items.length} models verified in stock</span>
          </div>

          {items.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center text-slate-500 border border-slate-200">
              <p className="text-sm">New inventory arriving shortly. Contact us on WhatsApp for custom orders!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

        {/* FAQs */}
        {faqs && faqs.length > 0 && (
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        )}

        {/* Back Link */}
        <div className="text-center pt-4">
          <Link
            href={parentUrl}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All {parentName}</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
