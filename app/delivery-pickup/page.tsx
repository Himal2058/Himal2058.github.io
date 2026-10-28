import React from 'react';
import Link from 'next/link';
import { Truck, MapPin, Clock, ShieldCheck, CheckCircle2, Phone } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Delivery & Local Pickup Policy | Himal Product and Services Nepal',
  description: 'Fast delivery across Sunsari, Morang, and courier shipping to all 7 provinces of Nepal. Safe packaging, tracking, and local Itahari pickup options.'
};

export default function DeliveryPickupPage() {
  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <Breadcrumbs items={[{ name: 'Delivery Policy', url: '/delivery-pickup' }]} />

        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12 space-y-8">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              <Truck className="w-3.5 h-3.5" />
              <span>Logistics & Coverage</span>
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Delivery and Pickup Policy
            </h1>
            <p className="text-xs md:text-sm text-slate-600 mt-2">
              Serving our local communities in Eastern Nepal and nationwide customers across all 7 provinces.
            </p>
          </div>

          <div className="space-y-6 text-xs md:text-sm text-slate-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">1. Local Express Delivery (Sunsari & Morang)</h2>
              <p>
                For customers residing in <strong>Itahari, Sundarharaincha, Biratnagar, and Dharan</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>Orders confirmed before 1:00 PM are delivered same-day directly to your door or office.</li>
                <li>Delivery fees within Itahari and Sundarharaincha-4: <strong>Free for orders over रू 2,000</strong> (Nominal रू 100 for smaller accessories).</li>
                <li>Delivery to Biratnagar and Dharan: Standard express courier rate of रू 150 (Arrives within 4–6 hours or morning following order).</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">2. Nationwide All-Nepal Courier Service</h2>
              <p>
                We dispatch packages across Nepal via trusted express courier partners (including Sundar, Pathao Courier, Gaura, and Nepal Post):
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li><strong>Major Hubs (Kathmandu, Pokhara, Butwal, Narayangarh, Birtamod):</strong> 24 to 48 hours delivery.</li>
                <li><strong>Other District Centers & Municipalities:</strong> 2 to 4 business days.</li>
                <li>Standard courier shipping fee: रू 150 – रू 250 depending on weight.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">3. Safe Protective Packaging</h2>
              <p>
                All fragile items (smartphones, replacement displays, power banks, and security cameras) are bubble-wrapped in heavy multi-layer protective boxing with tamper-evident sealing tape to guarantee zero transit damage.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">4. In-Store Storefront Pickup</h2>
              <p>
                Prefer to test the device before taking it home? Select store pickup and visit us at <strong>{siteConfig.address.street}, {siteConfig.address.city}</strong>. We will hold your item and assist with free screen guard application or data transfer.
              </p>
            </section>
          </div>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
            <Link href="/service-areas" className="text-xs font-bold text-blue-600 hover:underline">
              View Detailed Service Area Hubs →
            </Link>
            <Link href="/contact" className="text-xs font-bold text-slate-700 hover:text-blue-600">
              Inquire on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
