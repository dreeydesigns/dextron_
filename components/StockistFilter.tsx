'use client';

import React, { useState, useMemo } from 'react';
import { Search, MapPin, Phone, Store, MessageCircle, Filter, CheckCircle2 } from 'lucide-react';
import { StockistData } from '@/lib/seed-data';
import { getStockistInquiryLink } from '@/lib/whatsapp';

interface StockistFilterProps {
  initialStockists: StockistData[];
}

export default function StockistFilter({ initialStockists }: StockistFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const regions = ['All', 'Nairobi', 'Coast / Mombasa', 'Rift Valley', 'Western / Nyanza', 'Central'];
  const storeTypes = [
    { label: 'All Store Types', value: 'All' },
    { label: 'Supermarkets', value: 'supermarket' },
    { label: 'Pharmacies & Chemists', value: 'pharmacy' },
    { label: 'Baby Shops', value: 'baby-shop' },
    { label: 'Wholesale Distributors', value: 'wholesaler' },
  ];

  const filteredStockists = useMemo(() => {
    return initialStockists.filter((item) => {
      const matchesQuery =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.address.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRegion = selectedRegion === 'All' || item.region === selectedRegion;
      const matchesType = selectedType === 'All' || item.type === selectedType;

      return matchesQuery && matchesRegion && matchesType;
    });
  }, [initialStockists, searchQuery, selectedRegion, selectedType]);

  return (
    <div className="space-y-8">
      {/* Controls Bar */}
      <div className="bg-white p-6 rounded-3xl border border-gray-200/90 shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search Box */}
          <div className="relative md:col-span-1">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by store or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dextron-blue/30 focus:border-dextron-blue text-sm"
            />
          </div>

          {/* Region Selector */}
          <div>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dextron-blue/30 focus:border-dextron-blue text-sm bg-white text-gray-700"
            >
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region === 'All' ? 'All Regions in Kenya' : `Region: ${region}`}
                </option>
              ))}
            </select>
          </div>

          {/* Store Type Selector */}
          <div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dextron-blue/30 focus:border-dextron-blue text-sm bg-white text-gray-700"
            >
              {storeTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100 text-xs">
          <span className="font-semibold text-gray-500 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            Showing {filteredStockists.length} Stockists
          </span>
          {selectedRegion !== 'All' && (
            <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-medium border border-blue-100 flex items-center gap-1">
              Region: {selectedRegion}
              <button onClick={() => setSelectedRegion('All')} className="hover:text-blue-900 ml-1">
                ×
              </button>
            </span>
          )}
          {selectedType !== 'All' && (
            <span className="px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 font-medium border border-purple-100 flex items-center gap-1">
              Type: {selectedType}
              <button onClick={() => setSelectedType('All')} className="hover:text-purple-900 ml-1">
                ×
              </button>
            </span>
          )}
        </div>
      </div>

      {/* Results Grid */}
      {filteredStockists.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStockists.map((stockist) => (
            <div
              key={stockist._id}
              className="flex flex-col justify-between bg-white rounded-2xl border border-gray-200/80 p-6 shadow-sm hover:shadow-md transition-all hover:border-dextron-blue/40"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 capitalize">
                    <Store className="w-3 h-3 text-gray-500" />
                    {stockist.type.replace('-', ' ')}
                  </span>
                  <span className="text-xs font-bold text-dextron-blue bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                    {stockist.region}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-gray-900 leading-snug">{stockist.name}</h4>

                <div className="mt-3 space-y-2 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{stockist.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-dextron-blue flex-shrink-0" />
                    <span>{stockist.phone}</span>
                  </div>
                </div>

                {/* Brands Stocked */}
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
                    Available Brands
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {stockist.brandsStocked.map((brand, bIdx) => (
                      <span
                        key={bIdx}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-gray-50 text-gray-700 border border-gray-200"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2">
                <a
                  href={`tel:${stockist.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Store</span>
                </a>
                <a
                  href={getStockistInquiryLink(`${stockist.name} (${stockist.location})`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Direct Help</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 max-w-lg mx-auto">
          <Store className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <h4 className="text-lg font-bold text-gray-900">No stockists match your filter</h4>
          <p className="text-sm text-gray-500 mt-1">
            Try adjusting your search query or selecting &quot;All Regions&quot;.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedRegion('All');
              setSelectedType('All');
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-dextron-blue text-white text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Can't find us banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-dextron-blue-dark text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            Direct Delivery Available
          </span>
          <h3 className="text-2xl font-black tracking-tight">Can&apos;t find Dextron products in your area?</h3>
          <p className="text-sm text-gray-300 max-w-xl">
            Don&apos;t worry! Send us your location on WhatsApp and our sales dispatch team will either
            direct you to a nearby shop or arrange doorstep courier delivery.
          </p>
        </div>
        <a
          href={getStockistInquiryLink('my town/neighborhood')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp Order Dispatch</span>
        </a>
      </div>
    </div>
  );
}
