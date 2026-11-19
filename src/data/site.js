/*
  Shared site content. Pages and layout components read from here so that
  contact details, navigation and repeated content live in one place.

  Fields prefixed `mobile` (or `short` / `brief`) hold the tighter copy used by the
  phone layout from src/Reference/Minaal mobile.
*/

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/clients", label: "Clients" },
  { to: "/contact", label: "Contact" },
];

// Temporarily hidden: set to true to bring the IT Services links back into the navigation.
// The /it page itself stays live.
export const SHOW_IT_SERVICES = false;

export const CONTACT = {
  phone: "+91 98250 76797",
  phoneHref: "tel:+919825076797",
  emails: ["info@minaal.co.in", "sales@minaal.co.in"],
  address: ["317, City Shop Complex,", "Yagnik Rd., Rajkot,", "Gujarat, India"],
  serviceArea: "Serving Rajkot & Entire Saurashtra Region",
  hours: ["Monday – Saturday: 9:00 AM – 7:00 PM", "Sunday: By Appointment Only"],
};

export const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/minaal.ad/", label: "Facebook" },
  { href: "https://www.instagram.com/minaal.ad/", label: "Instagram" },
  { href: "https://www.linkedin.com/company/minaal-advertising/", label: "LinkedIn" },
  { href: "https://x.com/minaal_advertising", label: "X" },
];

export const FOOTER_LINKS = [
  { to: "/about", label: "About us" },
  { to: "/services", label: "Our services" },
  { to: "/portfolio", label: "Selected campaigns" },
  { to: "/clients", label: "Our clients" },
];

// Site photography — every image on the site comes from public/hero.
export const PHOTOS = {
  billboardNight: "/hero/Illuminated Gujarati Jewelry Billboard at Night.png",
  roadsideKiosks: "/hero/Gujarat Roadside Billboards in Traffic.png",
  streetDisplays: "/hero/Rajkot Street Jewelry Billboard Scene.png",
  cityHoarding: "/hero/Sunlit Indian Street Intersection with Gandhi Statue.png",
  jadeBlue: "/hero/jadeblue.png",
};

// Home hero slideshow — every photo above, shown in random order.
export const HERO_IMAGES = Object.values(PHOTOS);

export const HOME_STATS = [
  { value: "200+", label: "Happy clients" },
  { value: "100+", label: "Active sites" },
  { value: "25+", label: "Years of expertise" },
  { value: "5M+", label: "Daily reach" },
];

export const ABOUT_STATS = [
  { value: "50,000+ sq. ft.", label: "Active display", mobileValue: "50k+", mobileLabel: "Display sq. ft." },
  { value: "500+", label: "Clients served" },
  { value: "25+", label: "Years of experience", mobileLabel: "Years of expertise" },
];

export const MEDIA_CHANNELS = [
  {
    image: PHOTOS.billboardNight,
    title: "Billboard advertising",
    text: "Premium visibility at scale.",
    mobileText: "Highways. City centres. Everyday impact.",
    to: "/services",
  },
  {
    image: PHOTOS.roadsideKiosks,
    title: "Transit & street media",
    mobileTitle: "Transit & street",
    text: "A presence in the everyday.",
    to: "/services",
  },
  {
    image: PHOTOS.streetDisplays,
    title: "Digital out-of-home",
    mobileTitle: "Digital displays",
    text: "Dynamic media. Lasting impact.",
    to: "/services",
  },
];

export const MEDIA_FORMATS = [
  { title: "Hoarding", text: "500+ strategic sites across Rajkot & Saurashtra" },
  { title: "Kiosk", text: "200+ high-visibility kiosks in prime locations" },
  { title: "Bus shelter", text: "150+ bus shelters across Gujarat" },
  { title: "Unipole", text: "25+ unipole sites in high-traffic corridors" },
];

