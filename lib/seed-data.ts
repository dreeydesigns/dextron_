export interface ProductItem {
  productName: string;
  productImage?: string;
  productDescription: string;
  productBenefits: string[];
  productSize: string;
}

const NUNA_PRODUCTS: ProductItem[] = [
  { productName: 'Nuna New 1-2 Diapers', productImage: '/images/nuna-diapers/size-1-2/front.webp', productDescription: 'Everyday diapers for newborns and small babies.', productBenefits: ['Soft comfort', 'Leak protection', 'Secure fit'], productSize: 'New 1-2, up to 8 kg - 38 count' },
  { productName: 'Nuna New 1-2 Diapers', productImage: '/images/nuna-diapers/size-1-2-58-count/front.webp', productDescription: 'Value-pack diapers for newborns and small babies.', productBenefits: ['Soft comfort', 'Leak protection', 'Secure fit'], productSize: 'New 1-2, up to 8 kg - 58 count' },
  { productName: 'Nuna M 3 Diapers', productImage: '/images/nuna-diapers/size-3/front.webp', productDescription: 'Comfortable protection for babies in size M.', productBenefits: ['Soft comfort', 'Leak protection', 'Secure fit'], productSize: 'M 3 - 36 count' },
  { productName: 'Nuna M 3 Diapers', productImage: '/images/nuna-diapers/size-3-48-count/front.webp', productDescription: 'Value-pack protection for babies in size M.', productBenefits: ['Soft comfort', 'Leak protection', 'Secure fit'], productSize: 'M 3 - 48 count' },
  { productName: 'Nuna M 3 Pants', productImage: '/images/nuna-diapers/size-3-pants/front.webp', productDescription: 'Pull-up pants for active babies in size M.', productBenefits: ['Easy pull-up fit', 'Leak protection', 'Soft comfort'], productSize: 'M 3 - 52 count' },
  { productName: 'Nuna L 4 Diapers', productImage: '/images/nuna-diapers/size-4/front.webp', productDescription: 'Comfortable protection for babies in size L.', productBenefits: ['Soft comfort', 'Leak protection', 'Secure fit'], productSize: 'L 4 - 46 count' },
  { productName: 'Nuna L 4 Diapers', productImage: '/images/nuna-diapers/size-4-48-count/front.webp', productDescription: 'Value-pack protection for babies in size L.', productBenefits: ['Soft comfort', 'Leak protection', 'Secure fit'], productSize: 'L 4 - 48 count' },
  { productName: 'Nuna L 4 Pants', productImage: '/images/nuna-diapers/size-4-pants/front.webp', productDescription: 'Pull-up pants for active toddlers in size L.', productBenefits: ['Easy pull-up fit', 'Leak protection', 'Soft comfort'], productSize: 'L 4 - 50 count' },
  { productName: 'Nuna Adult Diaper', productImage: '/images/nuna-diapers/adult-diaper-l-20/front.webp', productDescription: 'Adult diapers designed for dependable everyday care.', productBenefits: ['Leak protection', 'Comfortable fit', 'Easy to wear'], productSize: 'L - 20 count' },
  { productName: 'Nuna XL 5 Diapers', productImage: '/images/nuna-diapers/size-5/front.webp', productDescription: 'Comfortable protection for toddlers in size XL.', productBenefits: ['Soft comfort', 'Leak protection', 'Secure fit'], productSize: 'XL 5 - 42 count' },
  { productName: 'Nuna XL 5 Diapers', productImage: '/images/nuna-diapers/size-5-44-count/front.webp', productDescription: 'Value-pack protection for toddlers in size XL.', productBenefits: ['Soft comfort', 'Leak protection', 'Secure fit'], productSize: 'XL 5 - 44 count' },
  { productName: 'Nuna XL 5 Pants', productImage: '/images/nuna-diapers/size-5-pants/front.webp', productDescription: 'Pull-up pants for active toddlers in size XL.', productBenefits: ['Easy pull-up fit', 'Leak protection', 'Soft comfort'], productSize: 'XL 5 - 48 count' },
  { productName: 'Nuna Adult Diaper', productImage: '/images/nuna-diapers/adult-diaper-xl-20/front.webp', productDescription: 'Adult diapers designed for dependable everyday care.', productBenefits: ['Leak protection', 'Comfortable fit', 'Easy to wear'], productSize: 'XL - 20 count; waist 120-170 cm' },
  { productName: 'Nuna XXL 6 Pants', productImage: '/images/nuna-diapers/size-6-pants/front.webp', productDescription: 'Pull-up pants for growing toddlers in size XXL.', productBenefits: ['Easy pull-up fit', 'Leak protection', 'Soft comfort'], productSize: 'XXL 6 - 46 count' },
  { productName: 'Nuna XXXL 7 Pants', productImage: '/images/nuna-diapers/size-7-pants/front.webp', productDescription: 'Pull-up pants for bigger toddlers in size XXXL.', productBenefits: ['Easy pull-up fit', 'Leak protection', 'Soft comfort'], productSize: 'XXXL 7 - 38 count' },
  { productName: 'Nuna Baby Wipes', productImage: '/images/nuna-diapers/wipes/front.webp', productDescription: 'Soft baby wipes for convenient everyday clean-ups.', productBenefits: ['Soft touch', 'Convenient pack', 'Everyday care'], productSize: '80 wipes' }
];

