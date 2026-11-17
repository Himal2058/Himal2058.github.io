'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '@/data/siteConfig';

const devices = [
  'Phone or tablet',
  'Speaker or audio',
  'TV or home electronics',
  'Toy or gadget',
  'Laptop or computer accessory',
  'Other device'
];

export function RepairQuickStart() {
  const [device, setDevice] = useState(devices[0]);
  const [fault, setFault] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      'Namaste Himal Product & Services. I need help with a repair.',
      `Device: ${device}`,
      `Problem: ${fault.trim() || 'I will describe the problem in chat'}`,
      name.trim() && `Name: ${name.trim()}`,
      phone.trim() && `Phone: ${phone.trim()}`,
      email.trim() && `Email: ${email.trim()}`,
      'Please let me know what information or photo you need for an initial estimate.'
    ].filter(Boolean).join('\n');

    window.open(getWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 rounded-card border border-line bg-white/95 p-4 shadow-[var(--shadow-soft)] sm:p-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="repair-quick-device" className="mb-1 block text-sm font-medium text-ink">What needs repair?</label>
          <select
            id="repair-quick-device"
            name="device"
            value={device}
            onChange={event => setDevice(event.target.value)}
            className="min-h-11 w-full rounded-lg border border-line bg-canvas px-3 text-sm text-ink focus:border-brand-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
          >
            {devices.map(item => <option key={item}>{item}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="repair-quick-fault" className="mb-1 block text-sm font-medium text-ink">What is the problem?</label>
          <input
            id="repair-quick-fault"
            name="fault"
            value={fault}
            onChange={event => setFault(event.target.value)}
            maxLength={180}
            placeholder="e.g. no sound, cracked screen"
            className="min-h-11 w-full rounded-lg border border-line bg-canvas px-3 text-sm text-ink placeholder:text-muted focus:border-brand-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
          />
        </div>
        <div>
          <label htmlFor="repair-quick-name" className="mb-1 block text-sm font-medium text-ink">Name <span className="font-normal text-muted">(optional)</span></label>
          <input id="repair-quick-name" name="name" autoComplete="name" value={name} onChange={event => setName(event.target.value)} maxLength={80} placeholder="Your name" className="min-h-11 w-full rounded-lg border border-line bg-canvas px-3 text-sm text-ink placeholder:text-muted focus:border-brand-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100" />
        </div>
        <div>
          <label htmlFor="repair-quick-phone" className="mb-1 block text-sm font-medium text-ink">Phone <span className="font-normal text-muted">(optional)</span></label>
          <input id="repair-quick-phone" name="phone" type="tel" autoComplete="tel" value={phone} onChange={event => setPhone(event.target.value)} maxLength={30} placeholder="98XXXXXXXX" className="min-h-11 w-full rounded-lg border border-line bg-canvas px-3 text-sm text-ink placeholder:text-muted focus:border-brand-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="repair-quick-email" className="mb-1 block text-sm font-medium text-ink">Email <span className="font-normal text-muted">(optional)</span></label>
          <input id="repair-quick-email" name="email" type="email" autoComplete="email" value={email} onChange={event => setEmail(event.target.value)} maxLength={120} placeholder="you@example.com" className="min-h-11 w-full rounded-lg border border-line bg-canvas px-3 text-sm text-ink placeholder:text-muted focus:border-brand-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100" />
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <button type="submit" className="btn-primary min-h-11 w-full sm:w-auto">
          <MessageSquare className="size-4" aria-hidden="true" />
          Send enquiry on WhatsApp
        </button>
        <a href="#repair-process" className="btn-outline min-h-11 w-full sm:w-auto">
          See how repair works <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
      <p className="mt-2 text-xs leading-5 text-muted">WhatsApp opens with these details prefilled. Review the message and choose Send; attach a device photo in the chat if useful. This website does not save this quick enquiry.</p>
    </form>
  );
}
