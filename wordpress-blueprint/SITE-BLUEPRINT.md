# Himal Product & Services — Full WordPress Site Blueprint

## 1. Goal and migration approach

Rebuild `https://himalelectronics.vercel.app` as a WordPress site the shop owner can edit through the WordPress dashboard. Preserve the existing business identity, mobile-first visual style, useful content, service flows, and existing public URL paths. Use Gutenberg blocks for ordinary page editing and structured content fields for products, repair services, locations and guides.

The current production site is a Next.js site. WordPress will be a separate implementation: URLs, images, pages, product data, SEO settings and interactive behaviors must be rebuilt or imported. Do not assume Next.js components, API routes, Supabase setup or environment variables automatically transfer to WordPress.

## 2. Audiences and main tasks

- A phone or electronics owner in Itahari, Sundarharaincha, Morang or Sunsari needs to identify a fault, ask for an estimate, check directions, and arrange a visit.
- A shopper in eastern Nepal wants to compare phones, accessories, smart-home devices and power banks, check availability, then ask for delivery or place a COD request.
- A customer needs to ask about an existing repair, order, warranty or delivery, sometimes with an issue photo.
- The business owner needs to update product stock and prices, publish guides, approve reviews, and respond to customer enquiries without editing code.

## 3. WordPress setup and content editing model

### Recommended implementation

- WordPress + Gutenberg block editor for static pages and page sections.
- A lightweight custom block theme named `himal-electronics` (or a child theme of a maintained block theme if a custom theme is not commissioned).
- WooCommerce for the product catalogue, inventory, COD checkout, order administration and delivery/pickup selection. Keep checkout simple and explain that the shop confirms stock, delivery cost and timing.
- Structured fields for repair details, location data, trust/policy facts and SEO metadata. Use a maintained custom-fields plugin, or implement a small site plugin so fields are not lost if the visual theme changes.
- A small site plugin named `himal-site-tools` for custom post types/taxonomies, enquiry form handling, review moderation, schema, redirects and custom integrations. Keep data behavior out of the theme.
- Use WordPress Media Library for original photos; optimize copies to WebP/AVIF, retain original source files, add descriptive alt text, and set a consistent focal point/crop.

### Content types

1. **Pages** — home, service landing pages, company/help pages and legal/policy pages.
2. **Products** — WooCommerce products with category, subcategory, brand, model, NPR price, sale price if valid, stock status, warranty, specs, highlights, compatibility, product photo, SEO title and meta description.
3. **Repair services** — custom post type or structured pages with symptoms, supported brands, estimated price range, estimated time, diagnostic steps, warranty, FAQs and enquiry CTA.
4. **Service locations** — Itahari, Sundarharaincha, Dharan, Biratnagar and future areas with accurate service coverage, delivery notes, landmarks, location-specific questions and directions.
5. **Guides / blog posts** — article title, slug, cluster, audience, search intent, outline, body, related products/services, FAQ, article image, author, published/updated dates and canonical URL.
6. **Customer reviews** — moderated feedback records. Store a review's service, rating, display name, town/district, comment, consent, moderation status, created/updated dates, and a secure edit token/hash. Never publish a customer's contact details.
7. **Customer enquiries** — private records containing name, phone, optional email, subject, message, consent, submitted date, status and optional private media attachment. Restrict staff access and set a retention policy.
8. **Orders** — WooCommerce order records; use COD or store pickup until a Nepal payment gateway is configured and verified.

### Suggested taxonomies

- Product category: Mobile phones; Gadgets & accessories; Smart home; Power banks.
- Product subcategory: Android; iPhone; chargers & cables; earbuds & headphones; smartwatches; Bluetooth speakers; smart bulbs; smart plugs & switches; smart security; slim/portable banks; high-capacity banks; laptop-charging banks.
- Repair category: Phone; tablet; audio/speaker; toy/small gadget; TV/home entertainment; household electronics; laptop/accessory.
- Guide cluster: Mobile repair; smartphone buying; accessories; smart home; power banks.
- Enquiry status: New; replied; waiting for customer; resolved; spam.
- Review status: Pending; approved; rejected.

## 4. Global site shell and design system

### Header

