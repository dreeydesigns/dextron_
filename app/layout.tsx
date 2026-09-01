import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MotionSystem from '@/components/MotionSystem';

export const metadata: Metadata = {
  title: {
    default: 'Dextron Enterprise Kenya | Quality Baby Care, Feminine Hygiene & Home Essentials',
    template: '%s | Dextron Enterprise Kenya',
  },
  description:
    'Dextron Enterprise is a premier Kenyan FMCG manufacturer producing Nuna Diapers, Nunalac Infant Cereal, Bilan Sanitary Pads, and SoFresh Cleaning Essentials. Quality made for Kenyan families.',
  keywords: [
    'Dextron Enterprise',
    'Nuna Diapers Kenya',
    'Nunalac Baby Cereal',
    'Bilan Sanitary Pads',
    'SoFresh Cleaners',
    'Kenyan FMCG Manufacturer',
    'Baby diapers Nairobi',
    'Affordable diapers Kenya',
    'KEBS certified diapers',
  ],
  authors: [{ name: 'Dextron Enterprise Kenya' }],
  creator: 'Dextron Enterprise Kenya',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://dextron.co.ke',
    title: 'Dextron Enterprise Kenya — Nurturing Kenyan Families with Quality Care',
    description:
      'High-quality baby diapers, fortified infant cereals, feminine hygiene pads, and household detergents made for Kenyan families at affordable prices.',
    siteName: 'Dextron Enterprise',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased selection:bg-dextron-blue selection:text-white">
        <MotionSystem />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
