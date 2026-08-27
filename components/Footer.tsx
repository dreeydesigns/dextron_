import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function Footer() {
  const brands = [
    { name: 'Nuna Diapers', href: '/brands/nuna-diapers', tag: 'Baby Diapers' },
    { name: 'Nunalac', href: '/brands/nunalac', tag: 'Infant Cereal' },
    { name: 'Bilan', href: '/brands/bilan', tag: 'Sanitary Pads' },
    { name: 'SoFresh SoClean', href: '/brands/sofresh-soclean', tag: 'Home Detergents' },
  ];

  const quickLinks = [
    { name: 'Where to Buy (Stockists)', href: '/where-to-buy' },
    { name: 'Become a Distributor', href: '/distributors' },
    { name: 'About Dextron Enterprise', href: '/about' },
    { name: 'Frequently Asked Questions', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Sanity Studio CMS', href: '/studio' },
  ];

  return (
    <footer className="bg-slate-950 text-gray-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: Company Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-10 bg-white/95 rounded-lg px-2 py-1 flex items-center justify-center shadow-md">
                <img
                  src="/images/Dextron_logo.png"
                  alt="Dextron Enterprise"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white block">
                  DEXTRON ENTERPRISE
                </span>
                <span className="text-[10px] font-bold text-dextron-red uppercase tracking-wider block">
                  Quality FMCG for Kenyan Families
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              A proudly Kenyan fast-moving consumer goods (FMCG) manufacturer & distributor.
              Providing world-class baby care, infant nutrition, feminine hygiene, and household
              cleaning products at accessible, family-friendly prices.
            </p>

            {/* KEBS & Quality Badge */}
            <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div>
                <span className="font-bold text-white block">KEBS Certified Manufacturer</span>
                <span className="text-gray-400">KS EAS 96 | KS EAS 72 | KS 100</span>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div>
              <a
                href={getWhatsAppLink('Hello Dextron Enterprise! I would like to order.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Ordering (+254 722 750766)</span>
              </a>
            </div>
          </div>

          {/* Col 3: Our Brands */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Our 4 Brands</h4>
            <ul className="space-y-2.5 text-sm">
              {brands.map((b) => (
                <li key={b.name}>
                  <Link
                    href={b.href}
                    className="group flex items-center justify-between text-gray-400 hover:text-white transition"
                  >
                    <span>{b.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900 group-hover:bg-slate-800 text-gray-400">
                      {b.tag}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-gray-400 hover:text-white transition"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-dextron-blue mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-xs">
                  Nairobi Logistics & Distribution Hub, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div className="text-xs">
                  <a href="tel:+254722750766" className="text-gray-300 hover:text-white block">
                    +254 722 750766
                  </a>
                  <a href="tel:+254700546792" className="text-gray-400 hover:text-white block">
                    +254 700 546792
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:info@dextron.co.ke"
                  className="text-xs text-gray-300 hover:text-white"
                >
                  info@dextron.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & Karibu Note */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Dextron Enterprise Kenya. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1 text-gray-400">
            <span>Karibu Dextron — Nurturing Kenyan Families</span>
            <Heart className="w-3.5 h-3.5 text-dextron-red fill-dextron-red ml-1 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
}
