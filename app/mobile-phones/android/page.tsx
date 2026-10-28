import React from 'react';
import { products } from '@/data/products';
import { SubcategoryView } from '@/components/SubcategoryView';

export const metadata = {
  title: 'Android Smartphones in Itahari | Samsung, Redmi, Realme',
  description: 'Buy official Android smartphones in Itahari, Nepal. Best prices on Samsung Galaxy and Xiaomi Redmi with 1-year brand warranty and MDMS registration.'
};

export default function AndroidPhonesPage() {
  const items = products.filter(p => p.category === 'mobile-phones' && p.subcategory === 'android');

  return (
    <SubcategoryView
      title="Android Smartphones"
      h1="Android Smartphones in Itahari, Nepal"
      description="Explore genuine Android smartphones featuring AMOLED 120Hz displays, multi-lens cameras, and long-lasting 5000mAh batteries. All units are MDMS registered with official brand warranty."
      parentName="Smartphones"
      parentUrl="/mobile-phones"
      currentUrl="/mobile-phones/android"
      products={items}
      highlights={[
        "Official NTA MDMS Registration",
        "1 Year National Brand Warranty",
        "Free Old-Phone Data Migration",
        "Local Store Pickup in Itahari Corridor"
      ]}
      faqs={[
        {
          question: "Which Android brand offers the best long-term updates in Nepal?",
          answer: "Samsung provides up to 4 years of major Android OS updates on modern Galaxy A-series models, while Xiaomi and Redmi offer excellent price-to-performance."
        }
      ]}
    />
  );
}