const NUNALAC_PRODUCTS: ProductItem[] = [
  { productName: 'Nunalac+ Infant Formula Stage 1', productImage: '/images/nunalac/angle-01.webp', productDescription: 'Infant formula for the first stage of feeding.', productBenefits: ['Stage 1 formula', '0-6 months', '400g tin'], productSize: 'Stage 1, 0-6 months - 400g' },
  { productName: 'Nunalac+ Infant Formula Stage 2', productImage: '/images/nunalac/angle-02.webp', productDescription: 'Follow-on formula for babies progressing to stage two.', productBenefits: ['Stage 2 formula', '6-12 months', '400g tin'], productSize: 'Stage 2, 6-12 months - 400g' },
  { productName: 'Nuna Cereal+ Premium Rice & Milk', productImage: '/images/nunalac/angle-03.webp', productDescription: 'Rice and milk cereal for babies from six months.', productBenefits: ['6+ months', 'Easy to digest', '350g tin'], productSize: '6+ months - 350g' },
  { productName: 'Nuna Cereal+ Premium Wheat, Milk & Dates', productImage: '/images/nunalac/angle-04.webp', productDescription: 'Wheat, milk and dates cereal for babies from six months.', productBenefits: ['6+ months', 'Easy to digest', '350g tin'], productSize: '6+ months - 350g' },
  { productName: 'Nuna Cereal+ Premium Wheat, Milk & Honey', productImage: '/images/nunalac/angle-05.webp', productDescription: 'Wheat, milk and honey cereal for babies from six months.', productBenefits: ['6+ months', 'Easy to digest', '350g tin'], productSize: '6+ months - 350g' },
  { productName: 'Nuna Cereal+ Premium Wheat with Milk', productImage: '/images/nunalac/angle-06.webp', productDescription: 'Wheat and milk cereal for babies from six months.', productBenefits: ['6+ months', 'Easy to digest', '350g tin'], productSize: '6+ months - 350g' }
];

const BILAN_PRODUCTS: ProductItem[] = [
  { productName: 'Bilan Ultra Thin Size 3', productImage: '/images/bilan/size-3/front.webp', productDescription: 'Ultra-thin sanitary towels for everyday comfort and protection.', productBenefits: ['Ultra-thin design', 'Comfortable fit', '8+2 pads'], productSize: 'Size 3 - 8+2 pads' },
  { productName: 'Bilan Ultra Thin Size 4', productImage: '/images/bilan/size-4/front.webp', productDescription: 'Ultra-thin sanitary towels for everyday comfort and protection.', productBenefits: ['Ultra-thin design', 'Comfortable fit', '8+2 pads'], productSize: 'Size 4 - 8+2 pads' }
];

