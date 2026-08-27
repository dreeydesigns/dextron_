'use client';

import React, { useState } from 'react';
import { MessageCircle, X, ShoppingBag, Truck, Store, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const quickActions = [
    {
      label: 'Order Nuna Diapers',
      icon: ShoppingBag,
      color: 'hover:bg-blue-50 text-blue-700 border-blue-200',
      message: 'Hello Dextron! 👋 I would like to order or find stockists for *Nuna Diapers*.',
    },
    {
      label: 'Order Nunalac Cereal',
      icon: ShoppingBag,
      color: 'hover:bg-amber-50 text-amber-700 border-amber-200',
      message: 'Hello Dextron! 👋 I would like to order or find stockists for *Nunalac Baby Cereal*.',
    },
    {
      label: 'Order Bilan Sanitary Pads',
      icon: ShoppingBag,
      color: 'hover:bg-rose-50 text-rose-700 border-rose-200',
      message: 'Hello Dextron! 👋 I would like to order or find stockists for *Bilan Pads*.',
    },
    {
      label: 'Order SoFresh Cleaning Products',
      icon: ShoppingBag,
      color: 'hover:bg-green-50 text-green-700 border-green-200',
      message: 'Hello Dextron! 👋 I would like to inquire about *SoFresh SoClean* home detergents.',
    },
    {
      label: 'Become a Distributor / Stockist',
      icon: Store,
      color: 'hover:bg-purple-50 text-purple-700 border-purple-200',
      message: 'Hello Dextron Wholesale Desk! 🏢 I would like information on becoming an authorized stockist/distributor.',
    },
    {
      label: 'Delivery & General Inquiries',
      icon: Truck,
      color: 'hover:bg-gray-50 text-gray-700 border-gray-200',
      message: 'Hello Dextron! I have a general customer inquiry regarding your products and delivery.',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Pop-up Card */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-base leading-tight">Dextron WhatsApp Desk</h4>
                <p className="text-xs text-emerald-100 flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                  Typically replies within minutes
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/20 text-white transition-colors"
              aria-label="Close chat helper"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-gray-50/70 max-h-80 overflow-y-auto space-y-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-1">
              Select what you need:
            </p>
            {quickActions.map((action, idx) => {
              const Icon = action.icon;
              return (
                <a
                  key={idx}
                  href={getWhatsAppLink(action.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between p-3 rounded-xl border bg-white text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm ${action.color}`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{action.label}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              );
            })}
          </div>

          {/* Direct Chat Footer */}
          <div className="p-3 bg-white border-t border-gray-100 text-center">
            <a
              href={getWhatsAppLink('Hello Dextron Enterprise team!')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Open Direct WhatsApp Chat
            </a>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 px-4 sm:px-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        aria-label="Chat with Dextron on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-6 h-6" />
        <span className="font-bold text-sm hidden sm:inline-block">Chat on WhatsApp</span>
      </button>
    </div>
  );
}
