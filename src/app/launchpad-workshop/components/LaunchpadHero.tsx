'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const blocks = [
  {
    number: '01',
    title: 'Is Your Brand Export-Ready?',
    desc: 'Honest assessment of what global buyers, platforms, and distributors actually look for — and where most Indian brands fall short before they even apply.',
  },
  {
    number: '02',
    title: 'Choosing Your Market',
    desc: 'Not every market is the right first market. How to evaluate where your product has the strongest entry case — by category, by channel, by demand.',
  },
  {
    number: '03',
    title: 'Getting Compliant',
    desc: 'Labelling, documentation, certifications, IEC — what you need, in what order, and what can kill a deal if it\'s missing.',
  },
  {
    number: '04',
    title: 'Choosing Your Channel',
    desc: 'Marketplaces vs. e-commerce vs. distributors vs. retail — the real trade-offs, costs, and timelines for each route.',
  },
  {
    number: '05',
    title: 'Your First 90 Days',
    desc: 'A practical roadmap for the first three months of your export journey — what to prioritise, what to avoid, and what most brands get wrong early.',
  },
  {
    number: '06',
    title: 'Live Q&A',
    desc: 'Direct answers to your specific market, product, or compliance question — in the room.',
  },
];

export default function LaunchpadHero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const reveals = ref.current?.querySelectorAll('.reveal');
    if (!reveals) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active'); }),
      { threshold: 0.05 }
    );
    reveals.forEach((el) => {
      observer.observe(el);
      const rect = (el as HTMLElement).getBoundingClientRect();
      if (rect.top < window.innerHeight) el.classList.add('active');
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="pt-16 bg-surface border-b border-border">
      {/* Breadcrumb */}
      <div className="max-w-8xl mx-auto p-6 lg:p-10">
        <div className="flex items-center gap-2 text-xs font-sans text-muted">
          <Link href="/" className="hover:text-foreground transition-colors">All Workshops</Link>
          <span>/</span>
          <span className="text-launchpad font-600">LAUNCHPAD</span>
        </div>
      </div>

      <div className="max-w-8xl mx-auto p-6 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Title block */}
            <div>
              <div className="reveal">
                <span className="tag-pill bg-launchpad text-white mb-5 inline-block" style={{ borderRadius: '2px' }}>
                  FMCG · Exports · Cross Border
                </span>
              </div>
           
              <div className="inline-block border border-launchpad py-[10px] mb-3 reveal reveal-delay-1">
                <Image src="/assets/logo/workshop_logos/LAUNCHPAD.png" alt="LAUNCHPAD" height={72} width={200} className="w-auto object-contain" style={{ height: '4.5rem' }} />
              </div>
              <p className="font-display font-light italic text-2xl sm:text-3xl text-foreground leading-tight mb-2 reveal reveal-delay-1">
                Your Global Journey Starts Here
              </p>
              <p className="font-display font-light italic text-xl text-muted leading-tight reveal reveal-delay-2">
                For Every Brand Ready to Sell Beyond India
              </p>
            </div>

            {/* About */}
            <div className="reveal">
              <p className="section-label mb-4">About the Workshop</p>
              <div className="space-y-4 text-base font-sans text-muted leading-relaxed">
                <p>
                  Most Indian FMCG brands are ready to go global before they realise it. What holds them back isn't the product — it's not knowing where to start, which market to enter first, how to get compliant, and how to find the right channel to actually sell.
                </p>
                <p>
                  Launchpad is a 90-minute working session that removes that uncertainty. Whether you're selling food, non-food, health or wellness — through marketplaces, e-commerce platforms, or international distributors — this session maps the path from Indian brand to global shelf.
                </p>
              </div>
            </div>

            {/* What Happens — 6 blocks */}
            <div className="reveal">
              <p className="section-label mb-2">What Happens</p>
              <p className="text-sm font-sans text-muted mb-6">Six structured blocks covering everything a brand needs to move from India-ready to export-ready.</p>
              <div className="space-y-3">
                {blocks.map((b) => (
                  <div key={b.number} className="p-5 bg-background border border-border" style={{ borderRadius: '2px' }}>
                    <div className="flex items-start gap-4">
                      <span className="block-badge text-launchpad border-launchpad/30 shrink-0">{b.number}</span>
                      <div>
                        <p className="font-sans font-700 text-foreground text-sm mb-1">{b.title}</p>
                        <p className="text-sm font-sans text-muted leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What You Leave With */}
            <div className="reveal">
              <p className="section-label mb-4">What You Leave With</p>
              <div className="space-y-3">
                {[
                  'A clear picture of where your brand stands on export readiness today.',
                  'The channel and market that makes most sense for your product.',
                  'A 90-day action plan you can start acting on the moment you leave.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-launchpad flex-shrink-0" />
                    <p className="font-sans  leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Should Be in This Room */}
            <div className="reveal">
              <p className="section-label mb-4">Who Should Be in This Room</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Brand Founders', 'Export & Sales Heads', 'First-Time Exporters', 'D2C Brands eyeing global', 'Food & Beverage Brands', 'Health & Wellness Brands', 'Non-Food FMCG Teams'].map((r) => (
                  <span key={r} className="px-3 py-1.5 bg-blue-50 border border-blue-200 text-launchpad text-xs font-sans font-600 tracking-wide" style={{ borderRadius: '2px' }}>
                    {r}
                  </span>
                ))}
              </div>
              <p className="text-sm font-sans text-muted leading-relaxed">
                If you have a product and a question about selling it internationally — this session is for you.
              </p>
            </div>

            {/* Conducted By */}
            <div className="reveal">
              <p className="section-label mb-4">Conducted By</p>
              <div className="inline-flex bg-surface border border-border p-6 gap-6" style={{ borderRadius: '2px' }}>
                {/* Left: photo + name */}
                <div className="flex flex-col items-center gap-4">
                  <div className="w-32 h-32 relative overflow-hidden flex-shrink-0">
                    <Image src="/assets/images/launchpad/BINAMRA DASH-circle.png" alt="Binamra Dash" fill className="object-cover object-top" sizes="128px" />
                  </div>
                  <div className="text-center">
                    <p className="font-sans font-700 text-foreground text-base leading-tight uppercase">Binamra Dash</p>
                    <p className="text-muted text-sm font-sans mt-0.5">Head of Marketing</p>
                    <p className="text-xs font-sans font-700 tracking-widest uppercase mt-1 text-launchpad">Alibaba.com India</p>
                  </div>
                </div>
                {/* Vertical divider */}
                <div className="w-px bg-border self-stretch" />
                {/* Right: partnership */}
                <div className="flex flex-col items-center justify-center gap-3">
                  <p className="text-xs font-sans font-700 tracking-widest uppercase text-muted text-center">Workshop in<br />Partnership with</p>
                  <div className="relative h-10 w-36">
                    <Image src="/assets/images/launchpad/alibaba.png" alt="Alibaba.com" fill className="object-contain" sizes="144px" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 reveal reveal-delay-2">
            <div className="sticky top-28 bg-background border border-border p-6 space-y-5" style={{ borderRadius: '2px' }}>
              <div>
                <p className="section-label mb-3">Workshop Details</p>
                <div className="space-y-3">
                  {[
                    { icon: '⏱', label: 'Duration', value: '90 minutes' },
                    { icon: '🕒', label: 'Time', value: '3:00 – 5:00 PM' },
                    { icon: '📅', label: 'Date', value: '5 May 2026' },
                    { icon: '📍', label: 'Venue', value: 'Jio World Convention Centre, BKC' },
                    { icon: '🧱', label: 'Format', value: '6 Structured Blocks' },
                  ].map((d) => (
                    <div key={d.label} className="flex items-start gap-3">
                      <span className="text-sm">{d.icon}</span>
                      <div>
                        <p className="text-[10px] font-sans font-600 tracking-widest uppercase text-muted">{d.label}</p>
                        <p className="text-sm font-sans text-foreground font-500">{d.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <hr className="border-border" />
              <div>
                <p className="section-label mb-3">For</p>
                {['Brand Founders', 'Export Heads', 'First-Time Exporters', 'D2C Brands eyeing global'].map((r) => (
                  <div key={r} className="flex items-center gap-2 py-1.5 text-sm font-sans text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-launchpad flex-shrink-0" />
                    {r}
                  </div>
                ))}
              </div>
              <hr className="border-border" />
              <a
                href="https://workshops.cmplexpo.com/form/public/apply"
                className="block w-full text-center px-5 py-3 bg-launchpad text-white text-xs font-sans font-600 tracking-widest uppercase hover:opacity-90 transition-opacity"
                style={{ borderRadius: '2px' }}
              >
                Register
              </a>
              <Link
                href="/#workshops"
                className="block w-full text-center px-5 py-2.5 border border-border text-foreground text-xs font-sans font-600 tracking-widest uppercase hover:bg-surface transition-colors"
                style={{ borderRadius: '2px' }}
              >
                ← All Workshops
              </Link>
            </div>
          </div>

        </div>
      </div>
      <div className="max-w-8xl mx-auto px-6 lg:px-10 py-6">
        <p className="text-base font-sans text-muted italic text-center">Workshop content and speakers may be updated as needed, while the overarching theme remains intact.</p>
      </div>
    </section>
  );
}
