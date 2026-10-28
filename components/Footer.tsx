import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Truck, 
  Wrench, 
  ExternalLink,
  CreditCard,
  FileText
} from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Company & Local Entity Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500 bg-slate-900 flex-shrink-0">
                <img 
                  src="/logo.jpg" 
                  alt="Himal Product and Services Emblem" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  {siteConfig.name}
                </h3>
                <p className="text-xs text-amber-400 font-medium">
                  Estd. {siteConfig.establishedYear} • Koshi Province, Nepal
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Eastern Nepal's trusted electronics destination. Specializing in certified smartphone hardware diagnostics, express display and battery replacements, official smartphones, audio gear, and smart home automation.
            </p>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.province}, Nepal
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-white transition">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{siteConfig.openingHours.hours}</span>
              </div>
            </div>

            <div className="pt-1">
              <a 
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition"
              >
                <span>View Google Maps Location</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: 5 Core Commercial Clusters */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-blue-400" />
              Commercial Clusters
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/mobile-repair" className="hover:text-white transition flex items-center justify-between">
                  <span>Mobile Phone Repairs (Itahari Hub)</span>
                  <span className="text-[10px] bg-blue-900/60 text-blue-300 px-1.5 py-0.5 rounded">Express</span>
                </Link>
              </li>
              <li className="pl-3 border-l border-slate-800">
                <Link href="/mobile-repair/screen-replacement" className="text-slate-400 hover:text-white transition">
                  • Screen Replacement (Glass/OLED)
                </Link>
              </li>
              <li className="pl-3 border-l border-slate-800">
                <Link href="/mobile-repair/battery-replacement" className="text-slate-400 hover:text-white transition">
                  • Battery Swap & Calibration
                </Link>
              </li>
              <li className="pl-3 border-l border-slate-800">
                <Link href="/mobile-repair/charging-port-repair" className="text-slate-400 hover:text-white transition">
                  • Charging Port & Mic Repair
                </Link>
              </li>
              <li className="pl-3 border-l border-slate-800">
                <Link href="/repair-price" className="text-blue-400 hover:text-blue-300 transition font-medium">
                  • Online Repair Price Calculator
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/mobile-phones" className="hover:text-white transition">
                  Smartphones & MDMS Registered Units
                </Link>
              </li>
              <li>
                <Link href="/gadgets-accessories" className="hover:text-white transition">
                  Electronic Gadgets & Accessories
                </Link>
              </li>
              <li>
                <Link href="/smart-home" className="hover:text-white transition">
                  Smart Home Automation & Lighting
                </Link>
              </li>
              <li>
                <Link href="/power-banks" className="hover:text-white transition">
                  Power Banks & 65W Laptop Chargers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust Infrastructure & Policies */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Trust & Policies
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about-us" className="hover:text-white transition">About Us & Technician Standards</Link>
              </li>
              <li>
                <Link href="/store-location" className="hover:text-white transition">Store Location & Directions</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">Contact Us & Inquiries</Link>
              </li>
              <li>
                <Link href="/warranty" className="hover:text-white transition">
                  Product Warranty (6 Mo - 2 Yrs)
                </Link>
              </li>
              <li>
                <Link href="/repair-policy" className="hover:text-white transition">
                  Repair Terms & Customer Data Privacy
                </Link>
              </li>
              <li>
                <Link href="/delivery-pickup" className="hover:text-white transition">
                  Delivery & Shipping Across Nepal
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-white transition">Terms & Conditions</Link>
              </li>
              <li className="pt-2">
                <a 
                  href="/himal-electronics-keyword-mapping.csv"
                  download
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Keyword Mapping (CSV)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Areas & Assurance */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Truck className="w-4 h-4 text-amber-400" />
              Service Areas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/service-areas/itahari" className="hover:text-white transition">
                  • Itahari (Sunsari) — Primary Service Hub
                </Link>
              </li>
              <li>
                <Link href="/service-areas/sundarharaincha-morang" className="hover:text-white transition">
                  • Sundarharaincha-4 (Morang) — Storefront & Workshop
                </Link>
              </li>
              <li>
                <Link href="/service-areas/dharan" className="hover:text-white transition">
                  • Dharan — Student & Resident Tech Supply
                </Link>
              </li>
              <li>
                <Link href="/service-areas/biratnagar" className="hover:text-white transition">
                  • Biratnagar — Commercial Tech Dispatch
                </Link>
              </li>
            </ul>

            <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-2 text-xs">
              <p className="font-semibold text-slate-200">Payment & Logistics</p>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                We accept Fonepay QR, eSewa, Khalti, Mobile Banking, and Cash on Delivery. Express courier delivery available across all 7 provinces of Nepal.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright and Legal Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Registered in Nepal (Estd. 2022).
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-400 transition">Privacy</Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-slate-400 transition">Terms</Link>
            <span>•</span>
            <Link href="/warranty" className="hover:text-slate-400 transition">Warranty</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-400 transition">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
