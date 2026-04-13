'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const investors = [
  { name: 'Abhiram Bhalerao', role: 'Partner',          company: 'V3 Ventures (Verlinvest)', photo: '/assets/images/pitchday/ABHIRAM.jpg' },
  { name: 'Ankita Balotia',   role: 'Principal',         company: 'Fireside Ventures',        photo: '/assets/images/pitchday/ANKITA.jpg' },
  { name: 'Ashim Jolly',      role: 'Managing Partner',  company: 'Aperio Partners',          photo: '/assets/images/pitchday/ASHIM.jpg' },
  { name: 'Kshitij Ladia',    role: 'Patner',      company: 'Think9 Founders Fund',     photo: '/assets/images/pitchday/KSHITIJ.jpg' },
  { name: 'Saptarishi Sen',   role: 'Vice President',    company: 'Prath Ventures',           photo: '/assets/images/pitchday/SAPTARISHI.jpg' },
  { name: 'Vivek Kumar',      role: 'CEO',               company: 'Venture Garage',           photo: '/assets/images/pitchday/VIVEK.jpg' },
];

export default function PitchDaySection() {
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

  return (
    <section id="pitchday" ref={sectionRef} className="py-20 bg-surface border-b border-border">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="reveal mb-10 pb-8 border-b border-border flex flex-col lg:flex-row lg:items-end gap-6">
          <div className="flex-1">
            <p className="section-label mb-3">6 May 2026 · Jio World Convention Centre</p>
            <h2 className="font-display font-light italic text-primary leading-none tracking-tight mb-3" style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}>
              CMPL Pitch Day 2026
            </h2>
            <p className="text-muted text-base sm:text-lg font-sans font-light leading-relaxed max-w-2xl">
              A curated pitch event for early-stage consumer brand founders. Only 8–10 brands selected. 8-minute pitch + 10-minute Q&A with a live investor panel.
            </p>
          </div>
          <a
            href="https://pitchday.cmplexpo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-xs font-sans font-600 tracking-widest uppercase hover:bg-opacity-90 transition-colors self-start lg:self-end"
            style={{ borderRadius: '2px' }}
          >
            Apply Now
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Quick facts */}
        <div className="reveal mb-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Application Fee', value: '₹2,999', note: 'Refundable if not shortlisted' },
            { label: 'Brands Selected', value: '8–10', note: 'Rigorously curated' },
            { label: 'Pitch Format', value: '8 + 10 min', note: 'Pitch + Q&A' },
            { label: 'Apply By', value: '20 Apr 2026', note: 'Application deadline' },
          ].map((f) => (
            <div key={f.label} className="p-5 bg-background border border-border" style={{ borderRadius: '2px' }}>
              <p className="text-[10px] font-sans font-700 tracking-widest uppercase text-muted mb-1">{f.label}</p>
              <p className="font-sans font-700 text-foreground text-lg leading-tight">{f.value}</p>
              <p className="text-xs font-sans text-muted mt-1">{f.note}</p>
            </div>
          ))}
        </div>

        {/* Investor Panel */}
        <div className="reveal">
          <p className="section-label mb-6">Investor Panel</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {investors.map((inv) => (
              <div key={inv.name} className="flex flex-col items-center text-center p-5 bg-background border border-border gap-3" style={{ borderRadius: '2px' }}>
                <div className="w-20 h-20 rounded-full overflow-hidden relative flex-shrink-0">
                  <Image src={inv.photo} alt={inv.name} fill className="object-cover object-top" sizes="80px" />
                </div>
                <div>
                  <p className="font-sans font-700 text-foreground text-sm leading-tight">{inv.name}</p>
                  <p className="text-muted text-xs font-sans mt-0.5">{inv.role}</p>
                  <p className="text-xs font-sans font-700 tracking-wide uppercase mt-1 text-accent">{inv.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
