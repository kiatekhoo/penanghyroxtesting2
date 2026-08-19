import { HyroxPackage, HyroxStation, PenangLocation, Testimonial, FaqItem } from '../types';

export const COACH_INFO = {
  name: "Coach Ryan Khoo",
  title: "Head HYROX Performance Coach (Penang)",
  credentials: [
    "Official HYROX Certified Coach",
    "Sub-68 Min HYROX Men's Open Finisher",
    "ACE Certified Personal Trainer (CPT)",
    "EXOS Functional Performance Specialist",
    "State Marathon & Middle-Distance Runner"
  ],
  bio: "Penang's premier competitive HYROX race specialist. Having competed across HYROX APAC (KL, Singapore, Bangkok), Coach Ryan focuses on compromised running endurance, station transition efficiency, and lactate threshold management for beginners to elite athletes.",
  phoneFormatted: "+60 12-488 3928",
  phoneRaw: "60124883928",
  email: "coach.ryan.hyrox@gmail.com",
  instagram: "@hyrox_coach_penang",
  location: "Penang, Malaysia (Georgetown, Gurney, Bayan Lepas)"
};

export const HYROX_PACKAGES: HyroxPackage[] = [
  {
    id: "trial-assessment",
    name: "HYROX Starter Assessment",
    subtitle: "Full Benchmark & Gap Analysis",
    priceRM: 88,
    period: "Single Session (90 Mins)",
    tag: "First-Timer Special",
    popular: false,
    idealFor: "Athletes new to HYROX wanting baseline testing & technique audit",
    features: [
      "1x 90-Minute 1-on-1 Full HYROX Assessment in Penang",
      "Erg & Sled mechanical efficiency audit (SkiErg, Row, Sled Push/Pull)",
      "Compromised heart-rate & aerobic capacity testing",
      "Customized 8-station gap analysis scorecard",
      "Personalized training recommendation report",
      "No long-term commitment required"
    ],
    whatsAppTemplateMessage: "Hi Coach Ryan! I would like to book the HYROX Starter Assessment (RM88). Here are my details to schedule a trial in Penang:"
  },
  {
    id: "squad-4week",
    name: "HYROX Squad Race Camp",
    subtitle: "High-Energy Small Group Training",
    priceRM: 380,
    period: "per month (8 Sessions)",
    tag: "Most Popular in Penang",
    popular: true,
    idealFor: "Gym-goers & runners preparing for upcoming HYROX races together",
    features: [
      "8x 60-Minute High-Octane Small Group Coaching Sessions (Max 6 athletes)",
      "Weekly Compromised Running + Sled & Erg power drills",
      "Full Official HYROX Simulation Days (Penang indoor turf track)",
      "Race-specific pacing & transition mastery",
      "HYROX Penang Squad private WhatsApp group for daily accountability",
      "Complimentary recovery & mobility guidelines"
    ],
    whatsAppTemplateMessage: "Hi Coach Ryan! I want to join the HYROX Squad Race Camp (RM380/mo). Please register me for the upcoming intake in Penang:"
  },
  {
    id: "elite-1on1",
    name: "1-on-1 Elite HYROX Coaching",
    subtitle: "Customized Personal Performance Program",
    priceRM: 1280,
    period: "10 Sessions + 1 Free Sim",
    tag: "Best for PB / Podium Goals",
    popular: false,
    idealFor: "Solo athletes striving for sub-70 min finish, Pro division, or World Championship qualifiers",
    features: [
      "10x Dedicated 60-Minute 1-on-1 Coaching Sessions with Coach Ryan",
      "1x Full 8-Station Official Race Simulation with video biomechanics review",
      "Periodized customized weekly running & lifting programming (TrainingPeaks)",
      "In-depth Lactate Threshold & Heart Rate Zone pacing protocols",
      "24/7 direct WhatsApp access with Coach for form checks & adjustments",
      "Race Day nutrition, hydration, and carb-loading blueprint",
      "Flexible scheduling across Penang training facilities"
    ],
    whatsAppTemplateMessage: "Hi Coach Ryan! I'm interested in the 1-on-1 Elite HYROX Coaching (RM1,280). I'm ready to commit to personalized race prep in Penang:"
  },
  {
    id: "doubles-duo",
    name: "Doubles & Relay Power Pack",
    subtitle: "2-Person Partner Tactical Prep",
    priceRM: 680,
    period: "per pair (8 Sessions)",
    tag: "Great Value for Duos",
    popular: false,
    idealFor: "Men / Women / Mixed Doubles & 4-Person Relay teams racing in KL or Singapore",
    features: [
      "8x 60-Minute Joint Training Sessions for you and your racing partner",
      "Doubles-specific split strategy (50/50 vs load-dominant rotations)",
      "Seamless station handover mechanics & breathing synchronisation",
      "Pacing synergy & partner psychological pacing techniques",
      "Full Doubles Race Simulation in Penang facility",
      "Joint race pacing timeline plan"
    ],
    whatsAppTemplateMessage: "Hi Coach Ryan! My partner and I want to sign up for the Doubles & Relay Power Pack (RM680/pair). Here are our details:"
  }
];

