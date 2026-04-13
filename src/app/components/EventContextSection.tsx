'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Image from 'next/image';

const stats = [
  { number: '500+', label: 'Exhibitors' },
  { number: '30,000+', label: 'Trade Attendees' },
  { number: '15+', label: 'Conference Sessions' },
  { number: '4', label: 'Specialist Workshops' },
];

const pavilions = [
  'Food & Beverages',
  'Nutraceuticals',
  'Beauty & Personal Care',
  'Ayurveda & Herbal',
  'Packaging & Print',
  'Flavours & Fragrances',
];

export default function EventContextSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reveals = sectionRef?.current?.querySelectorAll('.reveal');
    if (!reveals) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('active');
        }),
      { threshold: 0.1 }
    );
    reveals?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background border-t border-border">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <div className="reveal">
              <p className="section-label mb-3">About CMPL</p>
              <h2 className="font-display font-light text-3xl sm:text-4xl text-foreground mb-6 leading-tight">
                ASIA’S LARGEST FMCG CONTRACT MANUFACTURING AND PRIVATE LABEL SOURCING EVENT
              </h2>
            </div>
            <div className="reveal reveal-delay-1">
              <p className="text-muted font-sans text-base leading-relaxed mb-4">
                CMPL is Asia's Largest platform that connects Retailers, D2C Brands, Contract
                Manufacturers, Ingredients and Raw Material Suppliers, FMCG Brand owners, Speciality
                Retailers, Pharmacy chains, HORECA, Exporters, Packaging Suppliers and other
                industry players.
              </p>
              <p className="text-muted font-sans text-base leading-relaxed mb-8">
                Today CMPL has successfully created an ecosystem for the industry to connect, build
                strategic partnerships, discuss strategies, best practices and drive business
                opportunities for all stakeholders under one roof.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 reveal reveal-delay-2">
              {stats?.map((s) => (
                <div
                  key={s?.label}
                  className="text-center p-4 bg-surface border border-border"
                  style={{ borderRadius: '2px' }}
                >
                  <p className="stat-number text-2xl sm:text-3xl text-primary">{s?.number}</p>
                  <p className="text-muted text-xs font-sans mt-1">{s?.label}</p>
                </div>
              ))}
            </div>

            {/* Venue details */}
            <div
              className="reveal reveal-delay-3 p-5 bg-navy-light border border-border"
              style={{ borderRadius: '2px' }}
            >
              <div className="flex items-start gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-accent mt-0.5 flex-shrink-0"
                >
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" strokeLinecap="round" />
                </svg>
                <div>
                  <p className="font-sans font-600 text-foreground text-sm">
                    Jio World Convention Centre
                  </p>
                  <p className="text-muted text-xs font-sans mt-0.5">
                    G Block, Bandra Kurla Complex, Bandra East, Mumbai 400051
                  </p>
                  <p className="text-accent text-xs font-sans font-600 mt-1.5 tracking-wider uppercase">
                    4–6 May 2026
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image + pavilions */}
          <div>
            <div className="reveal reveal-delay-1">
              <div
                className="relative h-56 sm:h-72 overflow-hidden mb-5"
                style={{ borderRadius: '2px' }}
              >
                <AppImage
                  src="/assets/images/CMPL-WORKSHOP HOMEPAGE IMAGE.png"
                  alt="Modern convention centre interior with exhibition halls and professional visitors"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <p className="section-label mb-3">Dedicated Pavilions</p>
              <div className="flex flex-wrap gap-2">
                {pavilions?.map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1.5 bg-surface border border-border text-xs font-sans text-foreground"
                    style={{ borderRadius: '2px' }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div
              className="reveal reveal-delay-3 mt-6 p-4 bg-gold-light border border-accent/20 space-y-3"
              style={{ borderRadius: '2px' }}
            >
              <p className="text-xs font-sans font-600 tracking-widest uppercase text-accent mb-1">
                Contact
              </p>
              <div>
                <p className="text-foreground text-sm font-sans">gaurangi@cmplexpo.com</p>
                <p className="text-muted text-sm font-sans">+91 86554 82163</p>
              </div>
              <div>
                <p className="text-foreground text-sm font-sans">ar@cmplexpo.com</p>
                <p className="text-muted text-sm font-sans">+91 96199 63026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
