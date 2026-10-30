'use client';

import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
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
  { id: 'samsung', name: 'Samsung' },
  { id: 'xiaomi', name: 'Xiaomi / Redmi' },
  { id: 'apple', name: 'iPhone' },
  { id: 'realme', name: 'Realme' },
  { id: 'vivo', name: 'Vivo' },
  { id: 'oppo', name: 'Oppo' },
  { id: 'oneplus', name: 'OnePlus' }
];

const ISSUES: IssueOption[] = [
  {
    id: 'screen',
    name: 'Cracked screen or touch not working',
    basePriceMin: 1800,
    basePriceMax: 14500,
    time: '45 to 90 minutes',
    warranty: 'Up to 90 days on touch and display',
    tip: 'If touch still works and there are no black spots, glass-only replacement may be cheaper.'
  },
  {
    id: 'battery',
    name: 'Battery drains fast or is swollen',
    basePriceMin: 1200,
    basePriceMax: 4500,
    time: '30 to 60 minutes',
    warranty: '6 months',
    tip: 'Stop charging it if the back cover is bulging. A swollen cell is a fire risk.'
  },
  {
    id: 'charging-port',
    name: 'Charging port loose or mic not working',
    basePriceMin: 700,
    basePriceMax: 2500,
    time: '30 to 45 minutes',
    warranty: '30 to 90 days',
    tip: 'We check the port for packed pocket lint first. That is often the whole fault.'
  },
  {
    id: 'water-damage',
    name: 'Water damage',
    basePriceMin: 1500,
    basePriceMax: 5500,
    time: '2 to 24 hours',
    warranty: 'Tested after cleaning',
    tip: 'Do not charge it and do not put it in rice. Bring it in so we can clean the board.'
  },
  {
    id: 'software',
    name: 'Bootloop, stuck logo or software crash',
    basePriceMin: 500,
    basePriceMax: 1800,
    time: '30 to 90 minutes',
    warranty: '15 days',
    tip: 'We flash the stock ROM for your model. Data is backed up first if the phone still boots.'
  }
];

