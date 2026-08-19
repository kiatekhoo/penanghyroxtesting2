import React from 'react';
import { TESTIMONIALS } from '../data/hyroxData';
import { Trophy, Star, Quote, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0F0F0F] relative border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 font-mono text-xs uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5" />
            <span>ATHLETE SUCCESS STORIES // PENANG SQUAD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-condensed font-black uppercase text-white tracking-tight">
            PROVEN RESULTS FROM <span className="text-yellow-400">PENANG ATHLETES</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Real race achievements from everyday Penang runners, fitness enthusiasts, and doubles teams at HYROX KL, Singapore, and regional championships.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              className="bg-[#141414] border border-zinc-800 p-6 flex flex-col justify-between relative group hover:border-yellow-400/60 transition-all duration-300 shadow-lg"
            >
              <div className="space-y-4">
                
                {/* Header Rating & Race Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-zinc-900 text-zinc-400 px-2 py-0.5 border border-zinc-800">
                    {testi.location}
                  </span>
                </div>

                {/* Achievement Highlight Box */}
                <div className="bg-zinc-950 p-3 border-l-2 border-yellow-400 space-y-1">
                  <div className="text-xs font-mono text-yellow-400 font-bold uppercase">
                    {testi.achievement}
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    {testi.raceDivision} • <span className="text-emerald-400 font-semibold">{testi.timeImprovement}</span>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;{testi.quote}&rdquo;
                </p>
              </div>

              {/* Athlete Identity */}
              <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center gap-3">
                <img
                  src={testi.avatarUrl}
                  alt={testi.athleteName}
                  className="w-10 h-10 rounded-none object-cover border border-yellow-400"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-condensed font-black text-white uppercase text-base leading-tight">
                    {testi.athleteName}
                  </div>
                  <div className="text-[11px] text-zinc-500 font-mono">
                    Penang HYROX Finisher
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
