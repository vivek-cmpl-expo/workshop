import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import WorkshopsGrid from './components/WorkshopsGrid';
import AudienceNavigator from './components/AudienceNavigator';
import EventContextSection from './components/EventContextSection';
import PitchDaySection from './components/PitchDaySection';

export const metadata: Metadata = {
  title: 'CMPL Expo Workshops 2026 — IDEA TO SHELF, Mumbai',
  description: 'Four industry workshops at CMPL Expo Mumbai 2026: BANAWAT, LAUNCHPAD, SAVORE & UNPACK. 4–6 May, Jio World Convention Centre.',
};

export default function Homepage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WorkshopsGrid />
      <AudienceNavigator />
      <PitchDaySection />
      <EventContextSection />
      <div className="max-w-8xl mx-auto px-6 lg:px-10 py-6">
        <p className="text-base font-sans text-muted italic text-center">Workshop content and speakers may be updated as needed, while the overarching theme remains intact.</p>
      </div>
      <Footer />
    </main>
  );
}