import React from 'react';
import { products } from '@/data/products';
import { SubcategoryView } from '@/components/SubcategoryView';

export const metadata = {
  title: 'Smart Wi-Fi RGB Bulbs in Nepal (Itahari) | Tuya, Google Home',
  description: 'Shop 9W Smart RGB Wi-Fi bulbs in Itahari, Sunsari. 16 million colors, scheduled wake-up timers, and Google Assistant voice control without a hub.'
};

export default function SmartBulbsPage() {
  const items = products.filter(p => p.category === 'smart-home' && p.subcategory === 'smart-bulbs');

  return (
    <SubcategoryView
      title="Smart Wi-Fi Bulbs"
      h1="Smart Wi-Fi LED Bulbs & Lighting in Itahari, Nepal"
      description="Transform your bedroom, living space, or office with 16 million RGB colors and tuneable white temperature. Screws into standard B22/E27 holders without electrician visits."
      parentName="Smart Home"
      parentUrl="/smart-home"
      currentUrl="/smart-home/smart-bulbs"
      products={items}
      highlights={[
        "No Expensive Hub Required (Direct 2.4GHz Wi-Fi)",
        "Works with Google Assistant & Amazon Alexa",
        "16 Million Colors + 2700K to 6500K White Light",
        "1-Year Replacement Warranty"
      ]}
      faqs={[
        {
          question: "Can I control the bulb when I am away from home?",
          answer: "Yes! As long as your home Wi-Fi is active, you can turn lights on or off, schedule timers, and change colors from anywhere in Nepal via your phone app."
        }
      ]}
    />
  );
}
