import React from 'react';
import Link from 'next/link';
import { AlertCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RepairEstimator } from '@/components/RepairEstimator';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CtaBand } from '@/components/CtaBand';
import { JsonLd, getServiceSchema } from '@/components/JsonLd';

export const metadata = {
  title: 'Repair Prices | Phone Screen, Battery and Port Repair',
  description:
    'Repair price ranges for phone screens, batteries, charging ports and water damage in Itahari. Free check, price agreed before work starts.'
};

const benchmarks = [
  {
    service: 'Screen replacement',
    price: 'रू 1,800 to 14,500',
    turnaround: '45 to 90 minutes',
    warranty: 'Up to 90 days on touch and display'
  },
  {
    service: 'Battery replacement',
    price: 'रू 1,200 to 4,500',
    turnaround: '30 to 60 minutes',
    warranty: '6 months'
  },
  {
    service: 'Charging port repair',
    price: 'रू 700 to 2,500',
    turnaround: '30 to 45 minutes',
    warranty: '30 to 90 days'
  },
  {
    service: 'Water damage cleaning',
    price: 'रू 1,500 to 5,500',
    turnaround: '2 to 24 hours',
    warranty: 'Tested before handover'
  },
  {
    service: 'Earpiece or loudspeaker',
    price: 'रू 600 to 2,200',
    turnaround: '30 to 45 minutes',
    warranty: '30 days'
  },
  {
    service: 'Software flash and bootloop',
    price: 'रू 500 to 1,800',
    turnaround: '30 to 90 minutes',
    warranty: '15 days'
  }
];

const priceFactors = [
  {
    title: 'Which panel you choose',
    copy: 'An original AMOLED assembly costs much more than a good LCD. We give you both prices before ordering.'
  },
  {
    title: 'How new the phone is',
    copy: 'Newer models use bonded assemblies and in-screen sensors, so the part costs more and the job takes longer.'
  },
  {
    title: 'What the price covers',
    copy: 'Part, labour, adhesive and the written warranty slip. There is no separate fitting charge.'
  }
];

export default function RepairPricePage() {
  const priceFaqs = [
    {
      question: 'Why does an AMOLED screen cost more than an LCD?',
      answer:
        'AMOLED panels are thinner, brighter and carry the in-screen fingerprint sensor, so the part costs more. An LCD is cheaper but usually not an option if your phone came with AMOLED.'
    },
    {
      question: 'Do you charge a check fee if the phone cannot be repaired?',
      answer:
        'No. The first check is free. If the board damage is too deep to make the repair worthwhile, we say so and you pay nothing.'
    },
    {
      question: 'Is labour included in these prices?',
      answer:
        'Yes. The range covers the part, the labour and the warranty. The only thing that changes it is your exact model and the grade of part you pick.'
    }
  ];

  return (
    <div className="pb-12 md:pb-16">
      <JsonLd
        data={getServiceSchema({
          title: 'Mobile Phone Repair Prices in Itahari',
          description:
            'Price ranges for smartphone screen, battery and charging port repairs in Itahari, Nepal.',
          url: '/repair-price',
          priceRange: 'रू 500 - रू 14500'
        })}
      />

      <div className="container-page pt-6">
        <Breadcrumbs
          items={[
            { name: 'Mobile repair', url: '/mobile-repair' },
            { name: 'Repair prices', url: '/repair-price' }
          ]}
        />
      </div>

      {/* Header */}
      <section className="border-b border-line bg-surface">
        <div className="container-page py-8 md:py-10">
          <h1 className="display-1">Repair prices</h1>
          <p className="lede mt-3 max-w-2xl">
            Rough ranges for the work we do most. The exact figure depends on your model and the part you
            choose, and it is agreed with you before anything is opened.
          </p>
        </div>
      </section>

      {/* Estimator */}
      <section className="container-page pt-8">
        <h2 className="heading-3">Estimate a repair</h2>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-muted">
          Pick a brand and a fault to narrow the range.
        </p>
        <div className="mt-4">
          <RepairEstimator />
        </div>
      </section>

      {/* Benchmarks */}
      <section className="container-page pt-10">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-2">
          <h2 className="heading-3">Price list</h2>
          <p className="text-xs text-muted">Updated October 2026</p>
        </div>

        <div className="mt-4 overflow-x-auto rounded-card border border-line bg-surface">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <caption className="sr-only">Repair price ranges in Nepali rupees</caption>
            <thead>
              <tr className="border-b border-line bg-canvas">
                <th scope="col" className="px-4 py-2.5 text-xs font-medium text-muted">
                  Repair
                </th>
                <th scope="col" className="px-4 py-2.5 text-xs font-medium text-muted">
                  Range (NPR)
                </th>
                <th scope="col" className="px-4 py-2.5 text-xs font-medium text-muted">
                  Time
                </th>
                <th scope="col" className="px-4 py-2.5 text-xs font-medium text-muted">
                  Warranty
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {benchmarks.map(row => (
                <tr key={row.service}>
                  <th scope="row" className="px-4 py-3 text-sm font-medium text-ink">
                    {row.service}
                  </th>
                  <td className="whitespace-nowrap px-4 py-3 tabular-nums text-ink">{row.price}</td>
                  <td className="px-4 py-3 text-muted">{row.turnaround}</td>
                  <td className="px-4 py-3 text-muted">{row.warranty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-muted">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>
            These are ranges, not quotes. A cracked screen on a five-year-old phone and on a new flagship
            are very different jobs.
          </span>
        </p>
      </section>

      {/* What affects price */}
      <section className="container-page pt-10">
        <h2 className="heading-3">What changes the price</h2>
        <div className="mt-3 divide-y divide-line border-y border-line">
          {priceFactors.map(factor => (
            <div key={factor.title} className="py-3">
              <h3 className="text-sm font-medium text-ink">{factor.title}</h3>
              <p className="mt-1 text-sm leading-6 text-muted">{factor.copy}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
          <Link href="/repair-policy" className="text-brand-700 hover:underline hover:underline-offset-2">
            Repair policy
          </Link>
          <Link href="/warranty" className="text-brand-700 hover:underline hover:underline-offset-2">
            Warranty terms
          </Link>
          <span className="text-muted">Most repairs finish the same day.</span>
        </p>
      </section>

      {/* FAQs */}
      <section className="container-page pt-10">
        <h2 className="heading-3">Pricing questions</h2>
        <div className="mt-3 max-w-3xl">
          <FAQAccordion faqs={priceFaqs} />
        </div>
      </section>

      <div className="mt-10">
        <CtaBand
          title="Want a firm price for your model?"
          description="Send the model and a photo of the problem on WhatsApp. We will reply with the part options and the final price."
          whatsappMessage="Hello Himal Product & Services, I would like an exact repair quote. My phone model and fault are: "
        />
      </div>
    </div>
  );
}