- Slim utility strip: exact shop location, opening hours (`Sunday to Saturday · 8:00 AM – 7:00 PM NPT`), tap-to-call phone and WhatsApp.
- Sticky main header: logo, Himal Electronics name, concise local descriptor, site search, clear desktop navigation, accessible mobile drawer.
- Search products, repairs and guides. Display useful matching links and an enquiry fallback when there are no matches.
- Main navigation: Electronics repair; Smartphones; Accessories; Smart home; Power banks; Guides; Service areas; Help Center. Keep mobile navigation compact and keyboard accessible.

### Footer

- Shop identity, accurate Morang address, phone, email and hours.
- Shop / Repair / Company link columns, service-area links, directions, WhatsApp, Facebook, Hamrobazaar, privacy, terms, warranty and sitemap.
- Mention COD and that delivery/payment timing is confirmed per order; avoid unverified claims or an incomplete company registration number.

### Visual rules

- Primary brand blue `#1D4ED8`, deep blue `#172554`, warm orange accent `#D05F2F`, dark ink `#101828`, body `#344054`, muted `#526176`, canvas `#F5F8FC`, white card surfaces and `#E0E7F0` borders. See `site-settings.json` for the full palette.
- System sans-serif fonts; strong but restrained H1/H2 typography. Do not use novelty fonts or emoji as icons.
- Editorial/retail composition: authentic device and workshop photos, crisp product cards, white surfaces, subtle borders, generous but practical spacing, blue CTAs and small green WhatsApp actions.
- Keep motion subtle: short fade/slide reveal and button/card feedback. Respect `prefers-reduced-motion`; avoid constant glossy sweeps or movement that distracts from ordering or repair details.
- Mobile-first breakpoints. No horizontal scrolling. Body text at least 16px; buttons, menu triggers and form controls at least 44px tall; visible focus rings; accessible labels and error text.

## 5. Homepage — section order and content intent

1. **Hero:** H1 `Electronic device repair service in Itahari.` Supporting copy explains the workshop is in Sundarharaincha, Morang; name examples from phones and Bluetooth speakers through toys, gadgets and household electronics; state that inspection options and price are explained before work begins. Show the real repair-studio photo with logo/real shop caption. Primary repair quick-start form, secondary Browse products, directions and tap-to-call.
2. **Quick repair enquiry:** Device type, brand/model, issue, optional name/phone/email. Submit prepares a WhatsApp message with the selected details; tell users they review and send it. Include a direct phone route. If a secure on-site enquiry is built, show its success state separately; do not imply WhatsApp auto-sends.
3. **Local reassurance strip:** Shop hours, Sundarharaincha/Morang workshop location, price approval before work, photo-ready WhatsApp contact. Avoid fabricated review counts, ratings, certifications, guarantees or repair turnaround promises.
4. **What can be checked:** Phones/tablets; audio/speakers; toys/small gadgets; TV/home entertainment; household electronics; laptop/accessories. Explain that the shop confirms model/parts/service availability first.
5. **Common phone faults:** Cracked/black screen; fast drain/swollen battery; loose charging/weak sound; liquid damage; boot loop; privacy preparation. Each item links to an appropriate repair page or repair-policy page.
6. **Shop and service shortcuts:** Repair, smartphones, accessories, smart home, power banks, help center and location.
7. **Repair estimator:** Brand/device, model, issue and indicative price range where supported. Label every estimate as indicative and subject to inspection/parts availability. Link directly to WhatsApp with selected context.
8. **Featured products:** Show active products only; image relevant to the exact item, actual price, stock state, warranty, details and COD/order action.
9. **How repair works:** Contact/bring device → diagnosis and price approval → repair only after customer agrees → handover and applicable warranty. Clarify timing varies by part and fault.
10. **Location and service area:** Embedded Google map or accessible static map link to the exact business pin; directions, address and nearby city links. Do not represent a broad regional service area as a storefront.
11. **Recent guides:** Relevant published posts; never show empty/draft articles.
12. **FAQs:** Location, inspection/estimates, product stock, MDMS/warranty where relevant, delivery and data privacy. FAQ block at the bottom of the page.
13. **Final contact band:** WhatsApp, call, directions and Help Center.

## 6. Page and URL inventory

Preserve these public paths on WordPress wherever possible. Set each listed path as the page slug, product permalink, repair page, location post, or article permalink as indicated. If a slug must change, add a permanent 301 redirect and update internal links, canonical URL, sitemap and Search Console.

