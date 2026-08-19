import React, { useState } from 'react';
import { PENANG_LOCATIONS } from '../data/hyroxData';
import { MapPin, Calendar, Clock, CheckCircle2, Navigation, Flame, Zap } from 'lucide-react';

export const PenangLocationsSchedule: React.FC = () => {
  const [selectedLocationId, setSelectedLocationId] = useState(PENANG_LOCATIONS[0].id);
  const [selectedDay, setSelectedDay] = useState<'all' | 'weekday' | 'weekend'>('all');

  const scheduleItems = [
    {
      day: 'Monday',
      time: '06:30 AM & 07:00 PM',
      title: 'Sled Drive & Compromised 1km Loops',
      hub: 'Georgetown HQ (Jalan Kelawai)',
      type: 'Strength Endurance',
      intensity: 'High'
    },
    {
      day: 'Tuesday',
      time: '07:00 AM & 06:30 PM',
      title: 'Concept2 SkiErg & Row Power Economy',
      hub: 'Bayan Lepas Queensbay Arena',
      type: 'Aerobic Threshold',
      intensity: 'Medium-High'
    },
    {
      day: 'Wednesday',
      time: '06:00 AM Sunrise',
      title: 'Outdoor Compromised Track & Lactate Run',
      hub: 'Tanjong Tokong Straits Quay',
      type: 'Track Running',
      intensity: 'High'
    },
    {
      day: 'Thursday',
      time: '07:00 AM & 06:30 PM',
      title: 'Burpee Broad Jump & Sandbag Lunge Clinic',
      hub: 'Bayan Lepas Queensbay Arena',
      type: 'Station Technique',
      intensity: 'High'
    },
    {
      day: 'Friday',
      time: '06:30 AM & 07:00 PM',
      title: 'Wall Ball Unbroken Strategy & Grip Work',
      hub: 'Georgetown HQ (Jalan Kelawai)',
      type: 'Station Finishers',
      intensity: 'High'
    },
    {
      day: 'Saturday',
      time: '08:00 AM - 10:30 AM',
      title: 'FULL OFFICIAL 8-STATION HYROX SIMULATION',
      hub: 'Georgetown HQ Turf Arena',
      type: 'Full Race Sim',
      intensity: 'Max Peak'
    },
    {
      day: 'Sunday',
      time: '08:30 AM - 10:00 AM',
      title: 'Doubles & Relay Team Tactical Squad Battle',
      hub: 'Bayan Lepas South Arena',
      type: 'Doubles Team',
      intensity: 'High'
    },
  ];

  const filteredSchedule = scheduleItems.filter((item) => {
    if (selectedDay === 'weekday') {
      return !['Saturday', 'Sunday'].includes(item.day);
    }
    if (selectedDay === 'weekend') {
      return ['Saturday', 'Sunday'].includes(item.day);
    }
    return true;
  });

  return (
    <section id="locations" className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 font-mono text-xs uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>PENANG TRAINING HUBS & WEEKLY TIMETABLE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-condensed font-black uppercase text-white tracking-tight">
            WHERE & WHEN WE TRAIN <span className="text-yellow-400">IN PENANG</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Convenient training locations spanning Georgetown, Gurney, Tanjong Tokong, and Bayan Lepas with full competition-grade turf and rigs.
          </p>
        </div>

        {/* Penang Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {PENANG_LOCATIONS.map((loc) => {
            const isSelected = selectedLocationId === loc.id;
            return (
              <div
                key={loc.id}
                onClick={() => setSelectedLocationId(loc.id)}
                className={`p-6 border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-zinc-900 border-yellow-400 shadow-xl -translate-y-1'
                    : 'bg-[#141414] border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-yellow-400 bg-yellow-400/10 px-2.5 py-1 border border-yellow-400/20 uppercase">
                      {loc.area}
                    </span>
                    <Navigation className={`w-4 h-4 ${isSelected ? 'text-yellow-400' : 'text-zinc-600'}`} />
                  </div>

                  <h3 className="text-xl font-condensed font-black uppercase text-white">
                    {loc.name}
                  </h3>

                  <p className="text-xs text-zinc-400 flex items-start gap-1.5">
                    <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </p>

                  {/* Features */}
                  <div className="space-y-1.5 pt-2 border-t border-zinc-800/80">
                    {loc.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800 text-[11px] font-mono text-zinc-400">
                  {loc.sessions.map((s, i) => (
                    <div key={i} className="text-yellow-400/90 font-medium">⚡ {s}</div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Weekly Timetable Schedule Table */}
        <div className="bg-[#141414] border border-zinc-800 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-5">
            <div>
              <h3 className="text-2xl font-condensed font-black uppercase text-white tracking-wide flex items-center gap-2">
                <Calendar className="w-5 h-5 text-yellow-400" />
                <span>WEEKLY HYROX PENANG SQUAD SCHEDULE</span>
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Small group sessions capped at 6 athletes per coach for maximum technique feedback.
              </p>
            </div>

            {/* Filter */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedDay('all')}
                className={`px-3 py-1.5 text-xs font-condensed font-bold uppercase ${
                  selectedDay === 'all' ? 'bg-yellow-400 text-black' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                }`}
              >
                All Days (全部)
              </button>
              <button
                onClick={() => setSelectedDay('weekday')}
                className={`px-3 py-1.5 text-xs font-condensed font-bold uppercase ${
                  selectedDay === 'weekday' ? 'bg-yellow-400 text-black' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                }`}
              >
                Weekdays (工作日)
              </button>
              <button
                onClick={() => setSelectedDay('weekend')}
                className={`px-3 py-1.5 text-xs font-condensed font-bold uppercase ${
                  selectedDay === 'weekend' ? 'bg-yellow-400 text-black' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                }`}
              >
                Weekends (周末)
              </button>
            </div>
          </div>

          {/* Schedule List */}
          <div className="space-y-3">
            {filteredSchedule.map((item, idx) => (
              <div
                key={idx}
                className="bg-zinc-950 p-4 border border-zinc-800 hover:border-yellow-400/50 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-4">
                  <div className="w-24 text-sm font-condensed font-black uppercase text-yellow-400 shrink-0">
                    {item.day}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white uppercase">{item.title}</div>
                    <div className="text-xs text-zinc-400 flex items-center gap-2 mt-0.5">
                      <span>{item.hub}</span>
                      <span>•</span>
                      <span className="text-zinc-500 font-mono">{item.type}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end pt-2 md:pt-0 border-t md:border-t-0 border-zinc-800">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-300">
                    <Clock className="w-3.5 h-3.5 text-yellow-400" />
                    <span>{item.time}</span>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 uppercase ${
                    item.intensity === 'Max Peak'
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                      : 'bg-zinc-800 text-yellow-400'
                  }`}>
                    {item.intensity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