export const HYROX_STATIONS: HyroxStation[] = [
  {
    number: 1,
    name: "SkiErg",
    distanceOrReps: "1,000 meters",
    description: "Full-body aerobic power demand directly after your first 1km run. Targets lats, core, and glutes.",
    iconName: "Zap",
    weights: {
      womenOpen: "Standard resistance damper",
      menOpen: "Standard resistance damper",
      womenPro: "Standard resistance damper",
      menPro: "Standard resistance damper",
      doubles: "Shared 1,000m (any split)"
    },
    coachTip: "Don't sprint the first 300m! Aim for a consistent 500m split (e.g. 2:00-2:10). Hinge at the hips and engage lats instead of pulling only with your arms.",
    keyMuscleGroups: ["Lats", "Core", "Triceps", "Glutes", "Hamstrings"]
  },
  {
    number: 2,
    name: "Sled Push",
    distanceOrReps: "50 meters (4 x 12.5m)",
    description: "Massive quad and glute burn. Pushing the heavy sled across carpeted turf with strict turns.",
    iconName: "MoveRight",
    weights: {
      womenOpen: "102 kg (incl. sled)",
      menOpen: "152 kg (incl. sled)",
      womenPro: "152 kg (incl. sled)",
      menPro: "202 kg (incl. sled)",
      doubles: "Same as Open / Pro division"
    },
    coachTip: "Lock your arms straight or tuck low with high knees. Keep steady drive steps without stopping. Stopping kills forward momentum and drains 3x more energy.",
    keyMuscleGroups: ["Quadriceps", "Glutes", "Calves", "Core Stabilizers"]
  },
  {
    number: 3,
    name: "Sled Pull",
    distanceOrReps: "50 meters (4 x 12.5m)",
    description: "Pulling the sled by rope inside the marked box. Demands explosive posterior chain and grip strength.",
    iconName: "MoveLeft",
    weights: {
      womenOpen: "78 kg (incl. sled)",
      menOpen: "103 kg (incl. sled)",
      womenPro: "103 kg (incl. sled)",
      menPro: "153 kg (incl. sled)",
      doubles: "Same as Open / Pro division"
    },
    coachTip: "Use the step-back hip drop technique! Sit back into your hips rather than hand-over-hand arm curling. Your leg drive carries 80% of the load.",
    keyMuscleGroups: ["Hamstrings", "Glutes", "Upper Back", "Forearms & Grip"]
  },
  {
    number: 4,
    name: "Burpee Broad Jumps",
    distanceOrReps: "80 meters",
    description: "The mental crucible of HYROX. Chest-to-floor burpee followed by a forward jump across the lane.",
    iconName: "Flame",
    weights: {
      womenOpen: "Bodyweight (80m)",
      menOpen: "Bodyweight (80m)",
      womenPro: "Bodyweight (80m)",
      menPro: "Bodyweight (80m)",
      doubles: "Shared 80m"
    },
    coachTip: "Step back down instead of jumping down to protect your heart rate. Jump forward with moderate efficiency, not maximum Olympic jump distance.",
    keyMuscleGroups: ["Full Body", "Cardiovascular", "Chest", "Hip Flexors"]
  },
  {
    number: 5,
    name: "Rowing",
    distanceOrReps: "1,000 meters",
    description: "Concept2 rower. A test of rhythmic aerobic recovery before the heavy carry and lunges.",
    iconName: "Activity",
    weights: {
      womenOpen: "Standard damper setting",
      menOpen: "Standard damper setting",
      womenPro: "Standard damper setting",
      menPro: "Standard damper setting",
      doubles: "Shared 1,000m"
    },
    coachTip: "Keep stroke rate around 26-28 SPM. Focus on 60% leg drive, 20% core lean, 20% arm pull. Use the return phase to inhale deeply.",
    keyMuscleGroups: ["Legs", "Back", "Core", "Cardiovascular"]
  },
  {
    number: 6,
    name: "Farmers Carry",
    distanceOrReps: "200 meters",
    description: "Walking 200m carrying two heavy kettlebells in both hands without letting them touch the floor.",
    iconName: "Weight",
    weights: {
      womenOpen: "2 x 16 kg (32 kg total)",
      menOpen: "2 x 24 kg (48 kg total)",
      womenPro: "2 x 24 kg (48 kg total)",
      menPro: "2 x 32 kg (64 kg total)",
      doubles: "Shared or simultaneous depending on category"
    },
    coachTip: "Chalk up well! Pull your shoulder blades back and down (pack the shoulders), take short, rapid cadence strides to minimize wobble.",
    keyMuscleGroups: ["Traps", "Forearms & Grip", "Obliques", "Core"]
  },
  {
    number: 7,
    name: "Sandbag Lunges",
    distanceOrReps: "100 meters",
    description: "Lunging 100m with a heavy sandbag draped across the upper back/shoulders. Knee must touch the floor.",
    iconName: "Footprints",
    weights: {
      womenOpen: "10 kg Sandbag",
      menOpen: "20 kg Sandbag",
      womenPro: "20 kg Sandbag",
      menPro: "30 kg Sandbag",
      doubles: "Shared 100m"
    },
    coachTip: "Keep your torso tall. Push out of the front heel. Avoid pausing at the bottom of the lunge; maintain a continuous, rhythmic slow-marching flow.",
    keyMuscleGroups: ["Quadriceps", "Glutes", "Hamstrings", "Core Balance"]
  },
  {
    number: 8,
    name: "Wall Balls",
    distanceOrReps: "75 or 100 reps",
    description: "The grand finale. Full depth squat followed by throwing the medicine ball to the official target mark.",
    iconName: "Target",
    weights: {
      womenOpen: "4 kg Ball (75 reps to 2.7m)",
      menOpen: "6 kg Ball (100 reps to 3.0m)",
      womenPro: "6 kg Ball (100 reps to 2.7m)",
      menPro: "9 kg Ball (100 reps to 3.0m)",
      doubles: "Shared reps"
    },
    coachTip: "Break reps into structured sets before failure (e.g. 20-15-15-15-15-10-10). Catch the ball on the way down into your squat to use bounce kinetic energy.",
    keyMuscleGroups: ["Legs & Glutes", "Shoulders", "Triceps", "Mental Endurance"]
  }
];

