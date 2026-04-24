'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SpeakerCard from '@/components/SpeakerCard';

const stations = [
  {
    number: '01',
    title: 'The Body OS Brief',
    desc: 'You receive a real consumer insight — built around personalised function, metabolic health, gut-brain axis support, or a fast-moving beverage or snacking trend — and must build a product concept around it. Format, hero ingredient, claim, price point, target consumer. Teams present, Ritesh deconstructs what works and what doesn\'t.',
  },
  {
    number: '02',
    title: 'The Mouthfeel Challenge',
    desc: 'Reformulating for health without killing taste is the single hardest challenge in F&B NPD right now. You taste and evaluate real reformulated products — sugar-reduced, fibre-fortified, protein-enhanced, functional beverage formats. What\'s landing, what isn\'t, and how do you fix it without losing the consumer or the claim? Mouths involved. No slides.',
  },
  {
    number: '03',
    title: 'The GLP-1 Opportunity',
    desc: 'Weight-loss drugs are quietly rewriting what consumers want from food globally — smaller portions, higher satiety, different ingredient expectations. It is already affecting buying behaviour in markets Indian brands export to, and it is coming here faster than most people think. This station maps what it means for your existing portfolio and where the new product opportunity sits — and what you can actually claim around it under FSSAI today.',
  },
  {
    number: '04',
    title: 'FSSAI Claims Gauntlet',
    desc: 'Five next-generation claim territories on the table — gut-brain axis support, GLP-1 companion nutrition, adaptogen-enhanced beverages, fibre-forward metabolic health, postbiotic fermented formats. Which are permissible under FSSAI today? Which needs clinical backing? Which are coming but not cleared yet?',
    highlight: 'Subha leads this station — as one of FSSAI\'s own national resource persons, this is not a general overview. This is the real answer, from someone who trains the regulators.',
  },
];

const speakers = [
  {
    initials: 'RM',
    initialsColor: '#16A34A',
    image: '/assets/images/savore/Ritesh-circle.png',
    name: 'Ritesh Mathur',
    role: 'FOUNDER',
    company: 'F2F FOOD AND BEVERAGE CONSULTANTS',
    bullets: [
      '20+ years in R&D, NPD, and QSR product development',
      'Patents and publications in functional food and beverages',
      'End-to-end consultancy for cafe chains and QSR brands',
    ],
    focusAreas: ['Functional Food', 'NPD', 'Beverage Innovation', 'QSR'],
  },
  {
    initials: 'SN',
    initialsColor: '#86EFAC',
    name: 'FT Subha Nishtala',
    'image':'/assets/images/savore/Subhaprada Nishtala-circle.png',
    role: 'FOUNDER',
    company: 'FOOD ADROIT',
    bullets: [
      '25 years in food safety, regulatory affairs & quality operations',
      'National VP, AFST(I) — trains FSSAI regulatory officers',
      '400+ trainings across HACCP, ISO 22000, and FSSC 22000',
    ],
    focusAreas: ['FSSAI Claims', 'Food Safety', 'Regulatory Compliance'],
  },
  {
    initials: 'SR',
    initialsColor: '#15803D',
    image: '/assets/images/savore/SIDDHARTH RUSTAGI.png',
    name: 'Siddharth Rustagi',
    role: 'CO-FOUNDER',
    company: 'INNOBEV',
    bullets: [
      '10+ years in food technology, food science and FMCG production',
      'Specialist in beverage formulation, food processing and quality systems',
      'Hands-on experience taking products from R&D to scalable manufacturing',
    ],
    focusAreas: ['Food Technology', 'Beverage Formulation', 'Food Processing', 'Quality Systems'],
  },
];

