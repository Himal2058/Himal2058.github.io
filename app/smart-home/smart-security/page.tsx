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
    <SubcategoryView
      title="Smart Security Cameras"
      h1="360° 2K Smart Security Wi-Fi Cameras in Itahari"
      description="Monitor your home, shop, or office 24/7 with 360-degree pan-tilt coverage, high-definition 2K video clarity, AI human tracking alerts, and two-way voice communication."
      parentName="Smart Home"
      parentUrl="/smart-home"
      currentUrl="/smart-home/smart-security"
      products={items}
      highlights={[
        "2K Ultra HD Pan-Tilt 360° Field of View",
        "AI Human Motion Detection & Smart Tracking",
        "Two-Way Audio with Built-In Siren",
        "Local MicroSD Card Recording (No Monthly Fees)"
      ]}
      faqs={[
        {
          question: "Can I view the camera video feed while traveling outside Nepal?",
          answer: "Yes, as long as your camera is connected to your home Wi-Fi, you can watch live video, speak through the camera, and review recordings anywhere in the world using the free smartphone app."
        }
      ]}
    />
  );
}
