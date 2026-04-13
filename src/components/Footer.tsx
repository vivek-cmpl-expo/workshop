'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ backgroundColor: '#E8006F' }} className="text-white">
      <div className="flex flex-col items-center justify-center py-8 gap-4">
        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center w-11 h-11 bg-gray-900 hover:bg-gray-800 transition-colors"
          style={{ borderRadius: '10px' }}
          aria-label="Back to top"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Copyright */}
        <p className="text-white text-sm font-sans text-center">
          © 2026 CMPL EXPO-CONNECT LLP
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-1 text-sm font-sans">
          <span className="text-white">All Rights Reserved.</span>
       
        </div>
      </div>
    </footer>
  );
}
