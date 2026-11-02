'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { getWhatsAppLink } from '@/data/siteConfig';

export function FloatingWhatsApp() {
  const pathname = usePathname();
  const message = pathname.startsWith('/mobile-repair')
    ? 'Hello Himal Product & Services, I need help with a phone repair. Model: ____. Problem: ____.'
    : pathname.startsWith('/products') || pathname.startsWith('/mobile-phones') || pathname.startsWith('/gadgets-accessories') || pathname.startsWith('/smart-home') || pathname.startsWith('/power-banks')
      ? 'Hello Himal Product & Services, I am interested in a product from your website. Product or category: ____. Please confirm price and availability.'
      : pathname.startsWith('/blog')
        ? 'Hello Himal Product & Services, I read one of your guides and have a question. Guide or topic: ____.'
        : 'Hello Himal Product & Services, I found you on your website and would like help with a product or repair.';

  return (
    <div className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 flex items-center gap-2 sm:right-6">
      <span
        aria-hidden="true"
        className="pointer-events-none hidden rounded border border-line bg-white px-2.5 py-1.5 text-xs text-ink md:block"
      >
        WhatsApp us
      </span>
      <a
        href={getWhatsAppLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Himal Electronics on WhatsApp"
        className="flex size-12 items-center justify-center rounded-full bg-whatsapp text-white hover:brightness-110"
      >
        <MessageSquare className="size-5" aria-hidden="true" />
      </a>
    </div>
  );
}
