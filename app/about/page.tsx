import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Heart,
  Users,
  Award,
  MapPin,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  ArrowRight,
  Factory,
  TrendingUp,
} from 'lucide-react';
import TrustBadges from '@/components/TrustBadges';
import { getWhatsAppLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'About Us | Dextron Enterprise Kenya',
  description:
    'Learn about Dextron Enterprise: Kenyan FMCG manufacturer dedicated to high-quality, affordable baby care, feminine hygiene, and cleaning products.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Kenyan Families First',
      description:
        'Every product is developed by listening to everyday Kenyan mothers, caregivers, and households, ensuring maximum utility and genuine affordability.',
      icon: Heart,
      color: 'text-rose-600 bg-rose-50 border-rose-100',
    },
    {
      title: 'Uncompromising Quality',
      description:
        'We adhere strictly to Kenya Bureau of Standards (KEBS) and international GMP protocols. We never cut corners on materials or safety.',
      icon: ShieldCheck,
      color: 'text-dextron-blue bg-blue-50 border-blue-100',
    },
    {
      title: 'Local Job Creation',
      description:
        'By manufacturing locally in Nairobi, we build Kenyan manufacturing capacity, empower skilled workers, and strengthen national industrial sovereignty.',
      icon: Users,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
    {
      title: 'Fair & Stable Pricing',
      description:
        'By removing international import middle-men, we pass substantial price stability and direct cost savings onto Kenyan consumers.',
      icon: TrendingUp,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-blue-50/70 via-white to-gray-50/50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-100 text-dextron-blue uppercase tracking-wider">
              Our Heritage & Purpose
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Proudly Manufacturing Essential Quality for Kenya
            </h1>
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
              Dextron Enterprise was founded in Nairobi with a singular mission: to provide world-class
              personal care, baby essentials, and household products that every Kenyan family can trust and afford.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-dextron-blue uppercase tracking-widest block">
                The Dextron Journey
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                Born in Kenya, Built for African Realities
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  For generations, Kenyan households have faced a difficult compromise when purchasing everyday
                  essentials. Imported multinational brands offered reliable quality but charged inflated prices
                  driven by foreign exchange fluctuations and shipping markups. On the other hand, cheap unbranded
                  alternatives often resulted in painful diaper rashes, uncomfortable hygiene products, or weak detergents.
                </p>
                <p>
                  Dextron Enterprise stepped in to bridge this gap. By establishing state-of-the-art local
                  manufacturing and rigorous quality-control systems in Nairobi, we produce high-performance consumer
                  goods—from 12-hour leak-proof Nuna Diapers and fortified Nunalac cereal to soothing Bilan sanitary
                  towels and concentrated SoFresh cleaners—that match multinational standards at everyday affordable prices.
                </p>
              </div>

              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-gray-100">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-dextron-blue">100%</span>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Kenyan Owned & Operated</p>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-600">4</span>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Core Product Lines</p>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-purple-600">500+</span>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Retail Stockists</p>
                </div>
              </div>
            </div>

            {/* Visual Box */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-dextron-blue/30 flex items-center justify-center text-blue-400">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Our Quality Guarantee</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Every batch produced at Dextron undergoes strict laboratory inspection, microbiology screening,
                  and performance absorption testing before leaving our dispatch floor.
                </p>
                <ul className="space-y-3 pt-2 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>KEBS Standardization Marks KS EAS 96, 72 & 100</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>HACCP Food Safety Protocols for Infant Nutrition</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Dermatologically Approved Skin-Safe Materials</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-gray-50/80 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 uppercase tracking-wider">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              The Values That Guide Every Decision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-gray-200/80 shadow-sm hover:shadow-md transition-all space-y-4"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${v.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust badges strip */}
      <TrustBadges />

      {/* Call to Action */}
      <section className="py-16 bg-slate-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-black tracking-tight">
            Partner With Dextron Enterprise
          </h2>
          <p className="text-base text-gray-400">
            Whether you are a family looking for trusted products or a retailer seeking high-margin FMCG goods, we are here to serve you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/distributors"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-dextron-blue hover:bg-dextron-blue-dark text-white font-bold text-sm shadow-md transition"
            >
              <span>Become a Distributor</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={getWhatsAppLink('Hello Dextron Enterprise!')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (+254 722 750766)</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
