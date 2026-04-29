'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SpeakerCard from '@/components/SpeakerCard';

const blocks = [
  {
    number: '01',
    title: 'The Crisis Scenario',
    tag: 'Reframe',
    desc: "The session opens inside a war room. A fictional BPC brand is under fire — a neuroscience-based skincare claim has been called out, and the formula, science, and packaging all gave different answers. You're placed inside that brand's team, working to diagnose what broke and decide what to do. No slides. No intro. Just the problem.",
  },
  {
    number: '02',
    title: 'Inside the Industry',
    tag: 'Real Talk',
    desc: "Two practitioners who sit across hundreds of briefs, pitches, and formulation conversations share what they're actually seeing — the patterns behind failed claims, delisted products, and the questions founders should have asked before launch but didn't.",
  },
  {
    number: '03',
    title: 'Case Studies: What Went Wrong',
    tag: 'Learn',
    desc: 'Four real scenarios. An Ayurvedic brand with a clean claim and an INCI list that told a different story. An SPF 50+ product that tested at 14.98. A beauty product with packaging that trapped the formula. A brand delisted by a major retailer over missing regulatory details. Each one unpacked — what went wrong, why, and what the fix would have been.',
  },
  {
    number: '04',
    title: 'Live Founder on Stage',
    tag: 'Act',
    desc: "A founder — launched or close to launch — brings their product into the room. Their hero claim, their biggest worry, and the thing they'd be most nervous a sharp buyer would notice. Experts respond in real time: is that nervousness justified, and what would it actually take to close the gap? One clear action to walk out with.",
  },
  {
    number: '05',
    title: 'New Era of Product Development',
    tag: 'Build',
    desc: 'What does the next generation of Indian BPC actually look like? Two emerging directions: neurocosmetics and inside-out formulation — building the product from efficacy backwards. And packaging that is a product decision, not a supply chain decision. What it takes to build for both.',
  },
  {
    number: '06',
    title: 'How to Read a Label',
    tag: 'Decode',
    desc: 'INCI order equals concentration. How to estimate percentages without disclosed numbers. A claims vs. INCI reality decoder. What certifications actually mean vs. what they imply. Closes with a live 60-second label audit on a real product in the room.',
  },
  {
    number: '07',
    title: 'Own Your Formula',
    tag: 'Defend',
    desc: "Why your formula is your most defensible asset — and how to treat it like one. What's coming out of Paris that will hit Indian shelves next. And why AI-generated formulations need a real formulator's eye before they go anywhere near production.",
  },
  {
    number: '08',
    title: 'Red Flag or Green Flag',
    tag: 'Play',
    desc: 'A live audience game. 15 claims across formulation, packaging, and certifications — covering hero actives, sustainability language, dosage claims and certifications. Cards up simultaneously, reveal after 20 seconds. No wrong answers. Debate is the point.',
  },
];

const speakers = [
  {
    initials: 'SS',
    initialsColor: '#A78BFA',
    image: '/assets/images/banawat/SARVANGI.png',
    name: 'Sarvangi Shah',
    role: 'Founder',
    company: 'Noya Beauty Works (NBW)',
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
    name: 'Dr. Mohit Lalvani',
    role: 'Managing Director',
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
                Your Claim Is on Pack. Can You Defend It?
              </p>
              <p className="font-display font-light italic text-xl text-muted leading-tight reveal reveal-delay-2">
                Building the Next Generation Indian BPC Product — From the Inside Out.
              </p>
            </div>

            {/* About */}
            {/* Quote */}
            <div
              className="reveal p-5 border-l-4 border-banawat bg-purple-50"
              style={{ borderRadius: '0 2px 2px 0' }}
            >
              <p className="font-display font-light italic text-lg sm:text-xl text-foreground leading-relaxed">
                "One wrong claim can unravel years of brand building. The gap between what a formula
                can deliver, what science can defend, and what packaging promises is where brands
                get into trouble — not because they intended to mislead, but because these three
                functions rarely speak to each other before a product goes to market."
              </p>
            </div>

            <div className="reveal reveal-delay-2">
              <p className="section-label mb-4">About the Workshop</p>
              <div className="space-y-4 text-base font-sans text-muted leading-relaxed">
                <p>In BPC today, the cost of getting a claim wrong is higher than ever.</p>
                <p>
                  Neuroscience-backed skincare. Actives-led formulations. Dermat-approved language.
                  The claims are getting bolder — and the scrutiny is getting sharper. Retailers
                  delist. Consumers screenshot. Regulators move faster than brands track.
                </p>
                <p>
                  The problem is rarely the claim itself. It's that the formula, the science, and
                  the packaging never had a conversation before the product went to market. BANAWAT
                  puts all three in the same room — and pressure-tests them together.
                </p>
                <p>
                  This is a 2-hour working session. Not a talk. Not a panel. You arrive with a
                  product or an idea — and you leave with a clear-eyed view of where it stands,
                  what's defensible, and what needs to change before it goes anywhere near a shelf.
                </p>
              </div>
            </div>

            {/* What Happens — 9 Blocks */}
            <div className="reveal reveal-delay-3">
              <p className="section-label mb-2">What Happens</p>
              <p className="text-sm font-sans text-muted mb-6">
                Eight blocks. Two hours. Zero filler.
              </p>
              <div className="space-y-4">
                {blocks.map((b) => (
                  <div
                    key={b.number}
                    className="p-5 bg-background border border-border"
                    style={{ borderRadius: '2px' }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="block-badge text-banawat border-banawat/30 shrink-0">
                        {b.number}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-sans font-700 text-foreground text-sm">{b.title}</p>
                          <span
                            className="px-2 py-0.5 bg-purple-50 border border-purple-200 text-banawat text-[10px] font-sans font-600 tracking-widest uppercase"
                            style={{ borderRadius: '2px' }}
                          >
                            {b.tag}
                          </span>
                        </div>
                        <p className="text-sm font-sans text-muted leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What You Leave With */}
            <div className="reveal">
              <p className="section-label mb-4">What You Leave With</p>
              <div className="space-y-3">
                {[
                  'A completed audit of one real claim from your brand or pipeline — done in the room.',
                  'A framework you can apply to every claim before it goes to print.',
                  'A Formulation Red Flag Checklist — printed, to take away.',
                  'Direct input from two of the most experienced practitioners in Indian BPC — in a room of under 50 people.',
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
                  'BPC Brand Founders',
                  'Formulators',
                  'Marketers & NPD Leads',
                  'Anyone building, launching or scaling a BPC product',
                  'Anyone who has ever put a claim on a pack and hoped for the best',
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

            {/* Conducted By */}
            <div className="reveal">
              <p className="section-label mb-5">Conducted By</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {speakers.map((s) => (
                  <SpeakerCard key={s.name} {...s} companyColor="text-banawat" />
                ))}
              </div>
              <p className="text-xs font-sans text-muted mt-4 italic">
                One formulator. One brand strategist. One investor. All three in the room with you.
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
                    {
                      icon: '🧱',
                      label: 'Format',
                      value: '8 Blocks · Crisis | Real Talk | Case Studies | Live | Play',
                    },
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
                href="https://workshops.cmplexpo.com/from/public"
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
      <div className="max-w-8xl mx-auto px-6 lg:px-10 py-6">
        <p className="text-base font-sans text-muted italic text-center">Workshop content and speakers may be updated as needed, while the overarching theme remains intact.</p>
      </div>
    </section>
  );
}