export interface BrandData {
  _id: string;
  name: string;
  slug: { current: string };
  tagline: string;
  category: 'baby-care' | 'infant-nutrition' | 'feminine-hygiene' | 'home-cleaning' | 'health-supplements';
  primaryColor: string;
  accentColor: string;
  lightBg: string;
  borderClass: string;
  badge: string;
  targetAudience: string;
  description: string;
  keyBenefits: string[];
  heroImage?: string;
  productImages?: string[];
  productLine: ProductItem[];
  usageInstructions?: string;
  certifications: string[];
  competitorContext?: string;
  featured: boolean;
  order: number;
}

export interface StockistData {
  _id: string;
  name: string;
  type: 'supermarket' | 'pharmacy' | 'wholesaler' | 'baby-shop' | 'online-store' | 'other';
  location: string;
  region: 'Nairobi' | 'Coast / Mombasa' | 'Rift Valley' | 'Western / Nyanza' | 'Central';
  address: string;
  phone: string;
  brandsStocked: string[];
  featured: boolean;
}

export interface TestimonialData {
  _id: string;
  customerName: string;
  customerLocation: string;
  brandName: string;
  quote: string;
  rating: number;
  customerPhoto?: string;
  approved: boolean;
  dateReceived?: string;
}

export interface FAQData {
  _id: string;
  question: string;
  answer: string;
  category: 'general' | 'nuna-diapers' | 'nunalac' | 'bilan' | 'sofresh-soclean' | 'shipping-delivery' | 'distribution-wholesale';
  order: number;
}

export interface SiteSettingsData {
  companyName: string;
  whatsappNumber: string;
  phoneNumber: string;
  secondaryPhone: string;
  email: string;
  physicalAddress: string;
  heroHeadline: string;
  heroSubheadline: string;
  facebookUrl: string;
  instagramUrl: string;
  tiktokUrl: string;
}

