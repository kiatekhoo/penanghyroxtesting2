import React, { useState } from 'react';
import { HYROX_STATIONS } from '../data/hyroxData';
import { Zap, MoveRight, MoveLeft, Flame, Activity, Weight, Footprints, Target, Info, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { HyroxStation } from '../types';

export const StationsGrid: React.FC = () => {
  const [selectedDivision, setSelectedDivision] = useState<'menOpen' | 'womenOpen' | 'menPro' | 'womenPro' | 'doubles'>('menOpen');
  const [activeStation, setActiveStation] = useState<HyroxStation>(HYROX_STATIONS[0]);

  const getStationIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'MoveRight': return <MoveRight className="w-5 h-5" />;
      case 'MoveLeft': return <MoveLeft className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Weight': return <Weight className="w-5 h-5" />;
      case 'Footprints': return <Footprints className="w-5 h-5" />;
      case 'Target': return <Target className="w-5 h-5" />;
      default: return <Activity className="w-5 h-5" />;
    }
  };

  const getWeightForDivision = (station: HyroxStation, div: string) => {
    switch (div) {
      case 'womenOpen': return station.weights.womenOpen;
      case 'menOpen': return station.weights.menOpen;
      case 'womenPro': return station.weights.womenPro;
      case 'menPro': return station.weights.menPro;
      case 'doubles': return station.weights.doubles;
      default: return station.weights.menOpen;
    }
  };

  const divisionLabels = [
    { id: 'menOpen', label: "Men's Open" },
    { id: 'womenOpen', label: "Women's Open" },
    { id: 'menPro', label: "Men's Pro" },
    { id: 'womenPro', label: "Women's Pro" },
    { id: 'doubles', label: "Doubles / Relay" },
  ];

  return (
    <section id="stations" className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 font-mono text-xs uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            <span>THE 8 OFFICIAL HYROX STATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-condensed font-black uppercase text-white tracking-tight">
            MASTER EVERY STATION <span className="text-yellow-400">IN PENANG</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Between every 1,000m run lies an official workout station. Explore official competition weight standards and how our Penang coaching breaks down each station for maximum speed and energy conservation.
          </p>

          {/* Division Selector Filter */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-mono uppercase text-zinc-500 mr-2 flex items-center gap-1">
              <Info className="w-3.5 h-3.5" /> DIVISION SPECS:
            </span>
            {divisionLabels.map((div) => (
              <button
                key={div.id}
                onClick={() => setSelectedDivision(div.id as any)}
                className={`px-3 py-1.5 text-xs font-condensed font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedDivision === div.id
                    ? 'bg-yellow-400 text-black shadow-md shadow-yellow-400/20'
                    : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {div.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Stations Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {HYROX_STATIONS.map((station) => {
            const isSelected = activeStation.number === station.number;
            const weightSpec = getWeightForDivision(station, selectedDivision);

            return (
              <div
                key={station.number}
                onClick={() => setActiveStation(station)}
                className={`p-5 cursor-pointer transition-all duration-200 relative group flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-zinc-900 border-yellow-400 shadow-[0_0_20px_rgba(255,237,0,0.15)] -translate-y-1'
                    : 'bg-[#141414] border-zinc-800/90 hover:border-zinc-700 hover:bg-zinc-900/70'
                }`}
              >
                {/* Station Order Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-8 h-8 flex items-center justify-center font-condensed font-black text-lg ${
                      isSelected ? 'bg-yellow-400 text-black' : 'bg-zinc-800 text-zinc-300 group-hover:text-yellow-400'
                    }`}>
                      0{station.number}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500 uppercase">
                      STATION {station.number}
                    </span>
                  </div>

                  <div className={`p-2 ${isSelected ? 'text-yellow-400' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                    {getStationIcon(station.iconName)}
                  </div>
                </div>

                {/* Station Name & Distance */}
                <div className="space-y-1.5 mb-4">
                  <h3 className="text-xl font-condensed font-black uppercase text-white tracking-wide group-hover:text-yellow-400 transition-colors">
                    {station.name}
                  </h3>
                  <div className="inline-block text-xs font-mono font-bold text-yellow-400 bg-yellow-400/10 px-2 py-0.5 border border-yellow-400/20">
                    {station.distanceOrReps}
                  </div>
                </div>

                {/* Weight Standard for Selected Division */}
                <div className="bg-zinc-950 p-2.5 border border-zinc-800 text-xs mb-3 space-y-1">
                  <div className="text-[10px] uppercase font-mono text-zinc-500">
                    Official Spec ({divisionLabels.find(d => d.id === selectedDivision)?.label}):
                  </div>
                  <div className="text-zinc-200 font-semibold text-xs truncate">
                    {weightSpec}
                  </div>
                </div>

                {/* Quick Hint */}
                <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="text-zinc-500">Click to view Coach Strategy</span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-yellow-400 translate-x-1' : 'text-zinc-600'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Station Deep-Dive Spotlight Card */}
        {activeStation && (
          <div className="mt-8 bg-zinc-950 border-2 border-yellow-400 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 hyrox-stripe opacity-30 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-yellow-400 text-black font-condensed font-black text-sm uppercase">
                    STATION 0{activeStation.number} STRATEGY
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {activeStation.distanceOrReps}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-condensed font-black uppercase text-white">
                  {activeStation.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {activeStation.description}
                </p>

                {/* Targeted Muscles */}
                <div className="pt-2">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1">
                    PRIMARY MUSCLE GROUPS:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeStation.keyMuscleGroups.map((m, i) => (
                      <span key={i} className="text-[11px] px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-300">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Coach Tip & Technique Audit */}
              <div className="lg:col-span-8 bg-[#141414] border border-zinc-800 p-5 space-y-4">
                <div className="flex items-center gap-2 text-yellow-400 font-condensed font-black text-lg uppercase tracking-wide">
                  <Zap className="w-5 h-5 fill-yellow-400" />
                  <span>COACH RYAN&apos;S PENANG SPEED SECRET:</span>
                </div>
                <div className="text-zinc-200 text-sm sm:text-base leading-relaxed bg-zinc-900/90 p-4 border-l-4 border-yellow-400 font-medium">
                  &ldquo;{activeStation.coachTip}&rdquo;
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-400 pt-1">
                  <div className="flex items-center gap-2 bg-zinc-900 p-2.5 border border-zinc-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Tested on official Penang competition turf</span>
                  </div>
                  <div className="flex items-center gap-2 bg-zinc-900 p-2.5 border border-zinc-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Includes compromised run transition pacing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
