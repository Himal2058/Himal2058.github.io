import React from 'react';
import { getRepairBySlug } from '@/data/repairs';
import { RepairDetailView } from '@/components/RepairDetailView';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Apple iPhone Repair Specialist in Itahari | Screen & Battery',
  description: 'Certified Apple iPhone repairs in Itahari, Sunsari. Precision OLED screen replacement with True Tone transfer, battery health restoration, and camera repairs.'
};

export default function IPhoneRepairPage() {
  const service = getRepairBySlug('iphone-repair');
  if (!service) notFound();
  return <RepairDetailView service={service} />;
}
