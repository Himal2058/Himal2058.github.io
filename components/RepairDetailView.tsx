import React from 'react';
import Link from 'next/link';
import { 
  Wrench, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  ArrowLeft,
  AlertTriangle,
  HelpCircle,
  Cpu
} from 'lucide-react';
import { RepairService } from '@/data/repairs';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQAccordion } from '@/components/FAQAccordion';
import { JsonLd, getServiceSchema } from '@/components/JsonLd';

interface Props {
  service: RepairService;
}

export function RepairDetailView({ service }: Props) {
  const whatsappBookingMessage = `Hello Himal Product & Services! I need to book *${service.title}* in Itahari.
- Service: ${service.title}
- Estimated Range: ${service.estimatedPriceRange}
- Turnaround: ${service.turnaroundTime}
When is the best time for me to drop off my device at your workshop?`;

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <JsonLd 
        data={getServiceSchema({
          title: service.h1,
          description: service.shortDescription,
          url: `/mobile-repair/${service.slug}`,
          priceRange: service.estimatedPriceRange
        })} 
      />

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[
          { name: 'Mobile Repair', url: '/mobile-repair' },
          { name: service.title, url: `/mobile-repair/${service.slug}` }
        ]} />

        {/* Hero Card */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 md:p-12 shadow-xl mb-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider bg-blue-600/30 text-blue-300 border border-blue-400/30 px-3 py-1 rounded-full">
                Itahari Workshop Service
              </span>
              <span className="text-xs font-bold uppercase tracking-wider bg-emerald-600/30 text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-full">
                {service.turnaroundTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              {service.h1}
            </h1>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              {service.fullDescription}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-200">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Turnaround: <strong>{service.turnaroundTime}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Warranty: <strong>{service.warrantyDetails}</strong></span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={getWhatsAppLink(whatsappBookingMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl transition text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{service.ctaText}</span>
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-bold px-6 py-3.5 rounded-xl transition text-sm shadow-sm"
              >
                <Phone className="w-4 h-4 text-green-600" />
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Pricing & Estimation Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm mb-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Estimated Service Cost
            </span>
            <div className="text-2xl md:text-3xl font-black text-slate-900">
              {service.estimatedPriceRange}
            </div>
            <p className="text-xs text-slate-500 mt-1">
              *Includes bench labor and replacement part. Price varies depending on phone model display technology (AMOLED vs LCD).
            </p>
          </div>

          <Link
            href="/repair-price"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold px-6 py-3 rounded-xl border border-blue-200 text-xs transition"
          >
            <Wrench className="w-4 h-4 text-blue-600" />
            <span>Open Model Price Estimator</span>
          </Link>
        </div>

        {/* Common Symptoms Checklist */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <span>Common Signs You Need This Service</span>
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-slate-700">
            {service.commonSymptoms.map((symptom, idx) => (
              <li key={idx} className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Diagnostic Process Steps */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-blue-600" />
            <span>How We Diagnose & Repair Your Phone</span>
          </h2>
          <div className="space-y-4">
            {service.diagnosticProcess.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="pt-1">
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supported Brands */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 mb-10 shadow-lg">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-blue-400" />
            <span>Supported Smartphone Brands</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {service.supportedBrands.map((b, i) => (
              <span key={i} className="text-xs font-semibold bg-slate-800 text-slate-200 px-3.5 py-1.5 rounded-lg border border-slate-700">
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions About {service.title}
            </h2>
            <FAQAccordion faqs={service.faqs} />
          </div>
        )}

        {/* Return to hub */}
        <div className="text-center pt-4">
          <Link 
            href="/mobile-repair" 
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Mobile Repair Services</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
