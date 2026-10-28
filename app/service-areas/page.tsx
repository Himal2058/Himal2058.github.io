import React from 'react';
import Link from 'next/link';
import { MapPin, Truck, Wrench, Clock, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import { serviceLocations } from '@/data/locations';
import { siteConfig } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Service Areas in Sunsari & Morang | Himal Product & Services',
  description: 'Local coverage across Itahari, Sundarharaincha, Biratnagar, and Dharan. Express mobile repairs, same-day delivery, and genuine electronics.'
};

export default function ServiceAreasPage() {
  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <Breadcrumbs items={[{ name: 'Service Areas', url: '/service-areas' }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Koshi Province Service Hub</span>
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Our Local Service Coverage in Sunsari & Morang
          </h1>
          <p className="text-xs md:text-sm text-slate-600 mt-3 leading-relaxed">
            Conveniently positioned along the main highway corridor connecting Itahari, Sundarharaincha, Dharan, and Biratnagar. We provide fast mobile repairs, authentic electronics, and same-day delivery.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {serviceLocations.map(loc => (
            <div key={loc.id} className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    loc.isPrimary ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {loc.district} District
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {loc.travelTime}
                  </span>
                </div>

                <Link href={`/service-areas/${loc.slug}`}>
                  <h2 className="text-xl font-bold text-slate-900 hover:text-blue-600 transition mb-2">
                    {loc.heroTitle}
                  </h2>
                </Link>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {loc.description}
                </p>

                <div className="space-y-2 mb-6 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="font-bold text-slate-900">Key Landmarks Served:</p>
                  <ul className="space-y-1 text-slate-600">
                    {loc.localLandmarks.slice(0, 3).map((lm, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="text-blue-500">•</span>
                        <span>{lm}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/service-areas/${loc.slug}`}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <span>Explore {loc.name} Hub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <Truck className="w-3 h-3" />
                  <span>Express Delivery Available</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Nationwide shipping note */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 text-center space-y-3">
          <h3 className="text-lg font-bold">Residing Outside Sunsari or Morang?</h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
            We provide fast, bubble-wrapped courier delivery across all 7 provinces of Nepal. Orders confirmed before 1:00 PM are dispatched the same afternoon.
          </p>
          <div className="pt-2">
            <Link
              href="/delivery-pickup"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300"
            >
              <span>Read Nationwide Delivery Guidelines →</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
