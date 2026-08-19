import React, { useState } from 'react';
import { HYROX_PACKAGES, COACH_INFO } from '../data/hyroxData';
import { LeadFormData } from '../types';
import {
  Zap,
  MessageCircle,
  User,
  Mail,
  Phone,
  MapPin,
  Target,
  Clock,
  Activity,
  CheckCircle2,
  Copy,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  AlertCircle
} from 'lucide-react';

interface RegistrationSectionProps {
  selectedPackageId: string;
  onSelectPackage: (id: string) => void;
}

export const RegistrationSection: React.FC<RegistrationSectionProps> = ({
  selectedPackageId,
  onSelectPackage,
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    selectedPackageId: selectedPackageId || 'squad-4week',
    fullName: '',
    email: '',
    phone: '',
    addressArea: '',
    fitnessLevel: 'Regular Gym / Functional Fitness',
    targetGoal: 'HYROX Open Division (Solo / Doubles)',
    preferredSlot: 'Weekday Evenings (7:00 PM)',
    specialNotes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Keep package sync
  React.useEffect(() => {
    if (selectedPackageId) {
      setFormData((prev) => ({ ...prev, selectedPackageId }));
    }
  }, [selectedPackageId]);

  const currentPackage =
    HYROX_PACKAGES.find((p) => p.id === formData.selectedPackageId) ||
    HYROX_PACKAGES[1];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMessage('');
  };

  const generateWhatsAppMessage = () => {
    return (
      `🔥 *NEW HYROX PENANG REGISTRATION / ONBOARDING*\n\n` +
      `📦 *Selected Package:* ${currentPackage.name} (RM ${currentPackage.priceRM.toLocaleString()} - ${currentPackage.period})\n\n` +
      `👤 *Athlete Name:* ${formData.fullName.trim()}\n` +
      `📱 *WhatsApp / Phone:* ${formData.phone.trim()}\n` +
      `✉️ *Email:* ${formData.email.trim()}\n` +
      `📍 *Address / Penang Area:* ${formData.addressArea.trim()}\n` +
      `🎯 *Target Goal / Division:* ${formData.targetGoal}\n` +
      `⚡ *Fitness Level / Baseline:* ${formData.fitnessLevel}\n` +
      `⏰ *Preferred Training Time:* ${formData.preferredSlot}\n` +
      (formData.specialNotes ? `📝 *Notes / Questions:* ${formData.specialNotes.trim()}\n` : '') +
      `\nCoach Ryan, I am ready to start my HYROX training in Penang! Please confirm my schedule and next steps.`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name (请输入您的姓名).');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address (请输入有效的电子邮箱).');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMessage('Please enter a valid WhatsApp phone number (请输入有效的电话号码).');
      return;
    }
    if (!formData.addressArea.trim()) {
      setErrorMessage('Please enter your Penang residential area or address (请输入您的槟城地址/地区).');
      return;
    }

    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${COACH_INFO.phoneRaw}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="register" className="py-24 bg-[#0F0F0F] relative border-t border-zinc-800">
      {/* Background Neon Grid */}
      <div className="absolute inset-0 hyrox-carbon opacity-60 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 font-mono text-xs uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INSTANT ONBOARDING & DIRECT COACH CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-condensed font-black uppercase text-white tracking-tight">
            BOOK YOUR RM PACKAGE & <span className="text-yellow-400">CONNECT ON WHATSAPP</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            填写您的基本资料与选择的配套，系统将自动生成完整的训练需求单并<strong>直接连接教练 WhatsApp</strong> 确认上课时间与地点。
          </p>
        </div>

        {/* The Main Onboarding Card */}
        <div className="bg-[#141414] border-2 border-yellow-400 p-6 sm:p-10 shadow-2xl relative">
          
          {/* Selected Package Header Indicator */}
          <div className="bg-zinc-950 border border-zinc-800 p-4 sm:p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 text-black flex items-center justify-center font-black font-condensed text-xl">
                <Zap className="w-6 h-6 fill-black" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-zinc-400">CURRENT SELECTED PACKAGE:</div>
                <div className="text-xl font-condensed font-black text-white uppercase tracking-wide">
                  {currentPackage.name}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-2xl font-condensed font-black text-yellow-400">
                  RM {currentPackage.priceRM.toLocaleString()}
                </div>
                <div className="text-[11px] font-mono text-zinc-400">{currentPackage.period}</div>
              </div>
            </div>
          </div>

          {/* Error Banner */}
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-950/80 border border-red-500 text-red-200 text-sm flex items-center gap-3 animate-shake">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form / Success State */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Package Selector Radio Grid */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                  1. CHOOSE OR SWITCH YOUR PACKAGE (选择配套):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {HYROX_PACKAGES.map((pkg) => (
                    <button
                      type="button"
                      key={pkg.id}
                      onClick={() => {
                        onSelectPackage(pkg.id);
                        setFormData((prev) => ({ ...prev, selectedPackageId: pkg.id }));
                      }}
                      className={`p-3 text-left border transition-all cursor-pointer ${
                        formData.selectedPackageId === pkg.id
                          ? 'bg-yellow-400 text-black border-yellow-400 shadow-md font-bold'
                          : 'bg-zinc-900/90 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      <div className="text-xs font-condensed font-black uppercase truncate">
                        {pkg.name}
                      </div>
                      <div className={`text-sm font-mono font-bold mt-1 ${
                        formData.selectedPackageId === pkg.id ? 'text-black' : 'text-yellow-400'
                      }`}>
                        RM {pkg.priceRM.toLocaleString()}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Details Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Full Name (您的姓名) *</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Jason Tan / 陈伟豪"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 focus:border-yellow-400 focus:outline-none text-white text-sm placeholder-zinc-600 transition-colors"
                  />
                </div>

                {/* WhatsApp Phone Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp / Phone Number (电话号码) *</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. +60 12-345 6789 or 0123456789"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 focus:border-yellow-400 focus:outline-none text-white text-sm placeholder-zinc-600 transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Email Address (电子邮箱) *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. jason.tan@gmail.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 focus:border-yellow-400 focus:outline-none text-white text-sm placeholder-zinc-600 transition-colors"
                  />
                </div>

                {/* Residential Address / Penang Area */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Address / Area in Penang (居住地址 / 地区) *</span>
                  </label>
                  <input
                    type="text"
                    name="addressArea"
                    required
                    placeholder="e.g. Bayan Lepas, Pulau Tikus, Georgetown, Tanjong Tokong"
                    value={formData.addressArea}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 focus:border-yellow-400 focus:outline-none text-white text-sm placeholder-zinc-600 transition-colors"
                  />
                </div>

              </div>

              {/* Athlete Context / Essential Fitness Questions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                
                {/* Target Division */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Target Goal / Division</span>
                  </label>
                  <select
                    name="targetGoal"
                    value={formData.targetGoal}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-3 bg-zinc-950 border border-zinc-800 focus:border-yellow-400 focus:outline-none text-white text-xs sm:text-sm cursor-pointer"
                  >
                    <option value="HYROX Open Division (Solo)">HYROX Men&apos;s / Women&apos;s Open</option>
                    <option value="HYROX Doubles Team">HYROX Doubles (Men / Women / Mixed)</option>
                    <option value="HYROX Pro Division">HYROX Pro Division (Heavier Loads)</option>
                    <option value="4-Person Relay Team">4-Person Relay Squad</option>
                    <option value="General Conditioning / Fat Loss">General Functional Conditioning & Fat Loss</option>
                  </select>
                </div>

                {/* Fitness Level */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Fitness Experience Level</span>
                  </label>
                  <select
                    name="fitnessLevel"
                    value={formData.fitnessLevel}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-3 bg-zinc-950 border border-zinc-800 focus:border-yellow-400 focus:outline-none text-white text-xs sm:text-sm cursor-pointer"
                  >
                    <option value="First-Time Beginner">First-Timer (New to Functional Racing)</option>
                    <option value="Regular Gym / Functional Fitness">Gym Regular (2-4 workouts per week)</option>
                    <option value="Road / Marathon Runner">Runner wanting Strength & Station Power</option>
                    <option value="Past HYROX Racer (Aiming for PB)">Experienced Racer aiming for PB</option>
                  </select>
                </div>

                {/* Preferred Timeslot */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Preferred Training Slot</span>
                  </label>
                  <select
                    name="preferredSlot"
                    value={formData.preferredSlot}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-3 bg-zinc-950 border border-zinc-800 focus:border-yellow-400 focus:outline-none text-white text-xs sm:text-sm cursor-pointer"
                  >
                    <option value="Weekday Mornings (6:30 AM / 7:00 AM)">Weekday Mornings (6:30 AM / 7:00 AM)</option>
                    <option value="Weekday Evenings (6:30 PM / 7:00 PM)">Weekday Evenings (6:30 PM / 7:00 PM)</option>
                    <option value="Saturday Morning (8:00 AM Race Sim)">Saturday Morning Race Sim</option>
                    <option value="Flexible / 1-on-1 Personalized">Flexible (1-on-1 Customized)</option>
                  </select>
                </div>

              </div>

              {/* Special Notes (Injuries, Questions) */}
              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                  Additional Notes, Past Injuries or Specific Target Race (Optional):
                </label>
                <textarea
                  name="specialNotes"
                  rows={2}
                  placeholder="e.g. Preparing for HYROX KL 2024 / Singapore, previous knee recovery, or asking for partner pairing..."
                  value={formData.specialNotes}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 focus:border-yellow-400 focus:outline-none text-white text-sm placeholder-zinc-600"
                />
              </div>

              {/* The Big WhatsApp Direct Connect CTA Button */}
              <div className="pt-4 space-y-3">
                <button
                  type="submit"
                  id="form-submit-whatsapp-btn"
                  className="w-full py-4 sm:py-5 bg-yellow-400 hover:bg-yellow-300 text-black font-condensed font-black text-xl sm:text-2xl uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-200 shadow-[0_0_30px_rgba(255,237,0,0.4)] hover:shadow-[0_0_45px_rgba(255,237,0,0.6)] cursor-pointer"
                >
                  <MessageCircle className="w-6 h-6 fill-black" />
                  <span>CONFIRM & CONNECT COACH VIA WHATSAPP (立即连接教练)</span>
                </button>

                <div className="flex flex-wrap items-center justify-between text-xs text-zinc-400 gap-2 px-1">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Direct line to Coach Ryan (+60 12-488 3928) • Fast 1-hour response</span>
                  </div>
                  <div className="font-mono text-[11px] text-zinc-500">
                    🔒 No spam guarantee • Strict privacy protection
                  </div>
                </div>
              </div>

            </form>
          ) : (
            /* Submission Complete Recap Card */
            <div className="bg-zinc-950 border border-emerald-500/50 p-6 sm:p-8 space-y-6 text-center animate-in fade-in">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border-2 border-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-condensed font-black uppercase text-white">
                  WHATSAPP CONNECT INITIATED! (已发起连接)
                </h3>
                <p className="text-zinc-300 text-sm max-w-lg mx-auto">
                  Thank you, <strong className="text-yellow-400">{formData.fullName}</strong>! Your registration details for <strong className="text-white">{currentPackage.name} (RM{currentPackage.priceRM.toLocaleString()})</strong> have been formatted for Coach Ryan.
                </p>
              </div>

              {/* Message Preview Box */}
              <div className="bg-zinc-900 border border-zinc-800 p-4 text-left max-w-lg mx-auto font-mono text-xs text-zinc-300 space-y-1.5 overflow-x-auto">
                <div className="text-[10px] text-yellow-400 uppercase font-bold mb-2">
                  // PREVIEW OF GENERATED WHATSAPP MESSAGE:
                </div>
                <div className="whitespace-pre-wrap leading-relaxed">
                  {generateWhatsAppMessage()}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const message = generateWhatsAppMessage();
                    window.open(
                      `https://wa.me/${COACH_INFO.phoneRaw}?text=${encodeURIComponent(message)}`,
                      '_blank'
                    );
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-condensed font-black text-lg uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>RE-OPEN WHATSAPP CHAT</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="w-full sm:w-auto px-5 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Copy className="w-4 h-4 text-yellow-400" />
                  <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY MESSAGE TEXT'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="w-full sm:w-auto px-4 py-3.5 text-zinc-400 hover:text-white text-xs uppercase underline"
                >
                  Edit Details
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
