'use client';

import React, { useId, useState } from 'react';
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
  const baseId = useId();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-line overflow-hidden rounded-card border border-line bg-surface">
      {includeSchema && <JsonLd data={getFAQSchema(faqs)} />}
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={faq.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left hover:bg-canvas"
              >
                <span className="text-sm font-medium text-ink">{faq.question}</span>
                <span
                  className={`flex size-6 shrink-0 items-center justify-center border border-line text-muted ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown className="size-3.5" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-4 pb-4"
            >
              <p className="max-w-3xl text-sm leading-6 text-muted">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
