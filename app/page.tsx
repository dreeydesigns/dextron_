import Link from 'next/link';
import { ArrowRight, ArrowUpRight, MapPin, MessageCircle, Phone } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

const brands = [
  { id: '01', eyebrow: 'Baby care', name: <>Nuna<br />Diapers</>, description: '12-hour leak protection with premium Japanese absorbent polymers. Designed for Kenyan babies, tested to KEBS standards.', tags: ['Hypoallergenic', '12h protection', 'Soft touch'], image: '/images/Nuna_Daipers_Front.jpg', href: '/brands/nuna-diapers', colour: 'nuna' },
  { id: '02', eyebrow: 'Infant nutrition', name: <>Nunalac<br />Formula</>, description: 'Milk-based infant formula, crafted for nourishing beginnings and the confidence that comes with every spoonful.', tags: ['Stage 1', 'Milk based', '0–12 months'], image: '/images/Nunalac_Infant_formula_single.webp', href: '/brands/nunalac', colour: 'nunalac' },
  { id: '03', eyebrow: 'Feminine care', name: <>Bilan<br />Pads</>, description: 'Superior comfort and dependable everyday protection, made for Kenyan women and active lives.', tags: ['Soft comfort', 'Ultra thin', 'Everyday care'], image: '/images/BilanAlwaysRegular.webp', href: '/brands/bilan', colour: 'bilan' },
];

export default function HomePage() {
  return <main className="premium-home">
    <section className="clean-hero">
      <p className="hero-kicker">— Proudly Kenyan FMCG manufacturer</p>
      <div><h1 data-split>Nurturing Kenyan<br />families with <span>quality<br />care.</span></h1><p className="hero-copy">Premium baby diapers, infant nutrition, feminine hygiene and household essentials — made for Kenyan families, priced for real life.</p><div className="hero-buttons"><a href={getWhatsAppLink('Hello Dextron Enterprise! I would like to order products.')} target="_blank" rel="noopener noreferrer" className="clean-button dark"><MessageCircle /> Order on WhatsApp</a><a href="#brands" className="clean-button">Explore brands <ArrowRight /></a></div></div>
      <div className="hero-stats"><div><b>500+</b><span>Stockists nationwide</span></div><div><b>100%</b><span>KEBS certified</span></div><div><b>50K+</b><span>Happy households</span></div></div>
    </section>

    <div className="clean-marquee"><div>NUNA <i>•</i> DIAPERS <i>•</i> NUNALAC <i>•</i> INFANT NUTRITION <i>•</i> BILAN <i>•</i> FEMININE CARE <i>•</i> SOFRESH <i>•</i> HOME ESSENTIALS <i>•</i></div></div>

    <section id="brands" className="brand-series">{brands.map((brand, index) => <article className={`clean-brand ${brand.colour} ${index % 2 ? 'is-reverse' : ''}`} key={brand.id} data-reveal><div className="clean-art" data-image-reveal><img src={brand.image} alt={`${brand.eyebrow}: ${index === 1 ? 'Nunalac formula' : index === 0 ? 'Nuna diapers' : 'Bilan pads'}`} /></div><div className="clean-brand-copy"><p className="clean-index">{brand.id} — {brand.eyebrow}</p><h2>{brand.name}</h2><p className="clean-description">{brand.description}</p><div className="clean-tags">{brand.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><Link className="clean-button" href={brand.href}>View product <ArrowUpRight /></Link></div></article>)}</section>

    <section className="advantage-section"><div><p className="section-kicker">The Dextron advantage</p><h2 data-reveal>Quality should be<br />a right, not <span>a luxury.</span></h2></div><p className="advantage-intro" data-reveal>For years, Kenyan families had to choose between expensive imported brands or inferior alternatives. Dextron was founded to change that.</p><div className="advantage-list">{[['01','30% to 40% more value','Direct local manufacturing removes foreign import tariffs, creating real value without compromising material quality.'],['02','Zero compromise on safety','We use premium materials and rigorous quality testing aligned with KEBS standards.'],['03','Dependable retail restocking','Our distribution network keeps products available for households, shops and wholesalers nationwide.']].map(([number,title,body]) => <article key={number} data-reveal><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>

    <section className="voices-section"><p className="section-kicker">Customer voices</p><h2 data-reveal>Trusted by Kenyan<br />mothers &amp; stockists.</h2><div className="voice-grid">{[['“Affordable, dependable, and trusted by mothers. Nuna diapers have been a game-changer for my family.”','Faith Wanjiku','Nairobi · Nuna Diapers'],['“Knowing Nunalac is made with care gives me peace of mind at every meal time.”','Amina Hassan','Mombasa · Nunalac'],['“Our customers keep coming back for Bilan. It’s a product we can confidently stock.”','Peter Kamau','Eastleigh · Retail partner']].map(([quote,name,meta]) => <article key={name} data-reveal><b>★★★★★</b><blockquote>{quote}</blockquote><footer><strong>{name}</strong><span>{meta}</span></footer></article>)}</div></section>

    <section className="clean-cta"><p className="section-kicker">Instant care &amp; ordering</p><h2 data-reveal>Ready to experience<br />the <span>Dextron</span> difference?</h2><p>Our Nairobi team can connect you with the nearest stockist or arrange direct dispatch for cartons and retail packs.</p><div><a className="clean-button whatsapp" href={getWhatsAppLink('Hello Dextron Enterprise! I would like to order products.')} target="_blank" rel="noopener noreferrer"><MessageCircle /> Chat on WhatsApp</a><a className="clean-button light" href="tel:+254722750766"><Phone /> Call sales desk</a></div></section>
  </main>;
}
