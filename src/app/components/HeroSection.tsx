'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heroSlides = [
  {
    mobile: '/assets/main_hero_section/WORKSHOPS COLLAGE V.jpeg',
    desktop: '/assets/main_hero_section/CMPL-WORKSHOP%20HOMEPAGE%20BANNER-W01.webp',
    alt: 'CMPL Expo 2026 Workshop Banner',
  },
  {
    mobile: '/assets/main_hero_section/BANAWAT COLLAGE V.jpeg',
    desktop: '/assets/main_hero_section/BANAWAT COLLAGE.png',
    alt: 'BANAWAT Workshop Collage',
  },
  {
    mobile: '/assets/main_hero_section/SAVORE COLLAGE V.jpeg',
    desktop: '/assets/main_hero_section/SAVORE COLLAGE.jpg',
    alt: 'SAVORE Workshop Collage',
  },
  {
    mobile: '/assets/main_hero_section/UNPACK COLLAGE V.jpeg',
    desktop: '/assets/main_hero_section/UNPACK COLLAGE.jpg',
    alt: 'UNPACK Workshop Collage',
  },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
  }, []);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current]);

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    if (!reveals) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('active');
        }),
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    // Trigger immediately for above-fold
    reveals.forEach((el) => {
      const rect = (el as HTMLElement).getBoundingClientRect();
      if (rect.top < window.innerHeight) el.classList.add('active');
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="pt-20 md:pt-[140px] bg-surface border-b border-border overflow-hidden">


      {/* Hero headline */}
      <div className="max-w-8xl mx-auto px-6 lg:px-10 pt-12 pb-6">
        <h1
          className="font-display font-light italic text-primary leading-none tracking-tight reveal reveal-delay-1 mb-0"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 5rem)', lineHeight: '0.9' }}
        >
          The CMPL Workshop Series
        </h1>
      

        <div className="flex flex-col gap-4 mt-6 reveal reveal-delay-2">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-start gap-3 flex-1">
              <p className="text-muted text-base sm:text-lg font-sans font-light leading-relaxed">
                <strong className="font-600 text-foreground">Four paid workshops. Four categories.</strong><br />
                One room of people who are actually building something.
              </p>
            </div>
            <div className="flex items-start gap-3 flex-1">
              <p className="text-muted text-base sm:text-lg font-sans font-light leading-relaxed">
                Each session is a hands-on working session — expert-led, with something specific to take away and act on.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <div className="flex items-start gap-3">
                <p className="text-muted text-base sm:text-lg font-sans font-light leading-relaxed  uppercase">
                  Seats are limited.
                </p>
              </div>
              <Link
            href="#workshops"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-xs font-sans font-600 tracking-widest uppercase self-start hover:bg-opacity-90 transition-colors mt-2"
                style={{ borderRadius: '2px'}}
              >
                Find Your Workshop
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
            </div>
          </div>

        
        </div>
      </div>

      {/* Hero image carousel */}
      <div className="mx-auto px-6 lg:px-10 pb-12 reveal reveal-delay-3">
        <div
          className="relative w-full aspect-[9/16] sm:aspect-auto sm:h-100 md:h-80 overflow-hidden border border-border"
          style={{ borderRadius: '2px' }}
        >
          {heroSlides.map((slide, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
            >
              {/* Mobile image */}
              <Image
                src={slide.mobile}
                alt={slide.alt}
                fill
                className="object-cover sm:hidden"
                sizes="100vw"
                priority={i === 0}
              />
              {/* Desktop image */}
              <Image
                src={slide.desktop}
                alt={slide.alt} 
                fill
                className="object-cover hidden sm:block"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority={i === 0}
              />
            </div>
          ))}

          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/20 to-transparent" style={{ zIndex: 2 }} />
          {/* <div className="absolute bottom-6 left-8" style={{ zIndex: 3 }}>
            <p className="text-white font-display font-light italic text-xl sm:text-2xl">
              Jio World Convention Centre
            </p>
            <p className="text-white/60 text-xs font-sans tracking-widest uppercase mt-1">
              BKC · 4–6 May 2026
            </p>
          </div> */}

       

          {/* Dot navigation */}
          <div className="absolute bottom-6 right-6 flex gap-1.5" style={{ zIndex: 3 }}>
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="transition-all duration-300"
                style={{
                  width: i === current ? '20px' : '6px',
                  height: '6px',
                  borderRadius: '3px',
                  background: i === current ? 'white' : 'rgba(255,255,255,0.4)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

