import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare } from 'lucide-react';
import { Product } from '@/data/products';
import { getWhatsAppLink } from '@/data/siteConfig';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const orderMessage = `Hello Himal Product & Services, I would like to order or reserve this product.
Product: ${product.name}
Price shown: रू ${product.price.toLocaleString('en-IN')}
Availability: ${product.inStock ? 'shown in stock' : 'please check availability'}
Preferred option: store pickup or delivery
Please confirm the final price, warranty, and next step.`;

  return (
    <article className="card card-hover flex h-full flex-col overflow-hidden">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-canvas">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs text-muted">{product.brand}</p>

        <h3 className="mt-1 text-sm font-semibold leading-snug text-ink">
          <Link href={`/products/${product.slug}`} className="hover:underline hover:underline-offset-2">
            {product.name}
          </Link>
        </h3>

        <p className="mt-2 text-sm font-semibold text-ink">
          रू {product.price.toLocaleString('en-IN')}
          {product.originalPrice && (
            <span className="ml-2 text-xs font-normal text-muted line-through">
              रू {product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </p>

        <p className="mt-1 text-xs leading-5 text-muted">{product.warranty}</p>

        <p className="mt-auto pt-2 text-xs">
          {product.inStock ? (
            <span className="text-whatsapp">In stock</span>
          ) : (
            <span className="text-muted">Ask about availability</span>
          )}
        </p>

        <a
          href={getWhatsAppLink(orderMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-3 w-full"
        >
          <MessageSquare className="size-4" aria-hidden="true" />
          <span>{product.inStock ? 'Order on WhatsApp' : 'Check availability'}</span>
        </a>
      </div>
    </article>
  );
}
