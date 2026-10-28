'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Search, 
  Filter, 
  ArrowRight, 
  Sparkles, 
  Wrench, 
  Smartphone, 
  Headphones, 
  Lightbulb, 
  BatteryCharging,
  Clock,
  Calendar
} from 'lucide-react';
import { blogTopics, BlogPost } from '@/data/blogs';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function BlogHubPage() {
  const [selectedCluster, setSelectedCluster] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const clusterMeta: Record<string, { label: string; icon: any; color: string }> = {
    'all': { label: 'All 50 Tech Topics', icon: BookOpen, color: 'text-slate-900 bg-slate-100' },
    'mobile-repair': { label: 'Mobile Repair (10)', icon: Wrench, color: 'text-blue-700 bg-blue-50' },
    'mobile-phones': { label: 'Smartphones (10)', icon: Smartphone, color: 'text-emerald-700 bg-emerald-50' },
    'gadgets-accessories': { label: 'Gadgets & Audio (10)', icon: Headphones, color: 'text-purple-700 bg-purple-50' },
    'smart-home': { label: 'Smart Home (10)', icon: Lightbulb, color: 'text-amber-700 bg-amber-50' },
    'power-banks': { label: 'Power Banks (10)', icon: BatteryCharging, color: 'text-cyan-700 bg-cyan-50' }
  };

  const filtered = blogTopics.filter(post => {
    const matchesCluster = selectedCluster === 'all' || post.cluster === selectedCluster;
    const matchesSearch = searchQuery.trim() === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.primaryQuery.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.problemSolved.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCluster && matchesSearch;
  });

  const pillarGuides = blogTopics.filter(b => b.isPillar);

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <Breadcrumbs items={[{ name: 'Guides & Educational Blog', url: '/blog' }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Topical Authority Knowledge Base</span>
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Electronics Troubleshooting & Buying Guides
          </h1>
          <p className="text-xs md:text-sm text-slate-600 mt-3 leading-relaxed">
            Written by bench technicians and electronics specialists in Itahari. Explore safe smartphone troubleshooting, battery care secrets, buying checklists, and smart home guides.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm mb-10 space-y-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 50 topics (e.g. charging port, screen repair, battery drain, power bank math, smart bulbs)..."
              className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            {Object.entries(clusterMeta).map(([key, meta]) => {
              const Icon = meta.icon;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedCluster(key)}
                  className={`flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl border transition ${
                    selectedCluster === key
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{meta.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Pillar Guides Spotlight (If All Selected) */}
        {selectedCluster === 'all' && searchQuery === '' && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl font-bold text-slate-900">Featured Pillar Technical Guides</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillarGuides.slice(0, 3).map(guide => (
                <div key={guide.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between group">
                  <div>
                    <div className="relative aspect-video bg-slate-100 overflow-hidden">
                      <img 
                        src={guide.image} 
                        alt={guide.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-white px-2.5 py-0.5 rounded-full">
                        Comprehensive Guide
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                        <span>{guide.publishedDate}</span>
                        <span>•</span>
                        <span>{guide.readTime}</span>
                      </div>

                      <Link href={`/blog/${guide.slug}`}>
                        <h3 className="font-bold text-slate-900 text-base leading-snug hover:text-blue-600 transition mb-2">
                          {guide.title}
                        </h3>
                      </Link>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {guide.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                    <Link
                      href={`/blog/${guide.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition"
                    >
                      <span>Read Complete Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Complete 50-Topic Content Plan Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              {selectedCluster === 'all' ? 'All 50 Planned Topic Guides' : `${clusterMeta[selectedCluster]?.label} Content Cluster`}
            </h2>
            <span className="text-xs text-slate-500 font-medium">
              Showing {filtered.length} articles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map(post => (
              <div 
                key={post.id} 
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:border-blue-300 hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                      {post.cluster.replace('-', ' ')}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="block hover:text-blue-600 transition">
                    <h3 className="font-bold text-slate-900 text-sm md:text-base leading-snug mb-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {post.excerpt}
                  </p>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-[11px] text-slate-500 mb-4">
                    <strong>Problem Solved:</strong> {post.problemSolved}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>Read Article / Outline</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  <span className="text-[11px] text-slate-400 font-medium">
                    Search Intent: {post.intent}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
