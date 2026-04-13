'use client';
import React, { useEffect, useRef } from 'react';

const forces = [
  {
    number: '01',
    title: 'The Health-Pleasure Paradox',
    desc: 'Consumers want indulgence and nutrition simultaneously. The winning brief delivers both.',
    detail: 'Why the brief of the decade is: make it good for you AND delicious. What the brands cracking this have in common at formulation stage.',
  },
  {
    number: '02',
    title: 'The Ingredient Story',
    desc: 'Consumers read labels and Google actives. Functional ingredients are the new brand narrative.',
    detail: 'Functional ingredients — adaptogens, postbiotics, upcycled inputs — are the new brand differentiator. How to pick the right one for your category.',
  },
  {
    number: '03',
    title: 'The Format Revolution',
    desc: 'Single-serve, refill, D2C, and on-the-go are rewriting what an F&B product looks like.',
    detail: 'Snackification, single-serve, refill-ready. What these shifts mean for your NPD pipeline and packaging brief in 2026.',
  },
];

const contradictions = [
  { pair: 'Healthy × Indulgent', desc: 'Protein-fortified mithai. Fibre-rich fried snacks. The health story that doesn\'t kill the pleasure.' },
  { pair: 'Convenient × Artisanal', desc: 'Instant versions of slow-cooked traditions. The craft narrative in a ready-to-use format.' },
  { pair: 'Premium × Accessible', desc: 'Super-premium ingredients at mid-market price points. How format innovation makes this possible.' },
  { pair: 'Global × Indian', desc: 'International formats, Indian flavours, local ingredients. The export opportunity hiding in plain sight.' },
];

export default function SavoreForces() {
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
        <div className="reveal mb-12">
          <p className="section-label mb-3">The Context</p>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-foreground">
            Three Forces Reshaping Indian F&B
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {forces?.map((f, i) => (
            <div
              key={f?.number}
              className={`reveal reveal-delay-${i + 1} p-6 bg-amber-50 border border-amber-100`}
              style={{ borderRadius: '2px' }}
            >
              <p className="text-savore text-xs font-sans font-700 tracking-widest uppercase mb-3">{f?.number}</p>
              <h3 className="font-display font-light text-xl text-foreground mb-3">{f?.title}</h3>
              <p className="text-sm font-sans text-foreground font-500 mb-3 leading-relaxed">{f?.desc}</p>
              <p className="text-sm font-sans text-muted leading-relaxed">{f?.detail}</p>
            </div>
          ))}
        </div>

        {/* Contradiction Economy */}
        <div className="reveal mb-8">
          <p className="section-label mb-3">The Contradiction Economy</p>
          <h2 className="font-display font-light text-2xl sm:text-3xl text-foreground mb-4">
            The brands winning Indian F&B today are not picking a lane. They're bridging contradictions consumers didn't know were possible.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal reveal-delay-1">
          {contradictions?.map((c) => (
            <div
              key={c?.pair}
              className="flex items-start gap-4 p-5 bg-background border border-border hover:border-savore/40 transition-colors"
              style={{ borderRadius: '2px' }}
            >
              <div className="flex-shrink-0 px-3 py-1.5 bg-savore text-white text-xs font-sans font-700 tracking-wider" style={{ borderRadius: '2px', whiteSpace: 'nowrap' }}>
                {c?.pair}
              </div>
              <p className="text-sm font-sans text-muted leading-relaxed">{c?.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}