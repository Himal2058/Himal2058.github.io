import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/siteConfig';
import { products } from '@/data/products';
import { repairServices } from '@/data/repairs';
import { blogTopics } from '@/data/blogs';
import { serviceLocations } from '@/data/locations';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;

  // 1. Static Core Pages
  const staticRoutes = [
    '',
    '/mobile-repair',
    '/electronics-repair',
    '/electronic-device-repair-itahari',
    '/mobile-phones',
    '/products',
    '/gadgets-accessories',
    '/smart-home',
    '/power-banks',
    '/repair-price',
    '/blog',
    '/offers',
    '/service-areas',
    '/about-us',
    '/contact',
    '/customer-service',
    '/store-location',
    '/warranty',
    '/repair-policy',
    '/delivery-pickup',
    '/privacy-policy',
    '/terms-and-conditions'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route === '/electronic-device-repair-itahari' || route === '/electronics-repair' || route.startsWith('/mobile-') || route.startsWith('/gadgets') || route.startsWith('/smart-home') || route.startsWith('/power-banks') ? 0.9 : 0.7
  }));

  // 2. Repair Service Sub-Pages
  const repairRoutes = repairServices.map(service => ({
    url: `${baseUrl}/mobile-repair/${service.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }));

  // 3. Subcategory Pages
  const subcategoryRoutes = [
    '/mobile-phones/android',
    '/mobile-phones/iphone',
    '/gadgets-accessories/chargers-cables',
    '/gadgets-accessories/earbuds-headphones',
    '/gadgets-accessories/smartwatches',
    '/gadgets-accessories/bluetooth-speakers',
    '/smart-home/smart-bulbs',
    '/smart-home/smart-plugs-switches',
    '/smart-home/smart-security'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }));

  // 4. Dynamic Products
  const productRoutes = products.map(product => ({
    url: `${baseUrl}/products/${product.slug}`,
    changeFrequency: 'daily' as const,
    priority: 0.85
  }));

  // 5. Published blog articles
  const blogRoutes = blogTopics.map(blog => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.publishedDate),
    changeFrequency: 'monthly' as const,
    priority: blog.isPillar ? 0.8 : 0.6
  }));

  // 6. Local Service Areas
  const locationRoutes = serviceLocations.map(loc => ({
    url: `${baseUrl}/service-areas/${loc.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.75
  }));

  return [
    ...staticRoutes,
    ...repairRoutes,
    ...subcategoryRoutes,
    ...productRoutes,
    ...blogRoutes,
    ...locationRoutes
  ];
}
