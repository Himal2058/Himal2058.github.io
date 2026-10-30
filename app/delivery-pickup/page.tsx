import React from 'react';
import { LegalPage } from '@/components/LegalPage';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'Delivery and Pickup',
  description:
    'Same-day delivery in Itahari, Dharan, Biratnagar and Sundarharaincha, plus courier shipping to the rest of Nepal.'
};

export default function DeliveryPickupPage() {
  return (
    <LegalPage
      title="Delivery and pickup"
      intro="How orders reach you, whether you are in Sunsari, Morang or another district."
      updated="October 2026"
      breadcrumb={{ name: 'Delivery and pickup', url: '/delivery-pickup' }}
      actions={[
        { href: '/service-areas', label: 'Service areas' },
        { href: '/store-location', label: 'Store location' },
        { href: '/contact', label: 'Contact the shop' }
      ]}
    >
      <h2>Local delivery in Sunsari and Morang</h2>
      <p>For Itahari, Sundarharaincha, Biratnagar and Dharan:</p>
      <ul>
        <li>Orders confirmed before 1:00 PM go out the same day.</li>
        <li>
          Itahari and Sundarharaincha delivery is free over रू 2,000. Smaller accessories carry a रू 100
          charge.
        </li>
        <li>Biratnagar and Dharan cost रू 150 and arrive within 4 to 6 hours, or the next morning.</li>
      </ul>

      <h2>Courier to other districts</h2>
      <p>We send parcels through Sundar, Pathao Courier, Gaura and Nepal Post.</p>
      <ul>
        <li>
          <strong>Kathmandu, Pokhara, Butwal, Narayangarh, Birtamod:</strong> 24 to 48 hours.
        </li>
        <li>
          <strong>Other district centres:</strong> 2 to 4 working days.
        </li>
        <li>Courier fee is रू 150 to रू 250 depending on weight.</li>
      </ul>

      <h2>Packaging</h2>
      <p>
        Phones, displays, power banks and cameras are bubble wrapped inside a rigid box with sealing tape
        on the seams. If a parcel arrives damaged, photograph it before opening and call us the same day.
      </p>

      <h2>Pickup at the shop</h2>
      <p>
        You can also collect at{' '}
        <strong>
          {siteConfig.address.street}, {siteConfig.address.city}
        </strong>
        . We will hold the item for two days and fit a screen protector or move your data across while you
        wait.
      </p>
    </LegalPage>
  );
}
