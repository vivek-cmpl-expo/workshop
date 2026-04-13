import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkshopCrossLinks from '@/components/WorkshopCrossLinks';
import SavoreHero from './components/SavoreHero';
import SavoreForces from './components/SavoreForces';
import SavoreBlocks from './components/SavoreBlocks';
import SavoreAudience from './components/SavoreAudience';

export const metadata: Metadata = {
  title: 'SAVORE — F&B New Product Development Workshop · CMPL Expo 2026',
  description: 'From Trend to Table. Hands-on F&B NPD workshop at CMPL Expo Mumbai 2026. Taste real ingredients, build a live brief, debate Kill or Launch. For F&B brand founders and NPD teams.',
};

export default function SavoreWorkshop() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <SavoreHero />
  
      <Footer />
    </main>
  );
}