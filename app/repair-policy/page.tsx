import React from 'react';
import Link from 'next/link';
import { Wrench, ShieldCheck, Lock, CheckCircle2, Phone, AlertTriangle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Mobile Repair Terms & Customer Data Policy | Himal Product & Services',
  description: 'Our documented mobile repair policies, free diagnostic intake, 100% personal data privacy pledge, and replacement part warranties in Itahari.'
};

export default function RepairPolicyPage() {
  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <Breadcrumbs items={[{ name: 'Repair Policy', url: '/repair-policy' }]} />

        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12 space-y-8">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              <Wrench className="w-3.5 h-3.5" />
              <span>Workshop Code of Conduct</span>
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Mobile Repair Terms & Privacy Policy
            </h1>
            <p className="text-xs md:text-sm text-slate-600 mt-2">
              Transparency, technical rigor, and respect for customer property.
            </p>
          </div>

          <div className="space-y-6 text-xs md:text-sm text-slate-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">1. Free Initial Diagnostic Intake</h2>
              <p>
                Every phone brought to our Itahari corridor workshop undergoes an initial bench assessment free of charge. Our technicians check USB power draw, touchscreen digitizer response, and battery voltage. No repair work or disassembly begins without customer confirmation of the quote.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">2. Customer Data Privacy Guarantee</h2>
              <p>
                We maintain an uncompromised code of privacy:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>Hardware repairs (screens, batteries, charging ports, back glass) do not modify, copy, or read your internal storage.</li>
                <li>We do not ask for screen lock passcodes for screen or battery replacements. We test basic digitizer response from emergency dialer screens or encourage Android Maintenance Mode.</li>
                <li>Our technicians are strictly prohibited from opening photo galleries, WhatsApp chats, social media apps, or personal accounts.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">3. Repair Warranties</h2>
              <p>
                We stand behind our craftsmanship and replacement components:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li><strong>Screen Replacements:</strong> Up to 90 days replacement warranty against touch dysfunction or manufacturer defect. Excludes subsequent drops, cracks, or liquid exposure.</li>
                <li><strong>Battery Replacements:</strong> 6 Months warranty against rapid degradation, sudden drops in percentage, or premature shutdown.</li>
                <li><strong>Charging Ports:</strong> 30 to 90 days warranty covering connection stability and fast-charge handshake.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">4. Water-Damaged Devices Disclaimer</h2>
              <p>
                Liquid intrusion creates progressive electrolytic corrosion across multiple micro-circuits. While our ultrasonic chemical cleaning and board repair process revives over 75% of wet phones, secondary component failures (such as ambient sensors or micro-soldered cameras) can manifest over time due to prior liquid exposure.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">5. Device Collection and Pickup</h2>
              <p>
                Repaired devices are held securely for up to 60 days following completion notice. We request that customers bring their signed physical repair intake slip or present digital WhatsApp verification when collecting repaired hardware.
              </p>
            </section>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs">
            <Link href="/mobile-repair" className="font-bold text-blue-600 hover:underline">
              ← Return to Mobile Repair Hub
            </Link>
            <Link href="/contact" className="font-bold text-slate-700 hover:text-blue-600">
              Have a Question for Our Lead Technician?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
