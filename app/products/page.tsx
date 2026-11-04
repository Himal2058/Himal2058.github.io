import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductCatalogue } from '@/components/ProductCatalogue';
import { CtaBand } from '@/components/CtaBand';

export const metadata = {
  title: 'Products in Stock',
  description:
    'Everything on the shelf at Himal Product and Services in Itahari: smartphones, earbuds, chargers, smart home devices and power banks.'
};

const productCollections = [
  { title: 'Smartphones', copy: 'Phones for work, study, and everyday use.', href: '/mobile-phones', image: '/images/phone-lineup.jpg', alt: 'A selection of smartphones with different screen sizes and interfaces' },
  { title: 'Smart home', copy: 'App-connected switches and simple home controls.', href: '/smart-home/smart-plugs-switches', image: '/images/smart-wifi-switch.jpg', alt: 'Wi-Fi smart switch shown beside its phone app' },
  { title: 'Power banks', copy: 'Portable charging for phones and laptops.', href: '/power-banks', image: '/images/my-power-20000mah.jpg', alt: 'MY POWER 20,000mAh fast-charging power bank' }
];

export default function ProductsPage() {
  return (
    <div className="pb-12 md:pb-16">
      <div className="container-page pt-6">
        <Breadcrumbs items={[{ name: 'Products', url: '/products' }]} />
      </div>

      <section className="border-b border-line bg-surface">
        <div className="container-page py-8 md:py-10">
          <h1 className="display-1">Products in stock</h1>
          <p className="lede mt-3 max-w-2xl">
            {products.length} items currently held at the shop. Prices include VAT, and the warranty is
            handled at the counter, not through a call centre.
          </p>
        </div>
      </section>

      <section className="container-page pt-7 md:pt-9" aria-label="Shop product categories">
        <div className="grid gap-4 sm:grid-cols-3">
          {productCollections.map(collection => (
            <Link key={collection.title} href={collection.href} className="group overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-pop)]">
              <div className="relative aspect-[16/9] overflow-hidden bg-canvas">
                <Image src={collection.image} alt={collection.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <span><span className="block font-semibold text-ink">{collection.title}</span><span className="mt-1 block text-sm text-muted">{collection.copy}</span></span>
                <span aria-hidden="true" className="text-lg font-semibold text-brand-700">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ProductCatalogue />

      <div className="mt-6">
        <CtaBand
          title="Looking for a model that is not listed?"
          description="The site only shows regular stock. Send us the exact model and we can usually bring it in within a few days."
          whatsappMessage="Hello Himal Product & Services, I am looking for something not in your online list: "
        />
      </div>
    </div>
  );
}
