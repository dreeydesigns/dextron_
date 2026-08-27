import React from 'react';
import Link from 'next/link';
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Star,
  MapPin,
  Store,
  Sparkles,
  Award,
  CheckCircle2,
  Phone,
} from 'lucide-react';
import { getBrands, getTestimonials, getSiteSettings } from '@/lib/sanity';
import BrandCard from '@/components/BrandCard';
import TrustBadges from '@/components/TrustBadges';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default async function HomePage() {
  const brands = await getBrands();
  const testimonials = await getTestimonials();
  const settings = await getSiteSettings();

  const featuredBrands = brands.filter((b) => b.featured);

  return (
    <main className="bg-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-blue-50/60 via-white to-gray-50/50 pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-dextron-blue text-xs sm:text-sm font-bold border border-blue-200">
                <Sparkles className="w-4 h-4 text-dextron-blue" />
                <span>Karibu Dextron — Proudly Kenyan FMCG Manufacturer</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
                Nurturing Kenyan Families with{' '}
                <span className="bg-gradient-to-r from-dextron-blue via-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  Quality Care
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {settings.heroSubheadline ||
                  'Premium baby diapers, fortified infant cereals, feminine hygiene pads, and household detergents — made for Kenyan families, priced for real life.'}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={getWhatsAppLink('Hello Dextron Enterprise! I would like to order products.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base shadow-lg hover:shadow-emerald-200 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Order on WhatsApp</span>
                </a>

                <Link
                  href="#brands"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-gray-100 text-gray-900 font-bold text-base border border-gray-300 shadow-sm transition"
                >
                  <span>Explore Our 4 Brands</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm font-semibold text-gray-600">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  KEBS Certified Quality
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-dextron-blue" />
                  Nairobi Manufactured
                </span>
                <span className="flex items-center gap-1.5">
                  <Store className="w-4 h-4 text-amber-600" />
                  500+ Stockists Nationwide
                </span>
              </div>
            </div>

            {/* Right Hero Graphic Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Visual Card Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {/* Card 1: Nuna */}
                  <Link
                    href="/brands/nuna-diapers"
                    className="group p-3.5 sm:p-4 rounded-3xl bg-blue-50/80 border border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-md transition-all space-y-2 block"
                  >
                    <div className="h-28 sm:h-32 w-full rounded-2xl bg-white p-2 flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/Nuna_Daipers_Front.jpg"
                        alt="Nuna Diapers"
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-blue-900 text-sm">Nuna Diapers</h4>
                      <p className="text-[11px] text-blue-700 font-medium">12h Leak Protection</p>
                    </div>
                  </Link>

                  {/* Card 2: Nunalac */}
                  <Link
                    href="/brands/nunalac"
                    className="group p-3.5 sm:p-4 rounded-3xl bg-amber-50/80 border border-amber-100 hover:border-amber-300 shadow-sm hover:shadow-md transition-all space-y-2 block"
                  >
                    <div className="h-28 sm:h-32 w-full rounded-2xl bg-white p-2 flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/Nunalac_Infant_formula_single.webp"
                        alt="Nunalac Infant Cereal"
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-amber-900 text-sm">Nunalac Cereal</h4>
                      <p className="text-[11px] text-amber-700 font-medium">Iron & Vitamin Fortified</p>
                    </div>
                  </Link>

                  {/* Card 3: Bilan */}
                  <Link
                    href="/brands/bilan"
                    className="group p-3.5 sm:p-4 rounded-3xl bg-rose-50/80 border border-rose-100 hover:border-rose-300 shadow-sm hover:shadow-md transition-all space-y-2 block"
                  >
                    <div className="h-28 sm:h-32 w-full rounded-2xl bg-white p-2 flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/BilanAlwaysRegular.webp"
                        alt="Bilan Sanitary Pads"
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-rose-900 text-sm">Bilan Pads</h4>
                      <p className="text-[11px] text-rose-700 font-medium">Superior Comfort</p>
                    </div>
                  </Link>

                  {/* Card 4: SoFresh */}
                  <Link
                    href="/brands/sofresh-soclean"
                    className="group p-3.5 sm:p-4 rounded-3xl bg-emerald-50/80 border border-emerald-100 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all space-y-2 block"
                  >
                    <div className="h-28 sm:h-32 w-full rounded-2xl bg-white p-2 flex items-center justify-center overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80"
                        alt="SoFresh Cleaners"
                        className="max-h-full max-w-full object-cover rounded-xl group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-emerald-900 text-sm">SoFresh Home</h4>
                      <p className="text-[11px] text-emerald-700 font-medium">Tough on Grease</p>
                    </div>
                  </Link>
                </div>

                {/* Floating Testimonial Pill */}
                <div className="mt-4 p-4 rounded-2xl bg-white border border-gray-200 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-700 font-bold text-sm">
                    5★
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">
                      &quot;Affordable, dependable, and trusted by mothers.&quot;
                    </p>
                    <p className="text-[11px] text-gray-500">Over 50,000+ happy Kenyan households</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BADGES */}
      <TrustBadges />

      {/* 3. BRANDS SECTION */}
      <section id="brands" className="py-20 bg-gray-50/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-dextron-blue/10 text-dextron-blue uppercase tracking-wider">
              The Dextron House of Brands
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              Essential Care for Every Kenyan Family
            </h2>
            <p className="text-base text-gray-600">
              Each brand in our portfolio is engineered to solve everyday family needs with proven quality,
              certified safety, and honest, accessible pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredBrands.map((brand) => (
              <BrandCard key={brand._id} brand={brand} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/brands"
              className="inline-flex items-center gap-2 text-sm font-bold text-dextron-blue hover:text-dextron-blue-dark transition"
            >
              <span>Explore all specifications, pack sizes & variants</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY DEXTRON VS MULTINATIONALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                The Dextron Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                Why Kenyan Families & Stockists Switch to Dextron
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                For years, Kenyan families had to choose between paying exorbitant prices for imported
                multinational brands or settling for inferior alternatives. Dextron was founded to change that.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">30% to 40% More Value</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                      Direct manufacturing in Nairobi removes foreign import tariffs, passing major savings directly to Kenyan shoppers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Zero Compromise on Material Quality</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                      We use premium Japanese absorbent polymers and hypoallergenic fibers tested rigorously to KEBS standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Dependable Retail Restocking</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                      No shipping delays or stockouts. Our distribution warehouse supplies retailers across Kenya with guaranteed weekly stock.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-dextron-blue hover:underline"
                >
                  <span>Read our full manufacturing story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Card / Visual */}
            <div className="lg:col-span-6">
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-dextron-blue-dark text-white rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-emerald-300">
                  <Award className="w-4 h-4" />
                  <span>Certified Standards KS EAS 96 & 72</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  &quot;Quality should be a right for every Kenyan mother, not a luxury.&quot;
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Dextron Enterprise produces goods that protect your loved ones with world-class standards while keeping your household budget intact.
                </p>

                <div className="pt-4 border-t border-slate-700 grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-white">500+</span>
                    <p className="text-xs text-gray-400 mt-0.5">Supermarkets & Retail Partners</p>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-emerald-400">100%</span>
                    <p className="text-xs text-gray-400 mt-0.5">KEBS Certified Products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      {testimonials.length > 0 && (
        <section className="py-20 bg-gray-50/80 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 uppercase tracking-wider">
                Customer Voices
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                Trusted by Kenyan Mothers & Stockists
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Real feedback from everyday families and retail partners across Nairobi, Mombasa, Nakuru, and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((test) => (
                <div
                  key={test._id}
                  className="flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-sm hover:shadow-md transition"
                >
                  <div className="space-y-4">
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(test.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>

                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                      &quot;{test.quote}&quot;
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-dextron-blue font-bold flex items-center justify-center text-sm flex-shrink-0">
                      {test.customerName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{test.customerName}</h4>
                      <p className="text-xs text-gray-500">
                        {test.customerLocation} • <span className="font-semibold text-dextron-blue">{test.brandName}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. WHERE TO BUY TEASER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 via-dextron-blue to-blue-800 text-white rounded-3xl p-8 sm:p-14 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-blue-100">
                  Countrywide Availability
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                  Find Dextron Products at Your Favorite Supermarket or Chemist
                </h2>
                <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-xl">
                  Available at Quickmart, Naivas, Gilanis, Khetias, local pharmacies, and baby shops across
                  Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and more.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/where-to-buy"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-dextron-blue font-bold text-sm shadow-md hover:bg-gray-100 transition"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>View Stockist Directory</span>
                  </Link>

                  <a
                    href={getWhatsAppLink('Hello Dextron! Please tell me the nearest shop stocking your products.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Ask on WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-sm space-y-3">
                <h4 className="font-bold text-base text-white">Wholesale / Trade Inquiries</h4>
                <p className="text-xs sm:text-sm text-blue-100">
                  Are you a supermarket owner, pharmacist, or regional wholesaler interested in distributing Dextron products?
                </p>
                <Link
                  href="/distributors"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-white pt-1"
                >
                  <span>Apply for Wholesale Distribution Terms</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HIGH CONVERTING WHATSAPP CTA BANNER */}
      <section className="py-16 bg-slate-950 text-white border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            Instant Customer Care & Ordering
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Ready to Order or Inquire?
          </h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">
            Our sales team in Nairobi is ready to connect you with the nearest stockist or arrange direct doorstep dispatch for cartons and retail packs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={getWhatsAppLink('Hello Dextron Enterprise! I am ready to order.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat With Us on WhatsApp (+254 722 750766)</span>
            </a>
            <a
              href="tel:+254722750766"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-gray-300 font-bold text-base border border-slate-800 transition"
            >
              <Phone className="w-4 h-4 text-dextron-blue" />
              <span>Call +254 722 750766</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
