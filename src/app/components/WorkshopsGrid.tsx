'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

interface Workshop {
  id: string;
  href: string;
  name: string;
  logo: string;
  edition?: string;
  tagline: string;
  subtitle: string;
  duration: string;
  format: string;
  date?: string;
  time?: string;
  venue?: string;
  experts?: string;
  audience: string[];
  color: string;
  accentBg: string;
  borderColor: string;
  tag: string;
  tagBg: string;
  tagColor: string;
  highlights: string[];
  collage?: string;
}

const workshops: Workshop[] = [
  {
    id: 'banawat',
    href: '/banawat-workshop',
    name: 'BANAWAT',
    logo: '/assets/logo/workshop_logos/BANAWAT.webp',
    tagline: 'Your Claim Is on Pack. Can You Defend It?',
    subtitle: 'Building the Next Generation Indian BPC Product — From the Inside Out',
    duration: '~2 hours',
    format: '2 Experts',
    date: '4 May 2026',
    time: '12:00 – 2:00 PM',
    venue: 'Special Events Area, Level 3, Jasmine Hall',
    experts: '2 Experts',
    audience: ['Brand Founders', 'Formulators', 'Marketers', 'NPD Leads'],
    color: 'text-banawat',
    accentBg: 'bg-purple-50',
    borderColor: 'border-purple-200',
    tag: 'BPC · Cosmetics',
    tagBg: 'bg-banawat',
    tagColor: 'text-white',
    highlights: [
      "The formula behind every claim that doesn't get cancelled",
      'Live crisis simulation · real trade-offs · expert pressure-test',
      'Walk out knowing exactly where your product stands',
    ],
    collage: '/assets/main_hero_section/BANAWAT COLLAGE.png',
  },
  {
    id: 'savore',
    href: '/savore-workshop',
    name: 'SAVORE',
    logo: '/assets/logo/workshop_logos/SAVORE.webp',
    tagline: 'Body OS — Building for the Way India Will Eat in Future',
    subtitle: 'From consumer trend to product concept — built live in the room',
    duration: '~2 hours',
    format: '4 Live Stations',
    date: '4 May 2026',
    time: '2:45 – 4:15 PM',
    venue: 'Special Events Area, Level 3, Jasmine Hall',
    experts: '2 Experts',
    audience: ['F&B Brand Founders', 'NPD Teams', 'Food Technologists', 'QSR & Cafe Brands', 'Manufacturers'],
    color: 'text-savore',
    accentBg: 'bg-green-50',
    borderColor: 'border-green-200',
    tag: 'Food & Beverage',
    tagBg: 'bg-savore',
    tagColor: 'text-white',
    highlights: [
      'Taste and fix real reformulated products — functional, clean label, protein-forward',
      'From consumer trend to product concept — built live in the room',
      'FSSAI claims decoded — what you can say, what you can\'t, and what\'s coming',
    ],
    collage: '/assets/main_hero_section/SAVORE COLLAGE.jpg',
  },
  {
    id: 'unpack',
    href: '/unpack-workshop',
    name: 'UNPACK',
    logo: '/assets/logo/workshop_logos/UNPACK.webp',
    tagline: 'Does Your Pack Make the Grade?',
    subtitle: 'The Packaging on Your Shelf May Already Be Illegal',
    duration: '~2 hours',
    format: '6 Blocks',
    date: '5 May 2026',
    time: '12:15 – 2:15 PM',
    venue: 'Special Events Area, Level 3, Jasmine Hall',
    experts: '2 Experts',
    audience: ['Brand Founders', 'Packaging Teams', 'Product Developers', 'Manufacturers'],
    color: 'text-unpack',
    accentBg: 'bg-amber-50',
    borderColor: 'border-amber-200',
    tag: 'Packaging ',
    tagBg: 'bg-unpack',
    tagColor: 'text-white',
    highlights: [
      'Handle real materials — rPET, ocean plastic, fibre bottles — before a single slide',
      'Grade 5 everyday products for recyclability. Almost everyone gets it wrong.',
      '4 regulations, 4 deadlines — what they mean for your pack right now',
    ],
  },
  {
    id: 'launchpad',
    href: '/launchpad-workshop',
    name: 'LAUNCHPAD',
    logo: '/assets/logo/workshop_logos/LAUNCHPAD.webp',
    tagline: 'Your Global Journey Starts Here',
    subtitle: 'For Every Brand Ready to Sell Beyond India',
    duration: '90 minutes',
    format: '6 Structured Blocks',
    date: '5 May 2026',
    time: '3:00 – 5:00 PM',
    venue: 'Special Events Area, Level 3, Jasmine Hall',
    experts: 'TBC',
    audience: ['Brand Founders', 'Export Heads', 'First-Time Exporters', 'D2C Brands eyeing global'],
    color: 'text-launchpad',
    accentBg: 'bg-blue-50',
    borderColor: 'border-blue-200',
    tag: 'FMCG · Exports · Cross Border',
    tagBg: 'bg-launchpad',
    tagColor: 'text-white',
    highlights: [
      'Sell internationally — via marketplaces, e-commerce & distributors',
      'Compliance, documentation & getting market-ready globally',
      'Food, non-food, health & wellness — all covered',
    ],
  },
];

