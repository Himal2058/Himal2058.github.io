import React from 'react';
import { getRepairBySlug } from '@/data/repairs';
import { RepairDetailView } from '@/components/RepairDetailView';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Phone Software Repair, Bootloop & Logo Fix in Itahari',
  description: 'Fix phone stuck on Mi/Samsung/Apple logo, continuous bootlooping, and system crashes in Itahari. Official firmware flashing and recovery.'
};

export default function SoftwareRepairPage() {
  const service = getRepairBySlug('software-repair');
  if (!service) notFound();
  return <RepairDetailView service={service} />;
}
