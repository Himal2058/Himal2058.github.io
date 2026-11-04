import { LegalPage } from '@/components/LegalPage';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'Delivery and Pickup',
  description: 'Check product delivery and repair courier arrangements from Himal Product and Services in Sundarharaincha, Morang.'
};

export default function DeliveryPickupPage() {
  return (
    <LegalPage
      title="Delivery and pickup"
      intro="Ask us to confirm product delivery before ordering. Repair courier-in is a separate arrangement and must be approved before you send a device."
      updated="November 2026"
      breadcrumb={{ name: 'Delivery and pickup', url: '/delivery-pickup' }}
      actions={[
        { href: '/service-areas', label: 'Service areas' },
        { href: '/store-location', label: 'Store location' },
        { href: '/contact', label: 'Contact the shop' }
      ]}
    >
      <h2>Local product delivery in Sunsari and Morang</h2>
      <p>Send your town, ward and the item you want. The shop will confirm whether delivery is available, its charge, payment method and expected time before finalizing the order.</p>
      <ul>
        <li>Same-day dispatch may be available for eligible items and locations when the shop confirms it.</li>
        <li>Routes to Itahari, Sundarharaincha, Biratnagar, Dharan and nearby towns depend on the order and delivery schedule.</li>
        <li>Bulky or fragile products may need a separate transport arrangement.</li>
      </ul>

      <h2>Product courier to other districts</h2>
      <p>Courier options depend on your destination and the product. We confirm the courier, charge, delivery estimate and payment method before dispatch. Share your full address and phone number through the order process so we can check the route.</p>

      <h2>Repair courier-in</h2>
      <p>Do not send a device for repair without contacting us first. We will confirm whether the device can be assessed, how to pack it, who pays transport, what happens if you decline the estimate, and how the repaired device will be returned.</p>

      <h2>Pickup at the shop</h2>
      <p>You can collect an order or repaired device at <strong>{siteConfig.address.street}, {siteConfig.address.city}</strong>. Confirm the item is ready before travelling.</p>
    </LegalPage>
  );
}
