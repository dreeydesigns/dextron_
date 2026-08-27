import React from 'react';
import { ShieldCheck, Award, MapPin, HeartHandshake } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      title: 'KEBS Standard Certified',
      description: 'Manufactured strictly to Kenya Bureau of Standards (KS EAS 96 / KS EAS 72 / KS 100) specifications.',
      color: 'text-dextron-blue bg-blue-50 border-blue-100',
    },
    {
      icon: MapPin,
      title: 'Proudly Made in Kenya',
      description: 'Locally manufactured and distributed from Nairobi, creating local employment & dependable supply chains.',
      color: 'text-emerald-700 bg-emerald-50 border-emerald-100',
    },
    {
      icon: Award,
      title: 'Multinational Quality, Fair Price',
      description: 'Engineered to match or exceed top international brands at prices tailored for Kenyan family budgets.',
      color: 'text-amber-700 bg-amber-50 border-amber-100',
    },
    {
      icon: HeartHandshake,
      title: 'Wholesale & Retail Network',
      description: 'Trusted by over 500+ supermarkets, pharmacies, baby care shops, and distributors across Kenya.',
      color: 'text-rose-700 bg-rose-50 border-rose-100',
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl border bg-gray-50/60 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className={`p-3 rounded-xl border flex-shrink-0 ${badge.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 leading-snug">{badge.title}</h4>
                  <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">{badge.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
