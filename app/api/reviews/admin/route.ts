import { databaseRequest, getReviewDatabase } from '@/lib/customer-reviews';
export const runtime = 'nodejs';
export async function GET(request: Request) {
  if (!process.env.SHOP_ADMIN_KEY || request.headers.get('x-shop-admin-key') !== process.env.SHOP_ADMIN_KEY) return Response.json({ error: 'Shop approval access denied.' }, { status: 401 });
  if (!getReviewDatabase()) return Response.json({ error: 'Online review storage has not been configured.' }, { status: 503 });
  const response = await databaseRequest('?select=id,service,rating,name,location,comment,created_at,is_published&order=created_at.desc&limit=200');
  if (!response?.ok) return Response.json({ error: 'Could not load reviews.' }, { status: 502 });
  return Response.json({ reviews: await response.json() }, { headers: { 'Cache-Control': 'no-store' } });
}
