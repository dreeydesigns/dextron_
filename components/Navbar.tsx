'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageCircle,
  MapPin,
  Sparkles,
  ShoppingBag,
  Store,
  ShieldCheck,
} from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [brandsDropdownOpen, setBrandsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const brands = [
    {
      name: 'Nuna Diapers',
      slug: '/brands/nuna-diapers',
      desc: '12-Hour Leak Protection Baby Diapers',
      color: 'bg-blue-500 text-blue-600',
      badge: 'Baby Care',
    },
    {
      name: 'Nunalac',
      slug: '/brands/nunalac',
      desc: 'Iron & Vitamin Fortified Infant Cereal',
      color: 'bg-amber-500 text-amber-600',
      badge: 'Infant Nutrition',
    },
    {
      name: 'Bilan',
      slug: '/brands/bilan',
      desc: 'Comfortable, High-Absorbency Pads',
      color: 'bg-rose-500 text-rose-600',
      badge: 'Feminine Care',
    },
    {
      name: 'SoFresh SoClean',
      slug: '/brands/sofresh-soclean',
      desc: 'Powerful & Affordable Home Cleaners',
      color: 'bg-emerald-500 text-emerald-600',
      badge: 'Home Essentials',
    },
  ];

  const navLinks = [
    { name: 'Where to Buy', href: '/where-to-buy' },
    { name: 'Become a Distributor', href: '/distributors' },
    { name: 'About Us', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-dextron-blue-dark via-dextron-blue to-slate-900 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-blue-200">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              Nairobi, Kenya
            </span>
            <span className="hidden md:inline-block text-gray-400">•</span>
            <span className="hidden md:flex items-center gap-1 text-blue-100">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              KEBS Certified Quality Products
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+254722750766"
              className="flex items-center gap-1 hover:text-blue-200 transition"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>+254 722 750766</span>
            </a>
            <span className="text-gray-400">|</span>
            <a
              href={getWhatsAppLink('Hello Dextron Enterprise team!')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-bold text-emerald-300 hover:text-emerald-200 transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Quick Order</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 flex items-center justify-center group-hover:scale-105 transition-transform">
              <img
                src="/images/Dextron_logo.png"
                alt="Dextron Enterprise"
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-gray-900 tracking-tight leading-none group-hover:text-dextron-blue transition">
                DEXTRON
              </span>
              <span className="text-[10px] font-bold text-dextron-red uppercase tracking-widest mt-0.5">
                ENTERPRISE KENYA
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition ${
                pathname === '/'
                  ? 'text-dextron-blue bg-blue-50/80'
                  : 'text-gray-700 hover:text-dextron-blue hover:bg-gray-50'
              }`}
            >
              Home
            </Link>

            {/* Brands Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setBrandsDropdownOpen(true)}
              onMouseLeave={() => setBrandsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-semibold transition ${
                  pathname.startsWith('/brands')
                    ? 'text-dextron-blue bg-blue-50/80'
                    : 'text-gray-700 hover:text-dextron-blue hover:bg-gray-50'
                }`}
              >
                <span>Our Brands</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {brandsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 px-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 mb-1 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Consumer Product Lines
                  </div>
                  {brands.map((b) => (
                    <Link
                      key={b.slug}
                      href={b.slug}
                      onClick={() => setBrandsDropdownOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition group"
                    >
                      <div className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 bg-current text-opacity-80 group-hover:scale-125 transition-transform" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900 text-sm group-hover:text-dextron-blue transition">
                            {b.name}
                          </span>
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                            {b.badge}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">{b.desc}</p>
                      </div>
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-2 pt-2 px-2">
                    <Link
                      href="/brands"
                      onClick={() => setBrandsDropdownOpen(false)}
                      className="flex items-center justify-between text-xs font-bold text-dextron-blue hover:text-dextron-blue-dark py-1 px-2"
                    >
                      <span>View All Brands Showcase</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition ${
                    isActive
                      ? 'text-dextron-blue bg-blue-50/80'
                      : 'text-gray-700 hover:text-dextron-blue hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/distributors"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-dextron-blue px-3 py-2"
            >
              <Store className="w-4 h-4 text-gray-500" />
              Distributor Portal
            </Link>

            <a
              href={getWhatsAppLink('Hello Dextron Enterprise! I would like to make an order inquiry.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppLink('Hello Dextron Enterprise!')}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              Home
            </Link>

            <div className="py-2 border-y border-gray-100">
              <div className="px-3 py-1 text-xs font-bold text-gray-400 uppercase tracking-wider">
                Our 4 Brands
              </div>
              <div className="grid grid-cols-1 gap-1 mt-1">
                {brands.map((b) => (
                  <Link
                    key={b.slug}
                    href={b.slug}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50 text-sm font-semibold text-gray-800"
                  >
                    <span>{b.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                      {b.badge}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-semibold text-gray-900 hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 space-y-2">
            <a
              href={getWhatsAppLink('Hello Dextron Enterprise!')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp (+254 722 750766)
            </a>
            <a
              href="tel:+254722750766"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gray-100 text-gray-800 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-dextron-blue" />
              Call Sales Desk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