export const SEED_BRANDS: BrandData[] = [
  {
    _id: 'brand-nuna-diapers',
    name: 'Nuna Diapers',
    slug: { current: 'nuna-diapers' },
    tagline: 'Dry through the night. Happy in the morning.',
    category: 'baby-care',
    primaryColor: '#2563EB',
    accentColor: '#1D4ED8',
    lightBg: '#EFF6FF',
    borderClass: 'border-blue-200',
    badge: '12-Hour Leak Protection',
    targetAudience: 'Mothers aged 22–35 looking for superior overnight comfort & affordability',
    description:
      'Nuna Diapers deliver premium 12-hour leak protection at a price Kenyan families can comfortably afford. Engineered with breathable microporous layers, high-absorption Japanese polymer cores, and 360-degree elastic stretch waistbands, Nuna keeps your baby dry, rash-free, and happy all day and night.',
    keyBenefits: [
      '12-Hour Ultra-Dry Core for uninterrupted overnight sleep',
      'Ultra-soft, breathable microporous top sheet that prevents diaper rash',
      'Double elastic leak guards & 360° flexible stretch waistband',
      'Intelligent wetness indicator strip that changes color when it is time to change',
      'Unbeatable Kenyan value—premium performance competing directly with multinational brands'
    ],
    heroImage: '/images/nuna-diapers/size-1-2/front.webp',
    productImages: [
      '/images/nuna-diapers/size-1-2/front.webp',
      '/images/nuna-diapers/size-1-2/angle-01.webp',
      '/images/nuna-diapers/size-1-2/angle-03.webp'
    ],
    productLine: NUNA_PRODUCTS,
    usageInstructions:
      'Open the diaper flat with the fastening tabs at the back underneath your baby. Bring the front section up between your baby’s legs. Fasten the side tabs securely onto the front landing strip. Ensure the inner elastic leg ruffles are flared outward to prevent side leakage.',
    certifications: [
      'KEBS Quality Standardization Mark (KS EAS 96)',
      'Dermatologist Tested & Approved',
      '100% Elemental Chlorine-Free & Latex-Free'
    ],
    competitorContext: 'Engineered to outperform imported brands like Pampers and Huggies at 30% greater value for Kenyan parents.',
    featured: true,
    order: 1
  },
  {
    _id: 'brand-nunalac',
    name: 'Nunalac',
    slug: { current: 'nunalac' },
    tagline: 'Every spoonful builds them up.',
    category: 'infant-nutrition',
    primaryColor: '#EA580C',
    accentColor: '#C2410C',
    lightBg: '#FFF7ED',
    borderClass: 'border-orange-200',
    badge: 'Iron & Vitamin Fortified',
    targetAudience: 'Mothers with babies transitioning to solid weaning foods (6+ months)',
    description:
      'Nunalac infant cereal is fortified with bioavailable iron, zinc, calcium, and essential vitamins (A, C, D, and B-complex) to promote robust physical growth and cognitive brain development. With a naturally sweet taste babies love and a smooth texture gentle on tiny stomachs, Nunalac is the trusted everyday weaning meal.',
    keyBenefits: [
      'Fortified with Iron & Zinc for healthy cognitive and brain development',
      'Rich in Calcium and Vitamin D for strong bone and teeth formation',
      'Smooth, creamy texture formulated for easy digestion and zero constipation',
      'Quick 2-minute preparation with warm clean water or milk',
      'Pure Kenyan grain formulation with no artificial preservatives, colorings, or sweeteners'
    ],
    heroImage: '/images/nunalac/angle-01.webp',
    productImages: [
      '/images/nunalac/angle-01.webp',
      '/images/nunalac/angle-02.webp',
      '/images/nunalac/angle-03.webp'
    ],
    productLine: NUNALAC_PRODUCTS,
    usageInstructions:
      'Boil fresh drinking water for 5 minutes and allow it to cool to lukewarm (approx. 40°C). Pour 150ml of water or clean prepared milk into a sterilized feeding bowl. Add 5 level tablespoons of Nunalac cereal. Stir continuously until smooth and creamy. Feed baby immediately using a clean spoon.',
    certifications: [
      'KEBS Certified Infant Food Fortification (KS EAS 72)',
      'HACCP & GMP Certified Food Safety Facility',
      'Kenyan Ministry of Health Nutrition Standards Compliant'
    ],
    competitorContext: 'Offers equivalent or superior micronutrient density to Cerelac at an accessible price point for every Kenyan family.',
    featured: true,
    order: 2
  },
  {
    _id: 'brand-bilan',
    name: 'Bilan',
    slug: { current: 'bilan' },
    tagline: 'Confidence for every day.',
    category: 'feminine-hygiene',
    primaryColor: '#BE185D',
    accentColor: '#9D174D',
    lightBg: '#FDF2F8',
    borderClass: 'border-pink-200',
    badge: 'Superior Absorbency & Comfort',
    targetAudience: 'Kenyan women, students, and professionals aged 18–40',
    description:
      'Bilan sanitary towels and personal care products are engineered for maximum absorbency, discreet thinness, and all-day protection. Designed by understanding the active lives of Kenyan women, Bilan provides dependable leak barriers, breathable cotton softness, and complete confidence during every day of your period.',
    keyBenefits: [
      'Advanced Super Absorbent Polymer (SAP) core locks fluid in seconds',
      'Cottony-soft top sheet prevents chafing, moisture buildup, and irritation',
      'Wide flexible wings and 3D leak-guard channels prevent side stains',
      'Discreet, ultra-slim ergonomic silhouette invisible under clothes',
      'Reliable, dignity-first personal care priced for consistent everyday access'
    ],
    heroImage: '/images/bilan/size-3/front.webp',
    productImages: [
      '/images/bilan/size-3/front.webp',
      '/images/bilan/size-3/angle-01.webp',
      '/images/bilan/size-4/front.webp'
    ],
    productLine: BILAN_PRODUCTS,
    usageInstructions:
      'Peel off the central release backing paper and press the adhesive side firmly into the crotch of your underwear. Peel the wing papers and wrap the wings snugly around the underside of your underwear. For best hygiene, change every 4 to 6 hours.',
    certifications: [
      'KEBS Certified Sanitary Protection Standards (KS EAS 96)',
      'Dermatologically Tested on Sensitive Skin',
      'Hypoallergenic & Fragrance-Free Formula'
    ],
    competitorContext: 'Premium protection and softness comparable to Always, priced to ensure no woman ever compromises on menstrual health.',
    featured: true,
    order: 3
  },
];

