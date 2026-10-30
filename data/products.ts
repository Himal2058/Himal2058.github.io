export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: 'mobile-phones' | 'gadgets-accessories' | 'smart-home' | 'power-banks';
  subcategory: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  warranty: string;
  image: string;
  specs: Record<string, string>;
  highlights: string[];
  compatibility?: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

export const products: Product[] = [
  // Mobile Phones
  {
    id: "phone-1",
    name: "Redmi Note 13 (8GB / 256GB)",
    slug: "redmi-note-13-8gb-256gb",
    brand: "Xiaomi / Redmi",
    category: "mobile-phones",
    subcategory: "android",
    price: 26999,
    originalPrice: 28999,
    inStock: true,
    warranty: "1 Year Official Brand Warranty (MDMS Registered)",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Display": "6.67\" FHD+ AMOLED, 120Hz Refresh Rate",
      "Processor": "MediaTek Dimensity 6080 / Snapdragon 685",
      "Camera": "108MP Triple Camera",
      "Battery": "5000mAh with 33W Fast Charger In-Box",
      "Storage/RAM": "8GB RAM (+8GB Virtual) / 256GB UFS 2.2",
      "Network": "Dual SIM 4G LTE, VoLTE Nepal Supported"
    },
    highlights: [
      "120Hz AMOLED display",
      "108MP main camera",
      "5000mAh battery with 33W fast charging",
      "Official Nepal MDMS registered unit"
    ],
    compatibility: "All Nepal Telecom (NTC, Ncell, Smart Cell) 4G networks",
    description: "The Redmi Note 13 has an AMOLED screen, a 108MP camera, and a 5000mAh battery with 33W charging. A good pick for students and daily commuters in Sunsari and Morang.",
    seoTitle: "Redmi Note 13 Price in Itahari Nepal",
    seoDescription: "Buy Redmi Note 13 (8GB/256GB) in Itahari with 1-year warranty and free local delivery across Sunsari and Morang."
  },
  {
    id: "phone-2",
    name: "Samsung Galaxy A15 5G (6GB / 128GB)",
    slug: "samsung-galaxy-a15-5g",
    brand: "Samsung",
    category: "mobile-phones",
    subcategory: "android",
    price: 27999,
    originalPrice: 29999,
    inStock: true,
    warranty: "1 Year Official Samsung Nepal Warranty + 1 Time Screen Care Option",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Display": "6.5\" Super AMOLED, 90Hz",
      "Processor": "MediaTek Dimensity 6100+",
      "Camera": "50MP Main + 5MP Ultra-Wide + 2MP Macro",
      "Battery": "5000mAh with 25W Fast Charging",
      "OS": "One UI 6.0"
    },
    highlights: [
      "Super AMOLED display",
      "5G connectivity",
      "Samsung Knox security and OS updates",
      "50MP triple camera"
    ],
    compatibility: "Universal 4G/5G SIM support in Nepal",
    description: "Samsung Galaxy A15 5G with a Super AMOLED display, Knox security, and OS updates.",
    seoTitle: "Samsung Galaxy A15 5G Price in Nepal (Itahari)",
    seoDescription: "Get the Samsung Galaxy A15 5G in Itahari with official Samsung Nepal warranty and store pickup."
  },
  {
    id: "phone-3",
    name: "Apple iPhone 15 (128GB - Official MDMS)",
    slug: "apple-iphone-15-128gb",
    brand: "Apple",
    category: "mobile-phones",
    subcategory: "iphone",
    price: 139999,
    originalPrice: 147000,
    inStock: true,
    warranty: "1 Year Apple International & Nepal Authorized Warranty",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Display": "6.1\" Super Retina XDR with Dynamic Island",
      "Chipset": "A16 Bionic with 5-core GPU",
      "Port": "Universal USB-C Port",
      "Camera": "48MP Main with 2x Telephoto + 12MP Ultra-Wide",
      "Safety": "Crash Detection & Emergency SOS"
    },
    highlights: [
      "Dynamic Island for alerts",
      "48MP main camera with 2x telephoto",
      "USB-C charging",
      "Color-infused glass and aluminum"
    ],
    compatibility: "Official factory unlocked; full MDMS registered for Nepal",
    description: "iPhone 15 with Dynamic Island, a 48MP main camera, USB-C charging, and the A16 chip.",
    seoTitle: "Buy Apple iPhone 15 in Itahari Nepal",
    seoDescription: "Official Apple iPhone 15 in Itahari, Sunsari. Genuine MDMS unit with VAT bill and authorized warranty."
  },

  // Gadgets & Accessories
  {
    id: "gadget-1",
    name: "Havit / Ultima TWS Active Noise Cancelling Earbuds",
    slug: "anc-wireless-earbuds-pro",
    brand: "Ultima Lifestyle",
    category: "gadgets-accessories",
    subcategory: "earbuds-headphones",
    price: 3499,
    originalPrice: 4299,
    inStock: true,
    warranty: "6 Months Brand Replacement Warranty",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Bluetooth": "v5.3 with Instant Auto-Pairing",
      "ANC": "Up to 30dB Active Noise Cancellation + ENC",
      "Playtime": "Up to 36 Hours with Charging Case",
      "Charging": "Type-C Fast Charge",
      "Water Resistance": "IPX5 Sweat & Splash Proof"
    },
    highlights: [
      "Active noise cancellation cuts bus and traffic noise",
      "Clear call microphones",
      "Gaming mode with low audio delay",
      "Compact fit for long wear"
    ],
    compatibility: "Works with Android, iPhone, laptops, and Bluetooth TVs",
    description: "Wireless earbuds with active noise cancellation, clear call microphones, and up to 36 hours of playtime with the case.",
    seoTitle: "ANC Earbuds Under 4000 NPR in Itahari",
    seoDescription: "ANC wireless earbuds in Itahari with clear call audio, low latency, and 6-month warranty."
  },
  {
    id: "gadget-2",
    name: "65W GaN Fast Dual-Port Wall Charger (Type-C + USB-A)",
    slug: "65w-gan-fast-wall-charger",
    brand: "Baseus / LDNIO",
    category: "gadgets-accessories",
    subcategory: "chargers-cables",
    price: 2899,
    originalPrice: 3500,
    inStock: true,
    warranty: "1 Year Replacement Warranty",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Technology": "Gallium Nitride (GaN)",
      "Total Output": "65W Max (PD 3.0, QC 4.0+, PPS)",
      "Ports": "1x USB-C (65W) + 1x USB-A (18W)",
      "Protection": "Over-voltage, surge, overheating, and short-circuit protection",
      "Input": "AC 100-240V, 50/60Hz"
    },
    highlights: [
      "Charges laptops and phones at top speed",
      "GaN keeps it compact and cool",
      "Works with Samsung 25W/45W and iPhone 20W/27W",
      "Temperature monitoring protects battery life"
    ],
    compatibility: "Smartphones, tablets, power banks, and USB-C chargeable laptops",
    description: "Compact 65W GaN wall charger that fast-charges laptops, smartphones and tablets from one outlet, with surge protection.",
    seoTitle: "65W GaN Fast Charger Price in Nepal (Itahari)",
    seoDescription: "Buy a compact 65W GaN fast charger in Itahari. Charge your laptop and phone from one outlet with 1-year warranty."
  },
  {
    id: "gadget-3",
    name: "Rugged Braided 100W USB-C to USB-C Fast Charging Cable (2M)",
    slug: "100w-braided-usbc-cable-2m",
    brand: "Baseus / Remax",
    category: "gadgets-accessories",
    subcategory: "chargers-cables",
    price: 850,
    originalPrice: 1200,
    inStock: true,
    warranty: "6 Months Replacement Warranty",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Wattage": "100W Power Delivery (20V / 5A) E-Marker Smart Chip",
      "Length": "2.0 Meters",
      "Material": "High-density nylon braided exterior with zinc alloy connectors",
      "Data Transfer": "480 Mbps",
      "Bend Lifespan": "Tested for 20,000+ bends"
    },
    highlights: [
      "E-Marker chip negotiates safe charging current",
      "Reinforced joints resist fraying",
      "2-metre reach for bed, sofa or desk",
      "Charges laptops and phones at full speed"
    ],
    compatibility: "All USB-C phones, MacBook, iPad, power banks, and tablets",
    description: "Durable 100W braided USB-C cable with an E-Marker chip for safe fast charging of laptops and phones.",
    seoTitle: "100W Type-C Fast Charging Cable in Nepal (Itahari)",
    seoDescription: "Durable 100W braided USB-C cable in Itahari for laptops and smartphones."
  },
  {
    id: "gadget-4",
    name: "Bluetooth Calling Smartwatch with AMOLED Display",
    slug: "bluetooth-calling-amoled-smartwatch",
    brand: "Ultima / Fire-Boltt",
    category: "gadgets-accessories",
    subcategory: "smartwatches",
    price: 4499,
    originalPrice: 5999,
    inStock: true,
    warranty: "1 Year Brand Warranty",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Display": "1.43\" Ultra AMOLED, 466x466, Always-On Display",
      "Calling": "Bluetooth Calling with speaker and mic",
      "Health Tracking": "24/7 Heart Rate, SpO2 Blood Oxygen, Sleep Analysis",
      "Sports Modes": "100+ Sports & Fitness modes",
      "Battery Life": "Up to 7 days normal use",
      "Rating": "IP68 Water and Dust Resistance"
    },
    highlights: [
      "Take calls from your wrist",
      "Always-on AMOLED screen",
      "Heart rate, blood oxygen and sleep tracking",
      "Metal casing with silicone strap"
    ],
    compatibility: "Android 5.0+ and iOS 10.0+ devices",
    description: "Bluetooth calling smartwatch with an AMOLED screen, health tracking, and up to 7 days of battery.",
    seoTitle: "Calling Smartwatch Price in Nepal (Itahari)",
    seoDescription: "Bluetooth calling smartwatches with AMOLED display in Itahari. 1-year warranty and verified specs."
  },
  {
    id: "gadget-5",
    name: "Rugged Outdoor 16W Bluetooth Speaker (Waterproof)",
    slug: "outdoor-16w-waterproof-bluetooth-speaker",
    brand: "Tribit / Zealot",
    category: "gadgets-accessories",
    subcategory: "bluetooth-speakers",
    price: 3899,
    originalPrice: 4800,
    inStock: true,
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Audio Output": "16W Dual Drivers with BassBoost",
      "Battery Life": "Up to 20 Hours Continuous Playback",
      "Connectivity": "Bluetooth 5.3, AUX 3.5mm, MicroSD Card slot",
      "Waterproofing": "IPX7 Full Submersion Waterproof",
      "TWS Pairing": "Link two speakers for 32W Stereo"
    },
    highlights: [
      "Deep bass for outdoors and parties",
      "IPX7 waterproof for rain and splashes",
      "20-hour battery life",
      "Compact cylinder with carry loop"
    ],
    compatibility: "Connects to any Bluetooth phone, tablet, or TV",
    description: "Compact 16W Bluetooth speaker with deep bass, IPX7 waterproofing, and up to 20 hours of playback.",
    seoTitle: "Portable Bluetooth Speaker Price in Itahari Nepal",
    seoDescription: "Buy waterproof 16W Bluetooth speakers in Itahari. Deep bass, 20-hour battery life, and 1-year warranty."
  },

  // Smart Home Devices
  {
    id: "smart-1",
    name: "Smart Wi-Fi RGB + Warm White LED Bulb (9W, E27/B22)",
    slug: "smart-wifi-rgb-led-bulb-9w",
    brand: "Tuya / Wipro Smart",
    category: "smart-home",
    subcategory: "smart-bulbs",
    price: 1150,
    originalPrice: 1500,
    inStock: true,
    warranty: "1 Year Replacement Warranty",
    image: "https://images.unsplash.com/photo-1550985616-10810253b84d?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Wattage & Lumens": "9W (800 Lumens, equal to 60W incandescent)",
      "Colors": "16 Million Colors + Warm White to Cool White",
      "Connectivity": "Direct 2.4GHz Wi-Fi (No Hub Required)",
      "Voice Control": "Works with Google Home & Amazon Alexa",
      "App Control": "Smart Life / Tuya Smart App",
      "Lifespan": "25,000 Rated Hours"
    },
    highlights: [
      "Screws into a regular bulb holder, no hub",
      "Set on/off timers",
      "Adjust brightness and colour temperature",
      "Music and gaming lighting effects"
    ],
    compatibility: "Fits standard Nepali B22 pin or E27 screw sockets; 2.4GHz Wi-Fi",
    description: "9W smart Wi-Fi bulb with 16 million colours and tuneable white light. Screws into a regular holder — no hub needed.",
    seoTitle: "Smart Wi-Fi Bulb Price in Nepal (Itahari)",
    seoDescription: "Shop 9W Smart RGB Wi-Fi bulbs in Itahari. Works with Google Assistant and Alexa without a hub."
  },
  {
    id: "smart-2",
    name: "16A Heavy-Duty Smart Wi-Fi Plug with Energy Monitor",
    slug: "16a-smart-wifi-plug-energy-monitor",
    brand: "Tuya / Sonoff",
    category: "smart-home",
    subcategory: "smart-plugs-switches",
    price: 1750,
    originalPrice: 2200,
    inStock: true,
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Max Load": "16A Heavy Duty (Up to 3500W Max)",
      "Energy Monitoring": "Live Voltage, Current, and Monthly kWh Tracking",
      "Connectivity": "2.4GHz Wi-Fi with Offline Memory",
      "Safety": "V0 Fire-retardant ABS housing & Child Safety Shutter",
      "Automation": "Countdown timer, recurring schedules, auto-cutoff"
    },
    highlights: [
      "16A handles water heaters, ACs and pumps",
      "Live power monitoring to cut waste",
      "Countdown timer and recurring schedules",
      "Remote control from anywhere in Nepal"
    ],
    compatibility: "Fits standard 16A power sockets used in Nepali homes",
    description: "Heavy-duty 16A smart plug for geysers, ACs, room heaters and water pumps, with live power monitoring.",
    seoTitle: "16A Smart Wi-Fi Plug for Geysers & ACs in Nepal (Itahari)",
    seoDescription: "Automate geysers and appliances with heavy-duty 16A smart plugs in Itahari. Live energy meter and 1-year warranty."
  },
  {
    id: "smart-3",
    name: "360° 2K Pan-Tilt Smart Security Wi-Fi Camera (Color Night Vision)",
    slug: "360-2k-smart-security-camera",
    brand: "Imou / TP-Link Tapo",
    category: "smart-home",
    subcategory: "smart-security",
    price: 4299,
    originalPrice: 5200,
    inStock: true,
    warranty: "1 Year Replacement Warranty",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Resolution": "2K Ultra HD (2304 x 1296)",
      "Field of View": "360° Horizontal Pan & 114° Vertical Tilt",
      "Night Vision": "Infrared Night Vision up to 10M + Full Color Night Mode",
      "Audio": "Two-Way Audio with microphone & siren",
      "Smart Detection": "AI Human Motion Detection & Smart Tracking",
      "Storage": "MicroSD card up to 256GB"
    },
    highlights: [
      "Human detection cuts false alarms",
      "Two-way talk to visitors, children or pets",
      "Built-in siren",
      "Live streaming on your phone"
    ],
    compatibility: "Connects via 2.4GHz Wi-Fi; mounts on wall, ceiling, or tabletop",
    description: "360-degree 2K security camera with pan-tilt, human detection, two-way audio, and microSD recording.",
    seoTitle: "360 2K Smart Security Camera in Itahari Nepal",
    seoDescription: "Buy 360-degree 2K smart security cameras in Itahari. Human tracking, night vision, two-way audio, and 1-year warranty."
  },

  // Power Banks & Charging
  {
    id: "power-1",
    name: "20,000mAh 22.5W Fast Charging Power Bank with Dual Input",
    slug: "20000mah-22-5w-fast-charging-power-bank",
    brand: "Remax / Ultima",
    category: "power-banks",
    subcategory: "high-capacity",
    price: 2899,
    originalPrice: 3600,
    inStock: true,
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1609592424364-772ebad01579?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Battery Capacity": "20,000mAh (74Wh) Lithium-Polymer Cells",
      "Fast Charging Standards": "22.5W Super Charge, PD 20W, QC 3.0, FCP/AFC",
      "Ports": "2x USB-A (22.5W) + 1x Two-Way Type-C (20W PD) + 1x Micro-USB",
      "Digital Display": "LED Percentage Battery Indicator",
      "Protection": "Smart circuit protection against overcharge and short circuits"
    },
    highlights: [
      "Charges most phones four to five times",
      "Fast-charges iPhones to 50 percent in 30 minutes",
      "Charge up to three devices at once",
      "Flight-safe capacity"
    ],
    compatibility: "Works with all iPhones, Samsung, Redmi, Realme, and earbuds",
    description: "20,000mAh power bank with 22.5W fast charging. Charges phones four to five times and is flight-safe.",
    seoTitle: "20000mAh Power Bank Price in Nepal (Itahari)",
    seoDescription: "Get original 20,000mAh 22.5W fast charging power banks in Itahari. LED display, multi-device support, and 1-year warranty."
  },
  {
    id: "power-2",
    name: "10,000mAh Ultra-Slim 20W PD Pocket Power Bank",
    slug: "10000mah-ultra-slim-20w-power-bank",
    brand: "Baseus / Joyroom",
    category: "power-banks",
    subcategory: "slim-portable",
    price: 1999,
    originalPrice: 2500,
    inStock: true,
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1622445262464-84b14e5722b6?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Battery Capacity": "10,000mAh (37Wh)",
      "Output Wattage": "20W Type-C Power Delivery + 18W USB-A QC 3.0",
      "Thickness": "Only 14.5mm slim; weighs 180g",
      "Body": "Matte anti-fingerprint finish",
      "Indicators": "4-Level LED battery gauge"
    },
    highlights: [
      "Slim pocket design",
      "20W PD for iPhone 12 to 16",
      "Low-current mode for earbuds and watches",
      "Charges typical phones two to two and a half times"
    ],
    compatibility: "All modern USB-C and Lightning smartphones and accessories",
    description: "Slim 10,000mAh pocket power bank with 20W USB-C PD. Charges phones two to two and a half times.",
    seoTitle: "Slim 10000mAh Power Bank in Itahari Nepal",
    seoDescription: "Buy lightweight 10000mAh 20W fast power banks in Itahari. Pocket-friendly, durable, with 1-year warranty."
  },
  {
    id: "power-3",
    name: "65W High-Power 20,000mAh Laptop & Smartphone Power Bank",
    slug: "65w-laptop-power-bank-20000mah",
    brand: "Baseus Blade / Awei",
    category: "power-banks",
    subcategory: "laptop-charging",
    price: 5499,
    originalPrice: 6500,
    inStock: true,
    warranty: "1 Year Official Replacement Warranty",
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Capacity": "20,000mAh (74Wh)",
      "Max Power Output": "65W Type-C Power Delivery 3.0 (Powers USB-C Laptops)",
      "Inputs": "60W Fast Recharging Input",
      "Outputs": "2x Type-C + 2x USB-A (4-port simultaneous output)",
      "Display": "Digital screen shows remaining time, output wattage, and percentage"
    },
    highlights: [
      "Charges MacBook, Dell XPS, ThinkPad and other USB-C laptops",
      "Recharges itself in under two hours",
      "Digital screen shows voltage, current and status",
      "Powers drones, cameras and consoles"
    ],
    compatibility: "Laptops with USB-C PD charging, all smartphones, tablets, cameras",
    description: "65W, 20,000mAh power bank that powers laptops, phones and tablets, with a digital screen showing real-time status.",
    seoTitle: "65W Laptop Power Bank Price in Nepal (Itahari)",
    seoDescription: "Buy 65W laptop and smartphone power banks in Itahari. Recharges laptops on the go with 1-year warranty."
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter(p => p.category === category);
}
