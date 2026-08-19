import React from 'react';
import { HYROX_PACKAGES } from '../data/hyroxData';
import { Check, Zap, Sparkles, ArrowRight, ShieldCheck, Flame, Users, User, Award } from 'lucide-react';
import { HyroxPackage } from '../types';

interface PackagesPricingProps {
  selectedPackageId: string;
  onSelectPackage: (packageId: string) => void;
}

export const PackagesPricing: React.FC<PackagesPricingProps> = ({
  selectedPackageId,
  onSelectPackage,
}) => {
  const getPackageIcon = (id: string) => {
    switch (id) {
      case 'trial-assessment':
        return <Zap className="w-5 h-5" />;
      case 'squad-4week':
        return <Flame className="w-5 h-5" />;
      case 'elite-1on1':
        return <Award className="w-5 h-5" />;
      case 'doubles-duo':
        return <Users className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <section id="packages" className="py-24 bg-[#0B0B0B] relative">
      {/* Background Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 font-mono text-xs uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARENT MALAYSIA RINGGIT (RM) PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-condensed font-black uppercase text-white tracking-tight">
            SELECT YOUR <span className="text-yellow-400">HYROX PENANG PACKAGE</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            All coaching fees in Malaysian Ringgit (RM). Choose your preferred training structure below, complete your athlete profile, and connect directly with Coach Ryan via WhatsApp.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {HYROX_PACKAGES.map((pkg) => {
            const isSelected = selectedPackageId === pkg.id;

            return (
              <div
                key={pkg.id}
                id={`package-card-${pkg.id}`}
                className={`relative flex flex-col justify-between p-6 transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-zinc-900 border-2 border-yellow-400 shadow-[0_0_30px_rgba(255,237,0,0.2)] md:-translate-y-2'
                    : isSelected
                    ? 'bg-zinc-900 border-2 border-yellow-400 shadow-lg'
                    : 'bg-[#141414] border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {/* Popular / Special Tag Badge */}
                {pkg.tag && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className={`px-3 py-1 text-[11px] font-condensed font-black uppercase tracking-wider ${
                      pkg.popular ? 'bg-yellow-400 text-black shadow-md' : 'bg-zinc-800 text-yellow-400 border border-yellow-400/40'
                    }`}>
                      {pkg.tag}
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-2 text-yellow-400 pt-1">
                    {getPackageIcon(pkg.id)}
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
                      {pkg.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl font-condensed font-black uppercase text-white tracking-wide">
                    {pkg.name}
                  </h3>

                  {/* Price Tag in RM */}
                  <div className="py-2 border-y border-zinc-800">
                    <div className="flex items-baseline gap-1">
                      <span className="font-condensed font-bold text-lg text-yellow-400">RM</span>
                      <span className="text-4xl sm:text-5xl font-condensed font-black text-white tracking-tight">
                        {pkg.priceRM.toLocaleString()}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-zinc-400">{pkg.period}</span>
                  </div>

                  {/* Ideal For Note */}
                  <p className="text-xs text-zinc-300 italic border-l-2 border-yellow-400 pl-2.5 py-0.5">
                    {pkg.idealFor}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-2">
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Select CTA Button */}
                <div className="pt-6 mt-4 border-t border-zinc-800">
                  <button
                    id={`btn-select-pkg-${pkg.id}`}
                    onClick={() => onSelectPackage(pkg.id)}
                    className={`w-full py-3.5 px-4 font-condensed font-black text-base uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isSelected || pkg.popular
                        ? 'bg-yellow-400 hover:bg-yellow-300 text-black shadow-md'
                        : 'bg-zinc-800 hover:bg-yellow-400 hover:text-black text-zinc-200 border border-zinc-700'
                    }`}
                  >
                    <span>{isSelected ? 'SELECTED (已选择)' : 'SELECT PACKAGE (选择配套)'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Payment Assurance Banner */}
        <div className="mt-12 bg-zinc-950 border border-zinc-800 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-900 border border-zinc-700 text-yellow-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white uppercase font-condensed tracking-wide">
                Flexible Malaysian Payment Options
              </div>
              <div className="text-xs text-zinc-400">
                Support DuitNow QR, Touch &apos;n Go eWallet, Instant Bank Transfer & Split Payments.
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-zinc-400">
            <span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800">DUITNOW QR</span>
            <span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800">TNG EWALLET</span>
            <span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800">ONLINE BANKING</span>
          </div>
        </div>

      </div>
    </section>
  );
};
