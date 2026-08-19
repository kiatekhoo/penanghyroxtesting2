import React from 'react';
import { Award, ShieldCheck, Zap, Activity, Flame, MessageCircle, CheckCircle, ChevronRight } from 'lucide-react';
import { COACH_INFO } from '../data/hyroxData';

interface AboutCoachProps {
  onOpenBooking: () => void;
}

export const AboutCoach: React.FC<AboutCoachProps> = ({ onOpenBooking }) => {
  const handleWhatsAppCoach = () => {
    const msg = encodeURIComponent(
      `Hi Coach Ryan! I read your profile on the HYROX Coach Penang website. I would love to ask some questions about your coaching approach and available slots in Penang.`
    );
    window.open(`https://wa.me/${COACH_INFO.phoneRaw}?text=${msg}`, '_blank');
  };

  return (
    <section id="coach" className="py-24 bg-[#0F0F0F] relative border-t border-zinc-800">
      {/* Background Subtle Stripe Pattern */}
      <div className="absolute inset-0 hyrox-stripe opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 font-mono text-xs uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-yellow-400" />
            <span>HEAD PERFORMANCE COACH // PENANG</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-condensed font-black uppercase text-white tracking-tight">
            MEET YOUR HYROX COACH <span className="text-yellow-400">(槟城专属教练)</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Combining athletic race experience, biomechanics precision, and Penang-localized endurance coaching to get you across the HYROX finish line faster and stronger.
          </p>
        </div>

        {/* Main Coach Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#141414] border border-zinc-800 p-6 sm:p-10 shadow-2xl">
          
          {/* Left: Coach Photo & Tactical Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative border-2 border-yellow-400 overflow-hidden bg-zinc-900 group">
              {/* High Energy Athletic Image Placeholder with High Contrast Overlay */}
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=80"
                alt="HYROX Performance Coach in Penang"
                className="w-full h-[450px] object-cover object-top grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent" />
              
              {/* Coach Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-zinc-950/90 border border-zinc-800 backdrop-blur-sm">
                <div className="font-condensed font-black text-2xl uppercase text-white">
                  {COACH_INFO.name}
                </div>
                <div className="text-xs font-mono text-yellow-400 font-semibold uppercase tracking-wider">
                  {COACH_INFO.title}
                </div>
                <div className="flex items-center gap-2 mt-2 text-[11px] text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Accepting New Athletes in Penang for 2024/2025 Races</span>
                </div>
              </div>

              {/* Race Time Flag */}
              <div className="absolute top-4 right-4 bg-yellow-400 text-black font-condensed font-black px-3 py-1 text-sm tracking-wider uppercase shadow-md">
                SUB-68 MIN FINISHER
              </div>
            </div>
          </div>

          {/* Right: Credentials, Philosophy & WhatsApp CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-condensed font-extrabold uppercase text-white tracking-wide">
                WHY TRAIN WITH A DEDICATED HYROX COACH?
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mt-2">
                HYROX is not just another gym workout or regular 10km run. It is a <strong>50% running + 50% functional strength endurance race</strong>. Without specific technique on the sleds and compromise running pacing, athletes lose anywhere from 10 to 25 minutes.
              </p>
            </div>

            {/* Coach Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="bg-zinc-900/80 p-3.5 border border-zinc-800 space-y-1.5">
                <div className="flex items-center gap-2 text-yellow-400 font-condensed font-bold text-base uppercase">
                  <Activity className="w-4 h-4" />
                  <span>Compromised Running</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Learn to run sub-5:00/km splits even when your legs are filled with heavy lactic acid after Sled Push and Lunges.
                </p>
              </div>

              <div className="bg-zinc-900/80 p-3.5 border border-zinc-800 space-y-1.5">
                <div className="flex items-center gap-2 text-yellow-400 font-condensed font-bold text-base uppercase">
                  <Zap className="w-4 h-4" />
                  <span>Station Mechanics</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Step-back sled pulling, Concept2 damper ergonomics, unbroken burpee stepping, and wall ball bounce dynamics.
                </p>
              </div>

              <div className="bg-zinc-900/80 p-3.5 border border-zinc-800 space-y-1.5">
                <div className="flex items-center gap-2 text-yellow-400 font-condensed font-bold text-base uppercase">
                  <Flame className="w-4 h-4" />
                  <span>Penang Simulation Arena</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Direct access to 50m indoor sled turf tracks, Concept2 SkiErgs, and race spec rigs across Georgetown and Bayan Lepas.
                </p>
              </div>

              <div className="bg-zinc-900/80 p-3.5 border border-zinc-800 space-y-1.5">
                <div className="flex items-center gap-2 text-yellow-400 font-condensed font-bold text-base uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Customized RM Packages</span>
                </div>
                <p className="text-xs text-zinc-400">
                  From RM88 Starter Audits to 1-on-1 Race Conditioning and Doubles packages with zero hidden fees.
                </p>
              </div>
            </div>

            {/* Credentials List */}
            <div className="space-y-2 pt-2 border-t border-zinc-800">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                // CERTIFICATIONS & ATHLETIC ACHIEVEMENTS:
              </div>
              <div className="flex flex-wrap gap-2">
                {COACH_INFO.credentials.map((cred, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900 text-zinc-200 border border-zinc-700 text-xs font-medium"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-yellow-400" />
                    <span>{cred}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                id="coach-wa-direct-btn"
                onClick={handleWhatsAppCoach}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-condensed font-black text-lg uppercase tracking-wider transition-colors cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
                <span>CHAT WITH COACH RYAN (+60 12-488 3928)</span>
              </button>

              <button
                id="coach-book-assessment-btn"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-yellow-400 border border-yellow-400/40 font-condensed font-bold text-base uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>BOOK PENANG ASSESSMENT (RM88)</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
