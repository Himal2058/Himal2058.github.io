import React from 'react';
import Link from 'next/link';
import { 
  Wrench, 
  ShieldCheck, 
  Clock, 
  Smartphone, 
  Droplet, 
  Battery, 
  Cpu, 
  Volume2, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Phone,
  HelpCircle,
  AlertTriangle
} from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';
import { repairServices } from '@/data/repairs';
import { blogTopics } from '@/data/blogs';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RepairEstimator } from '@/components/RepairEstimator';
import { FAQAccordion } from '@/components/FAQAccordion';
import { JsonLd, getServiceSchema } from '@/components/JsonLd';

export const metadata = {
  title: 'Mobile Phone Repair in Itahari | Screen, Battery & Port Fix',
  description: 'Certified smartphone repair shop serving Itahari, Sunsari & Morang. 45-minute screen replacement, battery swap, loose charging port fix, and water damage recovery.',
  keywords: [
    'mobile repair Itahari',
    'phone repair shop Itahari',
    'phone screen replacement Itahari',
    'mobile battery repair Sunsari',
    'iPhone repair Nepal',
    'Samsung phone repair Itahari'
  ]
};

export default function MobileRepairPage() {
  const repairBlogs = blogTopics.filter(b => b.cluster === 'mobile-repair').slice(0, 4);

  const clusterFaqs = [
    {
      question: "Do you fix phones while I wait at your Itahari workshop?",
      answer: "Yes! Over 80% of routine repairs—such as front screen replacement, fresh battery swaps, and charging port soldering—are completed within 45 to 90 minutes on our open test bench."
    },
    {
      question: "What brands of smartphones do you repair?",
      answer: "We support all major brands in Nepal including Samsung Galaxy, Xiaomi / Redmi / Poco, Apple iPhone, Realme, OnePlus, Vivo, Oppo, Infinix, and Tecno."
    },
    {
      question: "What is your repair warranty coverage?",
      answer: "Replacement screens carry up to 90 days touch warranty, and replacement batteries carry 6 months warranty against premature degradation or charging failure. We provide written warranty receipts."
    },
    {
      question: "What should I do if my phone fell into water?",
      answer: "Power off the device immediately. Do not connect it to a wall charger or power bank, and avoid placing it in rice. Bring it to our workshop for ultrasonic chemical cleaning to halt internal corrosion."
    },
    {
      question: "Is there an inspection fee if my phone cannot be repaired?",
      answer: "We offer free initial bench inspection. If a device has unfixable multi-rail motherboard damage, we explain the diagnosis with complete transparency."
    }
  ];

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <JsonLd 
        data={getServiceSchema({
          title: "Mobile Phone Repair Services in Itahari",
          description: "Certified smartphone hardware diagnostics, screen replacement, battery repair, and water damage recovery.",
          url: "/mobile-repair",
          priceRange: "रू 700 - रू 14500"
        })} 
      />

      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ name: 'Mobile Repair Services', url: '/mobile-repair' }]} />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 md:p-14 shadow-xl mb-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-5 relative z-10">
            <span className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5" />
              <span>Itahari & Sunsari/Morang Service Hub</span>
            </span>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Fast, Certified Mobile Phone Repair Services in Itahari
            </h1>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Don't leave your phone behind for days. At Himal Product and Services, our certified bench technicians diagnose and repair shattered displays, exhausted batteries, loose charging ports, and water-damaged boards within 45 to 90 minutes.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>45–90 Min Express Turnaround</span>
              </span>
              <span className="flex items-center gap-1.5 text-blue-300">
                <ShieldCheck className="w-4 h-4" />
                <span>Up to 90 Days Repair Warranty</span>
              </span>
              <span className="flex items-center gap-1.5 text-amber-300">
                <LockIcon className="w-4 h-4" />
                <span>100% Personal Data Privacy Guarantee</span>
              </span>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href={getWhatsAppLink("Hello Himal Product & Services, I need mobile phone repair service in Itahari. My device model is: ")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl transition text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book Repair on WhatsApp</span>
              </a>

              <a 
                href={`tel:${siteConfig.phoneRaw}`} 
                className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-bold px-6 py-3.5 rounded-xl transition text-sm shadow-md"
              >
                <Phone className="w-4 h-4 text-green-600" />
                <span>Call Hotline: {siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Diagnostic Process Overview */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Transparent Workshop Standards
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Our 4-Stage Bench Diagnostic Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Pre-Check & Meter Testing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We test USB current draw, multi-touch accuracy, and battery impedance before opening the device.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Quote & Approval</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You receive clear component pricing and replacement tiers (Original vs OEM). No work begins without your consent.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Precision Clean Assembly</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Repairs are executed using anti-static mats, heat plates, and dust-free frame adhesive clamping.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-4">
                4
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Multi-Point Sensor Calibration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We calibrate ambient light sensors, proximity sensors, fingerprint readers, and issue a warranty certificate.
              </p>
            </div>
          </div>
        </div>

        {/* Repair Services Grid */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Hardware Specializations
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                All Mobile Phone Repair Services
              </h2>
            </div>
            <Link 
              href="/repair-price" 
              className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <span>View Repair Price Calculator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairServices.map(service => (
              <div 
                key={service.id} 
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                      {service.turnaroundTime}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {service.warrantyDetails.split('(')[0]}
                    </span>
                  </div>

                  <Link href={`/mobile-repair/${service.slug}`} className="block hover:text-blue-600 transition">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4 text-xs">
                    <p className="font-semibold text-slate-800">Estimated Price Range:</p>
                    <p className="text-blue-600 font-black text-sm">{service.estimatedPriceRange}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link 
                    href={`/mobile-repair/${service.slug}`} 
                    className="text-xs font-bold text-slate-700 hover:text-blue-600 flex items-center gap-1"
                  >
                    <span>View Service Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={getWhatsAppLink(`Hello Himal Product & Services, I need assistance with *${service.title}* in Itahari.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded Interactive Repair Estimator */}
        <div className="mb-16">
          <RepairEstimator />
        </div>

        {/* Data Safety & Workshop Assurance */}
        <div className="bg-blue-900 text-white rounded-3xl p-8 md:p-12 mb-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Customer Assurance
              </span>
              <h2 className="text-2xl md:text-3xl font-black">
                How We Safeguard Your Personal Data During Repair
              </h2>
              <p className="text-xs md:text-sm text-blue-100 leading-relaxed">
                Your private photos, banking apps, messages, and accounts are completely secure. Screen and battery replacements do not require access to your passcode. We encourage Android Maintenance Mode or iOS passcodes remaining locked during hardware bench work.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold pt-2">
                <Link href="/repair-policy" className="underline hover:text-blue-200">
                  Read Our Documented Repair Policy & Terms →
                </Link>
                <Link href="/warranty" className="underline hover:text-blue-200">
                  View Component Warranty Guidelines →
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 bg-blue-950/60 p-6 rounded-2xl border border-blue-800 text-center space-y-3">
              <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto" />
              <p className="font-bold text-sm">Need Emergency Advice?</p>
              <p className="text-xs text-blue-200">Speak directly to our lead technician</p>
              <a 
                href={`tel:${siteConfig.phoneRaw}`}
                className="block bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-xl text-xs transition"
              >
                Call +977 9807391472
              </a>
            </div>
          </div>
        </div>

        {/* Supporting Troubleshooting Content Cluster */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Helpful Tech Knowledge
              </span>
              <h2 className="text-2xl font-black text-slate-900">
                Repair & Troubleshooting Guides
              </h2>
            </div>
            <Link href="/blog" className="text-xs font-bold text-blue-600 hover:underline">
              View All Guides →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairBlogs.map(blog => (
              <div key={blog.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider block mb-1">
                    {blog.intent}
                  </span>
                  <Link href={`/blog/${blog.slug}`}>
                    <h3 className="font-bold text-slate-900 text-sm hover:text-blue-600 transition line-clamp-2 mb-2">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-4">
                  <Link href={`/blog/${blog.slug}`} className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cluster FAQs */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Common Questions
            </span>
            <h2 className="text-2xl font-black text-slate-900">
              Mobile Repair FAQs in Itahari
            </h2>
          </div>
          <FAQAccordion faqs={clusterFaqs} />
        </div>

      </div>
    </div>
  );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
