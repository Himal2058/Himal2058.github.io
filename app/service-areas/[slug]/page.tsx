import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  MapPin, 
  Truck, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  Phone, 
  MessageSquare, 
  ArrowLeft,
  CheckCircle2,
  Navigation
} from 'lucide-react';
import { serviceLocations, getLocationBySlug } from '@/data/locations';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQAccordion } from '@/components/FAQAccordion';
import { JsonLd } from '@/components/JsonLd';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return serviceLocations.map(loc => ({
    slug: loc.slug
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return { title: 'Location Not Found' };
  }

  return {
    title: `${location.heroTitle} | Himal Product and Services`,
    description: location.description
  };
}

export default async function ServiceLocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${siteConfig.name} - ${location.name} Service Hub`,
    "description": location.description,
    "telephone": siteConfig.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.name,
      "addressRegion": location.district,
      "addressCountry": "NP"
    },
    "areaServed": {
      "@type": "City",
      "name": location.name
    }
  };

  const whatsappMessage = `Hello Himal Product & Services! I am reaching out from ${location.name} regarding your mobile repair and electronics services.`;

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <JsonLd data={localSchema} />

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[
          { name: 'Service Areas', url: '/service-areas' },
          { name: location.name, url: `/service-areas/${location.slug}` }
        ]} />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 md:p-12 shadow-xl mb-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider bg-blue-600/30 text-blue-300 border border-blue-400/30 px-3 py-1 rounded-full inline-block">
              {location.district} District • {location.distanceFromHub}
            </span>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              {location.heroTitle}
            </h1>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              {location.description}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Truck className="w-4 h-4" />
                <span>{location.travelTime}</span>
              </span>
              <span className="flex items-center gap-1.5 text-cyan-300">
                <ShieldCheck className="w-4 h-4" />
                <span>Genuine Warranties on All Repairs & Devices</span>
              </span>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={getWhatsAppLink(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl transition text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
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

        {/* Services & Local Logistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Services Available */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-blue-600" />
              <span>Available Services for {location.name}</span>
            </h2>
            <ul className="space-y-2.5 text-xs text-slate-700">
              {location.servicesOffered.map((srv, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{srv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Delivery & Landmarks */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Truck className="w-5 h-5 text-emerald-600" />
              <span>Delivery Coverage & Landmarks</span>
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              {location.deliveryCoverage}
            </p>
            <div className="pt-2 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-800 mb-2">Key Areas & Landmarks Covered:</p>
              <div className="flex flex-wrap gap-1.5">
                {location.localLandmarks.map((lm, i) => (
                  <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">
                    {lm}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Local FAQs */}
        {location.localFaqs && location.localFaqs.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">
              Frequently Asked Questions for {location.name}
            </h2>
            <FAQAccordion faqs={location.localFaqs} />
          </div>
        )}

        {/* Back Link */}
        <div className="text-center pt-4">
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View All Service Area Hubs</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
