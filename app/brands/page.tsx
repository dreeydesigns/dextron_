import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import { getBrands } from '@/lib/sanity';
import { getBrandOrderLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Our Consumer Brands | Nuna, Nunalac, Bilan & SoFresh',
  description:
    'Explore Dextron Enterprise consumer brands: Nuna Diapers (baby care), Nunalac (infant nutrition), Bilan (feminine hygiene), and SoFresh SoClean (home cleaning).',
};

export default async function BrandsPage() {
  const brands = await getBrands();

  return (
    <main className="bg-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-100 text-dextron-blue uppercase tracking-wider">
            Brand Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Our 4 Household FMCG Brands
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Dextron Enterprise is a house of brands manufactured to high international benchmarks, certified by KEBS, and priced for real Kenyan living.
          </p>
        </div>

        {/* Detailed Brand Showcase Rows */}
        <div className="space-y-16">
          {brands.map((brand, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <div
                key={brand._id}
                id={brand.slug.current}
                className="bg-gray-50/70 rounded-3xl border border-gray-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all p-6 sm:p-10 lg:p-12"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual / Image */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-md h-72 sm:h-96 bg-gray-200">
                      {brand.heroImage && (
                        <img
                          src={brand.heroImage}
                          alt={brand.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute top-4 left-4">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-md"
                          style={{ backgroundColor: brand.primaryColor }}
                        >
                          {brand.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Copy & Details */}
                  <div className={`lg:col-span-7 space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                        {brand.category.replace('-', ' ')}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                        {brand.name}
                      </h2>
                      <p className="text-base font-semibold text-gray-700 mt-1">
                        &quot;{brand.tagline}&quot;
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {brand.description}
                    </p>

                    {/* Key Benefits */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                        Core Advantages
                      </span>
                      {brand.keyBenefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Products Available Preview */}
                    <div className="pt-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                        Available Pack Formats ({brand.productLine.length} Variants)
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {brand.productLine.map((prod, pIdx) => (
                          <span
                            key={pIdx}
                            className="px-3 py-1 rounded-lg text-xs font-semibold bg-white border border-gray-200 text-gray-800 shadow-2xs"
                          >
                            {prod.productName}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/brands/${brand.slug.current}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                        style={{ backgroundColor: brand.primaryColor }}
                      >
                        <span>View Brand Page & Sizes</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <a
                        href={getBrandOrderLink(brand.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Order on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
