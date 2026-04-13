'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SpeakerCard from '@/components/SpeakerCard';

const stations = [
  {
    icon: '🧪',
    label: 'Science',
    desc: 'Is the claim defensible? What does the evidence actually say?',
  },
  {
    icon: '🧴',
    label: 'Formulation',
    desc: 'Can the formula support the claim? What would it take to fix it?',
  },
  {
    icon: '📦',
    label: 'Brand & Packaging',
    desc: 'Where did communication break down? What does the brand do now?',
  },
];

const speakers = [
  {
    initials: 'SS',
    initialsColor: '#A78BFA',
    image: '/assets/images/banawat/SARVANGI.png',
    name: 'Sarvangi Shah',
    role: 'Founder',
    company: 'Noya Beauty Works',
    bullets: [
      'Launched over 131 SKUs across BPC categories',
      'Shaped product strategy at Nykaa and MyGlamm',
      'Expert in taking ambitious product ideas from concept to shelf',
    ],
    focusAreas: ['Brand Strategy', 'NPD', 'Pack Claims'],
  },
  {
    initials: 'ML',
    initialsColor: '#7C3AED',
    image: '/assets/images/banawat/MOHIT.png',
    name: 'Dr. Mohit Lalwani',
    role: 'MD',
    company: 'Mascot Spincontrol Universal',
    bullets: [
      'Deep expertise across skin, hair, and pet health formulation',
      'Built and scaled D2C and B2B formulation businesses across India',
      'Expert in actives, product architecture & BPC brand development',
    ],
    focusAreas: ['Formulation Science', 'Biotech Actives', 'Regulatory Compliance'],
  },
];

