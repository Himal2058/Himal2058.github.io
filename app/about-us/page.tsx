import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Wrench, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Users, 
  ArrowRight 
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = {
  title: 'About Himal Product and Services | Estd. 2022 Morang & Sunsari',
  description: 'Learn about Himal Product and Services, our certified technician team, workshop philosophy, and dedication to genuine electronics in Itahari and Eastern Nepal.'
};

export default function AboutUsPage() {
  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <Breadcrumbs items={[{ name: 'About Us', url: '/about-us' }]} />

        {/* Hero */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-14 shadow-sm mb-12">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Established 2022 • Registered in Nepal</span>
            </span>

            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              About Himal Product and Services
            </h1>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Founded in 2022, <strong>Himal Product and Services</strong> was established with a singular mission: to provide the communities of Itahari, Sunsari, Morang, and greater Eastern Nepal with dependable, honest mobile phone repairs and 100% genuine electronics.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Certified Bench Diagnostics</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We never perform guesswork on your expensive smartphones. Our workbench is equipped with digital USB power meters, precision thermal imaging, and calibrated torque tools.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">100% Genuine Inventory</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every smartphone we sell carries an official VAT bill and is registered with the Nepal Telecommunications Authority MDMS system. Zero gray-market risk.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Customer Data Privacy Code</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hardware repairs (screen/battery) never touch your private photos, WhatsApp chats, or banking apps. We advocate for Android Maintenance Mode and total privacy.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12 space-y-6 text-xs md:text-sm text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-black text-slate-900">Our Founding Story & Workshop Hub</h2>
          
          <p>
            When we launched our physical workshop in <strong>Sundarharaincha-4, Morang</strong> along the busy highway corridor serving Itahari and Biratnagar, we observed a widespread challenge: customers with cracked screens or failing batteries were frequently told to leave their phones for days, with unpredictable pricing and uncertain component origins.
          </p>

          <p>
            We set out to change that standard. By stocking genuine and OEM-grade display panels, fresh-cycle lithium batteries, GaN charging components, and IoT automation products directly, we reduced routine repair turnarounds to just <strong>45 to 90 minutes</strong> while customers wait comfortably.
          </p>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
            <p className="font-bold text-slate-900 text-sm">Key Business Credentials:</p>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>• Registered Entity Name: <strong>{siteConfig.name}</strong></li>
              <li>• Year of Establishment: <strong>2022</strong></li>
              <li>• Store & Workshop Address: <strong>{siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.province}, Nepal</strong></li>
              <li>• Primary Service Region: <strong>Itahari, Sunsari, Morang, and all Koshi Province districts</strong></li>
              <li>• Direct Hotline: <strong>{siteConfig.phone}</strong></li>
              <li>• Official Email: <strong>{siteConfig.email}</strong></li>
            </ul>
          </div>
        </div>

        {/* Links to Other Trust Pages */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <Link href="/warranty" className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 transition text-center">
            <p className="font-bold text-sm text-slate-900 mb-1">Product Warranty Policy</p>
            <p className="text-xs text-slate-500">6 Months to 2 Years coverage →</p>
          </Link>
          <Link href="/repair-policy" className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 transition text-center">
            <p className="font-bold text-sm text-slate-900 mb-1">Repair Terms & Privacy</p>
            <p className="text-xs text-slate-500">Read our ethical repair promise →</p>
          </Link>
          <Link href="/store-location" className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 transition text-center">
            <p className="font-bold text-sm text-slate-900 mb-1">Visit Store Location</p>
            <p className="text-xs text-slate-500">Google Maps & Directions →</p>
          </Link>
        </div>

      </div>
    </div>
  );
}
