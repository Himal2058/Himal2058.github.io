import React from 'react';
import { products } from '@/data/products';
import { SubcategoryView } from '@/components/SubcategoryView';

export const metadata = {
  title: '16A Smart Wi-Fi Plug for Geysers & ACs in Nepal (Itahari)',
  description: 'Heavy-duty 16A smart plugs with energy monitor in Itahari. Automate water geysers, pumps, and heaters to slash electricity bills safely.'
};

export default function SmartPlugsSwitchesPage() {
  const items = products.filter(p => p.category === 'smart-home' && p.subcategory === 'smart-plugs-switches');

  return (
    <>
      <h1>Smart plugs switches</h1>

      <SubcategoryView
        title="16A Smart Plugs"
        h1="16A Heavy-Duty Smart Wi-Fi Plugs for Geysers in Nepal"
        description="Heavy-duty 16A smart plugs with energy monitor in Itahari. Automate water geysers, pumps, and heaters to slash electricity bills safely."
        parentName="Smart Home"
        parentUrl="/smart-home"
        currentUrl="/smart-home/smart-plugs-switches"
        products={items}
        highlights={[
          "16A Rated for Geysers, ACs & Water Pumps",
          "Live Energy Monitoring (kWh Tracking)",
          "Fire-Retardant V0 ABS Casing",
          "1-Year Official Warranty"
        ]}
        faqs={[{
          question: "Can I use a 10A smart plug for my geyser?",
          answer: "No. Geysers draw 2000-3000 watts which exceeds 10A capacity. Use a 16A fire-retardant plug for thermal loads."
        }]}
      />
    </>
  );
}
