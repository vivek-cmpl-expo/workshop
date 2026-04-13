'use client';
import React, { useEffect, useRef, useState } from 'react';

interface Station {
  id: string;
  number: string;
  title: string;
  duration: string;
  activity: string;
  bullets: string[];
  actives?: string[];
  output: string;
  highlight?: string;
}

const stations: Station[] = [
  {
    id: 's1',
    number: '01',
    title: 'The Biotech Brief',
    duration: '30 minutes',
    activity: 'Work with a next-gen active — biotech-derived, fermented, or encapsulated. Build the formulation brief: claim, delivery, stability. Facilitator deconstructs in real time.',
    bullets: [
      'Biotech-derived actives: fermentation-derived, biosynthetic, or encapsulated',
      'Delivery system design: liposomal, nanoparticle, or microencapsulation — chosen and justified live',
      'Stability architecture: pH windows, light sensitivity, emulsion compatibility',
      'Draft a claim stack — challenged against Cosmetics Amendment Rules 2025',
    ],
    actives: ['Exosomes', 'Postbiotics', 'Longevity peptides', 'Neurocosmetic adaptogens', 'Precision fermentation extracts'],
    output: 'A one-paragraph formulation brief: active, delivery system, primary claim, key stability flag. ★ Facilitator reviews one participant brief live.',
    highlight: 'Every claim challenged against Cosmetics Amendment Rules 2025',
  },
  {
    id: 's2',
    number: '02',
    title: 'Sensorial Architecture',
    duration: '20 minutes',
    activity: 'Handle real formulations. Textures, skin feels, fragrance profiles — not described. On the table. Participants evaluate and brief from direct experience.',
    bullets: [
      'Mintel 2026: "Sensorial Synergy — the shift from products that deliver results to products that regulate mood and evoke emotion"',
      'Brief for emotion, not efficacy',
      'How does this feel? What does it make you feel? Can you claim it?',
    ],
    output: 'A sensorial brief that hits both Sensorial Synergy and Human Touch Revolution simultaneously — tested against a real product category.',
  },
  {
    id: 's3',
    number: '03',
    title: 'The Claims Gauntlet',
    duration: '25 minutes',
    activity: 'Five next-gen claims on the table. What\'s defensible? What will CDSCO never allow?',
    bullets: [
      'Metabolic Beauty — Defensible with biomarker data. Emerging CDSCO guidance in 2026.',
      'Cellular Longevity — Requires clinical substantiation. High regulatory scrutiny.',
      'Neurocosmetic Mood Regulation — Grey zone: cosmetic or drug claim depends entirely on wording.',
      'Exosome-Driven Repair — Not yet permitted in India. Regulatory watch list item.',
      'Microbiome-Safe Actives — Defensible if negatively defined. Positive claims need data.',
    ],
    output: 'Every claim pressure-tested live. No hand-holding.',
    highlight: '★ No hand-holding. Every claim challenged against Cosmetics Amendment Rules 2025 and live CDSCO guidance.',
  },
  {
    id: 's4',
    number: '04',
    title: 'AI in the Lab — Live Demo',
    duration: '25 minutes',
    activity: 'Not theoretical. Not a pitch. A real brief, run live in the room.',
    bullets: [
      '10× faster ingredient screening vs manual literature review',
      '60% reduction in early-stage reformulation failures',
      'Compress ingredient research — AI models bioactivity across hundreds of candidates in minutes',
      'Generate stable alternatives ranked by compatibility, availability, and regulatory status',
      'Stress-test formulation stability: pH sensitivity, emulsion windows, degradation risk',
      'Prototype personalisation at scale',
    ],
    output: 'A real brief from the room is run through the platform. Every output visible — not a rehearsed demo.',
    highlight: 'AI does not replace the formulator. It makes the formulator faster, bolder, and harder to compete with.',
  },
];

