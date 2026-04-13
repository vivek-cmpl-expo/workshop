'use client';
import React, { useEffect, useRef } from 'react';

const forYou = [
  { role: 'Formulation Experts', desc: 'Working with actives and delivery systems — this session takes you to the frontier of what\'s available now.' },
  { role: 'R&D Leads', desc: 'Compressing timelines with AI, evaluating next-gen actives, building briefs that hold under regulatory scrutiny.' },
  { role: 'NPD Professionals', desc: 'Launching or relaunching in 2026. You need to brief on science you may not have encountered yet.' },
  { role: 'Innovation & Strategy Teams', desc: 'Identifying white spaces in Indian BPC using 2026–27 science as the lens.' },
];

const notForYou = [
  'Marketers looking for trend content without technical application',
  'Anyone expecting a lecture or panel format',
  'Teams not making formulation or NPD decisions in 2026',
  'Anyone who wants theory without doing the work in the room',
];

export default function BanawatAudience() {
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
        <div className="reveal mb-12">
          <p className="section-label mb-3">Who Is This For</p>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-foreground">
            Small Room. Real Briefs. Direct Facilitator Access.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* For you */}
          <div className="reveal">
            <p className="text-xs font-sans font-700 tracking-widest uppercase text-banawat mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-banawat inline-block" />
              This workshop is for you if:
            </p>
            <div className="space-y-4">
              {forYou?.map((f) => (
                <div key={f?.role} className="flex items-start gap-4 p-4 bg-purple-50 border border-purple-100" style={{ borderRadius: '2px' }}>
                  <span className="mt-1 w-2 h-2 rounded-full bg-banawat flex-shrink-0" />
                  <div>
                    <p className="text-sm font-sans font-700 text-foreground mb-1">{f?.role}</p>
                    <p className="text-sm font-sans text-muted leading-relaxed">{f?.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Not for you */}
          <div className="reveal reveal-delay-1">
            <p className="text-xs font-sans font-700 tracking-widest uppercase text-muted mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-border inline-block" />
              This workshop is NOT for:
            </p>
            <div className="space-y-3 mb-10">
              {notForYou?.map((n) => (
                <div key={n} className="flex items-start gap-3 p-3.5 bg-background border border-border" style={{ borderRadius: '2px' }}>
                  <span className="mt-0.5 text-muted text-lg leading-none">✕</span>
                  <p className="text-sm font-sans text-muted">{n}</p>
                </div>
              ))}
            </div>

            {/* Expert setup */}
            <div className="p-5 bg-navy-light border border-border" style={{ borderRadius: '2px' }}>
              <p className="section-label mb-3">Expert Setup</p>
              <p className="text-sm font-sans text-muted leading-relaxed mb-3">
                One senior formulation expert facilitating, one circulating across stations — real-time input on every brief.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Room Setup', value: 'Round tables · 4–6 per table' },
                  { label: 'Station kits', value: 'Pre-placed before doors open' },
                  { label: 'Station 4', value: 'Live internet + projected screen' },
                  { label: 'Templates', value: 'Face-down until Closing Challenge' },
                ]?.map((d) => (
                  <div key={d?.label}>
                    <p className="text-[10px] font-sans font-600 tracking-widest uppercase text-muted">{d?.label}</p>
                    <p className="text-xs font-sans text-foreground mt-0.5">{d?.value}</p>
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