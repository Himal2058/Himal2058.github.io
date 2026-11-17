import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Complete your order',
  robots: { index: false, follow: true }
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
