import React, { useState, useEffect } from 'react';
import { Shield, Zap, MessageCircle, Menu, X, PhoneCall, MapPin } from 'lucide-react';
import { COACH_INFO } from '../data/hyroxData';

interface NavbarProps {
  onOpenBooking: (packageId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Coach', href: '#coach' },
    { name: '8 Stations', href: '#stations' },
    { name: 'Pace Calculator', href: '#calculator' },
    { name: 'RM Packages', href: '#packages' },
    { name: 'Penang Hubs', href: '#locations' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleWhatsAppQuickClick = () => {
    const defaultText = encodeURIComponent(
      `Hi Coach Ryan! I'm reaching out from Penang through your HYROX Coach website. I'd like to ask about training sessions and RM packages.`
    );
    window.open(`https://wa.me/${COACH_INFO.phoneRaw}?text=${defaultText}`, '_blank');
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Location Flag */}
          <a
            href="#"
            id="nav-brand-logo"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-none bg-yellow-400 text-black flex items-center justify-center font-black font-condensed text-xl tracking-tighter shadow-md group-hover:scale-105 transition-transform">
              <Zap className="w-6 h-6 fill-black text-black" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-condensed font-black text-2xl tracking-tight text-white uppercase leading-none">
                  HYROX<span className="text-yellow-400">PENANG</span>
                </span>
                <span className="bg-zinc-800 text-yellow-400 text-[10px] font-bold px-1.5 py-0.5 uppercase tracking-wider border border-yellow-400/20">
                  COACH
                </span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-zinc-400 font-medium">
                <MapPin className="w-3 h-3 text-yellow-400" />
                <span>Penang, Malaysia • Certified Performance</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-zinc-300 hover:text-yellow-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-yellow-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-whatsapp-btn"
              onClick={handleWhatsAppQuickClick}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-emerald-500/50 hover:text-emerald-400 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Coach</span>
            </button>

            <button
              id="nav-book-assessment-btn"
              onClick={() => onOpenBooking('trial-assessment')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-wider text-black bg-yellow-400 hover:bg-yellow-300 transition-all font-condensed text-base cursor-pointer shadow-[0_0_15px_rgba(255,237,0,0.3)] hover:shadow-[0_0_20px_rgba(255,237,0,0.5)]"
            >
              <span>CLAIM RM88 TRIAL</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-quick-wa-btn"
              onClick={handleWhatsAppQuickClick}
              className="p-2 text-emerald-400 bg-zinc-900 border border-zinc-800 rounded-none"
              aria-label="WhatsApp Coach"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <button
              id="mobile-nav-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-none focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-[#0F0F0F] border-b border-zinc-800 px-5 pt-3 pb-6 space-y-3 mt-3 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-zinc-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold uppercase tracking-wider text-zinc-300 hover:text-yellow-400 py-2 px-2 hover:bg-zinc-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              id="drawer-cta-packages-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('squad-4week');
              }}
              className="w-full py-3 bg-yellow-400 text-black font-condensed font-black text-lg tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <Zap className="w-5 h-5 fill-black" />
              <span>CHOOSE RM PACKAGE & ONBOARD</span>
            </button>

            <button
              id="drawer-cta-wa-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppQuickClick();
              }}
              className="w-full py-2.5 bg-zinc-900 text-emerald-400 border border-zinc-700 font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>DIRECT WHATSAPP (+60 12-488 3928)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
