'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface Workshop {
  href: string;
  name: string;
  color: string;
  bg: string;
  reason: string;
}

interface Interest {
  id: string;
  label: string;
  workshops: Workshop[];
}

const interests: Interest[] = [
  {
    id: 'beauty',
    label: 'Beauty',
    workshops: [
      { href: '/banawat-workshop', name: 'BANAWAT', color: 'text-banawat', bg: 'bg-banawat', reason: 'Claim defence, formulation science, BPC product development' },
      { href: '/unpack-workshop', name: 'UNPACK', color: 'text-unpack', bg: 'bg-unpack', reason: 'Packaging compliance, sustainability, real materials' },
      { href: '/launchpad-workshop', name: 'LAUNCHPAD', color: 'text-launchpad', bg: 'bg-launchpad', reason: 'Sell your beauty brand internationally' },
    ],
  },
  {
    id: 'personal-care',
    label: 'Personal Care',
    workshops: [
      { href: '/banawat-workshop', name: 'BANAWAT', color: 'text-banawat', bg: 'bg-banawat', reason: 'Claim defence, formulation science, BPC product development' },
      { href: '/unpack-workshop', name: 'UNPACK', color: 'text-unpack', bg: 'bg-unpack', reason: 'Pack grading, EU PPWR, real materials on the table' },
      { href: '/launchpad-workshop', name: 'LAUNCHPAD', color: 'text-launchpad', bg: 'bg-launchpad', reason: 'IEC, compliance, marketplace strategy for global entry' },
    ],
  },
  {
    id: 'food',
    label: 'Food',
    workshops: [
      { href: '/savore-workshop', name: 'SAVORE', color: 'text-savore', bg: 'bg-savore', reason: 'Body OS brief, FSSAI claims, mouthfeel challenge' },
      { href: '/unpack-workshop', name: 'UNPACK', color: 'text-unpack', bg: 'bg-unpack', reason: 'Packaging compliance, sustainable formats, grade your pack' },
      { href: '/launchpad-workshop', name: 'LAUNCHPAD', color: 'text-launchpad', bg: 'bg-launchpad', reason: 'Export your food brand — channels, compliance, first 90 days' },
    ],
  },
  {
    id: 'beverage',
    label: 'Beverage',
    workshops: [
      { href: '/savore-workshop', name: 'SAVORE', color: 'text-savore', bg: 'bg-savore', reason: 'Functional beverage formats, FSSAI claims, NPD brief' },
      { href: '/unpack-workshop', name: 'UNPACK', color: 'text-unpack', bg: 'bg-unpack', reason: 'Beverage packaging compliance and sustainability formats' },
      { href: '/launchpad-workshop', name: 'LAUNCHPAD', color: 'text-launchpad', bg: 'bg-launchpad', reason: 'International market entry for beverage brands' },
    ],
  },
  {
    id: 'health',
    label: 'Health & Wellness',
    workshops: [
      { href: '/savore-workshop', name: 'SAVORE', color: 'text-savore', bg: 'bg-savore', reason: 'Functional nutrition, adaptogens, FSSAI wellness claims' },
      { href: '/banawat-workshop', name: 'BANAWAT', color: 'text-banawat', bg: 'bg-banawat', reason: 'Biotech actives, neuroscience claims, BPC wellness products' },
      { href: '/unpack-workshop', name: 'UNPACK', color: 'text-unpack', bg: 'bg-unpack', reason: 'Sustainable & compliant packaging for wellness brands' },
      { href: '/launchpad-workshop', name: 'LAUNCHPAD', color: 'text-launchpad', bg: 'bg-launchpad', reason: 'Export health & wellness products globally' },
    ],
  },
  {
    id: 'packaging',
    label: 'Packaging',
    workshops: [
      { href: '/unpack-workshop', name: 'UNPACK', color: 'text-unpack', bg: 'bg-unpack', reason: 'EU PPWR, UK DRS, grade your pack, real materials on every table' },
      { href: '/banawat-workshop', name: 'BANAWAT', color: 'text-banawat', bg: 'bg-banawat', reason: 'Claims vs. pack — where BPC brands get into trouble' },
      { href: '/savore-workshop', name: 'SAVORE', color: 'text-savore', bg: 'bg-savore', reason: 'F&B packaging formats, labelling, functional claim compliance' },
      { href: '/launchpad-workshop', name: 'LAUNCHPAD', color: 'text-launchpad', bg: 'bg-launchpad', reason: 'Export packaging labelling and documentation' },
    ],
  },
  {
    id: 'export',
    label: 'Export & Cross-Border',
    workshops: [
      { href: '/launchpad-workshop', name: 'LAUNCHPAD', color: 'text-launchpad', bg: 'bg-launchpad', reason: 'IEC, compliance, market selection, channel strategy, first 90 days' },
      { href: '/unpack-workshop', name: 'UNPACK', color: 'text-unpack', bg: 'bg-unpack', reason: 'Export packaging compliance — EU PPWR, UK DRS deadlines' },
      { href: '/savore-workshop', name: 'SAVORE', color: 'text-savore', bg: 'bg-savore', reason: 'F&B export readiness — FSSAI claims and global formats' },
      { href: '/banawat-workshop', name: 'BANAWAT', color: 'text-banawat', bg: 'bg-banawat', reason: 'BPC export — claim compliance across international markets' },
    ],
  },
];

