import { Metadata } from 'next';
import GadgetsAccessoriesClient from './_client';

export const metadata: Metadata = {
  title: 'Electronic Gadgets & Accessories in Itahari | Earbuds, Chargers, Smartwatches',
  description: 'Buy electronic accessories in Itahari, Sunsari. ANC earbuds, GaN chargers, USB-C cables, smartwatches, Bluetooth speakers with 1-year warranty.',
};

export default function GadgetsAccessoriesPage() {
  return <GadgetsAccessoriesClient />;
}
