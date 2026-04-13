import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkshopCrossLinks from '@/components/WorkshopCrossLinks';
import LaunchpadHero from './components/LaunchpadHero';
import LaunchpadBlocks from './components/LaunchpadBlocks';
import LaunchpadMasterclass from './components/LaunchpadMasterclass';
import LaunchpadAudience from './components/LaunchpadAudience';

export const metadata: Metadata = {
  title: 'LAUNCHPAD — FMCG Global Export Workshop · CMPL Expo 2026',
  description: 'Your global export journey starts here. 90-minute structured workshop for Indian FMCG brands. IEC, compliance, marketplace strategy, First 90 Days masterclass. 4 May 2026, JWCC Mumbai.',
};

export default function LaunchpadWorkshop() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <LaunchpadHero />

      <Footer />
    </main>
  );
}