'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'What is Nott Hack 2026 About ?',
    a: 'Nott Hack 2026 is a student hackathon bringing developers together to build creative solutions and learn new technologies.',
  },
  {
    q: 'Who is organising the hackathon?',
    a: 'The event is organised by the CSS Society in collaboration with partner universities and sponsors.',
  },
  {
    q: 'What are the prizes?',
    a: 'Prizes include cash rewards, sponsor gifts, and recognition certificates.',
  },
  {
    q: 'Is there a registration fee?',
    a: 'No. Participation is completely free for all accepted teams.',
  },
  {
    q: 'When is the deadline?',
    a: 'Registration closes one week before the preliminary round.',
  },

  {
    q: 'What is Nott Hack 2026 About ?',
    a: 'Nott Hack 2026 is a student hackathon bringing developers together to build creative solutions and learn new technologies.',
  },
  {
    q: 'Who is organising the hackathon?',
    a: 'The event is organised by the CSS Society in collaboration with partner universities and sponsors.',
  },
  {
    q: 'What are the prizes?',
    a: 'Prizes include cash rewards, sponsor gifts, and recognition certificates.',
  },
  {
    q: 'Is there a registration fee?',
    a: 'No. Participation is completely free for all accepted teams.',
  },
  {
    q: 'When is the deadline?',
    a: 'Registration closes one week before the preliminary round.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-[#5b4576] to-[#3f315a] text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-[#FF4DA6] font-pixel text-sm mb-24">
          <span className="text-white">FREQUENTLY</span>{' '}
          <span className="text-pink-400">ASKED</span>{' '}
          <span className="text-white">QUESTIONS</span>
        </h2>

        {/* FAQ cards */}
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[#2a2338] border border-white/10 rounded-2xl shadow-lg hover:shadow-pink-500/10 transition"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex justify-between items-center"
              >
                <span className="font-mono text-lg tracking-wide">
                  {faq.q}
                </span>

                <span className="text-pink-400 text-xl">
                  {open === i ? '−' : '+'}
                </span>
              </button>

              {open === i && (
                <div className="px-6 pb-6 text-white/80 font-mono">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
