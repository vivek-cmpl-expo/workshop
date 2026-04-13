'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SpeakerCard from '@/components/SpeakerCard';

const blocks = [
  {
    number: '01',
    title: 'The Provocation',
    desc: 'The session opens with one statement that reframes everything you think you know about sustainable packaging. No slides. No intro. Just the line — and what it means for the room.',
    tag: 'Surprise',
  },
  {
    number: '02',
    title: 'Myth Busting',
    desc: 'Five of the most commonly held beliefs about packaging — rapidly dismantled. Paper vs. plastic. Recycling symbols. Bio-based vs. biodegradable. Weight and premiumness. Consumer willingness to pay. Show of hands, expert reveals, no hand-holding.',
    tag: 'Debate',
  },
  {
    number: '03',
    title: 'Touch & See',
    desc: 'A physical sample kit lands on every table before the first slide. rPET vs. virgin PET. Monomaterial vs. multilayer pouch. Lightweighted bottles. Ocean-captured plastic. Paper-based formats. Refill and reuse. You handle each one, ask the questions, and find out what you were wrong about.',
    tag: 'Touch',
    highlight: 'This is the part of the session people talk about afterwards.',
  },
  {
    number: '04',
    title: 'Grade Your Pack ★',
    desc: 'Five everyday products on every table — shampoo bottle, snack wrapper, coffee cup lid, detergent pouch, supplement jar. Two minutes, no phones, no discussion. Grade each one A, B, or C for recyclability and mark whether it will be legally compliant post-2026. Then the table debates. Then the reveal.',
    tag: 'Act',
    highlight:
      'Almost everyone gets two or more wrong — including the ones they were most confident about.',
  },
  {
    number: '05',
    title: 'Compliance Briefing',
    desc: 'Four regulations. Four dates. One-line implication each. No jargon, no slide-reading.',
    tag: 'Act',
    compliance: [
      { rule: 'EU PPWR Recyclability Grading', date: 'August 2026' },
      { rule: 'EU PPWR Reuse Mandates', date: 'August 2026' },
      { rule: 'EU PPWR 50% Empty Space Rule', date: '2030' },
      { rule: 'UK Deposit Return Scheme', date: 'October 2027' },
    ],
    highlight: 'You leave with a printed reference card.',
  },
  {
    number: '06',
    title: 'What Would You Kill?',
    desc: "No slides. No structure. Open floor. If you could kill one packaging format that still dominates shelves today — what would it be and why? Experts don't just facilitate this one. They participate. The room leads. Hot takes are welcome.",
    tag: 'Debate',
  },
];

const speakers = [
  {
    initials: 'SJ',
    initialsColor: '#93C5FD',
    image: '/assets/images/upack/SHRIDHAR.png',
    name: 'Sridhar J',
    role: 'Head of Packaging',
    company: 'Pureplay Skin Sciences (Plum)',
    bullets: [
      "Leads packaging for one of India's fastest-growing D2C beauty brands",
      'Specialist in sensorial design & premium consumer experience',
      'Hands-on: smart, functional & sustainable packaging systems',
    ],
    focusAreas: ['Sensorial design', 'D2C packaging', 'Sustainable systems'],
  },
  {
    initials: 'VD',
    initialsColor: '#1D4ED8',
    image: '/assets/images/upack/VAIBHAV.png',
    name: 'Vaibhav Dixit',
    role: 'Director & Board Member',
    company: 'ALPLA India',
    bullets: [
      'Global leader in rigid plastic packaging — rPET, PCR & lightweighting',
      'Pioneer of Integrated Manufacturing with Unilever in India',
      'Expert: sustainable packaging transition & circularity at scale',
    ],
    focusAreas: ['rPET', 'PCR production', 'Lightweighting', 'Circularity'],
  },
];

