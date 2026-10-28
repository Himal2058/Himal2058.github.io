import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Wrench, 
  Smartphone, 
  MessageSquare, 
  Phone,
  Share2,
  List
} from 'lucide-react';
import { blogTopics, getBlogBySlug } from '@/data/blogs';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQAccordion } from '@/components/FAQAccordion';
import { JsonLd, getArticleSchema } from '@/components/JsonLd';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogTopics.map(post => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return { title: 'Article Not Found' };
  }

  return {
    title: `${post.title} | Himal Electronics Guides`,
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
    .filter(b => b.cluster === post.cluster && b.id !== post.id)
    .slice(0, 3);

  const clusterNameMap: Record<string, string> = {
    'mobile-repair': 'Mobile Phone Repair',
    'mobile-phones': 'Smartphones',
    'gadgets-accessories': 'Gadgets & Accessories',
    'smart-home': 'Smart Home Automation',
    'power-banks': 'Power Banks & Charging'
  };

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <JsonLd 
        data={getArticleSchema({
          title: post.title,
          description: post.excerpt,
          slug: post.slug,
          publishedDate: post.publishedDate,
          image: post.image
        })} 
      />

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[
          { name: 'Guides & Blog', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug}` }
        ]} />

        {/* Article Header Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
            <span className="font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              {clusterNameMap[post.cluster] || post.cluster}
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.publishedDate}</span>
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            {post.h1}
          </h1>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
            {post.excerpt}
          </p>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Author: <strong>Himal Product & Services Technical Desk</strong></span>
            <span>Target Audience: {post.targetAudience}</span>
          </div>
        </div>

        {/* Main Article Image */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md mb-10 aspect-video bg-slate-100">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Table of Contents / Outline Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm mb-10">
          <h2 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
            <List className="w-4 h-4 text-blue-600" />
            <span>Table of Contents & Core Topics</span>
          </h2>
          <ul className="space-y-2 text-xs md:text-sm text-slate-600">
            {post.outline.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">{idx + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body Content */}
        {post.content ? (
          <article className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12 prose prose-slate max-w-none text-xs md:text-sm leading-relaxed space-y-6">
            <div dangerouslySetInnerHTML={{ 
              __html: post.content
                .replace(/## (.*?)\n/g, '<h2 class="text-2xl font-black text-slate-900 mt-8 mb-3">$1</h2>')
                .replace(/### (.*?)\n/g, '<h3 class="text-xl font-bold text-slate-900 mt-6 mb-2">$1</h3>')
                .replace(/#### (.*?)\n/g, '<h4 class="text-lg font-bold text-slate-800 mt-4 mb-2">$1</h4>')
                .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="font-bold text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-2">$1</a>')
                .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>')
                .replace(/\n\n/g, '<br/><br/>')
            }} />
          </article>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12 space-y-6 text-xs md:text-sm text-slate-700 leading-relaxed">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl">
              <p className="font-bold text-blue-900 text-sm mb-1">Key Diagnostic Summary:</p>
              <p className="text-blue-800">{post.problemSolved}</p>
            </div>

            <h2 className="text-xl font-bold text-slate-900">Comprehensive Topic Breakdown</h2>
            <p>
              This technical guide provides verified procedures and advice formulated by the certified technicians at <strong>Himal Product and Services in Itahari</strong>. Follow the outlined sections below when testing hardware or selecting equipment in Nepal.
            </p>

            <div className="space-y-4">
              {post.outline.map((step, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{idx + 1}. {step}</h3>
                  <p className="text-slate-600 text-xs">
                    Detailed technical guidance reflecting local electrical and network conditions across Sunsari and Morang.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contextual Internal Link Banner Back to Money Page Cluster */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-3xl p-8 mb-12 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
              Need Professional Assistance?
            </span>
            <h3 className="text-xl font-bold">
              Explore Our Related {clusterNameMap[post.cluster]} in Itahari
            </h3>
            <p className="text-xs text-blue-100 max-w-lg">
              Visit our workshop or contact our team directly for genuine diagnostics and verified products.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href={post.parentClusterUrl}
              className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-bold px-6 py-3 rounded-xl text-xs transition shadow-md"
            >
              <span>Visit Main Category Hub</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Article-Specific FAQs */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Frequently Asked Questions</h2>
            <FAQAccordion faqs={post.faqs} />
          </div>
        )}

        {/* Related Articles in Same Cluster */}
        {relatedArticles.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Related Articles in this Topic Cluster</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map(rel => (
                <div key={rel.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider block mb-1">
                      {rel.intent}
                    </span>
                    <Link href={`/blog/${rel.slug}`}>
                      <h4 className="font-bold text-slate-900 text-sm hover:text-blue-600 transition line-clamp-2 mb-2">
                        {rel.title}
                      </h4>
                    </Link>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 mt-3">
                    <Link href={`/blog/${rel.slug}`} className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="text-center pt-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Guides & Blog Hub</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
