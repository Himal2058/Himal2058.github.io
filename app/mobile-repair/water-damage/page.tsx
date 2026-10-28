import React from 'react';
import { getRepairBySlug } from '@/data/repairs';
import { RepairDetailView } from '@/components/RepairDetailView';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Mobile Water Damage Repair & Data Recovery in Itahari',
  description: 'Emergency smartphone water damage treatment in Itahari, Sunsari. Ultrasonic motherboard cleaning and short-circuit repair to revive wet phones.'
};

export default function WaterDamagePage() {
  const service = getRepairBySlug('water-damage');
  if (!service) notFound();
  return <RepairDetailView service={service} />;
}
