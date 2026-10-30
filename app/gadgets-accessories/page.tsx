'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Headphones,
  Zap,
  Watch,
  Volume2,
  ShieldCheck,
  CheckCircle2,
  SlidersHorizontal,
  ArrowRight,
  Truck
} from 'lucide-react';
import { products } from '@/data/products';
import { blogTopics } from '@/data/blogs';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductCard } from '@/components/ProductCard';
import { FAQAccordion } from '@/components/FAQAccordion';
import { GuideCard } from '@/components/GuideCard';
import { CtaBand } from '@/components/CtaBand';

const categories = [
  {
    id: 'earbuds-headphones',
    label: 'Earbuds & audio',
    href: '/gadgets-accessories/earbuds-headphones',
    icon: Headphones,
    copy: 'ANC noise cancellation and crystal-clear calling mics.'
  },
  {
    id: 'chargers-cables',
    label: 'Chargers & cables',
    href: '/gadgets-accessories/chargers-cables',
    icon: Zap,
    copy: 'GaN 65W wall plugs and 100W braided Type-C cords.'
  },
  {
    id: 'smartwatches',
    label: 'Smartwatches',
    href: '/gadgets-accessories/smartwatches',
    icon: Watch,
    copy: 'AMOLED screens, health tracking and on-wrist calls.'
  },
  {
    id: 'bluetooth-speakers',
    label: 'Bluetooth speakers',
    href: '/gadgets-accessories/bluetooth-speakers',
    icon: Volume2,
    copy: 'Rugged IPX7 waterproof sound with punchy bass.'
  }
];

export default function GadgetsAccessoriesPage() {
  const gadgetProducts = products.filter(p => p.category === 'gadgets-accessories');
  const [selectedSub, setSelectedSub] = useState<string>('all');

  const filtered = gadgetProducts.filter(p => {
    if (selectedSub === 'all') return true;
    return p.subcategory === selectedSub;
  });

  const gadgetBlogs = blogTopics.filter(b => b.cluster === 'gadgets-accessories').slice(0, 4);

  const gadgetFaqs = [
    {
      question: 'Will a 65W GaN charger harm a phone that only supports 20W?',
      answer:
        'No. Modern smartphones negotiate voltage and current via standard Power Delivery (PD) and PPS protocols. Your phone only requests the exact wattage its internal power management IC allows, ensuring safe and efficient charging.'
    },
    {
      question: 'Do your wireless earbuds have active noise cancellation (ANC)?',
      answer:
        'Yes. Models like the Ultima / Havit Pro feature hybrid Active Noise Cancellation up to 30dB to block background traffic and commuting noise, plus quad-mic ENC for clear calls.'
    },
    {
      question: 'What warranty comes with your chargers and cables?',
      answer:
        'Our certified GaN chargers carry a 1 year replacement warranty, and high-density braided cables carry a 6 month replacement warranty against manufacturing defects.'
    },
    {
      question: 'Can I test the sound quality before purchasing in Itahari?',
      answer:
        'Absolutely. Visit our store in the Sundarharaincha-4 corridor to test earbuds and Bluetooth speakers on your own phone before deciding.'
    }
  ];

  return (
    <div className="bg-canvas pb-16 md:pb-24">
      <div className="container-page pt-6">
        <Breadcrumbs items={[{ name: 'Gadgets & accessories', url: '/gadgets-accessories' }]} />
      </div>

      {/* Intro */}
      <section className="border-b border-line bg-surface">
        <div className="container-page py-8 md:py-10">
          <h1 className="display-1">Gadgets and accessories in Itahari</h1>
          <p className="lede mt-3 max-w-2xl">
            Earbuds, chargers, cables, smartwatches and speakers. This is stock we keep at the counter, so
            you can hear it and hold it before you decide.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="container-page pt-6">
        <div className="flex flex-col gap-3 border-b border-line pb-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-1">
            {[{ id: 'all', label: 'All gadgets' }, ...categories].map(cat => {
              const active = selectedSub === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedSub(cat.id)}
                  aria-pressed={active}
                  className={`rounded px-3 py-1.5 text-sm ${
                    active ? 'bg-ink text-white' : 'text-ink-soft hover:bg-white hover:text-ink'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
          <span className="text-sm text-muted" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
          </span>
        </div>
      </div>

      {/* Products */}
      <div className="container-page mt-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Categories */}
      <section className="container-page pt-10">
        <h2 className="heading-3">Browse by type</h2>

        <div className="mt-3 divide-y divide-line border-y border-line">
          {categories.map(cat => (
            <Link
              key={cat.id}
              href={cat.href}
              className="flex items-center gap-3 py-4 hover:bg-white"
            >
              <cat.icon className="size-4 shrink-0 text-muted" aria-hidden="true" />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-ink">{cat.label}</span>
                <span className="mt-0.5 block text-sm text-muted">{cat.copy}</span>
              </span>
              <ArrowRight className="size-4 shrink-0 text-muted" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section className="container-page pt-10">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-2">
          <h2 className="heading-3">Gadget guides</h2>
          <Link href="/blog" className="text-sm text-brand-700 hover:underline hover:underline-offset-2">
            All guides
          </Link>
        </div>
        <div className="grid gap-x-8 sm:grid-cols-2">
          {gadgetBlogs.map(blog => (
            <GuideCard key={blog.id} post={blog} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page pt-10">
        <h2 className="heading-3">Accessory questions</h2>
        <div className="mt-3 max-w-3xl">
          <FAQAccordion faqs={gadgetFaqs} />
        </div>
      </section>

      <div className="mt-10">
        <CtaBand
          title="Want to hear it before you buy it?"
          description="Visit the store to test earbuds and speakers on your own phone, or message us for stock and pricing."
          whatsappMessage="Hello Himal Product & Services, I am interested in an accessory. I would like to ask about: "
        />
      </div>
    </div>
  );
}
