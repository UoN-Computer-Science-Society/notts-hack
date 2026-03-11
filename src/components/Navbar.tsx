'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'DATES', href: '#dates' },
  { label: 'ABOUT', href: '#about' },
  { label: 'TRACKS', href: '#tracks' },
  { label: 'TIMELINE', href: '#timeline' },
  { label: 'SPONSORS', href: '#sponsors' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 z-50"
      style={{
        width: '100vw',
        background: scrolled ? 'rgba(45, 30, 65, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255, 77, 166, 0.25)'
          : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 32px rgba(0, 0, 0, 0.35)' : 'none',
        transition:
          'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Three-column grid: logo | centre links | register */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          height: '64px',
          padding: '0 2rem',
        }}
      >
        {/* Left — Logo */}
        <div />

        {/* Centre — Nav links */}
        <div className="flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="relative group font-pixel text-[9px] tracking-widest text-white/60 hover:text-white transition-colors duration-200 whitespace-nowrap"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{ background: 'linear-gradient(90deg, #FF4DA6, #5CE6A0)' }}
              />
            </motion.a>
          ))}
        </div>

        {/* test */}

        {/* Right — Register CTA (visible only when scrolled) */}
        <div style={{ justifySelf: 'end' }}>
          <motion.a
            href="#register"
            className="font-pixel text-[9px] tracking-widest px-8 rounded-full border-2 whitespace-nowrap"
            style={{ borderColor: '#5CE6A0', color: '#5CE6A0', pointerEvents: scrolled ? 'auto' : 'none', padding: '8px 24px', lineHeight: 1 }}
            animate={{
              opacity: scrolled ? 1 : 0,
              y: scrolled ? 0 : -8,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(92, 230, 160, 0.12)',
              boxShadow: '0 0 18px rgba(92, 230, 160, 0.35)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            REGISTER
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
