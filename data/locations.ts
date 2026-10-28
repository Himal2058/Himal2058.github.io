export interface ServiceLocation {
  id: string;
  slug: string;
  name: string;
  district: string;
  isPrimary: boolean;
  distanceFromHub: string;
  travelTime: string;
  heroTitle: string;
  description: string;
  localLandmarks: string[];
  servicesOffered: string[];
  deliveryCoverage: string;
  localFaqs: { question: string; answer: string }[];
}

export const serviceLocations: ServiceLocation[] = [
  {
    id: "loc-itahari",
    slug: "itahari",
    name: "Itahari",
    district: "Sunsari",
    isPrimary: true,
    distanceFromHub: "Primary Service Hub (0 km)",
    travelTime: "5 - 15 minutes local transit",
    heroTitle: "Mobile Repair & Genuine Electronics in Itahari, Sunsari",
    description: "Itahari is Eastern Nepal's vital crossroads connecting Sunsari, Morang, and Jhapa. Himal Product and Services provides Itahari residents, college students, and business owners with fast mobile repairs (screen, battery, charging ports), official smartphones, smart home automation, and accessories.",
    localLandmarks: [
      "Itahari Main Chowk (East-West & North-South highway intersection)",
      "Bagar Chowk & Traffic Chowk",
      "Koshi St. James & Itahari International College area",
      "Gorkha Department Store vicinity"
    ],
    servicesOffered: [
      "Express 45-minute mobile screen and battery replacement",
      "Water damage motherboard diagnostic and ultrasonic cleaning",
      "Official MDMS-registered smartphones with brand warranties",
      "Same-day pickup and courier drop service across Itahari municipal wards"
    ],
    deliveryCoverage: "Same-day direct delivery and doorstep repair pickup/drop available across Itahari Wards 1 to 20.",
    localFaqs: [
      {
        question: "Where can I find Himal Product and Services in the Itahari area?",
        answer: "We are situated in the Sundarharaincha-4 corridor directly adjacent to Itahari along the main highway, easily accessible in 10 minutes from Itahari Chowk with convenient parking."
      },
      {
        question: "Can I get my phone screen repaired on the same day in Itahari?",
        answer: "Yes! Most common screen and battery replacements for Samsung, Redmi, and iPhone are completed within 45 to 90 minutes."
      }
    ]
  },
  {
    id: "loc-sundarharaincha",
    slug: "sundarharaincha-morang",
    name: "Sundarharaincha",
    district: "Morang",
    isPrimary: true,
    distanceFromHub: "Registered Storefront & Workshop Location (Ward 4)",
    travelTime: "Walk-in local access",
    heroTitle: "Electronics Store & Repair Workshop in Sundarharaincha-4, Morang",
    description: "Sundarharaincha is our registered physical workshop and storefront home. Established in 2022, we take pride in serving our local community with genuine electronics, transparent repair bench diagnostics, and friendly service.",
    localLandmarks: [
      "Sundarharaincha-4 Central Commercial Area",
      "Gothgaon / Purbanchal University campus corridor",
      "Salakpur & Biratchowk commercial market"
    ],
    servicesOffered: [
      "Full hardware diagnostic bench and micro-soldering repairs",
      "Genuine accessories: GaN chargers, braided cables, earbuds, and power banks",
      "Home automation advice and smart plug/bulb demonstration",
      "Local community customer support with direct technician interaction"
    ],
    deliveryCoverage: "Free immediate pickup and delivery within Sundarharaincha-4 and neighboring wards.",
    localFaqs: [
      {
        question: "Are you open on Saturdays for repairs in Sundarharaincha?",
        answer: "Yes, we are open Saturday from 10:00 AM to 6:00 PM for repair inspections, emergency diagnostic drops, and accessory purchases."
      }
    ]
  },
  {
    id: "loc-dharan",
    slug: "dharan",
    name: "Dharan",
    district: "Sunsari",
    isPrimary: false,
    distanceFromHub: "18 km North of Itahari Hub",
    travelTime: "25 - 35 minutes via Koshi Highway",
    heroTitle: "Mobile Repair Support & Electronics Delivery for Dharan, Sunsari",
    description: "Located just up the scenic Koshi Highway from Itahari, Dharan is home to BP Koirala Institute of Health Sciences (BPKIHS), engineering campuses, and active tech enthusiasts. We serve Dharan with swift next-day courier delivery, repair coordination, and premium gadget supplies.",
    localLandmarks: [
      "Bhanu Chowk Dharan",
      "BPKIHS Medical Campus",
      "Purwanchal Campus (IOE Dharan)",
      "Chhatachowk and Putali Line"
    ],
    servicesOffered: [
      "Drop-off courier repair intake for complex board and screen repairs",
      "High-power laptop and phone power banks for college students and doctors",
      "Smart security Wi-Fi cameras for homes and local clinics",
      "Express parcel shipping to Bhanu Chowk and residential wards"
    ],
    deliveryCoverage: "Next-day fast parcel delivery to all Dharan sub-metropolitan locations.",
    localFaqs: [
      {
        question: "How can I send my phone from Dharan for repair?",
        answer: "You can message us on WhatsApp (+977 9807391472) to book a repair intake. You can either visit our Itahari corridor workshop (a 25-minute drive) or send it safely via local transport counter."
      }
    ]
  },
  {
    id: "loc-biratnagar",
    slug: "biratnagar",
    name: "Biratnagar",
    district: "Morang",
    isPrimary: false,
    distanceFromHub: "22 km South of Itahari Hub",
    travelTime: "30 - 40 minutes via 6-lane Koshi Highway",
    heroTitle: "Electronics Supply & Specialist Mobile Repairs for Biratnagar",
    description: "Biratnagar is Koshi Province's industrial and commercial capital. Himal Product and Services provides Biratnagar businesses, offices, and residents with certified electronics, smart home automation products, and specialized motherboard repair backup.",
    localLandmarks: [
      "Traffic Chowk & Main Road Biratnagar",
      "Hospital Chowk & Koshi Hospital area",
      "Tinkuna & Rani corridor",
      "Biratnagar Airport Road"
    ],
    servicesOffered: [
      "Commercial smart plug automation for high-draw appliances and pumps",
      "Bulk accessory and cable supplies for corporate offices and institutions",
      "Specialized iPhone and flagship Android display and battery servicing",
      "Express local courier dispatch along the 6-lane Biratnagar-Itahari highway"
    ],
    deliveryCoverage: "Daily morning and afternoon courier runs directly to Biratnagar city centers.",
    localFaqs: [
      {
        question: "Do you ship electronics orders to Biratnagar?",
        answer: "Yes! Orders confirmed before 1:00 PM are delivered to Biratnagar within 4 to 6 hours or early next morning."
      }
    ]
  }
];

export function getLocationBySlug(slug: string): ServiceLocation | undefined {
  return serviceLocations.find(l => l.slug === slug);
}
