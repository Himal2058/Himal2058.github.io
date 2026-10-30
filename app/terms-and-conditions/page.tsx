import React from 'react';
import { LegalPage } from '@/components/LegalPage';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'Terms and Conditions',
  description:
    'Terms for sales, repairs and delivery at Himal Product and Services in Sundarharaincha, Morang.'
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Terms and conditions"
      intro="The plain terms that apply to a purchase or a repair at the shop."
      updated="October 2026"
      breadcrumb={{ name: 'Terms and conditions', url: '/terms-and-conditions' }}
      actions={[
        { href: '/warranty', label: 'Warranty and returns' },
        { href: '/delivery-pickup', label: 'Delivery and pickup' },
        { href: '/privacy-policy', label: 'Privacy policy' }
      ]}
    >
      <h2>Prices</h2>
      <p>
        Prices on this site are in Nepalese rupees and include VAT unless stated otherwise. Imported
        electronics and replacement screens move in price, so the figure is confirmed at the counter or in
        the order message.
      </p>

      <h2>Phones and registration</h2>
      <p>
        Every new handset sold by {siteConfig.name} is registered on the Nepal Telecommunications Authority
        MDMS portal and comes with a VAT bill.
      </p>

      <h2>Repair estimates</h2>
      <p>
        The online calculator gives a range based on the model and the fault. The binding price comes after
        the bench check. No repair starts until you agree to that figure.
      </p>

      <h2>Back up your data</h2>
      <p>
        We take care with every device, but back up your photos and files before leaving a phone with us. A
        failing storage chip or old liquid damage can cause data loss that has nothing to do with the repair
        itself.
      </p>

      <h2>Holding a device</h2>
      <p>
        Repaired devices are held for 60 days after we tell you they are ready. After that we may sell the
        parts to recover the bench cost, and we will tell you before that happens.
      </p>
    </LegalPage>
  );
}
