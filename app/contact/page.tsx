import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'Contact Us',
  description:
    'Call the shop, send a WhatsApp message or use the contact form for repairs, products and delivery questions in Itahari and Morang.'
};

const quickPaths = [
  {
    href: '/mobile-repair',
    title: 'Book a repair',
    copy: 'Free first check, price agreed before we open the phone.'
  },
  {
    href: '/warranty',
    title: 'Warranty and delivery',
    copy: 'Coverage terms and delivery options across Nepal.'
  }
];

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${siteConfig.name}`,
    url: `${siteConfig.siteUrl}/contact`,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.province,
        addressCountry: 'NP'
      }
    }
  };

  return (
    <div className="pb-12 md:pb-16">
      <JsonLd data={contactSchema} />

      <div className="container-page pt-6">
        <Breadcrumbs items={[{ name: 'Contact us', url: '/contact' }]} />
      </div>

      {/* Header */}
      <section className="border-b border-line bg-surface">
        <div className="container-page py-8 md:py-10">
          <h1 className="display-1">Contact the shop</h1>
          <p className="lede mt-3 max-w-2xl">
            For a repair, a product question or a delivery address, call the counter or send a message.
            We answer the phone during shop hours.
          </p>
        </div>
      </section>

      <div className="container-page mt-8 grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        {/* Contact details */}
        <div className="space-y-4">
          <section className="rounded-card border border-line bg-surface p-4">
            <h2 className="text-sm font-semibold text-ink">Phone and email</h2>

            <dl className="mt-3 space-y-3">
              <div>
                <dt className="text-xs text-muted">Shop line</dt>
                <dd className="mt-0.5">
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 text-base font-medium tabular-nums text-ink hover:underline hover:underline-offset-2"
                  >
                    <Phone className="size-4 shrink-0 text-muted" aria-hidden="true" />
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs text-muted">WhatsApp</dt>
                <dd className="mt-1">
                  <a
                    href={getWhatsAppLink('Hello Himal Product & Services, I am reaching out from your website.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full"
                  >
                    <MessageSquare className="size-4" aria-hidden="true" />
                    <span>Send a message</span>
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs text-muted">Email</dt>
                <dd className="mt-0.5">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-1.5 break-all text-sm text-ink hover:underline hover:underline-offset-2"
                  >
                    <Mail className="size-4 shrink-0 text-muted" aria-hidden="true" />
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section className="rounded-card border border-line bg-surface p-4">
            <h2 className="text-sm font-semibold text-ink">Address and hours</h2>

            <address className="mt-2 text-sm not-italic leading-6 text-ink-soft">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city}
              <br />
              {siteConfig.address.district}, {siteConfig.address.province}, Nepal
              <span className="mt-1 block text-xs leading-5 text-muted">
                {siteConfig.address.landmark}
              </span>
            </address>

            <div className="mt-3 flex items-start gap-2 border-t border-line pt-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-muted" aria-hidden="true" />
              <div>
                <p className="text-xs text-muted">Opening hours</p>
                <p className="mt-0.5 text-sm leading-6 text-ink-soft">{siteConfig.openingHours.days}</p>
                <p className="text-sm text-ink-soft">{siteConfig.openingHours.hours}</p>
              </div>
            </div>

            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-3 w-full"
            >
              <MapPin className="size-4" aria-hidden="true" />
              <span>Open in Google Maps</span>
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          </section>

          <div className="divide-y divide-line border-y border-line">
            {quickPaths.map(item => (
              <Link key={item.href} href={item.href} className="block py-3 hover:bg-white">
                <span className="block text-sm font-medium text-ink">{item.title}</span>
                <span className="mt-0.5 block text-sm text-muted">{item.copy}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </div>
  );
}
