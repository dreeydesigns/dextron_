import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, MapPin, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

const products = [
  { number: '01', name: 'Nuna', category: 'Premium baby diapers', note: 'Soft, secure care for every growing stage.', image: '/images/Nuna_Daipers_Front.jpg', tone: 'orange', href: '/brands/nuna-diapers' },
  { number: '02', name: 'Nunalac+', category: 'Infant formula', note: 'Nourishing beginnings, made with care.', image: '/images/Nunalac_Infant_formula_single.webp', tone: 'gold', href: '/brands/nunalac' },
  { number: '03', name: 'Bilan', category: 'Feminine care', note: 'Everyday confidence, beautifully considered.', image: '/images/BilanAlwaysRegular.webp', tone: 'violet', href: '/brands/bilan' },
];

export default function HomePage() {
  return <main className="site-shell">
    <section className="hero"><div className="hero-grid" /><div className="hero-inner">
      <p className="eyebrow hero-kicker">Dextron Enterprise / Kenya</p>
      <div className="hero-copy"><h1><span>Essential care,</span><em>made for life.</em></h1><p className="hero-description">Thoughtfully made everyday essentials for Kenyan families — from a baby’s first days to the moments that make a house feel like home.</p></div>
      <div className="hero-actions"><a className="round-link" href="#products" aria-label="Explore our brands"><ArrowDownRight /></a><span>Scroll to discover<br />our family of brands</span></div>
      <div className="hero-product product-float"><img src="/images/Nuna_Daipers_Front.jpg" alt="Nuna premium baby diapers" /></div><div className="hero-stamp">QUALITY<br />IN EVERY<br />DAY <i>✦</i></div>
    </div></section>

    <section className="intro-section"><p className="eyebrow">01 / A Kenyan enterprise</p><div className="intro-layout"><h2>Care isn’t a category.<br /><em>It’s our calling.</em></h2><div className="intro-body"><p>Dextron Enterprise brings together trusted baby care, infant nutrition and feminine hygiene products under one family-first promise: reliable quality within reach.</p><Link className="text-link" href="/about">Meet Dextron <ArrowUpRight /></Link></div></div><div className="statement-strip"><span>For everyday rituals</span><span>For growing families</span><span>For Kenya</span></div></section>

    <section id="products" className="products-section"><div className="section-topline"><p className="eyebrow">02 / Our brands</p><span>Three considered essentials,<br />one trusted home.</span></div><div className="product-list">{products.map((product, index) => <article className={`product-row ${product.tone}`} key={product.name}><div className="product-index">{product.number}</div><div className="product-text"><p>{product.category}</p><h3>{product.name}</h3><span>{product.note}</span></div><div className="product-image-wrap"><img src={product.image} alt={product.name} className={index === 1 ? 'product-image formula' : 'product-image'} /></div><Link href={product.href} className="product-open" aria-label={`Discover ${product.name}`}><ArrowUpRight /></Link></article>)}</div></section>

    <section className="quality-section"><div className="quality-copy"><p className="eyebrow">03 / The Dextron standard</p><h2>Practical quality.<br /><em>Deeply human.</em></h2></div><div className="quality-notes"><div><b>01</b><h3>Made for real life</h3><p>Products designed around the rhythm, needs and budgets of Kenyan homes.</p></div><div><b>02</b><h3>Quality you can trust</h3><p>Carefully produced essentials with a commitment to dependable standards.</p></div><div><b>03</b><h3>Close to home</h3><p>Built for families and stocked for communities across the country.</p></div></div></section>

    <section className="bilan-feature"><div className="bilan-copy"><p className="eyebrow">Bilan / Everyday comfort</p><h2>Feel like<br /><em>yourself.</em></h2><p>Protection that moves with you — designed to make confidence feel effortless.</p><Link href="/brands/bilan" className="light-link">Discover Bilan <ArrowUpRight /></Link></div><div className="bilan-products"><img className="bilan-three" src="/images/BilanUltraThinAlwaysSize3.webp" alt="Bilan Ultra Thin Size 3" /><img className="bilan-four" src="/images/BilanUltraThinAlwaysSize4.webp" alt="Bilan Ultra Thin Size 4" /></div></section>
    <section className="where-section"><p className="eyebrow">04 / Find us nearby</p><h2>Made here.<br />Found <em>everywhere.</em></h2><div className="where-bottom"><p>Connect with a stockist near you, or speak with our team about ordering for your home, shop or community.</p><Link href="/where-to-buy" className="pill-link">Find a stockist <MapPin /></Link></div></section>
    <section className="contact-banner"><p>Let’s bring everyday care closer.</p><a href={getWhatsAppLink('Hello Dextron Enterprise! I would like to order products.')} target="_blank" rel="noopener noreferrer">Start a conversation <MessageCircle /></a></section>
  </main>;
}
