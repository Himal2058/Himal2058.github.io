import React from 'react';
import { getRepairBySlug } from '@/data/repairs';
import { RepairDetailView } from '@/components/RepairDetailView';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Mobile Phone Battery Replacement Itahari | 6 Months Warranty',
  description: 'Certified smartphone battery replacement in Itahari, Sunsari. High-density batteries for Samsung, Xiaomi, and iPhone with 6 months replacement warranty.'
};

export default function BatteryReplacementPage() {
  const service = getRepairBySlug('battery-replacement');
  if (!service) notFound();
  return <RepairDetailView service={service} />;
}