### Core pages

`/`; `/mobile-repair`; `/electronics-repair`; `/electronic-device-repair-itahari`; `/mobile-phones`; `/mobile-phones/android`; `/mobile-phones/iphone`; `/products`; `/gadgets-accessories`; `/gadgets-accessories/chargers-cables`; `/gadgets-accessories/earbuds-headphones`; `/gadgets-accessories/smartwatches`; `/gadgets-accessories/bluetooth-speakers`; `/smart-home`; `/smart-home/smart-bulbs`; `/smart-home/smart-plugs-switches`; `/smart-home/smart-security`; `/power-banks`; `/repair-price`; `/offers`; `/blog`; `/service-areas`; `/about-us`; `/contact`; `/customer-service`; `/feedback`; `/store-location`; `/delivery-pickup`; `/warranty`; `/repair-policy`; `/privacy-policy`; `/terms-and-conditions`; `/checkout` (WooCommerce checkout replacement).

### Repair pages

Use `/mobile-repair/{slug}`: `screen-replacement`; `battery-replacement`; `charging-port-repair`; `water-damage`; `software-repair`; `iphone-repair`; `android-repair`. The current structured source contains seven repair services; do not create extra repair pages unless their content and actual availability are confirmed.

### Product pages

Use WooCommerce product permalinks `/products/{slug}` or configure a WooCommerce permalink base that preserves these exact URLs:

- `redmi-note-13-8gb-256gb` — Redmi Note 13 (8GB / 256GB)
- `samsung-galaxy-a15-5g` — Samsung Galaxy A15 5G (6GB / 128GB)
- `apple-iphone-15-128gb` — Apple iPhone 15 (128GB - Official MDMS)
- `anc-wireless-earbuds-pro` — Havit / Ultima TWS Active Noise Cancelling Earbuds
- `65w-gan-fast-wall-charger` — 65W GaN Fast Dual-Port Wall Charger
- `100w-braided-usbc-cable-2m` — Rugged Braided 100W USB-C Fast Charging Cable
- `bluetooth-calling-amoled-smartwatch` — Bluetooth Calling AMOLED Smartwatch
- `outdoor-16w-waterproof-bluetooth-speaker` — Rugged Outdoor 16W Bluetooth Speaker
- `smart-wifi-rgb-led-bulb-9w` — Smart Wi-Fi RGB + Warm White LED Bulb
- `16a-smart-wifi-plug-energy-monitor` — 16A Heavy-Duty Smart Wi-Fi Plug with Energy Monitor
- `360-2k-smart-security-camera` — 360° 2K Pan-Tilt Smart Security Wi-Fi Camera
- `20000mah-22-5w-fast-charging-power-bank` — 20,000mAh 22.5W Fast Charging Power Bank
- `10000mah-ultra-slim-20w-power-bank` — 10,000mAh Ultra-Slim 20W PD Pocket Power Bank
- `65w-laptop-power-bank-20000mah` — 65W 20,000mAh Laptop & Smartphone Power Bank

The list above covers the 14 product records in the current source. Before import, reconcile every product's stock and price at launch. Never assume current prices/stock remain accurate; the WordPress product record is the editable source after migration.

### Location pages

Use `/service-areas/{slug}`: `itahari`; `sundarharaincha-morang`; `dharan`; `biratnagar`. The actual workshop is Sundarharaincha-4, Morang. For Itahari, Dharan and Biratnagar, explain the actual arrangement, distance/delivery/courier only where current and confirmed. Use `store-location` for the physical shop map and directions.

### Blog

Use `/blog/{slug}` for each current article. The present content source contains 50 guide records across mobile repair, smartphone buying, accessories, smart home and power banks. Import all published, complete articles from `data/blogs.ts`; preserve each title, slug, body, image, publication/update date, FAQ and related-content links. Do not create thin placeholder posts just to retain a count. The hub `/blog` should group articles by topic, highlight pillar guides and include search/filtering.

## 7. Product and order experience

