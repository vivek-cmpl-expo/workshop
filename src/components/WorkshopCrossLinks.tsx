import React from 'react';
import Link from 'next/link';

interface WorkshopCrossLink {
  href: string;
  label: string;
  tagline: string;
  color: string;
  bg: string;
  audience: string;
}

const workshops: WorkshopCrossLink[] = [
  {
    href: '/banawat-workshop',
    label: 'BANAWAT Formula X',
    tagline: 'Next-gen BPC formulation',
    color: 'text-banawat',
    bg: 'bg-purple-50 border-purple-100 hover:border-banawat/40',
    audience: 'R&D · Formulation · NPD',
  },
  {
    href: '/launchpad-workshop',
    label: 'LAUNCHPAD',
    tagline: 'Global export journey',
    color: 'text-launchpad',
    bg: 'bg-teal-50 border-teal-100 hover:border-launchpad/40',
    audience: 'Founders · Export Heads',
  },
  {
    href: '/savore-workshop',
    label: 'SAVORE',
    tagline: 'F&B from trend to table',
    color: 'text-savore',
    bg: 'bg-amber-50 border-amber-100 hover:border-savore/40',
    audience: 'F&B Brands · NPD Teams',
  },
  {
    href: '/unpack-workshop',
    label: 'UNPACK',
    tagline: 'Sustainable packaging',
    color: 'text-unpack',
    bg: 'bg-blue-50 border-blue-100 hover:border-unpack/40',
    audience: 'Packaging · Sustainability',
  },
];

interface WorkshopCrossLinksProps {
  currentPath: string;
}

export default function WorkshopCrossLinks({ currentPath }: WorkshopCrossLinksProps) {
  const others = workshops.filter((w) => w.href !== currentPath);

  return (
    <section className="bg-background py-16 border-t border-border">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="section-label mb-1">Also at CMPL Expo 2026</p>
            <h2 className="font-display font-light text-2xl text-foreground">
              Explore Other Workshops
            </h2>
          </div>
          <Link
            href="/#workshops"
            className="hidden sm:flex items-center gap-2 text-xs font-sans font-600 tracking-widest uppercase text-muted hover:text-foreground transition-colors border-b border-border hover:border-foreground pb-0.5"
          >
            View All
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {others.map((w) => (
            <Link
              key={w.href}
              href={w.href}
              className={`group block p-5 border ${w.bg} transition-all duration-300 workshop-card`}
              style={{ borderRadius: '2px' }}
            >
              <p className={`text-xs font-sans font-600 tracking-widest uppercase mb-2 ${w.color}`}>
                {w.label}
              </p>
              <p className="font-display font-light text-lg text-foreground mb-2 leading-snug group-hover:text-primary">
                {w.tagline}
              </p>
              <p className="text-xs text-muted font-sans">{w.audience}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}