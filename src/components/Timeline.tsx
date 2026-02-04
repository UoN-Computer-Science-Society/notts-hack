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

      {/* Background animation (same as Hero) */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <BlockchainScene2 />
        </Suspense>
      </div>

      {/* Timeline content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2
          className="font-pixel text-2xl md:text-4xl text-center mb-5 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          EVENT TIMELINE
        </motion.h2>

        <motion.p
          className="text-center text-[#FF4DA6] font-pixel text-sm mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          FOR MORE INFO ↓
        </motion.p>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[2px] bg-white/20" />
      
      // adjust gaps between boxes 
      // adjust line spacing 
        <div className="flex flex-col gap-5 py-5">  
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
      className="relative w-full h-[160px]"
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div // dot adjustment 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full bg-[#5CE6A0]"
        animate={{
          boxShadow: [
            "0 0 15px rgba(92,230,160,0.9)",
            "0 0 25px rgba(92,230,160,0.7)",
            "0 0 15px rgba(92,230,160,0.9)"
          ],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      <div
        className={`absolute top-1/2 h-[2px] w-12 bg-white/40 ${
          isLeft ? 'right-1/2' : 'left-1/2' // small line from center to box adjustment
        }`}
      />

      <motion.div
        className={`card-dark p-6 w-[300px] absolute top-1/2 -translate-y-1/2 text-center cursor-pointer ${
          isLeft ? 'right-1/2 mr-12' : 'left-1/2 ml-12'
        }`}
        whileHover={{
          boxShadow: "0 0 20px rgba(246, 94, 170, 0.54)",
          scale: 1.05,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <span className="font-pixel text-xs text-[#FF4DA6] block">
          {event.type}
        </span>
        <h3 className="font-mono text-white text-lg mt-2">
          {event.title}
        </h3>
        <p className="font-mono text-[#B8AEC9] text-sm mt-1">
          {event.date}
        </p>
      </motion.div>
    </motion.div>
  );
}
