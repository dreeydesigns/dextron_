import React from 'react';
import { Metadata } from 'next';
import {
  TrendingUp,
  Truck,
  Megaphone,
  ShieldCheck,
  Store,
  CheckCircle2,
  MessageCircle,
  Phone,
  ArrowRight,
} from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import { getDistributorInquiryLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Become a Distributor & Wholesale Partner | Dextron Enterprise Kenya',
  description:
    'Partner with Dextron Enterprise as a regional FMCG distributor or retail stockist. High profit margins, fast restocking, and strong Kenyan consumer demand.',
};

export default function DistributorsPage() {
  const distributorPerks = [
    {
      icon: TrendingUp,
      title: 'Highly Competitive Trade Margins',
      desc: 'Earn superior retailer and wholesaler profit margins compared to traditional imported multinational FMCG brands.',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
    {
      icon: Truck,
      title: 'Guaranteed Steady Supply & Fast Dispatch',
      desc: 'Direct factory access in Nairobi ensures you never suffer from import delays, container backlogs, or stockouts.',
      color: 'text-dextron-blue bg-blue-50 border-blue-100',
    },
    {
      icon: Megaphone,
      title: 'Marketing & POS Brand Support',
      desc: 'We provide free Point-of-Sale marketing collateral, shelf wobblers, posters, samples, and digital ad promotions.',
      color: 'text-amber-600 bg-amber-50 border-amber-100',
    },
    {
      icon: ShieldCheck,
      title: '100% Certified High-Turnover Goods',
      desc: 'All 4 brands (Nuna, Nunalac, Bilan, SoFresh) enjoy rapid repeat consumer purchases and full KEBS safety compliance.',
      color: 'text-purple-600 bg-purple-50 border-purple-100',
    },
  ];

  return (
    <main className="bg-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800 uppercase tracking-wider">
            B2B Trade & Distribution
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Grow Your Business with Dextron Consumer Brands
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Join hundreds of supermarkets, pharmacies, baby boutiques, and regional wholesalers
            distributing Kenya&apos;s fastest-growing FMCG household brands.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {distributorPerks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                className="bg-gray-50/70 rounded-3xl p-7 border border-gray-200/80 shadow-sm space-y-3"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${perk.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{perk.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{perk.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Form and Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Value proposition details */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-dextron-blue uppercase tracking-widest block">
              Wholesale Partnerships
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              What Dextron Offers Wholesale Partners
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We structure trade partnerships to maximize long-term mutual growth. Whether you operate a single
              retail store in Eastleigh or a fleet of delivery vans across Western Kenya, we have a wholesale tier
              suited for your operational scale.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Flexible Minimum Order Quantities (MOQs)</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                    Start small with mixed brand cartons or scale into full truckload pallet pricing with tiered discount structures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Designated Regional Exclusivity</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                    Qualifying large-volume distributors can secure exclusive territorial rights in specific towns or counties.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Dedicated B2B Account Manager</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                    Direct communication with a specialized wholesale coordinator for fast order processing, invoicing, and logistics support.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-3">
              <h4 className="font-bold text-base">Direct Wholesale Hotline</h4>
              <p className="text-xs text-gray-300">
                Need an immediate wholesale quotation or price list for this week&apos;s orders?
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={getDistributorInquiryLink('Direct Wholesale Client')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Wholesale Desk</span>
                </a>
                <a
                  href="tel:+254722750766"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+254 722 750766</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Distributor Application Form */}
          <div className="lg:col-span-6">
            <div className="space-y-3 mb-4">
              <h3 className="text-2xl font-black text-gray-900">Distributor Application Form</h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Fill out your details below to receive our wholesale catalog and trade terms.
              </p>
            </div>
            <LeadForm type="distributor" />
          </div>
        </div>
      </div>
    </main>
  );
}
