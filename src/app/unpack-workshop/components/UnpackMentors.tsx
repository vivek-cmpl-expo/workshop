'use client';
import React, { useEffect, useRef } from 'react';

const mentors = [
  {
    initials: 'VD',
    name: 'Vaibhav Dixit',
    title: 'Director & Board Member',
    company: 'ALPLA India',
    color: 'bg-unpack text-white',
    expertise: [
      'Global leader in rigid plastic packaging — rPET, PCR & lightweighting',
      'Pioneer of Integrated Manufacturing with Unilever in India',
      'Expert: sustainable packaging transition & circularity at scale',
    ],
    focus: 'rPET · PCR production · Lightweighting · Circularity',
  },
  {
    initials: 'SJ',
    name: 'Sridhar J',
    title: 'Head of Packaging',
    company: 'Pureplay Skin Sciences',
    color: 'bg-blue-100 text-unpack',
    expertise: [
      'Leads packaging for one of India\'s fastest-growing D2C beauty brands',
      'Specialist in sensorial design & premium consumer experience',
      'Hands-on: smart, functional & sustainable packaging systems',
    ],
    focus: 'Sensorial design · D2C packaging · Sustainable systems',
  },
];

export default function UnpackMentors() {
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
          <p className="section-label mb-3">Workshop Experts</p>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-foreground">
            Practitioners in the Room
          </h2>
          <p className="text-muted font-sans text-base mt-3 max-w-xl">
            This session belongs to the community — experts inform, not sell. One facilitating, one circulating during activities and open blocks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mentors?.map((m, i) => (
            <div
              key={m?.initials}
              className={`reveal reveal-delay-${i + 1} bg-background border border-border p-6 sm:p-8`}
              style={{ borderRadius: '2px' }}
            >
              <div className="flex items-start gap-5 mb-6">
                <div
                  className={`w-14 h-14 flex items-center justify-center font-display font-light text-2xl flex-shrink-0 ${m?.color}`}
                  style={{ borderRadius: '2px' }}
                >
                  {m?.initials}
                </div>
                <div>
                  <h3 className="font-sans font-700 text-foreground text-lg">{m?.name}</h3>
                  <p className="text-muted text-sm font-sans">{m?.title}</p>
                  <p className="text-unpack text-xs font-sans font-600 tracking-wider uppercase mt-0.5">{m?.company}</p>
                </div>
              </div>
              <div className="space-y-2 mb-5">
                {m?.expertise?.map((e, j) => (
                  <div key={j} className="flex items-start gap-2.5 text-sm font-sans text-muted">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-unpack flex-shrink-0" />
                    {e}
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-[10px] font-sans font-600 tracking-widest uppercase text-muted mb-1">Focus Areas</p>
                <p className="text-xs font-sans text-foreground">{m?.focus}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Three principles */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 reveal reveal-delay-2">
          {[
            { number: '1', title: 'Feel It', desc: 'Real materials in hand — not slides. People trust what they touch.' },
            { number: '2', title: 'Community First', desc: 'Experts in the room. The session belongs to the people in it.' },
            { number: '3', title: 'Compliance Reality', desc: 'Not abstract policy. Practical dates, real consequences, your products.' },
          ]?.map((p) => (
            <div key={p?.number} className="p-5 bg-blue-50 border border-blue-100" style={{ borderRadius: '2px' }}>
              <p className="text-unpack text-xs font-sans font-700 tracking-widest uppercase mb-2">{p?.number}. {p?.title}</p>
              <p className="text-sm font-sans text-muted leading-relaxed">{p?.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}