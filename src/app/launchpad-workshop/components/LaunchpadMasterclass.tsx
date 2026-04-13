'use client';
import React, { useEffect, useRef } from 'react';

const phases = [
  {
    range: 'Days 1–30',
    color: 'bg-teal-100 text-launchpad',
    items: [
      'First sales and early review strategy',
      'Inventory and fulfilment troubleshooting',
      'Listing optimisation from early click data',
      'Identifying your highest-converting SKU',
    ],
  },
  {
    range: 'Days 31–60',
    color: 'bg-teal-200 text-launchpad',
    items: [
      'Switching on advertising with a minimum viable budget',
      'Building brand store and cross-sell architecture',
      'Responding to data — what\'s working, what isn\'t',
      'Getting your first repeat purchasers',
    ],
  },
  {
    range: 'Days 61–90',
    color: 'bg-launchpad text-white',
    items: [
      'Scaling what\'s working — SKUs, ads, markets',
      'Entering promotional programmes and seasonal events',
      'Setting up for long-term catalogue expansion',
      'Signals that tell you you\'re ready for market two',
    ],
  },
];

export default function LaunchpadMasterclass() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const reveals = ref?.current?.querySelectorAll('.reveal');
    if (!reveals) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active'); }),
      { threshold: 0.08 }
    );
    reveals?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-surface border-t border-border">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="reveal mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-launchpad text-white text-xs font-sans font-700 tracking-widest uppercase mb-6" style={{ borderRadius: '2px' }}>
            ★ Masterclass
          </div>
        </div>
        <div className="reveal mb-10">
          <p className="section-label mb-3">Block 06</p>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-foreground mb-4">
            The First 90 Days
          </h2>
          <p className="text-muted font-sans text-base max-w-2xl leading-relaxed">
            The first 90 days after launch determine whether your brand builds momentum or stalls. Most brands that fail do so in this window — not because their product fails, but because they didn't know what to do next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 reveal reveal-delay-1">
          {phases?.map((p) => (
            <div key={p?.range} className={`p-6 ${p?.color}`} style={{ borderRadius: '2px' }}>
              <p className={`text-xs font-sans font-700 tracking-widest uppercase mb-4 ${p?.color?.includes('text-white') ? 'text-white/70' : 'text-launchpad/70'}`}>
                {p?.range}
              </p>
              <ul className="space-y-3">
                {p?.items?.map((item, i) => (
                  <li key={i} className={`flex items-start gap-2.5 text-sm font-sans ${p?.color?.includes('text-white') ? 'text-white/90' : 'text-foreground'}`}>
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${p?.color?.includes('text-white') ? 'bg-white/60' : 'bg-launchpad'}`} />
                    {item}
                  </li>
                ))}
              </ul>
              {p?.range === 'Days 61–90' && (
                <div className="mt-5 pt-4 border-t border-white/20">
                  <p className="text-white font-display font-light italic text-lg">Accelerate →</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline summary */}
        <div className="mt-10 reveal reveal-delay-2">
          <div className="bg-primary text-white p-6 sm:p-8" style={{ borderRadius: '2px' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-center">
              {[
                { label: 'Block 01', title: 'Welcome & Landscape' },
                { label: 'Block 02', title: 'Marketplace Strategy' },
                { label: 'Block 03', title: 'Spotlight: Indian Brands' },
                { label: 'Block 04', title: 'Export Requirements' },
                { label: 'Block 05', title: 'The Launch Journey' },
                { label: '★ Masterclass', title: 'First 90 Days', highlight: true },
              ]?.map((b) => (
                <div key={b?.label} className={`p-3 ${b?.highlight ? 'bg-accent text-white' : 'bg-white/10'}`} style={{ borderRadius: '2px' }}>
                  <p className={`text-[10px] font-sans font-600 tracking-widest uppercase mb-1 ${b?.highlight ? 'text-white/80' : 'text-white/50'}`}>{b?.label}</p>
                  <p className={`text-xs font-sans font-600 ${b?.highlight ? 'text-white' : 'text-white/90'}`}>{b?.title}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
              <p className="text-white/60 text-xs font-sans">4 May 2026 · 3:30 – 5:00 PM · JWCC Mumbai</p>
              <p className="font-display font-light text-white text-lg">Total: 90 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}