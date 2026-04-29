'use client';
import React, { useEffect, useRef } from 'react';

const blocks = [
  { label: 'Station 01', title: 'The Biotech Brief', duration: '30 min' },
  { label: 'Station 02', title: 'Sensorial Architecture', duration: '20 min' },
  { label: 'Station 03', title: 'The Claims Gauntlet', duration: '25 min' },
  { label: 'Station 04', title: 'AI in the Lab', duration: '25 min' },
  { label: 'Closing', title: 'The Closing Challenge', duration: '20 min', highlight: true },
];

export default function BanawatTimeline() {
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
          <p className="section-label mb-3">Session Timeline</p>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-foreground">
            ~2 Hours. Every Minute Deliberate.
          </h2>
        </div>

        <div className="max-w-2xl reveal reveal-delay-1">
          <div className="space-y-0">
            {blocks?.map((b, i) => (
              <div
                key={b?.label}
                className={`flex items-center gap-6 p-5 border-b border-border last:border-b-0 ${
                  b?.highlight ? 'bg-banawat text-white' : 'bg-surface hover:bg-purple-50 transition-colors'
                }`}
              >
                <div className={`text-right flex-shrink-0 w-16 ${b?.highlight ? 'text-white/70' : 'text-muted'}`}>
                  <p className="text-xs font-sans font-600 tracking-widest uppercase">{b?.label}</p>
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-sans font-600 ${b?.highlight ? 'text-white' : 'text-foreground'}`}>
                    {b?.title}
                  </p>
                </div>
                <div className={`flex-shrink-0 text-right ${b?.highlight ? 'text-white' : 'text-foreground'}`}>
                  <p className="font-display font-light text-xl">{b?.duration}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-6 p-5 bg-primary text-white">
              <div className="text-right flex-shrink-0 w-16">
                <p className="text-xs font-sans font-600 tracking-widest uppercase text-white/60">Total</p>
              </div>
              <div className="flex-1">
                <p className="text-sm font-sans font-700 text-white">Full Workshop</p>
              </div>
              <div>
                <p className="font-display font-light text-xl text-white">~2 hrs</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 reveal reveal-delay-2 flex flex-col sm:flex-row gap-4">
          <a
            href="https://workshops.cmplexpo.com/form/public"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-banawat text-white text-xs font-sans font-600 tracking-widest uppercase hover:opacity-90 transition-opacity"
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