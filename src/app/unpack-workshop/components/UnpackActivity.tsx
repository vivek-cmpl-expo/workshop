'use client';
import React, { useEffect, useRef } from 'react';

const products = [
  { name: 'Shampoo bottle', icon: '🧴' },
  { name: 'Snack wrapper', icon: '🍬' },
  { name: 'Coffee cup lid', icon: '☕' },
  { name: 'Detergent pouch', icon: '🫧' },
  { name: 'Supplement jar', icon: '💊' },
];

const activitySteps = [
  { step: '1', title: 'Set Up', desc: '5 products pre-placed on every table. You\'ve seen them all before.' },
  { step: '2', title: 'Individual Score', desc: '2 minutes. No phones, no discussion. Grade every item A/B/C for recyclability + Yes/No on legal post-2026.' },
  { step: '3', title: 'Table Discussion', desc: '3 minutes. Where does your table disagree? One table shares their most debated item.' },
  { step: '4', title: 'The Reveal', desc: 'Mentors walk through real grades & 2026 compliance. The paper cup that fails. The plastic bottle that passes.' },
  { step: '5', title: 'Open It Up', desc: 'What surprised you most? Is anything on your own product range in this position?' },
];

export default function UnpackActivity() {
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
          <div className="flex items-start gap-4">
            <div className="block-badge text-unpack border-unpack/30">04</div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <p className="section-label">Block 04 · 20 minutes</p>
                <span className="tag-pill bg-unpack text-white text-[10px]" style={{ borderRadius: '2px' }}>★ The Activity</span>
              </div>
              <h2 className="font-display font-light text-3xl sm:text-4xl text-foreground">
                Grade Your Pack
              </h2>
              <p className="text-muted font-sans text-base mt-2 max-w-xl">
                Individual → table discussion → the reveal. Almost everyone gets 2+ wrong. No winner, no loser — just a shared surprise. Instantly personal.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Products on the table */}
          <div className="reveal">
            <p className="section-label mb-4">5 Products on Every Table</p>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-8">
              {products?.map((p) => (
                <div
                  key={p?.name}
                  className="flex flex-col items-center gap-2 p-4 bg-background border border-border text-center"
                  style={{ borderRadius: '2px' }}
                >
                  <span className="text-3xl">{p?.icon}</span>
                  <p className="text-xs font-sans text-muted leading-tight">{p?.name}</p>
                </div>
              ))}
            </div>

            {/* Scoring card preview */}
            <div className="p-5 bg-background border border-border" style={{ borderRadius: '2px' }}>
              <p className="section-label mb-4">Scoring Card (1 per attendee)</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs font-sans border-collapse">
                  <thead>
                    <tr className="bg-unpack text-white">
                      <th className="text-left p-2.5 font-600 tracking-wider uppercase">Product</th>
                      <th className="text-center p-2.5 font-600 tracking-wider uppercase">Grade (A/B/C)</th>
                      <th className="text-center p-2.5 font-600 tracking-wider uppercase">Legal 2026 (Y/N)</th>
                      <th className="text-left p-2.5 font-600 tracking-wider uppercase hidden sm:table-cell">Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products?.map((p) => (
                      <tr key={p?.name} className="border-b border-border">
                        <td className="p-2.5 text-foreground font-500">{p?.name}</td>
                        <td className="p-2.5 text-center">
                          <div className="flex justify-center gap-1">
                            {['A', 'B', 'C']?.map((g) => (
                              <span key={g} className="w-6 h-6 border border-border flex items-center justify-center text-muted" style={{ borderRadius: '1px' }}>{g}</span>
                            ))}
                          </div>
                        </td>
                        <td className="p-2.5 text-center">
                          <div className="flex justify-center gap-1">
                            {['Y', 'N']?.map((yn) => (
                              <span key={yn} className="w-6 h-6 border border-border flex items-center justify-center text-muted" style={{ borderRadius: '1px' }}>{yn}</span>
                            ))}
                          </div>
                        </td>
                        <td className="p-2.5 hidden sm:table-cell">
                          <div className="h-5 w-full bg-background border-b border-dashed border-border" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Activity steps */}
          <div className="reveal reveal-delay-1">
            <p className="section-label mb-4">How It Runs</p>
            <div className="space-y-3">
              {activitySteps?.map((s) => (
                <div
                  key={s?.step}
                  className="flex items-start gap-4 p-4 bg-background border border-border"
                  style={{ borderRadius: '2px' }}
                >
                  <div
                    className="w-7 h-7 bg-unpack text-white flex items-center justify-center text-xs font-sans font-700 flex-shrink-0"
                    style={{ borderRadius: '2px' }}
                  >
                    {s?.step}
                  </div>
                  <div>
                    <p className="text-sm font-sans font-700 text-foreground mb-1">{s?.title}</p>
                    <p className="text-sm font-sans text-muted leading-relaxed">{s?.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing debate teaser */}
            <div className="mt-6 p-5 bg-primary text-white" style={{ borderRadius: '2px' }}>
              <div className="flex items-start gap-4">
                <div className="block-badge text-white border-white/30 flex-shrink-0">06</div>
                <div>
                  <p className="text-white/60 text-xs font-sans tracking-widest uppercase mb-1">Closing · 15 minutes</p>
                  <h3 className="font-display font-light text-xl text-white mb-2">"What Would You Kill?"</h3>
                  <p className="text-white/70 text-sm font-sans leading-relaxed">
                    No slides. No structure. Open floor debate. If you could kill ONE packaging format that still dominates shelves today — what would it be and why?
                  </p>
                  <p className="text-white/50 text-xs font-sans mt-3 italic">
                    Experts participate — not just facilitate. The room leads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}