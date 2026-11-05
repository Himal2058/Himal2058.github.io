import { databaseRequest, getReviewDatabase } from '@/lib/customer-reviews';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  if (!getReviewDatabase()) return Response.json({ error: 'Online enquiry storage is not configured.' }, { status: 503 });
  const body = await request.json().catch(() => null) as Record<string, unknown> | null;
  const name = String(body?.name || '').trim();
  const phone = String(body?.phone || '').trim();
  const message = String(body?.message || '').trim();
  if (name.length < 2 || name.length > 80 || phone.length < 7 || phone.length > 30 || message.length < 5 || message.length > 2000) {
    return Response.json({ error: 'Please provide a valid name, phone number and message.' }, { status: 400 });
  }
  const response = await databaseRequest('', { method: 'POST', headers: { prefer: 'return=minimal' }, body: JSON.stringify({
    name, phone, email: String(body?.email || '').trim().slice(0, 160), subject: String(body?.subject || 'General enquiry').trim().slice(0, 120),
    message, photo_path: String(body?.photo_path || '').trim().slice(0, 500)
  }) }, 'customer_enquiries');
  if (!response?.ok) return Response.json({ error: 'Could not save your enquiry.' }, { status: 502 });
  return Response.json({ ok: true }, { status: 201 });
}
