import Link from 'next/link';
import { ArrowRight, BatteryCharging, Headphones, Lightbulb, MapPin, MessageSquare, PackageCheck, Smartphone, Wrench, Cpu } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaBand } from '@/components/CtaBand';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';

export const metadata = {
  title: 'Electronics Repair in Eastern Nepal | Himal Product and Services',
  description: 'Ask about repairs for phones, speakers, toys, gadgets, TVs, laptops and household electronics. Workshop in Sundarharaincha, Morang; contact us to confirm service and courier options.'
};

const groups = [
  { title: 'Mobile phones & tablets', icon: Smartphone, examples: 'Broken display, battery, charging port, microphone, speaker, water exposure, software and board faults.', note: 'Phone repair details and common service information are available online.' },
  { title: 'Speakers, audio & earbuds', icon: Headphones, examples: 'Bluetooth pairing, no sound, distorted sound, battery or charging problems, loose ports and damaged cables.', note: 'For speaker systems, include a photo of the label and tell us if the device is portable or mains-powered.' },
  { title: 'Toys, controllers & small gadgets', icon: Cpu, examples: 'Battery contacts, charging, buttons, switches, motors, wiring and power faults in electronic toys and handheld devices.', note: 'Please include the age/model label and say whether the device uses replaceable cells or a rechargeable battery.' },
  { title: 'TV & home entertainment', icon: Lightbulb, examples: 'Power, display, sound, remote, set-top box and connection problems.', note: 'Large screens need transport planning. Contact us with screen size, brand, model and symptoms before bringing one in.' },
  { title: 'Laptops & computer accessories', icon: BatteryCharging, examples: 'Charging and power symptoms, ports, cables, adapters, keyboards and accessory connection faults.', note: 'Share the exact model and charger details. Data recovery and board-level work are assessed case by case.' },
  { title: 'Household electronics & appliances', icon: Wrench, examples: 'Small appliances, power supplies, switches, fans, kitchen gadgets, smart devices and other electronic equipment.', note: 'For heavy or installed equipment such as refrigerators, washing machines or air conditioners, ask first. We confirm whether workshop or arranged service is available.' }
];

const steps = [
  ['Send the details', 'Message us the device type, brand/model, what happened, your town, and one or two clear photos if useful.'],
  ['We check availability', 'We will tell you whether the device can be assessed here, whether you should bring it in, and whether parts or specialist service may be needed.'],
  ['Approve the estimate', 'After inspection, we explain the fault, price, expected time and repair terms. We do not begin paid work until you agree.'],
  ['Test and collect', 'We check the repaired function with you and explain any warranty on the specific work or replacement part.']
];

export default function ElectronicsRepairPage() {
  return (
    <div className="pb-12 md:pb-16">
      <div className="container-page pt-6"><Breadcrumbs items={[{ name: 'Electronics repair', url: '/electronics-repair' }]} /></div>

      <section className="premium-hero border-b border-line">
        <div className="container-page py-10 md:py-14">
          <p className="hero-kicker"><span className="hero-kicker-dot" /> REPAIR SUPPORT FROM KOSHI PROVINCE</p>
          <h1 className="display-1 mt-4 max-w-4xl">From a tiny toy to the TV in your living room.</h1>
          <p className="lede mt-4 max-w-3xl">Himal Product and Services helps customers in Sundarharaincha, Itahari, Dharan, Biratnagar and nearby eastern Nepal with everyday electronics repair enquiries. If you are elsewhere in Nepal, contact us before sending a device so we can confirm safe courier and repair options.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={getWhatsAppLink('Namaste Himal Product and Services. I need a repair assessment. Device type: __. Brand/model: __. Problem: __. My town/district: __. I can send a photo: yes/no. Please confirm availability and whether I should bring or courier it.')} target="_blank" rel="noopener noreferrer" className="btn-primary"><MessageSquare className="size-4" aria-hidden="true" />Ask about a repair</a>
            <Link href="/mobile-repair" className="btn-outline">Phone repair and estimate <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5"><MapPin className="size-4 text-brand-700" aria-hidden="true" />Workshop: {siteConfig.address.street}, Morang</span>
            <span className="inline-flex items-center gap-1.5"><PackageCheck className="size-4 text-brand-700" aria-hidden="true" />Courier-in only after we confirm arrangements</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="max-w-2xl"><p className="eyebrow">What can we check?</p><h2 className="display-2 mt-1">Tell us what stopped working</h2><p className="lede mt-2">We start with a diagnosis. A listed device is an invitation to ask, not a promise that every fault or model can be repaired. Parts, safety, age and damage affect availability.</p></div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map(({ title, icon: Icon, examples, note }) => <article key={title} className="card premium-card p-5">
              <Icon className="size-5 text-brand-700" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{examples}</p>
              <p className="mt-3 border-t border-line pt-3 text-xs leading-5 text-muted">{note}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-surface">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="eyebrow">No guesswork</p><h2 className="display-2 mt-1">A clear repair journey</h2><p className="mt-3 text-sm leading-6 text-muted">You stay in control at every step. If a repair is not practical or the quote is not right for you, you can decline after hearing the assessment.</p></div>
          <ol className="grid gap-3 sm:grid-cols-2">{steps.map(([title, copy], i) => <li key={title} className="rounded-card border border-line bg-white p-4"><span className="text-xs font-semibold text-brand-700">STEP {i + 1}</span><h3 className="mt-1 font-semibold text-ink">{title}</h3><p className="mt-1 text-sm leading-6 text-muted">{copy}</p></li>)}</ol>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <article className="rounded-card border border-line bg-surface p-5"><h2 className="text-lg font-semibold text-ink">Nearby in eastern Nepal</h2><p className="mt-2 text-sm leading-6 text-muted">Our workshop is in Sundarharaincha-4, Morang, serving repair enquiries from the Itahari–Biratnagar corridor, Dharan and surrounding Sunsari and Morang communities. Call before travelling with a large or heavy device.</p><Link href="/service-areas" className="link-arrow mt-3">View service area details <ArrowRight className="size-4" aria-hidden="true" /></Link></article>
          <article className="rounded-card border border-line bg-surface p-5"><h2 className="text-lg font-semibold text-ink">From other parts of Nepal?</h2><p className="mt-2 text-sm leading-6 text-muted">We can discuss courier-in repairs for suitable devices. Message first: we will confirm whether the device is serviceable, how to pack it, who pays transport, and the return arrangement before you send it.</p><a href={getWhatsAppLink('Namaste, I am in __ district and want to ask about sending my __ (brand/model) for repair. The fault is __. Please confirm if courier-in service is available and explain packing, transport cost and return delivery before I send it.')} target="_blank" rel="noopener noreferrer" className="link-arrow mt-3">Ask about courier-in service <ArrowRight className="size-4" aria-hidden="true" /></a></article>
        </div>
      </section>

      <CtaBand title="Not sure where to start?" description="Send the device type, model, what happened, and your town. A photo of the label or fault can help us guide you." whatsappMessage="Namaste Himal Product and Services. I need help with an electronics repair. Device: __. Brand/model: __. Problem: __. Town/district: __. Please advise availability." />
    </div>
  );
}
