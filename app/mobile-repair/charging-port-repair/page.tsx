import React from 'react';
import { getRepairBySlug } from '@/data/repairs';
import { RepairDetailView } from '@/components/RepairDetailView';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Charging Port & Microphone Repair Itahari | USB-C & Lightning',
  description: 'Fix loose charging ports, moisture detection errors, and microphone issues in Itahari, Sunsari. 30-minute express service at Himal Product and Services.'
};

export default function ChargingPortRepairPage() {
  const service = getRepairBySlug('charging-port-repair');
  if (!service) notFound();
  return <RepairDetailView service={service} />;
}
