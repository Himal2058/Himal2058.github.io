import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaBand } from '@/components/CtaBand';

export const metadata = {
  title: 'About Us | Himal Product and Services, Itahari',
  description:
    'A repair workshop and electronics shop in Sundarharaincha, Morang. Open since 2022, serving Itahari, Dharan and Biratnagar.'
};

const credentials = [
  { label: 'Registered name', value: siteConfig.name },
  { label: 'Open since', value: '2022' },
  {
    label: 'Shop and workshop',
    value: `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.province}`
  },
  { label: 'We serve', value: 'Itahari, Sunsari, Morang and the rest of Koshi' },
  { label: 'Phone', value: siteConfig.phone },
  { label: 'Email', value: siteConfig.email }
];

const policies = [
  {
    href: '/warranty',
    title: 'Warranty',
    copy: 'How long parts and products are covered, and what the slip covers.'
  },
  {
    href: '/repair-policy',
    title: 'Repair policy',
    copy: 'What we do with your device, and what we will not do.'
  },
  {
    href: '/store-location',
    title: 'Find the shop',
    copy: 'Map, landmarks and directions from Itahari and Dharan.'
  }
];

export default function AboutUsPage() {
  return (
    <div className="pb-12 md:pb-16">
      <div className="container-page pt-6">
        <Breadcrumbs items={[{ name: 'About us', url: '/about-us' }]} />
      </div>

      {/* Header */}
      <section className="border-b border-line bg-surface">
        <div className="container-page py-8 md:py-10">
          <h1 className="display-1">About the shop</h1>
          <p className="lede mt-3 max-w-2xl">
            Himal Product and Services opened in 2022 at Sundarharaincha, on the highway between Itahari
            and Biratnagar. There is a repair bench at the back and a shop at the front.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="container-page pt-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div>
            <h2 className="heading-3">Why the shop exists</h2>

            <div className="prose-page mt-3">
              <p>
                People were being asked to leave a phone for three days to change a screen, and the price
                they were quoted at the counter was not the price they paid. That was the situation we
                opened into, and it is the thing we decided to do differently.
              </p>
              <p>
                We keep common parts in stock, so most screen and battery jobs are finished while you
                wait. If a part has to be ordered, you get the date before you leave the phone behind.
              </p>
              <p>
                The shop sells the same brands it repairs: Samsung, Redmi, Apple, Vivo, Realme and the
                accessories that go with them. Every handset comes with a VAT bill and MDMS registration.
              </p>
            </div>

            <h2 className="heading-3 mt-8">What you can expect</h2>
            <ul className="mt-3 space-y-1.5 text-sm leading-6 text-ink-soft">
              <li>Free first check, with a price before anything is opened.</li>
              <li>A written slip for every repair, with the warranty printed on it.</li>
              <li>Your passcode is not needed for screen, battery or port work.</li>
              <li>Delivery in Itahari, Dharan, Biratnagar and Sundarharaincha the same day.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-card border border-line bg-surface p-4">
              <h2 className="text-sm font-semibold text-ink">Shop details</h2>
              <dl className="mt-3 divide-y divide-line">
                {credentials.map((item, index) => (
                  <div key={item.label} className={`py-2 ${index === 0 ? 'pt-0' : ''}`}>
                    <dt className="text-xs text-muted">{item.label}</dt>
                    <dd className="mt-0.5 break-words text-sm text-ink">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <Link
              href="/store-location"
              className="flex items-start gap-3 rounded-card border border-line bg-surface p-4 hover:border-line-strong"
            >
              <MapPin className="mt-0.5 size-4 shrink-0 text-muted" aria-hidden="true" />
              <span>
                <span className="block text-sm font-medium text-ink">Getting here</span>
                <span className="mt-0.5 block text-xs leading-5 text-muted">
                  {siteConfig.address.landmark}
                </span>
              </span>
              <ArrowRight className="ml-auto mt-0.5 size-4 shrink-0 text-muted" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="container-page pt-10">
        <h2 className="heading-3">Policies and practical details</h2>
        <div className="mt-3 divide-y divide-line border-y border-line">
          {policies.map(link => (
            <Link key={link.href} href={link.href} className="flex items-center gap-4 py-3 hover:bg-white">
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-ink">{link.title}</span>
                <span className="mt-0.5 block text-sm text-muted">{link.copy}</span>
              </span>
              <ArrowRight className="size-4 shrink-0 text-muted" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-10">
        <CtaBand
          title="Questions about the shop?"
          description="Call the counter or send a message. You will reach the person who does the repairs."
          whatsappMessage="Hello Himal Product & Services, I would like to know more about your store and services."
        />
      </div>
    </div>
  );
}
