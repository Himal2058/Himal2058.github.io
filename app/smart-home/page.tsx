import { Metadata } from 'next';
import SmartHomeClient from './_client';

export const metadata: Metadata = {
  title: 'Smart Home Devices in Nepal | Wi-Fi Bulbs, Plugs, Cameras',
  description: 'Buy smart home automation devices in Itahari, Sunsari. Wi-Fi bulbs, 16A smart plugs, 2K security cameras with 1-year warranty. No hub required.',
};

export default function SmartHomePage() {
  return <SmartHomeClient />;
}
