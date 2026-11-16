'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ImagePlus, MessageCircle, Send, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { getWhatsAppLink, siteConfig } from '@/data/siteConfig';

export function FloatingWhatsApp() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [notice, setNotice] = useState('');
  const photoInput = useRef<HTMLInputElement>(null);

  const context = pathname.startsWith('/mobile-repair')
    ? 'Mobile phone repair'
    : pathname.startsWith('/electronic-device-repair-itahari') || pathname.startsWith('/electronics-repair')
      ? 'Electronics repair in Itahari'
      : pathname.startsWith('/customer-service')
        ? 'Customer support request'
        : pathname.startsWith('/contact')
          ? 'Contact the shop'
          : pathname.startsWith('/products') || pathname.startsWith('/mobile-phones') || pathname.startsWith('/gadgets-accessories') || pathname.startsWith('/smart-home') || pathname.startsWith('/power-banks')
            ? 'Product question'
            : pathname.startsWith('/blog')
              ? 'Question about a repair guide'
              : pathname === '/'
                ? 'Electronics repair or product enquiry'
                : 'Customer help request';
  const [topic, setTopic] = useState(context);

  const buildMessage = () => `Hello Himal Product & Services, I need help from your website.\nAbout: ${topic}\n\n${message.trim()}`;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = buildMessage();
    setNotice(photo ? 'WhatsApp is opening directly to the shop. Attach the selected photo in the chat before sending; websites cannot attach local photos automatically to a WhatsApp chat link.' : 'WhatsApp is opening directly to the shop with your message ready to send.');
    window.open(getWhatsAppLink(text), '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-50 sm:right-6">
      {open && (
        <section aria-label="Customer help" className="mb-3 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_80px_-24px_rgba(16,24,40,0.45)]">
          <div className="flex items-start justify-between gap-3 bg-brand-950 p-4 text-white">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-white/10"><MessageCircle className="size-5" aria-hidden="true" /></span>
              <div><h2 className="text-sm font-semibold">How can we help?</h2><p className="text-xs text-white/75">Send a message to our shop team</p></div>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close customer help" className="grid size-10 place-items-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white"><X className="size-4" aria-hidden="true" /></button>
          </div>

          <Link href="/customer-service" onClick={() => setOpen(false)} className="flex min-h-11 items-center justify-between border-b border-line bg-brand-50 px-4 text-sm font-semibold text-brand-800 hover:bg-brand-100">
            <span>Browse the Help Center</span><ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>

          <form onSubmit={handleSubmit} className="space-y-3 p-4">
            <div>
              <label htmlFor="support-topic" className="mb-1 block text-sm font-medium text-ink">What is this about?</label>
              <select id="support-topic" value={topic} onChange={e => setTopic(e.target.value)} className="min-h-11 w-full rounded-xl border border-line bg-canvas px-3 text-sm text-ink focus:border-brand-500 focus:bg-white focus:outline-none">
                {[...new Set([context, 'Electronics repair', 'Mobile phone repair', 'Product question', 'Order or delivery', 'Existing repair update', 'Warranty or return', 'Other question'])].map(option => <option key={option}>{option}</option>)}
              </select>
            </div>
            <label htmlFor="support-message" className="block text-sm font-medium text-ink">Tell us what you need</label>
            <textarea id="support-message" required minLength={5} maxLength={1200} rows={4} value={message} onChange={e => setMessage(e.target.value)} placeholder="Describe the fault, product, or question…" className="w-full resize-y rounded-xl border border-line bg-canvas px-3 py-2.5 text-sm leading-6 text-ink placeholder:text-muted focus:border-brand-500 focus:bg-white focus:outline-none" />

            <div>
              <input ref={photoInput} type="file" accept="image/jpeg,image/png,image/webp" className="sr-only" aria-label="Choose a photo of the issue" onChange={e => { const file = e.target.files?.[0] ?? null; setPhoto(file); setNotice(''); }} />
              <button type="button" onClick={() => photoInput.current?.click()} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line px-3 text-sm font-medium text-ink-soft transition hover:border-brand-300 hover:bg-brand-50">
                <ImagePlus className="size-4 text-brand-700" aria-hidden="true" />
                {photo ? photo.name : 'Add a photo (optional)'}
              </button>
              {photo && <button type="button" className="ml-2 min-h-11 px-2 text-sm text-muted underline underline-offset-2" onClick={() => { setPhoto(null); if (photoInput.current) photoInput.current.value = ''; }}>Remove</button>}
              <p className="mt-1 text-xs leading-5 text-muted">JPG, PNG, or WebP. Photo is shared only when you send the message.</p>
            </div>

            {notice && <p role="status" className="rounded-lg bg-brand-50 p-2.5 text-xs leading-5 text-brand-900">{notice}</p>}
            <button type="submit" className="btn-primary w-full"><Send className="size-4" aria-hidden="true" /><span>Open WhatsApp chat</span><ArrowUpRight className="ml-auto size-4" aria-hidden="true" /></button>
            <p className="text-center text-xs leading-5 text-muted">Your message goes to the shop on WhatsApp. This website does not store it.</p>
          </form>
        </section>
      )}
      <div className="ml-auto flex flex-wrap items-center justify-end gap-2">
        <button type="button" onClick={() => { setOpen(value => !value); setNotice(''); }} aria-expanded={open} aria-label={open ? 'Close message and photo form' : 'Open message and photo form'} className="flex min-h-12 items-center gap-2 rounded-full border border-line bg-white px-3 text-sm font-semibold text-ink shadow-[var(--shadow-pop)] transition hover:-translate-y-0.5 hover:bg-canvas focus-visible:outline-offset-4">
          {open ? <X className="size-5" aria-hidden="true" /> : <ImagePlus className="size-5 text-brand-700" aria-hidden="true" />}
          <span>{open ? 'Close form' : 'Send photo'}</span>
        </button>
        <a href={getWhatsAppLink('Hello Himal Product & Services, I need customer help.')} target="_blank" rel="noopener noreferrer" aria-label={`Chat directly on WhatsApp at ${siteConfig.phone}`} className="flex min-h-12 items-center gap-2 rounded-full bg-whatsapp px-4 text-sm font-semibold text-white shadow-[var(--shadow-pop)] transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-offset-4">
          <MessageCircle className="size-5" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
        <a href="https://m.me/61559803791585" target="_blank" rel="noopener noreferrer" aria-label="Message Himal Products and Services on Facebook" className="flex min-h-12 items-center gap-2 rounded-full bg-[#0866ff] px-4 text-sm font-semibold text-white shadow-[var(--shadow-pop)] transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-offset-4">
          <MessageCircle className="size-5" aria-hidden="true" />
          <span>Facebook</span>
        </a>
      </div>
    </div>
  );
}
