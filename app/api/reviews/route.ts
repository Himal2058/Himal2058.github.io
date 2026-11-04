import { createEditKey, databaseRequest, getReviewDatabase, hashEditKey, isValidReview, PUBLIC_COLUMNS } from '@/lib/customer-reviews';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
const reviewPostAttempts = new Map<string, number[]>();

export async function GET() {
  if (!getReviewDatabase()) return Response.json({ configured: false, reviews: [] }, { status: 503, headers: { 'Cache-Control': 'no-store' } });
  const response = await databaseRequest(`?select=${PUBLIC_COLUMNS}&is_published=eq.true&order=created_at.desc&limit=100`);
  if (!response?.ok) return databaseError(response);
  return Response.json({ configured: true, reviews: await response.json() }, { headers: { 'Cache-Control': 'no-store' } });
}

export async function POST(request: Request) {
  if (!getReviewDatabase()) return Response.json({ error: 'Online review storage has not been configured yet.' }, { status: 503 });
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Please send a valid review.' }, { status: 400 });
  }

  if (body && typeof body === 'object' && 'website' in body && typeof body.website === 'string' && body.website.trim()) {
    return Response.json({ error: 'Invalid submission.' }, { status: 400 });
  }
  if (!isValidReview(body)) return Response.json({ error: 'Check the service, rating, name, location and comment fields.' }, { status: 400 });
  if (!withinPostLimit(request)) return Response.json({ error: 'Please wait before submitting another review.' }, { status: 429 });

  const editKey = createEditKey();
  const review = body as { service: string; rating: number; name: string; location: string; comment: string };
  const response = await databaseRequest('?select=id,service,rating,name,location,comment,is_published,created_at,updated_at', {
    method: 'POST',
    headers: { prefer: 'return=representation' },
    body: JSON.stringify({
      service: review.service.trim(),
      rating: review.rating,
      name: review.name.trim(),
      location: review.location.trim(),
      comment: review.comment.trim(),
      edit_key_hash: await hashEditKey(editKey),
      is_published: false
    })
  });
  if (!response?.ok) return databaseError(response);
  const [savedReview] = await response.json();
  return Response.json({ review: savedReview, editKey }, { status: 201, headers: { 'Cache-Control': 'no-store' } });
}

function withinPostLimit(request: Request) {
  const ip = request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const now = Date.now();
  const recent = (reviewPostAttempts.get(ip) || []).filter(time => now - time < 10 * 60 * 1000);
  if (recent.length >= 5) return false;
  recent.push(now);
  reviewPostAttempts.set(ip, recent);
  if (reviewPostAttempts.size > 1000) {
    for (const [key, values] of reviewPostAttempts) {
      if (values.every(time => now - time >= 10 * 60 * 1000)) reviewPostAttempts.delete(key);
    }
  }
  return true;
}

function databaseError(response: Response | null) {
  if (!response) return Response.json({ error: 'Online review storage is not configured.' }, { status: 503 });
  console.error('Customer review database request failed:', response.status, response.statusText);
  return Response.json({ error: 'We could not reach the review database. Please try again later.' }, { status: 502 });
}
