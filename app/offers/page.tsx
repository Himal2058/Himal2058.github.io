import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaBand } from '@/components/CtaBand';

export const metadata = {
  title: 'Offers',
  description:
    'Current bundles on screen repairs, chargers and power banks at the Itahari shop. Prices include VAT and warranty.'
};

const offers = [
  {
    title: 'Free tempered glass with a screen replacement',
    label: 'Repair bundle',
    description:
      'Book a screen replacement at the workshop and we fit a 9H tempered glass protector before you leave. No code needed.',
    cta: 'Book a screen repair',
    whatsapp:
      'Hello Himal Product & Services, I would like to book a screen replacement with the free protector offer.'
  },
  {
    title: '65W charger and 100W cable combo',
    label: 'Save रू 450',
    description:
      'The 65W dual-port GaN adapter with a 2 metre 100W braided USB-C cable for रू 3,299. The pair is normally रू 3,749.',
    cta: 'Ask about the combo',
    whatsapp:
      'Hello Himal Product & Services, I want to order the 65W GaN charger and 100W cable combo.'
  },
  {
    title: 'Student discount on power banks',
    label: 'Student price',
    description:
      '10% off 10,000mAh and 20,000mAh power banks with a valid college ID. Applies at the counter in Sundarharaincha.',
    cta: 'Check the student price',
    whatsapp:
      'Hello Himal Product & Services, I am a student asking about the 10% power bank discount.'
  }
];

const steps = [
  'Pick the offer and send the message.',
  'We confirm stock and the final price.',
  'Collect at the counter, or have it delivered.'
];

export default function OffersPage() {
  return (
    <div className="pb-12 md:pb-16">
      <div className="container-page pt-6">
        <Breadcrumbs items={[{ name: 'Offers', url: '/offers' }]} />
      </div>

      {/* Header */}
      <section className="border-b border-line bg-surface">
        <div className="container-page py-8 md:py-10">
          <h1 className="display-1">Current offers</h1>
          <p className="lede mt-3 max-w-2xl">
            A few bundles we are running at the counter. They change with stock, so ask before you make
            the trip.
          </p>
        </div>
      </section>

      {/* Offers */}
      <section className="container-page pt-8">
        <div className="divide-y divide-line border-y border-line">
          {offers.map(offer => (
            <article key={offer.title} className="grid gap-3 py-5 sm:grid-cols-[1fr_auto] sm:items-start">
              <div>
                <p className="text-xs text-muted">{offer.label}</p>
                <h2 className="mt-1 text-base font-semibold text-ink">{offer.title}</h2>
                <p className="mt-1 text-sm leading-6 text-muted">{offer.description}</p>
              </div>

              <a
                href={getWhatsAppLink(offer.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline shrink-0"
              >
                <MessageSquare className="size-4" aria-hidden="true" />
                <span>{offer.cta}</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* How to claim */}
      <section className="container-page pt-10">
        <h2 className="heading-3">How to claim one</h2>
        <ol className="mt-3 max-w-2xl space-y-2">
          {steps.map((step, index) => (
            <li key={step} className="flex gap-3 text-sm leading-6 text-ink-soft">
              <span className="font-semibold tabular-nums text-muted">{index + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Related links */}
      <section className="container-page pt-10">
        <div className="divide-y divide-line border-y border-line">
          <Link href="/repair-price" className="flex items-center gap-4 py-3 hover:bg-white">
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-medium text-ink">Repair price list</span>
              <span className="mt-0.5 block text-sm text-muted">
                Check the screen, battery and port ranges before you book.
              </span>
            </span>
            <ArrowRight className="size-4 shrink-0 text-muted" aria-hidden="true" />
          </Link>

          <Link href="/warranty" className="flex items-center gap-4 py-3 hover:bg-white">
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-medium text-ink">Warranty terms</span>
              <span className="mt-0.5 block text-sm text-muted">
                An offer never reduces the warranty on a product or repair.
              </span>
            </span>
            <ArrowRight className="size-4 shrink-0 text-muted" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <div className="mt-10">
        <CtaBand
          title="Ask what is running this week"
          description="Offers follow stock. Send a message and we will tell you what is on before you travel."
          whatsappMessage="Hello Himal Product & Services, which offers are running this week?"
        />
      </div>
    </div>
  );
}
