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
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MLPW6M45" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {children}
        <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MLPW6M45');`}</Script>
      </body>
    </html>
  );
}