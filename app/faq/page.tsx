'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { SEED_FAQS } from '@/lib/seed-data';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { label: 'All Questions', value: 'all' },
    { label: 'General & KEBS', value: 'general' },
    { label: 'Nuna Diapers', value: 'nuna-diapers' },
    { label: 'Nunalac Infant Cereal', value: 'nunalac' },
    { label: 'Bilan Sanitary Pads', value: 'bilan' },
    { label: 'SoFresh Cleaners', value: 'sofresh-soclean' },
    { label: 'Delivery & Shipping', value: 'shipping-delivery' },
    { label: 'Wholesale & Distribution', value: 'distribution-wholesale' },
  ];

  const filteredFaqs =
    selectedCategory === 'all'
      ? SEED_FAQS
      : SEED_FAQS.filter((f) => f.category === selectedCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-white py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-100 text-dextron-blue uppercase tracking-wider">
            Frequently Asked Questions
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            How Can We Assist You?
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Find quick answers regarding our product formulations, safety certifications, retail stockists, and wholesale orders.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setSelectedCategory(cat.value);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.value
                  ? 'bg-dextron-blue text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq._id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg text-gray-900 leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-dextron-blue' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="bg-gradient-to-br from-slate-900 to-dextron-blue-dark text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto text-emerald-400">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold tracking-tight">Have a Specific Question?</h3>
          <p className="text-sm text-gray-300 max-w-md mx-auto">
            Our customer service team is on WhatsApp to assist with queries about sizes, ingredients, or stockists.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppLink('Hello Dextron! I have a question not covered in your FAQ.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Ask on WhatsApp (+254 722 750766)</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