function getRecommended(selected: string[]): Workshop[] {
  const seen = new Set<string>();
  const result: Workshop[] = [];
  selected.forEach((id) => {
    const group = interests.find((i) => i.id === id);
    group?.workshops.forEach((w) => {
      if (!seen.has(w.href)) { seen.add(w.href); result.push(w); }
    });
  });
  return result;
}

export default function AudienceNavigator() {
  const [selected, setSelected] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    if (!reveals) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active'); }),
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const recommended = getRecommended(selected);

  return (
    <section ref={sectionRef} className="py-20 bg-surface border-t border-b border-border">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="reveal mb-8">
          <p className="section-label mb-3">Not sure which to choose?</p>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-foreground">
            Choose Your Interest
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Interest tabs */}
          <div className="lg:col-span-2 reveal">
            <p className="text-xs font-sans text-muted mb-3 tracking-wider">Select one or more</p>
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {interests.map((interest) => {
                const isActive = selected.includes(interest.id);
                return (
                  <button
                    key={interest.id}
                    onClick={() => toggle(interest.id)}
                    className={`flex-shrink-0 lg:flex-shrink text-left p-4 border transition-all duration-200 ${
                      isActive
                        ? 'bg-primary text-white border-primary'
                        : 'bg-background border-border text-foreground hover:bg-navy-light'
                    }`}
                    style={{ borderRadius: '2px', minWidth: '160px' }}
                  >
                    <p className={`text-xs font-sans font-600 tracking-wider uppercase mb-1 ${isActive ? 'text-white/60' : 'text-muted'}`}>
                      Interest
                    </p>
                    <p className={`text-sm font-sans font-600 ${isActive ? 'text-white' : 'text-foreground'}`}>
                      {interest.label}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Workshop recommendations */}
          <div className="lg:col-span-3 reveal reveal-delay-1">
            {/* Selected interest tags with cancel */}
            <div className="flex flex-wrap gap-2 mb-5 min-h-[32px]">
              {selected.map((id) => {
                const interest = interests.find((i) => i.id === id)!;
                return (
                  <button
                    key={id}
                    onClick={() => toggle(id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white text-xs font-sans font-600 tracking-widest uppercase hover:bg-primary/80 transition-colors"
                    style={{ borderRadius: '2px' }}
                  >
                    {interest.label}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                    </svg>
                  </button>
                );
              })}
            </div>

            {recommended.length === 0 && (
              <p className="text-muted text-sm font-sans">Select an interest to see recommended workshops.</p>
            )}
            <div className="space-y-3">
              {recommended.map((w) => (
                <Link
                  key={w.href}
                  href={w.href}
                  className="group flex items-start gap-4 p-5 bg-background border border-border hover:border-accent transition-all duration-200"
                  style={{ borderRadius: '2px' }}
                >
                  <div className="flex-1">
                    <p className={`text-xs font-sans font-700 tracking-widest uppercase ${w.color} mb-1`}>
                      {w.name}
                    </p>
                    <p className="text-sm font-sans text-muted leading-relaxed">{w.reason}</p>
                  </div>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                    className="flex-shrink-0 mt-0.5 text-muted group-hover:text-foreground transition-colors"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
