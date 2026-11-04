'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { MessageSquare, Pencil, Send, Star, Trash2 } from 'lucide-react';
import { getWhatsAppLink } from '@/data/siteConfig';

type Review = {
  id: string;
  service: string;
  rating: number;
  name: string;
  location: string;
  comment: string;
  createdAt: string;
  isPublished?: boolean;
  editKey?: string;
};

type ReviewApiRecord = Omit<Review, 'createdAt' | 'isPublished'> & { created_at: string; is_published: boolean };
const STORAGE_KEY = 'himal-customer-reviews-v1';
const OWNER_KEYS = 'himal-customer-review-edit-keys-v1';
const fieldClass = 'h-11 w-full rounded border border-line bg-canvas px-3 text-sm text-ink focus:border-line-strong focus:bg-white focus:outline-none';

export function FeedbackForm() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [databaseMode, setDatabaseMode] = useState<'checking' | 'local' | 'remote'>('checking');
  const [mode, setMode] = useState<'website' | 'whatsapp'>('website');
  const [service, setService] = useState('Phone repair');
  const [rating, setRating] = useState('5');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [comment, setComment] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [privateEditKey, setPrivateEditKey] = useState('');
  const [privateReviewId, setPrivateReviewId] = useState('');
  const [accessReviewId, setAccessReviewId] = useState('');
  const [accessEditKey, setAccessEditKey] = useState('');
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');
  const [whatsAppReady, setWhatsAppReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let localReviews: Review[] = [];
    let savedOwnerReviews: Review[] = [];
    try {
      const local = localStorage.getItem(STORAGE_KEY);
      if (local) {
        const parsed: unknown = JSON.parse(local);
        if (Array.isArray(parsed)) localReviews = parsed.filter(isReview);
      }
      const ownerData = localStorage.getItem(OWNER_KEYS);
      if (ownerData) {
        const parsed: unknown = JSON.parse(ownerData);
        if (Array.isArray(parsed)) savedOwnerReviews = parsed.filter((item): item is Review => isReview(item) && typeof item.editKey === 'string');
      }
    } catch {
      if (!cancelled) setError('Some reviews saved in this browser could not be read.');
    }
    setReviews([...savedOwnerReviews, ...localReviews.filter(item => !savedOwnerReviews.some(owner => owner.id === item.id))]);

    fetch('/api/reviews', { cache: 'no-store' })
      .then(async response => {
        const result = await response.json().catch(() => ({}));
        if (cancelled) return;
        if (response.ok && result.configured === true && Array.isArray(result.reviews)) {
          const published = (result.reviews as ReviewApiRecord[]).map(fromApi);
          const publishedIds = new Set(published.map(item => item.id));
          const own = savedOwnerReviews.map(item => {
            const latest = published.find(remote => remote.id === item.id);
            return latest ? { ...latest, editKey: item.editKey } : item;
          });
          setReviews([...own, ...published.filter(item => !publishedIds.has(item.id) ? true : !own.some(owner => owner.id === item.id))]);
          setDatabaseMode('remote');
        } else if (response.status === 503 && result.configured === false) {
          setDatabaseMode('local');
        } else {
          setDatabaseMode('local');
          setError(result.error || 'Online feedback is temporarily unavailable.');
        }
      })
      .catch(() => {
        if (cancelled) return;
        setDatabaseMode('local');
        setError('Could not check online feedback storage. Website posts on this device will still work.');
      })
      .finally(() => { if (!cancelled) setLoaded(true); });

    return () => { cancelled = true; };
  }, []);

  const message = `Namaste Himal Product and Services. I would like to leave service feedback.\nService: ${service}\nRating: ${rating}/5\nName: ${name || 'Please keep my name private'}\nTown/district: ${location || 'Not shared'}\nComment: ${comment}`;
  const whatsappUrl = getWhatsAppLink(message);

  function resetForm() {
    setService('Phone repair'); setRating('5'); setName(''); setLocation(''); setComment(''); setEditingId(null); setEditingKey(null);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(''); setError(''); setPrivateEditKey('');
    if (mode === 'whatsapp') {
      setWhatsAppReady(true);
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    if (databaseMode === 'checking') { setError('Checking online review storage. Please try again in a moment.'); return; }

    const details = { service, rating: Number(rating), name: name.trim(), location: location.trim(), comment: comment.trim() };
    if (databaseMode === 'remote') {
      try {
        if (editingId && editingKey) {
          const response = await fetch(`/api/reviews/${encodeURIComponent(editingId)}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json', 'x-review-edit-key': editingKey }, body: JSON.stringify(details) });
          const result = await response.json();
          if (!response.ok) throw new Error(result.error || 'Could not update your review.');
          const updated = { ...fromApi(result.review as ReviewApiRecord), editKey: editingKey };
          const owners = [updated, ...getOwnerReviews().filter(item => item.id !== updated.id)];
          storeOwnerReviews(owners);
          setReviews(current => current.map(item => item.id === updated.id ? updated : item));
          setNotice('Your review was updated and returned to the approval queue.');
        } else {
          const formData = new FormData(event.currentTarget);
          const response = await fetch('/api/reviews', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...details, website: String(formData.get('website') || '') }) });
          const result = await response.json();
          if (!response.ok) throw new Error(result.error || 'Could not post your review.');
          const posted = { ...fromApi(result.review as ReviewApiRecord), editKey: result.editKey as string };
          setReviews(current => [posted, ...current.filter(item => item.id !== posted.id)]);
          setPrivateEditKey(posted.editKey || '');
          setPrivateReviewId(posted.id);
          try { storeOwnerReviews([posted, ...getOwnerReviews().filter(item => item.id !== posted.id)]); }
          catch { setError('The review is posted, but this browser could not save its edit key. Copy and keep the key shown below.'); }
          setNotice('Your review was submitted. It will appear publicly after the shop approves it. Save the private edit key below if you may need to edit it from another device.');
        }
        resetForm();
      } catch (caught) {
        setError(caught instanceof Error ? caught.message : 'Could not save your review. Please try again.');
      }
      return;
    }

    const localReview: Review = {
      id: editingId ?? (globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`),
      ...details,
      createdAt: editingId ? reviews.find(item => item.id === editingId)?.createdAt ?? new Date().toISOString() : new Date().toISOString(),
      isPublished: true
    };
    const next = editingId ? reviews.map(item => item.id === editingId ? localReview : item) : [localReview, ...reviews];
    setReviews(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); }
    catch { setError('This browser could not save the review. Try WhatsApp feedback instead.'); return; }
    setNotice(editingId ? 'Your review was updated in this browser.' : 'Your review was posted on this device.');
    resetForm();
  }

  function editReview(review: Review) {
    setService(review.service); setRating(String(review.rating)); setName(review.name); setLocation(review.location); setComment(review.comment);
    setEditingId(review.id); setEditingKey(review.editKey || null); setMode('website'); setNotice('Editing your saved review.');
    document.getElementById('feedback-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  async function loadRemoteReview() {
    setError(''); setNotice('');
    if (!/^[0-9a-f-]{36}$/i.test(accessReviewId.trim()) || !/^[0-9a-f]{64}$/i.test(accessEditKey.trim())) {
      setError('Enter the review ID and private edit key from your original post.');
      return;
    }
    try {
      const response = await fetch(`/api/reviews/${encodeURIComponent(accessReviewId.trim())}`, { headers: { 'x-review-edit-key': accessEditKey.trim() }, cache: 'no-store' });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Could not find that review.');
      const review = fromApi(result.review as ReviewApiRecord);
      setService(review.service); setRating(String(review.rating)); setName(review.name); setLocation(review.location); setComment(review.comment);
      setEditingId(review.id); setEditingKey(accessEditKey.trim()); setMode('website'); setNotice('Review loaded. Edit it below and save your changes.');
      document.getElementById('feedback-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (caught) { setError(caught instanceof Error ? caught.message : 'Could not load the review.'); }
  }

  async function deleteReview(review: Review) {
    if (!window.confirm('Delete this review?')) return;
    if (databaseMode === 'remote' && review.editKey) {
      try {
        const response = await fetch(`/api/reviews/${encodeURIComponent(review.id)}`, { method: 'DELETE', headers: { 'x-review-edit-key': review.editKey } });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'Could not delete the review.');
        const owners = getOwnerReviews().filter(item => item.id !== review.id);
        storeOwnerReviews(owners); setReviews(current => current.filter(item => item.id !== review.id)); setNotice('Your review was deleted.');
      } catch (caught) { setError(caught instanceof Error ? caught.message : 'Could not delete the review.'); }
      return;
    }
    const next = reviews.filter(item => item.id !== review.id);
    setReviews(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); setNotice('Review deleted from this browser.'); }
    catch { setError('Could not update saved feedback in this browser.'); }
    if (editingId === review.id) resetForm();
  }

  async function copyEditKey() {
    const credentials = `Review ID: ${privateReviewId}\nEdit key: ${privateEditKey}`;
    try { await navigator.clipboard.writeText(credentials); setNotice('Review ID and private edit key copied. Keep them somewhere safe.'); }
    catch { setNotice('Copy both the review ID and private edit key and keep them somewhere safe.'); }
  }

  if (whatsAppReady) return <div className="rounded-card border border-line bg-surface p-5 sm:p-6"><h2 className="text-lg font-semibold text-ink">Your private message is ready</h2><p className="mt-2 text-sm leading-6 text-muted">WhatsApp should have opened with your rating and comment. Press send there so our team receives it.</p><div className="mt-4 flex flex-wrap gap-3"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary"><MessageSquare className="size-4" aria-hidden="true" />Open WhatsApp</a><button type="button" onClick={() => setWhatsAppReady(false)} className="btn-outline">Back to feedback</button></div></div>;

  return (
    <div className="space-y-6">
      <form id="feedback-form" onSubmit={submit} className="scroll-mt-24 rounded-card border border-line bg-surface p-4 sm:p-6">
        <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true"><label htmlFor="feedback-website">Leave this field blank</label><input id="feedback-website" name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
        <h2 className="text-lg font-semibold text-ink">Tell us about your experience</h2>
        <p className="mt-1 text-sm leading-6 text-muted">Post a review on the website or send private feedback to the shop through WhatsApp.</p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2" role="group" aria-label="Choose how to send feedback"><button type="button" aria-pressed={mode === 'website'} onClick={() => setMode('website')} className={`min-h-11 rounded border px-3 text-sm font-semibold ${mode === 'website' ? 'border-brand-700 bg-brand-50 text-brand-700' : 'border-line bg-white text-ink-soft'}`}>Post on this website</button><button type="button" aria-pressed={mode === 'whatsapp'} onClick={() => setMode('whatsapp')} className={`min-h-11 rounded border px-3 text-sm font-semibold ${mode === 'whatsapp' ? 'border-brand-700 bg-brand-50 text-brand-700' : 'border-line bg-white text-ink-soft'}`}>Send privately on WhatsApp</button></div>
        {databaseMode === 'remote' && <p className="mt-3 text-xs leading-5 text-muted">Online reviews are visible to everyone after approval. Edit your own submission using its private edit key.</p>}
        {databaseMode === 'local' && <p className="mt-3 text-xs leading-5 text-muted">Online reviews are not connected yet. Posts are saved in this browser only until the Supabase setup is complete.</p>}
        {notice && <p className="mt-3 rounded border border-brand-200 bg-white px-3 py-2 text-sm text-ink" role="status">{notice}{privateEditKey && <span className="mt-2 flex flex-wrap items-center gap-2"><code className="max-w-full break-all rounded bg-canvas px-2 py-1 text-xs">ID: {privateReviewId} · Key: {privateEditKey}</code><button type="button" onClick={copyEditKey} className="min-h-10 rounded border border-line px-2 text-xs font-semibold">Copy ID and key</button></span>}</p>}
        {error && <p className="mt-3 rounded border border-red-200 bg-white px-3 py-2 text-sm text-red-800" role="alert">{error}</p>}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div><label htmlFor="feedback-service" className="mb-1 block text-sm font-medium text-ink">Service received</label><select id="feedback-service" value={service} onChange={event => setService(event.target.value)} className={fieldClass}><option>Phone repair</option><option>Speaker or audio repair</option><option>Toy or gadget repair</option><option>TV or home electronics repair</option><option>Laptop or computer accessory repair</option><option>Household electronics repair</option><option>Product purchase</option><option>Delivery or customer support</option><option>Other service</option></select></div>
          <fieldset><legend className="mb-1 block text-sm font-medium text-ink">Your rating</legend><div className="flex h-11 items-center gap-1" role="radiogroup" aria-label="Choose a rating from 1 to 5 stars">{[1, 2, 3, 4, 5].map(value => <label key={value} className="flex size-10 cursor-pointer items-center justify-center rounded hover:bg-white focus-within:ring-2 focus-within:ring-brand-500" title={`${value} ${value === 1 ? 'star' : 'stars'}`}><input className="sr-only" type="radio" name="feedback-rating" value={value} checked={rating === String(value)} onChange={() => setRating(String(value))} /><Star className={`size-6 ${Number(rating) >= value ? 'fill-amber-400 text-amber-500' : 'text-muted'}`} aria-hidden="true" /><span className="sr-only">{value} {value === 1 ? 'star' : 'stars'}</span></label>)}<span className="ml-2 text-sm text-muted">{rating} of 5</span></div></fieldset>
          <div><label htmlFor="feedback-name" className="mb-1 block text-sm font-medium text-ink">Name <span className="font-normal text-muted">(optional)</span></label><input id="feedback-name" value={name} onChange={event => setName(event.target.value)} autoComplete="name" placeholder="Your name" className={fieldClass} /></div>
          <div><label htmlFor="feedback-location" className="mb-1 block text-sm font-medium text-ink">Town or district <span className="font-normal text-muted">(optional)</span></label><input id="feedback-location" value={location} onChange={event => setLocation(event.target.value)} autoComplete="address-level2" placeholder="Itahari, Sunsari" className={fieldClass} /></div>
          <div className="sm:col-span-2"><label htmlFor="feedback-comment" className="mb-1 block text-sm font-medium text-ink">Your comment</label><textarea id="feedback-comment" required minLength={8} maxLength={1000} rows={5} value={comment} onChange={event => setComment(event.target.value)} placeholder="What went well? What could we do better?" className="w-full rounded border border-line bg-canvas px-3 py-2 text-sm leading-6 text-ink placeholder:text-muted focus:border-line-strong focus:bg-white focus:outline-none" /></div>
        </div>
        <button type="submit" disabled={mode === 'website' && databaseMode === 'checking'} className="btn-primary mt-5 w-full disabled:cursor-wait disabled:opacity-60 sm:w-auto">{mode === 'website' ? <Pencil className="size-4" aria-hidden="true" /> : <Send className="size-4" aria-hidden="true" />}{editingId && mode === 'website' ? 'Save changes' : mode === 'website' ? 'Post review on website' : 'Continue in WhatsApp'}</button>
        {editingId && <button type="button" onClick={resetForm} className="btn-outline ml-2 mt-5">Cancel edit</button>}
      </form>

      {databaseMode === 'remote' && <details className="rounded-card border border-line bg-white p-4 sm:p-5"><summary className="cursor-pointer font-semibold text-ink">Edit a review from another device</summary><p className="mt-2 text-sm leading-6 text-muted">Enter the review ID and private edit key saved when you posted. Anyone with both can edit or delete that review, so keep them private.</p><div className="mt-3 grid gap-3 sm:grid-cols-[1fr_1fr_auto]"><div><label htmlFor="review-access-id" className="mb-1 block text-xs font-medium text-ink">Review ID</label><input id="review-access-id" value={accessReviewId} onChange={event => setAccessReviewId(event.target.value)} autoComplete="off" className={fieldClass} /></div><div><label htmlFor="review-access-key" className="mb-1 block text-xs font-medium text-ink">Private edit key</label><input id="review-access-key" type="password" value={accessEditKey} onChange={event => setAccessEditKey(event.target.value)} autoComplete="off" className={fieldClass} /></div><button type="button" onClick={() => void loadRemoteReview()} className="btn-outline self-end">Load review</button></div></details>}

      <section aria-labelledby="reviews-heading" className="rounded-card border border-line bg-white p-4 sm:p-6">
        <div className="flex flex-wrap items-end justify-between gap-2 border-b border-line pb-3"><div><p className="eyebrow">Customer comments</p><h2 id="reviews-heading" className="mt-1 text-xl font-semibold text-ink">{databaseMode === 'remote' ? 'Customer reviews' : 'Reviews on this device'}</h2></div><span className="text-sm text-muted">{loaded ? `${reviews.length} ${reviews.length === 1 ? 'review' : 'reviews'}` : 'Loading reviews…'}</span></div>
        {!loaded ? <p className="py-6 text-sm text-muted">Loading reviews…</p> : reviews.length === 0 ? <p className="py-6 text-sm leading-6 text-muted">No reviews yet. Share the first one after your visit or repair.</p> : <ul className="divide-y divide-line">{reviews.map(review => <li key={review.id} className="py-4"><article><div className="flex flex-wrap items-center justify-between gap-2"><div><div className="flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>{[1, 2, 3, 4, 5].map(value => <Star key={value} className={`size-4 ${value <= review.rating ? 'fill-amber-400 text-amber-500' : 'text-line-strong'}`} aria-hidden="true" />)}</div><h3 className="mt-1 text-sm font-semibold text-ink">{review.service}</h3></div><time className="text-xs text-muted" dateTime={review.createdAt}>{new Intl.DateTimeFormat('en-NP', { dateStyle: 'medium' }).format(new Date(review.createdAt))}</time></div><p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-ink-soft">{review.comment}</p><p className="mt-2 text-xs text-muted">{review.name || 'Customer'}{review.location ? ` · ${review.location}` : ''}</p>{databaseMode === 'remote' && !review.isPublished && <p className="mt-2 inline-flex rounded bg-amber-50 px-2 py-1 text-xs font-medium text-amber-900">Awaiting shop approval</p>}{databaseMode === 'local' && <p className="mt-2 text-xs text-muted">Saved in this browser only</p>}<div className="mt-3 flex gap-2">{(databaseMode === 'local' || review.editKey) && <><button type="button" onClick={() => editReview(review)} className="inline-flex min-h-10 items-center gap-1.5 rounded border border-line px-3 text-xs font-medium text-ink-soft hover:bg-canvas"><Pencil className="size-3.5" aria-hidden="true" />Edit</button><button type="button" onClick={() => void deleteReview(review)} className="inline-flex min-h-10 items-center gap-1.5 rounded border border-line px-3 text-xs font-medium text-ink-soft hover:bg-canvas"><Trash2 className="size-3.5" aria-hidden="true" />Delete</button></>}</div></article></li>)}</ul>}
      </section>
    </div>
  );
}

function fromApi(record: ReviewApiRecord): Review {
  return { id: record.id, service: record.service, rating: record.rating, name: record.name, location: record.location, comment: record.comment, createdAt: record.created_at, isPublished: record.is_published };
}

function isReview(value: unknown): value is Review {
  if (!value || typeof value !== 'object') return false;
  const review = value as Partial<Review>;
  return typeof review.id === 'string' && typeof review.service === 'string' && typeof review.rating === 'number' && review.rating >= 1 && review.rating <= 5 && typeof review.comment === 'string' && typeof review.createdAt === 'string' && !Number.isNaN(new Date(review.createdAt).getTime()) && typeof review.name === 'string' && typeof review.location === 'string';
}

function getOwnerReviews(): Review[] {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(OWNER_KEYS) || '[]');
    return Array.isArray(parsed) ? parsed.filter((item): item is Review => isReview(item) && typeof item.editKey === 'string') : [];
  } catch { return []; }
}

function storeOwnerReviews(reviews: Review[]) {
  localStorage.setItem(OWNER_KEYS, JSON.stringify(reviews));
}
