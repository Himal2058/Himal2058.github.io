import React from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Clock, 
  Phone, 
  ExternalLink, 
  Navigation, 
  CheckCircle2,
  Compass,
  Building
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'Himal Product and Services Store Location & Map | Itahari Corridor',
  description: 'Visit Himal Product and Services in Sundarharaincha-4, Morang, serving Itahari, Dharan, and Biratnagar. Landmark directions, opening hours, and parking.'
};

export default function StoreLocationPage() {
  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    "name": siteConfig.name,
    "hasMap": siteConfig.googleMapsUrl,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.geo.latitude,
      "longitude": siteConfig.geo.longitude
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.province,
      "postalCode": siteConfig.address.postalCode,
      "addressCountry": "NP"
    },
    "telephone": siteConfig.phone
  };

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <JsonLd data={storeSchema} />

      <div className="container mx-auto px-4 max-w-5xl">
        <Breadcrumbs items={[{ name: 'Store Location', url: '/store-location' }]} />

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
            Physical Workshop & Storefront
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Our Store Location & Directions
          </h1>
          <p className="text-xs md:text-sm text-slate-600 mt-3 leading-relaxed">
            Conveniently situated in Sundarharaincha-4, Morang along the primary highway corridor directly connecting Itahari, Biratnagar, and Dharan.
          </p>
        </div>

        {/* Map Frame Card */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm mb-12">
          <div className="w-full h-96 bg-slate-100">
            <iframe
              title="Himal Product and Services Workshop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.123456789!2d87.2781325!3d26.687414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d33be82599b%3A0xb67ac2eefb668b5f!2sHimal%20product%20and%20service!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 border-t border-slate-200">
            <div>
              <p className="text-xs text-slate-500 font-semibold uppercase">Exact GPS Coordinates</p>
              <p className="text-sm font-bold text-slate-900">
                Latitude: {siteConfig.geo.latitude} • Longitude: {siteConfig.geo.longitude}
              </p>
            </div>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-xs transition shadow-md"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps App</span>
            </a>
          </div>
        </div>

        {/* Driving & Landmark Directions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <Compass className="w-5 h-5 text-blue-600" />
              <span>How to Reach Us from Itahari Chowk</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              From Itahari Main Chowk, take the highway heading East towards Sundarharaincha / Gothgaon. Our store and workshop are located just a 10-minute drive away along the main roadside in Ward 4, featuring easy two-wheeler and four-wheeler parking right in front.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <Building className="w-5 h-5 text-emerald-600" />
              <span>How to Reach Us from Biratnagar or Dharan</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              From Biratnagar, head North along the 6-lane Koshi Highway to Itahari Chowk (25 mins), then 10 minutes East. From Dharan, drive South down the Koshi Highway past Itahari. We are conveniently situated for drop-offs without navigating congested inner market lanes.
            </p>
          </div>
        </div>

        {/* Opening Hours & Contact Strip */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Store Hours</p>
            <p className="text-base font-bold text-slate-900">{siteConfig.openingHours.days}</p>
            <p className="text-sm text-emerald-600 font-semibold">{siteConfig.openingHours.hours}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl text-xs transition"
            >
              <Phone className="w-4 h-4 text-green-400" />
              <span>Call Hotline</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3 rounded-xl text-xs transition"
            >
              <span>Contact Page</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