export const SEED_STOCKISTS: StockistData[] = [
  {
    _id: 'stockist-1',
    name: 'Quickmart Supermarket - CBD Pioneer Branch',
    type: 'supermarket',
    location: 'Nairobi CBD',
    region: 'Nairobi',
    address: 'Pioneer Building, Moi Avenue, Nairobi',
    phone: '+254 722 000111',
    brandsStocked: ['Nuna Diapers', 'Nunalac', 'Bilan', 'SoFresh SoClean'],
    featured: true
  },
  {
    _id: 'stockist-2',
    name: 'Eastleigh Central Baby & Hygiene Mart',
    type: 'baby-shop',
    location: 'Eastleigh 1st Avenue',
    region: 'Nairobi',
    address: 'Garissa Lodge Mall, Ground Floor Shop G12, Eastleigh, Nairobi',
    phone: '+254 722 750766',
    brandsStocked: ['Nuna Diapers', 'Nunalac', 'Bilan'],
    featured: true
  },
  {
    _id: 'stockist-3',
    name: 'Goodlife Pharmacy - Westlands Square',
    type: 'pharmacy',
    location: 'Westlands',
    region: 'Nairobi',
    address: 'Westlands Square, Mpaka Road, Nairobi',
    phone: '+254 700 123456',
    brandsStocked: ['Nuna Diapers', 'Nunalac', 'Bilan'],
    featured: true
  },
  {
    _id: 'stockist-4',
    name: 'Naivas Supermarket - Mombasa Digo Road',
    type: 'supermarket',
    location: 'Mombasa Island',
    region: 'Coast / Mombasa',
    address: 'Digo Road opposite Central Post Office, Mombasa',
    phone: '+254 711 234567',
    brandsStocked: ['Nuna Diapers', 'Nunalac', 'Bilan', 'SoFresh SoClean'],
    featured: true
  },
  {
    _id: 'stockist-5',
    name: 'Nyali Family Chemist & Baby Store',
    type: 'pharmacy',
    location: 'Nyali, Mombasa',
    region: 'Coast / Mombasa',
    address: 'Links Road, Next to City Mall, Nyali',
    phone: '+254 722 345678',
    brandsStocked: ['Nuna Diapers', 'Nunalac', 'Bilan'],
    featured: false
  },
  {
    _id: 'stockist-6',
    name: 'Gilani’s Supermarket & Wholesalers',
    type: 'wholesaler',
    location: 'Nakuru Town',
    region: 'Rift Valley',
    address: 'Club Road, Nakuru CBD',
    phone: '+254 733 456789',
    brandsStocked: ['Nuna Diapers', 'Nunalac', 'Bilan', 'SoFresh SoClean'],
    featured: true
  },
  {
    _id: 'stockist-7',
    name: 'Eldoret Wholesale Distributors Ltd',
    type: 'wholesaler',
    location: 'Eldoret CBD',
    region: 'Rift Valley',
    address: 'Uganda Road, Near Central Market, Eldoret',
    phone: '+254 720 567890',
    brandsStocked: ['Nuna Diapers', 'Nunalac', 'Bilan', 'SoFresh SoClean'],
    featured: false
  },
  {
    _id: 'stockist-8',
    name: 'Khetias Supermarket - Kisumu Mega',
    type: 'supermarket',
    location: 'Kisumu CBD',
    region: 'Western / Nyanza',
    address: 'Oginga Odinga Street, Kisumu',
    phone: '+254 721 678901',
    brandsStocked: ['Nuna Diapers', 'Nunalac', 'Bilan', 'SoFresh SoClean'],
    featured: true
  },
  {
    _id: 'stockist-9',
    name: 'Thika Greens Pharmacy & Care Shop',
    type: 'pharmacy',
    location: 'Thika Town',
    region: 'Central',
    address: 'Commercial Street, Thika CBD',
    phone: '+254 722 789012',
    brandsStocked: ['Nuna Diapers', 'Nunalac', 'Bilan'],
    featured: false
  },
  {
    _id: 'stockist-10',
    name: 'Mama Ngina Wholesalers',
    type: 'wholesaler',
    location: 'Machakos Town',
    region: 'Central',
    address: 'Machakos CBD Market Road',
    phone: '+254 724 890123',
    brandsStocked: ['Nuna Diapers', 'Nunalac', 'Bilan', 'SoFresh SoClean'],
    featured: false
  }
];

