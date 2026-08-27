import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { BrandData } from '@/lib/seed-data';
import { getBrandOrderLink } from '@/lib/whatsapp';

interface BrandCardProps {
  brand: BrandData;
}

export default function BrandCard({ brand }: BrandCardProps) {
  const brandStyles: Record<string, { badgeBg: string; buttonBg: string; borderHover: string; dotBg: string }> = {
    'nuna-diapers': {
      badgeBg: 'bg-blue-100 text-blue-800',
      buttonBg: 'bg-blue-600 hover:bg-blue-700 text-white',
      borderHover: 'hover:border-blue-300 hover:shadow-blue-100/50',
      dotBg: 'bg-blue-500',
    },
    nunalac: {
      badgeBg: 'bg-orange-100 text-orange-800',
      buttonBg: 'bg-orange-600 hover:bg-orange-700 text-white',
      borderHover: 'hover:border-orange-300 hover:shadow-orange-100/50',
      dotBg: 'bg-orange-500',
    },
    bilan: {
      badgeBg: 'bg-pink-100 text-pink-800',
      buttonBg: 'bg-rose-600 hover:bg-rose-700 text-white',
      borderHover: 'hover:border-rose-300 hover:shadow-rose-100/50',
      dotBg: 'bg-rose-500',
    },
    'sofresh-soclean': {
      badgeBg: 'bg-emerald-100 text-emerald-800',
      buttonBg: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      borderHover: 'hover:border-emerald-300 hover:shadow-emerald-100/50',
      dotBg: 'bg-emerald-500',
    },
  };

  const style = brandStyles[brand.slug.current] || {
    badgeBg: 'bg-gray-100 text-gray-800',
    buttonBg: 'bg-gray-800 hover:bg-gray-900 text-white',
    borderHover: 'hover:border-gray-300',
    dotBg: 'bg-gray-600',
  };

  return (
    <div
      className={`group flex flex-col bg-white rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${style.borderHover}`}
    >
      {/* Brand Header / Image */}
      <div className="relative h-56 sm:h-64 w-full bg-gray-100 overflow-hidden">
        {brand.heroImage ? (
          <img
            src={brand.heroImage}
            alt={brand.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 font-bold">
            {brand.name}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${style.badgeBg}`}>
            {brand.badge}
          </span>
          <span className="w-3 h-3 rounded-full border-2 border-white shadow-sm ring-1 ring-black/10 animate-pulse bg-emerald-400"></span>
        </div>

        {/* Bottom Tagline Overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-2xl font-black tracking-tight drop-shadow-sm">{brand.name}</h3>
          <p className="text-xs sm:text-sm font-medium text-gray-200 mt-0.5 line-clamp-1">
            {brand.tagline}
          </p>
        </div>
      </div>

      {/* Brand Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        <div>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
            {brand.description}
          </p>

          {/* Key Benefits */}
          <div className="mt-5 space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
              Key Highlights
            </span>
            {brand.keyBenefits.slice(0, 3).map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="line-clamp-1">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Link
            href={`/brands/${brand.slug.current}`}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-900 font-bold text-xs sm:text-sm transition-colors"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <a
            href={getBrandOrderLink(brand.name)}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all ${style.buttonBg}`}
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order</span>
          </a>
        </div>
      </div>
    </div>
  );
}