- Product card: relevant image, brand, item name, live NPR price, optional valid compare-at price, stock state, warranty, quick details and order link.
- Product detail: gallery, price/availability, warranty, key specifications, compatibility, delivery/pickup notes, related items and FAQs.
- Cash-on-delivery request: name, contact phone, delivery or pickup choice, delivery address when needed, item and quantity, optional note, clear total and consent/next step.
- Keep WooCommerce order creation as the source of truth. Notify the shop using configured email/WordPress admin and/or a reliable messaging service. WhatsApp should be an optional convenience link with order details, not the only durable record.
- Admin can update stock, price, warranty, photo, product specifications, sale status and delivery note without code.
- eSewa/card payments are not currently confirmed in the existing site. Add only after the business has merchant credentials, the gateway is officially supported for the chosen checkout, and test/real payments plus refunds are verified.

## 8. Repair and estimator experience

- Repair landing page organizes the broad device types and explains what information to send: device type, brand/model, fault symptoms, town and optional photo.
- Individual repair pages use: H1 service + Itahari intent, concise lead, symptoms, what inspection checks, repair steps, estimate range, timing range only where sourced, warranty terms, supported brands, FAQs and clear contact CTA.
- Estimator values should be editable, marked indicative, and never promise a final price or completion time before inspection and part confirmation.
- Contact choices: enquiry form, direct call, WhatsApp and Facebook Messenger. A WhatsApp URL can prefill text but cannot silently attach a local photo. The visitor must attach/send the image in the opened WhatsApp chat, or use a secure website upload that stores the image privately and links it to the enquiry.

## 9. Help Center, contact, feedback and review moderation

### Customer Help Center

- Help topics: orders, delivery, payment, repair status, warranty, returns/repair policy and general questions.
- Enquiry form: topic, device/product/order reference, message, optional name/phone/email, optional image file, privacy consent, inline validation and success/reference state.
- Secure attachment requirements: allow a short list of image MIME types, enforce file size limits, randomize filenames, store outside public web root or use private object storage, validate on server, restrict access, set retention/deletion rules, and never include private upload links in public review pages.
- Offer WhatsApp and Facebook Messenger as additional response channels. Display the exact number/page identity and clear fallback instructions.

### Website reviews

- Review form: service received, rating 1–5, optional display name, optional town/district, comment and moderation notice.
- New reviews enter `Pending`; a manager approves/rejects/deletes from WordPress dashboard. Public display includes only approved reviews. Do not fabricate or import Google reviews as native reviews without permission/source attribution.
- Reviewer editing: use a secure one-time edit link/token, or require authenticated customer access. Do not store a plain edit secret in public content.
- Add spam protection, rate limits, input validation, privacy/retention notice and accessible keyboard controls.
- Email shop notifications after successful submission and moderation state changes. Requires outbound email/SMTP configuration; test delivery and spam placement.
- Google Business Profile reviews remain on Google. Provide a link that opens the genuine Google review listing; do not imply that website feedback is automatically a Google review.

## 10. Blog and internal linking

- Keep the existing article topics and detailed educational content, but have the shop verify technical statements, prices, policies and device compatibility before publishing.
- Each article: one clear H1, descriptive subheadings in order, practical steps, caution where needed, real relevant image, author/business attribution, published and updated dates, useful FAQ, one primary repair/product CTA and links to its parent topic plus 2–4 related pages.
- Use contextual links, not repeated exact-match anchors. Create a hub-and-spoke pattern across repair guides, product categories and town pages.
- No duplicate town pages with swapped place names. Only publish local pages that contain genuinely useful, verified local details.

## 11. SEO and search migration

- Keep existing paths/canonical URLs when feasible; create a full old-to-new URL redirect map before launch for every removed or changed route.
- One unique SEO title, meta description, canonical URL and social preview per indexable page, product and article. Preserve Search Console HTML verification file at the WordPress public root if that is the existing verification method.
- XML sitemap includes canonical indexable pages, products, repair pages, published blog posts and useful service areas. Exclude admin, search results, cart, checkout, account, API endpoints, drafts, duplicates and thin pages.
- robots.txt allows public pages and points to the production sitemap; never block essential CSS/JS/assets or accidentally noindex the public site.
- Structured data: Organization/LocalBusiness with verified NAP, opening hours, coordinates and sameAs; Product/Offer from actual product data; Article for posts; BreadcrumbList for nested pages; FAQPage only when the same visible questions and answers are present and policy allows it. Keep structured data consistent with visible text.
- Add descriptive alt text for meaningful images, image dimensions, Open Graph/social images, breadcrumbs, internal links and a useful 404 page.
- Connect Google Search Console to the WordPress production domain, submit the sitemap once it is live, inspect key URLs, and request indexing only for important changed URLs. WordPress local development URLs must not be submitted as the production property.
- Page speed: use page caching compatible with hosting, image optimization, lazy-load below-the-fold images, preload only the true hero image, minimize plugin/script count, reserve image dimensions, and check mobile Core Web Vitals after production deployment.
- Search ranking and indexing cannot be guaranteed. The migration should avoid avoidable URL/content loss and provide crawlable, useful pages.