export const SEED_TESTIMONIALS: TestimonialData[] = [
  {
    _id: 'test-1',
    customerName: 'Faith Wanjiku',
    customerLocation: 'Nairobi (Ruaka)',
    brandName: 'Nuna Diapers',
    quote:
      'I was spending too much on imported diapers until my friend introduced me to Nuna. My 7-month-old baby girl sleeps through the entire night without a single leak or diaper rash. As a Kenyan mother, I am so proud of this quality!',
    rating: 5,
    customerPhoto: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80',
    approved: true,
    dateReceived: '2026-07-14'
  },
  {
    _id: 'test-2',
    customerName: 'Amina Hassan',
    customerLocation: 'Mombasa (Nyali)',
    brandName: 'Nunalac',
    quote:
      'Weaning my twin boys was stressful until we tried Nunalac Rice & Mixed Fruits. They genuinely finish every spoonful without fuss. Knowing it is fortified with iron and vitamins gives me total peace of mind.',
    rating: 5,
    customerPhoto: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    approved: true,
    dateReceived: '2026-07-28'
  },
  {
    _id: 'test-3',
    customerName: 'Brenda Chebet',
    customerLocation: 'Nakuru Town',
    brandName: 'Bilan',
    quote:
      'Bilan pads give me total security during long working shifts. They are ultra-slim, soft, and never cause itching like other brands. The affordability without sacrificing comfort is unmatched.',
    rating: 5,
    customerPhoto: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
    approved: true,
    dateReceived: '2026-08-05'
  },
  {
    _id: 'test-4',
    customerName: 'Peter Kamau (Retail Wholesaler)',
    customerLocation: 'Eastleigh, Nairobi',
    brandName: 'Dextron Enterprise',
    quote:
      'Dextron has been our most dependable FMCG partner this year. Nuna Diapers and SoFresh dishwash fly off the shelves quickly. Their delivery turnaround and distributor profit margins are top tier.',
    rating: 5,
    approved: true,
    dateReceived: '2026-08-18'
  }
];

