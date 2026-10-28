'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    inquiryType: 'Mobile Repair Booking',
    deviceModel: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappText = `*New Website Inquiry - Himal Product & Services*
- Name: ${formData.name}
- Phone: ${formData.phone}
- Inquiry Type: ${formData.inquiryType}
- Device Model: ${formData.deviceModel || 'N/A'}
- Message: ${formData.message}`;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
      {submitted ? (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-slate-900">Thank You, {formData.name}!</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Your inquiry has been received. Our technicians review messages promptly during business hours (9:00 AM – 8:00 PM).
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getWhatsAppLink(whatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition text-sm shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Forward Directly via WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  phone: '',
                  inquiryType: 'Mobile Repair Booking',
                  deviceModel: '',
                  message: ''
                });
              }}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition py-2"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Your Full Name <span className="text-rose-500">*</span>
            </label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Ramesh Karki"
              className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Phone / WhatsApp Number <span className="text-rose-500">*</span>
              </label>
              <input 
                type="tel" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 9807XXXXXX"
                className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Inquiry Category
              </label>
              <select
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
              >
                <option value="Mobile Repair Booking">Mobile Repair Booking (Screen/Battery/Port)</option>
                <option value="Smartphone Purchase / Price">Smartphone Purchase / Price Inquiry</option>
                <option value="Accessories & Fast Chargers">Accessories & Fast Chargers</option>
                <option value="Smart Home Automation">Smart Home Automation (Bulbs/Plugs/CCTV)</option>
                <option value="Power Bank Inquiry">Power Bank Inquiry</option>
                <option value="General Question">General Question / Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Device Brand & Model (If applicable)
            </label>
            <input 
              type="text" 
              value={formData.deviceModel}
              onChange={(e) => setFormData({ ...formData, deviceModel: e.target.value })}
              placeholder="e.g. Samsung Galaxy A15, iPhone 13, Redmi Note 12..."
              className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Message / Fault Details <span className="text-rose-500">*</span>
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe the issue with your phone or the electronics product you're inquiring about..."
              className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            />
          </div>

          <p className="text-[11px] text-slate-500">
            We value your privacy. Your information is strictly used to reply to your inquiry.
          </p>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl transition text-sm shadow-md"
          >
            <Send className="w-4 h-4" />
            <span>Send Enquiry to Technicians</span>
          </button>
        </form>
      )}
    </div>
  );
}
