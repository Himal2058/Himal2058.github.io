const TABLE = 'customer_reviews';
const PUBLIC_COLUMNS = 'id,service,rating,name,location,comment,is_published,created_at,updated_at';

export type ReviewInput = {
  service: string;
  rating: number;
  name: string;
  location: string;
  comment: string;
};

export function getReviewDatabase() {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, '');
  const secretKey = process.env.SUPABASE_SECRET_KEY;
  const legacyServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const key = secretKey || legacyServiceRoleKey;
  return url && key ? { url, key, legacyServiceRoleKey: secretKey ? null : legacyServiceRoleKey } : null;
}

export function isValidReview(value: unknown): value is ReviewInput {
  if (!value || typeof value !== 'object') return false;
  const item = value as Partial<ReviewInput>;
  return typeof item.service === 'string' && item.service.trim().length >= 2 && item.service.trim().length <= 80
    && typeof item.rating === 'number' && Number.isInteger(item.rating) && item.rating >= 1 && item.rating <= 5
    && typeof item.name === 'string' && item.name.length <= 80
    && typeof item.location === 'string' && item.location.length <= 100
    && typeof item.comment === 'string' && item.comment.trim().length >= 8 && item.comment.trim().length <= 1000;
}

export async function databaseRequest(path: string, init: RequestInit = {}) {
  const db = getReviewDatabase();
  if (!db) return null;
  return fetch(`${db.url}/rest/v1/${TABLE}${path}`, {
    ...init,
    cache: 'no-store',
    headers: {
      apikey: db.key,
      'content-type': 'application/json',
      ...(db.legacyServiceRoleKey ? { authorization: `Bearer ${db.legacyServiceRoleKey}` } : {}),
      ...init.headers
    }
  });
}

export function createEditKey(): string {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');
}

export async function hashEditKey(key: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(key));
  return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
}

export function safeKeyMatch(left: string, right: string): boolean {
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) difference |= left.charCodeAt(index) ^ right.charCodeAt(index);
  return difference === 0;
}

export { PUBLIC_COLUMNS };
