export interface KeywordMapping {
  url: string;
  pageType: 'Homepage' | 'Money Page' | 'Service Page' | 'Subcategory' | 'Product' | 'Blog Hub' | 'Blog Guide' | 'Trust Page' | 'Local Page';
  primaryKeyword: string;
  secondaryKeywords: string;
  searchIntent: 'Commercial' | 'Local Service' | 'Transactional' | 'Informational' | 'Commercial Investigation' | 'Navigational' | 'Problem-Solving';
  topicCluster: string;
  priority: 'Critical' | 'High' | 'Medium';
  recommendedInternalLinks: string;
  primaryCTA: string;
  schemaType: string;
}

export const keywordMappings: KeywordMapping[] = [
  {
    url: "/",
    pageType: "Homepage",
    primaryKeyword: "electronics shop Itahari",
    secondaryKeywords: "mobile repair Itahari, gadget store Nepal, Himal Product and Services, smart home Nepal",
    searchIntent: "Commercial",
    topicCluster: "Core Entity",
    priority: "Critical",
    recommendedInternalLinks: "/mobile-repair, /mobile-phones, /gadgets-accessories, /smart-home, /power-banks, /store-location",
    primaryCTA: "Book a Repair / Shop Online",
    schemaType: "Organization, ElectronicsStore, WebSite"
  },
  {
    url: "/mobile-repair",
    pageType: "Money Page",
    primaryKeyword: "mobile repair Itahari",
    secondaryKeywords: "mobile phone repair shop Itahari, phone screen replacement, mobile battery replacement, phone technician Sunsari",
    searchIntent: "Local Service",
    topicCluster: "Cluster 1: Mobile Repair",
    priority: "Critical",
    recommendedInternalLinks: "/mobile-repair/screen-replacement, /mobile-repair/battery-replacement, /repair-price, /contact",
    primaryCTA: "Book Repair Inspection via WhatsApp",
    schemaType: "Service, LocalBusiness, FAQPage"
  },
  {
    url: "/mobile-repair/screen-replacement",
    pageType: "Service Page",
    primaryKeyword: "phone screen replacement Itahari",
    secondaryKeywords: "cracked display repair, OLED screen price Nepal, touch glass fix, Samsung screen replacement",
    searchIntent: "Commercial Investigation",
    topicCluster: "Cluster 1: Mobile Repair",
    priority: "High",
    recommendedInternalLinks: "/mobile-repair, /repair-price, /blog/phone-screen-damage-repair-guide",
    primaryCTA: "Get Screen Quote on WhatsApp",
    schemaType: "Service, BreadcrumbList"
  },
  {
    url: "/mobile-repair/battery-replacement",
    pageType: "Service Page",
    primaryKeyword: "mobile battery replacement Itahari",
    secondaryKeywords: "original phone battery price Nepal, quick battery swap Sunsari, swollen battery fix",
    searchIntent: "Commercial Investigation",
    topicCluster: "Cluster 1: Mobile Repair",
    priority: "High",
    recommendedInternalLinks: "/mobile-repair, /repair-price, /blog/phone-battery-drains-quickly-causes-fixes",
    primaryCTA: "Check Battery Availability",
    schemaType: "Service, BreadcrumbList"
  },
  {
    url: "/mobile-repair/charging-port-repair",
    pageType: "Service Page",
    primaryKeyword: "charging port repair Itahari",
    secondaryKeywords: "loose type-c port fix, mic not working, moisture detected fix, phone charging slow",
    searchIntent: "Commercial Investigation",
    topicCluster: "Cluster 1: Mobile Repair",
    priority: "Medium",
    recommendedInternalLinks: "/mobile-repair, /blog/phone-stops-charging-reasons-fixes",
    primaryCTA: "Book Free Port Diagnostic",
    schemaType: "Service, BreadcrumbList"
  },
  {
    url: "/mobile-repair/water-damage",
    pageType: "Service Page",
    primaryKeyword: "mobile water damage repair Itahari",
    secondaryKeywords: "phone dropped in water fix, ultrasonic motherboard cleaning, emergency wet phone recovery",
    searchIntent: "Problem-Solving",
    topicCluster: "Cluster 1: Mobile Repair",
    priority: "High",
    recommendedInternalLinks: "/mobile-repair, /contact",
    primaryCTA: "Emergency Drop-Off Directions",
    schemaType: "Service, BreadcrumbList"
  },
  {
    url: "/mobile-repair/iphone-repair",
    pageType: "Service Page",
    primaryKeyword: "iPhone repair Itahari",
    secondaryKeywords: "Apple screen repair Nepal, iPhone battery replacement Sunsari, True Tone programmer",
    searchIntent: "Commercial Investigation",
    topicCluster: "Cluster 1: Mobile Repair",
    priority: "High",
    recommendedInternalLinks: "/mobile-repair, /mobile-phones/iphone",
    primaryCTA: "Book iPhone Diagnostic",
    schemaType: "Service, BreadcrumbList"
  },
  {
    url: "/mobile-repair/android-repair",
    pageType: "Service Page",
    primaryKeyword: "Android phone repair Itahari",
    secondaryKeywords: "Samsung Xiaomi Realme repair shop, motherboard repair, back glass replacement",
    searchIntent: "Commercial Investigation",
    topicCluster: "Cluster 1: Mobile Repair",
    priority: "High",
    recommendedInternalLinks: "/mobile-repair, /mobile-phones/android",
    primaryCTA: "Enquire About Android Parts",
    schemaType: "Service, BreadcrumbList"
  },
  {
    url: "/repair-price",
    pageType: "Service Page",
    primaryKeyword: "mobile repair cost Itahari Nepal",
    secondaryKeywords: "smartphone repair price list, screen cost estimation Nepal, battery replacement charges",
    searchIntent: "Commercial Investigation",
    topicCluster: "Cluster 1: Mobile Repair",
    priority: "High",
    recommendedInternalLinks: "/mobile-repair, /contact, /warranty",
    primaryCTA: "Calculate Estimated Repair Cost",
    schemaType: "Service, FAQPage"
  },
  {
    url: "/mobile-phones",
    pageType: "Money Page",
    primaryKeyword: "mobile phones in Itahari",
    secondaryKeywords: "smartphones in Itahari, buy mobile phone Nepal, budget smartphones Nepal, Samsung phone price Itahari",
    searchIntent: "Commercial",
    topicCluster: "Cluster 2: Mobile Phones",
    priority: "Critical",
    recommendedInternalLinks: "/mobile-phones/android, /mobile-phones/iphone, /gadgets-accessories/chargers-cables, /blog/smartphone-ram-storage-guide",
    primaryCTA: "View Smartphone Models & Inquire",
    schemaType: "CollectionPage, BreadcrumbList"
  },
  {
    url: "/mobile-phones/android",
    pageType: "Subcategory",
    primaryKeyword: "Android smartphones Nepal",
    secondaryKeywords: "Redmi note 13 Itahari, Samsung galaxy A series price Nepal, 5G phone under 30000",
    searchIntent: "Transactional",
    topicCluster: "Cluster 2: Mobile Phones",
    priority: "High",
    recommendedInternalLinks: "/mobile-phones, /products/redmi-note-13-8gb-256gb, /products/samsung-galaxy-a15-5g",
    primaryCTA: "Order via WhatsApp",
    schemaType: "CollectionPage, BreadcrumbList"
  },
  {
    url: "/mobile-phones/iphone",
    pageType: "Subcategory",
    primaryKeyword: "buy iPhone Itahari",
    secondaryKeywords: "official MDMS iPhone Nepal, iPhone 15 price Itahari, genuine Apple warranty Nepal",
    searchIntent: "Transactional",
    topicCluster: "Cluster 2: Mobile Phones",
    priority: "High",
    recommendedInternalLinks: "/mobile-phones, /products/apple-iphone-15-128gb",
    primaryCTA: "Check Official MDMS iPhone Stock",
    schemaType: "CollectionPage, BreadcrumbList"
  },
  {
    url: "/gadgets-accessories",
    pageType: "Money Page",
    primaryKeyword: "electronic gadgets Itahari",
    secondaryKeywords: "mobile accessories shop Itahari, earbuds price Nepal, original phone chargers, smartwatches",
    searchIntent: "Commercial",
    topicCluster: "Cluster 3: Gadgets & Accessories",
    priority: "Critical",
    recommendedInternalLinks: "/gadgets-accessories/chargers-cables, /gadgets-accessories/earbuds-headphones, /gadgets-accessories/smartwatches, /gadgets-accessories/bluetooth-speakers",
    primaryCTA: "Browse All Accessories",
    schemaType: "CollectionPage, BreadcrumbList"
  },
  {
    url: "/gadgets-accessories/chargers-cables",
    pageType: "Subcategory",
    primaryKeyword: "fast charger and cables Nepal",
    secondaryKeywords: "65W GaN charger Itahari, 100W braided type c cable, fast charging adapter",
    searchIntent: "Transactional",
    topicCluster: "Cluster 3: Gadgets & Accessories",
    priority: "High",
    recommendedInternalLinks: "/gadgets-accessories, /blog/usbc-cable-types-fast-charging-compatibility",
    primaryCTA: "Shop Chargers & Cables",
    schemaType: "CollectionPage, BreadcrumbList"
  },
  {
    url: "/gadgets-accessories/earbuds-headphones",
    pageType: "Subcategory",
    primaryKeyword: "earbuds price in Nepal",
    secondaryKeywords: "wireless bluetooth earbuds Itahari, ANC earbuds under 4000, Ultima earbuds",
    searchIntent: "Transactional",
    topicCluster: "Cluster 3: Gadgets & Accessories",
    priority: "High",
    recommendedInternalLinks: "/gadgets-accessories, /blog/how-to-choose-earbuds-everyday-use",
    primaryCTA: "Shop Wireless Earbuds",
    schemaType: "CollectionPage, BreadcrumbList"
  },
  {
    url: "/gadgets-accessories/smartwatches",
    pageType: "Subcategory",
    primaryKeyword: "smartwatch price in Nepal",
    secondaryKeywords: "bluetooth calling smartwatch Itahari, AMOLED smartwatch price, fitness tracker",
    searchIntent: "Transactional",
    topicCluster: "Cluster 3: Gadgets & Accessories",
    priority: "High",
    recommendedInternalLinks: "/gadgets-accessories, /products/bluetooth-calling-amoled-smartwatch",
    primaryCTA: "Order Calling Smartwatch",
    schemaType: "CollectionPage, BreadcrumbList"
  },
  {
    url: "/gadgets-accessories/bluetooth-speakers",
    pageType: "Subcategory",
    primaryKeyword: "bluetooth speaker Itahari",
    secondaryKeywords: "waterproof portable speaker Nepal, 16W bluetooth speaker, bass outdoor speaker",
    searchIntent: "Transactional",
    topicCluster: "Cluster 3: Gadgets & Accessories",
    priority: "Medium",
    recommendedInternalLinks: "/gadgets-accessories, /products/outdoor-16w-waterproof-bluetooth-speaker",
    primaryCTA: "Shop Portable Speakers",
    schemaType: "CollectionPage, BreadcrumbList"
  },
  {
    url: "/smart-home",
    pageType: "Money Page",
    primaryKeyword: "smart home devices Nepal",
    secondaryKeywords: "home automation Itahari, wifi smart bulb price, smart security camera, smart plug geyser",
    searchIntent: "Commercial",
    topicCluster: "Cluster 4: Smart Home",
    priority: "Critical",
    recommendedInternalLinks: "/smart-home/smart-bulbs, /smart-home/smart-plugs-switches, /smart-home/smart-security, /blog/smart-home-guide-beginners-nepal",
    primaryCTA: "Explore Home Automation Products",
    schemaType: "CollectionPage, BreadcrumbList"
  },
  {
    url: "/smart-home/smart-bulbs",
    pageType: "Subcategory",
    primaryKeyword: "smart bulb price Nepal",
    secondaryKeywords: "RGB wifi bulb Itahari, Tuya smart bulb 9W, alexa google home light",
    searchIntent: "Transactional",
    topicCluster: "Cluster 4: Smart Home",
    priority: "High",
    recommendedInternalLinks: "/smart-home, /products/smart-wifi-rgb-led-bulb-9w",
    primaryCTA: "Buy Smart RGB Bulb",
    schemaType: "CollectionPage, BreadcrumbList"
  },
  {
    url: "/smart-home/smart-plugs-switches",
    pageType: "Subcategory",
    primaryKeyword: "smart plug switch Nepal",
    secondaryKeywords: "16A smart plug for geyser, wifi timer plug Itahari, energy monitor smart switch",
    searchIntent: "Transactional",
    topicCluster: "Cluster 4: Smart Home",
    priority: "High",
    recommendedInternalLinks: "/smart-home, /products/16a-smart-wifi-plug-energy-monitor",
    primaryCTA: "Order 16A Geyser Smart Plug",
    schemaType: "CollectionPage, BreadcrumbList"
  },
  {
    url: "/smart-home/smart-security",
    pageType: "Subcategory",
    primaryKeyword: "smart security camera Itahari",
    secondaryKeywords: "360 wifi camera Nepal, 2K home security camera, night vision cctv camera",
    searchIntent: "Transactional",
    topicCluster: "Cluster 4: Smart Home",
    priority: "High",
    recommendedInternalLinks: "/smart-home, /products/360-2k-smart-security-camera",
    primaryCTA: "Shop 360 Security Camera",
    schemaType: "CollectionPage, BreadcrumbList"
  },
  {
    url: "/power-banks",
    pageType: "Money Page",
    primaryKeyword: "power bank price in Nepal",
    secondaryKeywords: "power bank shop Itahari, fast charging power bank 20000mAh, 65W laptop power bank, USB-C power bank",
    searchIntent: "Commercial",
    topicCluster: "Cluster 5: Power Banks",
    priority: "Critical",
    recommendedInternalLinks: "/products/20000mah-22-5w-fast-charging-power-bank, /products/10000mah-ultra-slim-20w-power-bank, /products/65w-laptop-power-bank-20000mah, /blog/how-to-choose-power-bank-nepal",
    primaryCTA: "Shop Tested Power Banks",
    schemaType: "CollectionPage, BreadcrumbList"
  },
  {
    url: "/blog",
    pageType: "Blog Hub",
    primaryKeyword: "electronics guides and troubleshooting Nepal",
    secondaryKeywords: "mobile repair tips, smart gadget buying guides, battery maintenance Nepal",
    searchIntent: "Informational",
    topicCluster: "Content Authority",
    priority: "Critical",
    recommendedInternalLinks: "/blog/phone-stops-charging-reasons-fixes, /blog/phone-screen-damage-repair-guide, /blog/how-to-choose-power-bank-nepal",
    primaryCTA: "Read Educational Tech Guides",
    schemaType: "CollectionPage, BreadcrumbList"
  },
  {
    url: "/store-location",
    pageType: "Trust Page",
    primaryKeyword: "Himal Product and Services store location",
    secondaryKeywords: "electronics store Itahari directions, Sundarharaincha-4 store map, opening hours Himal electronics",
    searchIntent: "Navigational",
    topicCluster: "Trust & Entity",
    priority: "Critical",
    recommendedInternalLinks: "/contact, /about-us, /service-areas",
    primaryCTA: "Get Directions on Google Maps",
    schemaType: "LocalBusiness, PostalAddress"
  },
  {
    url: "/contact",
    pageType: "Trust Page",
    primaryKeyword: "contact Himal Product and Services",
    secondaryKeywords: "phone number 9807391472, WhatsApp electronics enquiry Itahari, customer support",
    searchIntent: "Navigational",
    topicCluster: "Trust & Entity",
    priority: "Critical",
    recommendedInternalLinks: "/store-location, /repair-price",
    primaryCTA: "Send Direct WhatsApp Message",
    schemaType: "ContactPage, LocalBusiness"
  },
  {
    url: "/about-us",
    pageType: "Trust Page",
    primaryKeyword: "about Himal Product and Services",
    secondaryKeywords: "electronics company established 2022 Morang Sunsari, certified repair technician team",
    searchIntent: "Navigational",
    topicCluster: "Trust & Entity",
    priority: "High",
    recommendedInternalLinks: "/store-location, /warranty, /repair-policy",
    primaryCTA: "Learn Our Workshop Philosophy",
    schemaType: "AboutPage, Organization"
  },
  {
    url: "/warranty",
    pageType: "Trust Page",
    primaryKeyword: "warranty policy Himal electronics",
    secondaryKeywords: "6 month to 2 year electronics warranty Nepal, repair guarantee terms",
    searchIntent: "Informational",
    topicCluster: "Trust & Entity",
    priority: "High",
    recommendedInternalLinks: "/contact, /repair-policy",
    primaryCTA: "Read Full Warranty Details",
    schemaType: "WebPage"
  },
  {
    url: "/delivery-pickup",
    pageType: "Trust Page",
    primaryKeyword: "electronics delivery service Nepal",
    secondaryKeywords: "courier shipping Itahari Biratnagar Dharan, same day delivery Sunsari Morang",
    searchIntent: "Informational",
    topicCluster: "Trust & Entity",
    priority: "High",
    recommendedInternalLinks: "/contact, /service-areas",
    primaryCTA: "Check Delivery Coverage",
    schemaType: "WebPage"
  },
  {
    url: "/repair-policy",
    pageType: "Trust Page",
    primaryKeyword: "mobile repair policy terms Nepal",
    secondaryKeywords: "repair warranty terms, diagnostic policy, customer data privacy promise",
    searchIntent: "Informational",
    topicCluster: "Trust & Entity",
    priority: "High",
    recommendedInternalLinks: "/mobile-repair, /contact",
    primaryCTA: "Review Repair Standards",
    schemaType: "WebPage"
  },
  {
    url: "/service-areas/itahari",
    pageType: "Local Page",
    primaryKeyword: "mobile repair Itahari Sunsari",
    secondaryKeywords: "electronics shop Itahari Chowk, smartphone repair center Itahari, gadget delivery Itahari",
    searchIntent: "Local Service",
    topicCluster: "Local SEO",
    priority: "High",
    recommendedInternalLinks: "/mobile-repair, /mobile-phones, /store-location",
    primaryCTA: "Book Itahari Repair Service",
    schemaType: "LocalBusiness, AreaServed"
  },
  {
    url: "/service-areas/sundarharaincha-morang",
    pageType: "Local Page",
    primaryKeyword: "electronics shop Sundarharaincha Morang",
    secondaryKeywords: "mobile repair Sundarharaincha-4, Himal Product and Services workshop, Biratchowk electronics",
    searchIntent: "Local Service",
    topicCluster: "Local SEO",
    priority: "High",
    recommendedInternalLinks: "/store-location, /mobile-repair, /contact",
    primaryCTA: "Visit Workshop in Sundarharaincha-4",
    schemaType: "LocalBusiness, AreaServed"
  },
  {
    url: "/service-areas/dharan",
    pageType: "Local Page",
    primaryKeyword: "mobile repair service Dharan Sunsari",
    secondaryKeywords: "electronics delivery Dharan, student power bank BPKIHS Dharan, Bhanu Chowk mobile service",
    searchIntent: "Local Service",
    topicCluster: "Local SEO",
    priority: "High",
    recommendedInternalLinks: "/mobile-repair, /power-banks, /delivery-pickup",
    primaryCTA: "Order Delivery to Dharan",
    schemaType: "LocalBusiness, AreaServed"
  },
  {
    url: "/service-areas/biratnagar",
    pageType: "Local Page",
    primaryKeyword: "electronics and mobile repair Biratnagar Morang",
    secondaryKeywords: "smart home automation Biratnagar, fast charger delivery Biratnagar, iPhone repair service",
    searchIntent: "Local Service",
    topicCluster: "Local SEO",
    priority: "High",
    recommendedInternalLinks: "/mobile-repair, /smart-home, /delivery-pickup",
    primaryCTA: "Order Delivery to Biratnagar",
    schemaType: "LocalBusiness, AreaServed"
  }
];

export function generateKeywordsCsv(): string {
  const headers = ["URL", "Page Type", "Primary Keyword", "Secondary Keywords", "Search Intent", "Topic Cluster", "Priority", "Recommended Internal Links", "Primary CTA", "Schema Type"];
  const rows = keywordMappings.map(k => [
    `"${k.url}"`,
    `"${k.pageType}"`,
    `"${k.primaryKeyword.replace(/"/g, '""')}"`,
    `"${(k.secondaryKeywords || '').replace(/"/g, '""')}"`,
    `"${k.searchIntent}"`,
    `"${k.topicCluster}"`,
    `"${k.priority}"`,
    `"${k.recommendedInternalLinks}"`,
    `"${k.primaryCTA}"`,
    `"${k.schemaType}"`
  ].join(","));
  return [headers.join(","), ...rows].join("\n");
}
