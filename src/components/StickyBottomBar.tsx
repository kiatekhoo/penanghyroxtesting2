import React, { useState, useEffect } from 'react';
import { Zap, MessageCircle, ArrowRight } from 'lucide-react';
import { COACH_INFO } from '../data/hyroxData';

interface StickyBottomBarProps {
  onOpenBooking: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after user scrolls down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDirectWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi Coach Ryan! I'm interested in starting HYROX training in Penang. Please send me more info on the RM packages.`
    );
    window.open(`https://wa.me/${COACH_INFO.phoneRaw}?text=${msg}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Quick Action Bar"
      id="sticky-action-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0B0B0B]/95 backdrop-blur-md border-t-2 border-yellow-400 py-3 px-4 shadow-[0_-10px_25px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Left Indicator */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-yellow-400 text-black flex items-center justify-center font-black font-condensed text-lg shrink-0">
            <Zap className="w-5 h-5 fill-black" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white font-condensed font-black text-base uppercase tracking-wide">
                HYROX COACH PENANG
              </span>
              <span className="text-yellow-400 text-xs font-mono font-bold">
                FROM RM 88
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 hidden sm:block">
              Georgetown & Bayan Lepas Hubs • 1-on-1 & Squad Camps
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <button
            id="sticky-whatsapp-btn"
            onClick={handleDirectWhatsApp}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-emerald-400 border border-zinc-700 font-bold text-xs uppercase tracking-wider cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>

          <a
            href="#register"
            id="sticky-book-btn"
            onClick={() => onOpenBooking()}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-black font-condensed font-black text-base uppercase tracking-wider shadow-md cursor-pointer transition-all"
          >
            <span>SELECT RM PACKAGE</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </aside>
  );
};
