'use client';

import React, { useState } from 'react';
import { Wrench, ShieldCheck, Clock, MessageSquare, CheckCircle, HelpCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/data/siteConfig';

interface BrandOption {
  id: string;
  name: string;
}

interface IssueOption {
  id: string;
  name: string;
  basePriceMin: number;
  basePriceMax: number;
  time: string;
  warranty: string;
  tip: string;
}

const BRANDS: BrandOption[] = [
  { id: 'samsung', name: 'Samsung Galaxy' },
  { id: 'xiaomi', name: 'Xiaomi / Redmi / Poco' },
  { id: 'apple', name: 'Apple iPhone' },
  { id: 'realme', name: 'Realme' },
  { id: 'vivo', name: 'Vivo' },
  { id: 'oppo', name: 'Oppo' },
  { id: 'oneplus', name: 'OnePlus' }
];

const ISSUES: IssueOption[] = [
  {
    id: 'screen',
    name: 'Broken Screen / Display Touch Failure',
    basePriceMin: 1800,
    basePriceMax: 14500,
    time: '45 – 90 Minutes',
    warranty: 'Up to 90 Days Touch Warranty',
    tip: 'If your touch works and inner display has no black ink spots, glass refurbishment may be possible at a lower cost.'
  },
  {
    id: 'battery',
    name: 'Battery Draining Fast / Swollen Battery',
    basePriceMin: 1200,
    basePriceMax: 4500,
    time: '30 – 60 Minutes',
    warranty: '6 Months Replacement Warranty',
    tip: 'Stop using or charging the device immediately if the back cover is bulging due to battery swelling.'
  },
  {
    id: 'charging-port',
    name: 'Loose Charging Port / Mic Problem',
    basePriceMin: 700,
    basePriceMax: 2500,
    time: '30 – 45 Minutes',
    warranty: '30 to 90 Days Warranty',
    tip: 'We will first inspect the port for compressed pocket lint, which is often cleaned in minutes.'
  },
  {
    id: 'water-damage',
    name: 'Water Damage / Dropped in Liquid',
    basePriceMin: 1500,
    basePriceMax: 5500,
    time: '2 – 24 Hours',
    warranty: 'Component testing guarantee',
    tip: 'Do NOT charge the device or place it in rice. Bring it to our workshop for ultrasonic chemical treatment.'
  },
  {
    id: 'software',
    name: 'Stuck on Logo / Bootloop / Software Crash',
    basePriceMin: 500,
    basePriceMax: 1800,
    time: '30 – 90 Minutes',
    warranty: '15 Days Software Stability Warranty',
    tip: 'We flash authorized stock ROMs to protect your hardware integrity and resolve boot failures.'
  }
];

export function RepairEstimator() {
  const [selectedBrand, setSelectedBrand] = useState<string>(BRANDS[0].id);
  const [selectedIssue, setSelectedIssue] = useState<string>(ISSUES[0].id);
  const [modelInput, setModelInput] = useState<string>('');

  const currentBrand = BRANDS.find(b => b.id === selectedBrand) || BRANDS[0];
  const currentIssue = ISSUES.find(i => i.id === selectedIssue) || ISSUES[0];

  // Adjust estimate based on brand tier (e.g., iPhone / Flagships cost slightly more for parts)
  const brandMultiplier = selectedBrand === 'apple' ? 1.4 : selectedBrand === 'oneplus' ? 1.2 : 1.0;
  const estimatedMin = Math.round((currentIssue.basePriceMin * brandMultiplier) / 100) * 100;
  const estimatedMax = Math.round((currentIssue.basePriceMax * brandMultiplier) / 100) * 100;

  const whatsappMessage = `Hello Himal Product & Services, I am looking for a repair quote from your website.
- Brand: ${currentBrand.name}
- Model: ${modelInput.trim() ? modelInput.trim() : 'Unspecified model'}
- Issue: ${currentIssue.name}
- Online Estimate: रू ${estimatedMin.toLocaleString('en-IN')} – रू ${estimatedMax.toLocaleString('en-IN')}
When can I bring my phone to your Itahari workshop for inspection?`;

  return (
    <div className="bg-white rounded-3xl border border-blue-100 shadow-xl overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 md:p-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 bg-blue-600/30 rounded-xl border border-blue-400/30">
            <Wrench className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-black">
              Instant Repair Cost Estimator
            </h3>
            <p className="text-xs text-blue-200">
              Transparent, genuine component estimates for Itahari & Sunsari/Morang
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Controls: Selectors */}
        <div className="lg:col-span-7 space-y-6">
          {/* Brand Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              1. Select Phone Brand:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {BRANDS.map(brand => (
                <button
                  key={brand.id}
                  type="button"
                  onClick={() => setSelectedBrand(brand.id)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border transition text-left ${
                    selectedBrand === brand.id
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {brand.name}
                </button>
              ))}
            </div>
          </div>

          {/* Model Input (Optional) */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              2. Exact Model (Optional):
            </label>
            <input 
              type="text" 
              value={modelInput}
              onChange={(e) => setModelInput(e.target.value)}
              placeholder="e.g. Galaxy A15, Redmi Note 13, iPhone 12..."
              className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            />
          </div>

          {/* Issue Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              3. Select Fault / Symptom:
            </label>
            <div className="space-y-2">
              {ISSUES.map(issue => (
                <button
                  key={issue.id}
                  type="button"
                  onClick={() => setSelectedIssue(issue.id)}
                  className={`w-full p-3 rounded-xl text-xs font-medium border transition text-left flex items-center justify-between ${
                    selectedIssue === issue.id
                      ? 'bg-blue-50 text-blue-900 border-blue-500 font-bold'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span>{issue.name}</span>
                  {selectedIssue === issue.id && (
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 ml-2" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel: Estimated Output & Direct Booking */}
        <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Estimated Service Range
            </span>
            <div className="text-3xl font-black text-slate-900 mb-1">
              रू {estimatedMin.toLocaleString('en-IN')} – रू {estimatedMax.toLocaleString('en-IN')}
            </div>
            <p className="text-xs text-slate-500 mb-6">
              *Exact cost verified upon free bench inspection depending on exact model display grade.
            </p>

            <div className="space-y-3.5 mb-6 text-xs text-slate-700">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>
                  <strong>Turnaround Time:</strong> {currentIssue.time}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>
                  <strong>Warranty:</strong> {currentIssue.warranty}
                </span>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 mb-6 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong>Technician Note:</strong> {currentIssue.tip}</span>
              </div>
            </div>
          </div>

          <div>
            <a
              href={getWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-4 rounded-xl font-bold text-sm shadow-md transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book Inspection on WhatsApp</span>
            </a>
            <p className="text-[11px] text-center text-slate-400 mt-2">
              Free diagnosis • 100% Personal Data Privacy Guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
