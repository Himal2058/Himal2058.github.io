import React from 'react';
import { getRepairBySlug } from '@/data/repairs';
import { RepairDetailView } from '@/components/RepairDetailView';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Phone Screen Replacement in Itahari | AMOLED & Glass Repair',
  description: 'Fast 45-minute smartphone screen replacement in Itahari, Sunsari. Original & OEM displays for Samsung, Redmi, iPhone, and Realme with touch warranty.'
};

export default function ScreenReplacementPage() {
  const service = getRepairBySlug('screen-replacement');
  if (!service) notFound();
  return <RepairDetailView service={service} />;
}
