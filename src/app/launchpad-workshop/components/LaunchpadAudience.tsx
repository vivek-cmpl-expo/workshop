'use client';
import React, { useEffect, useRef } from 'react';

const audiences = [
  {
    role: 'Brand Founders',
    desc: 'You have a product that sells in India. You want to know if it can travel — and exactly how to make that happen.',
    icon: '🚀',
  },
  {
    role: 'Export Heads',
    desc: 'You\'re responsible for international growth. You need platform mechanics, compliance requirements, and what global buyers want right now.',
    icon: '🌐',
  },
  {
    role: 'NPD & Marketing Teams',
    desc: 'Building for export from the brief stage. What needs to change — packaging, labelling, positioning — before you launch internationally.',
    icon: '📦',
  },
  {
    role: 'First-Time Exporters',
    desc: 'You haven\'t exported yet. You don\'t know where to start. Launchpad is built specifically for you — from IEC to first 90 days live.',
    icon: '🎯',
  },
];

export default function LaunchpadAudience() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const reveals = ref?.current?.querySelectorAll('.reveal');
    if (!reveals) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active'); }),
      { threshold: 0.1 }
    );
    reveals?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-background border-t border-border">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="reveal mb-12">
          <p className="section-label mb-3">Who This Is For</p>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-foreground mb-4">
            You are an FMCG brand. You want to sell globally. This is where you start.
          </h2>
          <p className="text-muted font-sans text-base max-w-2xl">
            Launchpad is for founders, export heads, and senior decision-makers who want straight answers — not a motivational talk about going global.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {audiences?.map((a, i) => (
            <div
              key={a?.role}
              className={`reveal reveal-delay-${i + 1} p-6 bg-surface border border-border hover:border-launchpad/40 transition-colors`}
              style={{ borderRadius: '2px' }}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">{a?.icon}</span>
                <div>
                  <p className="font-sans font-700 text-foreground text-sm mb-2">{a?.role}</p>
                  <p className="text-sm font-sans text-muted leading-relaxed">{a?.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-4">
          <a
            href="https://workshops.cmplexpo.com/from/public"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-launchpad text-white text-xs font-sans font-600 tracking-widest uppercase hover:opacity-90 transition-opacity"
            style={{ borderRadius: '2px' }}
          >
            Register
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="mailto:hello@cmplexpo.com"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border text-foreground text-xs font-sans font-600 tracking-widest uppercase hover:bg-navy-light transition-colors"
            style={{ borderRadius: '2px' }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}