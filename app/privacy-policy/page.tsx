import React from 'react';
import { LegalPage } from '@/components/LegalPage';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'What information the shop collects from this website and from repair work, and how it is used.'
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      intro="What we collect, why we need it, and what we do not do with it."
      updated="October 2026"
      breadcrumb={{ name: 'Privacy policy', url: '/privacy-policy' }}
      actions={[
        { href: '/repair-policy', label: 'Repair policy' },
        { href: '/terms-and-conditions', label: 'Terms and conditions' },
        { href: '/contact', label: 'Contact the shop' }
      ]}
    >
      <h2>What we collect</h2>
      <p>
        If you send a message through the contact form, the details go into WhatsApp so the shop can reply.
        That is your name, phone number, device model and the fault you describe. If you ask for delivery,
        we also need an address.
      </p>

      <h2>How it is used</h2>
      <p>
        Only to answer you, update you on a repair, or send an order. We do not sell or share your details
        with advertisers.
      </p>

      <h2>Your phone during a repair</h2>
      <p>
        Nobody at the bench opens your gallery, messages, email or banking apps. Screen, battery and port
        work does not need the phone unlocked. Android Maintenance Mode is a good option if you would rather
        leave a lock in place.
      </p>

      <h2>Cookies</h2>
      <p>
        This site does not run advertising trackers. If analytics is switched on, it records page visits in
        aggregate and does not identify you.
      </p>

      <h2>Questions</h2>
      <p>
        Email <strong>{siteConfig.email}</strong> or call <strong>{siteConfig.phone}</strong>.
      </p>
    </LegalPage>
  );
}
