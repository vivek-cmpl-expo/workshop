import React from 'react';
import Image from 'next/image';

interface SpeakerCardProps {
  initials: string;
  initialsColor: string;
  image?: string;
  name: string;
  role: string;
  company: string;
  companyColor: string;
  bullets: string[];
  focusAreas: string[];
  partnerLabel?: string;
  partnerLogo?: string;
}

export default function SpeakerCard({
  initials,
  initialsColor,
  image,
  name,
  role,
  company,
  companyColor,
  bullets,
  focusAreas,
  partnerLabel,
  partnerLogo,
}: SpeakerCardProps) {
  return (
    <div className="bg-surface border border-border p-6 flex flex-col gap-5" style={{ borderRadius: '2px' }}>
      {/* Header */}
      <div className="flex items-center gap-4">
        {image ? (
          <div className="w-32 h-32 flex-shrink-0 relative overflow-hidden  ">
            <Image src={image} alt={name} fill className="object-cover object-top" sizes="128px" />
          </div>
        ) : (
          <div
            className="w-20 h-20 flex items-center justify-center flex-shrink-0 text-white font-sans font-700 text-lg rounded-full"
            style={{ backgroundColor: initialsColor }}
          >
            {initials}
          </div>
        )}
        <div>
          <p className="font-sans font-700 text-foreground text-base leading-tight">{name}</p>
          <p className="text-muted text-sm font-sans mt-0.5">{role}</p>
          <p className={`text-xs font-sans font-700 tracking-widest uppercase mt-1 ${companyColor}`}>{company}</p>
        </div>
      </div>

      {/* Bullets */}
      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm font-sans text-muted leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-border flex-shrink-0" />
            {b}
          </li>
        ))}
      </ul>

      {/* Focus Areas or Partner */}
      <div className="pt-4 border-t border-border">
        {partnerLabel && partnerLogo ? (
          <div className="flex flex-col items-center text-center gap-3">
            <p className="text-sm font-sans font-700 tracking-widest uppercase text-muted">{partnerLabel}</p>
            <div className="relative h-12 w-40">
              <Image src={partnerLogo} alt={partnerLabel} fill className="object-contain" sizes="160px" />
            </div>
          </div>
        ) : (
          <>
            <p className="text-[10px] font-sans font-700 tracking-widest uppercase text-muted mb-2">Focus Areas</p>
            <p className="text-sm font-sans text-foreground">{focusAreas.join(' · ')}</p>
          </>
        )}
      </div>
    </div>
  );
}
