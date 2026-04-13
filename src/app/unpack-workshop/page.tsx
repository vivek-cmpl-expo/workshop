import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkshopCrossLinks from '@/components/WorkshopCrossLinks';
import UnpackHero from './components/UnpackHero';
import UnpackMentors from './components/UnpackMentors';
import UnpackMyths from './components/UnpackMyths';
import UnpackActivity from './components/UnpackActivity';
import UnpackCompliance from './components/UnpackCompliance';

export const metadata: Metadata = {
  title: 'UNPACK — Packaging Workshop · CMPL Expo Mumbai 2026',
  description: 'Does Your Pack Make the Grade? Hands-on packaging workshop at CMPL Expo 2026. EU PPWR, UK DRS, Grade Your Pack activity. With Vaibhav Dixit (ALPLA) & Sridhar J (Pureplay Skin Sciences).',
};

export default function UnpackWorkshop() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <UnpackHero />

      <Footer />
    </main>
  );
}