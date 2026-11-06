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
  title: 'Electronics Repair & Products in Eastern Nepal | Himal',
  description:
    'Phone and electronics repair in Sundarharaincha, Morang. Ask about speakers, toys, gadgets, TVs and home electronics, with product delivery and repair enquiries from across Nepal.'
};

const repairCategories = [
  { title: 'Phones & tablets', detail: 'Screens, batteries, charging, audio, software and board diagnosis.', icon: Smartphone },
  { title: 'Audio & speakers', detail: 'Bluetooth speakers, wired audio, earbuds and sound systems: power, charging, pairing or sound faults.', icon: Headphones },
  { title: 'Toys & small gadgets', detail: 'Battery-powered toys, handheld gadgets, controllers and small electronic devices.', icon: Cpu },
  { title: 'TV & home entertainment', detail: 'TVs, set-top boxes and related devices. Message the brand, model and fault first.', icon: Lightbulb },
  { title: 'Home & household electronics', detail: 'Small appliances and household electronics assessed by device and parts availability.', icon: Wrench },
  { title: 'Laptops & computer accessories', detail: 'Power, charging, connection and accessory problems. Send the model and symptoms to check availability.', icon: BatteryCharging }
];

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

const productCategories = [
  { title: 'Mobile phones', href: '/mobile-phones', image: '/images/phone-lineup.jpg', alt: 'Selection of smartphones', note: 'Find a phone that fits your budget' },
  { title: 'Audio & accessories', href: '/gadgets-accessories', image: '/images/headphones-product.webp', alt: 'Headphones from the electronics range', note: 'Earbuds, audio and everyday add-ons' },
  { title: 'Smart home', href: '/smart-home', image: '/images/smart-wifi-switch.jpg', alt: 'Wi-Fi smart switch for home control', note: 'Simple connected home devices' },
  { title: 'Power banks', href: '/power-banks', image: '/images/my-power-20000mah.jpg', alt: 'MY POWER 20,000mAh fast charging power bank', note: 'Portable power for busy days' }
];

