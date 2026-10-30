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
    distanceFromHub: "10 minutes from Itahari Chowk",
    travelTime: "Same day delivery",
    heroTitle: "Repairs and electronics for Itahari",
    description:
      "We are ten minutes east of Itahari Chowk on the highway. People come from the college area and the wards around the main junction for screen and battery work, phones, and small smart home devices.",
    localLandmarks: [
      "Itahari Main Chowk",
      "Bagar Chowk",
      "Itahari International College area",
      "Gorkha Department Store area"
    ],
    servicesOffered: [
      "Screen and battery replacement, usually 45 to 90 minutes",
      "Charging port and water damage work",
      "Phones with VAT bill and MDMS registration",
      "Pickup and delivery across the Itahari wards"
    ],
    deliveryCoverage:
      "Same day delivery across Itahari wards 1 to 20. Call before 1:00 PM and it goes out the same afternoon.",
    localFaqs: [
      {
        question: "Where exactly is the shop?",
        answer:
          "Sundarharaincha-4, Morang, on the main highway about ten minutes east of Itahari Chowk. There is parking in front."
      },
      {
        question: "Can a screen be replaced the same day?",
        answer:
          "Yes for common Samsung, Redmi and iPhone models. Most take 45 to 90 minutes if the part is in stock."
      }
    ]
  },
  {
    id: "loc-sundarharaincha",
    slug: "sundarharaincha-morang",
    name: "Sundarharaincha",
    district: "Morang",
    isPrimary: true,
    distanceFromHub: "Ward 4, on the highway",
    travelTime: "Walk in",
    heroTitle: "The shop in Sundarharaincha-4",
    description:
      "This is the actual storefront and workshop. Opened in 2022, it has the repair bench at the back and the product shelves at the front. Walk in during shop hours.",
    localLandmarks: [
      "Sundarharaincha-4 commercial area",
      "Gothgaon and Purbanchal University road",
      "Salakpur and Biratchowk"
    ],
    servicesOffered: [
      "Bench diagnostics and board-level repair",
      "Chargers, cables, earbuds and power banks",
      "Smart plug and bulb demos at the counter",
      "Repairs explained by the person doing the work"
    ],
    deliveryCoverage:
      "Free delivery within Sundarharaincha-4 and the neighbouring wards. Orders over रू 2,000 are free.",
    localFaqs: [
      {
        question: "Are you open on Saturday?",
        answer:
          "Yes, 10:00 to 18:00. Sunday to Friday we open at 9:00 and close at 20:00."
      }
    ]
  },
  {
    id: "loc-dharan",
    slug: "dharan",
    name: "Dharan",
    district: "Sunsari",
    isPrimary: false,
    distanceFromHub: "18 km north of Itahari",
    travelTime: "Next day delivery",
    heroTitle: "Repairs and delivery for Dharan",
    description:
      "Dharan is up the Koshi Highway from Itahari. We deliver there next day, and you can send a phone in for board work through the local transport counter if you do not want to drive down.",
    localLandmarks: ["Bhanu Chowk", "BPKIHS campus", "Purwanchal Campus", "Chhatachowk and Putali Line"],
    servicesOffered: [
      "Courier intake for screen and board repairs",
      "Power banks for students and hospital staff",
      "Wi-Fi cameras for homes and small clinics",
      "Delivery to Bhanu Chowk and the residential wards"
    ],
    deliveryCoverage: "Next day parcel delivery to all Dharan wards. Orders before 1:00 PM go out the same afternoon.",
    localFaqs: [
      {
        question: "How do I send a phone from Dharan?",
        answer:
          "Message the shop on WhatsApp. You can drive down, about 25 minutes, or send it through a local transport counter and we will confirm when it arrives."
      }
    ]
  },
  {
    id: "loc-biratnagar",
    slug: "biratnagar",
    name: "Biratnagar",
    district: "Morang",
    isPrimary: false,
    distanceFromHub: "22 km south of Itahari",
    travelTime: "4 to 6 hours",
    heroTitle: "Repairs and electronics for Biratnagar",
    description:
      "Biratnagar is the commercial centre of Koshi. We deliver there twice a day and take in iPhone and flagship Android work that smaller counters send on to us.",
    localLandmarks: ["Traffic Chowk", "Hospital Chowk", "Tinkuna and Rani", "Airport Road"],
    servicesOffered: [
      "16A smart plugs for pumps and heavy appliances",
      "Bulk cables and accessories for offices",
      "iPhone and flagship display and battery work",
      "Courier runs along the Biratnagar to Itahari highway"
    ],
    deliveryCoverage: "Morning and afternoon courier runs into Biratnagar. Confirmed before 1:00 PM means delivery the same day.",
    localFaqs: [
      {
        question: "Do you deliver to Biratnagar?",
        answer:
          "Yes. Orders confirmed before 1:00 PM reach Biratnagar within 4 to 6 hours, or first thing the next morning."
      }
    ]
  }
];

export function getLocationBySlug(slug: string): ServiceLocation | undefined {
  return serviceLocations.find(l => l.slug === slug);
}
