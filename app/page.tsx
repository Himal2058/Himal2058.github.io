import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Wrench,
  Smartphone,
  Headphones,
  Lightbulb,
  BatteryCharging,
  Clock,
  MapPin,
  Phone,
  MessageSquare,
  ArrowRight,
  AlertTriangle,
  ShieldCheck,
  Droplets,
  Cpu,
  Volume2
} from 'lucide-react';
import { siteConfig, getWhatsAppLink, siteAsset } from '@/data/siteConfig';
import { products } from '@/data/products';
import { blogTopics } from '@/data/blogs';
import { ProductCard } from '@/components/ProductCard';
import { RepairEstimator } from '@/components/RepairEstimator';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CtaBand } from '@/components/CtaBand';

export const metadata = {
  title: 'Mobile Repair & Electronics in Itahari',
  description:
    'Phone screen, battery and charging repairs in Itahari. Smartphones, accessories, smart home devices and power banks with warranty and delivery across Sunsari and Morang.'
};

const services = [
  {
    href: '/mobile-repair',
    icon: Wrench,
    title: 'Phone repair',
    copy: 'Screens, batteries, charging ports, water damage and software faults.'
  },
  {
    href: '/mobile-phones',
    icon: Smartphone,
    title: 'Smartphones',
    copy: 'Samsung, Redmi, Apple and Vivo handsets with VAT bill and MDMS registration.'
  },
  {
    href: '/gadgets-accessories',
    icon: Headphones,
    title: 'Accessories',
    copy: 'Earbuds, smartwatches, chargers, cables and screen protectors.'
  },
  {
    href: '/smart-home',
    icon: Lightbulb,
    title: 'Smart home',
    copy: 'Wi-Fi bulbs, 16A plugs for geysers and ACs, and security cameras.'
  },
  {
    href: '/power-banks',
    icon: BatteryCharging,
    title: 'Power banks',
    copy: '10,000mAh to 65W laptop banks with warranty and delivery.'
  }
];

const steps = [
  'Bring the phone to the counter or send a photo on WhatsApp.',
  'We check it and tell you the price and how long it takes.',
  'You decide. Nothing is opened before you agree.',
  'We repair it, test it, and give you the warranty slip.'
];

const reviews = [
  {
    quote:
      'The screen on my A52 had green lines. Another shop wanted to keep it for three days. Himal replaced it in under an hour while I waited.',
    name: 'Bikash Shrestha',
    location: 'Itahari'
  },
  {
    quote:
      'Bought a smart plug for the geyser. They explained the 16A rating and set it up on my phone before I left the shop.',
    name: 'Sunita Adhikari',
    location: 'Sundarharaincha'
  }
];

const homeFaqs = [
  {
    question: 'Where is the shop?',
    answer:
      'Sundarharaincha-4, Morang, on the main highway. About 10 minutes from Itahari Chowk. Parking is in front of the store.'
  },
  {
    question: 'How long does a screen or battery replacement take?',
    answer:
      'Usually 45 to 90 minutes for common Samsung, Redmi and iPhone models. We keep parts for regular models in stock.'
  },
  {
    question: 'Are the phones MDMS registered?',
    answer:
      'Yes. Every handset is new, sold with a VAT bill, registered with the Nepal Telecommunications Authority, and carries the manufacturer warranty.'
  },
  {
    question: 'Do you deliver outside Itahari?',
    answer:
      'Same-day delivery in Itahari, Dharan, Biratnagar and Sundarharaincha. Courier to other districts takes 2 to 4 days.'
  },
  {
    question: 'Will you look at my photos or messages?',
    answer:
      'No. Screen and battery work does not need the phone unlocked. We do not open galleries, chats or banking apps.'
  }
];

