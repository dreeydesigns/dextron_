import React from 'react';
import { Metadata } from 'next';
import { MapPin, Store, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { getStockists } from '@/lib/sanity';
import StockistFilter from '@/components/StockistFilter';
import { getWhatsAppLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Where to Buy & Stockist Locator | Dextron Enterprise Kenya',
  description:
    'Find retail supermarkets, pharmacies, baby shops, and wholesalers stocking Nuna Diapers, Nunalac, Bilan, and SoFresh across Nairobi, Mombasa, Kisumu, Nakuru, and Kenya.',
};

export default async function WhereToBuyPage() {
  const stockists = await getStockists();

  return (
    <main className="bg-gray-50/60 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-100 text-dextron-blue uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Retail & Wholesaler Network</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Where to Buy Dextron Products
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Locate authorized supermarkets, pharmacies, and baby shops in your town. Filter by region or
            store category below.
          </p>
        </div>

        {/* Interactive Filter Component */}
        <StockistFilter initialStockists={stockists} />
      </div>
    </main>
  );
}
