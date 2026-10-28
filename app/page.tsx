import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Wrench, 
  Smartphone, 
  Headphones, 
  Lightbulb, 
  BatteryCharging, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Phone, 
  MessageSquare,
  Sparkles,
  Award,
  Zap,
  Truck
} from 'lucide-react';
import { siteConfig, getWhatsAppLink, siteAsset } from '@/data/siteConfig';
import { products } from '@/data/products';
import { repairServices } from '@/data/repairs';
import { blogTopics } from '@/data/blogs';
import { ProductCard } from '@/components/ProductCard';
import { RepairEstimator } from '@/components/RepairEstimator';
import { FAQAccordion } from '@/components/FAQAccordion';
import { JsonLd, getBreadcrumbSchema } from '@/components/JsonLd';

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const pillarArticles = blogTopics.filter(b => b.isPillar).slice(0, 3);

  const homeFaqs = [
    {
      question: "Where is Himal Product and Services located?",
      answer: `Our registered storefront and repair workshop is situated at Sundarharaincha-4, Morang, along the main highway corridor serving Itahari, Dharan, and Biratnagar. We are only 10 minutes from Itahari Chowk.`
    },
    {
      question: "How long does a smartphone screen or battery replacement take?",
      answer: "Most popular models from Samsung, Xiaomi/Redmi, and Apple iPhone are serviced within 45 to 90 minutes. We keep genuine and certified OEM parts on hand for immediate repairs."
    },
    {
      question: "Are your mobile phones MDMS registered and officially warranted?",
      answer: "Yes, 100% of the smartphones sold at Himal Product and Services are brand new, VAT-billed, MDMS registered with the Nepal Telecommunications Authority, and covered by official manufacturer warranties."
    },
    {
      question: "Do you offer courier delivery outside Itahari?",
      answer: "Yes! We provide same-day local delivery across Itahari, Dharan, Biratnagar, and Sundarharaincha, and safe courier dispatch to all 7 provinces of Nepal."
    },
    {
      question: "Will my phone data be safe during screen or battery repair?",
      answer: "Hardware repairs like screen and battery swaps do not touch your internal data or storage. We uphold a strict privacy pledge and support Android Maintenance Mode."
    }
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#081321] py-14 text-white md:py-20">
        {/* Abstract Glow Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            
            {/* Left Column: Value Proposition & Hero CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-blue-100 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                <span>Local expertise • Serving Itahari and Morang since 2022</span>
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight md:text-5xl lg:text-[3.65rem]">
                Expert mobile repair. <span className="text-blue-300">Genuine tech.</span> Itahari service.
              </h1>

              <p className="mx-auto max-w-2xl text-base leading-7 text-slate-300 md:text-lg lg:mx-0">
                From screen, battery, and charging repairs to smartphones and smart-home essentials, get thoughtful local help, clear estimates, and products selected for everyday use.
              </p>

              {/* Trust Badges Bar */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-left sm:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3">
                  <Wrench className="mb-2 h-4 w-4 text-blue-300" />
                  <p className="text-xs font-bold text-white">45–90 minutes</p>
                  <p className="text-[10px] text-slate-400">Common repairs</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3">
                  <ShieldCheck className="mb-2 h-4 w-4 text-emerald-300" />
                  <p className="text-xs font-bold text-white">Clear estimates</p>
                  <p className="text-[10px] text-slate-400">Before repair work</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3">
                  <Award className="mb-2 h-4 w-4 text-amber-300" />
                  <p className="text-xs font-bold text-white">Repair warranty</p>
                  <p className="text-[10px] text-slate-400">Terms vary by service</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3">
                  <Truck className="mb-2 h-4 w-4 text-cyan-300" />
                  <p className="text-xs font-bold text-white">Nationwide delivery</p>
                  <p className="text-[10px] text-slate-400">Local service, too</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link 
                  href="/mobile-repair" 
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/40 transition hover:bg-blue-400 sm:w-auto"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Explore repair services</span>
                </Link>

                <Link 
                  href="/mobile-phones" 
                  className="w-full rounded-xl border border-white/20 bg-white/[0.06] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/[0.12] sm:w-auto"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Shop Smartphones</span>
                </Link>

                <a
                  href={getWhatsAppLink("Hello Himal Product & Services! I am reaching out from your website homepage.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-500 sm:w-auto"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Real repair-bench photography and direct next step */}
            <div className="lg:col-span-5">
              <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900 shadow-2xl md:min-h-[470px]">
                <Image
                  src={siteAsset("/repair-studio.webp")}
                  alt="A technician carefully repairing a smartphone at a clean electronics workbench"
                  fill
                  preload
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-slate-950/5" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/55 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md md:left-7 md:top-7">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  Free initial bench diagnosis
                </div>
                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-slate-950/75 p-5 backdrop-blur-lg md:inset-x-7 md:bottom-7 md:p-6">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-200">A clearer repair decision</p>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h2 className="text-xl font-bold leading-tight text-white md:text-2xl">Know the options before work begins.</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-300">Common screen and battery repairs are often completed in 45–90 minutes.</p>
                    </div>
                    <Link href="/repair-price" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-blue-50">
                      Repair estimate <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Five Core Money-Page Cluster Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Our Core Specializations
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Five Commercial Pillars Backed by Verified Expertise
            </h2>
            <p className="text-sm md:text-base text-slate-600 mt-3">
              Explore our core commercial categories designed for residents, professionals, and gadget enthusiasts across Sunsari & Morang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Cluster 1: Mobile Repair */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <Wrench className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  Primary Workshop Hub
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2">
                  Mobile Phone Repair in Itahari
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Precision screen replacements, battery swaps, loose charging port soldering, and ultrasonic water damage treatment with up to 90 days warranty.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span>Same-day 45–90 min turnaround</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span>Samsung, Apple, Xiaomi, Realme specialists</span>
                  </li>
                </ul>
              </div>
              <Link 
                href="/mobile-repair" 
                className="inline-flex items-center justify-between text-xs font-bold text-blue-600 hover:text-blue-800 pt-4 border-t border-slate-200 group-hover:translate-x-1 transition"
              >
                <span>Explore Repair Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Cluster 2: Mobile Phones */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  100% Genuine Inventory
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2">
                  Mobile Phones & Smartphones
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Official MDMS-registered handsets from Samsung, Redmi, Apple, and Vivo. Full VAT bills, official manufacturer warranties, and store pickup.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Official Nepal brand warranties</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Free data transfer from old phone</span>
                  </li>
                </ul>
              </div>
              <Link 
                href="/mobile-phones" 
                className="inline-flex items-center justify-between text-xs font-bold text-emerald-600 hover:text-emerald-800 pt-4 border-t border-slate-200 group-hover:translate-x-1 transition"
              >
                <span>Browse Smartphones</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Cluster 3: Gadgets & Accessories */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                  <Headphones className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
                  Audio & Protection
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2">
                  Electronic Gadgets & Accessories
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Active Noise Cancelling earbuds, Bluetooth calling smartwatches, 65W GaN fast chargers, and durable braided 100W USB-C cables.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
                    <span>6 Months - 1 Year replacement warranty</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
                    <span>Verified high-wattage charging compatibility</span>
                  </li>
                </ul>
              </div>
              <Link 
                href="/gadgets-accessories" 
                className="inline-flex items-center justify-between text-xs font-bold text-purple-600 hover:text-purple-800 pt-4 border-t border-slate-200 group-hover:translate-x-1 transition"
              >
                <span>Shop Accessories</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Cluster 4: Smart Home Automation */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  Modern Living in Nepal
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2">
                  Smart Home Devices & Automation
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Wi-Fi RGB smart bulbs, 16A heavy-duty plugs for water geysers and ACs, and 360-degree 2K pan-tilt smart security cameras without expensive rewiring.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                    <span>Works with Google Home & Alexa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                    <span>Live energy monitoring saves electricity bills</span>
                  </li>
                </ul>
              </div>
              <Link 
                href="/smart-home" 
                className="inline-flex items-center justify-between text-xs font-bold text-amber-600 hover:text-amber-800 pt-4 border-t border-slate-200 group-hover:translate-x-1 transition"
              >
                <span>Discover Smart Home</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Cluster 5: Power Banks & Charging */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform">
                  <BatteryCharging className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-200">
                  Reliable Power Backup
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2">
                  Power Banks & Portable Charging
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Authentic 10,000mAh, 20,000mAh 22.5W fast chargers, and high-power 65W laptop power banks. Verified cells and airline-approved safety ratings.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                    <span>9-layer short-circuit safety controllers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                    <span>Fast PD recharge in under 2 hours</span>
                  </li>
                </ul>
              </div>
              <Link 
                href="/power-banks" 
                className="inline-flex items-center justify-between text-xs font-bold text-cyan-600 hover:text-cyan-800 pt-4 border-t border-slate-200 group-hover:translate-x-1 transition"
              >
                <span>Explore Power Banks</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Local SEO Hub Card */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-blue-600/30 border border-blue-400/30 rounded-2xl flex items-center justify-center text-blue-400 mb-6">
                  <MapPin className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  Service Coverage
                </span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2">
                  Serving Sunsari & Morang
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Convenient service corridor catering to Itahari, Sundarharaincha, Biratnagar, Dharan, Inaruwa, and Belbari with fast local courier delivery.
                </p>
                <div className="space-y-2 text-xs text-slate-300">
                  <p>📍 <strong>Primary Hub:</strong> Itahari, Sunsari</p>
                  <p>🏢 <strong>Store & Workshop:</strong> Sundarharaincha-4, Morang</p>
                </div>
              </div>
              <Link 
                href="/service-areas" 
                className="inline-flex items-center justify-between text-xs font-bold text-amber-400 hover:text-amber-300 pt-6 border-t border-slate-800"
              >
                <span>View All Service Locations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Interactive Repair Estimator Section */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Transparent Pricing
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Calculate Your Phone Repair Estimate
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-2">
              No hidden fees or unexpected charges. Select your device and fault below for an instant ballpark estimate.
            </p>
          </div>

          <RepairEstimator />
        </div>
      </section>

      {/* 4. Featured Inventory Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Verified Products
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Featured Smartphones, Gadgets & Smart Home
              </h2>
            </div>
            <Link 
              href="/products/all" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. 4-Step Diagnostic & Repair Workflow */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
              Our Certified Workflow
            </span>
            <h2 className="text-3xl font-black tracking-tight">
              How Repair Works at Himal Product and Services
            </h2>
            <p className="text-xs md:text-sm text-slate-400 mt-2">
              Transparent, safe, and professional hardware servicing from diagnostic intake to final quality check.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            
            {/* Step 1 */}
            <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 relative">
              <span className="text-3xl font-black text-blue-500/40 mb-3 block">01</span>
              <h3 className="text-base font-bold text-white mb-2">Free Bench Inspection</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We test your device on precision meters to diagnose whether the fault is a loose cable, depleted battery, or damaged display.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 relative">
              <span className="text-3xl font-black text-blue-500/40 mb-3 block">02</span>
              <h3 className="text-base font-bold text-white mb-2">Transparent Quotation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                You receive an exact price quote and turnaround timeframe before any technician opens or repairs your phone.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 relative">
              <span className="text-3xl font-black text-blue-500/40 mb-3 block">03</span>
              <h3 className="text-base font-bold text-white mb-2">Precision Clean Repair</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Repairs are carried out on anti-static mats using specialized opening tools, OEM adhesive seals, and torque drivers.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 relative">
              <span className="text-3xl font-black text-blue-500/40 mb-3 block">04</span>
              <h3 className="text-base font-bold text-white mb-2">Testing & Warranty Handover</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We calibrate touch, test charging speeds, verify sensors, and issue your documented repair warranty slip.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Authentic Customer Sentiment & Trust Differentiators */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Customer Feedback
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Trusted by Hundreds Across Sunsari & Morang
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-2">
              Real community feedback on our repair speed, honest pricing, and genuine gadget stock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                  "My Samsung A52 screen had green lines after a drop. Another shop in Itahari quoted me an absurd price and asked to leave the phone for 3 days. Himal replaced it in under an hour right in front of me with original touch sensitivity. Highly recommended!"
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs">
                <p className="font-bold text-slate-900">Bikash Shrestha</p>
                <p className="text-slate-500">Itahari Chowk, Sunsari</p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                  "Bought a 16A smart plug to automate our water geyser for the winter. It has cut our electricity bill and we can turn it on from our phone 20 minutes before waking up. Amazing tech support from the staff."
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs">
                <p className="font-bold text-slate-900">Sunita Adhikari</p>
                <p className="text-slate-500">Sundarharaincha-4, Morang</p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                  "Got the 20,000mAh fast-charging power bank delivered to Dharan. It powers my phone 4 full times during long campus days. Genuine product with proper warranty card."
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs">
                <p className="font-bold text-slate-900">Anup Thapa</p>
                <p className="text-slate-500">BPKIHS area, Dharan</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Educational Blog & Guides Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Topical Authority & Education
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Latest Electronics Troubleshooting Guides
              </h2>
            </div>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition"
            >
              <span>Explore All 50 Tech Guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillarArticles.map(article => (
              <div key={article.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="relative aspect-video bg-slate-100 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white px-2 py-0.5 rounded-full">
                      Pillar Guide
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] text-slate-400 block mb-1">
                      {article.publishedDate} • {article.readTime}
                    </span>
                    <Link href={`/blog/${article.slug}`}>
                      <h3 className="font-bold text-slate-900 text-sm md:text-base hover:text-blue-600 transition line-clamp-2 mb-2">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <Link 
                    href={`/blog/${article.slug}`} 
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Store Location & Interactive Google Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                Physical Storefront
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Visit Our Workshop in the Itahari Corridor
              </h2>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Conveniently located on the main road at Sundarharaincha-4, Morang, serving as the central repair and electronics depot for Itahari, Dharan, and Biratnagar.
              </p>

              <div className="space-y-3 text-xs text-slate-700 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">Physical Address:</p>
                    <p>{siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.province}, Nepal</p>
                    <p className="text-slate-500 mt-0.5">Landmark: {siteConfig.address.landmark}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">Opening Hours:</p>
                    <p>{siteConfig.openingHours.days}</p>
                    <p className="text-emerald-600 font-semibold">{siteConfig.openingHours.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">Direct Hotline:</p>
                    <a href={`tel:${siteConfig.phoneRaw}`} className="text-blue-600 font-bold hover:underline">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <a 
                  href={siteConfig.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl text-xs shadow-md transition"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open Directions on Google Maps</span>
                </a>

                <Link
                  href="/store-location"
                  className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold px-5 py-2.5 rounded-xl text-xs transition"
                >
                  <span>Detailed Landmark Guide</span>
                </Link>
              </div>
            </div>

            {/* Google Maps Embed Frame */}
            <div className="lg:col-span-7">
              <div className="w-full h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <iframe
                  title="Himal Product and Services Google Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.123456789!2d87.2781325!3d26.687414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d33be82599b%3A0xb67ac2eefb668b5f!2sHimal%20product%20and%20service!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Master FAQ Section with FAQPage Schema */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Got Questions?
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-2">
              Clear answers about our repair warranties, smartphone stock, and delivery service.
            </p>
          </div>

          <FAQAccordion faqs={homeFaqs} />
        </div>
      </section>

      {/* 10. Bottom Conversion CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Need Expert Phone Repair or Genuine Electronics?
          </h2>
          <p className="text-sm md:text-base text-blue-100 leading-relaxed">
            Call our technicians directly or send a WhatsApp message. We respond within minutes during business hours!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a 
              href={`tel:${siteConfig.phoneRaw}`} 
              className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-bold px-8 py-3.5 rounded-xl text-sm transition shadow-lg"
            >
              <Phone className="w-4 h-4 text-green-600" />
              <span>Call {siteConfig.phone}</span>
            </a>

            <a
              href={getWhatsAppLink("Hello Himal Product & Services, I am contacting you for assistance.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
