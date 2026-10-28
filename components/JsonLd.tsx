import React from 'react';
import { siteConfig } from '@/data/siteConfig';

interface JsonLdProps {
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    "name": siteConfig.name,
    "alternateName": siteConfig.shortName,
    "description": siteConfig.tagline,
    "url": siteConfig.siteUrl,
    "logo": `${siteConfig.siteUrl}/logo.jpg`,
    "image": `${siteConfig.siteUrl}/logo.jpg`,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "foundingDate": "2022",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.province,
      "postalCode": siteConfig.address.postalCode,
      "addressCountry": "NP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.geo.latitude,
      "longitude": siteConfig.geo.longitude
    },
    "hasMap": siteConfig.googleMapsUrl,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "10:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      siteConfig.social.facebook
    ],
    "priceRange": "NPR रू 200 - रू 150000",
    "currenciesAccepted": "NPR",
    "paymentAccepted": "Cash, Fonepay, eSewa, Khalti, Mobile Banking"
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${siteConfig.siteUrl}${item.url}`
    }))
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function getServiceSchema(service: {
  title: string;
  description: string;
  url: string;
  providerName?: string;
  priceRange?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "url": `${siteConfig.siteUrl}${service.url}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.name,
      "telephone": siteConfig.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.address.street,
        "addressLocality": siteConfig.address.city,
        "addressRegion": siteConfig.address.province,
        "addressCountry": "NP"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Itahari" },
      { "@type": "City", "name": "Sundarharaincha" },
      { "@type": "City", "name": "Dharan" },
      { "@type": "City", "name": "Biratnagar" }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "NPR",
      "price": service.priceRange || "Contact for Quote"
    }
  };
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  publishedDate: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "datePublished": article.publishedDate,
    "dateModified": article.publishedDate,
    "mainEntityOfPage": `${siteConfig.siteUrl}/blog/${article.slug}`,
    "author": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.siteUrl}/logo.jpg`
      }
    }
  };
}

export function getProductSchema(product: {
  name: string;
  description: string;
  image: string;
  slug: string;
  price: number;
  brand: string;
  inStock: boolean;
  warranty: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "offers": {
      "@type": "Offer",
      "url": `${siteConfig.siteUrl}/products/${product.slug}`,
      "priceCurrency": "NPR",
      "price": product.price,
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": siteConfig.name
      }
    }
  };
}
