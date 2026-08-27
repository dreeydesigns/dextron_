'use client';

import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, Building, User, Phone, MapPin } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

interface LeadFormProps {
  type?: 'distributor' | 'contact';
  defaultBrand?: string;
}

export default function LeadForm({ type = 'distributor', defaultBrand = 'All Brands' }: LeadFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(defaultBrand);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let fullMsg = '';
    if (type === 'distributor') {
      fullMsg = `Hello Dextron Enterprise! 🏢\n*WHOLESALE DISTRIBUTOR APPLICATION*\n\n• Name: *${name}*\n• Phone/WhatsApp: *${phone}*\n• Business/Shop: *${businessName || 'Retailer/Wholesaler'}*\n• Location: *${location}*\n• Brands of Interest: *${selectedBrand}*\n• Notes: ${message || 'Please send wholesale pricing and minimum order terms.'}`;
    } else {
      fullMsg = `Hello Dextron Enterprise! 👋\n*CUSTOMER INQUIRY*\n\n• Name: *${name}*\n• Phone/WhatsApp: *${phone}*\n• Location: *${location}*\n• Subject/Brand: *${selectedBrand}*\n• Message: ${message}`;
    }

    setSubmitted(true);

    // Open WhatsApp
    const waUrl = getWhatsAppLink(fullMsg);
    window.open(waUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-lg">
      {submitted ? (
        <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Thank you, {name}!</h3>
          <p className="text-sm text-gray-600 max-w-md mx-auto">
            Your inquiry has been directed to our WhatsApp sales desk. If your WhatsApp window didn&apos;t
            open automatically, click below:
          </p>
          <a
            href={getWhatsAppLink(`Hello Dextron, I submitted an inquiry for ${name} (${phone})`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Open WhatsApp Chat</span>
          </a>
          <div>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-gray-500 hover:text-gray-800 underline mt-3"
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Mary Wambui"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dextron-blue/30 focus:border-dextron-blue text-sm"
                />
              </div>
            </div>

            {/* Phone / WhatsApp */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Phone / WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0722 750766"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dextron-blue/30 focus:border-dextron-blue text-sm"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Location / Town */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Town / Neighborhood <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Nairobi CBD, Mombasa, Nakuru"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dextron-blue/30 focus:border-dextron-blue text-sm"
                />
              </div>
            </div>

            {/* Business Name (for Distributor) or Subject */}
            {type === 'distributor' ? (
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Business / Store Name
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="e.g. Baraka Wholesalers Ltd"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dextron-blue/30 focus:border-dextron-blue text-sm"
                  />
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Brand / Topic
                </label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dextron-blue/30 focus:border-dextron-blue text-sm bg-white"
                >
                  <option value="All Brands">General Inquiry (All Brands)</option>
                  <option value="Nuna Diapers">Nuna Diapers</option>
                  <option value="Nunalac">Nunalac Infant Cereal</option>
                  <option value="Bilan">Bilan Sanitary Pads</option>
                  <option value="SoFresh SoClean">SoFresh SoClean Home</option>
                </select>
              </div>
            )}
          </div>

          {/* Product Brand of interest if distributor */}
          {type === 'distributor' && (
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Primary Product Line of Interest
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dextron-blue/30 focus:border-dextron-blue text-sm bg-white"
              >
                <option value="All Brands (Full Dextron Portfolio)">All Brands (Full Dextron Portfolio)</option>
                <option value="Nuna Diapers Baby Care">Nuna Diapers Baby Care</option>
                <option value="Nunalac Infant Nutrition">Nunalac Infant Nutrition</option>
                <option value="Bilan Feminine Hygiene">Bilan Feminine Hygiene</option>
                <option value="SoFresh SoClean Home Cleaning">SoFresh SoClean Home Cleaning</option>
              </select>
            </div>
          )}

          {/* Message */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              Your Message or Specific Requirements
            </label>
            <textarea
              rows={3}
              placeholder={
                type === 'distributor'
                  ? 'Tell us about your distribution reach, monthly volume estimate, or target retail channels...'
                  : 'How can we help you today?'
              }
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dextron-blue/30 focus:border-dextron-blue text-sm"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Send Direct via WhatsApp</span>
          </button>
          <p className="text-[11px] text-gray-400 text-center">
            Submitting opens a direct WhatsApp chat pre-filled with your details for an immediate response.
          </p>
        </form>
      )}
    </div>
  );
}
