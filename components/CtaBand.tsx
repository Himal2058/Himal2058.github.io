import React from 'react';
import Link from 'next/link';
import { MessageSquare, Phone } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';

interface CtaBandProps {
  title?: string;
  description?: string;
  whatsappMessage?: string;
}

export function CtaBand({
  title = 'Questions about a repair or a product?',
  description = 'Call the shop or send a message on WhatsApp. Someone at the counter will answer.',
  whatsappMessage = 'Hello Himal Product & Services, I am contacting you from your website for assistance.'
}: CtaBandProps) {
  return (
    <section className="container-page pb-12 md:pb-16">
      <div className="rounded-card border border-line bg-surface px-5 py-6 sm:px-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <h2 className="text-base font-semibold text-ink sm:text-lg">{title}</h2>
            <p className="mt-1 text-sm leading-6 text-muted">{description}</p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:shrink-0">
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn-primary">
              <Phone className="size-4" aria-hidden="true" />
              <span>{siteConfig.phone}</span>
            </a>
            <a
              href={getWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <MessageSquare className="size-4" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BackToParent({ href, label }: { href: string; label: string }) {
  return (
    <div className="container-page pb-12">
      <Link href={href} className="text-sm text-muted hover:text-brand-700 hover:underline">
        ← {label}
      </Link>
    </div>
  );
}
