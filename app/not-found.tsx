import React from 'react';
import Link from 'next/link';
import { Home, Wrench, Smartphone, Search, Phone } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function NotFound() {
  return (
    <div className="py-20 bg-slate-50 min-h-[70vh] flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-xl text-center space-y-6">
        <span className="text-6xl md:text-8xl font-black text-blue-600">404</span>
        <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
          The page or product link you requested may have moved or been updated. You can find what you need using our primary links below:
        </p>

        <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700 pt-2">
          <Link href="/" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-500 transition flex items-center justify-center gap-1.5">
            <Home className="w-4 h-4 text-blue-600" />
            <span>Homepage</span>
          </Link>
          <Link href="/mobile-repair" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-500 transition flex items-center justify-center gap-1.5">
            <Wrench className="w-4 h-4 text-blue-600" />
            <span>Mobile Repairs</span>
          </Link>
          <Link href="/mobile-phones" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-500 transition flex items-center justify-center gap-1.5">
            <Smartphone className="w-4 h-4 text-emerald-600" />
            <span>Smartphones</span>
          </Link>
          <Link href="/contact" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-500 transition flex items-center justify-center gap-1.5">
            <Phone className="w-4 h-4 text-green-600" />
            <span>Contact Store</span>
          </Link>
        </div>

        <div className="pt-4">
          <p className="text-xs text-slate-500">
            Need emergency repair help? Call directly at <a href={`tel:${siteConfig.phoneRaw}`} className="text-blue-600 font-bold hover:underline">{siteConfig.phone}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
