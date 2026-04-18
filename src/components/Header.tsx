'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const workshopLinks = [
  { href: '/banawat-workshop', label: 'BANAWAT' },
  { href: '/savore-workshop', label: 'SAVORE' },
  { href: '/unpack-workshop', label: 'UNPACK' },
  { href: '/launchpad-workshop', label: 'LAUNCHPAD' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-nav' : ''}`}
      >
        {/* Row 1 — Logo bar */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex items-center justify-between h-20 sm:h-24">
              <Link href="https://www.cmplexpo.com/" className="flex items-center">
                <div className="relative h-16 sm:h-20 w-[320px] sm:w-[460px]">
                  <Image
                    src="/assets/logo/logo-m26.jpg"
                    alt="CMPL Expo Mumbai 2026 powered by Star-Struck"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop buttons */}
              <div className="hidden md:flex items-center gap-3">
                <a
                  href="/#pitchday"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-900 text-gray-900 text-xs font-sans font-700 tracking-widest uppercase hover:bg-gray-50 transition-colors"
                  style={{ borderRadius: '2px' }}
                >
                  Pitch Day
                </a>
                <a
                  href="https://cmpl.world/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-900 text-gray-900 text-xs font-sans font-700 tracking-widest uppercase hover:bg-gray-50 transition-colors"
                  style={{ borderRadius: '2px' }}
                >
                  I Want to Visit
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-xs font-sans font-700 tracking-widest uppercase hover:bg-gray-700 transition-colors"
                  style={{ borderRadius: '2px' }}
                >
                  All Workshops
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-gray-700"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Row 2 — Gradient nav strip */}
        <div
          className="hidden md:block"
          style={{
            backgroundImage: 'url(/assets/logo/top_reactangel.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="max-w-8xl mx-auto px-6 lg:px-10">
            <nav className="flex items-center h-11">
              <div className="flex-1" />
              <div className="flex items-center gap-16">
                {workshopLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-sans font-black tracking-[0.2em] uppercase transition-opacity duration-200 ${
                      isActive(link.href)
                        ? 'text-gray-900 opacity-100'
                        : 'text-gray-900 opacity-80 hover:opacity-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex-1" />
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col pt-[64px] transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        {/* Gradient strip in mobile menu */}
        <div
          style={{
            backgroundImage: 'url(/assets/logo/top_reactangel.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="h-1.5 w-full"
        />
        <div className="flex flex-col p-6 gap-2 mt-2">
          {workshopLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 p-4 border border-gray-100 text-sm font-sans font-600 tracking-wider uppercase transition-colors ${
                isActive(link.href) ? 'text-gray-900 bg-gray-50' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 p-4 bg-gray-900 text-white text-sm font-sans font-600 tracking-widest uppercase"
            >
              All Workshops
            </Link>
            <a
              href="/#pitchday"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-4 border border-gray-900 text-gray-900 text-sm font-sans font-600 tracking-widest uppercase"
            >
              Pitch Day
            </a>
            <a
              href="https://cmpl.world/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-4 border border-gray-900 text-gray-900 text-sm font-sans font-600 tracking-widest uppercase"
            >
              I Want to Visit
            </a>
          </div>
        </div>
        <div className="mt-auto p-6 border-t border-gray-100">
          <p className="text-xs text-gray-400 font-sans">CMPL Expo Mumbai 2026 · 4–6 May · JWCC</p>
        </div>
      </div>
    </>
  );
}
