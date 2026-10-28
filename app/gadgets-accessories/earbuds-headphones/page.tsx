import React from 'react';
import { products } from '@/data/products';
import { SubcategoryView } from '@/components/SubcategoryView';

export const metadata = {
  title: 'Wireless Earbuds Price in Nepal (Itahari) | ANC & Clear Calling',
  description: 'Buy Active Noise Cancelling (ANC) true wireless earbuds in Itahari, Sunsari. 36-hour battery life, low-latency gaming mode, and 6-month warranty.'
};

export default function EarbudsHeadphonesPage() {
  const items = products.filter(p => p.category === 'gadgets-accessories' && p.subcategory === 'earbuds-headphones');

  return (
    <SubcategoryView
      title="Earbuds & Headphones"
      h1="Wireless TWS Earbuds & Audio in Itahari, Nepal"
      description="Enjoy rich acoustic fidelity, deep bass, and distraction-free audio with hybrid Active Noise Cancellation (ANC) earbuds and quad-mic ENC for crystal-clear phone calls."
      parentName="Gadgets & Accessories"
      parentUrl="/gadgets-accessories"
      currentUrl="/gadgets-accessories/earbuds-headphones"
      products={items}
      highlights={[
        "Up to 30dB Active Noise Cancellation",
        "Environmental Noise Cancellation for Calls",
        "6 Months Replacement Warranty",
        "Test Sound In-Store Before Buying"
      ]}
      faqs={[
        {
          question: "What is the difference between ANC and ENC in earbuds?",
          answer: "ANC (Active Noise Cancellation) blocks ambient noise around you so you hear music clearly. ENC (Environmental Noise Cancellation) filters out wind and street traffic for the person listening to you on a phone call."
        }
      ]}
    />
  );
}
