import React from 'react';
import { products } from '@/data/products';
import { SubcategoryView } from '@/components/SubcategoryView';

export const metadata = {
  title: 'Apple iPhone in Itahari Nepal | Official MDMS Units & Warranty',
  description: 'Buy official Apple iPhones in Itahari with genuine VAT bills and NTA MDMS registration. iPhone 13, 14, and 15 at Himal Product and Services.'
};

export default function IPhonePhonesPage() {
  const items = products.filter(p => p.category === 'mobile-phones' && p.subcategory === 'iphone');

  return (
    <SubcategoryView
      title="Apple iPhone Series"
      h1="Official Apple iPhones in Itahari, Nepal"
      description="Experience the pinnacle of smartphone engineering with official Apple iPhones. Equipped with Super Retina XDR displays, A-series Bionic chips, Dynamic Island, and official Apple authorized warranty."
      parentName="Smartphones"
      parentUrl="/mobile-phones"
      currentUrl="/mobile-phones/iphone"
      products={items}
      highlights={[
        "100% Official MDMS Registered",
        "Official Apple 1-Year Warranty",
        "Free Screen Protector Fitting",
        "Genuine 20W USB-C Adapters Available"
      ]}
      faqs={[
        {
          question: "How can I verify if an iPhone is MDMS registered in Nepal?",
          answer: "We verify the 15-digit IMEI on the official NTA MDMS portal directly in front of you before purchase, ensuring zero risk of network disconnection."
        }
      ]}
    />
  );
}
