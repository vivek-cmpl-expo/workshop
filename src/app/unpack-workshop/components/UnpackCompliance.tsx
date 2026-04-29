'use client';
import React, { useEffect, useRef } from 'react';

const regulations = [
  {
    date: 'Aug 2026',
    title: 'EU PPWR — Recyclability Grading',
    desc: 'All packaging must be graded A/B/C/D/E for recyclability. Export brands need to know their grade now.',
    urgency: 'high',
    flag: 'Export brands',
  },
  {
    date: 'Aug 2026',
    title: 'EU PPWR — Reuse Mandates Begin',
    desc: 'Certain takeaway food and beverage formats must offer reusable options and refill systems. If your product is in scope, the redesign brief needs to be written today.',
    urgency: 'high',
    flag: 'Redesign now',
  },
  {
    date: 'Oct 2027',
    title: 'UK DRS — Deposit Return Scheme',
    desc: 'Launches across England, Northern Ireland and Scotland. Container formats that don\'t fit the scheme need to be identified and redesigned — that window is now.',
    urgency: 'medium',
    flag: 'UK market',
  },
  {
    date: '2030',
    title: 'EU PPWR — 50% Empty Space Rule',
    desc: 'Grouped, transport and e-commerce packaging cannot exceed 50% empty space. Oversized secondary packaging needs a redesign plan — starting now.',
    urgency: 'medium',
    flag: 'E-commerce',
  },
];

const seedProbs = [
  'Shrink-wrap on cucumbers — ban it, or does it genuinely add 5 days shelf life?',
  'Sachets: the most democratic format, or the biggest environmental disaster?',
  'Compostable packaging: genuine sustainability solution, or very clever marketing?',
  'Single-use plastic: the villain, or the reason your food isn\'t rotten?',
];

const timeline = [
  { label: 'Block 01', title: 'Provocation', duration: '10 min', highlight: false },
  { label: 'Block 02', title: 'Myth Busting', duration: '20 min', highlight: false },
  { label: 'Block 03', title: 'Touch & See', duration: '25 min', highlight: false },
  { label: 'Block 04', title: 'Grade Your Pack ★', duration: '20 min', highlight: true },
  { label: 'Block 05', title: 'Compliance Briefing', duration: '25 min', highlight: false },
  { label: 'Block 06', title: 'Kill Debate', duration: '15 min', highlight: false },
];

export default function UnpackCompliance() {
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
        {/* Compliance briefing */}
        <div className="reveal mb-12">
          <div className="flex items-start gap-4 mb-10">
            <div className="block-badge text-unpack border-unpack/30">05</div>
            <div>
              <p className="section-label mb-2">Block 05 · 25 minutes</p>
              <h2 className="font-display font-light text-3xl sm:text-4xl text-foreground">
                4 Regulations. 4 Dates. Zero Jargon.
              </h2>
              <p className="text-muted font-sans text-base mt-2 max-w-xl">
                After the activity, the room is primed — regulations land differently now.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {regulations?.map((r, i) => (
              <div
                key={r?.title}
                className={`reveal reveal-delay-${i + 1} flex flex-col sm:flex-row gap-0 border overflow-hidden ${
                  r?.urgency === 'high' ? 'border-red-200' : 'border-border'
                }`}
                style={{ borderRadius: '2px' }}
              >
                {/* Date bar */}
                <div
                  className={`flex-shrink-0 flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-center gap-2 p-4 sm:p-5 sm:w-36 ${
                    r?.urgency === 'high' ? 'bg-red-50' : 'bg-navy-light'
                  }`}
                >
                  <p
                    className={`font-display font-light text-xl sm:text-2xl ${
                      r?.urgency === 'high' ? 'text-red-600' : 'text-foreground'
                    }`}
                  >
                    {r?.date}
                  </p>
                  <span
                    className={`px-2 py-0.5 text-[10px] font-sans font-600 tracking-wider uppercase ${
                      r?.urgency === 'high' ? 'bg-red-100 text-red-600' : 'bg-border text-muted'
                    }`}
                    style={{ borderRadius: '2px' }}
                  >
                    {r?.flag}
                  </span>
                </div>
                {/* Content */}
                <div className="flex-1 p-5 bg-surface">
                  <p className="font-sans font-700 text-foreground text-sm mb-2">{r?.title}</p>
                  <p className="text-sm font-sans text-muted leading-relaxed">{r?.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Exit question */}
          <div className="mt-8 p-5 bg-unpack text-white" style={{ borderRadius: '2px' }}>
            <p className="text-white/60 text-xs font-sans tracking-widest uppercase mb-2">Exit Question</p>
            <p className="font-display font-light italic text-lg text-white">
              "What grade would your packaging receive — and have you actually checked?"
            </p>
          </div>
        </div>

        {/* Seed provocations */}
        <div className="reveal mb-12">
          <p className="section-label mb-4">Closing Debate Seed Provocations</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {seedProbs?.map((s, i) => (
              <div
                key={i}
                className="p-4 bg-surface border border-border flex items-start gap-3"
                style={{ borderRadius: '2px' }}
              >
                <span className="text-unpack text-lg flex-shrink-0">?</span>
                <p className="text-sm font-sans text-muted leading-relaxed italic">{s}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="reveal reveal-delay-1 mb-12">
          <p className="section-label mb-5">Session Timeline</p>
          <div className="max-w-xl">
            {timeline?.map((t) => (
              <div
                key={t?.label}
                className={`flex items-center gap-6 p-4 border-b border-border last:border-b-0 ${
                  t?.highlight ? 'bg-unpack text-white' : 'bg-surface hover:bg-blue-50 transition-colors'
                }`}
              >
                <div className={`text-right flex-shrink-0 w-16 ${t?.highlight ? 'text-white/70' : 'text-muted'}`}>
                  <p className="text-[10px] font-sans font-600 tracking-widest uppercase">{t?.label}</p>
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-sans font-600 ${t?.highlight ? 'text-white' : 'text-foreground'}`}>{t?.title}</p>
                </div>
                <div className={`flex-shrink-0 ${t?.highlight ? 'text-white' : 'text-foreground'}`}>
                  <p className="font-display font-light text-lg">{t?.duration}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-6 p-4 bg-primary text-white">
              <div className="text-right flex-shrink-0 w-16">
                <p className="text-[10px] font-sans font-600 tracking-widest uppercase text-white/60">Total</p>
              </div>
              <div className="flex-1">
                <p className="text-sm font-sans font-700 text-white">Full Workshop</p>
              </div>
              <div>
                <p className="font-display font-light text-lg text-white">~2 hrs 10 min</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-4">
          <a
            href="https://workshops.cmplexpo.com/form/public/apply"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-unpack text-white text-xs font-sans font-600 tracking-widest uppercase hover:opacity-90 transition-opacity"
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