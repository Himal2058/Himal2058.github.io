import React from 'react';
import { products } from '@/data/products';
import { SubcategoryView } from '@/components/SubcategoryView';

export const metadata = {
  title: '360° 2K Smart Security Wi-Fi Cameras in Itahari Nepal',
  description: 'Buy pan-tilt 2K smart CCTV cameras in Itahari. Human motion detection, night vision, two-way intercom, and local SD card recording with 1-year warranty.'
};

export default function SmartSecurityPage() {
  const items = products.filter(p => p.category === 'smart-home' && p.subcategory === 'smart-security');

  return (
    <>
      <h1>Smart security</h1>

      <SubcategoryView
        title="360° 2K Smart Cameras"
        h1="360° 2K Smart Security Wi-Fi Cameras in Itahari Nepal"
        description="Pan-tilt 2K smart CCTV cameras with human motion detection, night vision, two-way intercom, and local SD card recording."
        parentName="Smart Home"
        parentUrl="/smart-home"
        currentUrl="/smart-home/smart-security"
        products={items}
        highlights={[
          "360° Pan-Tilt Coverage",
          "2K Ultra HD Resolution",
          "Human Motion Detection Alerts",
          "Local microSD Recording Up to 256GB"
        ]}
        faqs={[{
          question: "Do the cameras need a monthly subscription?",
          answer: "No. They record to a microSD card up to 256GB. You watch live and play back from the phone app at no monthly cost."
        }]}
      />
    </>
  );
}
