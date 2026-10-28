export interface RepairService {
  id: string;
  slug: string;
  title: string;
  h1: string;
  shortDescription: string;
  fullDescription: string;
  estimatedPriceRange: string;
  turnaroundTime: string;
  commonSymptoms: string[];
  diagnosticProcess: string[];
  warrantyDetails: string;
  supportedBrands: string[];
  faqs: { question: string; answer: string }[];
  ctaText: string;
}

export const repairServices: RepairService[] = [
  {
    id: "repair-screen",
    slug: "screen-replacement",
    title: "Phone Screen Replacement",
    h1: "Mobile Screen Replacement Services in Itahari, Nepal",
    shortDescription: "Original and high-grade OEM display replacements for shattered glass, unresponsive touch, vertical lines, and blank screens.",
    fullDescription: "A broken or flickering phone screen doesn't mean your smartphone is lost. At Himal Product and Services, our certified bench technicians perform precision display assemblies using high-grade replacement panels, ensuring original touch sensitivity, color vibrancy, and frame alignment.",
    estimatedPriceRange: "रू 1,800 – रू 14,500 (Varies by OLED / AMOLED / LCD and phone brand)",
    turnaroundTime: "45 – 90 Minutes (Express same-day repair available)",
    commonSymptoms: [
      "Cracked outer front glass with working display",
      "Black screen or ink bleeding spots inside display",
      "Green or white vertical lines appearing after impact",
      "Ghost touch or frozen, unresponsive touchscreen areas",
      "Flickering backlight or display going dim intermittently"
    ],
    diagnosticProcess: [
      "Physical impact assessment to inspect frame bend and internal housing",
      "Pre-installation touch digitization and dead-pixel diagnostic check",
      "Careful dust-free adhesion sealing with specialized industrial frame glue",
      "Post-installation multi-touch and ambient light sensor calibration"
    ],
    warrantyDetails: "Up to 90 days replacement warranty against touch dysfunction and manufacturer defect (excludes subsequent physical drops or water exposure).",
    supportedBrands: ["Samsung", "Xiaomi / Redmi", "Apple iPhone", "Realme", "Vivo", "Oppo", "OnePlus", "Infinix", "Tecno"],
    faqs: [
      {
        question: "Can you replace only the glass if my touch is still working?",
        answer: "If the inner AMOLED or LCD panel is 100% undamaged without lines or black spots, glass-only refurbishment may be possible depending on model. We inspect your device on the test bench to determine if glass separation is viable."
      },
      {
        question: "Will replacing my screen erase my personal photos and data?",
        answer: "No. Screen replacement is strictly a hardware repair that does not modify your internal storage or operating system. However, we always advise creating a cloud backup as general best practice."
      },
      {
        question: "How long does a screen replacement take in your Itahari workshop?",
        answer: "Most popular models (Samsung Galaxy A/M series, Redmi Note series, iPhone 11-14) are completed within 45 to 90 minutes when components are in stock."
      }
    ],
    ctaText: "Book Screen Inspection in Itahari"
  },
  {
    id: "repair-battery",
    slug: "battery-replacement",
    title: "Mobile Battery Replacement",
    h1: "Phone Battery Replacement in Itahari & Sunsari",
    shortDescription: "Certified high-density replacement batteries for phones experiencing rapid battery drain, sudden shutdowns, or battery swelling.",
    fullDescription: "Lithium-ion smartphone batteries naturally degrade after 500 charge cycles (typically 1.5 to 2 years). If your phone shuts down at 20% or fails to hold a charge throughout the day, our technicians install tested, fresh-cycle batteries with balanced charging circuit controllers.",
    estimatedPriceRange: "रू 1,200 – रू 4,500 (Depending on brand and capacity)",
    turnaroundTime: "30 – 60 Minutes",
    commonSymptoms: [
      "Battery drains from 100% to zero in a few hours without heavy gaming",
      "Phone shuts off unexpectedly even when showing 15% to 30% battery",
      "Battery percentage jumps erratically up and down",
      "Back cover of the phone is lifting or pushing out (CRITICAL: Swollen battery danger)",
      "Phone overheats abnormally while idle or charging slowly"
    ],
    diagnosticProcess: [
      "Digital multimeter battery health and cycle count inspection",
      "Current draw measurement to confirm mother-board short circuits aren't draining power",
      "Safe thermal removal of depleted battery without puncturing casing",
      "Installation of fresh OEM cell and charging cycle calibration test"
    ],
    warrantyDetails: "6 Months warranty against rapid degradation, premature shutdown, or failure to charge.",
    supportedBrands: ["Samsung", "Xiaomi / Redmi / Poco", "Apple iPhone", "Realme", "OnePlus", "Vivo", "Oppo"],
    faqs: [
      {
        question: "Is a swollen battery dangerous to leave inside my phone?",
        answer: "Yes, severely swollen batteries pose a puncture and fire hazard. Stop charging the device immediately and bring it to our workshop for safe, controlled removal."
      },
      {
        question: "Will my phone battery life return to brand-new condition?",
        answer: "Yes! A fresh, high-density cell restores your device to factory battery capacity, allowing full-day reliability without constantly hunting for wall chargers."
      }
    ],
    ctaText: "Check Battery Replacement Cost"
  },
  {
    id: "repair-charging-port",
    slug: "charging-port-repair",
    title: "Charging Port & Mic Repair",
    h1: "Mobile Charging Port Repair & Replacement in Itahari",
    shortDescription: "Fix loose USB-C and Lightning ports, moisture warning errors, slow charging, and earpiece microphone issues.",
    fullDescription: "Lint buildup, mechanical strain from bent cables, or accidental moisture can damage your phone's charging sub-board. We inspect the charging flex assembly under magnification and either deep-clean compressed debris or replace the micro-soldered port.",
    estimatedPriceRange: "रू 700 – रू 2,500",
    turnaroundTime: "30 – 45 Minutes",
    commonSymptoms: [
      "Cable must be held at an awkward angle to initiate charging",
      "Phone says 'Moisture detected in charging port' even after drying",
      "Slow charging notification or fast charging no longer activates",
      "Phone computer connection (USB data transfer) fails to detect",
      "Callers cannot hear your voice clearly (lower microphone is housed on charging board)"
    ],
    diagnosticProcess: [
      "Microscopic port inspection to check for lint, bent pins, or carbon corrosion",
      "Digital USB power-meter analysis measuring charging voltage (V) and ampere (A)",
      "Sub-board soldering inspection or full original sub-board module replacement",
      "Fast charging protocol verification (QC/PD handshake test)"
    ],
    warrantyDetails: "30 to 90 days warranty covering port connectivity and fast charging stability.",
    supportedBrands: ["Samsung", "Xiaomi", "Apple iPhone", "Realme", "Vivo", "Oppo", "Motorola", "Infinix"],
    faqs: [
      {
        question: "Can dirt in my charging port cause it to stop charging?",
        answer: "Very frequently! Pocket lint packs tightly at the base of Type-C and Lightning ports, preventing the cable from clicking in fully. Our technicians can clean it safely in 10 minutes."
      }
    ],
    ctaText: "Get Charging Port Tested"
  },
  {
    id: "repair-water-damage",
    slug: "water-damage",
    title: "Water Damage Diagnostic & Recovery",
    h1: "Water Damage Mobile Repair & Data Rescue in Itahari",
    shortDescription: "Professional ultrasonic chemical motherboard cleaning and microscopic circuit recovery for phones exposed to liquids.",
    fullDescription: "When a phone drops in water, corrosion begins instantly on electrified micro-components. Do not put it in rice or plug it into a charger! Himal Product and Services uses medical-grade isopropyl alcohol and ultrasonic agitation to neutralize mineral deposits and revive compromised motherboards.",
    estimatedPriceRange: "रू 1,500 – रू 5,500 (Diagnostic & component repair subject to inspection)",
    turnaroundTime: "2 Hours – 24 Hours depending on corrosion severity",
    commonSymptoms: [
      "Device fell into bucket, sink, river, or got soaked in monsoon rain",
      "Phone will not power on or stays stuck on boot logo",
      "Fog or water droplets visible behind camera lenses",
      "Overheating rapidly around the processor / battery area",
      "Distorted audio or non-functional touch sensors"
    ],
    diagnosticProcess: [
      "Immediate battery disconnection to halt electrolytic oxidation",
      "Complete motherboard disassembly and ultrasonic chemical bath cleaning",
      "Thermal camera short-circuit inspection to locate damaged capacitors and ICs",
      "Micro-soldering repair of corroded power rails and component replacement",
      "System stability testing and data recovery verification"
    ],
    warrantyDetails: "Diagnostic testing guarantee; component repairs include 30-day warranty on replaced parts.",
    supportedBrands: ["All smartphone brands and tablets"],
    faqs: [
      {
        question: "Does the uncooked rice trick really dry a wet phone?",
        answer: "No. Rice does not draw moisture from inside shielded phone components and leaves behind sticky starch dust. Immediate disconnection and professional ultrasonic cleaning is the proven method to prevent permanent motherboard corrosion."
      }
    ],
    ctaText: "Bring Wet Phone For Emergency Diagnostic"
  },
  {
    id: "repair-software",
    slug: "software-repair",
    title: "Software Repair & Bootloop Recovery",
    h1: "Phone Software Repair, Bootloop Fix & OS Recovery in Itahari",
    shortDescription: "Official stock firmware flashing, system recovery, storage cleaning, and bootloop resolution for Android and iOS devices.",
    fullDescription: "Corrupted system updates, full memory caches, or malware can leave smartphones trapped in boot loops, restarting continuously or freezing on brand logos. We perform authorized firmware restorations and software health tuning.",
    estimatedPriceRange: "रू 500 – रू 1,800",
    turnaroundTime: "30 – 90 Minutes",
    commonSymptoms: [
      "Phone stuck on Mi, Samsung, or Apple logo indefinitely",
      "Continuous unexpected restarting (bootlooping)",
      "Apps crashing instantly upon opening",
      "Extremely slow performance due to corrupted system cache",
      "Forgotten pattern lock with verified ownership credentials"
    ],
    diagnosticProcess: [
      "Hardware vs firmware fault differentiation",
      "Safe recovery mode analysis and cache partition clearing",
      "Official vendor stock ROM flashing using authorized flashing tools",
      "Integrity verification and security patch verification"
    ],
    warrantyDetails: "15-day software stabilization warranty.",
    supportedBrands: ["Samsung", "Xiaomi / Redmi", "Apple iOS", "Realme", "Oppo", "Vivo", "OnePlus"],
    faqs: [
      {
        question: "Can you fix a phone that keeps restarting on the logo?",
        answer: "Yes, this is typically a corrupted system partition or power-key circuit issue. In 90% of cases, official firmware reinstallation successfully revives the device."
      }
    ],
    ctaText: "Fix Software Issues Now"
  },
  {
    id: "repair-iphone",
    slug: "iphone-repair",
    title: "Specialized Apple iPhone Repair",
    h1: "Apple iPhone Repair Specialist in Itahari, Sunsari",
    shortDescription: "Precision screen replacement, battery health restoration, True Tone programming, camera lens repair, and housing restoration.",
    fullDescription: "iPhones require specialized precision tools, proper torque drivers, and serialized calibration to maintain Face ID, True Tone, and battery health reporting. Our technicians follow Apple-standard assembly protocols with zero stripped screws and genuine grade parts.",
    estimatedPriceRange: "रू 2,500 – रू 24,000 (Varies by iPhone model: iPhone 7 to iPhone 15 Pro)",
    turnaroundTime: "45 – 90 Minutes",
    commonSymptoms: [
      "Cracked iPhone front glass or OLED panel failure",
      "Battery health degraded below 80% with 'Service' warning",
      "Face ID not functioning following a drop",
      "Cracked rear camera glass lens causing blurry photos",
      "No sound during voice calls unless switched to speakerphone"
    ],
    diagnosticProcess: [
      "Serialized component inspection to protect Face ID security sensors",
      "True Tone display EEPROM data transfer from old screen to new display",
      "Water-resistant frame gasket resealing",
      "Current draw and charging handshake validation"
    ],
    warrantyDetails: "Up to 90 days replacement warranty on installed iPhone screens and batteries.",
    supportedBrands: ["Apple iPhone 6s through iPhone 15 Pro Max"],
    faqs: [
      {
        question: "Will True Tone and Face ID continue working after screen replacement?",
        answer: "Yes! We transfer the True Tone data code using an EEPROM programmer and preserve your original front sensor flex assembly so Face ID continues working flawlessly."
      }
    ],
    ctaText: "Enquire for iPhone Repair in Itahari"
  },
  {
    id: "repair-android",
    slug: "android-repair",
    title: "Android Smartphone Hardware Repair",
    h1: "Android Phone Repair Center in Itahari, Nepal",
    shortDescription: "Full-service hardware diagnostics and component replacements for Samsung, Xiaomi, Redmi, Realme, Vivo, and OnePlus.",
    fullDescription: "From damaged volume flex cables and fingerprint sensors to replacement back glass and motherboard power IC reballing, Himal Product and Services is Eastern Nepal's comprehensive Android repair bench.",
    estimatedPriceRange: "रू 800 – रू 8,500",
    turnaroundTime: "45 Minutes – 2 Hours",
    commonSymptoms: [
      "Power or volume buttons not clicking or stuck",
      "In-display or side fingerprint scanner not recognizing finger",
      "Cracked camera glass or blurry focus mechanism",
      "Shattered back glass cover",
      "SIM card not detected or weak mobile signal"
    ],
    diagnosticProcess: [
      "Component isolation test using precision bench tools",
      "Replacement of specific faulty flex cable or sensor",
      "Factory fit adhesive sealing to prevent internal dust ingress",
      "Full hardware function test before customer handover"
    ],
    warrantyDetails: "30 to 90 days warranty on replaced hardware components.",
    supportedBrands: ["Samsung", "Xiaomi", "Redmi", "Poco", "Realme", "OnePlus", "Vivo", "Oppo", "Infinix"],
    faqs: [
      {
        question: "Do you keep parts for older Android phones in stock?",
        answer: "We stock common screens, batteries, and charging ports for hundreds of popular models from the past 4-5 years. If a rare part is needed, we source it within 24-48 hours."
      }
    ],
    ctaText: "Check Android Repair Availability"
  }
];

export function getRepairBySlug(slug: string): RepairService | undefined {
  return repairServices.find(r => r.slug === slug);
}