const steps = [
  'Bring the phone to the counter or send a photo on WhatsApp.',
  'We check it and tell you the price and how long it takes.',
  'You decide. Nothing is opened before you agree.',
  'We repair it, test it, and give you the warranty slip.'
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
      <section className="premium-hero border-b border-line">
        <div className="container-page py-12 md:py-20">
          <div className="grid items-center gap-9 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <div className="hero-content">
              <p className="hero-kicker"><span className="hero-kicker-dot" /> HIMAL PRODUCT & SERVICES <span className="hero-kicker-divider">/</span> SUNDARHARAINCHA</p>
              <h1 className="display-1 mt-4 max-w-2xl">Repair help for the tech your family uses every day.</h1>
              <p className="lede mt-5 max-w-xl">
                From a phone or Bluetooth speaker to a toy, gadget or household electronic, tell us what stopped working.
                Our workshop is in Sundarharaincha, Morang. We check the device, explain the options, and confirm the price before work starts.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/electronic-device-repair-itahari" className="btn-primary">
                  <Wrench className="size-4" aria-hidden="true" />
                  <span>Repair electronics in Itahari</span>
                </Link>
                <Link href="/products" className="btn-outline">
                  <span>Shop products</span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="hero-proof-row mt-8">
                <div className="hero-proof-item"><ShieldCheck className="size-4" aria-hidden="true" /><span>Estimate before work</span></div>
                <span className="hero-proof-separator" aria-hidden="true" />
                <div className="hero-proof-item"><Clock className="size-4" aria-hidden="true" /><span>Time confirmed after diagnosis</span></div>
              </div>
              <div className="mt-7 flex items-center gap-2 text-sm text-muted">
                <MapPin className="size-4 text-brand-700" aria-hidden="true" />
                <span>{siteConfig.address.street}, {siteConfig.address.city}</span>
                <span className="text-line-strong" aria-hidden="true">·</span>
                <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 underline-offset-4 hover:underline">Get directions</a>
              </div>
            </div>

            <div className="hero-media relative aspect-[5/4] overflow-hidden rounded-[1.75rem] border border-white/80 bg-canvas">
              <Image
                src={siteAsset('/repair-studio.webp')}
                alt="Phone repair bench at Himal Product and Services"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="hero-photo object-cover"
              />
              <div className="hero-image-caption">
                <span className="hero-image-caption-mark"><Wrench className="size-4" aria-hidden="true" /></span>
                <span><strong>Careful work. Clear answers.</strong><small>Phone repair in Sundarharaincha, Morang</small></span>
              </div>
              <span className="hero-image-tag"><span className="hero-image-tag-dot" /> REPAIR STUDIO</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-b border-line bg-surface">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">More than mobile repair</p>
            <h2 className="display-2 mt-1">One place to ask about your electronics</h2>
            <p className="lede mt-2">We assess a wide range of everyday electronics. For larger devices or less common models, message us first with a photo, brand, model and fault so we can confirm whether it is practical to bring or send in.</p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {repairCategories.map(({ title, detail, icon: Icon }) => (
              <Link key={title} href="/electronics-repair" className="card premium-card card-hover group p-5">
                <Icon className="size-5 text-brand-700" aria-hidden="true" />
                <h3 className="mt-3 text-base font-semibold text-ink group-hover:text-brand-700">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{detail}</p>
                <span className="mt-3 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-brand-700">See repair options <ArrowRight className="size-4" aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
          <p className="mt-4 text-xs leading-5 text-muted">Repair depends on the fault, parts, device condition and whether the model can be serviced. We confirm availability and any diagnostic charge before work begins.</p>
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
              <Link key={fault.href} href={fault.href} className="card premium-card card-hover group p-4">
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
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="eyebrow">One local shop, help for everyday tech</p>
              <h2 className="display-2 mt-1">Repair, shop, and set up with confidence</h2>
            </div>
            <Link href="/contact" className="link-arrow">
              <span>Talk to our team</span>
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="card card-hover group flex min-h-36 items-start gap-4 p-5"
              >
                <span className="icon-tile size-11 shrink-0 rounded-xl group-hover:bg-brand-100">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-semibold text-ink group-hover:text-brand-700">{item.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-muted">{item.copy}</span>
                  <span className="mt-3 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-brand-700">
                    Explore <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </span>
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
          <div className="mb-8">
            <p className="eyebrow">Shop by what you need</p>
            <h2 className="display-2 mt-1">Useful tech for work, study and home</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {productCategories.map(category => (
                <Link key={category.title} href={category.href} className="group overflow-hidden rounded-card border border-line bg-white transition-shadow hover:shadow-[var(--shadow-soft)]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-canvas">
                    <Image src={category.image} alt={category.alt} fill sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                  </div>
                  <div className="flex items-center justify-between gap-3 p-4">
                    <span><span className="block text-sm font-semibold text-ink">{category.title}</span><span className="mt-1 block text-xs leading-5 text-muted">{category.note}</span></span>
                    <ArrowRight className="size-4 shrink-0 text-brand-700 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
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

          <div className="rounded-card border border-brand-200 bg-white p-5 shadow-[var(--shadow-soft)] sm:p-6">
            <p className="eyebrow">Clear, careful, and on your terms</p>
            <h2 className="display-2 mt-1">You stay in control of the repair</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              We explain what we find, the likely cost, and the time needed before work starts. You can ask questions, take the estimate home, or say no.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              <li className="flex gap-3"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-brand-700" aria-hidden="true" /><span>No repair begins without your approval.</span></li>
              <li className="flex gap-3"><Clock className="mt-0.5 size-4 shrink-0 text-brand-700" aria-hidden="true" /><span>We share a realistic turnaround before you leave the phone.</span></li>
              <li className="flex gap-3"><Wrench className="mt-0.5 size-4 shrink-0 text-brand-700" aria-hidden="true" /><span>After repair, we test the affected feature with you.</span></li>
            </ul>
            <Link href="/repair-policy" className="btn-outline mt-5">
              <span>Read our repair policy</span>
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Find the workshop */}
      <section className="section border-y border-line bg-surface">
        <div className="container-page grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">Visit us in person</p>
            <h2 className="display-2 mt-1">Find our workshop</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.province}. {siteConfig.address.landmark}
            </p>
            <p className="mt-2 text-sm text-muted">{siteConfig.openingHours.days} · {siteConfig.openingHours.hours}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MapPin className="size-4" aria-hidden="true" />
                <span>Get directions</span>
              </a>
              <Link href="/store-location" className="btn-outline">More visit details</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-line shadow-[var(--shadow-soft)]">
            <iframe
              title="Map showing Himal Product and Services in Sundarharaichha"
              src={`https://maps.google.com/maps?q=${siteConfig.geo.latitude}%2C${siteConfig.geo.longitude}&ll=${siteConfig.geo.latitude}%2C${siteConfig.geo.longitude}&z=20&output=embed`}
              width="100%"
              height="360"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full sm:h-80"
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container-page">
          <div className="flex flex-col gap-5 rounded-card border border-brand-200 bg-brand-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="max-w-2xl">
              <p className="eyebrow">Customer feedback</p>
              <h2 className="display-2 mt-1">Had a repair or bought from us?</h2>
              <p className="mt-2 text-sm leading-6 text-ink-soft">Post a service review or send private feedback to the shop through WhatsApp. Tell us what went well and what we could improve.</p>
            </div>
            <Link href="/feedback" className="btn-primary shrink-0">Leave feedback <ArrowRight className="size-4" aria-hidden="true" /></Link>
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
