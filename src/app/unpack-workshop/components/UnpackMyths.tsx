'use client';
import React, { useEffect, useRef } from 'react';

const myths = [
  {
    myth: 'Paper is always better than plastic',
    truth: 'A paper bag needs 43 uses to match a plastic bag\'s carbon footprint. Single-use paper can be worse.',
    icon: '📄',
  },
  {
    myth: 'Heavier packaging = premium',
    truth: 'rPET bottle: 55g. Equivalent glass: 550g. 30% lower carbon footprint. Weight is a design choice.',
    icon: '⚖️',
  },
  {
    myth: 'Recycling symbol = gets recycled',
    truth: 'The symbol shows material type. Whether your local facility processes it is a completely different question.',
    icon: '♻️',
  },
  {
    myth: 'Consumers won\'t pay more for sustainability',
    truth: '71% of shoppers deliberately chose sustainable packaging in 2023. The economics are shifting.',
    icon: '💰',
  },
  {
    myth: 'Bio-based = biodegradable',
    truth: 'Bio-based means made from plants. Biodegradable means it breaks down. Completely different properties.',
    icon: '🌱',
  },
];

export default function UnpackMyths() {
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
        <div className="reveal mb-4">
          <div className="flex items-start gap-4 mb-10">
            <div className="block-badge text-unpack border-unpack/30">02</div>
            <div>
              <p className="section-label mb-2">Block 02 · 20 minutes</p>
              <h2 className="font-display font-light text-3xl sm:text-4xl text-foreground">
                Myth Busting
              </h2>
              <p className="text-muted font-sans text-base mt-2 max-w-xl">
                5 myths. Show of hands. Experts reveal the real truth. ★ Vaibhav Dixit & Sridhar J contribute live case studies to each myth reveal.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {myths?.map((m, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 4) + 1} myth-card grid grid-cols-1 md:grid-cols-2 border border-border overflow-hidden`}
              style={{ borderRadius: '2px' }}
            >
              {/* Myth side */}
              <div className="p-6 bg-surface border-b md:border-b-0 md:border-r border-border flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">{m?.icon}</span>
                <div>
                  <p className="text-[10px] font-sans font-600 tracking-widest uppercase text-muted mb-2">The Myth</p>
                  <p className="font-display font-light italic text-lg text-foreground leading-snug">{m?.myth}</p>
                </div>
              </div>
              {/* Truth side */}
              <div className="p-6 bg-blue-50 flex items-start gap-4">
                <div className="w-5 h-5 rounded-full bg-unpack flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-sans font-600 tracking-widest uppercase text-unpack mb-2">The Truth</p>
                  <p className="text-sm font-sans text-foreground leading-relaxed">{m?.truth}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Touch & See */}
        <div className="mt-14 reveal">
          <div className="flex items-start gap-4 mb-8">
            <div className="block-badge text-unpack border-unpack/30">03</div>
            <div>
              <p className="section-label mb-2">Block 03 · 25 minutes</p>
              <h2 className="font-display font-light text-3xl text-foreground">Touch & See</h2>
              <p className="text-muted font-sans text-base mt-2">Real materials on every table. Before the first slide. Facilitator-led conversation — not a product demo.</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full data-table" style={{ borderRadius: '2px', overflow: 'hidden' }}>
              <thead>
                <tr>
                  <th className="text-left">Sample Pair</th>
                  <th className="text-left">Question</th>
                  <th className="text-left hidden lg:table-cell">Insight</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pair: 'rPET vs. Virgin PET bottle', question: 'Can you tell which is recycled?', insight: 'You can\'t. Same feel, 30% lower footprint. ★ VD — ALPLA\'s PCR production process' },
                  { pair: 'Monomaterial vs. Multilayer pouch', question: 'Both look the same. Which recycles?', insight: 'One is Grade A. One goes to landfill.' },
                  { pair: 'Pre & post-lightweighted bottle', question: 'Guess the weight difference.', insight: '60% lighter. Same drop-test performance.' },
                  { pair: 'Ocean-captured plastic bottle', question: 'Would this sit on your shelf?', insight: 'Already in retail. Brands pay a premium for the story. ★ SJ — sensorial premium & consumer trust' },
                  { pair: 'Paper-based / fibre bottle', question: 'Is this the future or a novelty?', insight: 'Ready for series production. Not for every category.' },
                  { pair: 'Reusable / refill format', question: 'Who here could move to this by 2026?', insight: 'PPWR mandates reuse for certain categories from Aug 2026.' },
                ]?.map((row) => (
                  <tr key={row?.pair} className="bg-surface">
                    <td className="font-sans font-600 text-unpack text-sm">{row?.pair}</td>
                    <td className="font-sans text-muted text-sm italic">{row?.question}</td>
                    <td className="font-sans text-muted text-sm hidden lg:table-cell">{row?.insight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}