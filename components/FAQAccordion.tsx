'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { JsonLd, getFAQSchema } from './JsonLd';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  includeSchema?: boolean;
}

export function FAQAccordion({ faqs, includeSchema = true }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {includeSchema && <JsonLd data={getFAQSchema(faqs)} />}
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-white"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm md:text-base hover:text-blue-600 transition"
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <ChevronDown 
                className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                  isOpen ? 'transform rotate-180 text-blue-600' : ''
                }`} 
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
