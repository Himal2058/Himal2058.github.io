import React, { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';

interface LegalPageProps {
  title: string;
  intro: string;
  updated?: string;
  breadcrumb: { name: string; url: string };
  actions?: { href: string; label: string }[];
  children: ReactNode;
}

export function LegalPage({
  title,
  intro,
  updated,
  breadcrumb,
  actions = [],
  children
}: LegalPageProps) {
  return (
    <div className="pb-12 md:pb-16">
      <div className="container-page pt-6">
        <Breadcrumbs items={[breadcrumb]} />
      </div>

      <section className="border-b border-line bg-surface">
        <div className="container-page py-8 md:py-10">
          <h1 className="display-1">{title}</h1>
          <p className="lede mt-3 max-w-2xl">{intro}</p>
          {updated && <p className="mt-3 text-xs text-muted">Last updated {updated}</p>}
        </div>
      </section>

      <div className="container-page pt-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start">
          <article className="rounded-card border border-line bg-surface p-5 sm:p-7">
            <div className="prose-page">{children}</div>
          </article>

          <aside className="space-y-4 lg:sticky lg:top-24">
            <div className="rounded-card border border-line bg-surface p-5">
              <p className="text-sm font-semibold text-ink">Questions about this policy?</p>
              <p className="mt-1 text-sm leading-6 text-muted">
                Call the shop and we will explain how it applies to your repair or order.
              </p>
              <a href={`tel:${siteConfig.phoneRaw}`} className="btn-outline mt-3 w-full">
                <Phone className="size-4" aria-hidden="true" />
                <span>{siteConfig.phone}</span>
              </a>
              <a
                href={getWhatsAppLink(
                  'Hello Himal Product & Services, I have a question about your store policies.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-brand-700 hover:underline hover:underline-offset-2"
              >
                Or send a WhatsApp message
              </a>
            </div>

            {actions.length > 0 && (
              <div className="rounded-card border border-line bg-surface p-5">
                <p className="text-xs text-muted">Related pages</p>
                <ul className="mt-2 space-y-2">
                  {actions.map(action => (
                    <li key={action.href}>
                      <Link
                        href={action.href}
                        className="inline-flex items-start gap-1.5 text-sm text-ink-soft hover:text-brand-700 hover:underline hover:underline-offset-2"
                      >
                        <ArrowRight className="mt-1 size-3.5 shrink-0" aria-hidden="true" />
                        <span>{action.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
