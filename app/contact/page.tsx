import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ExternalLink,
  ShieldCheck,
  Send
} from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'Contact Himal Product and Services | Itahari & Morang',
  description: 'Contact Himal Product and Services for mobile phone repair bookings, smartphone inquiries, or gadget orders. Call +977 9807391472 or WhatsApp.'
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": `Contact ${siteConfig.name}`,
    "url": `${siteConfig.siteUrl}/contact`,
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": siteConfig.name,
      "telephone": siteConfig.phone,
      "email": siteConfig.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.address.street,
        "addressLocality": siteConfig.address.city,
        "addressRegion": siteConfig.address.province,
        "addressCountry": "NP"
      }
    }
  };

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <JsonLd data={contactSchema} />

      <div className="container mx-auto px-4 max-w-6xl">
        <Breadcrumbs items={[{ name: 'Contact Us', url: '/contact' }]} />

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
            Get in Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Contact Our Technicians & Sales Team
          </h1>
          <p className="text-xs md:text-sm text-slate-600 mt-3 leading-relaxed">
            Have a question about a cracked screen, battery swap, smartphone availability, or delivery? Reach out directly via phone, WhatsApp, or the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone & WhatsApp Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-600" />
                <span>Call or Message Us</span>
              </h2>

              <div className="space-y-3 text-xs">
                <div>
                  <p className="text-slate-500">Direct Hotline:</p>
                  <a href={`tel:${siteConfig.phoneRaw}`} className="text-lg font-bold text-blue-600 hover:underline">
                    {siteConfig.phone}
                  </a>
                </div>

                <div>
                  <p className="text-slate-500">Official WhatsApp:</p>
                  <a 
                    href={getWhatsAppLink("Hello Himal Product & Services, I am reaching out from your website.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl transition mt-1"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open WhatsApp Chat</span>
                  </a>
                </div>

                <div>
                  <p className="text-slate-500">Email Address:</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-xs font-bold text-slate-800 hover:underline">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Hours Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Storefront & Workshop Address</span>
              </h2>

              <div className="space-y-3 text-xs text-slate-700">
                <div>
                  <p className="font-bold text-slate-900">{siteConfig.address.street}</p>
                  <p>{siteConfig.address.city}, {siteConfig.address.district}</p>
                  <p>{siteConfig.address.province}, Nepal</p>
                  <p className="text-slate-500 mt-1 italic">Landmark: {siteConfig.address.landmark}</p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-start gap-2">
                  <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900">Working Hours:</p>
                    <p>{siteConfig.openingHours.days}</p>
                    <p className="text-emerald-700 font-semibold">{siteConfig.openingHours.hours}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline"
                  >
                    <span>View Exact Location on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Interactive Contact & Enquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}
