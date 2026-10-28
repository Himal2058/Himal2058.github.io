import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Terms and Conditions | Himal Product and Services Nepal',
  description: 'Terms of service, sales conditions, repair disclaimers, and warranty policies for Himal Product and Services, Itahari Nepal.'
};

export default function TermsAndConditionsPage() {
  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <Breadcrumbs items={[{ name: 'Terms & Conditions', url: '/terms-and-conditions' }]} />

        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12 space-y-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Terms and Conditions
            </h1>
            <p className="text-xs md:text-sm text-slate-600 mt-2">
              Governing commercial transactions and services in accordance with Nepali consumer law.
            </p>
          </div>

          <div className="space-y-6 text-xs md:text-sm text-slate-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">1. Product Pricing & Currency</h2>
              <p>
                All prices listed on this website are denominated in <strong>Nepalese Rupees (NPR / रू)</strong>. While we endeavor to maintain real-time inventory and pricing accuracy, prevailing market prices for imported electronics and replacement screens are confirmed upon order quotation or in-store inspection.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">2. MDMS and Regulatory Compliance</h2>
              <p>
                All new smartphones retailed by {siteConfig.name} are officially registered on the Nepal Telecommunications Authority (NTA) MDMS portal and sold with genuine tax invoices.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">3. Repair Estimates and Authorizations</h2>
              <p>
                Estimates generated via our online calculator are indicative guidelines based on standard model averages. Final binding quotes are confirmed following in-person bench diagnostics. No repair is initiated without customer consent.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">4. Limitation of Liability</h2>
              <p>
                We exercise maximum professional care during all repair operations. However, customers are strongly encouraged to back up critical personal files before servicing, as existing board shorts or prior liquid exposure can occasionally cause unexpected storage controller failure.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
