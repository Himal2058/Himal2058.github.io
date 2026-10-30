'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BatteryCharging,
  Zap,
  Laptop,
  ShieldCheck,
  SlidersHorizontal,
  ArrowRight,
  Plane
} from 'lucide-react';
import { products } from '@/data/products';
import { blogTopics } from '@/data/blogs';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductCard } from '@/components/ProductCard';
import { FAQAccordion } from '@/components/FAQAccordion';
import { GuideCard } from '@/components/GuideCard';
import { CtaBand } from '@/components/CtaBand';

const capacities = [
  {
    id: 'slim-portable',
    label: '10,000mAh slim',
    icon: BatteryCharging,
    title: '10,000mAh pocket size',
    detail: 'Weighs around 180g. Slips easily into jeans pockets and purses.',
    outcome: 'About 1.3–1.5 phone charges. Perfect for daily office commutes.'
  },
  {
    id: 'high-capacity',
    label: '20,000mAh',
    icon: Zap,
    title: '20,000mAh high capacity',
    detail: 'Weighs around 420g. Digital percentage display with three-port output.',
    outcome: 'About 3–4 phone charges. Ideal for road trips and weekend travel.'
  },
  {
    id: 'laptop-charging',
    label: '65W laptop PD',
    icon: Laptop,
    title: '65W PD for laptops',
    detail: 'High-output Type-C power delivery. Recharges in under 90 minutes.',
    outcome: 'Powers MacBook, Dell, ThinkPad laptops and gaming consoles.'
  }
];

export default function PowerBanksPage() {
  const powerProducts = products.filter(p => p.category === 'power-banks');
  const [selectedSub, setSelectedSub] = useState<string>('all');

  const filtered = powerProducts.filter(p => {
    if (selectedSub === 'all') return true;
    return p.subcategory === selectedSub;
  });

  const powerBlogs = blogTopics.filter(b => b.cluster === 'power-banks').slice(0, 4);

  const powerFaqs = [
    {
      question: 'Why does a 10,000mAh power bank not give 2 full charges to a 5,000mAh phone?',
      answer:
        'Internal lithium cells operate at 3.7V. When power is boosted to 5V or 9V for USB delivery, conversion heat and resistance account for a standard 15% to 20% efficiency loss. A genuine 10,000mAh battery delivers roughly 6,300mAh to 6,600mAh of usable charge.'
    },
    {
      question: 'Can I bring a 20,000mAh power bank on domestic and international flights in Nepal?',
      answer:
        'Yes. Aviation safety guidelines (ICAO/IATA and CAAN) permit power banks up to 100 watt-hours in hand carry luggage. A 20,000mAh battery is rated at 74Wh, fully legal for air travel.'
    },
    {
      question: 'Can a 65W power bank really charge a MacBook or USB-C laptop?',
      answer:
        'Yes. Our 65W Baseus Blade power banks feature high-wattage Power Delivery 3.0 that can fully power MacBooks, Dell XPS, HP Spectre and Lenovo ThinkPad laptops on the go.'
    },
    {
      question: 'What warranty do you provide on power banks?',
      answer:
        'All our branded power banks (Baseus, Remax, Joyroom) come with a 1 year official replacement warranty covering cell defects and circuit failure.'
    }
  ];

  return (
    <div className="bg-canvas pb-16 md:pb-24">
      <div className="container-page pt-6">
        <Breadcrumbs items={[{ name: 'Power banks & portable charging', url: '/power-banks' }]} />
      </div>

      {/* Intro */}
      <section className="border-b border-line bg-surface">
        <div className="container-page py-8 md:py-10">
          <h1 className="display-1">Power banks in Itahari</h1>
          <p className="lede mt-3 max-w-2xl">
            Pocket 10,000mAh packs, 20,000mAh fast chargers and 65W banks that will run a laptop. All
            under 100Wh, so they are allowed in hand luggage.
          </p>
        </div>
      </section>

      {/* Capacity guidance */}
      <section className="container-page pt-8">
        <h2 className="heading-3">Which size do you need?</h2>
        <div className="mt-3 divide-y divide-line border-y border-line">
          {capacities.map(item => (
            <div key={item.id} className="py-4">
              <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
              <p className="mt-1 text-sm leading-6 text-muted">{item.detail}</p>
              <p className="mt-1 text-sm leading-6 text-ink-soft">{item.outcome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Filters */}
      <div className="container-page pt-8">
        <div className="flex flex-col gap-3 border-b border-line pb-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-1">
            {[{ id: 'all', label: 'All capacities' }, ...capacities].map(cat => {
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
            {filtered.length} {filtered.length === 1 ? 'model' : 'models'}
          </span>
        </div>
      </div>

      {/* Products */}
      <div className="container-page mt-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Guides */}
      <section className="container-page pt-10">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-2">
          <h2 className="heading-3">Power bank guides</h2>
          <Link href="/blog" className="text-sm text-brand-700 hover:underline hover:underline-offset-2">
            All guides
          </Link>
        </div>
        <div className="grid gap-x-8 sm:grid-cols-2">
          {powerBlogs.map(blog => (
            <GuideCard key={blog.id} post={blog} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page pt-10">
        <h2 className="heading-3">Charging questions</h2>
        <div className="mt-3 max-w-3xl">
          <FAQAccordion faqs={powerFaqs} />
        </div>
      </section>

      <div className="mt-10">
        <CtaBand
          title="Tell us what you need to charge"
          description="Phone, tablet or laptop. We will match the capacity and confirm it is within the airline limit."
          whatsappMessage="Hello Himal Product & Services, I am looking for a power bank. My device and usage are: "
        />
      </div>
    </div>
  );
}
