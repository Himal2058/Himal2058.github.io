'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  Wrench, 
  Smartphone, 
  Headphones, 
  Lightbulb, 
  BatteryCharging, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  BookOpen 
} from 'lucide-react';
import { siteConfig, getWhatsAppLink, siteAsset } from '@/data/siteConfig';
import { products } from '@/data/products';
import { repairServices } from '@/data/repairs';
import { blogTopics } from '@/data/blogs';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [repairsDropdown, setRepairsDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  // Search filtering across products, repairs, and blogs
  const filteredProducts = searchQuery.trim() 
    ? products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 3)
    : [];
  const filteredRepairs = searchQuery.trim()
    ? repairServices.filter(r => r.title.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 3)
    : [];
  const filteredBlogs = searchQuery.trim()
    ? blogTopics.filter(b => b.title.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 2)
    : [];

  const hasSearchResults = filteredProducts.length > 0 || filteredRepairs.length > 0 || filteredBlogs.length > 0;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Estd. 2022 • Certified Workshop</span>
            </span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Serving Itahari, Sunsari & Morang Corridor</span>
            </span>
            <span className="hidden lg:flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-green-400" />
              <span>{siteConfig.openingHours.hours}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a 
              href={`tel:${siteConfig.phoneRaw}`} 
              className="flex items-center gap-1.5 font-semibold text-white hover:text-blue-300 transition"
            >
              <Phone className="w-3.5 h-3.5 text-green-400" />
              <span>{siteConfig.phone}</span>
            </a>
            <a
              href={getWhatsAppLink("Hello Himal Product & Services, I would like to inquire about your services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-2.5 py-0.5 rounded-full transition"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar with Logo, Search, and Primary Actions */}
      <div className="container mx-auto px-4 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo and Name */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-600 shadow-sm group-hover:scale-105 transition-transform bg-slate-900 flex items-center justify-center">
            <img 
              src={siteAsset("/logo.jpg")} 
              alt="Himal Product and Services Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tight block leading-tight group-hover:text-blue-600 transition">
              Himal <span className="text-blue-600">Product & Services</span>
            </span>
            <span className="text-xs text-slate-500 font-medium block">
              Electronics Retail & Mobile Repair Hub • Itahari
            </span>
          </div>
        </Link>

        {/* Search Bar with Autocomplete Dropdown */}
        <div className="hidden lg:block relative flex-1 max-w-md mx-6">
          <div className="relative">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              placeholder="Search phones, repairs (screen/battery), power banks..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          </div>

          {/* Autocomplete Results Modal */}
          {searchFocused && searchQuery.trim().length > 1 && (
            <div 
              className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-100 p-3 z-50 max-h-96 overflow-y-auto"
              onMouseLeave={() => setSearchFocused(false)}
            >
              {!hasSearchResults ? (
                <p className="text-xs text-slate-500 p-2 text-center">No matching products or repairs found. Contact us on WhatsApp for custom inquiries!</p>
              ) : (
                <div className="space-y-3">
                  {filteredRepairs.length > 0 && (
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-blue-600 px-2 mb-1">Repair Services</p>
                      {filteredRepairs.map(repair => (
                        <Link 
                          key={repair.id} 
                          href={`/mobile-repair/${repair.slug}`}
                          onClick={() => setSearchFocused(false)}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-sm text-slate-800 transition"
                        >
                          <span className="font-medium">{repair.title}</span>
                          <span className="text-xs text-slate-500">{repair.turnaroundTime}</span>
                        </Link>
                      ))}
                    </div>
                  )}

                  {filteredProducts.length > 0 && (
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 px-2 mb-1">Products & Gadgets</p>
                      {filteredProducts.map(product => (
                        <Link 
                          key={product.id} 
                          href={`/products/${product.slug}`}
                          onClick={() => setSearchFocused(false)}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-sm text-slate-800 transition"
                        >
                          <span>{product.name}</span>
                          <span className="font-bold text-slate-900">रू {product.price.toLocaleString('en-IN')}</span>
                        </Link>
                      ))}
                    </div>
                  )}

                  {filteredBlogs.length > 0 && (
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-purple-600 px-2 mb-1">Guides & Articles</p>
                      {filteredBlogs.map(blog => (
                        <Link 
                          key={blog.id} 
                          href={`/blog/${blog.slug}`}
                          onClick={() => setSearchFocused(false)}
                          className="block p-2 rounded-lg hover:bg-slate-50 text-xs text-slate-700 transition"
                        >
                          {blog.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link 
            href="/repair-price" 
            className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 px-3.5 py-2 rounded-lg text-sm font-semibold border border-blue-200 transition"
          >
            <Wrench className="w-4 h-4 text-blue-600" />
            <span>Repair Estimator</span>
          </Link>
          <a
            href={getWhatsAppLink("Hello Himal Product & Services, I need assistance with a repair or product inquiry.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>

        {/* Mobile Menu Hamburger Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Main Desktop Navigation Menu */}
      <nav className="hidden lg:block bg-slate-900 text-white">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-1 font-medium text-sm">
            {/* Cluster 1: Mobile Repair with Mega Submenu */}
            <div 
              className="relative group py-3"
              onMouseEnter={() => setRepairsDropdown(true)}
              onMouseLeave={() => setRepairsDropdown(false)}
            >
              <Link 
                href="/mobile-repair" 
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-slate-800 hover:text-blue-400 transition"
              >
                <Wrench className="w-4 h-4 text-blue-400" />
                <span>Mobile Repair</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              {repairsDropdown && (
                <div className="absolute left-0 top-full w-80 bg-white text-slate-900 rounded-b-xl shadow-2xl border border-slate-100 py-3 z-50">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Mobile Services in Itahari</span>
                  </div>
                  <div className="py-1">
                    <Link href="/mobile-repair/screen-replacement" className="flex items-center justify-between px-4 py-2 hover:bg-slate-50 text-sm">
                      <span>Screen Replacement</span>
                      <span className="text-xs text-blue-600 font-semibold">From रू 1,800</span>
                    </Link>
                    <Link href="/mobile-repair/battery-replacement" className="flex items-center justify-between px-4 py-2 hover:bg-slate-50 text-sm">
                      <span>Battery Replacement</span>
                      <span className="text-xs text-blue-600 font-semibold">From रू 1,200</span>
                    </Link>
                    <Link href="/mobile-repair/charging-port-repair" className="flex items-center justify-between px-4 py-2 hover:bg-slate-50 text-sm">
                      <span>Charging Port Repair</span>
                      <span className="text-xs text-blue-600 font-semibold">From रू 700</span>
                    </Link>
                    <Link href="/mobile-repair/water-damage" className="flex items-center justify-between px-4 py-2 hover:bg-slate-50 text-sm">
                      <span>Water Damage Diagnostics</span>
                      <span className="text-xs text-amber-600 font-semibold">Express Clean</span>
                    </Link>
                    <Link href="/mobile-repair/iphone-repair" className="flex items-center justify-between px-4 py-2 hover:bg-slate-50 text-sm">
                      <span>Apple iPhone Specialist</span>
                      <span className="text-xs text-slate-500">True Tone/FaceID</span>
                    </Link>
                    <Link href="/mobile-repair/android-repair" className="flex items-center justify-between px-4 py-2 hover:bg-slate-50 text-sm">
                      <span>Android Repair (Samsung, Redmi)</span>
                      <span className="text-xs text-slate-500">All Brands</span>
                    </Link>
                    <div className="pt-2 mt-1 border-t border-slate-100 px-4">
                      <Link href="/repair-price" className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
                        View Complete Repair Price Calculator →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Cluster 2: Mobile Phones */}
            <Link 
              href="/mobile-phones" 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-slate-800 hover:text-blue-400 transition"
            >
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <span>Smartphones</span>
            </Link>

            {/* Cluster 3: Gadgets & Accessories */}
            <Link 
              href="/gadgets-accessories" 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-slate-800 hover:text-blue-400 transition"
            >
              <Headphones className="w-4 h-4 text-purple-400" />
              <span>Gadgets & Accessories</span>
            </Link>

            {/* Cluster 4: Smart Home */}
            <Link 
              href="/smart-home" 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-slate-800 hover:text-blue-400 transition"
            >
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>Smart Home</span>
            </Link>

            {/* Cluster 5: Power Banks */}
            <Link 
              href="/power-banks" 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-slate-800 hover:text-blue-400 transition"
            >
              <BatteryCharging className="w-4 h-4 text-cyan-400" />
              <span>Power Banks</span>
            </Link>

            {/* Blog & Educational Guides */}
            <Link 
              href="/blog" 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-slate-800 hover:text-blue-400 transition"
            >
              <BookOpen className="w-4 h-4 text-rose-400" />
              <span>Guides & Blog</span>
            </Link>

            {/* Service Areas */}
            <Link 
              href="/service-areas" 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-slate-800 hover:text-blue-400 transition"
            >
              <MapPin className="w-4 h-4 text-amber-300" />
              <span>Service Areas</span>
            </Link>
          </div>

          {/* Right Trust Links */}
          <div className="flex items-center space-x-3 text-xs font-medium text-slate-300">
            <Link href="/about-us" className="hover:text-white transition">About Us</Link>
            <span>•</span>
            <Link href="/store-location" className="hover:text-white transition">Store Location</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl">
          {/* Mobile Search */}
          <div className="relative">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search phones, repairs, gadgets..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>

          <div className="divide-y divide-slate-100 text-sm font-medium text-slate-800">
            <div className="py-2">
              <Link 
                href="/mobile-repair" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-blue-700 font-bold"
              >
                <span className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-blue-600" />
                  Mobile Phone Repairs
                </span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Itahari Hub</span>
              </Link>
              <div className="pl-6 space-y-1.5 text-xs text-slate-600">
                <Link href="/mobile-repair/screen-replacement" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-blue-600">Screen Replacement (Glass/OLED)</Link>
                <Link href="/mobile-repair/battery-replacement" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-blue-600">Battery Replacement</Link>
                <Link href="/mobile-repair/charging-port-repair" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-blue-600">Charging Port & Mic</Link>
                <Link href="/mobile-repair/water-damage" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-blue-600">Water Damage Diagnostics</Link>
                <Link href="/mobile-repair/iphone-repair" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-blue-600">Apple iPhone Specialist</Link>
                <Link href="/repair-price" onClick={() => setMobileMenuOpen(false)} className="block py-1 font-bold text-blue-600">Repair Cost Calculator →</Link>
              </div>
            </div>

            <Link href="/mobile-phones" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 py-3">
              <Smartphone className="w-4 h-4 text-emerald-600" />
              Smartphones & Phones
            </Link>

            <Link href="/gadgets-accessories" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 py-3">
              <Headphones className="w-4 h-4 text-purple-600" />
              Gadgets & Accessories (Earbuds, Chargers)
            </Link>

            <Link href="/smart-home" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 py-3">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              Smart Home & Automation
            </Link>

            <Link href="/power-banks" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 py-3">
              <BatteryCharging className="w-4 h-4 text-cyan-600" />
              Power Banks & Fast Charging
            </Link>

            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 py-3">
              <BookOpen className="w-4 h-4 text-rose-600" />
              Guides & Educational Blog
            </Link>

            <Link href="/service-areas" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 py-3">
              <MapPin className="w-4 h-4 text-amber-600" />
              Service Areas (Itahari, Morang, Sunsari)
            </Link>

            <div className="pt-3 pb-1 grid grid-cols-2 gap-2 text-xs text-slate-600">
              <Link href="/about-us" onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-50 rounded text-center">About Us</Link>
              <Link href="/store-location" onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-50 rounded text-center">Store Location</Link>
              <Link href="/warranty" onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-50 rounded text-center">Warranty Terms</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-50 rounded text-center">Contact</Link>
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a 
              href={`tel:${siteConfig.phoneRaw}`} 
              className="flex items-center justify-center gap-2 bg-slate-900 text-white py-2.5 rounded-lg font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-green-400" />
              Call {siteConfig.phone}
            </a>
            <a 
              href={getWhatsAppLink("Hello Himal Product & Services, I am calling from your website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-2.5 rounded-lg font-bold text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
