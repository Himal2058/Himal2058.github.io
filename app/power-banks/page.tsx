import { Metadata } from 'next';
import PowerBanksClient from './_client';

export const metadata: Metadata = {
  title: 'Power Bank Price in Nepal | 10,000mAh & 20,000mAh',
  description: 'Buy power banks in Itahari, Sunsari. 10,000mAh and 20,000mAh fast charging power banks with 1-year warranty. Flight-safe capacity.',
};

export default function PowerBanksPage() {
  return <PowerBanksClient />;
}