export const PENANG_LOCATIONS: PenangLocation[] = [
  {
    id: "georgetown-hub",
    name: "HYROX Penang HQ (Georgetown / Gurney Hub)",
    area: "Georgetown & Pulau Tikus",
    address: "Jalan Kelawai / Gurney Drive Zone, Georgetown, Penang",
    features: [
      "Official 50m Indoor Sled Turf Track",
      "Concept2 SkiErgs & Rowers with Live Display",
      "Competition Spec Sleds & Weight Plates (100kg - 250kg)",
      "Air-Conditioned Indoor Functional Arena + Showers"
    ],
    sessions: ["Mon / Wed / Fri: 6:30 AM & 7:00 PM", "Saturday: 8:00 AM Race Simulation"]
  },
  {
    id: "bayan-lepas-arena",
    name: "HYROX South Arena (Bayan Lepas / Queensbay Zone)",
    area: "Bayan Lepas / Bayan Baru",
    address: "Near Queensbay Mall & FTZ Commercial District, Penang",
    features: [
      "High-Ceiling Functional Fitness Warehouse",
      "Wall Ball Target Rig with Official Hyrox Height Markers",
      "Heavy Sandbags (10kg - 30kg) & Competition Kettlebells",
      "Spacious Parking & Locker Rooms"
    ],
    sessions: ["Tue / Thu: 7:00 AM & 6:30 PM", "Sunday: 8:30 AM Squad Battle"]
  },
  {
    id: "tanjong-tokong-track",
    name: "HYROX Outdoor Compromised Track (Tanjong Tokong)",
    area: "Tanjong Tokong & Seri Tanjung Pinang",
    address: "Straits Quay Promenade Zone, Tanjong Tokong, Penang",
    features: [
      "Open-Air Seaside 1KM Interval Running Track",
      "Compromised Running Simulation under Tropical Heat Condition",
      "Mobile Rig & Kettlebell Stations",
      "Scenic Sunrise Squad Conditioning"
    ],
    sessions: ["Wednesday: 6:00 AM Sunrise Run & Sled", "Saturday: 5:30 PM Sunset Threshold"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    athleteName: "Marcus Tan",
    raceDivision: "HYROX KL 2024 - Men's Open",
    achievement: "Finished in 1:12:45 (Personal Best)",
    timeImprovement: "Cut 18 mins off first attempt",
    quote: "Coach Ryan completely restructured how I approach the sleds and running. Training in Penang with the exact equipment made race day feel familiar and effortless!",
    location: "Georgetown, Penang",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "2",
    athleteName: "Rachel Lee & Cheryl Ooi",
    raceDivision: "HYROX Singapore - Women's Doubles",
    achievement: "Top 10 Podium Finish (1:08:12)",
    timeImprovement: "1st Place in Age Group",
    quote: "The Doubles & Relay coaching in Penang was a game changer for us. Coach Ryan taught us seamless station handovers and saved our legs during the wall balls!",
    location: "Bayan Lepas, Penang",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "3",
    athleteName: "Dr. Kelvin Teh",
    raceDivision: "HYROX Bangkok - Men's Pro",
    achievement: "Sub-70 Min Club (1:09:30)",
    timeImprovement: "Qualified for World Championships",
    quote: "As a busy professional in Penang, the structured 1-on-1 program fit my intense schedule. Lactate threshold pacing prevented me from blowing up on the burpees.",
    location: "Tanjong Tokong, Penang",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  }
];

export const FAQS: FaqItem[] = [
  {
    category: "general",
    question: "Do I need to be an elite athlete to join HYROX training in Penang?",
    answer: "Absolutely not! HYROX is designed for every body. Over 60% of our Penang members were first-time participants who had never done a fitness race before. We scale all weights, paces, and distances to match your current starting baseline."
  },
  {
    category: "training",
    question: "Where are the training sessions held in Penang?",
    answer: "We operate across prime hubs in Penang: Georgetown / Gurney hub (air-conditioned indoor turf), Bayan Lepas Queensbay arena (large warehouse box), and Tanjong Tokong Straits Quay zone (outdoor compromised running tracks). You can choose the location closest to your home or office."
  },
  {
    category: "pricing",
    question: "What payment methods are accepted for the RM packages?",
    answer: "We accept all Malaysian payment methods including DuitNow QR, Touch 'n Go (TnG) eWallet, Instant Online Bank Transfer (Maybank, CIMB, Public Bank, etc.), and 0% credit card split plans for multi-month coaching."
  },
  {
    category: "race",
    question: "What is 'Compromised Running' and why is coaching essential?",
    answer: "Compromised running is running 1km immediately after high-lactate station work (e.g. pushing a 152kg sled or lunging 100m). Without specialized neuromuscular coaching, your running pace drops by 40-50%. Our training teaches your body to flush lactate while sustaining race pace."
  },
  {
    category: "general",
    question: "What happens right after I submit the WhatsApp CTA form?",
    answer: "Once you click 'Confirm & Direct Connect', a pre-formatted WhatsApp chat will launch instantly connecting you to Coach Ryan. Coach Ryan will review your selected package, fitness background, and confirm your preferred slot within 1-2 hours."
  }
];