export const WHY_REASONS = [
  {
    title: "Complete coverage",
    text: "Extensive network across Rajkot, Jamnagar, Junagadh, and all major Saurashtra cities.",
  },
  {
    title: "Best value",
    text: "Competitive pricing with transparent costs and flexible payment plans.",
  },
  {
    title: "Creative excellence",
    text: "In-house design team creating compelling campaigns that convert.",
  },
  { title: "Full service", text: "From concept to installation — we handle everything." },
  {
    title: "Data driven",
    text: "Strategic placement based on traffic analysis and demographic data.",
  },
  {
    title: "Trusted partner",
    text: "25+ years serving 200+ satisfied clients across industries.",
  },
];

// Condensed "Why Minaal" list for the phone layout.
export const MOBILE_WHY = [
  { title: "Saurashtra-wide coverage" },
  { title: "Creative to installation" },
  { title: "25+ years of experience" },
];

// `text` is the long form (About), `short` the one-liner (Services), `brief` the phone copy.
export const PROCESS_STEPS = [
  {
    title: "Consultation",
    text: "We understand your brand, goals, target audience, and budget to create a tailored strategy.",
    short: "Built around your goals.",
    brief: "Goals, audience and budget.",
  },
  {
    title: "Site selection",
    text: "Strategic location identification based on traffic data, demographics, and campaign objectives.",
    short: "Local knowledge. Strategic reach.",
    brief: "Traffic-led location planning.",
  },
  {
    title: "Creative design",
    text: "Our team creates compelling visuals optimized for outdoor viewing and brand impact.",
    short: "Made for the outdoor canvas.",
    brief: "Made for outdoor viewing.",
  },
  {
    title: "Launch & monitor",
    text: "Professional installation, ongoing maintenance, and campaign performance monitoring.",
    short: "Installation to ongoing maintenance.",
    brief: "Installation, upkeep and monitoring.",
  },
];

export const FEATURED_SERVICE = {
  image: PHOTOS.billboardNight,
  eyebrow: "01 / Large-format media",
  title: "Billboard advertising",
  description:
    "Large-format displays in premium locations across highways and city centers for maximum brand visibility.",
  highlight: "500+ strategic sites across Rajkot & Saurashtra",
  mobileText: "Premium city and highway visibility.",
  tags: ["Billboard", "Highway", "Illuminated"],
  images: [PHOTOS.billboardNight, PHOTOS.cityHoarding, PHOTOS.jadeBlue],
};

export const SERVICES = [
  {
    image: PHOTOS.roadsideKiosks,
    eyebrow: "02 / Transit & street",
    title: "Transit advertising",
    mobileTitle: "Transit & street media",
    description:
      "Mobile billboards on buses and public transport for dynamic city-wide exposure.",
    mobileText: "Bus shelters and high-visibility city placements.",
    mobileCard: true,
    tags: ["Transit", "Bus", "Mobile"],
    images: [PHOTOS.roadsideKiosks],
  },
  {
    image: PHOTOS.cityHoarding,
    eyebrow: "03 / Point of presence",
    title: "Retail branding",
    description:
      "Point-of-sale displays and retail environment branding to capture customer attention.",
    mobileText: "Capture attention at the point of sale.",
    tags: ["Retail", "Branding", "POS"],
    images: [PHOTOS.cityHoarding, PHOTOS.jadeBlue],
  },
  {
    image: PHOTOS.streetDisplays,
    eyebrow: "04 / Digital • Most popular",
    title: "Digital LED displays",
    description:
      "Dynamic digital displays that bring your brand to life in high-visibility locations.",
    mobileText: "Dynamic content. High-traffic locations.",
    mobileCard: true,
    tags: ["Digital", "LED", "Video"],
    images: [PHOTOS.streetDisplays],
  },
  {
    image: PHOTOS.roadsideKiosks,
    eyebrow: "05 / Street • Most popular",
    title: "Divider kiosks",
    description:
      "Street-level visibility along key city roads, keeping your brand part of the everyday journey.",
    mobileText: "Street-level visibility on key city roads.",
    tags: ["Kiosk", "Divider", "Budget"],
    images: [PHOTOS.roadsideKiosks, PHOTOS.streetDisplays],
  },
];

export const PORTFOLIO_FILTERS = [
  { id: "all", label: "All projects" },
  { id: "billboard", label: "Billboards" },
  { id: "kiosk", label: "Kiosk" },
  { id: "unipole", label: "Unipole" },
  { id: "kiosk-divider", label: "Kiosk divider" },
];

