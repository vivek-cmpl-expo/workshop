'use client';
import React from 'react';

const buttons = [
  { label: 'Register Now to Visit', color: '#2563EB', href: 'https://cmpl.world/' },
  { label: 'Agenda',                color: '#7C3AED', href: 'https://agenda.cmplexpo.com/' },
  { label: 'Showguide',             color: '#DC2626', href: 'https://showguide.cmplexpo.com/' },
  { label: 'Scan Visitor Badges',   color: '#EA580C', href: 'https://cmplconnect.com/' },
];

export default function FloatingSideBar() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-1.5">
      {buttons.map((b) => (
        <a
          key={b.label}
          href={b.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-white text-[10px] sm:text-xs font-sans font-700 tracking-widest uppercase hover:opacity-90 transition-opacity"
          style={{
            backgroundColor: b.color,
            writingMode: 'vertical-rl',
            padding: '14px 8px',
            minHeight: '100px',
            borderTopLeftRadius: '8px',
            borderBottomLeftRadius: '8px',
            borderTopRightRadius: '0',
            borderBottomRightRadius: '0',
            letterSpacing: '0.15em',
          }}
        >
          {b.label}
        </a>
      ))}
    </div>
  );
}
