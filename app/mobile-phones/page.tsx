'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { products } from '@/data/products';
import { blogTopics } from '@/data/blogs';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductCard } from '@/components/ProductCard';
import { FAQAccordion } from '@/components/FAQAccordion';
import { GuideCard } from '@/components/GuideCard';
import { CtaBand } from '@/components/CtaBand';

export default function MobilePhonesPage() {
  const phoneProducts = products.filter(p => p.category === 'mobile-phones');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('recommended');

  const filtered = phoneProducts
    .filter(p => {
      if (selectedBrand === 'all') return true;
      return p.brand.toLowerCase().includes(selectedBrand.toLowerCase());
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return b.price - a.price;
    });

  const phoneBlogs = blogTopics.filter(b => b.cluster === 'mobile-phones').slice(0, 4);

  const phoneFaqs = [
    {
      question: 'Are the phones MDMS registered?',
      answer:
        'Yes. Every handset is registered on the Nepal Telecommunications Authority MDMS system and sold with a VAT bill, so there is no risk of network blocking on NTC, Ncell or Smart Cell.'
    },
    {
      question: 'What warranty do I get?',
      answer:
        'One year of manufacturer warranty, serviced at the authorised brand centres in Nepal. Keep the bill; the service centre will ask for it.'
    },
    {
      question: 'Can you move my contacts and chats from the old phone?',
      answer:
        'Yes. Data transfer is free when you buy a phone here. Bring the old handset and we will move contacts, photos and WhatsApp across the counter.'
    },
    {
      question: 'Do you deliver to Dharan and Biratnagar?',
      answer:
        'Same-day delivery in Itahari, Dharan, Biratnagar and Sundarharaincha. Other districts go by courier, usually 2 to 4 days.'
    }
  ];

  return (
    <div className="pb-12 md:pb-16">
      <div className="container-page pt-6">
        <Breadcrumbs items={[{ name: 'Smartphones', url: '/mobile-phones' }]} />
      </div>

      {/* Intro */}
      <section className="border-b border-line bg-surface">
        <div className="container-page py-8 md:py-10">
          <h1 className="display-1">Smartphones in Itahari</h1>
          <p className="lede mt-3 max-w-2xl">
            Samsung, Redmi, Apple and Vivo handsets with a proper bill, MDMS registration and the brand
            warranty. We set the phone up and move your data before you leave.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="container-page pt-6">
        <div className="flex flex-col gap-3 border-b border-line pb-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-1">
            {['all', 'Samsung', 'Xiaomi', 'Apple'].map(brand => {
              const active = selectedBrand === brand;
              return (
                <button
                  key={brand}
                  type="button"
                  onClick={() => setSelectedBrand(brand)}
                  aria-pressed={active}
                  className={`rounded px-3 py-1.5 text-sm ${
                    active
                      ? 'bg-ink text-white'
                      : 'text-ink-soft hover:bg-white hover:text-ink'
                  }`}
                >
                  {brand === 'all' ? 'All brands' : brand}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="phone-sort" className="text-sm text-muted">
              Sort by
            </label>
            <select
              id="phone-sort"
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="h-9 rounded border border-line bg-white px-2 text-sm text-ink focus:border-brand-500 focus:outline-none"
            >
              <option value="recommended">Recommended</option>
              <option value="price-low">Price, low to high</option>
              <option value="price-high">Price, high to low</option>
            </select>
          </div>
        </div>

        <p className="mt-3 text-sm text-muted" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? 'phone' : 'phones'}
        </p>
      </div>

      {/* Products */}
      <div className="container-page mt-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Buying notes */}
      <section className="container-page pt-10">
        <h2 className="heading-3">Before you buy</h2>
        <ul className="mt-3 max-w-2xl space-y-2 text-sm leading-6 text-ink-soft">
          <li>Check the IMEI on the box against the phone. We will show you both.</li>
          <li>The bill is in your name, which is what the service centre asks for later.</li>
          <li>Bring your old phone if you want contacts and photos moved across.</li>
          <li>Ask about the part cost on screens before you choose a model. Curved AMOLED panels cost more to replace.</li>
        </ul>
      </section>

      {/* Categories */}
      <section className="container-page pt-10">
        <h2 className="heading-3">Browse by type</h2>
        <div className="mt-3 divide-y divide-line border-y border-line">
          {[
            {
              href: '/mobile-phones/android',
              title: 'Android phones',
              copy: 'Samsung, Xiaomi and Realme, from budget models to 5G.'
            },
            {
              href: '/mobile-phones/iphone',
              title: 'Apple iPhone',
              copy: 'iPhone 13, 14 and 15 with official Nepal units.'
            }
          ].map(item => (
            <Link key={item.href} href={item.href} className="flex items-center justify-between gap-4 py-4 hover:bg-white">
              <span>
                <span className="block text-base font-semibold text-ink">{item.title}</span>
                <span className="mt-0.5 block text-sm text-muted">{item.copy}</span>
              </span>
              <ArrowRight className="size-4 shrink-0 text-muted" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section className="container-page pt-10">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-2">
          <h2 className="heading-3">Phone buying guides</h2>
          <Link href="/blog" className="text-sm text-brand-700 hover:underline hover:underline-offset-2">
            All guides
          </Link>
        </div>
        <div className="grid gap-x-8 sm:grid-cols-2">
          {phoneBlogs.map(blog => (
            <GuideCard key={blog.id} post={blog} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page pt-10">
        <h2 className="heading-3">Buying questions</h2>
        <div className="mt-3 max-w-3xl">
          <FAQAccordion faqs={phoneFaqs} />
        </div>
      </section>

      <div className="mt-10">
        <CtaBand
          title="Tell us your budget"
          description={`Send a message with what you need the phone for. We will suggest two or three models from current stock. Shop line: ${siteConfig.phone}.`}
          whatsappMessage="Hello Himal Product & Services, I am looking for a smartphone. My budget and requirements are: "
        />
      </div>
    </div>
  );
}
