import React from 'react';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import '../styles/index.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'CMPLExpo Workshops — IDEA TO SHELF, Mumbai 2026',
  description: 'Four industry workshops at CMPL Expo Mumbai 2026 — BANAWAT Formula X, LAUNCHPAD, SAVORE & UNPACK. 4–6 May 2026, Jio World Convention Centre.',
  icons: {
    icon: [
      { url: '/assets/images/favicon-32x32.png', type: 'image/png', sizes: '32x32' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
 
    </html>
  );
}