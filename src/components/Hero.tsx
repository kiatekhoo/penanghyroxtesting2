import React from 'react';
import { Zap, Flame, Shield, ArrowRight, MessageCircle, MapPin, CheckCircle2, Trophy, Clock, Target } from 'lucide-react';
import { COACH_INFO } from '../data/hyroxData';

interface HeroProps {
  onSelectPackage: (packageId?: string) => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectPackage, onOpenBooking }) => {
  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      `Hi Coach Ryan! I saw your HYROX Coach Penang landing page. I want to inquire about training slots, assessment, and RM packages.`
    );
    window.open(`https://wa.me/${COACH_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0B0B0B]"
    >
      {/* Prominent Blurred Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-[6px] scale-110 opacity-70 transition-opacity"
          style={{
            backgroundImage: `url('https://assets.cdn.filesafe.space/OK2rLg2tuSDhGNOYu3tk/media/6a6a1faacdfcf04956061ca8.png')`,
          }}
        />
        {/* Cinematic dark overlay ensuring text readability while keeping the image clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/70 via-[#0B0B0B]/55 to-[#0B0B0B]/95" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Subtle Yellow Ambient Light */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-yellow-400/15 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-yellow-400/15 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Decorative Race Lane Lines */}
      <div className="absolute top-0 bottom-0 left-8 hidden xl:flex flex-col justify-between py-24 text-[10px] font-mono text-zinc-600 tracking-widest uppercase select-none opacity-50">
        <div>[LANE 01 // PENANG HQ]</div>
        <div>[8X1KM RUN • 8 STATIONS]</div>
        <div>[RM PACKAGES AVAILABLE]</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Athletic Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900/90 border border-yellow-400/40 text-yellow-400 text-xs sm:text-sm font-bold uppercase tracking-widest shadow-sm">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-yellow-400" />
              <span>PENANG, MALAYSIA • OFFICIAL HYROX RACE PREPARATION</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-condensed font-black uppercase tracking-tight text-white leading-[0.95]">
              TRAIN LIKE A PRO. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500">
                CRUSH HYROX
              </span> <br />
              IN PENANG.
            </h1>

            {/* Bilingual Subtitle & Description */}
            <p className="text-zinc-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              马来西亚槟城专业 <strong className="text-white">HYROX 专项体能教练</strong>。8 公里跑步 + 8 项功能性器械动作全套攻克，针对性解决 <span className="text-yellow-400 font-semibold">“心率爆表 / 跑动艰难 (Compromised Running)”</span>、雪橇推拉技巧与配速策略。新手入门与进阶刷成绩首选。
            </p>

            {/* Quick Selling Bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 bg-zinc-900/60 p-2.5 border border-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>RM 配套透明合理</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 bg-zinc-900/60 p-2.5 border border-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>官方全套比赛器械</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 bg-zinc-900/60 p-2.5 border border-zinc-800 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>WhatsApp 1对1直联</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#packages"
                id="hero-choose-package-btn"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-condensed font-black text-xl tracking-wider uppercase transition-all duration-200 shadow-[0_0_25px_rgba(255,237,0,0.35)] hover:shadow-[0_0_35px_rgba(255,237,0,0.6)] cursor-pointer group"
              >
                <span>CHOOSE YOUR RM PACKAGE (查看配套)</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                id="hero-whatsapp-btn"
                onClick={handleWhatsAppChat}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 hover:text-emerald-400 border border-zinc-700 hover:border-emerald-500 font-bold text-sm sm:text-base tracking-wide uppercase transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>WHATSAPP COACH DIRECT (+6012-488 3928)</span>
              </button>
            </div>

            {/* Social Proof Bar */}
            <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-6 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-400" />
                <span>Over 120+ Penang Athletes Coached</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span>Average 14-Minute Race Time Improvement</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Visual Card & Race Stats HUD */}
          <div className="lg:col-span-5 relative">
            {/* High Impact Visual Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Yellow Offset Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-30 blur-sm -rotate-1" />
              
              <div className="relative bg-[#141414] border-2 border-zinc-800 p-6 sm:p-8 space-y-6 shadow-2xl">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-yellow-400" />
                    <span className="font-condensed font-black text-xl uppercase tracking-wider text-white">
                      HYROX RACE FORMAT
                    </span>
                  </div>
                  <span className="text-xs font-mono bg-zinc-800 text-yellow-400 px-2 py-1 uppercase">
                    100% OFFICIAL SPEC
                  </span>
                </div>

                {/* The 8x1KM Formula Breakdown */}
                <div className="space-y-3">
                  <div className="p-3 bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-400 text-black flex items-center justify-center font-black font-condensed text-lg">
                        1
                      </div>
                      <div>
                        <div className="text-xs text-zinc-400 uppercase font-mono">Aerobic Foundation</div>
                        <div className="text-sm font-bold text-white uppercase">8 x 1,000m Compromised Run</div>
                      </div>
                    </div>
                    <span className="text-yellow-400 font-condensed font-bold text-base">8 KM TOTAL</span>
                  </div>

                  <div className="p-3 bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-zinc-800 text-yellow-400 flex items-center justify-center font-black font-condensed text-lg border border-yellow-400/30">
                        2
                      </div>
                      <div>
                        <div className="text-xs text-zinc-400 uppercase font-mono">Functional Strength</div>
                        <div className="text-sm font-bold text-white uppercase">8 Official Workout Stations</div>
                      </div>
                    </div>
                    <span className="text-yellow-400 font-condensed font-bold text-base">FULL BODY</span>
                  </div>
                </div>

                {/* Key Training Pillars in Penang */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    // PENANG COACHING FOCUS:
                  </div>
                  
                  <div className="space-y-2 text-xs text-zinc-300">
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-400 font-bold">▶</span>
                      <span><strong>Sled Mechanics:</strong> Push (102kg-202kg) & Pull (78kg-153kg) low-friction driving posture.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-400 font-bold">▶</span>
                      <span><strong>Compromised Run Pacing:</strong> Keep your 1km split steady after high-lactate stations.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-400 font-bold">▶</span>
                      <span><strong>Wall Ball Unbroken Strategy:</strong> Optimal hip rebound mechanics to save 3-5 mins.</span>
                    </div>
                  </div>
                </div>

                {/* Instant Assessment Invitation */}
                <div className="pt-4 border-t border-zinc-800">
                  <div className="bg-yellow-400/10 border border-yellow-400/40 p-3.5 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold text-yellow-400 uppercase tracking-wide">
                        NEW TO HYROX IN PENANG?
                      </div>
                      <div className="text-[11px] text-zinc-300">
                        Book a 90-min Full Assessment & Technique Audit for RM88.
                      </div>
                    </div>
                    <button
                      id="hero-card-trial-btn"
                      onClick={() => onSelectPackage('trial-assessment')}
                      className="px-3 py-1.5 bg-yellow-400 hover:bg-yellow-300 text-black font-condensed font-black text-sm uppercase tracking-wider shrink-0 transition-colors cursor-pointer"
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
