import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MessageSquare, Phone, ArrowRight } from 'lucide-react';
import { products, getProductBySlug } from '@/data/products';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductCard } from '@/components/ProductCard';
import { CtaBand } from '@/components/CtaBand';
import { JsonLd, getProductSchema } from '@/components/JsonLd';

interface Props {
  params: Promise<{ 'brand-model': string }>;
}

const categories: Record<string, { name: string; url: string }> = {
  'mobile-phones': { name: 'Smartphones', url: '/mobile-phones' },
  'gadgets-accessories': { name: 'Gadgets and accessories', url: '/gadgets-accessories' },
  'smart-home': { name: 'Smart home', url: '/smart-home' },
  'power-banks': { name: 'Power banks', url: '/power-banks' }
};

export async function generateStaticParams() {
  return products.map(product => ({ 'brand-model': product.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { 'brand-model': slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Product not found' };
  }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      images: [{ url: product.image }]
    }
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { 'brand-model': slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const parentCategory = categories[product.category] ?? { name: 'Products', url: '/products' };

  const relatedProducts = products
    .filter(item => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  const whatsappOrderMessage = `Hello Himal Product & Services, I would like to ask about this product.
Product: ${product.name}
Price on site: रू ${product.price.toLocaleString('en-IN')}
Is it in stock at the shop?`;

  return (
    <div className="pb-12 md:pb-16">
      <JsonLd
        data={getProductSchema({
          name: product.name,
          description: product.description,
          image: product.image,
          slug: product.slug,
          price: product.price,
          brand: product.brand,
          inStock: product.inStock,
          warranty: product.warranty
        })}
      />

      <div className="container-page pt-6">
        <Breadcrumbs
          items={[
            { name: parentCategory.name, url: parentCategory.url },
            { name: product.name, url: `/products/${product.slug}` }
          ]}
        />
      </div>

      <div className="container-page pt-6">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          {/* Image */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-card border border-line bg-white">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-3 flex items-start gap-2 text-sm text-muted">
              <span>
                Same-day delivery in Itahari, Dharan, Biratnagar and Sundarharaincha. Courier to other
                districts.
              </span>
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-sm text-muted">
              <Link href={parentCategory.url} className="hover:text-brand-700 hover:underline hover:underline-offset-2">
                {parentCategory.name}
              </Link>
              {' · '}
              {product.brand}
            </p>

            <h1 className="display-1 mt-1">{product.name}</h1>

            <p className="mt-3 text-xl font-semibold tabular-nums text-ink">
              रू {product.price.toLocaleString('en-IN')}
              {product.originalPrice && (
                <span className="ml-2 text-sm font-normal text-muted line-through">
                  रू {product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </p>
            <p className="mt-1 text-xs text-muted">
              Price includes VAT. {product.warranty}.
            </p>

            <p className="mt-4 text-sm leading-6 text-ink-soft">{product.description}</p>

            <p className="mt-3 text-sm">
              {product.inStock ? (
                <span className="text-whatsapp">In stock at the counter</span>
              ) : (
                <span className="text-muted">Not on the shelf. Ask and we can order it.</span>
              )}
            </p>

            <div className="mt-5">
              <h2 className="text-sm font-semibold text-ink">What you get</h2>
              <ul className="mt-2 space-y-1.5 text-sm leading-6 text-ink-soft">
                {product.highlights.map(highlight => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            {product.compatibility && (
              <p className="mt-4 border-t border-line pt-3 text-sm leading-6 text-muted">
                <span className="text-ink">Works with: </span>
                {product.compatibility}
              </p>
            )}

            <div className="mt-5 flex flex-col gap-2 border-t border-line pt-5 sm:flex-row">
              <a
                href={getWhatsAppLink(whatsappOrderMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1"
              >
                <MessageSquare className="size-4" aria-hidden="true" />
                <span>Ask about this product</span>
              </a>
              <a href={`tel:${siteConfig.phoneRaw}`} className="btn-outline">
                <Phone className="size-4" aria-hidden="true" />
                <span>{siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <section className="container-page pt-10">
        <h2 className="heading-3">Specifications</h2>
        <dl className="mt-3 divide-y divide-line border-y border-line">
          {Object.entries(product.specs).map(([key, value]) => (
            <div key={key} className="grid gap-1 py-2.5 sm:grid-cols-[14rem_1fr] sm:gap-4">
              <dt className="text-sm text-muted">{key}</dt>
              <dd className="text-sm leading-6 text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Related */}
      {relatedProducts.length > 0 && (
        <section className="container-page pt-10">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-2">
            <h2 className="heading-3">More in {parentCategory.name.toLowerCase()}</h2>
            <Link href={parentCategory.url} className="text-sm text-brand-700 hover:underline hover:underline-offset-2">
              View all
            </Link>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map(related => (
              <ProductCard key={related.id} product={related} />
            ))}
          </div>
        </section>
      )}

      <div className="mt-10">
        <CtaBand
          title="Want to see it in person first?"
          description="Come to the counter and handle it, or message us for current stock and price."
          whatsappMessage={`Hello Himal Product & Services, I am interested in the ${product.name}. Is it in stock?`}
        />
      </div>
    </div>
  );
}