export const PORTFOLIO_FILTERS_MOBILE = [
  { id: "all", label: "All work" },
  { id: "billboard", label: "Billboards" },
  { id: "digital", label: "Digital" },
];

const KORA_IMAGES = Array.from(
  { length: 26 },
  (_, i) => `/campaigns/kora/rajkot-hoarding-advertising-kora-${i + 3}.jpeg`
);

export const CAMPAIGNS = [
  {
    brand: "GOPAL",
    brandSub: "Namkeen",
    eyebrow: "Highway billboard / FMCG campaign",
    title: "Gopal Namkeen Campaign",
    description: "50+ premium locations across Rajkot-Ahmedabad corridor",
    shortTitle: "Gopal Namkeen",
    shortDescription: "50+ locations · Rajkot–Ahmedabad",
    tags: ["Billboard", "Highway", "Kiosk"],
    categories: ["billboard", "kiosk"],
    images: ["/campaigns/gopal/gopal1.jpeg"],
  },
  {
    brand: "KORA",
    brandSub: "By Nilesh Mitesh",
    eyebrow: "Advertisement in city / Fashion brand",
    title: "Kora By Nilesh Mitesh Campaign",
    description: "Full wraps on 50+ buses across Rajkot city",
    shortTitle: "Kora By Nilesh Mitesh",
    shortDescription: "50+ buses · Rajkot city",
    tags: ["Billboard"],
    categories: ["billboard"],
    highlight: true,
    images: KORA_IMAGES,
  },
  {
    brand: "JADE BLUE",
    brandSub: "Fashion",
    eyebrow: "Premium hoardings / Fashion brand",
    title: "Jade Blue Fashion Campaign",
    description: "Prime city center LED screens with video content",
    shortTitle: "Jade Blue Fashion",
    shortDescription: "Outdoor brand presence in Rajkot.",
    tags: ["Digital", "LED"],
    categories: ["billboard", "digital"],
    // Shown as the photo-led "Featured campaign" in the phone layout
    featured: true,
    featuredImage: PHOTOS.jadeBlue,
    images: [PHOTOS.jadeBlue],
  },
  {
    brand: "RADHIKA",
    brandSub: "Jewellery",
    eyebrow: "City wide presence / Jewellery brand",
    title: "Radhika Jewellery Campaign",
    description: "Strategic placements near iconic places around Rajkot City",
    shortTitle: "Radhika Jewellery",
    shortDescription: "Iconic locations · Rajkot",
    tags: ["Billboard", "City center"],
    categories: ["billboard"],
    images: [PHOTOS.billboardNight, PHOTOS.streetDisplays],
  },
];

export const INDUSTRIES = [
  { id: "fmcg", label: "FMCG & Food" },
  { id: "automotive", label: "Automotive" },
  { id: "electronics", label: "Electronics & Telecom" },
  { id: "education", label: "Education" },
  { id: "realestate", label: "Real Estate" },
  { id: "lifestyle", label: "Lifestyle & Hospitality" },
  { id: "jewellery", label: "Jewellery & Fashion" },
  { id: "industrial", label: "Industrial" },
];

