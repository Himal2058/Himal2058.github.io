import React from 'react';
import { products } from '@/data/products';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductCatalogue } from '@/components/ProductCatalogue';
import { CtaBand } from '@/components/CtaBand';

export const metadata = {
  title: 'Products in Stock',
  description:
    'Everything on the shelf at Himal Product and Services in Itahari: smartphones, earbuds, chargers, smart home devices and power banks.'
};

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
