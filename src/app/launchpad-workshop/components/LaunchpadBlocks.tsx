'use client';
import React, { useEffect, useRef } from 'react';

const blocks = [
  {
    number: '01',
    title: 'Welcome — The Export Landscape',
    tag: 'Opening',
    content: 'The changing export landscape and the growing role of e-commerce for Indian FMCG brands.',
    bullets: [
      'Where global e-commerce is heading and why Indian FMCG brands are better positioned than ever',
      'The role of digital marketplaces in reshaping how Indian products reach global shelves',
    ],
  },
  {
    number: '02',
    title: 'Strategizing Through Global Marketplaces',
    tag: 'Strategy',
    content: 'Growing your business globally — strategy, positioning, and what international markets want.',
    bullets: [
      'How to approach international e-commerce as a growth strategy, not just a sales channel',
      'Positioning, pricing, and what global buyers actually want from Indian FMCG brands right now',
    ],
  },
  {
    number: '03',
    title: 'Spotlight on Successful Indian Brands',
    tag: 'Case Studies',
    content: 'Real brands. Real stories. What worked, what didn\'t, and what you can replicate.',
    bullets: [
      'Real brands that made it big on global e-commerce — the decisions that made the difference',
      'Which Indian FMCG categories are performing best internationally, and what you can replicate',
    ],
  },
  {
    number: '04',
    title: 'Essential Requirements for First-Time Exporters',
    tag: 'Compliance',
    content: 'IEC, compliance, labelling, documentation — the non-negotiables, explained clearly.',
    bullets: [
      'IEC — Import Export Code: what it is, how long it takes, what happens if you try to export without one',
      'Compliance & labelling: market-specific requirements, ingredient restrictions, customs red flags',
      'Documentation: COA, FSSAI, MSDS — the paperwork stack, done right the first time',
      'Pricing for export: international margins without killing your brand positioning',
    ],
  },
  {
    number: '05',
    title: 'Launching Your Export Journey',
    tag: 'Launch',
    content: 'Pre-launch, registration, post-launch. The levers that matter, in the right order.',
    bullets: [
      'Pre-launch: catalogue setup, content, logistics, compliance sign-off',
      'During registration: step-by-step — what to expect, what takes longest, what trips people up',
      'Post-launch: first actions after going live — reviews, inventory, pricing signals',
      'Key levers: advertising, fulfilment, promotional tools, brand store setup — ranked by impact',
    ],
  },
];

export default function LaunchpadBlocks() {
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
    <section ref={ref} className="py-20 bg-background border-t border-border">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="reveal mb-12">
          <p className="section-label mb-3">Session Structure</p>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-foreground">
            6 Blocks. No Filler. The Full Export Journey in One Room.
          </h2>
        </div>

        <div className="space-y-4">
          {blocks?.map((b, i) => (
            <div
              key={b?.number}
              className={`reveal reveal-delay-${(i % 4) + 1} bg-surface border border-border p-6 sm:p-8`}
              style={{ borderRadius: '2px' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1 flex items-start gap-4">
                  <div className="block-badge text-launchpad border-launchpad/30">{b?.number}</div>
                  <div>
                    <span className="tag-pill bg-teal-50 text-launchpad border border-teal-100 text-[10px]" style={{ borderRadius: '2px' }}>
                      {b?.tag}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-display font-light text-xl text-foreground mb-2">{b?.title}</h3>
                  <p className="text-sm font-sans text-muted leading-relaxed mb-4">{b?.content}</p>
                  <ul className="space-y-2">
                    {b?.bullets?.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm font-sans text-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-launchpad flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}