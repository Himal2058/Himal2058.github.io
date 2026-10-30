import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  Clock,
  Calendar,
  ArrowLeft,
  MessageSquare,
  List,
  PenLine
} from 'lucide-react';
import { blogTopics, getBlogBySlug } from '@/data/blogs';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQAccordion } from '@/components/FAQAccordion';
import { GuideCard } from '@/components/GuideCard';
import { CtaBand } from '@/components/CtaBand';
import { JsonLd, getArticleSchema } from '@/components/JsonLd';
import { contextualInternalLinks } from '@/data/internalLinks';
import { renderMarkdownLite } from '@/lib/markdown';

interface Props {
  params: Promise<{ slug: string }>;
}

const clusterNames: Record<string, string> = {
  'mobile-repair': 'Mobile repair',
  'mobile-phones': 'Smartphones',
  'gadgets-accessories': 'Gadgets & accessories',
  'smart-home': 'Smart home',
  'power-banks': 'Power banks'
};

export async function generateStaticParams() {
  return blogTopics.map(post => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return { title: 'Article not found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }]
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedArticles = blogTopics
    .filter(item => item.cluster === post.cluster && item.id !== post.id)
    .slice(0, 3);
  const contextualLink = contextualInternalLinks[post.slug];
  const clusterLabel = clusterNames[post.cluster] ?? post.cluster;

  const outline = (
    <ol className="space-y-2.5">
      {post.outline.map((item, index) => (
        <li key={item} className="flex gap-2.5 text-sm leading-6 text-muted">
          <span className="mt-0.5 font-display text-[11px] font-semibold tabular-nums text-brand-700">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );

  return (
    <div className="pb-12 md:pb-16">
      <JsonLd
        data={getArticleSchema({
          title: post.title,
          description: post.excerpt,
          slug: post.slug,
          publishedDate: post.publishedDate,
          image: post.image
        })}
      />

      <div className="container-page pt-6">
        <Breadcrumbs
          items={[
            { name: 'Guides & blog', url: '/blog' },
            { name: post.title, url: `/blog/${post.slug}` }
          ]}
        />
      </div>

      <div className="container-page pt-6">
        {/* Article header */}
        <header className="max-w-3xl">
          <p className="text-sm text-muted">
            <Link href={post.parentClusterUrl} className="hover:text-brand-700 hover:underline hover:underline-offset-2">
              {clusterLabel}
            </Link>
          </p>

          <h1 className="display-1 mt-2 text-balance">{post.h1}</h1>
          <p className="lede mt-3">{post.excerpt}</p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-line py-2.5 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5">
              <PenLine className="size-3.5" aria-hidden="true" />
              Himal technical desk
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-3.5" aria-hidden="true" />
              {post.publishedDate}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" aria-hidden="true" />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Hero image */}
        <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-card border border-line bg-white">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Mobile outline */}
        <details className="mt-5 rounded-card border border-line bg-surface p-4 lg:hidden">
          <summary className="flex cursor-pointer items-center gap-2 text-sm font-medium text-ink">
            <List className="size-4 text-muted" aria-hidden="true" />
            <span>Guide outline ({post.outline.length} sections)</span>
          </summary>
          <div className="mt-3 border-t border-line pt-3">{outline}</div>
        </details>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start">
          {/* Main column */}
          <div className="min-w-0">
            {post.content ? (
              <div
                className="prose-page"
                dangerouslySetInnerHTML={{ __html: renderMarkdownLite(post.content) }}
              />
            ) : (
              <div className="space-y-6">
                <div className="rounded-card border border-line bg-surface p-4">
                  <p className="text-sm font-semibold text-ink">The short answer</p>
                  <p className="mt-1 text-sm leading-6 text-ink-soft">{post.problemSolved}</p>
                </div>

                <div className="prose-page">
                  <h2>What to know before you decide</h2>
                  <p>
                    The notes below are the same questions we use at the counter. Start with the simple
                    checks, write down the device model, and avoid forcing a connector or opening a sealed
                    battery if the problem is getting worse.
                  </p>
                </div>

                <ol className="space-y-3">
                  {post.outline.map((item, index) => (
                    <li key={item} className="flex gap-3 border-b border-line pb-3">
                      <span className="text-sm font-semibold tabular-nums text-muted">{index + 1}.</span>
                      <div>
                        <p className="text-sm font-semibold text-ink">{item}</p>
                        <p className="mt-1 text-sm leading-6 text-muted">
                          We check this early because it separates a quick adjustment from a part that needs
                          testing. Bring the model number or a clear photo if you are unsure what you are seeing.
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="prose-page">
                  <h2>How we handle it in the workshop</h2>
                  <p>
                    We begin with a visual check and a short diagnostic. You get the likely cause, the repair
                    option, and an estimate before any paid work starts. If a part has to be ordered, we tell
                    you the expected arrival time instead of keeping the phone without an update.
                  </p>
                  <p>
                    After the repair, we test the original symptom and the nearby functions that could be
                    affected, such as touch, charging, microphone, camera, or wireless connection. The exact
                    warranty depends on the part and service, and it is written on your receipt.
                  </p>
                </div>
              </div>
            )}

            {/* FAQs */}
            {post.faqs && post.faqs.length > 0 && (
              <section className="mt-10">
                <h2 className="heading-3">Common questions</h2>
                <div className="mt-3">
                  <FAQAccordion faqs={post.faqs} />
                </div>
              </section>
            )}

            {/* Contextual service link */}
            {contextualLink && (
              <section className="mt-10 rounded-card border border-line bg-surface p-5" aria-labelledby="contextual-next-step">
                <h2 id="contextual-next-step" className="text-base font-semibold text-ink">
                  {contextualLink.heading}
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {contextualLink.before}
                  <Link href={contextualLink.href}>{contextualLink.anchor}</Link>
                  {contextualLink.after}
                </p>
                <Link
                  href={contextualLink.href}
                  className="mt-3 inline-block text-sm text-brand-700 hover:underline hover:underline-offset-2"
                >
                  Open the service page
                </Link>
              </section>
            )}

            <div className="mt-8 border-t border-line pt-5">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-brand-700 hover:underline hover:underline-offset-2"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                <span>All guides</span>
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-card border border-line bg-surface p-4">
                <p className="text-sm font-medium text-ink">In this guide</p>
                <div className="mt-2 max-h-[26rem] overflow-y-auto pr-1">{outline}</div>
              </div>

              <div className="rounded-card border border-line bg-surface p-5">
                <MessageSquare className="size-4 text-muted" aria-hidden="true" />
                <p className="mt-2 text-sm font-semibold text-ink">Still not sure about your device?</p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  The first bench check is free. Nothing starts until you agree to the price.
                </p>
                <Link href="/contact" className="btn-primary mt-3 w-full">
                  <span>Talk to a technician</span>
                </Link>
                <Link
                  href="/repair-price"
                  className="mt-2 inline-block text-sm text-brand-700 hover:underline hover:underline-offset-2"
                >
                  Check repair prices
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related guides */}
      {relatedArticles.length > 0 && (
        <section className="container-page pt-10">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-2">
            <h2 className="heading-3">More {clusterLabel.toLowerCase()} guides</h2>
            <Link href="/blog" className="text-sm text-brand-700 hover:underline hover:underline-offset-2">
              All guides
            </Link>
          </div>
          <div className="grid gap-x-8 sm:grid-cols-2">
            {relatedArticles.map(article => (
              <GuideCard key={article.id} post={article} />
            ))}
          </div>
        </section>
      )}

      <div className="mt-6">
        <CtaBand
          title="Need this checked on the bench?"
          description="Bring the device to the workshop or send a WhatsApp message with the model and the symptom. Diagnosis is free."
          whatsappMessage={`Hello Himal Product & Services, I read your guide "${post.title}" and would like help with: `}
        />
      </div>
    </div>
  );
}
