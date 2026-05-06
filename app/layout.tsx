import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'ToInvested Growth Studio | Real Estate Marketing, SEO & Lead Generation',
  description:
    'A conversion-focused expert studio for real estate teams, lenders, brokers, developers, and growth-minded businesses.',
  keywords: [
    'real estate website design',
    'mortgage lead generation',
    'broker marketing',
    'SEO expert',
    'conversion optimization',
    'real estate landing pages',
  ],
  openGraph: {
    title: 'ToInvested Growth Studio',
    description:
      'Expert website design, SEO, conversion strategy, marketing, copywriting, and lead generation for real estate and lending brands.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
