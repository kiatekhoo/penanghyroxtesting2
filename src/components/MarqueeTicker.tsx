import React from 'react';
import { Zap, Flame, ShieldAlert, Award } from 'lucide-react';

interface MarqueeTickerProps {
  reverse?: boolean;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({ reverse = false }) => {
  const items = [
    "HYROX PENANG MALAYSIA",
    "8KM RUN • 8 WORKOUT STATIONS",
    "OFFICIAL RACE PREPARATION",
    "SLED PUSH & PULL TURF",
    "COMPROMISED RUNNING SPECIALIST",
    "RM PACKAGES FOR ALL LEVELS",
    "GEORGETOWN & BAYAN LEPAS HUBS",
    "DOUBLES & SOLO RACERS",
    "WHATSAPP COACH DIRECT ONBOARDING",
    "#NEVERSTOP",
  ];

  return (
    <div className="w-full bg-yellow-400 text-black py-2.5 overflow-hidden select-none border-y border-yellow-300 font-condensed font-black text-base sm:text-lg tracking-wider uppercase">
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className={`flex items-center gap-8 ${reverse ? 'animate-[marquee-reverse_25s_linear_infinite]' : 'animate-[marquee_25s_linear_infinite]'}`}>
          {items.concat(items).map((text, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span>{text}</span>
              <Zap className="w-4 h-4 fill-black text-black shrink-0" />
            </div>
          ))}
        </div>
        <div className={`flex items-center gap-8 ${reverse ? 'animate-[marquee-reverse_25s_linear_infinite]' : 'animate-[marquee_25s_linear_infinite]'}`} aria-hidden="true">
          {items.concat(items).map((text, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-4">
              <span>{text}</span>
              <Zap className="w-4 h-4 fill-black text-black shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
