'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Lightbulb,
  Power,
  Camera,
  ShieldCheck,
  CheckCircle2,
  SlidersHorizontal,
  ArrowRight,
  Wifi,
  Cpu,
  AlertCircle
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
    id: 'smart-bulbs',
    label: 'Smart bulbs',
    href: '/smart-home/smart-bulbs',
    icon: Lightbulb,
    copy: '16 million RGB colours, warm white and scheduled timers.'
  },
  {
    id: 'smart-plugs-switches',
    label: '16A smart plugs',
    href: '/smart-home/smart-plugs-switches',
    icon: Power,
    copy: 'Safe automation for geysers, pumps and ACs with energy metering.'
  },
  {
    id: 'smart-security',
    label: 'Security cameras',
    href: '/smart-home/smart-security',
    icon: Camera,
    copy: 'Night vision, two-way audio and local SD card recording.'
  }
];

const setupSteps = [
  {
    title: 'Screw in or plug in',
    copy: 'Fits standard Nepali B22/E27 bulb sockets or regular 16A wall plugs. No electrician visit required.'
  },
  {
    title: 'Pair via the free app',
    copy: 'Install Tuya Smart or Smart Life on Android or iPhone and connect to your home 2.4GHz Wi-Fi.'
  },
  {
    title: 'Schedule and relax',
    copy: 'Set automatic geyser shutoffs, use Google Assistant voice control and monitor live energy usage.'
  }
];

export default function SmartHomePage() {
  const smartProducts = products.filter(p => p.category === 'smart-home');
  const [selectedSub, setSelectedSub] = useState<string>('all');

  const filtered = smartProducts.filter(p => {
    if (selectedSub === 'all') return true;
    return p.subcategory === selectedSub;
  });

  const smartBlogs = blogTopics.filter(b => b.cluster === 'smart-home').slice(0, 4);

  const smartFaqs = [
    {
      question: 'Do I need a hub or extra wiring for smart home devices?',
      answer:
        'No. They connect to your existing 2.4GHz Wi-Fi router and run from the Tuya or Smart Life app. You screw in the bulb or plug the device into a socket.'
    },
    {
      question: 'Can a 16A smart plug handle a geyser or an AC?',
      answer:
        'Yes, up to 3500 watts. The 16A plugs have a flame-retardant casing and are made for water heaters, air conditioners and room heaters. Do not use a 10A plug for those loads.'
    },
    {
      question: 'What happens after a power cut?',
      answer:
        'The device reconnects to Wi-Fi on its own. You choose in the app whether the appliance stays off or returns to its previous state.'
    },
    {
      question: 'Do the cameras need a monthly subscription?',
      answer:
        'No. They record to a microSD card up to 256GB. You watch live and play back from the phone app at no monthly cost.'
    }
  ];

  return (
    <div className="bg-canvas pb-16 md:pb-24">
      <div className="container-page pt-6">
        <Breadcrumbs items={[{ name: 'Smart home devices & automation', url: '/smart-home' }]} />
      </div>

      {/* Intro */}
      <section className="border-b border-line bg-surface">
        <div className="container-page py-8 md:py-10">
          <h1 className="display-1">Smart home devices in Itahari</h1>
          <p className="lede mt-3 max-w-2xl">
            Wi-Fi bulbs, 16A plugs for geysers and ACs, and pan-tilt cameras. They run on your existing
            router and the free Tuya or Smart Life app. No hub, no rewiring.
          </p>
        </div>
      </section>

      {/* Safety notice */}
      <div className="container-page pt-6">
        <div className="flex items-start gap-3 rounded-card border border-line bg-surface p-4">
          <AlertCircle className="mt-0.5 size-5 shrink-0 text-accent-600" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-ink">Geyser and AC loads need a 16A plug</p>
            <p className="mt-1 text-sm leading-6 text-muted">
              A standard 10A plug is not safe above 2000 watts. For water heaters, immersion rods and air
              conditioners, use the 16A rated plug. We will tell you which one your appliance needs.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container-page pt-6">
        <div className="flex flex-col gap-3 border-b border-line pb-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-1">
            {[{ id: 'all', label: 'All smart devices' }, ...categories].map(cat => {
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Setup steps */}
      <section className="container-page pt-10">
        <h2 className="heading-3">Setting one up</h2>
        <ol className="mt-3 max-w-2xl space-y-2">
          {setupSteps.map((step, index) => (
            <li key={step.title} className="flex gap-3 text-sm leading-6 text-ink-soft">
              <span className="font-semibold tabular-nums text-muted">{index + 1}.</span>
              <span>
                <span className="font-semibold text-ink">{step.title}. </span>
                {step.copy}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Categories */}
      <section className="container-page pt-10">
        <h2 className="heading-3">Browse by type</h2>

        <div className="mt-3 divide-y divide-line border-y border-line">
          {categories.map(cat => (
            <Link key={cat.id} href={cat.href} className="flex items-center gap-3 py-4 hover:bg-white">
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
          <h2 className="heading-3">Smart home guides</h2>
          <Link href="/blog" className="text-sm text-brand-700 hover:underline hover:underline-offset-2">
            All guides
          </Link>
        </div>
        <div className="grid gap-x-8 sm:grid-cols-2">
          {smartBlogs.map(blog => (
            <GuideCard key={blog.id} post={blog} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page pt-10">
        <h2 className="heading-3">Setup questions</h2>
        <div className="mt-3 max-w-3xl">
          <FAQAccordion faqs={smartFaqs} />
        </div>
      </section>

      <div className="mt-10">
        <CtaBand
          title="Not sure what you need?"
          description="Tell us the room, the appliance and what you want it to do. We will suggest the simplest setup."
          whatsappMessage="Hello Himal Product & Services, I would like advice on smart home devices for: "
        />
      </div>
    </div>
  );
}