export default function SavoreHero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const reveals = ref.current?.querySelectorAll('.reveal');
    if (!reveals) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active'); }),
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
          <Link href="/" className="hover:text-foreground transition-colors">All Workshops</Link>
          <span>/</span>
          <span className="text-savore font-600">SAVORE</span>
        </div>
      </div>

      <div className="max-w-8xl mx-auto p-6 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Title block */}
            <div>
              <div className="reveal">
                <span className="tag-pill bg-savore text-white mb-5 inline-block" style={{ borderRadius: '2px' }}>
                  Food & Beverage
                </span>
              </div>
            
              <div className="inline-block border border-savore p-[10px] mb-3 reveal reveal-delay-1">
                <Image src="/assets/logo/workshop_logos/SAVORE.png" alt="SAVORE" height={64} width={200} className="h-16 w-auto object-contain" />
              </div>
              <p className="font-display font-light italic text-2xl sm:text-3xl text-foreground leading-tight mb-2 reveal reveal-delay-1">
                Body OS — Building for the Way India Will Eat in Future
              </p>
              <p className="font-display font-light italic text-xl text-muted leading-tight reveal reveal-delay-2">
                From consumer trend to product concept — built live in the room
              </p>
            </div>

            {/* About */}
            <div className="reveal">
              <p className="section-label mb-4">About the Workshop</p>
              <div className="space-y-4 text-base font-sans text-muted leading-relaxed">
                <p>
                  The way Indian consumers think about food has fundamentally changed. It's no longer about just taste, or even health in a broad sense. It's about what food actively does for the body — today, specifically, for me. Protein for recovery. Gut health for immunity. Adaptogens for stress. Fibre for metabolic balance. Consumers are treating their bodies like an operating system that needs to be maintained, upgraded, and optimised through what they eat. This is what Body OS means — and it is the single biggest shift reshaping F&B product development in 2026–27.
                </p>
                <p>
                  The opportunity is real across every F&B category — food, beverage, snacking, functional formats, QSR, cafe. But the failure rate is high. Everyone is building for this consumer. Almost nobody is getting the product, the taste, and the compliance right at the same time. Products fail not because the idea was wrong — but because the brief was wrong before development even began, or because the claim couldn't survive FSSAI scrutiny after the product was already made.
                </p>
                <p>
                  Savore puts both problems in the same room. Innovation and compliance. Product and regulation. Brief and launch-readiness. Two experts, four stations, one product concept you leave with in your hand.
                </p>
              </div>
            </div>

            {/* What Happens */}
            <div className="reveal">
              <p className="section-label mb-2">What Happens</p>
              <p className="text-sm font-sans text-muted mb-6">Four live stations. No slides. Hands on throughout.</p>
              <div className="space-y-4">
                {stations.map((s) => (
                  <div key={s.number} className="p-5 bg-background border border-border" style={{ borderRadius: '2px' }}>
                    <div className="flex items-start gap-4">
                      <span className="block-badge text-savore border-savore/30 shrink-0">{s.number}</span>
                      <div>
                        <p className="font-sans font-700 text-foreground text-sm mb-2">{s.title}</p>
                        <p className="text-sm font-sans text-muted leading-relaxed">{s.desc}</p>
                        {s.highlight && (
                          <p className="text-xs font-sans font-600 text-savore mt-2 italic">{s.highlight}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Closing Brief */}
            <div className="reveal p-6 bg-primary text-white" style={{ borderRadius: '2px' }}>
              <p className="text-xs font-sans font-700 tracking-widest uppercase text-white/50 mb-2">The Closing Brief</p>
              <p className="text-white font-sans text-sm leading-relaxed mb-3">
                Every attendee leaves with one thing: a one-page product brief for a product that didn't exist when they walked in — built on 2026–27 science, with a defensible FSSAI claim, a mouthfeel specification, and a target consumer who actually exists. The mentors review one live in the room.
              </p>
              <p className="text-white/60 font-display font-light italic text-base">
                The brief is where most F&B products die. This is where yours gets written right.
              </p>
            </div>

            {/* What You Leave With */}
            <div className="reveal">
              <p className="section-label mb-4">What You Leave With</p>
              <div className="space-y-3">
                {[
                  'A real, usable one-page product brief.',
                  'Clarity on which 2026–27 claim territories are winnable under FSSAI right now.',
                  'Direct input from two of the most experienced practitioners in Indian F&B — across innovation, product development, and regulatory compliance — in a room of under 50 people.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-savore flex-shrink-0" />
                    <p className="text-base font-sans text-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Should Be in This Room */}
            <div className="reveal">
              <p className="section-label mb-4">Who Should Be in This Room</p>
              <div className="flex flex-wrap gap-2">
                {['F&B Brand Founders', 'NPD & Innovation Leads', 'Food Technologists', 'QSR & Cafe Brands', 'Manufacturers exploring branded play', 'Health & Wellness Brands', 'Anyone building a food or beverage product in 2026'].map((r) => (
                  <span key={r} className="px-3 py-1.5 bg-green-50 border border-green-200 text-savore text-xs font-sans font-600 tracking-wide" style={{ borderRadius: '2px' }}>
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Conducted By */}
            <div className="reveal">
              <p className="section-label mb-5">Conducted By</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {speakers.map((s) => (
                  <SpeakerCard key={s.name} {...s} companyColor="text-savore" />
                ))}
              </div>
              <p className="text-xs font-sans text-muted mt-4 italic">One innovator. One regulator. Both in the room with you.</p>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 reveal reveal-delay-2">
            <div className="sticky top-28 bg-background border border-border p-6 space-y-5" style={{ borderRadius: '2px' }}>
              <div>
                <p className="section-label mb-3">Workshop Details</p>
                <div className="space-y-3">
                  {[
                    { icon: '⏱', label: 'Duration', value: '~2 hours' },
                    { icon: '🕒', label: 'Time', value: '2:45 – 4:15 PM' },
                    { icon: '📅', label: 'Date', value: '4 May 2026' },
                    { icon: '📍', label: 'Venue', value: 'Jio World Convention Centre, BKC' },
                    { icon: '🧪', label: 'Format', value: '4 Live Stations' },
                  ].map((d) => (
                    <div key={d.label} className="flex items-start gap-3">
                      <span className="text-sm">{d.icon}</span>
                      <div>
                        <p className="text-[10px] font-sans font-600 tracking-widest uppercase text-muted">{d.label}</p>
                        <p className="text-sm font-sans text-foreground font-500">{d.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <hr className="border-border" />
              <div>
                <p className="section-label mb-3">For</p>
                {['F&B Brand Founders', 'NPD Teams', 'Food Technologists', 'QSR & Cafe Brands', 'Manufacturers'].map((r) => (
                  <div key={r} className="flex items-center gap-2 py-1.5 text-sm font-sans text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-savore flex-shrink-0" />
                    {r}
                  </div>
                ))}
              </div>
              <hr className="border-border" />
              <a
                href="https://www.cmplexpo.com/cmpl-workshops-2026/?wm26"
                className="block w-full text-center px-5 py-3 bg-savore text-white text-xs font-sans font-600 tracking-widest uppercase hover:opacity-90 transition-opacity"
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
