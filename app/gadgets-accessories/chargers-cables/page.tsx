import React from 'react';
import { products } from '@/data/products';
import { SubcategoryView } from '@/components/SubcategoryView';

export const metadata = {
  title: 'Fast Chargers & Cables in Nepal (Itahari) | 65W GaN & 100W Type-C',
  description: 'Shop Gallium Nitride (GaN) fast wall adapters and durable braided USB-C cables in Itahari. 1-year replacement warranty at Himal Product and Services.'
};

export default function ChargersCablesPage() {
  const items = products.filter(p => p.category === 'gadgets-accessories' && p.subcategory === 'chargers-cables');

  return (
    <SubcategoryView
      title="Fast Chargers & Cables"
      h1="Fast Wall Chargers & High-Power Cables in Itahari"
      description="Power laptops and smartphones at peak speeds with Gallium Nitride (GaN) wall adapters and reinforced nylon braided Type-C cables with smart E-Marker chips."
      parentName="Gadgets & Accessories"
      parentUrl="/gadgets-accessories"
      currentUrl="/gadgets-accessories/chargers-cables"
      products={items}
      highlights={[
        "65W GaN Compact Architecture",
        "100W Power Delivery E-Marker Cables",
        "1-Year Replacement Warranty",
        "Multi-Layer Electrical Surge Protection"
      ]}
      faqs={[
        {
          question: "Can I charge my USB-C laptop with a 65W GaN adapter?",
          answer: "Yes! A 65W GaN adapter delivers full Power Delivery speeds for MacBooks, Dell XPS, HP laptops, and rapidly charges your smartphone simultaneously."
        }
      ]}
    />
  );
}
