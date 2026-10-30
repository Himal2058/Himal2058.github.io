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
    h1: "Phone Screen Replacement in Itahari",
    shortDescription: "Original and good aftermarket display replacements for shattered glass, dead touch, vertical lines, and blank screens.",
    fullDescription:
      "A cracked screen does not mean the phone is lost. We replace the front glass or the whole display, depending on what is broken. Most common Samsung, Redmi and iPhone screens are done the same day if the part is in stock.",
    estimatedPriceRange: "रू 1,800 to 14,500",
    turnaroundTime: "45 to 90 minutes",
    commonSymptoms: [
      "Cracked outer glass with the picture still fine",
      "Black screen or ink bleeding spots",
      "Green or white vertical lines after a drop",
      "Touch that jumps around or does not respond in places",
      "Flickering backlight or a dim display"
    ],
    diagnosticProcess: [
      "Check the frame for bends and the housing for damage",
      "Test touch and dead pixels before fitting anything",
      "Fit the new panel and seal the frame",
      "Test touch, brightness and sensors before you collect it"
    ],
    warrantyDetails: "Up to 90 days on touch faults and panel defects. Drops and water spills after the repair are not covered.",
    supportedBrands: ["Samsung", "Xiaomi / Redmi", "Apple iPhone", "Realme", "Vivo", "Oppo", "OnePlus", "Infinix", "Tecno"],
    faqs: [
      {
        question: "Can you replace only the glass if my touch still works?",
        answer:
          "If the panel underneath has no lines or black spots, glass-only replacement may be possible. We check on the bench to see if it will work for your model."
      },
      {
        question: "Will replacing my screen delete my photos and data?",
        answer:
          "No. Screen replacement is hardware work and does not touch your storage. We still recommend a backup before you leave the phone with us."
      },
      {
        question: "How long does a screen replacement take?",
        answer:
          "Most popular models take 45 to 90 minutes if the part is in stock. If we have to order it, we will tell you the date before you leave the phone behind."
      }
    ],
    ctaText: "Book a screen inspection"
  },
  {
    id: "repair-battery",
    slug: "battery-replacement",
    title: "Mobile Battery Replacement",
    h1: "Phone Battery Replacement in Itahari",
    shortDescription: "Fresh replacement batteries for phones that drain fast, shut down early, or have a swollen back cover.",
    fullDescription:
      "Phone batteries wear out after a couple of years. If your phone dies at 20 percent or the back cover is lifting, stop charging it and bring it in. We fit a tested cell and check the charging circuit.",
    estimatedPriceRange: "रू 1,200 to 4,500",
    turnaroundTime: "30 to 60 minutes",
    commonSymptoms: [
      "Battery drops from 100 percent to zero in a few hours",
      "Phone shuts off while still showing 15 to 30 percent",
      "Battery percentage jumps up and down",
      "Back cover lifting or pushing out",
      "Phone overheats while idle or charging slowly"
    ],
    diagnosticProcess: [
      "Measure battery health and cycle count with a multimeter",
      "Check current draw for motherboard shorts",
      "Remove the old cell without puncturing the casing",
      "Fit a fresh cell and run a charging cycle test"
    ],
    warrantyDetails: "6 months against rapid degradation, premature shutdown, or failure to charge.",
    supportedBrands: ["Samsung", "Xiaomi / Redmi / Poco", "Apple iPhone", "Realme", "OnePlus", "Vivo", "Oppo"],
    faqs: [
      {
        question: "Is a swollen battery dangerous to leave inside my phone?",
        answer:
          "Yes. A swollen cell can puncture or catch fire. Stop charging it and bring it in so we can remove it safely."
      },
      {
        question: "Will my battery life be like new again?",
        answer:
          "A fresh cell brings back full-day reliability. It will not perform better than when the phone was brand new."
      }
    ],
    ctaText: "Check battery replacement cost"
  },
  {
    id: "repair-charging-port",
    slug: "charging-port-repair",
    title: "Charging Port & Mic Repair",
    h1: "Charging Port Repair in Itahari",
    shortDescription: "Fix loose USB-C and Lightning ports, moisture warnings, slow charging, and muffled call microphones.",
    fullDescription:
      "Pocket lint, bent cables, or moisture can damage the charging port. We inspect the port under magnification, clean out packed debris, or replace the micro-soldered port.",
    estimatedPriceRange: "रू 700 to 2,500",
    turnaroundTime: "30 to 45 minutes",
    commonSymptoms: [
      "You have to hold the cable at an angle to start charging",
      "Phone says moisture detected even after drying",
      "Slow charging or fast charging no longer turns on",
      "Computer does not detect the phone over USB",
      "Callers cannot hear you clearly"
    ],
    diagnosticProcess: [
      "Inspect the port under magnification for lint, bent pins, or corrosion",
      "Measure charging voltage and current with a USB power meter",
      "Clean the port or replace the sub-board module",
      "Verify fast charging handshake (QC / PD)"
    ],
    warrantyDetails: "30 to 90 days on port connectivity and fast charging stability.",
    supportedBrands: ["Samsung", "Xiaomi", "Apple iPhone", "Realme", "Vivo", "Oppo", "Motorola", "Infinix"],
    faqs: [
      {
        question: "Can dirt in my charging port stop it from charging?",
        answer:
          "Very often. Pocket lint packs at the base of the port and stops the cable clicking in. We can clean it safely in about ten minutes."
      }
    ],
    ctaText: "Get the charging port tested"
  },
  {
    id: "repair-water-damage",
    slug: "water-damage",
    title: "Water Damage Diagnostic & Recovery",
    h1: "Water Damage Phone Repair in Itahari",
    shortDescription: "Ultrasonic motherboard cleaning and circuit recovery for phones soaked in liquid.",
    fullDescription:
      "When a phone gets wet, corrosion starts right away on live components. Do not put it in rice and do not plug it in. We open it, disconnect the battery, and clean the board with isopropyl alcohol in an ultrasonic bath.",
    estimatedPriceRange: "रू 1,500 to 5,500",
    turnaroundTime: "2 to 24 hours",
    commonSymptoms: [
      "Phone fell in a bucket, sink, river, or monsoon rain",
      "Phone will not turn on or sticks on the boot logo",
      "Fog or droplets behind the camera lenses",
      "Overheating near the processor or battery",
      "Distorted audio or dead touch"
    ],
    diagnosticProcess: [
      "Disconnect the battery immediately to stop oxidation",
      "Take the motherboard apart and clean it in an ultrasonic bath",
      "Check with a thermal camera for shorted capacitors and ICs",
      "Micro-solder corroded power rails and replace damaged parts",
      "Test stability and verify data recovery"
    ],
    warrantyDetails: "Diagnostic testing guarantee; replaced parts carry a 30-day warranty.",
    supportedBrands: ["All smartphone brands and tablets"],
    faqs: [
      {
        question: "Does the rice trick dry a wet phone?",
        answer:
          "No. Rice does not draw moisture from inside shielded components and leaves sticky starch dust behind. Disconnect the battery and get professional cleaning as soon as you can."
      }
    ],
    ctaText: "Bring a wet phone for emergency check"
  },
  {
    id: "repair-software",
    slug: "software-repair",
    title: "Software Repair & Bootloop Recovery",
    h1: "Phone Software Repair and Bootloop Fix",
    shortDescription: "Stock firmware flashing, system recovery, and bootloop fixes for Android and iOS phones.",
    fullDescription:
      "A bad update, full memory, or malware can leave a phone stuck in a boot loop, restarting endlessly or freezing on a brand logo. We reinstall the official firmware for your model and clear the system cache.",
    estimatedPriceRange: "रू 500 to 1,800",
    turnaroundTime: "30 to 90 minutes",
    commonSymptoms: [
      "Phone stuck on the Mi, Samsung, or Apple logo",
      "Continuous unexpected restarting",
      "Apps crash as soon as they open",
      "Very slow performance from corrupted system cache",
      "Forgotten pattern lock, with proof of ownership"
    ],
    diagnosticProcess: [
      "Tell a hardware fault from a software fault",
      "Boot into recovery mode and clear the cache partition",
      "Flash the official vendor stock ROM",
      "Verify integrity and security patches"
    ],
    warrantyDetails: "15-day software stabilization warranty.",
    supportedBrands: ["Samsung", "Xiaomi / Redmi", "Apple iOS", "Realme", "Oppo", "Vivo", "OnePlus"],
    faqs: [
      {
        question: "Can you fix a phone that keeps restarting on the logo?",
        answer:
          "Yes. This is usually a corrupted system partition or a power-button circuit issue. Reinstalling the official firmware revives most phones."
      }
    ],
    ctaText: "Fix software issues"
  },
  {
    id: "repair-iphone",
    slug: "iphone-repair",
    title: "Apple iPhone Repair",
    h1: "iPhone Repair in Itahari",
    shortDescription: "Screen replacement, battery replacement, True Tone and camera lens repair for iPhone 7 to iPhone 15 Pro Max.",
    fullDescription:
      "iPhones need proper tools and care to keep Face ID, True Tone and battery health reporting working. We follow careful assembly rules, avoid stripped screws, and use good-grade parts.",
    estimatedPriceRange: "रू 2,500 to 24,000",
    turnaroundTime: "45 to 90 minutes",
    commonSymptoms: [
      "Cracked front glass or OLED panel failure",
      "Battery health below 80 percent with a Service warning",
      "Face ID not working after a drop",
      "Cracked rear camera lens causing blurry photos",
      "No sound in calls unless on speakerphone"
    ],
    diagnosticProcess: [
      "Check serialized parts to protect Face ID sensors",
      "Transfer True Tone data from the old screen to the new one",
      "Reseal the water-resistant frame gasket",
      "Validate charging current and handshake"
    ],
    warrantyDetails: "Up to 90 days on installed iPhone screens and batteries.",
    supportedBrands: ["Apple iPhone 6s through iPhone 15 Pro Max"],
    faqs: [
      {
        question: "Will True Tone and Face ID keep working after a screen replacement?",
        answer:
          "We transfer the True Tone code with an EEPROM programmer and keep your original front sensor flex, so Face ID keeps working."
      }
    ],
    ctaText: "Enquire about iPhone repair"
  },
  {
    id: "repair-android",
    slug: "android-repair",
    title: "Android Smartphone Hardware Repair",
    h1: "Android Phone Repair in Itahari",
    shortDescription: "Hardware diagnostics and part replacement for Samsung, Xiaomi, Redmi, Realme, Vivo, and OnePlus.",
    fullDescription:
      "We fix stuck volume and power buttons, fingerprint sensors, cracked camera glass, shattered back covers, and SIM or signal problems. If we do not stock a rare part, we source it within a day or two.",
    estimatedPriceRange: "रू 800 to 8,500",
    turnaroundTime: "45 minutes to 2 hours",
    commonSymptoms: [
      "Power or volume buttons stuck or not clicking",
      "Fingerprint scanner not recognizing your finger",
      "Cracked camera glass or blurry focus",
      "Shattered back glass cover",
      "SIM not detected or weak mobile signal"
    ],
    diagnosticProcess: [
      "Isolate the faulty component with bench tools",
      "Replace the specific flex cable or sensor",
      "Seal with factory-fit adhesive to keep dust out",
      "Run a full hardware test before handover"
    ],
    warrantyDetails: "30 to 90 days on replaced hardware components.",
    supportedBrands: ["Samsung", "Xiaomi", "Redmi", "Poco", "Realme", "OnePlus", "Vivo", "Oppo", "Infinix"],
    faqs: [
      {
        question: "Do you keep parts for older Android phones?",
        answer:
          "We stock common screens, batteries and charging ports for popular models from the last four to five years. Rare parts arrive within 24 to 48 hours."
      }
    ],
    ctaText: "Check Android repair availability"
  }
];

export function getRepairBySlug(slug: string): RepairService | undefined {
  return repairServices.find(r => r.slug === slug);
}
