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
