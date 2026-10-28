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
  rating: number;
  reviewsCount: number;
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
    rating: 4.8,
    reviewsCount: 34,
    specs: {
      "Display": "6.67\" FHD+ AMOLED, 120Hz Refresh Rate",
      "Processor": "MediaTek Dimensity 6080 / Snapdragon 685",
      "Camera": "108MP Ultra-Clear Triple Camera",
      "Battery": "5000mAh with 33W Fast Charger In-Box",
      "Storage/RAM": "8GB RAM (+8GB Virtual) / 256GB UFS 2.2",
      "Network": "Dual SIM 4G LTE, VoLTE Nepal Supported"
    },
    highlights: [
      "Vivid 120Hz AMOLED display for smooth scrolling",
      "108MP high-resolution camera for detailed daylight and night photos",
      "All-day 5000mAh battery with 33W fast charging",
      "Official Nepal MDMS registered unit"
    ],
    compatibility: "All Nepal Telecom (NTC, Ncell, Smart Cell) 4G networks",
    description: "The Redmi Note 13 delivers flagship-grade AMOLED visuals, a crisp 108MP camera, and dependable battery life tailored for students, content creators, and daily commuters across Sunsari and Morang.",
    seoTitle: "Redmi Note 13 Price in Itahari Nepal | Himal Product & Services",
    seoDescription: "Buy official Redmi Note 13 (8GB/256GB) in Itahari with 1-year warranty and free local delivery across Sunsari & Morang."
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
    rating: 4.7,
    reviewsCount: 28,
    specs: {
      "Display": "6.5\" Super AMOLED, 90Hz",
      "Processor": "MediaTek Dimensity 6100+",
      "Camera": "50MP Main + 5MP Ultra-Wide + 2MP Macro",
      "Battery": "5000mAh with 25W Super Fast Charging support",
      "OS": "One UI 6.0 (4 Years OS Updates Promised)"
    },
    highlights: [
      "Super AMOLED display with vibrant color reproduction",
      "Future-proof 5G connectivity for high-speed mobile data",
      "Samsung Knox security and 4 OS upgrades guaranteed",
      "Stable 50MP triple camera system"
    ],
    compatibility: "Universal 4G/5G SIM support in Nepal",
    description: "Samsung Galaxy A15 5G provides Samsung's acclaimed Super AMOLED display fidelity, reliable Knox security, and four years of OS updates for peace of mind.",
    seoTitle: "Samsung Galaxy A15 5G Price in Nepal (Itahari) | Himal Electronics",
    seoDescription: "Get the genuine Samsung Galaxy A15 5G in Itahari with official Samsung Nepal warranty and instant store pickup."
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
    rating: 4.9,
    reviewsCount: 19,
    specs: {
      "Display": "6.1\" Super Retina XDR with Dynamic Island",
      "Chipset": "A16 Bionic with 5-core GPU",
      "Port": "Universal USB-C Port",
      "Camera": "48MP Main with 2x Telephoto + 12MP Ultra-Wide",
      "Safety": "Crash Detection & Emergency SOS"
    },
    highlights: [
      "Dynamic Island for intuitive alert tracking",
      "48MP main camera with 2x optical-quality telephoto",
      "Universal USB-C charging convenience",
      "Durable color-infused glass and aluminum design"
    ],
    compatibility: "Official factory unlocked; full MDMS registered for Nepal",
    description: "The iPhone 15 features the Dynamic Island, powerful 48MP main camera, USB-C convenience, and the blazingly fast A16 Bionic processor.",
    seoTitle: "Buy Apple iPhone 15 in Itahari Nepal | Genuine MDMS Unit",
    seoDescription: "Official Apple iPhone 15 in Itahari, Sunsari. 100% genuine with VAT bill, MDMS registration, and authorized warranty."
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
    rating: 4.6,
    reviewsCount: 42,
    specs: {
      "Bluetooth": "v5.3 with Instant Auto-Pairing",
      "ANC": "Up to 30dB Active Noise Cancellation + Environmental Noise Canceling (ENC)",
      "Playtime": "Up to 36 Hours with Charging Case",
      "Charging": "Type-C Fast Charge (10 min charge = 2 hrs playtime)",
      "Water Resistance": "IPX5 Sweat & Splash Proof"
    },
    highlights: [
      "Active Noise Cancellation eliminates bus, traffic, and background noise",
      "Quad-mic ENC setup ensures crystal-clear phone calls",
      "Low-latency gaming mode for sync audio on PUBG / Free Fire",
      "Compact ergonomic fit designed for prolonged comfort"
    ],
    compatibility: "Compatible with Android, iPhone, Laptops, and Bluetooth Smart TVs",
    description: "Premium wireless earbuds with hybrid Active Noise Cancellation, punchy bass drivers, and 36-hour endurance for daily commutes and workouts in Eastern Nepal.",
    seoTitle: "Best ANC Earbuds Under 4000 NPR in Itahari | Himal Electronics",
    seoDescription: "Get high-performance ANC wireless earbuds in Itahari with clear call audio, low latency, and 6-month warranty."
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
    rating: 4.9,
    reviewsCount: 51,
    specs: {
      "Technology": "Gallium Nitride (GaN 3) Miniaturized Architecture",
      "Total Output": "65W Max (PD 3.0, QC 4.0+, PPS Support)",
      "Ports": "1x USB-C (65W) + 1x USB-A (18W)",
      "Protection": "Over-voltage, surge, overheating, and short-circuit protection",
      "Input": "AC 100-240V, 50/60Hz (Nepal voltage certified)"
    },
    highlights: [
      "Charges laptops (MacBook, Dell, ThinkPad) and smartphones at top speed",
      "GaN technology keeps charger compact, lightweight, and cool",
      "Power Delivery (PD) & PPS protocols compatible with Samsung 25W/45W and iPhone 20W/27W",
      "Built-in temperature monitoring protects battery lifespan"
    ],
    compatibility: "Smartphones, tablets, power banks, and USB-C chargeable laptops",
    description: "A compact 65W GaN wall adapter capable of fast-charging laptops, smartphones, and tablets simultaneously with multi-layer surge protection against power fluctuations.",
    seoTitle: "65W GaN Fast Charger Price in Nepal (Itahari) | Himal Product",
    seoDescription: "Buy compact 65W GaN fast chargers in Itahari. Charge your laptop and phone from a single wall outlet with 1-year warranty."
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
    rating: 4.8,
    reviewsCount: 67,
    specs: {
      "Wattage": "100W Power Delivery (20V / 5A) E-Marker Smart Chip",
      "Length": "2.0 Meters (6.6 Feet)",
      "Material": "High-density nylon braided exterior with zinc alloy connectors",
      "Data Transfer": "480 Mbps high-speed data sync",
      "Bend Lifespan": "Tested for 20,000+ bends"
    },
    highlights: [
      "Smart E-Marker chip negotiates safe, peak charging currents",
      "Reinforced joint collars eliminate fraying and wire tearing",
      "Extra-long 2-meter reach suitable for bed, sofa, or office desk",
      "Supports full laptop and phone fast charging"
    ],
    compatibility: "All USB-C phones, MacBook, iPad, power banks, and tablets",
    description: "High-durability 100W nylon braided Type-C cable engineered with an E-Marker chip for maximum safety, rapid charging, and long-lasting durability.",
    seoTitle: "100W Type-C Fast Charging Cable in Nepal (Itahari)",
    seoDescription: "Durable 100W braided USB-C cable in Itahari for laptops and smartphones. Resists bends and delivers high-speed power delivery."
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
    rating: 4.7,
    reviewsCount: 39,
    specs: {
      "Display": "1.43\" Ultra AMOLED, 466x466 res, Always-On Display",
      "Calling": "Single-chip Bluetooth Calling with loud speaker & mic",
      "Health Tracking": "24/7 Heart Rate, SpO2 Blood Oxygen, Sleep Analysis",
      "Sports Modes": "100+ Sports & Fitness workout modes",
      "Battery Life": "Up to 7 days normal use, 2.5 days with continuous calling",
      "Rating": "IP68 Water and Dust Resistance"
    },
    highlights: [
      "Loud and clear on-wrist Bluetooth calling without taking out phone",
      "Always-On AMOLED screen with customizable watch faces",
      "Real-time health monitoring and sedentary alerts",
      "Durable metallic zinc alloy casing with comfortable silicone straps"
    ],
    compatibility: "Android 5.0+ and iOS 10.0+ devices",
    description: "Stay connected on the move across Sunsari and Morang with sharp AMOLED visuals, direct wrist calling, and all-round health tracking.",
    seoTitle: "Best Calling Smartwatch Price in Nepal (Itahari) | Himal",
    seoDescription: "Shop Bluetooth calling smartwatches with AMOLED display in Itahari. 1-year warranty and verified specs."
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
    rating: 4.8,
    reviewsCount: 22,
    specs: {
      "Audio Output": "16W Dual Drivers with BassBoost Passive Radiators",
      "Battery Life": "Up to 20 Hours Continuous Playback (4000mAh battery)",
      "Connectivity": "Bluetooth 5.3, AUX 3.5mm, MicroSD Card slot",
      "Waterproofing": "IPX7 Full Submersion Waterproof",
      "TWS Pairing": "Link two speakers for 32W True Wireless Stereo"
    },
    highlights: [
      "Deep, punchy bass for outdoor gatherings, picnics, and room audio",
      "IPX7 waterproof construction withstands rain and accidental drops in water",
      "Huge 20-hour battery life ensures non-stop entertainment",
      "Compact cylinder design with carrying lanyard"
    ],
    compatibility: "Connects to any Bluetooth-enabled phone, tablet, or TV",
    description: "Compact 16W stereo speaker featuring deep bass radiators, full IPX7 waterproof housing, and up to 20 hours of continuous music for family trips, parties, and picnics.",
    seoTitle: "Portable Bluetooth Speaker Price in Itahari Nepal | Himal",
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
    rating: 4.7,
    reviewsCount: 45,
    specs: {
      "Wattage & Lumens": "9W (800 Lumens equivalent to 60W standard incandescent)",
      "Colors": "16 Million Colors (RGB) + Warm White to Cool White (2700K - 6500K)",
      "Connectivity": "Direct 2.4GHz Wi-Fi (No Hub Required)",
      "Voice Control": "Works with Google Home & Amazon Alexa",
      "App Control": "Smart Life / Tuya Smart App for Android & iOS",
      "Lifespan": "25,000 Rated Hours"
    },
    highlights: [
      "Requires no expensive gateway hub; screws into regular bulb holder",
      "Schedule automatic on/off timers to simulate presence when traveling",
      "Adjust brightness and color temperature to reduce eye strain during study",
      "Sync lighting effects with music or gaming audio"
    ],
    compatibility: "Fits standard Nepali B22 pin or E27 screw sockets; 2.4GHz Wi-Fi",
    description: "Transform any room in your home with 16 million colors and tuneable white light. Schedule wake-up routines and control lighting from anywhere in Nepal through your smartphone.",
    seoTitle: "Smart Wi-Fi Bulb Price in Nepal (Itahari) | Himal Product",
    seoDescription: "Shop 9W Smart RGB Wi-Fi bulbs in Itahari. Works with Google Assistant and Alexa without a hub. 1-year warranty."
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
    rating: 4.8,
    reviewsCount: 31,
    specs: {
      "Max Load": "16A Heavy Duty (Up to 3500W Max)",
      "Energy Monitoring": "Live Voltage, Current, and Monthly kWh Consumption Tracking",
      "Connectivity": "2.4GHz Wi-Fi with Offline Memory State",
      "Safety": "V0 Fire-retardant ABS housing & Child Safety Shutter",
      "Automation": "Countdown timer, recurring schedules, and auto-cutoff"
    },
    highlights: [
      "Heavy-duty 16A capacity safely handles water heaters (geysers), ACs, and water pumps",
      "Live power monitoring helps reduce unnecessary electricity bills",
      "Automate your water pump or geyser to turn off automatically after 20 minutes",
      "Remote control from anywhere in Nepal via Tuya Smart / Smart Life App"
    ],
    compatibility: "Fits standard 16A power sockets used in Nepali homes",
    description: "Safely automate high-wattage household appliances such as geysers, air conditioners, room heaters, and water pumps with automated timer cutoff and live power monitoring.",
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
    rating: 4.9,
    reviewsCount: 38,
    specs: {
      "Resolution": "2K Ultra HD (2304 x 1296)",
      "Field of View": "360° Horizontal Pan & 114° Vertical Tilt",
      "Night Vision": "Infrared Night Vision up to 10M + Full Color Night Mode",
      "Audio": "Two-Way Audio with built-in microphone & siren",
      "Smart Detection": "AI Human Motion Detection & Smart Tracking",
      "Storage": "MicroSD card up to 256GB or secure cloud storage option"
    },
    highlights: [
      "AI human detection filters out flying insects and false alarms",
      "Two-way talk allows speaking to visitors, children, or pets remotely",
      "Built-in siren deters unauthorized intruders",
      "Live streaming on smartphone anywhere in the world"
    ],
    compatibility: "Connects via 2.4GHz Wi-Fi; mounts on wall, ceiling, or tabletop",
    description: "Protect your family home, store, or office in Itahari with 360-degree pan-tilt coverage, high-definition 2K video clarity, human detection alerts, and two-way voice communication.",
    seoTitle: "360 2K Smart Security Camera in Itahari Nepal | Himal",
    seoDescription: "Buy 360-degree 2K smart security cameras in Itahari. Features human tracking, night vision, two-way audio, and 1-year warranty."
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
    rating: 4.8,
    reviewsCount: 63,
    specs: {
      "Battery Capacity": "20,000mAh (74Wh) Lithium-Polymer Grade-A Cells",
      "Fast Charging Standards": "22.5W Super Charge, PD 20W, QC 3.0, FCP/AFC",
      "Ports": "2x USB-A (22.5W) + 1x Two-Way Type-C (20W PD) + 1x Micro-USB",
      "Digital Display": "LED Percentage Battery Indicator",
      "Protection": "9-Layer smart circuit protection against overcharge and short circuits"
    },
    highlights: [
      "Charges standard smartphones 4 to 5 full times on a single charge",
      "Fast-charges iPhones up to 50% in 30 minutes with 20W PD",
      "Simultaneously charge up to 3 devices together",
      "Flight-safe capacity approved for airline travel"
    ],
    compatibility: "Universal compatibility with all iPhones, Samsung, Redmi, Realme, and earbuds",
    description: "The essential power bank for travel and daily commutes across Sunsari and Morang. Packs 20,000mAh of safe lithium-polymer capacity with multi-protocol 22.5W fast charging.",
    seoTitle: "20000mAh Power Bank Price in Nepal (Itahari) | Himal Product",
    seoDescription: "Get original 20,000mAh 22.5W fast charging power banks in Itahari. LED digital display, multi-device support, and 1-year warranty."
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
    rating: 4.7,
    reviewsCount: 48,
    specs: {
      "Battery Capacity": "10,000mAh (37Wh)",
      "Output Wattage": "20W Type-C Power Delivery + 18W USB-A QC 3.0",
      "Thickness": "Only 14.5mm slim; weighs just 180g",
      "Body": "Matte anti-fingerprint aluminum-look finish",
      "Indicators": "4-Level LED battery life gauge"
    },
    highlights: [
      "Ultra-slim pocket design slips easily into jeans pockets or small purses",
      "20W PD powers iPhone 12/13/14/15/16 at maximum recommended speed",
      "Low-current mode safely tops up Bluetooth earbuds and smartwatches",
      "Charges typical phones 2 to 2.5 times fully"
    ],
    compatibility: "All modern USB-C and Lightning smartphones and accessories",
    description: "Pocket-sized 10,000mAh power bank engineered for users who want lightweight, reliable emergency backup power without bulky weight in pockets or bags.",
    seoTitle: "Slim 10000mAh Power Bank in Itahari Nepal | Himal Electronics",
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
    rating: 4.9,
    reviewsCount: 29,
    specs: {
      "Capacity": "20,000mAh (74Wh)",
      "Max Power Output": "65W Type-C Power Delivery 3.0 (Can power USB-C Laptops)",
      "Inputs": "60W Fast Recharging input (Recharges in 90 minutes with 65W wall adapter)",
      "Outputs": "2x Type-C + 2x USB-A (4-port simultaneous output)",
      "Display": "Digital smart screen shows remaining time, output wattage, and percentage"
    },
    highlights: [
      "Power laptops on the go: charges MacBook Air/Pro, Dell XPS, HP Spectre, and Lenovo ThinkPad",
      "Rapidly recharge the power bank itself in under 2 hours",
      "Digital screen displays real-time voltage, current, and charging status",
      "Powers drones, cameras, gaming consoles (Steam Deck/Nintendo Switch)"
    ],
    compatibility: "Laptops with USB-C PD charging, all smartphones, tablets, cameras",
    description: "A heavy-duty 65W power bank capable of powering laptops, smartphones, and tablets simultaneously. The ultimate tool for students, developers, and remote workers during load balancing or travel in Koshi Province.",
    seoTitle: "65W Laptop Power Bank Price in Nepal (Itahari) | Himal",
    seoDescription: "Buy 65W laptop and smartphone power banks in Itahari. Recharges laptops on the go with 1-year warranty."
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter(p => p.category === category);
}
