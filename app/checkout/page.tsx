'use client';

import React, { Suspense, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, CheckCircle2, MapPin, MessageSquare, Phone } from 'lucide-react';
import { products } from '@/data/products';
import { getWhatsAppLink, siteConfig } from '@/data/siteConfig';

function CheckoutForm() {
  const params = useSearchParams();
  const slug = params.get('product') ?? '';
  const product = products.find(item => item.slug === slug) ?? products[0];
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(siteConfig.phoneRaw.replace('+977', ''));
  const [address, setAddress] = useState('');
  const [method, setMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [sent, setSent] = useState(false);

  const message = useMemo(() => `Hello Himal Product & Services, I would like to place a Cash on Delivery order.
Product: ${product.name}
Price shown: रू ${product.price.toLocaleString('en-IN')}
Customer: ${name || 'Please confirm'}
Phone: ${phone || 'Please confirm'}
Order method: ${method === 'delivery' ? 'Delivery' : 'Store pickup'}
Address: ${method === 'delivery' ? address || 'Please confirm' : 'Pickup at Sundarharaincha shop'}
Please confirm availability, delivery charge, final total, and expected time.`, [product, name, phone, address, method]);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    await fetch('/api/orders', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({
      customer_name: name, phone, delivery_address: method === 'delivery' ? address : 'Store pickup at Himal Product & Services',
      payment_method: 'cod', subtotal: product.price, item: { slug: product.slug, name: product.name, quantity: 1, price: product.price }
    }) }).catch(() => undefined);
    setSent(true);
    window.open(getWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="container-page pb-16 pt-6">
      <Link href={`/products/${product.slug}`} className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-brand-700">
        <ArrowLeft className="size-4" aria-hidden="true" /> Back to product
      </Link>
      <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
        <div>
          <p className="eyebrow">Cash on delivery</p>
          <h1 className="display-1 mt-1">Confirm your order</h1>
          <p className="lede mt-3">Fill in your details. We will confirm stock, delivery charge, and the final total on WhatsApp before sending anything.</p>
          <form onSubmit={submit} className="mt-6 space-y-5 rounded-card border border-line bg-surface p-5 sm:p-6">
            <div>
              <label htmlFor="order-name" className="mb-1.5 block text-sm font-semibold text-ink">Your name</label>
              <input id="order-name" required value={name} onChange={event => setName(event.target.value)} className="h-11 w-full rounded border border-line bg-canvas px-3 text-sm focus:border-brand-500 focus:bg-white focus:outline-none" />
            </div>
            <div>
              <label htmlFor="order-phone" className="mb-1.5 block text-sm font-semibold text-ink">Phone number</label>
              <input id="order-phone" required inputMode="tel" value={phone} onChange={event => setPhone(event.target.value)} className="h-11 w-full rounded border border-line bg-canvas px-3 text-sm focus:border-brand-500 focus:bg-white focus:outline-none" />
            </div>
            <fieldset>
              <legend className="mb-2 text-sm font-semibold text-ink">How would you like to receive it?</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                <label className="flex min-h-12 cursor-pointer items-center gap-2 rounded border border-line px-3 text-sm has-[:checked]:border-brand-600 has-[:checked]:bg-brand-50"><input type="radio" name="method" checked={method === 'delivery'} onChange={() => setMethod('delivery')} /> Delivery</label>
                <label className="flex min-h-12 cursor-pointer items-center gap-2 rounded border border-line px-3 text-sm has-[:checked]:border-brand-600 has-[:checked]:bg-brand-50"><input type="radio" name="method" checked={method === 'pickup'} onChange={() => setMethod('pickup')} /> Store pickup</label>
              </div>
            </fieldset>
            {method === 'delivery' && (
              <div>
                <label htmlFor="order-address" className="mb-1.5 block text-sm font-semibold text-ink">Delivery address</label>
                <textarea id="order-address" required value={address} onChange={event => setAddress(event.target.value)} placeholder="Town, ward, landmark, and any delivery note" rows={3} className="w-full rounded border border-line bg-canvas px-3 py-2 text-sm focus:border-brand-500 focus:bg-white focus:outline-none" />
              </div>
            )}
            <button type="submit" className="btn-primary w-full"><MessageSquare className="size-4" aria-hidden="true" /> Send COD order on WhatsApp</button>
            {sent && <p className="flex items-start gap-2 text-sm text-whatsapp"><CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" /> WhatsApp opened with your order details. Please send the message to complete the request.</p>}
          </form>
        </div>
        <aside className="panel lg:sticky lg:top-24">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Order summary</p>
          <h2 className="mt-2 text-lg font-semibold text-ink">{product.name}</h2>
          <p className="mt-2 text-xl font-semibold text-ink">रू {product.price.toLocaleString('en-IN')}</p>
          <p className="mt-1 text-sm leading-6 text-muted">{product.warranty}</p>
          <div className="mt-5 space-y-3 border-t border-line pt-4 text-sm text-muted">
            <p className="flex gap-2"><MapPin className="size-4 shrink-0 text-brand-700" aria-hidden="true" /> Delivery available across Itahari, Sundarharaincha, Dharan, Biratnagar, and nearby areas. Final delivery charge is confirmed on WhatsApp.</p>
            <p className="flex gap-2"><Phone className="size-4 shrink-0 text-brand-700" aria-hidden="true" /> Questions? Call {siteConfig.phone}.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return <Suspense fallback={<div className="container-page py-16 text-sm text-muted">Loading order form…</div>}><CheckoutForm /></Suspense>;
}
