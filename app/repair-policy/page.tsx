import React from 'react';
import { LegalPage } from '@/components/LegalPage';

export const metadata = {
  title: 'Repair Policy',
  description:
    'What happens when you leave a phone with us: the free check, how we treat your data, and what the warranty covers.'
};

export default function RepairPolicyPage() {
  return (
    <LegalPage
      title="Repair policy"
      intro="What we do with your device, what we will not do, and what the warranty on a repair covers."
      updated="October 2026"
      breadcrumb={{ name: 'Repair policy', url: '/repair-policy' }}
      actions={[
        { href: '/mobile-repair', label: 'Repair services' },
        { href: '/repair-price', label: 'Repair prices' },
        { href: '/warranty', label: 'Warranty' }
      ]}
    >
      <h2>The first check is free</h2>
      <p>
        Every phone gets a bench check before we quote. We test the charging current, the touch response
        and the battery. You get a price in writing. Nothing is opened until you agree to it.
      </p>

      <h2>Your data</h2>
      <p>Screen, battery, port and back glass work does not need your passcode.</p>
      <ul>
        <li>We do not copy, read or transfer anything from your storage.</li>
        <li>
          We test the touch panel from the emergency dialler or with Android Maintenance Mode switched on.
        </li>
        <li>
          Nobody at the bench opens your gallery, chats, social apps or banking apps. That is a condition of
          the job, not a promise.
        </li>
      </ul>

      <h2>Warranty on repairs</h2>
      <ul>
        <li>
          <strong>Screens:</strong> up to 90 days against touch faults and panel defects. A later drop or
          liquid spill is not covered.
        </li>
        <li>
          <strong>Batteries:</strong> 6 months against fast drain, sudden shutdown and swelling.
        </li>
        <li>
          <strong>Charging ports:</strong> 30 to 90 days on connection stability and fast charging.
        </li>
      </ul>

      <h2>Water damage</h2>
      <p>
        Water causes corrosion that keeps spreading after the phone dries. Ultrasonic cleaning revives most
        wet phones, but a sensor or a soldered camera can fail weeks later because of the same exposure. We
        will tell you that before you pay.
      </p>

      <h2>Collecting a device</h2>
      <p>
        We hold a repaired device for up to 60 days after we tell you it is ready. Bring the intake slip or
        show the WhatsApp confirmation when you collect it.
      </p>
    </LegalPage>
  );
}
