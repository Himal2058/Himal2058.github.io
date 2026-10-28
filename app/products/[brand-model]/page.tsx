import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Star, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  ArrowLeft,
  Share2,
  Cpu,
  Package
} from 'lucide-react';
import { products, getProductBySlug } from '@/data/products';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductCard } from '@/components/ProductCard';
import { JsonLd, getProductSchema } from '@/components/JsonLd';

interface Props {
  params: Promise<{ 'brand-model': string }>;
}

export async function generateStaticParams() {
  return products.map(product => ({
    'brand-model': product.slug
  }));
}

export async function generateMetadata({ params }: Props) {
  const { 'brand-model': slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Product Not Found' };
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

  const categoryNameMap: Record<string, { name: string; url: string }> = {
    'mobile-phones': { name: 'Smartphones', url: '/mobile-phones' },
    'gadgets-accessories': { name: 'Gadgets & Accessories', url: '/gadgets-accessories' },
    'smart-home': { name: 'Smart Home', url: '/smart-home' },
    'power-banks': { name: 'Power Banks', url: '/power-banks' }
  };

  const parentCat = categoryNameMap[product.category] || { name: 'Products', url: '/products' };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  const whatsappOrderMessage = `Hello Himal Product & Services! I would like to order/inquire about:
- Product: *${product.name}*
- Price: रू ${product.price.toLocaleString('en-IN')}
- Warranty: ${product.warranty}
Can I collect this at your Itahari store, or do you offer delivery?`;

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
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

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[
          { name: parentCat.name, url: parentCat.url },
          { name: product.name, url: `/products/${product.slug}` }
        ]} />

        {/* Product Hero Section */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Image View */}
            <div className="lg:col-span-5">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider bg-slate-900 text-white px-3 py-1 rounded-full">
                    {product.brand}
                  </span>
                  {discountPercent > 0 && (
                    <span className="text-xs font-bold bg-rose-600 text-white px-2.5 py-1 rounded-full">
                      Save {discountPercent}%
                    </span>
                  )}
                </div>
              </div>

              {/* Delivery Assurance */}
              <div className="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2 text-slate-800 font-semibold">
                  <Truck className="w-4 h-4 text-blue-600" />
                  <span>Delivery Coverage</span>
                </div>
                <p>
                  Same-day delivery across Itahari, Dharan, Biratnagar, and Sundarharaincha. Express secure courier service throughout all districts of Nepal.
                </p>
              </div>
            </div>

            {/* Right Information & CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-slate-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                  <span className="text-xs text-slate-400">({product.reviewsCount} verified customer ratings)</span>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
                  {product.name}
                </h1>

                {/* Pricing Display */}
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-3xl font-black text-blue-600">
                    रू {product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-slate-400 line-through">
                      रू {product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-semibold border border-emerald-200">
                    VAT Inclusive
                  </span>
                </div>

                {/* Stock & Warranty Badge */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>In Stock for Immediate Pickup</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>{product.warranty}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                    Key Features:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {product.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compatibility */}
                {product.compatibility && (
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 mb-6 text-xs text-slate-600">
                    <strong>Compatibility:</strong> {product.compatibility}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                <a
                  href={getWhatsAppLink(whatsappOrderMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl transition text-sm shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order / Inquire on WhatsApp</span>
                </a>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl transition text-sm shadow-sm"
                >
                  <Phone className="w-4 h-4 text-green-400" />
                  <span>Call to Reserve</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Detailed Technical Specifications Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-10 mb-12">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-blue-600" />
            <span>Verified Technical Specifications</span>
          </h2>

          <div className="divide-y divide-slate-100 text-xs md:text-sm">
            {Object.entries(product.specs).map(([key, val]) => (
              <div key={key} className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="font-bold text-slate-700">{key}</span>
                <span className="sm:col-span-2 text-slate-600">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products Carousel/Grid */}
        {relatedProducts.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900">Related in {parentCat.name}</h2>
              <Link href={parentCat.url} className="text-xs font-bold text-blue-600 hover:underline">
                View All {parentCat.name} →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map(rel => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
