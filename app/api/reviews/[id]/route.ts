import { databaseRequest, getReviewDatabase, hashEditKey, isValidReview, PUBLIC_COLUMNS, safeKeyMatch } from '@/lib/customer-reviews';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
type RouteContext = { params: Promise<{ id: string }> };

export async function GET(request: Request, context: RouteContext) {
  const { id } = await context.params;
  const key = request.headers.get('x-review-edit-key') || '';
  if (!getReviewDatabase()) return unavailable();
  if (!isUuid(id) || !isEditKey(key)) return notFound();

  const response = await databaseRequest(`?id=eq.${id}&select=${PUBLIC_COLUMNS},edit_key_hash`);
  if (!response?.ok) return databaseError(response);
  const [review] = await response.json();
  if (!review || !safeKeyMatch(review.edit_key_hash, await hashEditKey(key))) return notFound();
  delete review.edit_key_hash;
  return Response.json({ review }, { headers: { 'Cache-Control': 'no-store' } });
}

export async function PATCH(request: Request, context: RouteContext) {
  const { id } = await context.params;
  const key = request.headers.get('x-review-edit-key') || '';
  if (!getReviewDatabase()) return unavailable();
  if (!isUuid(id) || !isEditKey(key)) return notFound();

  let body: unknown;
  try { body = await request.json(); } catch { return Response.json({ error: 'Please send a valid review.' }, { status: 400 }); }
  if (!isValidReview(body)) return Response.json({ error: 'Check the review fields and try again.' }, { status: 400 });

  const existingResponse = await databaseRequest(`?id=eq.${id}&select=id,edit_key_hash`);
  if (!existingResponse?.ok) return databaseError(existingResponse);
  const [existing] = await existingResponse.json();
  if (!existing || !safeKeyMatch(existing.edit_key_hash, await hashEditKey(key))) return notFound();

  const review = body as { service: string; rating: number; name: string; location: string; comment: string };
  const response = await databaseRequest(`?id=eq.${id}&select=${PUBLIC_COLUMNS}`, {
    method: 'PATCH',
    headers: { prefer: 'return=representation' },
    body: JSON.stringify({ service: review.service.trim(), rating: review.rating, name: review.name.trim(), location: review.location.trim(), comment: review.comment.trim(), is_published: false })
  });
  if (!response?.ok) return databaseError(response);
  const [savedReview] = await response.json();
  return Response.json({ review: savedReview }, { headers: { 'Cache-Control': 'no-store' } });
}

export async function DELETE(request: Request, context: RouteContext) {
  const { id } = await context.params;
  const key = request.headers.get('x-review-edit-key') || '';
  if (!getReviewDatabase()) return unavailable();
  if (!isUuid(id) || !isEditKey(key)) return notFound();

  const existingResponse = await databaseRequest(`?id=eq.${id}&select=id,edit_key_hash`);
  if (!existingResponse?.ok) return databaseError(existingResponse);
  const [existing] = await existingResponse.json();
  if (!existing || !safeKeyMatch(existing.edit_key_hash, await hashEditKey(key))) return notFound();

  const response = await databaseRequest(`?id=eq.${id}`, { method: 'DELETE' });
  if (!response?.ok) return databaseError(response);
  return Response.json({ deleted: true });
}

function isUuid(value: string) { return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value); }
function isEditKey(value: string) { return /^[0-9a-f]{64}$/i.test(value); }
function notFound() { return Response.json({ error: 'Review not found or its edit key is incorrect.' }, { status: 404 }); }
function unavailable() { return Response.json({ error: 'Online review storage is not configured yet.' }, { status: 503 }); }
function databaseError(response: Response | null) {
  if (!response) return unavailable();
  console.error('Customer review database request failed:', response.status, response.statusText);
  return Response.json({ error: 'We could not reach the review database. Please try again later.' }, { status: 502 });
}
