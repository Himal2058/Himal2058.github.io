import React from 'react';
import Link from 'next/link';
import { MessageSquare, Phone, ArrowLeft, ArrowRight } from 'lucide-react';
import { RepairService } from '@/data/repairs';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQAccordion } from '@/components/FAQAccordion';
import { JsonLd, getServiceSchema } from '@/components/JsonLd';

interface Props {
  service: RepairService;
}

export function RepairDetailView({ service }: Props) {
  const whatsappBookingMessage = `Hello Himal Product & Services, I would like to book ${service.title} in Itahari.
- Estimated range: ${service.estimatedPriceRange}
- Turnaround: ${service.turnaroundTime}
When can I bring the phone in?`;

  return (
    <div className="pb-12 md:pb-16">
      <JsonLd
        data={getServiceSchema({
          title: service.h1,
          description: service.shortDescription,
          url: `/mobile-repair/${service.slug}`,
          priceRange: service.estimatedPriceRange
        })}
      />

      <div className="container-page pt-6">
        <Breadcrumbs
          items={[
            { name: 'Mobile repair', url: '/mobile-repair' },
            { name: service.title, url: `/mobile-repair/${service.slug}` }
          ]}
        />
      </div>

      {/* Intro */}
      <section className="border-b border-line bg-surface">
        <div className="container-page py-8 md:py-10">
          <h1 className="display-1">{service.h1}</h1>
          <p className="lede mt-3 max-w-2xl">{service.fullDescription}</p>

          <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <div>
              <dt className="text-muted">Typical time</dt>
              <dd className="font-medium text-ink">{service.turnaroundTime}</dd>
            </div>
            <div>
              <dt className="text-muted">Warranty</dt>
              <dd className="font-medium text-ink">{service.warrantyDetails}</dd>
            </div>
            <div>
              <dt className="text-muted">Price range</dt>
              <dd className="font-medium text-ink">{service.estimatedPriceRange}</dd>
            </div>
          </dl>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <a
              href={getWhatsAppLink(whatsappBookingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageSquare className="size-4" aria-hidden="true" />
              <span>Book this repair</span>
            </a>
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn-outline">
              <Phone className="size-4" aria-hidden="true" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>

      <div className="container-page max-w-4xl">
        {/* Symptoms */}
        <section className="pt-8">
          <h2 className="heading-3">Signs the phone needs this</h2>
          <ul className="mt-3 grid gap-x-8 gap-y-1.5 sm:grid-cols-2">
            {service.commonSymptoms.map(symptom => (
              <li key={symptom} className="flex gap-2 text-sm leading-6 text-ink-soft">
                <span className="text-muted">•</span>
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Process */}
        <section className="pt-8">
          <h2 className="heading-3">What we do on the bench</h2>
          <ol className="mt-3 space-y-2">
            {service.diagnosticProcess.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm leading-6 text-ink-soft">
                <span className="font-semibold tabular-nums text-muted">{index + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Price note */}
        <section className="pt-8">
          <div className="rounded-card border border-line bg-surface p-5">
            <p className="text-sm text-muted">Estimated cost</p>
            <p className="mt-1 text-xl font-semibold text-ink">{service.estimatedPriceRange}</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              This covers the part and the labour. The final figure depends on your model and whether the
              screen is AMOLED or LCD. You get the exact number before any work starts.
            </p>
            <Link
              href="/repair-price"
              className="mt-3 inline-block text-sm text-brand-700 hover:underline hover:underline-offset-2"
            >
              Check prices for other models
            </Link>
          </div>
        </section>

        {/* Brands */}
        <section className="pt-8">
          <h2 className="heading-3">Brands we service</h2>
          <p className="mt-2 text-sm leading-6 text-ink-soft">{service.supportedBrands.join(', ')}.</p>
        </section>

        {/* FAQ */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="pt-8">
            <h2 className="heading-3">Questions about this repair</h2>
            <div className="mt-3">
              <FAQAccordion faqs={service.faqs} />
            </div>
          </section>
        )}

        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <Link href="/mobile-repair" className="inline-flex items-center gap-1.5 text-muted hover:text-brand-700 hover:underline">
            <ArrowLeft className="size-4" aria-hidden="true" />
            <span>All repair services</span>
          </Link>
          <Link href="/repair-price" className="inline-flex items-center gap-1.5 text-brand-700 hover:underline hover:underline-offset-2">
            <span>Repair price list</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
