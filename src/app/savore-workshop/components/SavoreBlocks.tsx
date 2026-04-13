'use client';
import React, { useEffect, useRef } from 'react';

const ingredients = [
  { category: 'Functional actives', question: 'What does this do at a cellular level?', desc: 'Adaptogens, postbiotics, longevity actives — taste, read the brief, decide if they belong in your product.' },
  { category: 'Novel flavour systems', question: 'Can you identify what makes this work?', desc: 'Natural encapsulation, fermentation-derived notes, and clean-label flavour solutions built for Indian palates.' },
  { category: 'Upcycled & sustainable inputs', question: 'Would your consumer accept this origin story?', desc: 'Ingredients from food waste streams, spent grain, fruit by-products — the sustainability story your brand could be telling.' },
  { category: 'Heritage actives, modernised', question: 'Same ingredient, different delivery — what changes?', desc: 'How Indian heritage ingredients perform differently in modern formats vs traditional applications.' },
  { category: 'Texture & mouthfeel agents', question: 'What is this doing to the experience?', desc: 'The difference between a product people finish and one they put down — hydrocolloids, fibres, emulsifiers.' },
  { category: 'Sweetness alternatives', question: 'Can you taste the difference?', desc: 'Monk fruit, allulose, chicory root — real samples, real taste, real conversation about your formulation trade-offs.' },
];

const briefElements = [
  { number: '1', title: 'The Category', desc: 'Pick one: Beverage. Snack. Functional food. Condiment. This is the canvas.' },
  { number: '2', title: 'The Consumer', desc: 'Who is buying this? Age, occasion, channel. 90 seconds. No waffling.' },
  { number: '3', title: 'The Hero Active', desc: 'One ingredient from the bench. What claim does it enable? Is that claim defensible?' },
  { number: '4', title: 'The Format', desc: 'RTD, powder, bar, pouch, sachet. The format is a product decision. Defend yours.' },
  { number: '5', title: 'The Mentor Challenge', desc: 'Mentors pick one brief per table and challenge it live. Every decision is questioned.' },
];

const timeline = [
  { label: 'Block 01', title: 'The Provocation', duration: '10 min', highlight: false },
  { label: 'Block 02', title: 'Trend Decoding', duration: '20 min', highlight: false },
  { label: 'Block 03', title: 'The Ingredient Bench', duration: '25 min', highlight: false },
  { label: 'Block 04', title: 'Build Your Brief ★', duration: '25 min', highlight: true },
  { label: 'Block 05', title: 'Contradiction Economy', duration: '20 min', highlight: false },
  { label: 'Block 06', title: 'Kill or Launch?', duration: '15 min', highlight: false },
];

export default function SavoreBlocks() {
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
            6 Blocks. Taste. Debate. Build. Decide.
          </h2>
        </div>

        {/* Block 01 — Provocation */}
        <div className="reveal mb-5 bg-primary text-white p-6 sm:p-8" style={{ borderRadius: '2px' }}>
          <div className="flex items-start gap-4">
            <div className="block-badge text-white border-white/30">01</div>
            <div>
              <p className="text-white/60 text-xs font-sans tracking-widest uppercase mb-1">10 minutes</p>
              <h3 className="font-display font-light text-2xl text-white mb-3">The Provocation</h3>
              <p className="text-white/80 font-sans text-base leading-relaxed">
                One product on the table before the first slide. No intro. No context. Just: what do you taste? What would you change?
              </p>
            </div>
          </div>
        </div>

        {/* Block 03 — Ingredient Bench */}
        <div className="reveal reveal-delay-1 mb-5 bg-surface border border-border p-6 sm:p-8" style={{ borderRadius: '2px' }}>
          <div className="flex items-start gap-4 mb-6">
            <div className="block-badge text-savore border-savore/30">03</div>
            <div>
              <p className="text-muted text-xs font-sans tracking-widest uppercase mb-1">25 minutes</p>
              <h3 className="font-display font-light text-2xl text-foreground">The Ingredient Bench</h3>
              <p className="text-muted text-sm font-sans mt-1">Real ingredients on every table. Before the brief. Mentors circulate — every table gets a direct conversation.</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full data-table" style={{ borderRadius: '2px', overflow: 'hidden' }}>
              <thead>
                <tr>
                  <th className="text-left">Category</th>
                  <th className="text-left">Key Question</th>
                  <th className="text-left hidden md:table-cell">Description</th>
                </tr>
              </thead>
              <tbody>
                {ingredients?.map((ing) => (
                  <tr key={ing?.category} className="bg-surface">
                    <td className="font-sans font-600 text-savore text-sm">{ing?.category}</td>
                    <td className="font-sans text-muted text-sm italic">{ing?.question}</td>
                    <td className="font-sans text-muted text-sm hidden md:table-cell">{ing?.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Block 04 — Build Your Brief */}
        <div className="reveal reveal-delay-2 mb-5 bg-amber-50 border border-amber-200 p-6 sm:p-8" style={{ borderRadius: '2px' }}>
          <div className="flex items-start gap-4 mb-6">
            <div className="block-badge text-savore border-savore/30">04</div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <p className="text-muted text-xs font-sans tracking-widest uppercase">25 minutes</p>
                <span className="tag-pill bg-savore text-white text-[10px]" style={{ borderRadius: '2px' }}>★ The Activity</span>
              </div>
              <h3 className="font-display font-light text-2xl text-foreground">Build Your Brief</h3>
              <p className="text-muted text-sm font-sans mt-1">Individual → table debate → mentor challenge. You leave with a real brief — not a slide about briefs.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {briefElements?.map((el) => (
              <div key={el?.number} className="p-4 bg-surface border border-amber-100" style={{ borderRadius: '2px' }}>
                <p className="text-savore text-xs font-sans font-700 tracking-widest uppercase mb-2">{el?.number}. {el?.title}</p>
                <p className="text-xs font-sans text-muted leading-relaxed">{el?.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Block 06 — Kill or Launch */}
        <div className="reveal reveal-delay-3 mb-12 bg-surface border-2 border-savore p-6 sm:p-8" style={{ borderRadius: '2px' }}>
          <div className="flex items-start gap-4">
            <div className="block-badge text-savore border-savore/30">06</div>
            <div>
              <p className="text-muted text-xs font-sans tracking-widest uppercase mb-1">15 minutes · Closing Debate</p>
              <h3 className="font-display font-light text-2xl text-foreground mb-3">Kill or Launch?</h3>
              <p className="text-muted font-sans text-base leading-relaxed">
                A real product concept from the room. The room votes: kill it or launch it? Mentors give a final verdict and explain exactly what would need to change for it to win on shelf.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="reveal reveal-delay-1">
          <p className="section-label mb-5">Session Timeline</p>
          <div className="max-w-xl">
            {timeline?.map((t) => (
              <div
                key={t?.label}
                className={`flex items-center gap-6 p-4 border-b border-border last:border-b-0 ${
                  t?.highlight ? 'bg-savore text-white' : 'bg-surface hover:bg-amber-50 transition-colors'
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
                <p className="font-display font-light text-lg text-white">~2 hrs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}