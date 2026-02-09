'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import BlockchainScene2 from './BlockchainScene2';

const BlockchainScene = dynamic(() => import('./BlockchainScene'), {
  ssr: false,
});

const events = [
  { type: 'KICKOFF', title: 'Info Session', date: '11th February 2026' },
  { type: 'LAUNCH', title: 'Registration Opens', date: '11th February 2026' },
  { type: 'WORKSHOP 1', title: 'Introduction to Hackathon: Tips from past winners', date: '24th March 2026' },
  { type: 'WORKSHOP 2', title: 'Introduction to BlockChain and Cryptocurrency', date: '25th March 2026' },
  { type: 'WORKSHOP 3', title : 'Intro to Agentic Coding + EVM', date: '26th March 2026' },
  { type: 'WORKSHOP 4', title : 'Introduction to Sui and Move Language', date: '31st March - 1st April 2026' },
  { type: 'HACKATHON', title: 'Hacking Begins', date: '6th - 12th Apr 2026' },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="relative py-32 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <BlockchainScene2 />
        </Suspense>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2 className="font-pixel text-2xl md:text-4xl text-center mb-5 text-white">
          EVENT TIMELINE
        </motion.h2>
        <motion.p className="text-center text-[#FF4DA6] font-pixel text-sm mb-24">
          FOR MORE INFO ↓
        </motion.p>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* The Vertical Line: Left-aligned on mobile, Center-aligned on desktop */}
        <div className="absolute top-0 left-8 md:left-1/2 -translate-x-1/2 h-full w-[2px] bg-white/20" />

        <div className="flex flex-col gap-12">
          {events.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ event, index }: any) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      // 1. flex items-center ensures the dot and card are ALWAYS perfectly leveled
      className={`relative flex items-center w-full min-h-[150px] ${
        isLeft ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* 2. The Dot (Stays on the line) */}
      <motion.div 
        className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20 w-4 h-4 rounded-full bg-[#5CE6A0]"
        animate={{ boxShadow: ["0 0 10px #5CE6A0", "0 0 20px #5CE6A0", "0 0 10px #5CE6A0"] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* 3. The Connecting Line (Calculated from the center) */}
      <div 
      className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] w-[12vw] bg-white/40 ${
        isLeft 
      ? 'left-[calc(50%+8px)]'// Starts 8px left of center, extends 48px left
      : 'right-[calc(50%+8px)]'   // Starts 8px right of center, extends 48px right
      }`} 
      />

      {/* 4. The Content Card (Now using margins instead of absolute positioning) */}
      <motion.div
        className={`
          card-dark p-6 z-10
          w-[calc(100%-5rem)] ml-20 mr-4    /* Mobile styles */
          md:w-[320px] md:ml-0 md:mr-0     /* Desktop styles */
          ${isLeft ? 'md:mr-12' : 'md:ml-12'}
        `}
        whileHover={{ scale: 1.05 }}
      >
        <span className="font-pixel text-xs text-[#FF4DA6] block">{event.type}</span>
        <h3 className="font-mono text-white text-lg mt-2 leading-tight">{event.title}</h3>
        <p className="font-mono text-[#B8AEC9] text-sm mt-1">{event.date}</p>
      </motion.div>
    </motion.div>
  );
}