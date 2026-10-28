'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '@/data/siteConfig';

export function FloatingWhatsApp() {
  const message = "Hello Himal Product & Services! I am browsing your website and would like to ask a question.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      <div className="hidden md:block mr-3 bg-white text-slate-800 text-xs font-semibold py-2 px-3.5 rounded-full shadow-lg border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Need quick repair help? Chat on WhatsApp
      </div>
      <a
        href={getWhatsAppLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with Himal Electronics"
        className="relative w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
      >
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full animate-ping"></span>
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full"></span>
        <MessageSquare className="w-7 h-7" />
      </a>
    </div>
  );
}
