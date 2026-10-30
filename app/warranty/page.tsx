import React from 'react';
import { LegalPage } from '@/components/LegalPage';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'Warranty and Returns',
  description:
    'Warranty terms on phones, chargers, power banks, earbuds and smart home devices bought at the shop, and how a claim is handled.'
};

export default function WarrantyPage() {
  return (
    <LegalPage
      title="Warranty and returns"
      intro="How long each type of product is covered, what is excluded, and what to bring when something fails."
      updated="October 2026"
      breadcrumb={{ name: 'Warranty', url: '/warranty' }}
      actions={[
        { href: '/mobile-phones', label: 'Smartphones' },
        { href: '/gadgets-accessories', label: 'Gadgets and accessories' },
        { href: '/repair-policy', label: 'Repair policy' }
      ]}
    >
      <h2>Coverage by product</h2>
      <p>Warranty runs from 6 months to 2 years depending on the product and the brand:</p>
      <ul>
        <li>
          <strong>Smartphones:</strong> 1 year manufacturer warranty, serviced at the brand centres in
          Nepal. The VAT bill is what they ask for.
        </li>
        <li>
          <strong>65W GaN chargers:</strong> 1 year replacement for internal circuit failure.
        </li>
        <li>
          <strong>Power banks:</strong> 1 year for cell and controller faults.
        </li>
        <li>
          <strong>USB-C cables:</strong> 6 months for connector separation and wire breakage.
        </li>
        <li>
          <strong>Earbuds and speakers:</strong> 6 months to 1 year for driver and charging case faults.
        </li>
        <li>
          <strong>Smart home devices:</strong> 1 year for Wi-Fi and relay faults.
        </li>
      </ul>

      <h2>What is not covered</h2>
      <ul>
        <li>Damage from a drop, crush or impact.</li>
        <li>Liquid damage, unless the device is IP68 rated and was used within that rating.</li>
        <li>Burn damage from lightning or a bad supply line.</li>
        <li>Anything opened or modified outside the shop, including unofficial firmware.</li>
      </ul>

      <h2>Making a claim</h2>
      <ol>
        <li>Bring the product, the box and the bill to {siteConfig.address.street}, {siteConfig.address.city}.</li>
        <li>
          If you are outside Itahari, send a short video of the fault to the shop WhatsApp number (
          {siteConfig.phone}).
        </li>
        <li>
          We test it on the bench. If it is a manufacturing fault, we start the replacement or the brand
          service claim the same day.
        </li>
      </ol>
      <p>
        Bring the bill if you have it, but we can also look up a sale by phone number. A phone bought
        elsewhere is not covered here.
      </p>
    </LegalPage>
  );
}