const commonFaults = [
  { icon: AlertTriangle, title: 'Cracked glass or black display', copy: 'If touch, brightness, or the image has failed, we test the panel before recommending glass-only or full display replacement.', href: '/mobile-repair/screen-replacement' },
  { icon: BatteryCharging, title: 'Fast drain or swollen battery', copy: 'A battery that drops suddenly, heats up, or lifts the back cover needs inspection. Stop charging a visibly swollen phone.', href: '/mobile-repair/battery-replacement' },
  { icon: Volume2, title: 'Loose charging or weak sound', copy: 'Lint is common, but a loose port, quiet earpiece, or failed microphone can also point to a damaged flex or board connection.', href: '/mobile-repair/charging-port-repair' },
  { icon: Droplets, title: 'Water, rain, or moisture damage', copy: 'Power the phone off, do not charge it, and bring it in quickly. Early cleaning gives the board a better chance.', href: '/mobile-repair/water-damage' },
  { icon: Cpu, title: 'Stuck logo or repeated restart', copy: 'We separate software faults from failing storage, battery, or board power before suggesting a reset that could erase data.', href: '/mobile-repair/software-repair' },
  { icon: ShieldCheck, title: 'Privacy before repair', copy: 'Back up important files and use Android Maintenance Mode or iPhone backup. Most hardware repairs do not need access to your private apps.', href: '/repair-policy' }
];

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const guides = blogTopics.filter(post => post.isPillar).slice(0, 3);

  return (
    <div>
      {/* Intro */}
      <section className="border-b border-line bg-surface">
        <div className="container-page py-10 md:py-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <p className="eyebrow">Himal Product and Services · Sundarharaincha / Itahari corridor</p>
              <h1 className="display-1 mt-2">A careful repair starts with a clear explanation.</h1>
              <p className="lede mt-4 max-w-xl">
                We repair phones and electronics at our counter in Sundarharaincha, explain what failed,
                and give you a price before work starts. Most common screen, battery, and charging jobs are
                finished the same day.
              </p>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Link href="/mobile-repair" className="btn-primary">
                  <Wrench className="size-4" aria-hidden="true" />
                  <span>Book a repair</span>
                </Link>
                <Link href="/products" className="btn-outline">
                  <span>See what is in stock</span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>

              <p className="mt-6 text-sm text-muted">
                {siteConfig.address.street}, {siteConfig.address.city} · {siteConfig.openingHours.hours}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted">
                <span className="chip-brand">Free first check</span>
                <span className="chip-brand">Written estimate</span>
                <span className="chip-brand">Repair warranty</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-line bg-canvas">
              <Image
                src={siteAsset('/repair-studio.webp')}
                alt="Phone repair bench at Himal Product and Services"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Common faults */}
      <section className="section border-y border-line bg-canvas">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">Start with the symptom</p>
            <h2 className="display-2 mt-1">Common faults, explained simply</h2>
            <p className="lede mt-2">Not sure what to book? Choose the description that sounds closest. The first check tells us whether it is a part, a connection, software, or moisture.</p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {commonFaults.map(fault => (
              <Link key={fault.href} href={fault.href} className="card card-hover group p-4">
                <fault.icon className="size-5 text-brand-700" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-semibold text-ink group-hover:text-brand-700">{fault.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{fault.copy}</p>
                <span className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-brand-700">See repair details <span aria-hidden="true" className="ml-1">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What the shop does */}
      <section className="section">
        <div className="container-page">
          <h2 className="heading-3">What we do</h2>

          <div className="mt-5 divide-y divide-line border-y border-line">
            {services.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-start gap-4 py-4 hover:bg-white"
              >
                <item.icon className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden="true" />
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-semibold text-ink">{item.title}</span>
                  <span className="mt-0.5 block text-sm leading-6 text-muted">{item.copy}</span>
                </span>
                <ArrowRight className="mt-1 size-4 shrink-0 text-muted" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Repair estimate */}
      <section className="section border-y border-line bg-surface">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2 className="display-2">What will the repair cost?</h2>
            <p className="lede mt-2">
              Pick your brand and the fault. The range covers the part and the labour. The exact price is
              confirmed after we look at the phone.
            </p>
          </div>

          <div className="mt-6">
            <RepairEstimator />
          </div>

          <p className="mt-3 text-sm text-muted">
            Full list with warranty terms:{' '}
            <Link href="/repair-price" className="text-brand-700 underline underline-offset-2">
              repair prices
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="container-page">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="display-2">In stock now</h2>
            <Link href="/products" className="link-arrow">
              <span>All products</span>
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* How a repair works + visit */}
      <section className="section border-y border-line bg-surface">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="display-2">How a repair works</h2>
            <ol className="mt-4 space-y-3">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm leading-6 text-ink-soft">
                  <span className="font-semibold text-muted tabular-nums">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <p className="mt-4 text-sm leading-6 text-muted">
              Most screen and battery jobs are finished while you wait. If a part has to be ordered, we
              tell you the day it will arrive before you leave the phone.
            </p>
          </div>

          <div>
            <h2 className="display-2">Visit the shop</h2>

            <dl className="mt-4 space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-muted" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-ink">Address</dt>
                  <dd className="mt-0.5 leading-6 text-muted">
                    {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.province}
                    <span className="block text-xs">{siteConfig.address.landmark}</span>
                  </dd>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-muted" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-ink">Hours</dt>
                  <dd className="mt-0.5 leading-6 text-muted">
                    {siteConfig.openingHours.days}
                    <span className="block text-xs">{siteConfig.openingHours.hours}</span>
                  </dd>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-muted" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-ink">Phone</dt>
                  <dd className="mt-0.5">
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="text-brand-700 underline underline-offset-2"
                    >
                      {siteConfig.phone}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <MapPin className="size-4" aria-hidden="true" />
                <span>Directions</span>
              </a>
              <Link href="/store-location" className="btn-outline">
                <span>Landmarks</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container-page">
          <h2 className="display-2">What customers say</h2>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {reviews.map(review => (
              <figure key={review.name} className="border-l-2 border-line pl-4">
                <blockquote className="text-sm leading-6 text-ink-soft">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-2 text-xs text-muted">
                  {review.name}, {review.location}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="section border-y border-line bg-surface">
        <div className="container-page">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="display-2">Guides from the bench</h2>
            <Link href="/blog" className="link-arrow">
              <span>All guides</span>
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <ul className="mt-4 divide-y divide-line border-y border-line">
            {guides.map(guide => (
              <li key={guide.id}>
                <Link
                  href={`/blog/${guide.slug}`}
                  className="flex flex-col gap-1 py-3 hover:bg-canvas sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                >
                  <span className="text-sm font-medium text-ink">{guide.title}</span>
                  <span className="shrink-0 text-xs text-muted">{guide.readTime}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 className="display-2">Common questions</h2>
            <div className="mt-4">
              <FAQAccordion faqs={homeFaqs} />
            </div>

            <p className="mt-4 text-sm text-muted">
              Something else?{' '}
              <a
                href={getWhatsAppLink('Hello Himal Product & Services, I have a question: ')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-700 underline underline-offset-2"
              >
                Send a message
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure if it can be fixed?"
        description="Send the phone model and a photo of the problem. We will tell you what it needs and what it costs."
        whatsappMessage="Hello Himal Product & Services, I have a phone I would like checked: "
      />
    </div>
  );
}
