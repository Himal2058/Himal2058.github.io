'use client';

import { useState } from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '@/data/siteConfig';

const devices = ['Phone or tablet', 'Speaker or audio', 'TV or home electronics', 'Toy or gadget', 'Other device'];

export function RepairQuickStart() {
  const [device, setDevice] = useState(devices[0]);
  const [fault, setFault] = useState('');
  const message = `Namaste Himal Product & Services. I need help with a repair in Itahari.\nDevice: ${device}\nProblem: ${fault.trim() || 'I will describe the problem'}\nPlease let me know what information or photo you need for an initial estimate.`;

  return <div className="mt-7 rounded-card border border-line bg-white/90 p-4 shadow-[var(--shadow-soft)] sm:p-5">
    <p className="text-sm font-semibold text-ink">What needs repair?</p>
    <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Choose a device type">{devices.map(item => <button key={item} type="button" aria-pressed={device === item} onClick={() => setDevice(item)} className={`min-h-11 rounded-full border px-3 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 ${device === item ? 'border-brand-700 bg-brand-700 text-white' : 'border-line bg-white text-ink hover:border-brand-500 hover:text-brand-700'}`}>{item}</button>)}</div>
    <label htmlFor="repair-quick-fault" className="sr-only">Describe the problem (optional)</label>
    <input id="repair-quick-fault" value={fault} onChange={event => setFault(event.target.value)} maxLength={180} placeholder="What is the problem? (optional)" className="mt-3 h-11 w-full rounded border border-line bg-canvas px-3 text-sm text-ink placeholder:text-muted focus:border-brand-600 focus:bg-white focus:outline-none" />
    <div className="mt-3 flex flex-col gap-2 sm:flex-row"><a href={getWhatsAppLink(message)} target="_blank" rel="noopener noreferrer" className="btn-primary"><MessageSquare className="size-4" aria-hidden="true" /> Get help on WhatsApp</a><a href="#repair-process" className="btn-outline">See how repair works <ArrowRight className="size-4" aria-hidden="true" /></a></div>
    <p className="mt-2 text-xs leading-5 text-muted">Review your message in WhatsApp and press send to contact the shop.</p>
  </div>;
}
