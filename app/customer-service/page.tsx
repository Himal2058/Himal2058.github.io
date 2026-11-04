import Link from 'next/link';
import { ArrowRight, BadgeCheck, CreditCard, PackageCheck, RotateCcw, Truck, Wrench, Star } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'Customer Service and Help Center',
  description: 'Get help with an order, delivery, product, payment, warranty, or phone repair from Himal Product and Services.'
};

const helpTopics = [
  { icon: PackageCheck, title: 'Orders and products', copy: 'Ask about availability, product details, or an order you placed.', href: '/products' },
  { icon: Truck, title: 'Delivery and pickup', copy: 'Check local delivery, courier, and store pickup options.', href: '/delivery-pickup' },
  { icon: CreditCard, title: 'Payments and COD', copy: 'Ask which payment and cash-on-delivery options are available for your order.', href: '/terms-and-conditions' },
  { icon: Wrench, title: 'Repair support', copy: 'Describe a device fault and get guidance on the next step.', href: '/mobile-repair' },
  { icon: Star, title: 'Feedback and reviews', copy: 'Rate a service and tell us what we can improve.', href: '/feedback' },
  { icon: BadgeCheck, title: 'Warranty', copy: 'Find warranty coverage and what to bring when you visit.', href: '/warranty' },
  { icon: RotateCcw, title: 'Returns and repair policy', copy: 'Read the policies before arranging a return or repair follow-up.', href: '/repair-policy' }
];

const questions = [
  ['How do I ask about a product?', 'Choose Orders and products above, or send the shop a message with the product name or link. We will confirm current availability and price.'],
  ['Can I send a photo of my phone problem?', 'Yes. Use the Customer help button at the bottom of the page to describe the issue and select a photo. On supported phones you can share it with WhatsApp; otherwise attach it in the WhatsApp chat after it opens.'],
  ['How do I check delivery or pickup?', 'Send your location and product or repair details through the help form. The team will confirm whether local delivery, courier, or pickup is available for your request.'],
  ['When will the shop reply?', `The shop answers during its listed hours: ${siteConfig.openingHours.days}, ${siteConfig.openingHours.hours}.`]
];

export default function CustomerServicePage() {
  return (
    <div className="pb-12 md:pb-16">
      <div className="container-page pt-6"><Breadcrumbs items={[{ name: 'Customer service', url: '/customer-service' }]} /></div>
      <section className="border-b border-line bg-surface">
        <div className="container-page py-10 md:py-14">
          <p className="eyebrow">Himal help center</p>
          <h1 className="display-1 mt-2 max-w-3xl">What can we help you with?</h1>
          <p className="lede mt-3 max-w-2xl">Find answers about orders, delivery, payment, repairs, and warranty—or send a message directly to our shop team.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#send-message" className="btn-primary"><span>Message customer service</span><ArrowRight className="size-4" aria-hidden="true" /></a>
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn-outline">Call {siteConfig.phone}</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="max-w-2xl"><p className="eyebrow">Browse help topics</p><h2 className="display-2 mt-1">Choose what you need help with</h2></div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {helpTopics.map(topic => (
              <Link key={topic.title} href={topic.href} className="card card-hover group flex min-h-40 gap-4 p-5">
                <span className="icon-tile size-11 shrink-0 rounded-xl"><topic.icon className="size-5" aria-hidden="true" /></span>
                <span><span className="block font-semibold text-ink group-hover:text-brand-700">{topic.title}</span><span className="mt-1 block text-sm leading-6 text-muted">{topic.copy}</span><span className="mt-2 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-brand-700">Get help <ArrowRight className="size-4" aria-hidden="true" /></span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="send-message" className="section scroll-mt-24 border-y border-line bg-canvas">
        <div className="container-page grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div>
            <p className="eyebrow">Talk to a person</p>
            <h2 className="display-2 mt-1">Send our team the details</h2>
            <p className="mt-3 text-sm leading-6 text-muted">Tell us what happened, include the device or product, and we’ll reply on WhatsApp. For a photo, use the Customer help button or attach it after WhatsApp opens.</p>
            <div className="mt-5 rounded-card border border-line bg-white p-4 text-sm leading-6 text-ink-soft">
              <strong className="text-ink">Shop hours</strong><br />{siteConfig.openingHours.days}<br />{siteConfig.openingHours.hours}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-4xl">
          <p className="eyebrow">Quick answers</p><h2 className="display-2 mt-1">Common customer questions</h2>
          <div className="mt-5 divide-y divide-line border-y border-line">
            {questions.map(([question, answer]) => <details key={question} className="group py-4"><summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink marker:hidden">{question}<span className="text-xl text-brand-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-3xl pb-2 text-sm leading-6 text-muted">{answer}</p></details>)}
          </div>
        </div>
      </section>
    </div>
  );
}
