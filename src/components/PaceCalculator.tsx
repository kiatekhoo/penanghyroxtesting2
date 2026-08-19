import React, { useState } from 'react';
import { Calculator, Zap, Clock, TrendingUp, Sparkles, ArrowRight, Gauge, ShieldAlert } from 'lucide-react';

interface PaceCalculatorProps {
  onSelectPackage: (packageId: string) => void;
}

export const PaceCalculator: React.FC<PaceCalculatorProps> = ({ onSelectPackage }) => {
  const [runningPace, setRunningPace] = useState<number>(5.5); // min/km in minutes (5.5 = 5:30)
  const [division, setDivision] = useState<'open' | 'pro' | 'doubles'>('open');
  const [fitnessExperience, setFitnessExperience] = useState<'beginner' | 'intermediate' | 'advanced'>('intermediate');

  // Calculation formulas based on HYROX world data averages
  // Compromised running factor increases base 5k/10k running pace by 15-25%
  const compromisedPace = runningPace * (division === 'pro' ? 1.15 : division === 'doubles' ? 1.08 : 1.20);
  const totalRunMinutes = compromisedPace * 8;

  // Station baseline estimates in minutes
  const getStationBaseMinutes = () => {
    let base = 32; // average open total station time
    if (division === 'pro') base = 36;
    if (division === 'doubles') base = 22;

    if (fitnessExperience === 'beginner') base += 8;
    if (fitnessExperience === 'advanced') base -= 5;
    return base;
  };

  const totalStationMinutes = getStationBaseMinutes();
  const roxzoneMinutes = division === 'doubles' ? 4.5 : 6.0;
  const projectedTotalMinutes = totalRunMinutes + totalStationMinutes + roxzoneMinutes;

  // Potential time saved through Penang coach technique & compromised pacing
  const coachingSavings = Math.round(projectedTotalMinutes * 0.16);
  const optimizedTimeMinutes = projectedTotalMinutes - coachingSavings;

  const formatMinutesToTime = (totalMins: number) => {
    const hours = Math.floor(totalMins / 60);
    const mins = Math.floor(totalMins % 60);
    const secs = Math.round((totalMins - Math.floor(totalMins)) * 60);
    if (hours > 0) {
      return `${hours}h ${mins.toString().padStart(2, '0')}m ${secs.toString().padStart(2, '0')}s`;
    }
    return `${mins}m ${secs.toString().padStart(2, '0')}s`;
  };

  const formatPaceString = (paceDecimal: number) => {
    const mins = Math.floor(paceDecimal);
    const secs = Math.round((paceDecimal - mins) * 60);
    return `${mins}:${secs.toString().padStart(2, '0')} /km`;
  };

  return (
    <section id="calculator" className="py-24 bg-[#0F0F0F] relative border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 font-mono text-xs uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE HYROX RACE PACE ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-condensed font-black uppercase text-white tracking-tight">
            CALCULATE YOUR <span className="text-yellow-400">HYROX FINISH TIME</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Enter your baseline running pace and category. See how compromised running impacts your splits, and how much time Penang specialized coaching will shave off your race day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-[#141414] border border-zinc-800 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <h3 className="font-condensed font-black text-xl uppercase text-white tracking-wide flex items-center gap-2">
                <Gauge className="w-5 h-5 text-yellow-400" />
                <span>1. ATHLETE PARAMETERS</span>
              </h3>
              <span className="text-xs font-mono text-zinc-400">PENANG BENCHMARK</span>
            </div>

            {/* Slider 1: Fresh 5K/10K Run Pace */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="text-zinc-300 font-medium">
                  Your Regular 5K/10K Running Pace:
                </label>
                <span className="font-mono text-yellow-400 font-bold text-base bg-zinc-900 px-2.5 py-0.5 border border-zinc-700">
                  {formatPaceString(runningPace)}
                </span>
              </div>
              <input
                type="range"
                min="4.0"
                max="8.0"
                step="0.1"
                value={runningPace}
                onChange={(e) => setRunningPace(parseFloat(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-yellow-400"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                <span>Fast (4:00/km)</span>
                <span>Average (5:30/km)</span>
                <span>Casual (8:00/km)</span>
              </div>
            </div>

            {/* Division Selector */}
            <div className="space-y-2">
              <label className="text-sm text-zinc-300 font-medium block">
                Target HYROX Division:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'open', label: 'Open Division' },
                  { id: 'pro', label: 'Pro Division' },
                  { id: 'doubles', label: 'Doubles / Relay' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setDivision(item.id as any)}
                    className={`py-2 px-3 text-xs font-condensed font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                      division === item.id
                        ? 'bg-yellow-400 text-black border-yellow-400'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:bg-zinc-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Functional Strength Baseline */}
            <div className="space-y-2">
              <label className="text-sm text-zinc-300 font-medium block">
                Gym & Functional Strength Experience:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'beginner', label: 'First-Timer' },
                  { id: 'intermediate', label: 'Gym Regular' },
                  { id: 'advanced', label: 'Hybrid Athlete' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setFitnessExperience(item.id as any)}
                    className={`py-2 px-3 text-xs font-condensed font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                      fitnessExperience === item.id
                        ? 'bg-yellow-400 text-black border-yellow-400'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:bg-zinc-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3.5 bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
              <span>
                <strong>Compromised Run Reality:</strong> After pushing 152kg sleds and 100 wall balls, your effective running pace will slow to <strong className="text-white">{formatPaceString(compromisedPace)}</strong> without specialized pacing drills.
              </span>
            </div>

          </div>

          {/* Results Projection Card */}
          <div className="lg:col-span-6 bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-yellow-400/80 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="text-xs font-mono uppercase tracking-widest text-yellow-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>RACE DAY SPLIT ESTIMATION</span>
                </div>
                <span className="text-xs font-mono bg-zinc-800 px-2 py-0.5 text-zinc-300">
                  {division.toUpperCase()} FORMAT
                </span>
              </div>

              {/* Time Breakdown Rows */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-zinc-950 p-3 border border-zinc-800">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">8 x 1km Runs</div>
                  <div className="text-base sm:text-lg font-condensed font-black text-white mt-1">
                    {formatMinutesToTime(totalRunMinutes)}
                  </div>
                </div>

                <div className="bg-zinc-950 p-3 border border-zinc-800">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">8 Stations</div>
                  <div className="text-base sm:text-lg font-condensed font-black text-white mt-1">
                    {formatMinutesToTime(totalStationMinutes)}
                  </div>
                </div>

                <div className="bg-zinc-950 p-3 border border-zinc-800">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">Roxzone / In-Out</div>
                  <div className="text-base sm:text-lg font-condensed font-black text-white mt-1">
                    {formatMinutesToTime(roxzoneMinutes)}
                  </div>
                </div>
              </div>

              {/* Final Finish Time Display */}
              <div className="bg-black border border-yellow-400/40 p-5 text-center space-y-2">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                  ESTIMATED UNCOACHED FINISH TIME:
                </div>
                <div className="text-4xl sm:text-5xl font-condensed font-black text-white tracking-tight">
                  {formatMinutesToTime(projectedTotalMinutes)}
                </div>
                <div className="text-xs text-zinc-500">
                  (Based on standard pacing and fatigue curve)
                </div>
              </div>

              {/* Target with Penang Coaching */}
              <div className="bg-yellow-400/10 border border-yellow-400 p-4 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-yellow-400 uppercase tracking-wider flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" />
                    <span>WITH PENANG COACH TECHNIQUE PROTOCOL:</span>
                  </div>
                  <span className="bg-yellow-400 text-black font-condensed font-black text-xs px-2 py-0.5 uppercase">
                    SAVE -{coachingSavings} MINS
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-condensed font-black text-yellow-400">
                  {formatMinutesToTime(optimizedTimeMinutes)}
                </div>
                <p className="text-[11px] text-zinc-300">
                  Saved across Sled power transfer, seamless burpee stepping, and sub-5% lactate drift pacing.
                </p>
              </div>

            </div>

            {/* Bottom CTA */}
            <div className="pt-6">
              <button
                id="calc-claim-package-btn"
                onClick={() => onSelectPackage('squad-4week')}
                className="w-full py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-condensed font-black text-xl uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-colors"
              >
                <span>UNLOCK THIS FINISH TIME (VIEW RM PACKAGES)</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