// `onDark` marks white logos that need a dark frame to be visible.
export const CLIENTS = [
  { src: "/clients/amul.webp", name: "Amul", industry: "fmcg" },
  { src: "/clients/adani-spices-logo.webp", name: "Adani Spices", industry: "fmcg" },
  { src: "/clients/gopalNamkeen.png", name: "Gopal Namkeen", industry: "fmcg" },
  { src: "/clients/hathi-masala.avif", name: "Hathi Masala", industry: "fmcg", onDark: true },
  { src: "/clients/nilam-tea.avif", name: "Neelam Tea", industry: "fmcg" },
  { src: "/clients/umiya-tea.svg", name: "Umiya Tea", industry: "fmcg" },
  { src: "/clients/wagh-bakri-tea.svg", name: "Wagh Bakri Tea Group", industry: "fmcg" },
  { src: "/clients/thums-up.png", name: "Thums Up", industry: "fmcg" },
  { src: "/clients/equity-hyundai.jpg", name: "Hyundai", industry: "automotive" },
  { src: "/clients/kia.jpg", name: "Kia", industry: "automotive" },
  { src: "/clients/renault.jpeg", name: "Renault", industry: "automotive" },
  { src: "/clients/hero.svg", name: "Hero", industry: "automotive" },
  { src: "/clients/tata-motors.svg", name: "Tata Motors", industry: "automotive" },
  { src: "/clients/lg.png", name: "LG", industry: "electronics" },
  { src: "/clients/mitsubishi-ac.png", name: "Mitsubishi AC", industry: "electronics" },
  { src: "/clients/oneplus.png", name: "OnePlus", industry: "electronics" },
  { src: "/clients/oppo.png", name: "Oppo", industry: "electronics" },
  { src: "/clients/vivo.png", name: "Vivo", industry: "electronics" },
  { src: "/clients/poojara-telecom.webp", name: "Poojara Telecom", industry: "electronics" },
  { src: "/clients/allen.png", name: "Allen", industry: "education" },
  { src: "/clients/atmiya-university.png", name: "Atmiya University", industry: "education" },
  { src: "/clients/marwadi-university.jpeg", name: "Marwadi University", industry: "education" },
  { src: "/clients/dholakiya-schools.png", name: "Dholakiya Schools", industry: "education" },
  { src: "/clients/gandhi-school.png", name: "Gandhi School", industry: "education" },
  { src: "/clients/innovative-school.png", name: "Innovative School", industry: "education" },
  { src: "/clients/modi-school.png", name: "Modi School", industry: "education" },
  { src: "/clients/premier-schools.png", name: "Premier Schools", industry: "education" },
  { src: "/clients/skp-school.png", name: "SKP School", industry: "education" },
  { src: "/clients/udaan-school.png", name: "Udaan School", industry: "education" },
  { src: "/clients/shyamal-builders.svg", name: "Shyamal Group", industry: "realestate" },
  { src: "/clients/gol-builders.png", name: "GOL Builders", industry: "realestate" },
  { src: "/clients/dilip-ladani-associates.webp", name: "Dilip Ladani Associates", industry: "realestate" },
  { src: "/clients/shilpan.svg", name: "Shilpan", industry: "realestate" },
  { src: "/clients/savan.png", name: "Savan", industry: "realestate" },
  { src: "/clients/cosmoplex.png", name: "Cosmoplex", industry: "lifestyle" },
  { src: "/clients/emerald-club.png", name: "The Emerald Club", industry: "lifestyle", onDark: true },
  { src: "/clients/radhika-jewellers.png", name: "Radhika Jewellers", industry: "jewellery" },
  { src: "/clients/manish-bhindi-jewels.jpg", name: "Manish Bhindi Jewels", industry: "jewellery" },
  { src: "/clients/shilpa-lifestyle.png", name: "Shilpa Lifestyle", industry: "jewellery" },
  { src: "/clients/blue-Club.png", name: "Blue Club", industry: "jewellery" },
  { src: "/clients/jadeblue.webp", name: "Jade Blue", industry: "jewellery" },
  { src: "/clients/Greenfibre.webp", name: "Green Fibre", industry: "jewellery" },
  { src: "/clients/kora.png", name: "Kora", industry: "jewellery" },
  { src: "/clients/regal-shoes.avif", name: "Regal Shoes", industry: "industrial" },
  { src: "/clients/appollo_steel.png", name: "Apollo Steel", industry: "industrial" },
  { src: "/clients/kich-india.png", name: "Kich India", industry: "industrial" },
];

export const SERVICE_OPTIONS = [
  { value: "billboard", label: "Billboard Advertising" },
  { value: "transit", label: "Transit Advertising" },
  { value: "retail", label: "Retail Branding" },
  { value: "digital", label: "Digital LED Displays" },
  { value: "kiosk", label: "Divider Kiosks" },
  { value: "creative", label: "Creative Design" },
  { value: "consultation", label: "General Consultation" },
];
