import React from 'react';
import Link from 'next/link';
import { Home, Wrench, Smartphone, Phone, ArrowRight, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const links = [
  { href: '/', icon: Home, label: 'Homepage' },
  { href: '/mobile-repair', icon: Wrench, label: 'Mobile repair' },
  { href: '/mobile-phones', icon: Smartphone, label: 'Smartphones' },
  { href: '/contact', icon: Phone, label: 'Contact store' }
];

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center bg-canvas py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-6xl font-semibold tracking-tight text-brand-200 sm:text-7xl">
            404
          </p>
          <h1 className="display-2 mt-4">This page has moved</h1>
          <p className="lede mt-3">
            The page or product link you requested may have been renamed. Use one of the shortcuts
            below, or ask us directly.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="card card-hover group flex items-center gap-3 p-4 text-left"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <link.icon className="size-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-ink transition group-hover:text-brand-700">
                  {link.label}
                </span>
                <ArrowRight
                  className="ml-auto size-4 shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:text-brand-700"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn-primary">
              <Phone className="size-4" aria-hidden="true" />
              <span>Call {siteConfig.phone}</span>
            </a>
            <Link href="/store-location" className="btn-outline">
              <MapPin className="size-4" aria-hidden="true" />
              <span>Store directions</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
