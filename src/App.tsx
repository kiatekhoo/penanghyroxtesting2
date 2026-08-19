import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { AboutCoach } from './components/AboutCoach';
import { StationsGrid } from './components/StationsGrid';
import { PaceCalculator } from './components/PaceCalculator';
import { PackagesPricing } from './components/PackagesPricing';
import { RegistrationSection } from './components/RegistrationSection';
import { PenangLocationsSchedule } from './components/PenangLocationsSchedule';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';

export default function App() {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('squad-4week');

  const handleSelectPackage = (packageId?: string) => {
    if (packageId) {
      setSelectedPackageId(packageId);
    }
    // Smooth scroll down to the registration form
    const registerElement = document.getElementById('register');
    if (registerElement) {
      registerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (packageId?: string) => {
    if (packageId) {
      setSelectedPackageId(packageId);
    }
    const registerElement = document.getElementById('register');
    if (registerElement) {
      registerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-zinc-100 selection:bg-yellow-400 selection:text-black flex flex-col">
      {/* Top Fixed Athletic Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Live Badges and Metrics */}
        <Hero
          onSelectPackage={handleSelectPackage}
          onOpenBooking={() => handleOpenBooking('trial-assessment')}
        />

        {/* 2. Athletic Marquee Ticker */}
        <MarqueeTicker />

        {/* 3. About Penang Head Coach */}
        <AboutCoach onOpenBooking={() => handleOpenBooking('trial-assessment')} />

        {/* 4. The 8 HYROX Stations Grid */}
        <StationsGrid />

        {/* 5. Interactive Race Time & Pace Calculator */}
        <PaceCalculator onSelectPackage={handleSelectPackage} />

        {/* 6. High-Speed Reverse Marquee */}
        <MarqueeTicker reverse={true} />

        {/* 7. Packages & Pricing in Malaysian Ringgit (RM) */}
        <PackagesPricing
          selectedPackageId={selectedPackageId}
          onSelectPackage={handleSelectPackage}
        />

        {/* 8. Registration & Direct WhatsApp Onboarding Form (Core Requested CTA) */}
        <RegistrationSection
          selectedPackageId={selectedPackageId}
          onSelectPackage={setSelectedPackageId}
        />

        {/* 9. Penang Locations & Weekly Timetable */}
        <PenangLocationsSchedule />

        {/* 10. Athlete Testimonials & Race Finisher PBs */}
        <Testimonials />

        {/* 11. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating Bottom Action Bar */}
      <StickyBottomBar onOpenBooking={() => handleOpenBooking(selectedPackageId)} />
    </div>
  );
}
