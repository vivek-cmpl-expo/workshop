import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkshopCrossLinks from '@/components/WorkshopCrossLinks';
import BanawatHero from './components/BanawatHero';
import BanawatStations from './components/BanawatStations';
import BanawatAudience from './components/BanawatAudience';
import BanawatTimeline from './components/BanawatTimeline';

export const metadata: Metadata = {
  title: 'BANAWAT Formula X — BPC Formulation Workshop · CMPL Expo 2026',
  description: 'Hands-on BPC formulation workshop at CMPL Expo Mumbai 2026. Biotech actives, AI in the lab, Cosmetics Amendment Rules 2025. For R&D leads and formulation experts.',
};

export default function BanawatWorkshop() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <BanawatHero />
    
      <Footer />
    </main>
  );
}