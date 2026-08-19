import React from 'react';
import { Zap, MapPin, Phone, Mail, Instagram, MessageCircle, Shield } from 'lucide-react';
import { COACH_INFO } from '../data/hyroxData';

export const Footer: React.FC = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${COACH_INFO.phoneRaw}`, '_blank');
  };

  return (
    <footer id="main-footer" className="bg-black text-zinc-400 border-t border-zinc-800 pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-yellow-400 text-black flex items-center justify-center font-black font-condensed text-lg">
                <Zap className="w-5 h-5 fill-black" />
              </div>
              <span className="font-condensed font-black text-2xl tracking-tight text-white uppercase">
                HYROX<span className="text-yellow-400">PENANG</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Official HYROX preparation and functional race conditioning in Penang, Malaysia. Empowering athletes across all divisions with structured technique, lactate pacing, and RM packages.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={handleWhatsApp}
                className="p-2 bg-zinc-900 hover:bg-emerald-500 hover:text-black text-emerald-400 border border-zinc-800 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-zinc-900 hover:bg-yellow-400 hover:text-black text-zinc-300 border border-zinc-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Fast Links */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-yellow-400 font-bold">
              // NAVIGATION
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#coach" className="hover:text-yellow-400 transition-colors">
                  Meet Coach Ryan (槟城专属教练)
                </a>
              </li>
              <li>
                <a href="#stations" className="hover:text-yellow-400 transition-colors">
                  The 8 HYROX Workout Stations
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-yellow-400 transition-colors">
                  Race Time & Split Calculator
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-yellow-400 transition-colors">
                  RM Pricing Packages
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-yellow-400 transition-colors">
                  Penang Locations & Schedule
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Packages */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-yellow-400 font-bold">
              // RM TRAINING PACKAGES
            </div>
            <ul className="space-y-2 text-xs">
              <li className="flex justify-between text-zinc-300">
                <span>Starter Assessment:</span>
                <strong className="text-yellow-400">RM 88</strong>
              </li>
              <li className="flex justify-between text-zinc-300">
                <span>Squad Race Camp (4-Week):</span>
                <strong className="text-yellow-400">RM 380/mo</strong>
              </li>
              <li className="flex justify-between text-zinc-300">
                <span>1-on-1 Elite Coaching:</span>
                <strong className="text-yellow-400">RM 1,280</strong>
              </li>
              <li className="flex justify-between text-zinc-300">
                <span>Doubles / Relay Duo Pack:</span>
                <strong className="text-yellow-400">RM 680/pair</strong>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations in Penang */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-yellow-400 font-bold">
              // PENANG DIRECT CONTACT
            </div>
            <div className="space-y-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-yellow-400" />
                <span>{COACH_INFO.phoneFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-yellow-400" />
                <span>{COACH_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                <span>Georgetown / Gurney & Bayan Lepas Hubs, Penang, Malaysia</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-zinc-500 gap-4">
          <div>
            © {new Date().getFullYear()} HYROX Coach Penang. All rights reserved. Malaysia.
          </div>
          <div className="text-center md:text-right max-w-xl text-[10px] text-zinc-600">
            HYROX® is a registered trademark of World Series of Fitness Racing GmbH. Training programs conducted by certified performance specialists in Penang, Malaysia.
          </div>
        </div>

      </div>
    </footer>
  );
};
