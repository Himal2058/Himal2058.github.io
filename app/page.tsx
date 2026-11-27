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
import { ProductCard } from '@/components/ProductCard';
import { RepairEstimator } from '@/components/RepairEstimator';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CtaBand } from '@/components/CtaBand';
import { RepairQuickStart } from '@/components/RepairQuickStart';

export const metadata = {
  title: 'Battery Repair & Electronic Device Service in Itahari | Himal Electronics',
  description:
    'Battery repair and electronic device service in Sundarharaincha, Morang. Fast battery replacement, phone repair, gadget service with MDMS registered devices and warranty.'
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
  'Bring the device to the workshop or send its model and symptoms on WhatsApp.',
  'We assess the fault and explain the available repair, price and timing.',
  'You approve or decline the estimate before paid work begins.',
  'We complete the agreed repair, test the affected function and explain any applicable warranty.'
];

const homeFaqs = [
  {
    question: 'Where is the shop?',
    answer:
      `The workshop is at ${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.district}. Use the Google Maps link for the exact pin and directions.`
  },
  {
    question: 'Can you confirm repair time and price before I visit?',
    answer:
      'Send the device brand, model and fault by WhatsApp. We can check likely parts and give an initial estimate; final price and timing are confirmed after inspection.'
  },
  {
    question: 'Are the phones MDMS registered?',
    answer:
      'Product listings identify the phone models and warranty details. Message us to confirm current stock, MDMS status and VAT bill details for the exact model before ordering.'
  },
  {
    question: 'Do you deliver outside Itahari?',
    answer:
      siteConfig.policies.delivery
  },
  {
    question: 'Will you look at my photos or messages?',
    answer:
      'Most hardware repairs do not require your passcode. Back up important data first, and do not share passwords or banking details with a repair shop.'
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

  return (
    <div>
      {/* Intro */}
      <section className="premium-hero border-b border-line">
        <div className="container-page py-12 md:py-20">
          <div className="grid items-center gap-9 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <div className="hero-content">
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src={siteAsset('/logo.jpg')}
                  alt=""
                  width={52}
                  height={52}
                  className="size-12 rounded-xl border border-line bg-white object-cover p-0.5 shadow-sm"
                />
                <div>
                  <p className="text-sm font-bold tracking-wide text-ink">Himal Product &amp; Services</p>
                  <p className="mt-0.5 text-xs font-medium text-muted">Local electronics repair · Sundarharaincha, Morang</p>
                </div>
              </div>
              <h1 className="display-1 mt-4 max-w-2xl">Electronic device and battery repair service in Itahari.</h1>
              <p className="lede mt-5 max-w-xl">
                From a phone or Bluetooth speaker to a toy, gadget or household electronic, tell us what stopped working.
                Our workshop is in Sundarharaincha, Morang. We check the device, explain the options, and confirm the price before work starts.
              </p>

              <RepairQuickStart />

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                <Link href="/products" className="btn-outline">
                  <span>Browse products</span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link href="/electronic-device-repair-itahari" className="text-sm font-semibold text-brand-700 underline-offset-4 hover:underline">See Itahari repair services</Link>
              </div>

              <div className="hero-proof-row mt-8">
                <div className="hero-proof-item"><ShieldCheck className="size-4" aria-hidden="true" /><span>Estimate before work</span></div>
                <span className="hero-proof-separator" aria-hidden="true" />
                <div className="hero-proof-item"><Clock className="size-4" aria-hidden="true" /><span>Time confirmed after diagnosis</span></div>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
                <MapPin className="size-4 text-brand-700" aria-hidden="true" />
                <span>{siteConfig.address.street}, {siteConfig.address.city}</span>
                <span className="text-line-strong" aria-hidden="true">·</span>
                <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 underline-offset-4 hover:underline">Get directions</a>
                <span className="text-line-strong" aria-hidden="true">·</span>
                <a href={`tel:${siteConfig.phoneRaw}`} className="min-h-11 inline-flex items-center font-semibold text-ink underline-offset-4 hover:underline">Call {siteConfig.phone}</a>
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
                <span className="hero-image-caption-mark overflow-hidden bg-white p-0.5">
                  <Image src={siteAsset('/logo.jpg')} alt="Himal Product & Services logo" width={40} height={40} className="size-full rounded-lg object-cover" />
                </span>
                <span><strong>Himal Product & Services</strong><small>Repair workshop · Sundarharaincha, Morang</small></span>
              </div>
              <span className="hero-image-tag"><span className="hero-image-tag-dot" /> REPAIR STUDIO</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-b border-line bg-surface">
        <div className="container-page py-12">
          <div className="max-w-3xl">
            <p className="eyebrow">Battery repair &amp; sustainable electronics</p>
            <h2 className="display-2 mt-2">Why battery repair and recycling matter</h2>
            <p className="lede mt-4">
              A failing battery is one of the most common reasons phones slow down or shut off unexpectedly.
              Our workshop replaces swollen, degraded, and damaged batteries with tested cells that restore
              full-day endurance. We also accept old batteries for responsible recycling, helping reduce
              electronic waste in Sunsari and Morang.
            </p>
            <p className="mt-4">
              Extending the life of your device through repair is a form of practical renewable energy
              thinking — keeping working hardware in use longer means fewer new devices manufactured,
              fewer raw materials extracted, and less e-waste in landfills. Whether you need a battery
              replacement, screen repair, or board-level diagnosis, our bench helps your electronics last
              longer while protecting the environment.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink text-white">
        <div className="container-page grid gap-4 py-5 sm:grid-cols-4">
          <div><p className="text-2xl font-semibold">Before repair</p><p className="mt-1 text-xs text-white/60">Estimate explained first</p></div>
          <div><p className="text-xl font-semibold">{siteConfig.openingHours.hours}</p><p className="mt-1 text-xs text-white/60">{siteConfig.openingHours.days}</p></div>
          <div><p className="text-2xl font-semibold">Sundarharaincha</p><p className="mt-1 text-xs text-white/60">Workshop in Morang · serving Itahari area</p></div>
          <div><p className="text-2xl font-semibold">WhatsApp ready</p><p className="mt-1 text-xs text-white/60">Send a photo and model</p></div>
        </div>
      </section>

      <section className="section border-b border-line bg-surface">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">More than mobile repair</p>
            <h2 className="display-2 mt-1">Can Himal assess phones, speakers, toys and other electronics?</h2>
            <p className="lede mt-2">Yes. Himal Product and Services accepts repair enquiries for everyday electronics. For larger devices or less common models, send a photo, brand, model and fault first so the shop can confirm whether assessment is available.</p>
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
            <h2 className="display-2 mt-1">What common phone faults can the workshop assess?</h2>
            <p className="lede mt-2">The workshop assesses screen, battery, charging, audio, water exposure and software symptoms. Choose the closest description and share the model so the team can advise the next step.</p>
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
              <h2 className="display-2 mt-1">What can you repair, buy or set up at Himal?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">Himal offers electronics repair, smartphones, accessories, power banks and smart-home devices. Ask the shop to confirm current product stock and repair availability.</p>
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
      <section id="repair-process" className="section border-y border-line bg-surface">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2 className="display-2">How much might a phone repair cost?</h2>
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

      <section className="section">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">A real local workshop</p>
            <h2 className="display-2 mt-1">What does electronics diagnosis look like?</h2>
            <p className="mt-2 text-sm leading-6 text-muted">These workshop and device photos help you understand the diagnosis and repair environment before you visit. Exact repair options depend on inspection and parts availability.</p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <figure className="card overflow-hidden"><div className="relative aspect-[4/3]"><Image src={siteAsset('/images/repair 2.jpg')} alt="Technician checking an electronics circuit board" fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" /></div><figcaption className="p-3 text-sm text-muted">Circuit board diagnosis</figcaption></figure>
            <figure className="card overflow-hidden"><div className="relative aspect-[4/3]"><Image src={siteAsset('/images/repair 3.jpg')} alt="Electronics board testing with diagnostic equipment" fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" /></div><figcaption className="p-3 text-sm text-muted">Bench testing</figcaption></figure>
            <figure className="card overflow-hidden"><div className="relative aspect-[4/3]"><Image src={siteAsset('/images/repair.jpg')} alt="Small electronic devices and components prepared for repair" fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" /></div><figcaption className="p-3 text-sm text-muted">Small device repair</figcaption></figure>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="container-page">
          <div className="mb-8">
            <p className="eyebrow">Shop by what you need</p>
            <h2 className="display-2 mt-1">What electronics and accessories can you shop for?</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">Browse phones, audio accessories, smart-home devices and power banks. Contact the shop to confirm availability before ordering.</p>
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
            <h2 className="display-2">Which products can you order from the shop?</h2>
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
            <h2 className="display-2">What happens after you request a repair?</h2>
            <ol className="mt-4 space-y-3">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm leading-6 text-ink-soft">
                  <span className="font-semibold text-muted tabular-nums">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <p className="mt-4 text-sm leading-6 text-muted">
              Repair time depends on the device, fault and parts availability. We explain the expected timing after diagnosis and before you approve the work.
            </p>
          </div>

          <div className="rounded-card border border-brand-200 bg-white p-5 shadow-[var(--shadow-soft)] sm:p-6">
            <p className="eyebrow">Clear, careful, and on your terms</p>
            <h2 className="display-2 mt-1">How do you stay in control of a repair?</h2>
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
            <h2 className="display-2 mt-1">Where is the Himal repair workshop?</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              The Himal workshop is at {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.province}. {siteConfig.address.landmark}
            </p>
            <p className="mt-2 text-sm text-muted">{siteConfig.openingHours.days} · {siteConfig.openingHours.hours}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MapPin className="size-4" aria-hidden="true" />
                <span>Get directions</span>
              </a>
              <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">Google Business Profile</a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="btn-outline">Facebook page</a>
              <a href={siteConfig.social.hamrobazaar} target="_blank" rel="noopener noreferrer" className="btn-outline">Shop on Hamrobazaar</a>
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
              <h2 className="display-2 mt-1">How can I share feedback about a repair or purchase?</h2>
              <p className="mt-2 text-sm leading-6 text-ink-soft">Post a service review or send private feedback to the shop through WhatsApp. Tell us what went well and what we could improve.</p>
            </div>
            <Link href="/feedback" className="btn-primary shrink-0">Leave feedback <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Need help with an electronics fault?"
        description="Send the device type, model and symptoms. We will confirm assessment availability, the estimate and timing before paid work starts."
        whatsappMessage="Hello Himal Product & Services, I need help with an electronics repair. Device type: __. Brand/model: __. Fault: __. My town: __."
      />

      {/* FAQ */}
      <section className="section">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 className="display-2">What do customers ask Himal Product and Services?</h2>
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

      <div className="container-page pb-8 text-center text-sm text-muted">
        Need practical advice?{' '}
        <Link href="/blog" className="font-medium text-brand-700 underline-offset-2 hover:underline">
          Browse repair and product guides
        </Link>
        .
      </div>

    </div>
  );
}