export const SEED_FAQS: FAQData[] = [
  {
    _id: 'faq-1',
    question: 'Where can I purchase Dextron products across Kenya?',
    answer:
      'Our products are widely available at major supermarkets (Naivas, Quickmart, Khetias, Gilanis), neighborhood baby shops, and licensed pharmacies throughout Nairobi, Mombasa, Nakuru, Kisumu, Eldoret, and other regional centers. You can also order directly via our WhatsApp line (+254 722 750766), and our team will connect you immediately to your nearest stockist or dispatch direct delivery.',
    category: 'general',
    order: 1
  },
  {
    _id: 'faq-2',
    question: 'Are Dextron products certified by the Kenya Bureau of Standards (KEBS)?',
    answer:
      'Yes, 100%. Every single product line manufactured and distributed by Dextron Enterprise—including Nuna Diapers (KS EAS 96), Nunalac Infant Cereal (KS EAS 72), Bilan Sanitary Towels, and SoFresh Cleaning Essentials—fully complies with KEBS standardization marks and stringent safety regulations.',
    category: 'general',
    order: 2
  },
  {
    _id: 'faq-3',
    question: 'How do Nuna Diapers prevent diaper rash and nighttime leaks?',
    answer:
      'Nuna Diapers utilize a cutting-edge Japanese Super Absorbent Polymer (SAP) core paired with a microporous, hypoallergenic breathable top sheet. This rapidly channels liquids away from your baby’s delicate skin within seconds and locks moisture in for up to 12 continuous hours, keeping the surface completely dry throughout the night.',
    category: 'nuna-diapers',
    order: 3
  },
  {
    _id: 'faq-4',
    question: 'At what age can I introduce Nunalac cereal to my baby?',
    answer:
      'Nunalac is specially formulated for infants aged 6 months and older who are beginning their solid weaning transition. Nunalac is fortified with iron for brain development and essential vitamins to nourish healthy growth. For babies under 6 months, exclusive breastfeeding is always recommended.',
    category: 'nunalac',
    order: 4
  },
  {
    _id: 'faq-5',
    question: 'How do I become an authorized Dextron wholesale stockist or distributor?',
    answer:
      'We welcome retail stockists, supermarket chains, pharmacies, and regional wholesalers! We offer competitive wholesale trade discounts, protected distribution zones, marketing collaterals, and reliable weekly restocking. Visit our "Become a Distributor" page or send an inquiry directly via WhatsApp to +254 722 750766.',
    category: 'distribution-wholesale',
    order: 5
  },
  {
    _id: 'faq-6',
    question: 'Do you offer doorstep or business deliveries for bulk orders?',
    answer:
      'Yes! We arrange swift delivery across Nairobi and countrywide dispatch via reputable courier partners (Fargo Courier, Wells Fargo, G4S, and regional parcel matatus) for wholesale and retail carton orders.',
    category: 'shipping-delivery',
    order: 6
  },
  {
    _id: 'faq-7',
    question: 'What makes Bilan sanitary pads suitable for sensitive skin?',
    answer:
      'Bilan pads feature an ultra-soft non-woven cotton cover that is completely free of harsh artificial perfumes, chlorine bleaches, and synthetic dyes. The breathable bottom barrier allows air circulation while preventing any moisture or odor from escaping.',
    category: 'bilan',
    order: 7
  },
  {
    _id: 'faq-8',
    question: 'Can SoFresh SoClean dishwashing liquid be used on baby feeding bottles?',
    answer:
      'Yes! SoFresh dishwashing liquid contains food-grade biodegradable cleaning agents that rinse off cleanly with zero chemical residue. Always rinse thoroughly with clean running water and sterilize feeding bottles as recommended.',
    category: 'sofresh-soclean',
    order: 8
  }
];

export const SEED_SITE_SETTINGS: SiteSettingsData = {
  companyName: 'Dextron Enterprise',
  whatsappNumber: '+254722750766',
  phoneNumber: '+254700546792',
  secondaryPhone: '+254722750766',
  email: 'info@dextron.co.ke',
  physicalAddress: 'Industrial Area / CBD Logistics Hub, Nairobi, Kenya',
  heroHeadline: 'Nurturing Kenyan Families with Quality Care',
  heroSubheadline:
    'Premium baby diapers, fortified infant nutrition, feminine hygiene, and high-performance household cleaning—proudly made for Kenyan families, priced for real life.',
  facebookUrl: 'https://facebook.com/dextronkenya',
  instagramUrl: 'https://instagram.com/dextronkenya',
  tiktokUrl: 'https://tiktok.com/@dextronkenya'
};