export default function BanawatHero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const reveals = ref.current?.querySelectorAll('.reveal');
    if (!reveals) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('active');
        }),
      { threshold: 0.05 }
    );
    reveals.forEach((el) => {
      observer.observe(el);
      const rect = (el as HTMLElement).getBoundingClientRect();
      if (rect.top < window.innerHeight) el.classList.add('active');
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="pt-16 bg-surface border-b border-border">
      {/* Breadcrumb */}
      <div className="max-w-8xl mx-auto p-6 lg:p-10">
        <div className="flex items-center gap-2 text-xs font-sans text-muted">
          <Link href="/" className="hover:text-foreground transition-colors">
            All Workshops
          </Link>
          <span>/</span>
          <span className="text-banawat font-600">BANAWAT</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="max-w-8xl mx-auto p-6 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Title block */}
            <div>
              <div className="reveal">
                <span
                  className="tag-pill bg-banawat text-white mb-5 inline-block"
                  style={{ borderRadius: '2px' }}
                >
                  BPC · Cosmetics
                </span>
              </div>
              <p className="text-xs font-sans font-600 tracking-widest uppercase text-muted mb-2 reveal">
                Theme: FORMULA X
              </p>
              <div className="inline-block border border-banawat px-[10px] mb-3 reveal reveal-delay-1">
                <Image
                  src="/assets/logo/workshop_logos/BANAWAT.png"
                  alt="BANAWAT"
                  height={64}
                  width={200}
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="font-display font-light italic text-2xl sm:text-3xl text-foreground leading-tight mb-2 reveal reveal-delay-1">
                Building the Next Generation Indian BPC Product — From the Inside Out
              </p>
              <p className="font-display font-light italic text-xl text-muted leading-tight reveal reveal-delay-2">
                Your Claim Is on Pack. Can You Defend It?
              </p>
            </div>

            {/* About */}
            <div className="reveal reveal-delay-2">
              <p className="section-label mb-4">About the Workshop</p>
              <div className="space-y-4 text-base font-sans text-muted leading-relaxed">
                <p>
                  One wrong claim can unravel years of brand building. In BPC today, the gap between
                  what a formula can deliver, what science can defend, and what packaging promises
                  is where brands get into trouble — not because they intended to mislead, but
                  because these three functions rarely speak to each other before a product goes to
                  market.
                </p>
                <p>
                  Formula X is a 2-hour working session that exposes that gap — and gives you the
                  tools to close it.
                </p>
              </div>
            </div>

            {/* What Happens */}
            <div className="reveal reveal-delay-3">
              <p className="section-label mb-4">What Happens</p>
              <p className="text-base font-sans text-muted leading-relaxed mb-6">
                The session opens with a crisis scenario — a fictional BPC brand under fire for a
                claim that science, formulation, and packaging never agreed on. You're placed inside
                that brand's war room, working alongside experts to diagnose what broke and decide
                what to do.
              </p>
              <p className="text-sm font-sans text-muted mb-4">
                The room runs across three live expert stations:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {stations.map((s) => (
                  <div
                    key={s.label}
                    className="p-5 bg-purple-50 border border-purple-100"
                    style={{ borderRadius: '2px' }}
                  >
                    <p className="text-2xl mb-2">{s.icon}</p>
                    <p className="text-banawat text-xs font-sans font-700 tracking-widest uppercase mb-2">
                      {s.label}
                    </p>
                    <p className="text-sm font-sans text-muted leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-base font-sans text-muted leading-relaxed">
                Then the simulation ends — and you apply the same framework to your own product or
                idea, with experts available for direct, honest feedback on your actual brand.
              </p>
            </div>

            {/* What You Leave With */}
            <div className="reveal">
              <p className="section-label mb-4">What You Leave With</p>
              <div className="space-y-3">
                {[
                  'A completed audit of one real claim from your brand or pipeline.',
                  'A framework you can use on every claim before it goes to print.',
                  'Direct input from two of the most respected practitioners in Indian BPC.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-banawat flex-shrink-0" />
                    <p className="text-base font-sans text-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Should Be in This Room */}
            <div className="reveal">
              <p className="section-label mb-4">Who Should Be in This Room</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  'Brand Founders',
                  'Formulators',
                  'Marketers',
                  'NPD Leads',
                  'Anyone building in BPC',
                ].map((r) => (
                  <span
                    key={r}
                    className="px-3 py-1.5 bg-purple-50 border border-purple-100 text-banawat text-xs font-sans font-600 tracking-wide"
                    style={{ borderRadius: '2px' }}
                  >
                    {r}
                  </span>
                ))}
              </div>
              <p className="text-sm font-sans text-muted leading-relaxed">
                If you are building a BPC brand, developing a product, deciding what goes on a pack,
                or planning to enter this space — this session is built for you.
              </p>
            </div>

            {/* A Note */}
            <div
              className="reveal p-5 bg-gold-light border border-accent/20"
              style={{ borderRadius: '2px' }}
            >
              <p className="text-xs font-sans font-700 tracking-widest uppercase text-accent mb-2">
                A Note
              </p>
              <p className="text-sm font-sans text-foreground leading-relaxed">
                The crisis scenario is built around a neuroscience-based skincare claim — one of the
                most contested spaces in BPC today. The scenario may be updated closer to the event
                to reflect the most current conversation in the industry. The framework stays the
                same.
              </p>
            </div>

            {/* Conducted By */}
            <div className="reveal">
              <p className="section-label mb-5">Conducted By</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {speakers.map((s) => (
                  <SpeakerCard key={s.name} {...s} companyColor="text-banawat" />
                ))}
              </div>
              <p className="text-xs font-sans text-muted mt-4 italic">
                One manufacturer. One brand strategist. Both in the room with you.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 reveal reveal-delay-2">
            <div
              className="sticky top-28 bg-background border border-border p-6 space-y-5"
              style={{ borderRadius: '2px' }}
            >
              <div>
                <p className="section-label mb-3">Workshop Details</p>
                <div className="space-y-3">
                  {[
                    { icon: '⏱', label: 'Duration', value: '~2 hours' },
                    { icon: '🕛', label: 'Time', value: '12:00 – 2:00 PM' },
                    { icon: '📅', label: 'Date', value: '4 May 2026' },
                    { icon: '📍', label: 'Venue', value: 'Jio World Convention Centre, BKC' },
                    { icon: '👥', label: 'Experts', value: '2 Expert Facilitators' },
                  ].map((d) => (
                    <div key={d.label} className="flex items-start gap-3">
                      <span className="text-sm">{d.icon}</span>
                      <div>
                        <p className="text-[10px] font-sans font-600 tracking-widest uppercase text-muted">
                          {d.label}
                        </p>
                        <p className="text-sm font-sans text-foreground font-500">{d.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <hr className="border-border" />
              <div>
                <p className="section-label mb-3">For</p>
                {['Brand Founders', 'Formulators', 'Marketers', 'NPD Leads'].map((r) => (
                  <div
                    key={r}
                    className="flex items-center gap-2 py-1.5 text-sm font-sans text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-banawat flex-shrink-0" />
                    {r}
                  </div>
                ))}
              </div>
              <hr className="border-border" />
              <a
                href="https://www.cmplexpo.com/cmpl-workshops-2026/?wm26"
                className="block w-full text-center px-5 py-3 bg-banawat text-white text-xs font-sans font-600 tracking-widest uppercase hover:opacity-90 transition-opacity"
                style={{ borderRadius: '2px' }}
              >
                Register
              </a>
              <Link
                href="/#workshops"
                className="block w-full text-center px-5 py-2.5 border border-border text-foreground text-xs font-sans font-600 tracking-widest uppercase hover:bg-surface transition-colors"
                style={{ borderRadius: '2px' }}
              >
                ← All Workshops
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
