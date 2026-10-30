'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '@/data/siteConfig';

export function FloatingWhatsApp() {
  const message =
    'Hello Himal Product & Services! I am browsing your website and would like to ask a question.';

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
