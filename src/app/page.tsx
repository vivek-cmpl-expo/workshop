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
      <Footer />
    </main>
  );
}