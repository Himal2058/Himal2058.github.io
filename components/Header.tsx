'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  MessageSquare,
  Menu,
  X,
  ChevronDown,
  Search,
  Wrench,
  Smartphone,
  Headphones,
  Lightbulb,
  BatteryCharging,
  MapPin,
  Clock,
  ShieldCheck,
  BookOpen,
  ArrowRight,
  Info
} from 'lucide-react';
import { siteConfig, getWhatsAppLink, siteAsset } from '@/data/siteConfig';
import { products } from '@/data/products';
import { repairServices } from '@/data/repairs';
import { blogTopics } from '@/data/blogs';

const primaryNav = [
  { href: '/mobile-phones', label: 'Smartphones', icon: Smartphone },
  { href: '/gadgets-accessories', label: 'Accessories', icon: Headphones },
  { href: '/smart-home', label: 'Smart home', icon: Lightbulb },
  { href: '/power-banks', label: 'Power banks', icon: BatteryCharging },
  { href: '/blog', label: 'Guides', icon: BookOpen },
  { href: '/service-areas', label: 'Service areas', icon: MapPin }
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [repairsOpen, setRepairsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  const repairsRef = useRef<HTMLDivElement>(null);
  const repairsButtonRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const mobileCloseRef = useRef<HTMLButtonElement>(null);

  const query = searchQuery.trim().toLowerCase();
  const filteredProducts = query
    ? products.filter(p => p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query)).slice(0, 3)
    : [];
  const filteredRepairs = query
    ? repairServices.filter(r => r.title.toLowerCase().includes(query)).slice(0, 3)
    : [];
  const filteredBlogs = query
    ? blogTopics.filter(b => b.title.toLowerCase().includes(query)).slice(0, 2)
    : [];
  const hasSearchResults = filteredProducts.length + filteredRepairs.length + filteredBlogs.length > 0;

  /* Close the repairs menu and search on outside click or Escape. */
  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      const target = event.target as Node;
      if (repairsRef.current && !repairsRef.current.contains(target)) setRepairsOpen(false);
      if (searchRef.current && !searchRef.current.contains(target)) setSearchOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;
      if (repairsOpen) {
        setRepairsOpen(false);
        repairsButtonRef.current?.focus();
      }
      setSearchOpen(false);
    }
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [repairsOpen]);

  /* Mobile drawer: lock scroll, move focus, trap tab, close on Escape. */
  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    mobileCloseRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        return;
      }
      if (event.key !== 'Tab' || !mobilePanelRef.current) return;
      const focusables = mobilePanelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus();
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* Utility bar. Scrolls away; the sticky header below stays compact. */}
      <div className="border-b border-line bg-canvas text-muted">
        <div className="container-page flex min-h-9 flex-wrap items-center justify-between gap-x-6 gap-y-1 py-1.5 text-xs">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" aria-hidden="true" />
              <span>Sundarharaincha-4, Morang</span>
            </span>
            <span className="hidden items-center gap-1.5 sm:inline-flex">
              <Clock className="size-3.5" aria-hidden="true" />
              <span>Sun to Fri 9:00 to 20:00</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-ink hover:text-brand-700"
            >
              <Phone className="size-3.5" aria-hidden="true" />
              <span>{siteConfig.phone}</span>
            </a>
            <a
              href={getWhatsAppLink('Hello Himal Product & Services, I would like to ask about your services.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 hover:text-ink sm:inline-flex"
            >
              <MessageSquare className="size-3.5" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-white">
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={`${siteConfig.shortName} home`}>
            <span className="relative size-10 overflow-hidden rounded border border-line">
              <Image
                src={siteAsset('/logo.jpg')}
                alt=""
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-base font-semibold text-ink">{siteConfig.shortName}</span>
              <span className="mt-1 hidden text-xs text-muted sm:block">
                Mobile repair and electronics, Itahari
              </span>
            </span>
          </Link>

          {/* Desktop search */}
          <div ref={searchRef} className="relative hidden w-full max-w-md lg:block">
            <label htmlFor="site-search" className="sr-only">
              Search products, repairs and guides
            </label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <input
                id="site-search"
                type="search"
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  setSearchOpen(true);
                }}
                onFocus={() => setSearchOpen(true)}
                placeholder="Search phones, repairs, accessories"
                autoComplete="off"
                aria-expanded={searchOpen && query.length > 1}
                aria-controls="site-search-results"
                className="h-10 w-full rounded border border-line bg-canvas pl-10 pr-10 text-sm text-ink placeholder:text-muted focus:border-line-strong focus:bg-white focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSearchOpen(false);
                  }}
                  aria-label="Clear search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 text-muted hover:bg-line/60 hover:text-ink"
                >
                  <X className="size-3.5" aria-hidden="true" />
                </button>
              )}
            </div>

            {searchOpen && query.length > 1 && (
              <div
                id="site-search-results"
                className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 max-h-[26rem] overflow-y-auto rounded-card border border-line bg-white p-2"
              >
                {!hasSearchResults ? (
                  <div className="flex items-start gap-2 p-3 text-sm text-muted">
                    <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    <p>
                      No matches for &ldquo;{searchQuery}&rdquo;. Try a brand, model or repair name, or{' '}
                      <a
                        href={getWhatsAppLink(`Hello Himal Product & Services, I am looking for: ${searchQuery}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-700 underline underline-offset-2"
                      >
                        ask us on WhatsApp
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <SearchGroup label="Repairs">
                      {filteredRepairs.map(repair => (
                        <SearchResult
                          key={repair.id}
                          href={`/mobile-repair/${repair.slug}`}
                          onSelect={() => setSearchOpen(false)}
                          title={repair.title}
                          meta={repair.turnaroundTime}
                        />
                      ))}
                    </SearchGroup>
                    <SearchGroup label="Products">
                      {filteredProducts.map(product => (
                        <SearchResult
                          key={product.id}
                          href={`/products/${product.slug}`}
                          onSelect={() => setSearchOpen(false)}
                          title={product.name}
                          meta={`रू ${product.price.toLocaleString('en-IN')}`}
                        />
                      ))}
                    </SearchGroup>
                    <SearchGroup label="Guides">
                      {filteredBlogs.map(blog => (
                        <SearchResult
                          key={blog.id}
                          href={`/blog/${blog.slug}`}
                          onSelect={() => setSearchOpen(false)}
                          title={blog.title}
                          meta={blog.readTime}
                        />
                      ))}
                    </SearchGroup>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <a href={`tel:${siteConfig.phoneRaw}`} className="flex flex-col text-right">
              <span className="text-xs text-muted">Call us</span>
              <span className="text-sm font-medium text-ink hover:text-brand-700">{siteConfig.phone}</span>
            </a>
            <a
              href={getWhatsAppLink(
                'Hello Himal Product & Services, I would like to book a phone repair. My device model is: '
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageSquare className="size-4" aria-hidden="true" />
              <span>Book a repair</span>
            </a>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className="rounded border border-line p-2.5 text-ink hover:bg-canvas lg:hidden"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden border-t border-line lg:block">
          <div className="container-page flex h-12 items-center justify-between">
            <div className="flex items-center gap-1">
              <div
                ref={repairsRef}
                className="relative"
                onMouseEnter={() => setRepairsOpen(true)}
                onMouseLeave={() => setRepairsOpen(false)}
              >
                <button
                  ref={repairsButtonRef}
                  type="button"
                  onClick={() => setRepairsOpen(open => !open)}
                  aria-expanded={repairsOpen}
                  aria-controls="repairs-menu"
                  className={`inline-flex h-12 items-center gap-1.5 border-b-2 px-3 text-sm font-medium ${
                    repairsOpen
                      ? 'border-ink text-ink'
                      : 'border-transparent text-ink-soft hover:text-ink'
                  }`}
                >
                  <Wrench className="size-4 text-muted" aria-hidden="true" />
                  <span>Repair services</span>
                  <ChevronDown
                    className={`size-3.5 transition-transform ${repairsOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                {repairsOpen && (
                  <div
                    id="repairs-menu"
                    className="absolute left-0 top-full z-50 w-[36rem] overflow-hidden rounded-b-card border border-t-0 border-line bg-white"
                  >
                    <div className="grid grid-cols-[1.35fr_1fr]">
                      <div className="p-4">
                        <p className="px-2 pb-2 text-xs text-muted">Repairs in Itahari</p>
                        <ul>
                          {repairServices.map(service => (
                            <li key={service.id}>
                              <Link
                                href={`/mobile-repair/${service.slug}`}
                                onClick={() => setRepairsOpen(false)}
                                className="flex items-center justify-between gap-3 rounded px-2 py-2 text-sm text-ink-soft hover:bg-canvas hover:text-ink"
                              >
                                <span>{service.title}</span>
                                <span className="shrink-0 text-xs text-muted">
                                  {service.turnaroundTime}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col justify-between gap-4 border-l border-line bg-canvas p-4">
                        <div>
                          <ShieldCheck className="size-5 text-muted" aria-hidden="true" />
                          <p className="mt-2 text-sm font-medium text-ink">Not sure what is wrong?</p>
                          <p className="mt-1 text-xs leading-5 text-muted">
                            Walk in for a free bench check. You get a written estimate before any work
                            starts.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <Link
                            href="/repair-price"
                            onClick={() => setRepairsOpen(false)}
                            className="btn-outline w-full"
                          >
                            <span>See repair prices</span>
                            <ArrowRight className="size-4" aria-hidden="true" />
                          </Link>
                          <Link
                            href="/mobile-repair"
                            onClick={() => setRepairsOpen(false)}
                            className="block text-sm text-brand-700 hover:underline hover:underline-offset-2"
                          >
                            All repair services
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {primaryNav.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex h-12 items-center gap-1.5 border-b-2 border-transparent px-3 text-sm font-medium text-ink-soft hover:text-ink"
                >
                  <item.icon className="size-4 text-muted" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm text-ink-soft">
              <Link href="/about-us" className="hover:text-ink hover:underline hover:underline-offset-2">
                About
              </Link>
              <Link href="/contact" className="hover:text-ink hover:underline hover:underline-offset-2">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMobile}
            className="absolute inset-0 bg-ink/40"
          />
          <div
            id="mobile-navigation"
            ref={mobilePanelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="absolute right-0 top-0 flex h-[100dvh] w-[min(88vw,23rem)] flex-col overflow-y-auto border-l border-line bg-white"
          >
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <span className="text-base font-semibold text-ink">Menu</span>
              <button
                ref={mobileCloseRef}
                type="button"
                onClick={closeMobile}
                aria-label="Close navigation menu"
                className="rounded border border-line p-2 text-ink hover:bg-canvas"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 space-y-5 px-4 py-4">
              <div className="relative">
                <label htmlFor="mobile-search" className="sr-only">
                  Search products, repairs and guides
                </label>
                <Search
                  className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted"
                  aria-hidden="true"
                />
                <input
                  id="mobile-search"
                  type="search"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search phones, repairs, accessories"
                  className="h-10 w-full rounded border border-line bg-canvas pl-10 pr-3 text-sm focus:border-line-strong focus:bg-white focus:outline-none"
                />
              </div>

              {query.length > 1 && (
                <div className="rounded-card border border-line bg-white p-2">
                  {hasSearchResults ? (
                    <div className="space-y-1">
                      {filteredRepairs.map(repair => (
                        <SearchResult
                          key={repair.id}
                          href={`/mobile-repair/${repair.slug}`}
                          onSelect={closeMobile}
                          title={repair.title}
                          meta={repair.turnaroundTime}
                        />
                      ))}
                      {filteredProducts.map(product => (
                        <SearchResult
                          key={product.id}
                          href={`/products/${product.slug}`}
                          onSelect={closeMobile}
                          title={product.name}
                          meta={`रू ${product.price.toLocaleString('en-IN')}`}
                        />
                      ))}
                      {filteredBlogs.map(blog => (
                        <SearchResult
                          key={blog.id}
                          href={`/blog/${blog.slug}`}
                          onSelect={closeMobile}
                          title={blog.title}
                          meta={blog.readTime}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="p-2 text-sm text-muted">No matches. Message us on WhatsApp for a custom search.</p>
                  )}
                </div>
              )}

              <div>
                <p className="mb-2 text-xs text-muted">Repair services</p>
                <Link
                  href="/mobile-repair"
                  onClick={closeMobile}
                  className="flex min-h-11 items-center justify-between rounded border border-line bg-canvas px-3 text-sm font-medium text-ink"
                >
                  <span className="inline-flex items-center gap-2">
                    <Wrench className="size-4 text-muted" aria-hidden="true" />
                    All mobile repairs
                  </span>
                  <ArrowRight className="size-4 text-muted" aria-hidden="true" />
                </Link>
                <ul className="mt-1 divide-y divide-line">
                  {repairServices.slice(0, 4).map(service => (
                    <li key={service.id}>
                      <Link
                        href={`/mobile-repair/${service.slug}`}
                        onClick={closeMobile}
                        className="flex min-h-11 items-center justify-between gap-3 py-2 text-sm text-ink-soft"
                      >
                        <span>{service.title}</span>
                        <span className="shrink-0 text-xs text-muted">{service.turnaroundTime}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/repair-price"
                  onClick={closeMobile}
                  className="mt-2 inline-block text-sm text-brand-700 hover:underline hover:underline-offset-2"
                >
                  Repair price list
                </Link>
              </div>

              <nav aria-label="Mobile" className="border-t border-line pt-3">
                <ul className="divide-y divide-line">
                  {primaryNav.map(item => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMobile}
                        className="flex min-h-12 items-center gap-3 text-sm text-ink"
                      >
                        <item.icon className="size-4 text-muted" aria-hidden="true" />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/about-us"
                      onClick={closeMobile}
                      className="flex min-h-12 items-center gap-3 text-sm text-ink"
                    >
                      <Info className="size-4 text-muted" aria-hidden="true" />
                      <span>About us</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      onClick={closeMobile}
                      className="flex min-h-12 items-center gap-3 text-sm text-ink"
                    >
                      <MapPin className="size-4 text-muted" aria-hidden="true" />
                      <span>Contact and store location</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="space-y-2 border-t border-line bg-canvas p-4">
              <a
                href={getWhatsAppLink(
                  'Hello Himal Product & Services, I would like to book a phone repair. My device model is: '
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="btn-primary w-full"
              >
                <MessageSquare className="size-4" aria-hidden="true" />
                <span>Book a repair</span>
              </a>
              <a href={`tel:${siteConfig.phoneRaw}`} className="btn-outline w-full bg-white">
                <Phone className="size-4" aria-hidden="true" />
                <span>{siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SearchGroup({ label, children }: { label: string; children: React.ReactNode }) {
  const items = React.Children.toArray(children);
  if (items.length === 0) return null;
  return (
    <div role="group" aria-label={label}>
      <p className="px-2 py-1 text-xs text-muted">{label}</p>
      <ul>{items}</ul>
    </div>
  );
}

function SearchResult({
  href,
  title,
  meta,
  onSelect
}: {
  href: string;
  title: string;
  meta: string;
  onSelect: () => void;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={onSelect}
        className="flex min-h-11 items-center justify-between gap-3 rounded px-2 py-2 text-sm text-ink-soft hover:bg-canvas hover:text-ink"
      >
        <span className="line-clamp-1">{title}</span>
        <span className="shrink-0 text-xs font-medium text-muted">{meta}</span>
      </Link>
    </li>
  );
}