export default function WorkshopsGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    if (!reveals) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('active');
        }),
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="workshops" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="reveal mb-10 flex flex-col lg:flex-row lg:items-center gap-8 pb-8 border-b border-border">

          {/* Centre — description */}
          <p className="text-muted text-xl sm:text-2xl font-sans leading-relaxed max-w-xl">
            Each workshop is designed for a specific industry and role. Choose the one built for
            your next move.
          </p>

          {/* Right — category tags 2×2 */}
          <div className="grid grid-cols-2 gap-2 shrink-0 ml-auto">
            {workshops.map((w) => (
              <span
                key={w.id}
                className={`px-4 py-2 text-[11px] font-sans font-700 tracking-widest uppercase text-white text-center ${w.tagBg}`}
                style={{ borderRadius: '2px' }}
              >
                {w.tag}
              </span>
            ))}
          </div>
        </div>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {workshops.map((w, i) => (
            <div
              key={w.id}
              className={`reveal reveal-delay-${i + 1} group relative bg-surface border ${w.borderColor} workshop-card overflow-hidden`}
              style={{ borderRadius: '2px' }}
            >
              {/* Top accent bar */}
              <div className={`h-1.5 w-full ${w.tagBg}`} />

              <div className="p-6 sm:p-8 flex flex-col h-full">
                {/* Tag + edition */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`tag-pill ${w.color}`}
                    style={{ borderRadius: '2px' }}
                  >
                    {w.tag}
                  </span>
                  {w.edition && (
                    <span className="text-muted text-xs font-sans tracking-wider">
                      {w.edition}
                    </span>
                  )}
                </div>

                {/* Workshop name */}
                <h3 className={`inline-block self-start font-sans font-700 text-2xl sm:text-3xl tracking-widest uppercase text-white ${w.tagBg} px-4 py-2 mb-3`}>
                  {w.name}
                </h3>

                {/* Tagline */}
                <p className="font-display font-light italic text-2xl sm:text-3xl text-foreground leading-snug mb-2">
                  {w.tagline}
                </p>
                <p className="font-display font-light italic text-xl text-muted leading-snug mb-6">
                  {w.subtitle}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-border">
                  <div className="flex items-center gap-1.5 text-sm font-sans text-muted">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
                    </svg>
                    {w.date ?? 'May 2026'}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-sans text-muted">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" strokeLinecap="round" />
                    </svg>
                    {w.time ?? w.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-sans text-muted">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    {w.venue ?? 'Special Events Area, Level 3, Jasmine Hall'}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-sans text-muted">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
                    </svg>
                    {w.experts ?? w.format}
                  </div>
                </div>

                {/* Audience */}
                <div className="mb-5">
                  <p className="text-xs font-sans font-600 tracking-widest uppercase text-muted mb-2">
                    For:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {w.audience.map((a) => (
                      <span
                        key={a}
                        className="px-3 py-1.5 bg-background border border-border text-sm font-sans text-foreground"
                        style={{ borderRadius: '2px' }}
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-7">
                  {w.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-base font-sans text-muted">
                      <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${w.tagBg}`} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto flex flex-wrap gap-3">
                  <Link
                    href={w.href}
                    className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-sans font-600 tracking-widest uppercase border ${w.borderColor} ${w.color} hover:opacity-80 transition-opacity`}
                    style={{ borderRadius: '2px' }}
                  >
                    View Workshop
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <a
                    href="https://www.cmplexpo.com/cmpl-workshops-2026/?wm26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-sans font-600 tracking-widest uppercase text-white ${w.tagBg} hover:opacity-90 transition-opacity`}
                    style={{ borderRadius: '2px' }}
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