export default function UnpackHero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const reveals = ref.current?.querySelectorAll('.reveal');
    if (!reveals) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('active');
        }),
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
          <Link href="/" className="hover:text-foreground transition-colors">
            All Workshops
          </Link>
          <span>/</span>
          <span className="text-unpack font-600">UNPACK</span>
        </div>
      </div>

      <div className="max-w-8xl mx-auto p-6 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Title block */}
            <div>
              <div className="reveal">
                <span
                  className="tag-pill bg-unpack text-white mb-5 inline-block"
                  style={{ borderRadius: '2px' }}
                >
                  Packaging · Sustainability
                </span>
              </div>
             
              <div className="inline-block border border-unpack px-[10px] mb-3 reveal reveal-delay-1">
                <Image src="/assets/logo/workshop_logos/UNPACK.png" alt="UNPACK" height={64} width={200} className="h-16 w-auto object-contain" />
              </div>
              <p className="font-display font-light italic text-2xl sm:text-3xl text-foreground leading-tight mb-2 reveal reveal-delay-1">
                Does Your Pack Make the Grade?
              </p>
              <p className="font-display font-light italic text-xl text-muted leading-tight reveal reveal-delay-2">
                The Packaging on Your Shelf May Already Be Illegal
              </p>
            </div>

            {/* Opening provocation */}
            <div
              className="reveal p-5 border-l-4 border-unpack bg-amber-50"
              style={{ borderRadius: '0 2px 2px 0' }}
            >
              <p className="font-display font-light italic text-lg sm:text-xl text-foreground leading-relaxed">
                "The packaging sitting on your shelf right now may already be illegal in 18 months."
              </p>
            </div>

            {/* About */}
            <div className="reveal">
              <p className="section-label mb-4">About the Workshop</p>
              <div className="space-y-4 text-base font-sans text-muted leading-relaxed">
                <p>
                  Not because you did something wrong — but because the rules are changing faster
                  than most brands are tracking, and the gap between what brands assume about their
                  packaging and what is actually true is wider than anyone wants to admit.
                </p>
                <p>
                  UNpack is a hands-on working session that closes that gap. No slide decks, no
                  abstract policy. Real materials in your hands, real products on your table, real
                  compliance deadlines that apply to your business — and a room full of people
                  figuring out the same thing you are.
                </p>
              </div>
            </div>

            {/* What Happens — 6 blocks */}
            <div className="reveal">
              <p className="section-label mb-2">What Happens</p>
              <p className="text-sm font-sans text-muted mb-6">
                Six blocks. Two hours. Zero filler.
              </p>
              <div className="space-y-4">
                {blocks.map((b) => (
                  <div
                    key={b.number}
                    className="p-5 bg-background border border-border"
                    style={{ borderRadius: '2px' }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="block-badge text-unpack border-unpack/30 shrink-0">
                        {b.number}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-sans font-700 text-foreground text-sm">{b.title}</p>
                          <span
                            className="px-2 py-0.5 bg-amber-50 border border-amber-200 text-unpack text-[10px] font-sans font-600 tracking-widest uppercase"
                            style={{ borderRadius: '2px' }}
                          >
                            {b.tag}
                          </span>
                        </div>
                        <p className="text-sm font-sans text-muted leading-relaxed mb-2">
                          {b.desc}
                        </p>
                        {b.compliance && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                            {b.compliance.map((c) => (
                              <div key={c.rule} className="flex items-start gap-2">
                                <span className="text-unpack mt-0.5">—</span>
                                <p className="text-xs font-sans text-foreground">
                                  <span className="font-600">{c.rule}</span> · {c.date}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                        {b.highlight && (
                          <p className="text-xs font-sans font-600 text-unpack mt-2 italic">
                            {b.highlight}
                          </p>
                        )}
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
                  'A scoring card with the real grades filled in.',
                  'A compliance reference card with four regulations and four dates you can act on immediately.',
                  'A much clearer answer to the question you walked in with — does your pack make the grade?',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-unpack flex-shrink-0" />
                    <p className="text-base font-sans text-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Should Be in This Room */}
            <div className="reveal">
              <p className="section-label mb-4">Who Should Be in This Room</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  'Brand Founders',
                  'Packaging & NPD Teams',
                  'Sustainability Leads',
                  'Manufacturers',
                  'Buyers',
                  'Anyone who has ever approved what goes on a pack',
                ].map((r) => (
                  <span
                    key={r}
                    className="px-3 py-1.5 bg-amber-50 border border-amber-200 text-unpack text-xs font-sans font-600 tracking-wide"
                    style={{ borderRadius: '2px' }}
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Conducted By */}
            <div className="reveal">
              <p className="section-label mb-5">Conducted By</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {speakers.map((s) => (
                  <SpeakerCard key={s.name} {...s} companyColor="text-unpack" />
                ))}
              </div>
              <p className="text-xs font-sans text-muted mt-4 italic">
                One manufacturer. One brand. Both in the room with you.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 reveal reveal-delay-2">
            <div
              className="sticky top-28 bg-background border border-border p-6 space-y-5"
              style={{ borderRadius: '2px' }}
            >
              <div>
                <p className="section-label mb-3">Workshop Details</p>
                <div className="space-y-3">
                  {[
                    { icon: '⏱', label: 'Duration', value: '~2 hours' },
                    { icon: '🕛', label: 'Time', value: '12:15 – 2:15 PM' },
                    { icon: '📅', label: 'Date', value: '5 May 2026' },
                    { icon: '📍', label: 'Venue', value: 'Jio World Convention Centre, BKC' },
                    {
                      icon: '🧱',
                      label: 'Format',
                      value: '6 Blocks · Surprise | Touch | Debate | Act',
                    },
                  ].map((d) => (
                    <div key={d.label} className="flex items-start gap-3">
                      <span className="text-sm">{d.icon}</span>
                      <div>
                        <p className="text-[10px] font-sans font-600 tracking-widest uppercase text-muted">
                          {d.label}
                        </p>
                        <p className="text-sm font-sans text-foreground font-500">{d.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <hr className="border-border" />
              <div>
                <p className="section-label mb-3">For</p>
                {['Brand Founders', 'Packaging Teams', 'Product Developers', 'Manufacturers'].map(
                  (r) => (
                    <div
                      key={r}
                      className="flex items-center gap-2 py-1.5 text-sm font-sans text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-unpack flex-shrink-0" />
                      {r}
                    </div>
                  )
                )}
              </div>
              <hr className="border-border" />
              <a
                href="https://www.cmplexpo.com/cmpl-workshops-2026/?wm26"
                className="block w-full text-center px-5 py-3 bg-unpack text-white text-xs font-sans font-600 tracking-widest uppercase hover:opacity-90 transition-opacity"
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
    </section>
  );
}