## 12. Security, privacy and reliability

- WordPress core, theme and plugins kept supported and updated; use unique administrator login and least-privilege roles, MFA for admins, backups, malware/security monitoring, HTTPS and tested restore procedure.
- Never expose database passwords, WordPress salts, SMTP password, WooCommerce keys, gateway secrets, Supabase secret/service-role key or admin approval key in page code, source control, page builder fields or public JSON.
- If preserving Supabase as the reviews/enquiries data store, connect from a server-side WordPress plugin and use a protected server secret. Do not put Supabase secret keys in browser code. Otherwise migrate reviews and enquiries into WordPress tables with capabilities, nonces, spam protection and retention controls.
- Define privacy copy for review publication, photo uploads, order details, messaging redirects, cookies/analytics and contact-form retention. Collect only needed customer data.
- Staging and local robots/noindex settings should prevent accidental indexing; production should allow indexing only after content, canonical, redirect, sitemap and forms are reviewed.

## 13. WordPress admin screens the owner should have

- **Products:** title, category, exact current price, sale price, stock, photo, warranty, spec table, compatibility and delivery note.
- **Repairs:** service details, estimate range, time range, supported models, symptoms, diagnostic steps, warranty and FAQs.
- **Reviews:** pending queue with preview, approve, reject and delete actions; reviewer edit access handled securely.
- **Enquiries:** contact details, topic, message, private attachment, date/status, staff notes and delete/retention action.
- **Locations:** business pin, town details, delivery coverage and location FAQs.
- **Site settings:** shop phone/WhatsApp, email, exact address, opening hours, social URLs, COD/delivery statement and logo.
- **Guides:** article editor, topic cluster, related repair/product links, FAQ, meta fields, author and update date.

## 14. Launch checklist

1. Confirm the WordPress site root in LocalWP. The supplied `Local` folder is currently the application folder, not the site root.
2. Build and review on Local; import the real logo and source images into Media Library.
3. Check all prices, product stock, warranty descriptions, hours, contact links, exact map pin, service claims and social profiles with the owner.
4. Check responsive pages at phone/tablet/desktop, 200% zoom, keyboard navigation, screen-reader labels, form errors, image alternatives and reduced-motion behavior.
5. Test order submission, COD/pickup selection, customer email notifications, private image upload/access, review submission/edit/moderation, direct WhatsApp links and Facebook Messenger on desktop and mobile.
6. Enable backups, HTTPS, security controls, spam protection and SMTP. Confirm no secrets are in exported files/source code.
7. Set up production hosting and the production domain; test staging first. Use a maintenance window for DNS/domain switch if moving from Vercel.
8. Verify all redirects, canonical links, sitemap, robots, structured data and Google Search Console HTML/DNS verification.
9. Open Search Console on the production property, submit the final sitemap URL, inspect the homepage and priority repair/product URLs, and monitor coverage and Core Web Vitals.
10. Keep Vercel and the existing Next.js site available until the WordPress site passes owner review and the production migration is complete.

## 15. Current site inventory notes

The source website currently declares 23 primary SEO routes in its sitemap, seven structured repair service records, four service-area records, 50 guide records and 14 product records. Product and article counts can change, so recheck the current source-of-truth records in the website project (`data/products.ts`, `data/repairs.ts`, `data/blogs.ts`, `data/locations.ts`, and `app/sitemap.ts`) during the actual import.

Current public identity to carry forward: Himal Product and Services / Himal Electronics; Sundarharaincha-4, Morang; +977 9807391472; `himalhb2058@gmail.com`; Sunday–Saturday, 8 AM–7 PM NPT; exact map coordinates 26.6585252, 87.2875835; Facebook, Google Maps and Hamrobazaar profiles in `site-settings.json`.
