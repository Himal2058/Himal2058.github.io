import React from 'react';
import Link from 'next/link';
import { Sparkles, Tag, ShieldCheck, Wrench, ArrowRight, MessageSquare } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Current Offers & Bundles | Himal Product and Services Itahari',
  description: 'Verified savings and seasonal bundles on smartphone repairs, 65W GaN chargers, and smart home automation in Itahari, Sunsari.'
};

export default function OffersPage() {
  const offers = [
    {
      title: "Free 9H Screen Protector with Any Display Replacement",
      badge: "Repair Value Bundle",
      description: "Get your cracked phone screen replaced at our Itahari workshop and receive a complimentary 9H tempered glass protector professionally installed bubble-free.",
      cta: "Claim on WhatsApp",
      code: "FREE-GLASS",
      whatsapp: "Hello Himal Product & Services, I would like to book a screen replacement with the Free Screen Protector offer."
    },
    {
      title: "GaN Fast Charger + 100W Braided Cable Combo",
      badge: "Save रू 450",
      description: "Buy our 65W dual-port GaN wall adapter together with a 2-meter 100W rugged braided USB-C cable for just रू 3,299 (Regular रू 3,749).",
      cta: "Order Combo",
      code: "GAN-COMBO",
      whatsapp: "Hello Himal Product & Services, I want to order the 65W GaN Charger + 100W Cable combo deal."
    },
    {
      title: "Student Discount on Power Banks (With College ID)",
      badge: "Student Special",
      description: "College and university students in Itahari, Dharan, and Biratnagar receive a special 10% discount on all 10,000mAh and 20,000mAh fast-charging power banks upon showing a valid campus ID.",
      cta: "Inquire Student Deal",
      code: "STUDENT-10",
      whatsapp: "Hello Himal Product & Services, I am a student inquiring about the 10% power bank discount."
    }
  ];

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <Breadcrumbs items={[{ name: 'Offers & Bundles', url: '/offers' }]} />

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Genuine Deals</span>
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Special Deals & Tech Bundles
          </h1>
          <p className="text-xs md:text-sm text-slate-600 mt-3 leading-relaxed">
            No deceptive countdown timers or fake discounts. Genuine added-value bundles for our customers in Itahari, Sunsari, and Morang.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {offers.map((offer, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-rose-600 text-white px-3 py-1 rounded-full inline-block mb-4">
                  {offer.badge}
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  {offer.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {offer.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={getWhatsAppLink(offer.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-3 px-4 rounded-xl text-xs font-bold transition shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{offer.cta}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
