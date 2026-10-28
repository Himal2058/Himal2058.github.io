import React from 'react';
import { getRepairBySlug } from '@/data/repairs';
import { RepairDetailView } from '@/components/RepairDetailView';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Android Smartphone Repair in Itahari | Samsung, Xiaomi, Realme',
  description: 'Full-service Android phone repairs in Itahari, Sunsari. Genuine and OEM parts for Samsung Galaxy, Redmi, Realme, Vivo, and OnePlus with warranty.'
};

export default function AndroidRepairPage() {
  const service = getRepairBySlug('android-repair');
  if (!service) notFound();
  return <RepairDetailView service={service} />;
}
