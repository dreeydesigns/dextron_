import React from 'react';
import Link from 'next/link';
import { Check, MessageCircle, Package, ShieldCheck, MapPin } from 'lucide-react';
import { ProductItem } from '@/lib/seed-data';
import { getBrandOrderLink } from '@/lib/whatsapp';

interface ProductCardProps {
  product: ProductItem;
  brandName: string;
  primaryColor?: string;
}

export default function ProductCard({ product, brandName, primaryColor = '#2563EB' }: ProductCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-7 justify-between group">
      <div>
        {/* Product Packaging Image Preview */}
        {product.productImage && (
          <div className="relative w-full h-52 mb-5 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden flex items-center justify-center p-3">
            <img
              src={product.productImage}
              alt={product.productName}
              className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
            />
          </div>
        )}

        {/* Pack Size Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-800">
            <Package className="w-3.5 h-3.5 text-gray-500" />
            {product.productSize}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
            <ShieldCheck className="w-3.5 h-3.5" />
            KEBS Certified
          </span>
        </div>

        {/* Product Title */}
        <h4 className="text-xl font-bold text-gray-900 tracking-tight leading-snug">
          {product.productName}
        </h4>

        {/* Product Description */}
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          {product.productDescription}
        </p>

        {/* Benefits List */}
        <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
            Features & Benefits
          </span>
          {product.productBenefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}
              >
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
        <a
          href={getBrandOrderLink(brandName, product.productName)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
          style={{ backgroundColor: primaryColor }}
        >
          <MessageCircle className="w-4 h-4" />
          <span>Order on WhatsApp</span>
        </a>

        <Link
          href="/where-to-buy"
          className="inline-flex items-center justify-center gap-1.5 py-3 px-3.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold text-xs sm:text-sm transition-colors"
        >
          <MapPin className="w-3.5 h-3.5 text-gray-400" />
          <span>Find Stockist</span>
        </Link>
      </div>
    </div>
  );
}
