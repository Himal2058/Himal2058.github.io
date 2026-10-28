'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Smartphone, 
  ShieldCheck, 
  CheckCircle2, 
  Filter, 
  ArrowRight, 
  MessageSquare, 
  Phone,
  Truck,
  Sparkles
} from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';
import { products, Product } from '@/data/products';
import { blogTopics } from '@/data/blogs';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductCard } from '@/components/ProductCard';
import { FAQAccordion } from '@/components/FAQAccordion';
import { JsonLd, getBreadcrumbSchema } from '@/components/JsonLd';

export default function MobilePhonesPage() {
  const phoneProducts = products.filter(p => p.category === 'mobile-phones');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('recommended');

  const filtered = phoneProducts.filter(p => {
    if (selectedBrand === 'all') return true;
    return p.brand.toLowerCase().includes(selectedBrand.toLowerCase());
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return b.rating - a.rating;
  });

  const phoneBlogs = blogTopics.filter(b => b.cluster === 'mobile-phones').slice(0, 4);

  const phoneFaqs = [
    {
      question: "Are all smartphones sold at Himal Product and Services MDMS registered?",
      answer: "Yes, 100% of our handsets are officially imported, VAT-billed, and registered with the Nepal Telecommunications Authority (NTA) MDMS system. You will never face network blocking on NTC, Ncell, or Smart Cell."
    },
    {
      question: "Do you offer official brand warranty?",
      answer: "All smartphones carry 1 Year official brand warranty serviced at authorized national service centers across Nepal (Samsung, Xiaomi, Apple)."
    },
    {
      question: "Can I transfer my contacts and WhatsApp chats at your store?",
      answer: "Yes! When you buy any new smartphone at our Itahari/Sundarharaincha store, our team provides complimentary complete data transfer from your old device."
    },
    {
      question: "Do you offer home delivery in Dharan, Biratnagar, and Itahari?",
      answer: "Yes, we provide same-day local delivery across Sunsari and Morang, and reliable courier shipping throughout Nepal with secure packaging."
    }
  ];

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ name: 'Mobile Phones & Smartphones', url: '/mobile-phones' }]} />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-blue-950 text-white rounded-3xl p-8 md:p-14 shadow-xl mb-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Smartphone className="w-3.5 h-3.5" />
              <span>100% Genuine MDMS Registered Stock</span>
            </span>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Official Mobile Phones & Smartphones in Itahari, Nepal
            </h1>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Discover verified Android smartphones and Apple iPhones with authentic Nepal warranty, VAT bill, and hassle-free MDMS compliance. Enjoy free phone setup, screen protector fitting, and old-phone data migration at our Itahari corridor store.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>NTA MDMS Verified</span>
              </span>
              <span className="flex items-center gap-1.5 text-blue-300">
                <ShieldCheck className="w-4 h-4" />
                <span>1 Year Official Warranty</span>
              </span>
              <span className="flex items-center gap-1.5 text-cyan-300">
                <Truck className="w-4 h-4" />
                <span>Fast Delivery Across Sunsari & Morang</span>
              </span>
            </div>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-200 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5 text-blue-600" />
              <span>Filter Brand:</span>
            </span>
            {['all', 'Samsung', 'Xiaomi', 'Apple'].map(b => (
              <button
                key={b}
                type="button"
                onClick={() => setSelectedBrand(b)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition ${
                  selectedBrand === b
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {b === 'all' ? 'All Brands' : b}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-semibold px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="recommended">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Buying Decision Support & Value Add */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 mb-16 shadow-sm">
          <div className="max-w-3xl space-y-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
              Shopping Protection
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Why Buy Your Next Phone From Himal Product & Services?
            </h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Buying a smartphone in Nepal shouldn't come with uncertainty about gray market imports or unverified IMEI registrations. We protect your investment through official channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              <h3 className="font-bold text-sm text-slate-900">Zero Gray Market Risk</h3>
              <p className="text-slate-600">Every IMEI is registered on NTA's MDMS portal and backed by official VAT bills.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <Sparkles className="w-6 h-6 text-blue-600" />
              <h3 className="font-bold text-sm text-slate-900">Free Setup & Protection</h3>
              <p className="text-slate-600">We apply your screen protector bubble-free and safely migrate all your photos and chats.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <Truck className="w-6 h-6 text-indigo-600" />
              <h3 className="font-bold text-sm text-slate-900">Direct Express Delivery</h3>
              <p className="text-slate-600">Live anywhere across Itahari, Dharan, or Biratnagar? Order via WhatsApp for direct delivery.</p>
            </div>
          </div>
        </div>

        {/* Subcategories Navigation Links */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Explore Phone Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link 
              href="/mobile-phones/android" 
              className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition flex items-center justify-between group"
            >
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-1 group-hover:text-emerald-600 transition">
                  Android Smartphones (Samsung, Xiaomi, Realme)
                </h3>
                <p className="text-xs text-slate-500">AMOLED screens, 5000mAh batteries, and 5G connectivity under budget.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition" />
            </Link>

            <Link 
              href="/mobile-phones/iphone" 
              className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition flex items-center justify-between group"
            >
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-1 group-hover:text-blue-600 transition">
                  Apple iPhone Series (Official MDMS Units)
                </h3>
                <p className="text-xs text-slate-500">iPhone 13, 14, and 15 with international warranty and genuine accessories.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>

        {/* Supporting Guides */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-slate-900">Smartphone Buying Guides</h2>
            <Link href="/blog" className="text-xs font-bold text-blue-600 hover:underline">
              View All Guides →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phoneBlogs.map(blog => (
              <div key={blog.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider block mb-1">
                    {blog.intent}
                  </span>
                  <Link href={`/blog/${blog.slug}`}>
                    <h3 className="font-bold text-slate-900 text-sm hover:text-emerald-600 transition line-clamp-2 mb-2">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-4">
                  <Link href={`/blog/${blog.slug}`} className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1">
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
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">
              Buyer Questions
            </span>
            <h2 className="text-2xl font-black text-slate-900">
              Smartphone Buying & Warranty FAQs
            </h2>
          </div>
          <FAQAccordion faqs={phoneFaqs} />
        </div>

      </div>
    </div>
  );
}
