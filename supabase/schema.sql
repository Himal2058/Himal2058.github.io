-- Customer review storage for Himal Product and Services.
-- Run this once in Supabase Dashboard > SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.customer_reviews (
  id uuid primary key default gen_random_uuid(),
  service text not null check (char_length(service) between 2 and 80),
  rating smallint not null check (rating between 1 and 5),
  name text not null default '' check (char_length(name) <= 80),
  location text not null default '' check (char_length(location) <= 100),
  comment text not null check (char_length(comment) between 8 and 1000),
  edit_key_hash text not null check (char_length(edit_key_hash) = 64),
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists customer_reviews_public_created_idx
  on public.customer_reviews (created_at desc)
  where is_published = true;

alter table public.customer_reviews enable row level security;
revoke all on table public.customer_reviews from anon, authenticated;
grant all on table public.customer_reviews to service_role;

create or replace function public.set_customer_review_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_customer_review_updated_at on public.customer_reviews;
create trigger set_customer_review_updated_at
before update on public.customer_reviews
for each row execute function public.set_customer_review_updated_at();

-- Core business operations. These tables are private and are accessed only by
-- server-side API routes using the Supabase service key.
create table if not exists public.customer_enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 80),
  phone text not null check (char_length(phone) between 7 and 30),
  email text not null default '' check (char_length(email) <= 160),
  subject text not null default 'General enquiry' check (char_length(subject) <= 120),
  message text not null check (char_length(message) between 5 and 2000),
  photo_path text not null default '',
  status text not null default 'new' check (status in ('new','in_progress','resolved','spam')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.repair_bookings (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null check (char_length(customer_name) between 2 and 80),
  phone text not null check (char_length(phone) between 7 and 30),
  device text not null check (char_length(device) between 2 and 120),
  fault text not null check (char_length(fault) between 5 and 1000),
  preferred_date date,
  location text not null default '',
  estimate_min integer check (estimate_min is null or estimate_min >= 0),
  estimate_max integer check (estimate_max is null or estimate_max >= 0),
  status text not null default 'requested' check (status in ('requested','confirmed','received','repairing','ready','collected','cancelled')),
  photo_path text not null default '',
  notes text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  category text not null default 'electronics',
  description text not null default '',
  price numeric(12,2),
  stock integer not null default 0 check (stock >= 0),
  image_path text not null default '',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text not null unique default ('HPS-' || upper(substr(replace(gen_random_uuid()::text,'-',''),1,8))),
  customer_name text not null,
  phone text not null,
  email text not null default '',
  delivery_address text not null,
  payment_method text not null check (payment_method in ('cod','esewa','khalti','fonepay','bank_transfer')),
  payment_status text not null default 'pending' check (payment_status in ('pending','paid','failed','refunded')),
  order_status text not null default 'new' check (order_status in ('new','confirmed','packed','shipped','delivered','cancelled')),
  items jsonb not null default '[]'::jsonb,
  subtotal numeric(12,2) not null default 0,
  delivery_fee numeric(12,2) not null default 0,
  total numeric(12,2) not null default 0,
  notes text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.customer_enquiries enable row level security;
alter table public.repair_bookings enable row level security;
alter table public.products enable row level security;
alter table public.orders enable row level security;
revoke all on table public.customer_enquiries, public.repair_bookings, public.products, public.orders from anon, authenticated;
grant all on table public.customer_enquiries, public.repair_bookings, public.products, public.orders to service_role;

insert into storage.buckets (id, name, public)
values ('customer-uploads', 'customer-uploads', false)
on conflict (id) do nothing;
