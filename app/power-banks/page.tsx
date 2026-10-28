'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BatteryCharging, 
  Zap, 
  Laptop, 
  ShieldCheck, 
  CheckCircle2, 
  Filter, 
  ArrowRight, 
  Plane,
  AlertCircle 
} from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';
import { products, Product } from '@/data/products';
import { blogTopics } from '@/data/blogs';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductCard } from '@/components/ProductCard';
import { FAQAccordion } from '@/components/FAQAccordion';

export default function PowerBanksPage() {
  const powerProducts = products.filter(p => p.category === 'power-banks');
  const [selectedSub, setSelectedSub] = useState<string>('all');

  const filtered = powerProducts.filter(p => {
    if (selectedSub === 'all') return true;
    return p.subcategory === selectedSub;
  });

  const powerBlogs = blogTopics.filter(b => b.cluster === 'power-banks').slice(0, 4);

  const powerFaqs = [
    {
      question: "Why does a 10,000mAh power bank not give 2 full charges to a 5,000mAh phone?",
      answer: "Internal lithium cells operate at 3.7V. When power is boosted to 5V or 9V for USB delivery, conversion heat and resistance account for a standard 15% to 20% efficiency loss. A genuine 10,000mAh battery delivers approximately 6,300mAh to 6,600mAh of real usable charge."
    },
    {
      question: "Can I bring a 20,000mAh power bank on domestic and international flights in Nepal?",
      answer: "Yes! Aviation safety guidelines (ICAO/IATA and CAAN) permit power banks up to 100 Watt-hours (Wh) in hand carry luggage. A 20,000mAh battery is rated at 74Wh, which is fully legal for airplane travel."
    },
    {
      question: "Can a 65W power bank really charge a MacBook or USB-C laptop?",
      answer: "Yes! Our 65W Baseus Blade power banks feature high-wattage Power Delivery 3.0 that can fully power MacBooks, Dell XPS, HP Spectre, and Lenovo ThinkPad laptops on the go."
    },
    {
      question: "What warranty do you provide on power banks?",
      answer: "All our branded power banks (Baseus, Remax, Joyroom) come with a 1-Year official replacement warranty covering cell defects and circuit failure."
    }
  ];

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ name: 'Power Banks & Portable Charging', url: '/power-banks' }]} />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 text-white rounded-3xl p-8 md:p-14 shadow-xl mb-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-1.5 bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <BatteryCharging className="w-3.5 h-3.5" />
              <span>Certified Lithium-Polymer Cells</span>
            </span>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Fast-Charging Power Banks in Itahari & Nepal
            </h1>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Never get stranded with a dead battery while traveling or commuting. Browse verified 10,000mAh pocket batteries, 20,000mAh 22.5W fast chargers, and heavy-duty 65W laptop power banks with 9-layer circuit safety.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <Zap className="w-4 h-4" />
                <span>20W PD / 22.5W Super Charge</span>
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>1 Year Official Warranty</span>
              </span>
              <span className="flex items-center gap-1.5 text-amber-300">
                <Plane className="w-4 h-4" />
                <span>Airline Flight Approved (&lt; 100Wh)</span>
              </span>
            </div>
          </div>
        </div>

        {/* Comparison Guidance Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-8">
          <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-600" />
            <span>Which Power Bank Size Is Right for You?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <p className="font-bold text-slate-900 text-sm mb-1">10,000mAh (Slim Pocket)</p>
              <p className="text-slate-600 mb-2">Weighs ~180g. Slips easily into jeans pockets and purses.</p>
              <p className="text-blue-600 font-semibold">Charges phone 1.3 to 1.5 times. Perfect for daily office commutes.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <p className="font-bold text-slate-900 text-sm mb-1">20,000mAh (High Capacity)</p>
              <p className="text-slate-600 mb-2">Weighs ~420g. Digital percentage display with 3-port output.</p>
              <p className="text-emerald-600 font-semibold">Charges phone 3 to 4 times. Ideal for road trips and weekend travel.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <p className="font-bold text-slate-900 text-sm mb-1">65W PD (Laptop & Phone)</p>
              <p className="text-slate-600 mb-2">High-output Type-C power delivery. Recharges in under 90 minutes.</p>
              <p className="text-purple-600 font-semibold">Powers MacBook, Dell, ThinkPad laptops and gaming consoles.</p>
            </div>
          </div>
        </div>

        {/* Subcategory Filter Tabs */}
        <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-200 shadow-sm mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5 text-cyan-600" />
              <span>Filter Capacity:</span>
            </span>
            {[
              { id: 'all', label: 'All Capacities' },
              { id: 'slim-portable', label: '10,000mAh Slim Pocket' },
              { id: 'high-capacity', label: '20,000mAh High Capacity' },
              { id: 'laptop-charging', label: '65W Laptop PD Power Banks' }
            ].map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedSub(cat.id)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition ${
                  selectedSub === cat.id
                    ? 'bg-cyan-600 text-white border-cyan-600 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-500 font-medium">
            Showing {filtered.length} verified models
          </span>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Supporting Educational Guides */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-slate-900">Power Bank Guides & Tips</h2>
            <Link href="/blog" className="text-xs font-bold text-blue-600 hover:underline">
              View All Guides →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {powerBlogs.map(blog => (
              <div key={blog.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-cyan-600 font-bold uppercase tracking-wider block mb-1">
                    {blog.intent}
                  </span>
                  <Link href={`/blog/${blog.slug}`}>
                    <h3 className="font-bold text-slate-900 text-sm hover:text-cyan-600 transition line-clamp-2 mb-2">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-4">
                  <Link href={`/blog/${blog.slug}`} className="text-xs font-bold text-cyan-600 hover:underline flex items-center gap-1">
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
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 block mb-1">
              Battery Safety & Realities
            </span>
            <h2 className="text-2xl font-black text-slate-900">
              Power Bank & Fast Charging FAQs
            </h2>
          </div>
          <FAQAccordion faqs={powerFaqs} />
        </div>

      </div>
    </div>
  );
}
