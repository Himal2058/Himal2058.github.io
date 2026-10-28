'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Headphones, 
  Zap, 
  Watch, 
  Volume2, 
  ShieldCheck, 
  CheckCircle2, 
  Filter, 
  ArrowRight, 
  Truck
} from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';
import { products, Product } from '@/data/products';
import { blogTopics } from '@/data/blogs';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductCard } from '@/components/ProductCard';
import { FAQAccordion } from '@/components/FAQAccordion';

export default function GadgetsAccessoriesPage() {
  const gadgetProducts = products.filter(p => p.category === 'gadgets-accessories');
  const [selectedSub, setSelectedSub] = useState<string>('all');

  const filtered = gadgetProducts.filter(p => {
    if (selectedSub === 'all') return true;
    return p.subcategory === selectedSub;
  });

  const gadgetBlogs = blogTopics.filter(b => b.cluster === 'gadgets-accessories').slice(0, 4);

  const gadgetFaqs = [
    {
      question: "Will a 65W GaN charger harm a phone that only supports 20W?",
      answer: "No. Modern smartphones negotiate voltage and current via standard Power Delivery (PD) and PPS protocols. Your phone will only request the exact wattage its internal power management IC allows, ensuring safe and efficient charging."
    },
    {
      question: "Do your wireless earbuds have active noise cancellation (ANC)?",
      answer: "Yes, models like the Ultima / Havit Pro feature hybrid Active Noise Cancellation up to 30dB to block background traffic and commuting noise, plus quad-mic ENC for crystal-clear calling."
    },
    {
      question: "What warranty comes with your chargers and cables?",
      answer: "Our certified GaN chargers carry a 1-Year replacement warranty, and high-density braided cables carry a 6-Months replacement warranty against manufacturing defects."
    },
    {
      question: "Can I test the sound quality before purchasing in Itahari?",
      answer: "Absolutely! We welcome customers to visit our store in the Sundarharaincha-4 corridor to test earbuds and Bluetooth speakers on your own phone before making a decision."
    }
  ];

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ name: 'Gadgets & Accessories', url: '/gadgets-accessories' }]} />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 md:p-14 shadow-xl mb-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-1.5 bg-purple-500/20 text-purple-300 border border-purple-400/30 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Headphones className="w-3.5 h-3.5" />
              <span>Certified Audio, Charging & Wearables</span>
            </span>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Electronic Gadgets & Mobile Accessories in Itahari
            </h1>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Upgrade your tech setup with certified accessories designed for durability. Browse Active Noise Cancelling earbuds, 65W Gallium Nitride (GaN) fast wall chargers, 100W braided cables, Bluetooth calling smartwatches, and waterproof portable speakers.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-purple-300">
                <CheckCircle2 className="w-4 h-4" />
                <span>Certified GaN & E-Marker Protocols</span>
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>6 Mo - 1 Yr Replacement Warranty</span>
              </span>
              <span className="flex items-center gap-1.5 text-cyan-300">
                <Truck className="w-4 h-4" />
                <span>Doorstep Delivery Across Nepal</span>
              </span>
            </div>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-200 shadow-sm mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5 text-purple-600" />
              <span>Categories:</span>
            </span>
            {[
              { id: 'all', label: 'All Gadgets' },
              { id: 'earbuds-headphones', label: 'Earbuds & Audio' },
              { id: 'chargers-cables', label: 'Chargers & Cables' },
              { id: 'smartwatches', label: 'Smartwatches' },
              { id: 'bluetooth-speakers', label: 'Bluetooth Speakers' }
            ].map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedSub(cat.id)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition ${
                  selectedSub === cat.id
                    ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-500 font-medium">
            Showing {filtered.length} verified products
          </span>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Subcategory Spotlight Cards */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Popular Gadget Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/gadgets-accessories/earbuds-headphones"
              className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-purple-500 hover:shadow-md transition group"
            >
              <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-purple-600 transition">
                Earbuds & Headphones
              </h3>
              <p className="text-[11px] text-slate-500">ANC noise cancellation & crystal-clear calling mics.</p>
            </Link>

            <Link 
              href="/gadgets-accessories/chargers-cables"
              className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition group"
            >
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600 transition">
                Fast Chargers & Cables
              </h3>
              <p className="text-[11px] text-slate-500">GaN 65W wall plugs & 100W braided Type-C cords.</p>
            </Link>

            <Link 
              href="/gadgets-accessories/smartwatches"
              className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition group"
            >
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Watch className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-emerald-600 transition">
                Calling Smartwatches
              </h3>
              <p className="text-[11px] text-slate-500">AMOLED screens, health tracking & on-wrist calls.</p>
            </Link>

            <Link 
              href="/gadgets-accessories/bluetooth-speakers"
              className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-amber-500 hover:shadow-md transition group"
            >
              <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Volume2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-amber-600 transition">
                Bluetooth Speakers
              </h3>
              <p className="text-[11px] text-slate-500">Rugged IPX7 waterproof sound with punchy bass.</p>
            </Link>
          </div>
        </div>

        {/* Supporting Guides */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-slate-900">Gadget Guides & Tips</h2>
            <Link href="/blog" className="text-xs font-bold text-blue-600 hover:underline">
              View All Guides →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gadgetBlogs.map(blog => (
              <div key={blog.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-purple-600 font-bold uppercase tracking-wider block mb-1">
                    {blog.intent}
                  </span>
                  <Link href={`/blog/${blog.slug}`}>
                    <h3 className="font-bold text-slate-900 text-sm hover:text-purple-600 transition line-clamp-2 mb-2">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-4">
                  <Link href={`/blog/${blog.slug}`} className="text-xs font-bold text-purple-600 hover:underline flex items-center gap-1">
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
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 block mb-1">
              Common Questions
            </span>
            <h2 className="text-2xl font-black text-slate-900">
              Electronic Gadgets & Accessories FAQs
            </h2>
          </div>
          <FAQAccordion faqs={gadgetFaqs} />
        </div>

      </div>
    </div>
  );
}
