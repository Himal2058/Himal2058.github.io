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
    <SubcategoryView
      title="16A Heavy-Duty Smart Plugs"
      h1="16A Heavy-Duty Smart Wi-Fi Plugs for Geysers in Nepal"
      description="Automate high-wattage water geysers, air conditioners, room heaters, and water pumps. Features real-time kWh energy monitoring, countdown timers, and fire-retardant safety."
      parentName="Smart Home"
      parentUrl="/smart-home"
      currentUrl="/smart-home/smart-plugs-switches"
      products={items}
      highlights={[
        "16A Heavy-Duty (Up to 3500W Safe Load)",
        "Live Kilowatt-Hour Electricity Cost Tracker",
        "Automated Morning Timers for Water Geysers",
        "V0 Fire-Retardant ABS Housing"
      ]}
      faqs={[
        {
          question: "Can I set a timer so my geyser shuts off after 20 minutes?",
          answer: "Yes! You can configure an automated 'inching' timer that shuts off power automatically 20 minutes after being switched on, preventing electricity waste and water overheating."
        }
      ]}
    />
  );
}
