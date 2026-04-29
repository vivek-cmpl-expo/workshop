'use client';
import React, { useEffect, useRef } from 'react';

export default function SavoreAudience() {
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
    <section ref={ref} className="py-20 bg-surface border-t border-border">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="reveal">
              <p className="section-label mb-3">Who This Is For</p>
              <h2 className="font-display font-light text-3xl sm:text-4xl text-foreground mb-6">
                Built for F&B Brand Founders & NPD Teams
              </h2>
            </div>
            <div className="reveal reveal-delay-1 space-y-4">
              {[
                { role: 'F&B Brand Founders', desc: 'You\'re building or relaunching a product in 2026. You need to understand what\'s coming — and brief for it before your competition does.' },
                { role: 'NPD Teams', desc: 'You\'re running the product development pipeline. Savore gives you real ingredients, real briefs, and real debate — not trend reports.' },
                { role: 'Innovation Leads', desc: 'Identifying white spaces in Indian F&B. The contradiction economy and ingredient bench sessions are built for your lens.' },
                { role: 'Brand & Marketing Teams', desc: 'Building the narrative around a new product. Understanding the ingredient story and format revolution from the inside.' },
              ]?.map((a) => (
                <div key={a?.role} className="flex items-start gap-4 p-4 bg-amber-50 border border-amber-100" style={{ borderRadius: '2px' }}>
                  <span className="mt-1 w-2 h-2 rounded-full bg-savore flex-shrink-0" />
                  <div>
                    <p className="text-sm font-sans font-700 text-foreground mb-1">{a?.role}</p>
                    <p className="text-sm font-sans text-muted leading-relaxed">{a?.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <div className="p-6 sm:p-8 bg-background border border-border mb-6" style={{ borderRadius: '2px' }}>
              <p className="section-label mb-4">What Mentors Bring</p>
              <div className="space-y-3">
                {[
                  { block: 'Block 1', item: 'The Provocation Product — one real F&B product, unlabelled, pre-placed on every table' },
                  { block: 'Block 2', item: 'Trend brief cards — key data point, Indian market implication, NPD prompt (1 per attendee)' },
                  { block: 'Block 3', item: 'Ingredient bench kit — 6 ingredient samples, labelled, 1 per table' },
                  { block: 'Block 4', item: 'Brief template card — category, consumer, active, format, claim (1 per attendee)' },
                  { block: 'Block 5', item: 'Contradiction case studies — real Indian brand examples per pair' },
                ]?.map((m) => (
                  <div key={m?.block} className="flex items-start gap-3 text-sm font-sans">
                    <span className="flex-shrink-0 px-2 py-0.5 bg-savore text-white text-[10px] font-600 tracking-wider" style={{ borderRadius: '2px' }}>{m?.block}</span>
                    <p className="text-muted leading-relaxed">{m?.item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 bg-primary text-white" style={{ borderRadius: '2px' }}>
              <p className="font-display font-light italic text-lg mb-2">
                "You taste it. You brief it. You leave with it. That's Savore."
              </p>
              <p className="text-white/60 text-xs font-sans tracking-widest uppercase">CMPL Expo Mumbai 2026</p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="https://workshops.cmplexpo.com/form/public"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-savore text-white text-xs font-sans font-600 tracking-widest uppercase hover:opacity-90 transition-opacity"
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
        </div>
      </div>
    </section>
  );
}