'use client';

import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { getWhatsAppLink } from '@/data/siteConfig';

const fieldClass =
  'h-10 w-full rounded border border-line bg-canvas px-3 text-sm text-ink placeholder:text-muted focus:border-line-strong focus:bg-white focus:outline-none';

const labelClass = 'mb-1 block text-sm text-ink';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    inquiryType: 'Electronics repair',
    deviceModel: '',
    location: '',
    message: ''
  });

  const [sent, setSent] = useState(false);

  const whatsappText = `Hello Himal Product & Services.
Name: ${formData.name}
Phone: ${formData.phone}
About: ${formData.inquiryType}
Device: ${formData.deviceModel || 'not given'}
My town/district: ${formData.location || 'not given'}
Message: ${formData.message}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/enquiries', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({
      name: formData.name, phone: formData.phone, subject: formData.inquiryType,
      message: `${formData.deviceModel ? `Device: ${formData.deviceModel}\n` : ''}${formData.location ? `Location: ${formData.location}\n` : ''}${formData.message}`
    }) }).catch(() => undefined);
    setSent(true);
    window.open(getWhatsAppLink(whatsappText), '_blank', 'noopener,noreferrer');
  };

  const reset = () => {
    setSent(false);
    setFormData({
      name: '',
      phone: '',
      inquiryType: 'Electronics repair',
      deviceModel: '',
      location: '',
      message: ''
    });
  };

  if (sent) {
    return (
      <div className="rounded-card border border-line bg-surface p-5">
        <h2 className="text-base font-semibold text-ink">Your message is ready</h2>
        <p className="mt-1.5 text-sm leading-6 text-muted">
          WhatsApp should have opened in a new tab with your details filled in. Press send there and we
          will reply during shop hours. If nothing opened, use the link below.
        </p>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <a
            href={getWhatsAppLink(whatsappText)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageSquare className="size-4" aria-hidden="true" />
            <span>Open WhatsApp</span>
          </a>
          <button type="button" onClick={reset} className="btn-outline">
            Write another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-card border border-line bg-surface p-4 sm:p-5">
      <h2 className="text-base font-semibold text-ink">Send a message</h2>
      <p className="mt-1 text-sm leading-6 text-muted">
          We save your enquiry securely and open WhatsApp with the same details so the shop can reply quickly.
      </p>

      <div className="mt-4 space-y-3">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ramesh Karki"
            className={fieldClass}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-phone" className={labelClass}>
              Phone
            </label>
            <input
              id="contact-phone"
              type="tel"
              required
              autoComplete="tel"
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
              placeholder="98XXXXXXXX"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="contact-type" className={labelClass}>
              About
            </label>
            <select
              id="contact-type"
              value={formData.inquiryType}
              onChange={e => setFormData({ ...formData, inquiryType: e.target.value })}
              className={fieldClass}
            >
              <option value="Electronics repair">Electronics repair</option>
              <option value="Mobile repair">Mobile repair</option>
              <option value="Speaker or audio repair">Speaker or audio repair</option>
              <option value="Toy or gadget repair">Toy or gadget repair</option>
              <option value="TV or home electronics repair">TV or home electronics repair</option>
              <option value="Laptop or computer accessory repair">Laptop or computer accessory repair</option>
              <option value="Appliance repair enquiry">Appliance repair enquiry</option>
              <option value="Phone purchase">Phone purchase</option>
              <option value="Accessories">Accessories</option>
              <option value="Smart home">Smart home</option>
              <option value="Power bank">Power bank</option>
              <option value="Order or delivery">Order or delivery</option>
              <option value="Payment or cash on delivery">Payment or cash on delivery</option>
              <option value="Warranty or return">Warranty or return</option>
              <option value="Something else">Something else</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="contact-device" className={labelClass}>
            Device model <span className="text-muted">(optional)</span>
          </label>
          <input
            id="contact-device"
            type="text"
            value={formData.deviceModel}
            onChange={e => setFormData({ ...formData, deviceModel: e.target.value })}
            placeholder="Samsung TV, JBL speaker, toy model, laptop model"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="contact-location" className={labelClass}>
            Your town or district <span className="text-muted">(helps us advise visit or courier options)</span>
          </label>
          <input
            id="contact-location"
            type="text"
            autoComplete="address-level2"
            value={formData.location}
            onChange={e => setFormData({ ...formData, location: e.target.value })}
            placeholder="Itahari, Sunsari"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClass}>
            What is wrong, or what are you looking for?
          </label>
          <textarea
            id="contact-message"
            required
            rows={4}
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
            placeholder="What happened? When did it start? Include any sound, light or error you noticed."
            className="w-full rounded border border-line bg-canvas px-3 py-2 text-sm leading-6 text-ink placeholder:text-muted focus:border-line-strong focus:bg-white focus:outline-none"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-4 w-full">
        <Send className="size-4" aria-hidden="true" />
        <span>Continue in WhatsApp</span>
      </button>

      <p className="mt-2 text-xs leading-5 text-muted">
        Your enquiry is stored securely for the shop team and is never shown publicly.
      </p>
    </form>
  );
}