export function RepairEstimator() {
  const [selectedBrand, setSelectedBrand] = useState<string>(BRANDS[0].id);
  const [selectedIssue, setSelectedIssue] = useState<string>(ISSUES[0].id);
  const [modelInput, setModelInput] = useState<string>('');

  const currentBrand = BRANDS.find(b => b.id === selectedBrand) || BRANDS[0];
  const currentIssue = ISSUES.find(i => i.id === selectedIssue) || ISSUES[0];

  const brandMultiplier = selectedBrand === 'apple' ? 1.4 : selectedBrand === 'oneplus' ? 1.2 : 1.0;
  const estimatedMin = Math.round((currentIssue.basePriceMin * brandMultiplier) / 100) * 100;
  const estimatedMax = Math.round((currentIssue.basePriceMax * brandMultiplier) / 100) * 100;

  const whatsappMessage = `Hello Himal Product & Services, I would like a repair quote.
Brand: ${currentBrand.name}
Model: ${modelInput.trim() ? modelInput.trim() : 'not sure'}
Fault: ${currentIssue.name}
Website estimate: रू ${estimatedMin.toLocaleString('en-IN')} to रू ${estimatedMax.toLocaleString('en-IN')}
When can I bring it in?`;

  return (
    <div className="overflow-hidden rounded-card border border-line bg-surface">
      <div className="border-b border-line px-4 py-4 sm:px-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-ink">Get a starting estimate</p>
            <p className="mt-1 text-sm leading-6 text-muted">
              Choose the phone brand and the symptom. This is a planning range, not a final invoice.
            </p>
          </div>
          <span className="chip-accent shrink-0">Free check</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.45fr_1fr]">
        <div className="space-y-6 p-4 sm:p-5">
          <fieldset>
            <legend className="mb-2 text-sm font-medium text-ink"><span className="mr-2 text-xs text-muted">1</span>Which brand is it?</legend>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {BRANDS.map(brand => (
                <label
                  key={brand.id}
                  className="flex min-h-10 cursor-pointer items-center rounded border border-line bg-white px-3 py-2 text-sm text-ink-soft hover:border-line-strong has-[:checked]:border-ink has-[:checked]:bg-canvas has-[:checked]:text-ink has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand-500"
                >
                  <input
                    type="radio"
                    name="repair-brand"
                    value={brand.id}
                    checked={selectedBrand === brand.id}
                    onChange={() => setSelectedBrand(brand.id)}
                    className="sr-only"
                  />
                  <span>{brand.name}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="repair-model" className="mb-2 block text-sm font-medium text-ink">
              <span className="mr-2 text-xs text-muted">2</span>Model <span className="font-normal text-muted">(optional, helps us narrow the range)</span>
            </label>
            <input
              id="repair-model"
              type="text"
              value={modelInput}
              onChange={e => setModelInput(e.target.value)}
              placeholder="Galaxy A15, Redmi Note 13, iPhone 12"
              autoComplete="off"
              aria-describedby="repair-model-help"
              className="h-10 w-full rounded border border-line bg-canvas px-3 text-sm text-ink placeholder:text-muted focus:border-line-strong focus:bg-white focus:outline-none"
            />
            <p id="repair-model-help" className="mt-1 text-xs leading-5 text-muted">
              You can find the model in Settings, on the box, or on the back of some phones.
            </p>
          </div>

          <fieldset>
            <legend className="mb-2 text-sm font-medium text-ink"><span className="mr-2 text-xs text-muted">3</span>What is happening?</legend>
            <div className="space-y-1">
              {ISSUES.map(issue => (
                <label
                  key={issue.id}
                  className="flex min-h-10 cursor-pointer items-center justify-between gap-3 rounded border border-line bg-white px-3 py-2 text-sm text-ink-soft hover:border-line-strong has-[:checked]:border-ink has-[:checked]:bg-canvas has-[:checked]:text-ink has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand-500"
                >
                  <span>{issue.name}</span>
                  <input
                    type="radio"
                    name="repair-issue"
                    value={issue.id}
                    checked={selectedIssue === issue.id}
                    onChange={() => setSelectedIssue(issue.id)}
                    className="sr-only"
                  />
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-line bg-canvas p-4 sm:p-5 lg:border-l lg:border-t-0">
          <div>
            <p className="text-sm text-muted">Estimated range</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums text-ink" aria-live="polite">
              रू {estimatedMin.toLocaleString('en-IN')}
              <span className="mx-1 text-muted">to</span>
              रू {estimatedMax.toLocaleString('en-IN')}
            </p>
            <p className="mt-1 text-sm leading-6 text-muted">
              Parts, model, and damage level can move this figure. We confirm the exact price first.
            </p>

            <dl className="mt-4 space-y-2 border-t border-line pt-3 text-sm">
              <div className="flex items-start justify-between gap-4">
                <dt className="text-muted">Time</dt>
                <dd className="text-right text-ink">{currentIssue.time}</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-muted">Warranty</dt>
                <dd className="text-right text-ink">{currentIssue.warranty}</dd>
              </div>
            </dl>

            <p className="mt-3 text-xs leading-5 text-muted">{currentIssue.tip}</p>

            <div className="mt-4 rounded border border-brand-200 bg-brand-50 p-3">
              <p className="text-xs font-semibold text-brand-900">What happens next?</p>
              <p className="mt-1 text-xs leading-5 text-brand-800">
                Send the estimate, bring the phone in, and we will inspect it. We explain the final price
                before opening the device. You are free to say no.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full"
          >
            <MessageSquare className="size-4" aria-hidden="true" />
            <span>Send this to the shop</span>
          </a>
        </div>
      </div>
    </div>
  );
}
