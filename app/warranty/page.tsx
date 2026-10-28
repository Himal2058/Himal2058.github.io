import React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, AlertCircle, Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Warranty & Returns Policy | Himal Product and Services',
  description: 'Verified warranty terms on electronics, smartphones, and accessories (6 months up to 2 years) at Himal Product and Services, Itahari Nepal.'
};

export default function WarrantyPage() {
  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <Breadcrumbs items={[{ name: 'Warranty Policy', url: '/warranty' }]} />

        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12 space-y-8">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Consumer Protection</span>
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Product Warranty and Returns Policy
            </h1>
            <p className="text-xs md:text-sm text-slate-600 mt-2">
              Effective Date: {siteConfig.establishedYear} • Last Updated: October 2026
            </p>
          </div>

          <div className="space-y-6 text-xs md:text-sm text-slate-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">1. Product Warranty Coverage Overview</h2>
              <p>
                At <strong>{siteConfig.name}</strong>, our official product warranty spans from <strong>6 months up to 2 years</strong> depending on the manufacturer and product category:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li><strong>Smartphones (Samsung, Xiaomi, Apple):</strong> 1 Year official national manufacturer warranty with VAT bill, supported at authorized brand service centers across Nepal.</li>
                <li><strong>Fast Wall Chargers (GaN 65W):</strong> 1 Year direct replacement warranty against internal circuit failure.</li>
                <li><strong>Power Banks (10,000mAh, 20,000mAh, 65W):</strong> 1 Year replacement warranty covering battery cell integrity and controller boards.</li>
                <li><strong>Braided High-Wattage USB-C Cables:</strong> 6 Months replacement warranty against connector detachment and wire fracture.</li>
                <li><strong>TWS Wireless Earbuds & Audio:</strong> 6 Months to 1 Year replacement warranty against speaker driver failure or charging case defect.</li>
                <li><strong>Smart Home Devices (Bulbs, 16A Plugs, Cameras):</strong> 1 Year replacement warranty on Wi-Fi connectivity and internal relays.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">2. What Warranty Excludes</h2>
              <p>
                Warranty coverage covers inherent manufacturing defects and operational failures under normal intended use. It does not cover:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>Physical damage caused by dropping, crushing, or high-impact collisions.</li>
                <li>Liquid ingress, submersion, or corrosion (unless the device carries explicit IP68 certification and was used within rated parameters).</li>
                <li>Severe electrical burn caused by lightning strikes or non-standard industrial voltage spikes.</li>
                <li>Unauthorized third-party tampering, disassembling, or modified firmware flashing.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">3. Return and Replacement Procedure</h2>
              <p>
                If a product arrives defective or experiences an issue covered under warranty:
              </p>
              <ol className="list-decimal pl-5 space-y-1.5 text-slate-600">
                <li>Bring the product with original packaging and invoice slip to our storefront at {siteConfig.address.street}, {siteConfig.address.city}.</li>
                <li>For customers outside Itahari, message our support hotline on WhatsApp (+977 9807391472) with a short video explaining the symptom.</li>
                <li>Our technicians test the item on the test bench. If verified as a manufacturer defect, an instant replacement or service claim is initiated.</li>
              </ol>
            </section>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">Need help with a warranty claim?</p>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition"
            >
              <Phone className="w-3.5 h-3.5 text-green-400" />
              <span>Call Support: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
