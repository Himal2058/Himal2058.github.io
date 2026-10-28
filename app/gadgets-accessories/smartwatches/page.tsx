import React from 'react';
import { products } from '@/data/products';
import { SubcategoryView } from '@/components/SubcategoryView';

export const metadata = {
  title: 'Calling Smartwatch Price in Nepal (Itahari) | AMOLED Display',
  description: 'Shop Bluetooth calling smartwatches in Itahari, Sunsari. Always-On AMOLED displays, 24/7 health tracking, and 1-year warranty at Himal Product and Services.'
};

export default function SmartwatchesPage() {
  const items = products.filter(p => p.category === 'gadgets-accessories' && p.subcategory === 'smartwatches');

  return (
    <SubcategoryView
      title="Calling Smartwatches"
      h1="Bluetooth Calling Smartwatches in Itahari, Nepal"
      description="Stay connected without pulling out your phone. Features crisp AMOLED Always-On displays, direct wrist Bluetooth calling, heart rate/SpO2 monitors, and IP68 water resistance."
      parentName="Gadgets & Accessories"
      parentUrl="/gadgets-accessories"
      currentUrl="/gadgets-accessories/smartwatches"
      products={items}
      highlights={[
        "Sharp 1.43\" AMOLED Always-On Display",
        "Clear Bluetooth Calling with Built-in Mic & Speaker",
        "1-Year Brand Warranty",
        "Compatible with Android & iPhone"
      ]}
      faqs={[
        {
          question: "Can I receive phone calls on the smartwatch when my phone is in my bag?",
          answer: "Yes! Single-chip Bluetooth calling lets you answer, reject, or dial calls directly from your wrist within standard Bluetooth range."
        }
      ]}
    />
  );
}
