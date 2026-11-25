import { Metadata } from 'next';
import MobilePhonesClient from './_client';

export const metadata: Metadata = {
  title: 'Mobile Phones in Itahari | Samsung, Redmi, iPhone',
  description: 'Buy official Android smartphones and iPhones in Itahari, Sunsari. Best prices with 1-year brand warranty and MDMS registration. Screen and battery repairs available.',
};

export default function MobilePhonesPage() {
  return <MobilePhonesClient />;
}
