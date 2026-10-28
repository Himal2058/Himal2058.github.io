export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  establishedYear: number;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  address: {
    street: string;
    city: string;
    district: string;
    province: string;
    country: string;
    postalCode: string;
    landmark: string;
    serviceHub: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  googleMapsUrl: string;
  openingHours: {
    days: string;
    hours: string;
    schema: string[];
  };
  social: {
    facebook: string;
  };
  policies: {
    productWarranty: string;
    repairWarranty: string;
    delivery: string;
  };
  siteUrl: string;
}

export const siteConfig: SiteConfig = {
  name: "Himal Product and Services",
  shortName: "Himal Electronics",
  tagline: "Eastern Nepal's Trusted Hub for Certified Mobile Repairs & Genuine Smart Tech",
  establishedYear: 2022,
  phone: "+977 9807391472",
  phoneRaw: "+9779807391472",
  whatsapp: "+977 9807391472",
  whatsappRaw: "9779807391472",
  email: "himalhb2058@gmail.com",
  address: {
    street: "Sundarharaincha-4",
    city: "Sundarharaincha / Itahari Corridor",
    district: "Morang & Sunsari",
    province: "Koshi Province",
    country: "Nepal",
    postalCode: "56600",
    landmark: "Direct corridor access between Itahari Chowk & Biratnagar Road",
    serviceHub: "Primary service coverage across Itahari, Dharan, Biratnagar, and all Sunsari-Morang towns"
  },
  geo: {
    latitude: 26.687414,
    longitude: 87.2781325
  },
  googleMapsUrl: "https://www.google.com/maps/place/Himal+product+and+service/data=!4m7!3m6!1s0x39ef6d33be82599b:0xb67ac2eefb668b5f!8m2!3d26.687414!4d87.2781325!16s%2Fg%2F11nvxkchr9!19sChIJm1mCvjNt7zkRX4tm--7CerY?authuser=0&hl=en&g_ep=EgoyMDI2MTAyMC4wIJJjKgBIAVAD&rclk=1",
  openingHours: {
    days: "Sunday to Friday (Saturday open for emergency repairs & inquiries)",
    hours: "9:00 AM – 8:00 PM NPT",
    schema: [
      "Su-Fr 09:00-20:00",
      "Sa 10:00-18:00"
    ]
  },
  social: {
    facebook: "https://www.facebook.com/people/Himal-Products-Services/61559803791585/"
  },
  policies: {
    productWarranty: "According to product category, varying from 6 months up to 2 years official warranty.",
    repairWarranty: "Repair warranty depends on service and replacement component type. Includes pre-handover stress testing and post-repair check guarantee.",
    delivery: "Express local pickup & drop within Itahari, Dharan, Biratnagar & Sundarharaincha; reliable courier delivery service all over Nepal."
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://himal2058.github.io"
};

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function siteAsset(path: string): string {
  return `${publicBasePath}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${siteConfig.whatsappRaw}?text=${encoded}`;
}
