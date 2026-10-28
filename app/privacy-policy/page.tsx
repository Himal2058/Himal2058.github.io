import React from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Privacy Policy | Himal Product and Services Nepal',
  description: 'Learn how Himal Product and Services collects, uses, and protects customer information, form inquiries, and repair records.'
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <Breadcrumbs items={[{ name: 'Privacy Policy', url: '/privacy-policy' }]} />

        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12 space-y-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs md:text-sm text-slate-600 mt-2">
              Last Updated: October 2026 • Himal Product and Services
            </p>
          </div>

          <div className="space-y-6 text-xs md:text-sm text-slate-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">1. Information We Collect</h2>
              <p>
                When you interact with <strong>{siteConfig.name}</strong> through our website contact forms, WhatsApp inquiry buttons, or phone calls, we collect minimal necessary operational information:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Your name and contact phone or WhatsApp number.</li>
                <li>Device model and fault description (to provide repair estimates).</li>
                <li>Delivery address (if requesting local or nationwide courier dispatch).</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">2. How We Use Your Information</h2>
              <p>
                Your contact details are used strictly to reply to your specific inquiry, deliver repair status notifications, or coordinate delivery. We do not sell, rent, or share personal data with third-party advertisers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">3. Physical Workshop Device Data Protection</h2>
              <p>
                During physical hardware repairs, our technicians do not access your private photo libraries, messages, emails, or personal banking apps. We advocate for Android Maintenance Mode or leaving screen locks active for routine display and battery replacements.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">4. Analytics and Cookies</h2>
              <p>
                Our website may utilize privacy-conscious basic analytical cookies to measure page visits, aggregate traffic trends, and optimize user experience without identifying individual users.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">5. Contact Regarding Privacy</h2>
              <p>
                For questions regarding our privacy practices or data handling, contact us at <strong>{siteConfig.email}</strong> or call <strong>{siteConfig.phone}</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
