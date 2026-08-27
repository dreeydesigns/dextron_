import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  HelpCircle,
  Sparkles,
  BookOpen,
  ArrowRight,
  Store,
} from 'lucide-react';
import { getBrandBySlug, getBrands, getFAQs } from '@/lib/sanity';
import ProductCard from '@/components/ProductCard';
import { getBrandOrderLink, getWhatsAppLink } from '@/lib/whatsapp';

interface BrandPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const brands = await getBrands();
  return brands.map((b) => ({
    slug: b.slug.current,
  }));
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const brand = await getBrandBySlug(params.slug);
  if (!brand) {
    return {
      title: 'Brand Not Found',
    };
  }

  return {
    title: `${brand.name} | Dextron Enterprise Kenya`,
    description: `${brand.tagline} — ${brand.description}`,
    openGraph: {
      title: `${brand.name} — ${brand.tagline}`,
      description: brand.description,
    },
  };
}

export default async function BrandDetailPage({ params }: BrandPageProps) {
  const brand = await getBrandBySlug(params.slug);
  if (!brand) {
    notFound();
  }

  const allFaqs = await getFAQs(brand.slug.current);

  return (
    <main className="bg-white">
      {/* Brand Hero */}
      <section
        className="relative py-16 sm:py-24 border-b border-gray-100"
        style={{
          background: `linear-gradient(180deg, ${brand.lightBg} 0%, #ffffff 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <span>/</span>
            <Link href="/brands" className="hover:text-gray-900">
              Brands
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-bold">{brand.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-white shadow-sm border border-gray-200">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: brand.primaryColor }}
                ></span>
                <span className="text-gray-800">{brand.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
                {brand.name}
              </h1>

              <p className="text-xl font-bold text-gray-800 italic">
                &quot;{brand.tagline}&quot;
              </p>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                {brand.description}
              </p>

              {/* Quick audience tag */}
              <div className="p-3.5 rounded-xl bg-white/80 border border-gray-200 text-xs sm:text-sm text-gray-700">
                <span className="font-bold text-gray-900">Targeted For: </span>
                <span>{brand.targetAudience}</span>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                <a
                  href={getBrandOrderLink(brand.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-white font-extrabold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                  style={{ backgroundColor: brand.primaryColor }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Order {brand.name} on WhatsApp</span>
                </a>

                <Link
                  href="/where-to-buy"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-gray-50 text-gray-900 font-bold text-base border border-gray-300 shadow-sm transition"
                >
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>Find Nearest Stockist</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-80 sm:h-[420px] bg-white flex items-center justify-center p-4">
                {brand.heroImage && (
                  <img
                    src={brand.heroImage}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain drop-shadow-md"
                  />
                )}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md text-white">
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="flex items-center gap-1.5 font-bold text-emerald-300">
                      <ShieldCheck className="w-4 h-4" />
                      KEBS Quality Certified
                    </span>
                    <span className="text-[11px] text-gray-300">Original Kenyan Packaging</span>
                  </div>
                </div>
              </div>

              {/* Multi-angle Packaging Thumbnails */}
              {brand.productImages && brand.productImages.length > 1 && (
                <div className="mt-4 flex items-center justify-center gap-3">
                  {brand.productImages.map((imgUrl, iIdx) => (
                    <div
                      key={iIdx}
                      className="w-20 h-20 rounded-2xl bg-white border-2 border-gray-200 p-1.5 shadow-sm overflow-hidden flex items-center justify-center hover:border-dextron-blue transition cursor-pointer"
                    >
                      <img
                        src={imgUrl}
                        alt={`${brand.name} view ${iIdx + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
              Why Choose {brand.name}
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Engineered for Everyday Peace of Mind
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brand.keyBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200/80 bg-gray-50/50 hover:bg-white hover:shadow-md transition-all space-y-3"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base"
                  style={{ backgroundColor: brand.lightBg, color: brand.primaryColor }}
                >
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-gray-900">{benefit}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Line & Pack Formats */}
      <section className="py-20 bg-gray-50/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
              Available Product Range
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Select Your Pack & Size
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Order directly in single retail packs or bulk wholesale cartons with instant WhatsApp delivery dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brand.productLine.map((product, idx) => (
              <ProductCard
                key={idx}
                product={product}
                brandName={brand.name}
                primaryColor={brand.primaryColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guidance & Instructions */}
      {brand.usageInstructions && (
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-gray-900 to-slate-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-emerald-300">
                <BookOpen className="w-4 h-4" />
                <span>Usage & Guidance Instructions</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                How to Get the Best Results with {brand.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed pt-2">
                {brand.usageInstructions}
              </p>

              {/* Certifications Row */}
              <div className="pt-6 border-t border-slate-700 flex flex-wrap gap-4 text-xs font-semibold text-gray-300">
                {brand.certifications.map((cert, cIdx) => (
                  <span key={cIdx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Brand Specific FAQ */}
      {allFaqs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Common Questions about {brand.name}
              </h3>
              <p className="text-sm text-gray-600">
                Need more information? We are always happy to help.
              </p>
            </div>

            <div className="space-y-4">
              {allFaqs.map((faq) => (
                <div
                  key={faq._id}
                  className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-2"
                >
                  <h4 className="text-base font-bold text-gray-900 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-dextron-blue mt-0.5 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed pl-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 bg-slate-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h3 className="text-3xl font-black tracking-tight">
            Order {brand.name} Today
          </h3>
          <p className="text-base text-gray-400">
            Chat with our Nairobi customer desk on WhatsApp for instant pricing, stockist location, or home delivery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={getBrandOrderLink(brand.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg transition"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Order via WhatsApp (+254 722 750766)</span>
            </a>
            <Link
              href="/where-to-buy"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-gray-200 font-semibold text-base border border-slate-800"
            >
              <Store className="w-4 h-4" />
              <span>Where to Buy in Kenya</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
