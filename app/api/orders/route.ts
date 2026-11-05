import { databaseRequest, getReviewDatabase } from '@/lib/customer-reviews';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  if (!getReviewDatabase()) return Response.json({ error: 'Online order storage is not configured.' }, { status: 503 });
  const body = await request.json().catch(() => null) as Record<string, unknown> | null;
  const customerName = String(body?.customer_name || '').trim();
  const phone = String(body?.phone || '').trim();
  const address = String(body?.delivery_address || '').trim();
  const item = body?.item && typeof body.item === 'object' ? body.item : null;
  if (customerName.length < 2 || phone.length < 7 || !address || !item) return Response.json({ error: 'Please provide your name, phone, address and product.' }, { status: 400 });
  const subtotal = Number(body?.subtotal || 0);
  const response = await databaseRequest('', { method: 'POST', headers: { prefer: 'return=representation' }, body: JSON.stringify({
    customer_name: customerName, phone, email: String(body?.email || '').trim().slice(0, 160), delivery_address: address.slice(0, 1000),
    payment_method: String(body?.payment_method || 'cod'), items: [item], subtotal, total: subtotal, notes: String(body?.notes || '').slice(0, 500)
  }) }, 'orders');
  if (!response?.ok) return Response.json({ error: 'Could not save your order.' }, { status: 502 });
  const [order] = await response.json().catch(() => []);
  return Response.json({ ok: true, orderNumber: order?.order_number || '' }, { status: 201 });
}
