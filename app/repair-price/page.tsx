import React from 'react';
import Link from 'next/link';
import { 
  Wrench, 
  ShieldCheck, 
  Clock, 
  HelpCircle, 
  ArrowRight, 
  MessageSquare, 
  Phone,
  Calculator,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RepairEstimator } from '@/components/RepairEstimator';
import { FAQAccordion } from '@/components/FAQAccordion';
import { JsonLd, getServiceSchema } from '@/components/JsonLd';

export const metadata = {
  title: 'Mobile Phone Repair Price List in Itahari Nepal (2026)',
  description: 'Transparent mobile phone repair cost guide for Itahari, Sunsari & Morang. Check display replacement, battery swap, and charging port prices with warranty.'
};

export default function RepairPricePage() {
  const priceFaqs = [
    {
      question: "Why is an AMOLED screen replacement more expensive than an LCD?",
      answer: "AMOLED and Super AMOLED panels use individual organic light-emitting diodes, offering deep true blacks, vibrant colors, and in-display fingerprint scanner integration. LCD displays use a thicker LED backlight layer, making them cheaper to manufacture."
    },
    {
      question: "Do you charge an inspection fee if my phone is not repairable?",
      answer: "No. Initial diagnostic bench inspection is free. If your device has unfixable multi-rail motherboard damage or water corrosion that makes repair uneconomical, you pay nothing."
    },
    {
      question: "Does the quoted price include installation and labor?",
      answer: "Yes! All prices quoted on our calculator and in our workshop include the replacement hardware part, technician labor, thermal adhesive clamping, and written warranty."
    }
  ];

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <JsonLd 
        data={getServiceSchema({
          title: "Mobile Phone Repair Price Calculator in Itahari",
          description: "Transparent cost estimator for smartphone screen, battery, and charging port repairs in Itahari, Nepal.",
          url: "/repair-price",
          priceRange: "रू 500 - रू 14500"
        })} 
      />

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[
          { name: 'Mobile Repair', url: '/mobile-repair' },
          { name: 'Repair Pricing Guide', url: '/repair-price' }
        ]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>2026 Transparent Pricing Guide</span>
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Mobile Phone Repair Costs in Itahari, Nepal
          </h1>
          <p className="text-sm md:text-base text-slate-600 mt-3 leading-relaxed">
            No surprise invoices or arbitrary quotes. Use our interactive repair calculator below to find the estimated replacement cost and turnaround timeframe for your smartphone.
          </p>
        </div>

        {/* Embedded Interactive Estimator */}
        <div className="mb-14">
          <RepairEstimator />
        </div>

        {/* Comprehensive Reference Price Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Standard Hardware Repair Benchmarks</h2>
              <p className="text-xs text-slate-500">Representative price ranges for popular brands in Koshi Province</p>
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Updated October 2026
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm text-left">
              <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[11px]">
                <tr>
                  <th className="py-3 px-4 rounded-l-lg">Repair Service</th>
                  <th className="py-3 px-4">Estimated Range (NPR)</th>
                  <th className="py-3 px-4">Typical Turnaround</th>
                  <th className="py-3 px-4 rounded-r-lg">Included Warranty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Phone Screen Replacement (Glass / Display)</td>
                  <td className="py-3 px-4 text-blue-600 font-bold">रू 1,800 – रू 14,500</td>
                  <td className="py-3 px-4">45 – 90 Minutes</td>
                  <td className="py-3 px-4">Up to 90 Days Touch Warranty</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Fresh Battery Replacement (High-Density Cell)</td>
                  <td className="py-3 px-4 text-blue-600 font-bold">रू 1,200 – रू 4,500</td>
                  <td className="py-3 px-4">30 – 60 Minutes</td>
                  <td className="py-3 px-4">6 Months Replacement Warranty</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Charging Port & Sub-Board Repair</td>
                  <td className="py-3 px-4 text-blue-600 font-bold">रू 700 – रू 2,500</td>
                  <td className="py-3 px-4">30 – 45 Minutes</td>
                  <td className="py-3 px-4">30 to 90 Days Warranty</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Water Damage Ultrasonic Treatment</td>
                  <td className="py-3 px-4 text-blue-600 font-bold">रू 1,500 – रू 5,500</td>
                  <td className="py-3 px-4">2 – 24 Hours</td>
                  <td className="py-3 px-4">Bench Testing Guarantee</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Earpiece Speaker & Loudspeaker Repair</td>
                  <td className="py-3 px-4 text-blue-600 font-bold">रू 600 – रू 2,200</td>
                  <td className="py-3 px-4">30 – 45 Minutes</td>
                  <td className="py-3 px-4">30 Days Warranty</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Firmware Flashing & Bootloop Fix</td>
                  <td className="py-3 px-4 text-blue-600 font-bold">रू 500 – रू 1,800</td>
                  <td className="py-3 px-4">30 – 90 Minutes</td>
                  <td className="py-3 px-4">15 Days Stability Warranty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Price FAQs */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-slate-900">Repair Pricing FAQs</h2>
          </div>
          <FAQAccordion faqs={priceFaqs} />
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-3xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-black">Want an Exact Quote for Your Model?</h2>
          <p className="text-xs md:text-sm text-blue-100 max-w-xl mx-auto">
            Send our technicians your phone model name and photo of the issue on WhatsApp for an immediate quotation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={getWhatsAppLink("Hello Himal Product & Services, I would like an exact repair quote for my phone:")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-xs transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Model Info on WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-bold px-6 py-3 rounded-xl text-xs transition"
            >
              <Phone className="w-4 h-4 text-green-600" />
              <span>Call +977 9807391472</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
