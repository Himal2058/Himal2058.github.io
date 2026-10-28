import React from 'react';
import { products } from '@/data/products';
import { SubcategoryView } from '@/components/SubcategoryView';

export const metadata = {
  title: 'Waterproof Bluetooth Speakers in Itahari Nepal | 16W Bass',
  description: 'Buy portable wireless speakers in Itahari. IPX7 waterproof, 20-hour battery life, and deep bass radiators for outdoor picnics and gatherings.'
};

export default function BluetoothSpeakersPage() {
  const items = products.filter(p => p.category === 'gadgets-accessories' && p.subcategory === 'bluetooth-speakers');

  return (
    <SubcategoryView
      title="Bluetooth Speakers"
      h1="Portable Bluetooth Speakers in Itahari, Nepal"
      description="Fill rooms or outdoor picnics with powerful acoustic sound. Features dual stereo drivers, passive bass boost radiators, and true IPX7 waterproofing."
      parentName="Gadgets & Accessories"
      parentUrl="/gadgets-accessories"
      currentUrl="/gadgets-accessories/bluetooth-speakers"
      products={items}
      highlights={[
        "16W Stereo Acoustic Output",
        "IPX7 Submersion Waterproofing",
        "20 Hours Continuous Playback",
        "1-Year Official Warranty"
      ]}
      faqs={[
        {
          question: "Can I connect two speakers together for stereo sound?",
          answer: "Yes, our speakers support True Wireless Stereo (TWS) pairing to link two units wirelessly for 32W combined stereo separation."
        }
      ]}
    />
  );
}
