import React from 'react';
import { Metadata } from 'next';
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import { getWhatsAppLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contact Us | Dextron Enterprise Kenya',
  description:
    'Get in touch with Dextron Enterprise in Nairobi, Kenya. Contact us via WhatsApp (+254 722 750766), phone, or send an inquiry.',
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Sales & Support',
      desc: 'Instant replies for order inquiries, delivery status, and stockist directions.',
      actionText: '+254 722 750766',
      href: getWhatsAppLink('Hello Dextron Enterprise!'),
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
      isExternal: true,
    },
    {
      icon: Phone,
      title: 'Customer Helpline',
      desc: 'Speak directly with our customer desk during working business hours.',
      actionText: '+254 700 546792 / +254 722 750766',
      href: 'tel:+254722750766',
      color: 'text-dextron-blue bg-blue-50 border-blue-100',
      isExternal: false,
    },
    {
      icon: Mail,
      title: 'Official Email',
      desc: 'For formal corporate tenders, distributor applications, and billing.',
      actionText: 'info@dextron.co.ke',
      href: 'mailto:info@dextron.co.ke',
      color: 'text-purple-600 bg-purple-50 border-purple-100',
      isExternal: false,
    },
    {
      icon: MapPin,
      title: 'Headquarters & Logistics',
      desc: 'Industrial Logistics Hub, Nairobi CBD & Distribution Center, Nairobi, Kenya.',
      actionText: 'Get Directions / Dispatch Hub',
      href: '#',
      color: 'text-amber-600 bg-amber-50 border-amber-100',
      isExternal: false,
    },
  ];

  return (
    <main className="bg-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-100 text-dextron-blue uppercase tracking-wider">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            We are Here to Help
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Have a question about Nuna Diapers, Nunalac, Bilan, or SoFresh? Looking for a stockist or seeking wholesale terms? Reach out directly.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((c, idx) => {
            const Icon = c.icon;
            return (
              <a
                key={idx}
                href={c.href}
                target={c.isExternal ? '_blank' : undefined}
                rel={c.isExternal ? 'noopener noreferrer' : undefined}
                className="group flex flex-col justify-between bg-gray-50/70 hover:bg-white rounded-3xl p-7 border border-gray-200/80 hover:border-dextron-blue/40 shadow-sm hover:shadow-md transition-all space-y-4"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${c.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{c.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <span className="text-xs font-bold text-dextron-blue group-hover:underline">
                    {c.actionText} →
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Form and Hours Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Hours & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Operating Hours (EAT)</span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-gray-300">Monday – Friday</span>
                  <span className="font-bold text-white">8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-gray-300">Saturday</span>
                  <span className="font-bold text-white">8:30 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-gray-300">Sunday & Public Holidays</span>
                  <span className="text-gray-400">WhatsApp Desk On-Duty</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Licensed Kenyan FMCG Manufacturer</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Serving over 500+ stockists countrywide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="space-y-2 mb-4">
              <h3 className="text-2xl font-black text-gray-900">Send Us a Direct Message</h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Submit your inquiry and we will get in touch immediately via WhatsApp or phone.
              </p>
            </div>
            <LeadForm type="contact" />
          </div>
        </div>
      </div>
    </main>
  );
}
