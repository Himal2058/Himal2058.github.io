import React from 'react';
import Link from 'next/link';
import { Star, ShieldCheck, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Product } from '@/data/products';
import { getWhatsAppLink } from '@/data/siteConfig';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  const whatsappMessage = `Hello Himal Product & Services, I am interested in purchasing/inquiring about *${product.name}* (Price: रू ${product.price.toLocaleString('en-IN')}). Is it currently available for store pickup in Itahari or delivery?`;

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_38px_rgba(15,23,42,0.12)]">
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full">
            {product.brand}
          </span>
          {discountPercent > 0 && (
            <span className="text-[11px] font-bold bg-rose-600 text-white px-2 py-0.5 rounded-full shadow-sm">
              Save {discountPercent}%
            </span>
          )}
        </div>

        <div className="absolute bottom-3 right-3">
          <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-emerald-600 text-white px-2 py-0.5 rounded-full shadow-sm">
            <CheckCircle2 className="w-3 h-3" />
            <span>In Stock</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-slate-300'}`} 
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-slate-700">{product.rating}</span>
            <span className="text-xs text-slate-400">({product.reviewsCount})</span>
          </div>

          {/* Title */}
          <Link href={`/products/${product.slug}`} className="block group-hover:text-blue-600 transition">
            <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2 mb-2">
              {product.name}
            </h3>
          </Link>

          {/* Key Highlights Bullet */}
          <ul className="text-xs text-slate-600 space-y-1 mb-4">
            {product.highlights.slice(0, 2).map((h, i) => (
              <li key={i} className="line-clamp-1 flex items-start gap-1.5">
                <span className="text-blue-500 font-bold">•</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-3 border-t border-slate-100">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-xl font-black text-slate-900">
              रू {product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-slate-400 line-through">
                रू {product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 text-[11px] text-slate-500 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span className="truncate">{product.warranty}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link 
              href={`/products/${product.slug}`}
              className="flex items-center justify-center gap-1 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 py-2.5 px-2 rounded-lg transition"
            >
              <span>Details</span>
              <ArrowRight className="w-3 h-3" />
            </Link>

            <a
              href={getWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 py-2.5 px-2 rounded-lg transition shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Enquire</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
