import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  MessageSquare,
  Phone,
  Clock
} from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';
import { repairServices } from '@/data/repairs';
import { blogTopics } from '@/data/blogs';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RepairEstimator } from '@/components/RepairEstimator';
import { FAQAccordion } from '@/components/FAQAccordion';
import { GuideCard } from '@/components/GuideCard';
import { CtaBand } from '@/components/CtaBand';
import { JsonLd, getServiceSchema } from '@/components/JsonLd';

export const metadata = {
  title: 'Mobile Phone Repair in Itahari | Screen, Battery & Port',
  description:
    'Phone repair shop in Itahari and Sundarharaincha. Screen replacement, battery swap, charging port repair and water damage work, usually finished the same day.'
};

const process = [
  'We test the phone on the bench before opening it: charging current, touch response, battery condition.',
  'You get a price for the part and the labour, and an honest note if the repair is not worth doing.',
  'Only after you agree do we open the phone and replace the part.',
  'We test again, clean the screen and hand over the phone with a warranty slip.'
];

export default function MobileRepairPage() {
  const repairBlogs = blogTopics.filter(b => b.cluster === 'mobile-repair').slice(0, 4);

  const clusterFaqs = [
    {
      question: 'Can I wait while the phone is repaired?',
      answer:
        'Yes. Most screen, battery and charging port jobs take 45 to 90 minutes. There are chairs and a charging point at the counter.'
    },
    {
      question: 'Which brands do you repair?',
      answer:
        'Samsung, Xiaomi, Redmi, Poco, Apple, Realme, OnePlus, Vivo, Oppo, Infinix and Tecno. If we cannot get the part for an older model, we will say so before you leave the phone.'
    },
    {
      question: 'What warranty comes with a repair?',
      answer:
        'Screens carry up to 90 days on touch and display faults. Batteries carry 6 months. Charging ports carry 30 to 90 days. The terms are printed on the slip you take home.'
    },
    {
      question: 'My phone fell in water. What should I do first?',
      answer:
        'Switch it off and do not plug it in. Do not put it in rice. Bring it in as soon as you can so we can clean the board before corrosion spreads.'
    },
    {
      question: 'Is there a charge if the phone cannot be repaired?',
      answer:
        'No. The first check is free. If the board damage is too deep to repair economically, we tell you and you pay nothing.'
    }
  ];

  return (
    <div className="pb-12 md:pb-16">
      <JsonLd
        data={getServiceSchema({
          title: 'Mobile Phone Repair Services in Itahari',
          description:
            'Smartphone diagnostics, screen replacement, battery repair and water damage recovery in Itahari, Nepal.',
          url: '/mobile-repair',
          priceRange: 'रू 700 - रू 14500'
        })}
      />

      <div className="container-page pt-6">
        <Breadcrumbs items={[{ name: 'Mobile repair', url: '/mobile-repair' }]} />
      </div>

      {/* Intro */}
      <section className="border-b border-line bg-surface">
        <div className="container-page py-8 md:py-10">
          <h1 className="display-1">Mobile phone repair in Itahari</h1>
          <p className="lede mt-3 max-w-2xl">
            Cracked screen, dying battery, loose charging port, or a phone that got wet. Bring it to the
            counter and we will tell you what it needs. Most jobs are done the same day.
          </p>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <a
              href={getWhatsAppLink(
                'Hello Himal Product & Services, I need a phone repair in Itahari. My device model is: '
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageSquare className="size-4" aria-hidden="true" />
              <span>Message us about a repair</span>
            </a>
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn-outline">
              <Phone className="size-4" aria-hidden="true" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>

          <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4" aria-hidden="true" />
              45 to 90 minutes for common repairs
            </span>
            <span>Free first check</span>
            <span>Written warranty slip</span>
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="container-page pt-8">
        <h2 className="heading-3">How a repair works</h2>
        <ol className="mt-3 max-w-2xl space-y-2">
          {process.map((step, index) => (
            <li key={step} className="flex gap-3 text-sm leading-6 text-ink-soft">
              <span className="font-semibold tabular-nums text-muted">{index + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Services */}
      <section className="container-page pt-10">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-2">
          <h2 className="heading-3">Repairs we do</h2>
          <Link href="/repair-price" className="text-sm text-brand-700 hover:underline hover:underline-offset-2">
            Full price list
          </Link>
        </div>

        <ul className="divide-y divide-line">
          {repairServices.map(service => (
            <li key={service.id} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-ink">
                  <Link
                    href={`/mobile-repair/${service.slug}`}
                    className="hover:underline hover:underline-offset-2"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted">{service.shortDescription}</p>
              </div>

              <div className="shrink-0 text-sm sm:text-right">
                <p className="font-semibold text-ink">
                  {service.estimatedPriceRange.split('(')[0].trim()}
                </p>
                <p className="mt-0.5 text-xs text-muted">{service.turnaroundTime}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Estimator */}
      <section className="container-page pt-10">
        <h2 className="heading-3">Estimate a repair</h2>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-muted">
          Choose a brand and the fault to see a range. The final price depends on the model and the part
          you choose.
        </p>
        <div className="mt-4">
          <RepairEstimator />
        </div>
      </section>

      {/* Data safety */}
      <section className="container-page pt-10">
        <div className="card p-5 sm:p-6">
          <h2 className="text-base font-semibold text-ink">Your data during a repair</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
            Screen and battery work does not need your passcode, and we do not open photos, messages or
            banking apps. If you prefer, switch on Android Maintenance Mode or keep the phone locked while
            you hand it over.
          </p>
          <p className="mt-3 text-sm">
            <Link href="/repair-policy" className="text-brand-700 hover:underline hover:underline-offset-2">
              Repair policy and terms
            </Link>
            <span className="mx-2 text-line-strong">|</span>
            <Link href="/warranty" className="text-brand-700 hover:underline hover:underline-offset-2">
              Warranty details
            </Link>
          </p>
        </div>
      </section>

      {/* Guides */}
      <section className="container-page pt-10">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-2">
          <h2 className="heading-3">Repair guides</h2>
          <Link href="/blog" className="text-sm text-brand-700 hover:underline hover:underline-offset-2">
            All guides
          </Link>
        </div>
        <div className="grid gap-x-8 sm:grid-cols-2">
          {repairBlogs.map(blog => (
            <GuideCard key={blog.id} post={blog} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page pt-10">
        <h2 className="heading-3">Questions we get at the counter</h2>
        <div className="mt-3 max-w-3xl">
          <FAQAccordion faqs={clusterFaqs} />
        </div>
      </section>

      <div className="mt-10">
        <CtaBand
          title="Want a price before you travel?"
          description="Send the phone model and a photo of the problem. We will confirm the part, the price and how long the repair takes."
          whatsappMessage="Hello Himal Product & Services, I would like to book a phone repair. My device model and fault are: "
        />
      </div>
    </div>
  );
}
