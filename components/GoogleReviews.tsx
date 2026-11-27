'use client';

import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

interface GoogleReview {
  author_name: string;
  author_photo?: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

interface GoogleReviewsProps {
  reviews: GoogleReview[];
  aggregate_rating?: number;
  aggregate_rating_count?: number;
  place_id?: string;
  business_name?: string;
}

const STAR_WIDTH = 16;
const STAR_HEIGHT = 16;

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function StarRating({ rating, className }: { rating: number; className?: string }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className={`flex items-center gap-0.5 ${className ?? ''}`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <StarIcon key={i} className="size-4 fill-yellow-400 text-yellow-400" />
      ))}
      {halfStar && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="size-4 fill-yellow-400 text-yellow-400"
        >
          <mask id="half-star-mask" x="0" width={STAR_WIDTH / 2} height={STAR_HEIGHT}>
            <rect x="0" width={STAR_WIDTH} height={STAR_HEIGHT} fill="white" />
          </mask>
          <rect x="0" width={STAR_WIDTH} height={STAR_HEIGHT} fill="currentColor" mask="url(#half-star-mask)" />
        </svg>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <StarIcon key={i} className="size-4 fill-gray-300 text-gray-300" />
      ))}
      <span className="ml-1 text-xs font-semibold text-ink">{rating.toFixed(1)}</span>
    </div>
  );
}

export function GoogleReviews({
  reviews,
  aggregate_rating,
  aggregate_rating_count,
  place_id,
  business_name,
}: GoogleReviewsProps) {
  const rating = aggregate_rating ?? (reviews.length > 0
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0);
  const count = aggregate_rating_count ?? reviews.length;

  return (
    <section className="section border-y border-line bg-surface">
      {/* AggregateRating structured data for Google crawler */}
      {aggregate_rating && aggregate_rating_count && place_id && business_name && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': `https://himalelectronics.vercel.app#localbusiness`,
              name: business_name,
              image: 'https://himalelectronics.vercel.app/logo.jpg',
              url: 'https://himalelectronics.vercel.app',
              telephone: '+9779807391472',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Sundarharaincha-4',
                addressLocality: 'Morang',
                addressRegion: 'Koshi',
                addressCountry: 'NP',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: aggregate_rating.toString(),
                reviewCount: aggregate_rating_count.toString(),
                bestRating: '5',
                worstRating: '1',
              },
              sameAs: [
                `https://www.google.com/maps/search/?api=1&query=${business_name.replace(/ /g, '+')}`,
              ],
            }),
          }}
        />
      )}

      <div className="container-page py-12 md:py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          {/* Rating summary */}
          <div className="max-w-2xl">
            <p className="eyebrow">Customer reviews on Google</p>
            <h2 className="display-2 mt-2 flex items-center gap-3">
              <StarRating rating={rating} />
              <span className="text-ink">
                {aggregate_rating?.toFixed(1) ?? rating.toFixed(1)}
                <span className="ml-1 text-xs font-medium text-muted">
                  ({count} Google review{count !== 1 ? 's' : ''})
                </span>
              </span>
            </h2>
            {aggregate_rating_count && aggregate_rating_count > 0 && (
              <p className="mt-3 text-sm leading-6 text-ink-soft">
                Based on {aggregate_rating_count} Google review{
                  aggregate_rating_count !== 1 ? 's' : ''
                } from customers across Sunsari and Morang.
              </p>
            )}
            {place_id && (
              <a
                href={`https://www.google.com/maps/search/?api=1&query=Google+Reviews:${place_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-card border border-line bg-white px-4 py-2 text-sm text-brand-700 font-medium hover:bg-brand-50 transition-colors"
              >
                <span>See all reviews on Google</span>
                <ArrowRight className="size-4 text-brand-700" aria-hidden="true" />
              </a>
            )}
          </div>

          {/* Review cards */}
          {reviews.length > 0 && (
            <div className="flex-1 max-w-3xl">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {reviews.map((review, idx) => (
                  <article key={idx || review.author_name} className="rounded-card border border-line bg-white p-5">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0">
                        {review.author_photo ? (
                          <img
                            src={review.author_photo}
                            alt={review.author_name}
                            width={40}
                            height={40}
                            className={`size-10 rounded-full object-cover border border-line ${idx === 0 ? 'priority' : ''}`}
                          />
                        ) : (
                          <div className="size-10 rounded-full bg-brand-100 flex items-center justify-center">
                            <StarIcon className="size-5 text-brand-700" aria-hidden="true" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm font-semibold text-ink truncate">
                            {review.author_name}
                          </span>
                          <StarRating rating={review.rating} className="ml-1" />
                        </div>
                        <p className="mt-1.5 text-sm leading-6 text-ink-soft">
                          {review.text}
                        </p>
                        <p className="mt-2 text-xs text-muted">
                          {review.relative_time_description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default GoogleReviews;