export default function BanawatStations() {
  const [activeStation, setActiveStation] = useState('s1');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    if (!reveals) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active'); }),
      { threshold: 0.08 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const current = stations.find((s) => s.id === activeStation)!;

  return (
    <section ref={sectionRef} className="py-20 bg-background border-t border-border">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="reveal mb-12">
          <p className="section-label mb-3">Session Structure</p>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-foreground">
            4 Live Stations. One Working Brief. Zero Lectures.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-10 reveal reveal-delay-1">
          {stations.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveStation(s.id)}
              className={`text-left p-5 border transition-all duration-200 station-card ${
                activeStation === s.id
                  ? 'bg-banawat text-white border-banawat' :'bg-surface border-border hover:border-banawat/40'
              }`}
              style={{ borderRadius: '2px' }}
            >
              <div className={`text-xs font-sans font-600 tracking-widest uppercase mb-2 ${activeStation === s.id ? 'text-white/60' : 'text-muted'}`}>
                Station {s.number}
              </div>
              <p className={`text-sm font-sans font-600 mb-1 ${activeStation === s.id ? 'text-white' : 'text-foreground'}`}>
                {s.title}
              </p>
              <p className={`text-xs font-sans ${activeStation === s.id ? 'text-white/70' : 'text-muted'}`}>
                {s.duration}
              </p>
            </button>
          ))}
        </div>

        {/* Station detail */}
        <div className="reveal reveal-delay-2 bg-surface border border-border p-6 sm:p-8 lg:p-10" style={{ borderRadius: '2px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-start gap-4 mb-6">
                <div className="block-badge text-banawat border-banawat/30">{current.number}</div>
                <div>
                  <h3 className="font-display font-light text-2xl text-foreground">{current.title}</h3>
                  <p className="text-muted text-xs font-sans tracking-wider mt-0.5">{current.duration}</p>
                </div>
              </div>
              <p className="text-base font-sans text-muted leading-relaxed mb-6">{current.activity}</p>
              <ul className="space-y-3 mb-6">
                {current.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-sans text-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-banawat flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              {current.actives && (
                <div className="mb-6">
                  <p className="text-xs font-sans font-600 tracking-widest uppercase text-muted mb-2">Actives on the table:</p>
                  <div className="flex flex-wrap gap-2">
                    {current.actives.map((a) => (
                      <span key={a} className="px-3 py-1.5 bg-purple-50 border border-purple-100 text-banawat text-xs font-sans font-500" style={{ borderRadius: '2px' }}>
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="lg:col-span-1 space-y-4">
              <div className="p-4 bg-purple-50 border border-purple-100" style={{ borderRadius: '2px' }}>
                <p className="text-xs font-sans font-700 tracking-widest uppercase text-banawat mb-2">Output</p>
                <p className="text-sm font-sans text-foreground leading-relaxed">{current.output}</p>
              </div>
              {current.highlight && (
                <div className="p-4 bg-gold-light border border-accent/20" style={{ borderRadius: '2px' }}>
                  <p className="text-xs font-sans font-700 tracking-widest uppercase text-accent mb-2">Note</p>
                  <p className="text-sm font-sans text-foreground leading-relaxed">{current.highlight}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Closing challenge */}
        <div className="reveal reveal-delay-3 mt-6 p-6 sm:p-8 bg-primary text-white" style={{ borderRadius: '2px' }}>
          <div className="flex items-start gap-4">
            <div className="block-badge text-white border-white/30 flex-shrink-0">★</div>
            <div>
              <h3 className="font-display font-light text-2xl text-white mb-2">The Closing Challenge</h3>
              <p className="text-white/70 text-sm font-sans mb-4">20 minutes · One Product. Built Live. Didn't Exist When You Walked In.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: 'The Active', desc: 'One next-generation ingredient — biotech-derived, fermented, or precision-synthesis — with mechanism of action stated.' },
                  { title: 'The Delivery System', desc: 'Chosen and justified: liposomal, microencapsulated, or novel carrier. Stability window identified.' },
                  { title: 'The Claim', desc: 'Drafted, challenged, and pressure-tested against Cosmetics Amendment Rules 2025 and current CDSCO guidance.' },
                ].map((c) => (
                  <div key={c.title} className="p-4 bg-white/10 border border-white/10" style={{ borderRadius: '2px' }}>
                    <p className="text-white/60 text-xs font-sans font-700 tracking-widest uppercase mb-2">{c.title}</p>
                    <p className="text-white/90 text-sm font-sans leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}