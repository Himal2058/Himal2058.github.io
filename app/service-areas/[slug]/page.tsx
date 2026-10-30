import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MessageSquare, Phone, ArrowRight, ArrowLeft, MapPin } from 'lucide-react';
import { serviceLocations, getLocationBySlug } from '@/data/locations';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CtaBand } from '@/components/CtaBand';
import { JsonLd } from '@/components/JsonLd';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return serviceLocations.map(location => ({ slug: location.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return { title: 'Location not found' };
  }

  return {
    title: location.heroTitle,
    description: location.description
  };
}

export default async function ServiceLocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${siteConfig.name} - ${location.name}`,
    description: location.description,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.name,
      addressRegion: location.district,
      addressCountry: 'NP'
    },
    areaServed: {
      '@type': 'City',
      name: location.name
    }
  };

  const whatsappMessage = `Hello Himal Product & Services, I am in ${location.name} and would like to ask about a repair or an order.`;
  const otherLocations = serviceLocations.filter(item => item.slug !== location.slug).slice(0, 2);

  return (
    <div className="pb-12 md:pb-16">
      <JsonLd data={localSchema} />

      <div className="container-page pt-6">
        <Breadcrumbs
          items={[
            { name: 'Service areas', url: '/service-areas' },
            { name: location.name, url: `/service-areas/${location.slug}` }
          ]}
        />
      </div>

      {/* Intro */}
      <section className="border-b border-line bg-surface">
        <div className="container-page py-8 md:py-10">
          <p className="inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="size-4" aria-hidden="true" />
            {location.district} district · {location.distanceFromHub}
          </p>

          <h1 className="display-1 mt-2">{location.heroTitle}</h1>
          <p className="lede mt-3 max-w-2xl">{location.description}</p>

          <p className="mt-3 text-sm text-muted">
            {location.travelTime} · {location.distanceFromHub}
          </p>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <a
              href={getWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageSquare className="size-4" aria-hidden="true" />
              <span>Ask from {location.name}</span>
            </a>
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn-outline">
              <Phone className="size-4" aria-hidden="true" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services + delivery */}
      <section className="container-page pt-8">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <h2 className="heading-3">What we can do for {location.name}</h2>
            <ul className="mt-2 border-t border-line">
              {location.servicesOffered.map(service => (
                <li key={service} className="border-b border-line py-2 text-sm leading-6 text-ink-soft">
                  {service}
                </li>
              ))}
            </ul>
            <Link
              href="/mobile-repair"
              className="mt-3 inline-block text-sm text-brand-700 hover:underline hover:underline-offset-2"
            >
              Full repair list
            </Link>
          </div>

          <div>
            <h2 className="heading-3">Delivery and landmarks</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{location.deliveryCoverage}</p>

            <p className="mt-4 text-sm text-ink">Areas we cover</p>
            <p className="mt-1 text-sm leading-6 text-muted">{location.localLandmarks.join(', ')}.</p>

            <Link
              href="/delivery-pickup"
              className="mt-3 inline-block text-sm text-brand-700 hover:underline hover:underline-offset-2"
            >
              Delivery and pickup details
            </Link>
          </div>
        </div>
      </section>

      {/* Quick paths */}
      <section className="container-page pt-10">
        <div className="divide-y divide-line border-y border-line">
          {[
            { href: '/repair-price', title: 'Repair prices', copy: 'Screen, battery and port ranges.' },
            { href: '/mobile-phones', title: 'Buy a phone', copy: 'Handsets with VAT bill and MDMS registration.' },
            { href: '/contact', title: 'Talk to us', copy: 'Phone, WhatsApp or the message form.' }
          ].map(item => (
            <Link key={item.href} href={item.href} className="flex items-center gap-4 py-3 hover:bg-white">
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-ink">{item.title}</span>
                <span className="mt-0.5 block text-sm text-muted">{item.copy}</span>
              </span>
              <ArrowRight className="size-4 shrink-0 text-muted" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      {/* FAQs */}
      {location.localFaqs.length > 0 && (
        <section className="container-page pt-10">
          <h2 className="heading-3">{location.name} questions</h2>
          <div className="mt-3 max-w-3xl">
            <FAQAccordion faqs={location.localFaqs} />
          </div>
        </section>
      )}

      {/* Other locations */}
      {otherLocations.length > 0 && (
        <section className="container-page pt-10">
          <h2 className="heading-3">Other areas</h2>
          <div className="mt-2 divide-y divide-line border-y border-line">
            {otherLocations.map(item => (
              <Link
                key={item.id}
                href={`/service-areas/${item.slug}`}
                className="flex items-center gap-4 py-3 hover:bg-white"
              >
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-ink">{item.heroTitle}</span>
                  <span className="mt-0.5 line-clamp-2 block text-sm text-muted">{item.description}</span>
                </span>
                <ArrowRight className="size-4 shrink-0 text-muted" aria-hidden="true" />
              </Link>
            ))}
          </div>

          <Link
            href="/service-areas"
            className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted hover:text-brand-700 hover:underline hover:underline-offset-2"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            <span>All service areas</span>
          </Link>
        </section>
      )}

      <div className="mt-10">
        <CtaBand
          title={`Need a repair in ${location.name}?`}
          description="Send the model and the fault. We will confirm the part, the price and whether pickup is available in your ward."
          whatsappMessage={whatsappMessage}
        />
      </div>
    </div>
  );
}
