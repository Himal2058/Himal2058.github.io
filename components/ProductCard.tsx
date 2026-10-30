import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface">
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
      </div>
    </article>
  );
}
