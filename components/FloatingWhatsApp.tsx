'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ImagePlus, MessageCircle, Send, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { getWhatsAppLink } from '@/data/siteConfig';

export function FloatingWhatsApp() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [notice, setNotice] = useState('');
  const photoInput = useRef<HTMLInputElement>(null);

  const context = pathname.startsWith('/mobile-repair')
    ? 'Phone repair'
    : pathname.startsWith('/products') || pathname.startsWith('/mobile-phones') || pathname.startsWith('/gadgets-accessories') || pathname.startsWith('/smart-home') || pathname.startsWith('/power-banks')
      ? 'Product question'
      : pathname.startsWith('/blog')
        ? 'Guide question'
        : 'Website question';

  const buildMessage = () => `Hello Himal Product & Services, I need help from your website.\nAbout: ${context}\n\n${message.trim()}`;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = buildMessage();
    if (photo && typeof navigator.share === 'function' && typeof navigator.canShare === 'function' && navigator.canShare({ files: [photo] })) {
      try {
        await navigator.share({ title: 'Message Himal Product & Services', text, files: [photo] });
        setNotice('Choose WhatsApp from the share menu to send your message and photo to the shop.');
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') return;
        setNotice('Your photo stays on this device. WhatsApp will open with your message; attach the photo in the chat.');
        window.open(getWhatsAppLink(text), '_blank', 'noopener,noreferrer');
      }
      return;
    }

    setNotice(photo ? 'WhatsApp will open with your message. Attach the selected photo in the chat before sending.' : 'WhatsApp will open with your message ready to send.');
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
            <button type="submit" className="btn-primary w-full"><Send className="size-4" aria-hidden="true" /><span>Continue to WhatsApp</span><ArrowUpRight className="ml-auto size-4" aria-hidden="true" /></button>
            <p className="text-center text-xs leading-5 text-muted">Your message goes to the shop on WhatsApp. This website does not store it.</p>
          </form>
        </section>
      )}
      <button type="button" onClick={() => { setOpen(value => !value); setNotice(''); }} aria-expanded={open} aria-label={open ? 'Close customer help' : 'Open customer help'} className="ml-auto flex min-h-12 items-center gap-2 rounded-full bg-whatsapp px-4 text-sm font-semibold text-white shadow-[var(--shadow-pop)] transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-offset-4">
        {open ? <X className="size-5" aria-hidden="true" /> : <MessageCircle className="size-5" aria-hidden="true" />}
        <span>{open ? 'Close' : 'Customer help'}</span>
      </button>
    </div>
  );
}
