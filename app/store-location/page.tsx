import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Navigation, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaBand } from '@/components/CtaBand';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'Store Location | Sundarharaincha, Morang',
  description:
    'Find the shop at Sundarharaincha-4, Morang, ten minutes east of Itahari Chowk on the highway. Directions, hours and parking.'
};

const directions = [
  {
    title: 'From Itahari Chowk',
    copy: 'Take the highway east towards Sundarharaincha and Gothgaon. About ten minutes on, we are on the main road in ward 4. Parking is in front of the shop.'
  },
  {
    title: 'From Biratnagar or Dharan',
    copy: 'From Biratnagar, head north on the Koshi Highway to Itahari Chowk (about 25 minutes), then ten minutes east. From Dharan, drive south past Itahari. Either way, stay on the highway and skip the inner market lanes.'
  }
];

const nearby = ['Itahari', 'Sundarharaincha', 'Dharan', 'Biratnagar', 'Inaruwa', 'Belbari'];

export default function StoreLocationPage() {
  const storeSchema = {
    '@context': 'https://schema.org',
    '@type': 'ElectronicsStore',
    name: siteConfig.name,
    hasMap: siteConfig.googleMapsUrl,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.province,
      postalCode: siteConfig.address.postalCode,
      addressCountry: 'NP'
    },
    telephone: siteConfig.phone
  };

  return (
    <div className="pb-12 md:pb-16">
      <JsonLd data={storeSchema} />

      <div className="container-page pt-6">
        <Breadcrumbs items={[{ name: 'Store location', url: '/store-location' }]} />
      </div>

      {/* Header */}
      <section className="border-b border-line bg-surface">
        <div className="container-page py-8 md:py-10">
          <h1 className="display-1">Store location</h1>
          <p className="lede mt-3 max-w-2xl">
            {siteConfig.address.street}, {siteConfig.address.city}. On the highway between Itahari and
            Biratnagar.
          </p>
          <p className="mt-2 text-sm text-muted">{siteConfig.address.landmark}</p>
        </div>
      </section>

      {/* Map */}
      <section className="container-page pt-6">
        <div className="overflow-hidden rounded-card border border-line bg-surface">
          <iframe
            title="Himal Product and Services workshop location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.123456789!2d87.2781325!3d26.687414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d33be82599b%3A0xb67ac2eefb668b5f!2sHimal%20product%20and%20service!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full sm:h-96"
          />

          <div className="flex flex-col gap-3 border-t border-line p-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              {siteConfig.geo.latitude}, {siteConfig.geo.longitude}
            </p>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Navigation className="size-4" aria-hidden="true" />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      </section>

      {/* Directions + details */}
      <section className="container-page pt-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <h2 className="heading-3">Getting here</h2>

            <div className="mt-2 divide-y divide-line border-y border-line">
              {directions.map(item => (
                <div key={item.title} className="py-3">
                  <h3 className="text-sm font-medium text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{item.copy}</p>
                </div>
              ))}
            </div>

            <p className="mt-3 text-sm leading-6 text-muted">
              Most customers come from {nearby.join(', ')}.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-card border border-line bg-surface p-4">
              <h2 className="text-sm font-semibold text-ink">Address</h2>
              <address className="mt-2 text-sm not-italic leading-6 text-ink-soft">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}
                <br />
                {siteConfig.address.district}, {siteConfig.address.province}, Nepal
              </address>

              <div className="mt-3 border-t border-line pt-3">
                <p className="text-xs text-muted">Opening hours</p>
                <p className="mt-0.5 text-sm text-ink-soft">{siteConfig.openingHours.days}</p>
                <p className="text-sm text-ink-soft">{siteConfig.openingHours.hours}</p>
              </div>
            </div>

            <div className="rounded-card border border-line bg-surface p-4">
              <h2 className="text-sm font-semibold text-ink">Cannot come to the shop?</h2>
              <p className="mt-1 text-sm leading-6 text-muted">
                Same-day delivery in Itahari, Dharan, Biratnagar and Sundarharaincha. Courier to the rest of
                Nepal.
              </p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <a href={`tel:${siteConfig.phoneRaw}`} className="btn-outline flex-1">
                  <Phone className="size-4" aria-hidden="true" />
                  <span>Call</span>
                </a>
                <Link href="/delivery-pickup" className="btn-outline flex-1">
                  <span>Delivery</span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="flex items-center gap-3 rounded-card border border-line bg-surface p-4 hover:border-line-strong"
            >
              <MapPin className="size-4 shrink-0 text-muted" aria-hidden="true" />
              <span className="text-sm text-ink">Send a message instead</span>
              <ArrowRight className="ml-auto size-4 shrink-0 text-muted" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-10">
        <CtaBand
          title="Planning to drop a device off?"
          description="Message first with the model and fault. We will say whether the part is in stock and how long the bench needs it."
          whatsappMessage="Hello Himal Product & Services, I am planning to visit the store. My device and fault are: "
        />
      </div>
    </div>
  );
}
