import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { serviceLocations } from '@/data/locations';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaBand } from '@/components/CtaBand';

export const metadata = {
  title: 'Service Areas | Itahari, Dharan, Biratnagar',
  description:
    'Repair and delivery coverage in Itahari, Sundarharaincha, Dharan and Biratnagar.'
};

export default function ServiceAreasPage() {
  return (
    <div className="pb-12 md:pb-16">
      <div className="container-page pt-6">
        <Breadcrumbs items={[{ name: 'Service areas', url: '/service-areas' }]} />
      </div>

      {/* Header */}
      <section className="border-b border-line bg-surface">
        <div className="container-page py-8 md:py-10">
          <h1 className="display-1">Where we work</h1>
          <p className="lede mt-3 max-w-2xl">
            The shop is at Sundarharaincha, on the highway. Delivery runs to Itahari, Dharan and
            Biratnagar the same day, and courier covers the rest of Nepal.
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="container-page pt-6">
        <div className="divide-y divide-line border-b border-line">
          {serviceLocations.map(location => (
            <article key={location.id} className="py-4">
              <h2 className="text-base font-semibold text-ink">
                <Link href={`/service-areas/${location.slug}`} className="hover:underline hover:underline-offset-2">
                  {location.heroTitle}
                </Link>
              </h2>
              <p className="mt-0.5 text-xs text-muted">
                {location.district} district · {location.travelTime}
              </p>
              <p className="mt-1.5 text-sm leading-6 text-muted">{location.description}</p>

              <p className="mt-1.5 text-sm leading-6 text-ink-soft">
                Covers {location.localLandmarks.slice(0, 3).join(', ')}.
              </p>

              <Link
                href={`/service-areas/${location.slug}`}
                className="mt-2 inline-flex items-center gap-1 text-sm text-brand-700 hover:underline hover:underline-offset-2"
              >
                <span>Details for {location.name}</span>
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Nationwide */}
      <section className="container-page pt-8">
        <div className="rounded-card border border-line bg-surface px-5 py-5 sm:px-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-base font-semibold text-ink">Outside Sunsari or Morang?</h2>
              <p className="mt-1 text-sm leading-6 text-muted">
                We send orders by courier to all seven provinces. Orders confirmed before 1:00 PM leave
                the same afternoon.
              </p>
            </div>
            <Link href="/delivery-pickup" className="btn-outline shrink-0">
              <span>Delivery details</span>
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-10">
        <CtaBand
          title="Not sure if we reach your area?"
          description="Send your ward or town on WhatsApp. We will confirm the timing and the nearest pickup point."
          whatsappMessage="Hello Himal Product & Services, I would like to confirm service and delivery in my area: "
        />
      </div>
    </div>
  );
}
