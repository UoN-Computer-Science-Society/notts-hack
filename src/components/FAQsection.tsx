'use client';

import { Suspense } from 'react';
import BlockchainScene from './BlockchainScene';

import { useState } from 'react';

const faqs = [
  { q: 'What is Nott Hack 2026 About ?', a: 'Nott Hack 2026 is a student hackathon bringing developers together to build creative solutions and learn new technologies.' },
  { q: 'Who is organising the hackathon?', a: 'The event is organised by the CSS Society in collaboration with partner universities and sponsors.' },
  { q: 'What are the prizes?', a: 'Prizes include cash rewards, sponsor gifts, and recognition certificates.' },
  { q: 'Is there a registration fee?', a: 'No. Participation is completely free for all accepted teams.' },
  { q: 'When is the deadline?', a: 'Registration closes one week before the preliminary round.' },

  { q: 'What is Nott Hack 2026 About ?', a: 'Nott Hack 2026 is a student hackathon bringing developers together to build creative solutions and learn new technologies.' },
  { q: 'Who is organising the hackathon?', a: 'The event is organised by the CSS Society in collaboration with partner universities and sponsors.' },
  { q: 'What are the prizes?', a: 'Prizes include cash rewards, sponsor gifts, and recognition certificates.' },
  { q: 'Is there a registration fee?', a: 'No. Participation is completely free for all accepted teams.' },
  { q: 'When is the deadline?', a: 'Registration closes one week before the preliminary round.' },
];

export default function FAQSection() {

  const [open, setOpen] = useState<number | null>(null);

  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 === 1);

  return (

    <section className="min-h-screen w-full bg-gradient-to-b from-[#5D4777] to-[#5D4777] text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        

        <h2 className="font-pixel text-2xl md:text-3xl text-center mb-9">
          <span>FREQUENTLY</span>{' '}
          <span className="text-pink-400">ASKED</span>{' '}
          <span>QUESTIONS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {leftFaqs.map((faq) => {
              const index = faqs.findIndex(f => f === faq);

              return (
                <div key={index} className="bg-[#2a2338] border border-white/10 rounded-2xl shadow-lg transition hover:shadow-[0_0_25px_rgba(255,77,166,0.4)]">
                  <button
                    onClick={() => setOpen(open === index ? null : index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center"
                  >
                    <span className="font-mono text-lg">{faq.q}</span>
                    <span className="text-pink-400 text-xl">
                      {open === index ? '−' : '+'}
                    </span>
                  </button>

                  {open === index && (
                    <div className="px-6 pb-6 text-white/80 font-mono">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {rightFaqs.map((faq) => {
              const index = faqs.findIndex(f => f === faq);

              return (
                <div key={index} className="bg-[#2a2338] border border-white/10 rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(255,77,166,0.4)] transition">
                  <button
                    onClick={() => setOpen(open === index ? null : index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center"
                  >
                    <span className="font-mono text-lg">{faq.q}</span>
                    <span className="text-pink-400 text-xl">
                      {open === index ? '−' : '+'}
                    </span>
                  </button>

                  {open === index && (
                    <div className="px-6 pb-6 text-white/80 font-mono">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
