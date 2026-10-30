import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig, getWhatsAppLink, siteAsset } from '@/data/siteConfig';

const shopLinks = [
  { href: '/mobile-phones', label: 'Smartphones' },
  { href: '/gadgets-accessories', label: 'Gadgets and accessories' },
  { href: '/smart-home', label: 'Smart home' },
  { href: '/power-banks', label: 'Power banks' },
  { href: '/offers', label: 'Offers' },
  { href: '/products', label: 'All products' }
];

const repairLinks = [
  { href: '/mobile-repair', label: 'All repairs' },
  { href: '/mobile-repair/screen-replacement', label: 'Screen replacement' },
  { href: '/mobile-repair/battery-replacement', label: 'Battery replacement' },
  { href: '/mobile-repair/charging-port-repair', label: 'Charging port repair' },
  { href: '/repair-price', label: 'Repair prices' },
  { href: '/warranty', label: 'Warranty' }
];

const companyLinks = [
  { href: '/about-us', label: 'About us' },
  { href: '/store-location', label: 'Store location' },
  { href: '/contact', label: 'Contact' },
  { href: '/delivery-pickup', label: 'Delivery and pickup' },
  { href: '/repair-policy', label: 'Repair policy' },
  { href: '/blog', label: 'Guides' }
];

const areas = [
  { href: '/service-areas/itahari', label: 'Itahari' },
  { href: '/service-areas/sundarharaincha-morang', label: 'Sundarharaincha' },
  { href: '/service-areas/dharan', label: 'Dharan' },
  { href: '/service-areas/biratnagar', label: 'Biratnagar' }
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page py-10 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-10">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="relative size-10 overflow-hidden rounded border border-line">
                <Image src={siteAsset('/logo.jpg')} alt="" fill sizes="40px" className="object-cover" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-base font-semibold text-ink">{siteConfig.shortName}</span>
                <span className="mt-1 text-xs text-muted">Itahari, Sunsari</span>
              </span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
              Repair workshop and electronics shop. Serving Itahari, Dharan, Biratnagar and the
              Sunsari and Morang area since {siteConfig.establishedYear}.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.city}
                  <br />
                  {siteConfig.address.province}, Nepal
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="text-ink hover:underline hover:underline-offset-2">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-ink">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>
                  {siteConfig.openingHours.days}
                  <br />
                  {siteConfig.openingHours.hours}
                </span>
              </li>
            </ul>
          </div>

          <FooterColumn title="Shop" links={shopLinks} />
          <FooterColumn title="Repairs" links={repairLinks} />
          <FooterColumn title="Company" links={companyLinks} />
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted">
            {areas.map((area, index) => (
              <React.Fragment key={area.href}>
                {index > 0 && <span className="px-1.5">·</span>}
                <Link href={area.href} className="hover:text-ink hover:underline hover:underline-offset-2">
                  {area.label}
                </Link>
              </React.Fragment>
            ))}
            <span className="px-1.5">·</span>
            <Link href="/service-areas" className="hover:text-ink hover:underline hover:underline-offset-2">
              All areas
            </Link>
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Directions
            </a>
            <a
              href={getWhatsAppLink('Hello Himal Product & Services, I found you on your website and have a question.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-line pt-5 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link href="/privacy-policy" className="hover:text-ink hover:underline hover:underline-offset-2">
              Privacy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-ink hover:underline hover:underline-offset-2">
              Terms
            </Link>
            <Link href="/warranty" className="hover:text-ink hover:underline hover:underline-offset-2">
              Warranty
            </Link>
            <Link href="/sitemap.xml" className="hover:text-ink hover:underline hover:underline-offset-2">
              Sitemap
            </Link>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink hover:underline hover:underline-offset-2"
            >
              Facebook
            </a>
          </div>
        </div>

        <p className="mt-4 text-xs text-muted">
          Fonepay QR, eSewa, Khalti, mobile banking and cash on delivery. Courier delivery across Nepal.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-ink">{title}</h2>
      <ul className="mt-2 space-y-1.5 text-sm">
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href} className="text-muted hover:text-ink hover:underline hover:underline-offset-2">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
