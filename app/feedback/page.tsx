import Link from 'next/link';
import { ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FeedbackForm } from '@/components/FeedbackForm';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'Customer Feedback and Service Reviews | Himal Product and Services',
  description: 'Rate your repair, purchase, delivery or support experience with Himal Product and Services in Morang, Nepal.'
};

export default function FeedbackPage() {
  return (
    <div className="pb-12 md:pb-16">
      <div className="container-page pt-6"><Breadcrumbs items={[{ name: 'Customer feedback', url: '/feedback' }]} /></div>
      <section className="border-b border-line bg-surface">
        <div className="container-page py-8 md:py-10">
          <p className="eyebrow">Your voice helps us improve</p>
          <h1 className="display-1 mt-2 max-w-3xl">How did we do?</h1>
          <p className="lede mt-3 max-w-2xl">Whether you visited our workshop, bought a product, or contacted us for help, tell us what the experience was like. Honest feedback helps our team improve the service we provide in eastern Nepal.</p>
        </div>
      </section>
      <div className="container-page mt-8 grid items-start gap-8 lg:grid-cols-[1fr_0.65fr]">
        <FeedbackForm />
        <aside className="space-y-4">
          <section className="rounded-card border border-line bg-white p-5">
            <ShieldCheck className="size-5 text-brand-700" aria-hidden="true" />
            <h2 className="mt-3 font-semibold text-ink">Your choice, your privacy</h2>
            <p className="mt-2 text-sm leading-6 text-muted">When online storage is connected, your review is shared after shop approval. Keep the private edit key shown after posting if you want to update it from another device. WhatsApp feedback goes directly to our shop at {siteConfig.phone}.</p>
          </section>
          <section className="rounded-card border border-line bg-white p-5">
            <MessageSquare className="size-5 text-brand-700" aria-hidden="true" />
            <h2 className="mt-3 font-semibold text-ink">Need help with an ongoing issue?</h2>
            <p className="mt-2 text-sm leading-6 text-muted">For an unresolved repair or order concern, contact the team directly so we can help with the details.</p>
            <Link href="/customer-service" className="link-arrow mt-3">Open Help Center <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </section>
          <section className="rounded-card border border-line bg-white p-5">
            <h2 className="font-semibold text-ink">Want to leave a public Google review?</h2>
            <p className="mt-2 text-sm leading-6 text-muted">Use your own Google account to post a public review on our business profile.</p>
            <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="link-arrow mt-3">Open Himal on Google Maps <ArrowRight className="size-4" aria-hidden="true" /></a>
          </section>
        </aside>
      </div>
    </div>
  );
}
