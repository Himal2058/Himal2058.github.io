import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { JsonLd, getOrganizationSchema } from '@/components/JsonLd';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | Mobile Repair & Electronics Store Itahari`,
    template: `%s | ${siteConfig.name}`
  },
  description: 'Eastern Nepal’s trusted electronics retail and certified mobile repair center in Itahari and Sunsari/Morang. Screen replacement, battery repair, genuine smartphones, smart home devices, and power banks.',
  keywords: [
    'mobile repair Itahari',
    'electronics shop Itahari',
    'phone screen replacement Sunsari',
    'mobile battery repair Nepal',
    'buy smartphone Itahari',
    'smart home devices Nepal',
    'power bank price Nepal',
    'Himal Product and Services'
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    telephone: true,
    address: true,
    email: true
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Mobile Repair & Electronics Hub Itahari`,
    description: 'Expert mobile repairs, original smartphones, smart home automation, and accessories in Itahari, Sunsari, Nepal.',
    images: [
      {
        url: `${siteConfig.siteUrl}/logo.jpg`,
        width: 800,
        height: 800,
        alt: `${siteConfig.name} Logo`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Mobile Repair & Electronics Hub`,
    description: 'Certified phone repair and genuine electronics store in Itahari, Nepal.',
    images: [`${siteConfig.siteUrl}/logo.jpg`]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        <JsonLd data={getOrganizationSchema()} />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
