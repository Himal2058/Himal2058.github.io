'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Lightbulb, 
  Power, 
  Camera, 
  ShieldCheck, 
  CheckCircle2, 
  Filter, 
  ArrowRight, 
  Wifi, 
  Cpu, 
  AlertCircle 
} from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';
import { products, Product } from '@/data/products';
import { blogTopics } from '@/data/blogs';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductCard } from '@/components/ProductCard';
import { FAQAccordion } from '@/components/FAQAccordion';

export default function SmartHomePage() {
  const smartProducts = products.filter(p => p.category === 'smart-home');
  const [selectedSub, setSelectedSub] = useState<string>('all');

  const filtered = smartProducts.filter(p => {
    if (selectedSub === 'all') return true;
    return p.subcategory === selectedSub;
  });

  const smartBlogs = blogTopics.filter(b => b.cluster === 'smart-home').slice(0, 4);

  const smartFaqs = [
    {
      question: "Do I need an expensive hub or wall rewiring for smart home devices in Nepal?",
      answer: "No! All our smart devices connect directly to your existing home 2.4GHz Wi-Fi router. You don't need dedicated gateway hubs or electrical rewiring. You simply screw in bulbs or plug in adapters."
    },
    {
      question: "Can a 16A smart plug safely handle water geysers and AC units?",
      answer: "Yes, our 16A heavy-duty smart plugs are rated up to 3500 Watts with fire-retardant V0 casing, specifically engineered for high-draw water heaters, air conditioners, and room heaters."
    },
    {
      question: "What happens to smart devices during load-shedding or power cuts?",
      answer: "When power returns, our devices automatically reconnect to your Wi-Fi within seconds. You can configure in the app whether appliances stay OFF or return to their previous state after power restoration."
    },
    {
      question: "Do security cameras require monthly cloud subscription fees?",
      answer: "No! Our 360-degree 2K security cameras support local MicroSD memory cards up to 256GB. You can view live streams and playback recordings from your phone anywhere in the world without monthly fees."
    }
  ];

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ name: 'Smart Home Devices & Automation', url: '/smart-home' }]} />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-stone-950 text-white rounded-3xl p-8 md:p-14 shadow-xl mb-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Affordable Automation for Nepali Homes</span>
            </span>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Smart Home Devices & Home Automation in Nepal
            </h1>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Automate your home lighting, schedule water geysers to slash electricity bills, and protect your family with 360° 2K pan-tilt smart Wi-Fi cameras. No complicated rewiring or expensive hubs required.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-amber-300">
                <Wifi className="w-4 h-4" />
                <span>Works on Standard 2.4GHz Wi-Fi</span>
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>1 Year Official Replacement Warranty</span>
              </span>
              <span className="flex items-center gap-1.5 text-blue-300">
                <Cpu className="w-4 h-4" />
                <span>Tuya, Google Home & Alexa Support</span>
              </span>
            </div>
          </div>
        </div>

        {/* Electrical Safety Notice Alert */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 md:p-6 mb-8 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 leading-relaxed">
            <p className="font-bold text-sm text-amber-950 mb-1">Important Appliance Safety Guidance for Nepal:</p>
            <p>
              Always use a <strong>16A rated smart plug</strong> for heavy thermal loads such as water heaters (geysers), immersion rods, and air conditioners. Never use standard 10A light-duty plugs on appliances exceeding 2000 Watts.
            </p>
          </div>
        </div>

        {/* Subcategory Filter Tabs */}
        <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-200 shadow-sm mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5 text-amber-600" />
              <span>Smart Categories:</span>
            </span>
            {[
              { id: 'all', label: 'All Smart Devices' },
              { id: 'smart-bulbs', label: 'Smart Bulbs & Lighting' },
              { id: 'smart-plugs-switches', label: '16A Smart Plugs & Switches' },
              { id: 'smart-security', label: 'Smart CCTV Cameras' }
            ].map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedSub(cat.id)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition ${
                  selectedSub === cat.id
                    ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-500 font-medium">
            Showing {filtered.length} smart products
          </span>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* 3 Step Beginner Automation Guide */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 mb-16 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
              Beginner Friendly
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Start Automating in 3 Simple Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-2">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mx-auto font-black text-lg">
                1
              </div>
              <h3 className="font-bold text-sm text-slate-900">Screw In or Plug In</h3>
              <p className="text-slate-600">Screws into standard Nepali B22/E27 bulb sockets or regular 16A wall plugs without electrician visits.</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-2">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mx-auto font-black text-lg">
                2
              </div>
              <h3 className="font-bold text-sm text-slate-900">Pair via Free App</h3>
              <p className="text-slate-600">Download Tuya Smart / Smart Life on Android or iPhone and connect to your home 2.4GHz Wi-Fi network.</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-2">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mx-auto font-black text-lg">
                3
              </div>
              <h3 className="font-bold text-sm text-slate-900">Schedule & Relax</h3>
              <p className="text-slate-600">Set automatic geyser shutoffs, voice control through Google Assistant, and monitor live energy usage.</p>
            </div>
          </div>
        </div>

        {/* Subcategories Spotlight */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Smart Product Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link 
              href="/smart-home/smart-bulbs"
              className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-amber-500 hover:shadow-md transition group"
            >
              <Lightbulb className="w-8 h-8 text-amber-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-amber-600 transition">
                Smart Wi-Fi Bulbs
              </h3>
              <p className="text-[11px] text-slate-500">16 Million RGB colors, warm white, and scheduled timers.</p>
            </Link>

            <Link 
              href="/smart-home/smart-plugs-switches"
              className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition group"
            >
              <Power className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600 transition">
                16A Heavy-Duty Plugs
              </h3>
              <p className="text-[11px] text-slate-500">Safe automation for water geysers, pumps, and ACs with energy meter.</p>
            </Link>

            <Link 
              href="/smart-home/smart-security"
              className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition group"
            >
              <Camera className="w-8 h-8 text-emerald-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-emerald-600 transition">
                360° 2K Security Cameras
              </h3>
              <p className="text-[11px] text-slate-500">Night vision, two-way audio, and local SD card recording.</p>
            </Link>
          </div>
        </div>

        {/* Supporting Guides */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-slate-900">Smart Home Automation Guides</h2>
            <Link href="/blog" className="text-xs font-bold text-blue-600 hover:underline">
              View All Guides →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {smartBlogs.map(blog => (
              <div key={blog.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-amber-600 font-bold uppercase tracking-wider block mb-1">
                    {blog.intent}
                  </span>
                  <Link href={`/blog/${blog.slug}`}>
                    <h3 className="font-bold text-slate-900 text-sm hover:text-amber-600 transition line-clamp-2 mb-2">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-4">
                  <Link href={`/blog/${blog.slug}`} className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
              Automation Questions
            </span>
            <h2 className="text-2xl font-black text-slate-900">
              Smart Home Automation FAQs
            </h2>
          </div>
          <FAQAccordion faqs={smartFaqs} />
        </div>

      </div>
    </div>
  );
}
