import Link from 'next/link';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';

const brands = [
  { name: 'Nuna Diapers', type: 'Baby care', year: '12-hour protection', image: '/images/cutouts/Nuna_Daipers_Front.png', href: '/brands/nuna-diapers' },
  { name: 'Nunalac+', type: 'Infant nutrition', year: 'Stage 1 • 0–12 months', image: '/images/cutouts/Nunalac_Infant_formula_single.png', href: '/brands/nunalac' },
  { name: 'Bilan', type: 'Feminine hygiene', year: 'Everyday protection', image: '/images/cutouts/BilanAlwaysRegular.png', href: '/brands/bilan' },
];

export default function HomePage() {
  return <main className="foundry-home">
    <section className="sf-hero">
      <div className="sf-hero-visual" data-image-reveal><img src="/images/cutouts/Nunalac_Infant_formula.png" alt="Nunalac infant formula" /></div>
      <div className="sf-hero-info"><span>Dextron Enterprise</span><span>Kenya / Est. 2014</span></div>
      <h1 data-split>Everyday care,<br /><i>exceptionally</i> made.</h1>
      <div className="sf-hero-bottom"><p>Dextron is a Kenyan family-care company. We make essential products with care, consistency and real households in mind.</p><a href="#work" aria-label="Explore our brands"><ArrowDown /></a></div>
    </section>

    <section className="sf-intro" data-reveal><p className="sf-label">(Our approach)</p><div><h2>Care that grows<br />with <i>you.</i></h2><p>From a baby’s first days to the small routines that keep a home moving, Dextron brings dependable quality closer to Kenyan families.</p></div></section>

    <section className="sf-work" id="work"><div className="sf-section-head"><p className="sf-label">(Our brands)</p><p>Each brand is thoughtfully made for a different kind of everyday care.</p></div><div className="sf-work-list">{brands.map((brand, i) => <article className="sf-project" key={brand.name} data-reveal><Link href={brand.href} className="sf-project-link"><div className={`sf-project-art project-${i + 1}`} data-image-reveal><img src={brand.image} alt={brand.name} /></div><div className="sf-project-meta"><span>{brand.type}</span><span>{brand.year}</span></div><div className="sf-project-title"><h3>{brand.name}</h3><ArrowUpRight /></div></Link></article>)}</div></section>

    <section className="sf-marquee" aria-hidden="true"><div>FOR FAMILIES <i>•</i> FOR EVERYDAY <i>•</i> FOR KENYA <i>•</i> FOR FAMILIES <i>•</i></div></section>

    <section className="sf-values"><div className="sf-values-copy" data-reveal><p className="sf-label">(The Dextron standard)</p><h2>Built on trust.<br />Designed for <i>life.</i></h2></div><div className="sf-values-list"><article data-reveal><span>01</span><h3>Thoughtful by nature</h3><p>We make products for the people who rely on them — considered in use, comfortable in hand, and practical for everyday life.</p></article><article data-reveal><span>02</span><h3>Reliable in every detail</h3><p>Our commitment to consistent quality means every pack is made to meet the standards families deserve.</p></article><article data-reveal><span>03</span><h3>Proudly close to home</h3><p>Made with Kenyan households in mind and supplied through the shops and stockists that serve them.</p></article></div></section>

    <section className="sf-bilan" data-reveal><div><p className="sf-label">(Bilan / feminine hygiene)</p><h2>Comfort that<br />lets you <i>move.</i></h2><p>Soft, discreet and made for confidence through every day.</p><Link href="/brands/bilan">Explore Bilan <ArrowUpRight /></Link></div><figure data-image-reveal><img src="/images/cutouts/BilanUltraThinAlwaysSize4.png" alt="Bilan Ultra Thin pads" /></figure></section>

    <section className="sf-services"><p className="sf-label">(Made for every day)</p><div><h2>Baby care</h2><h2>Infant nutrition</h2><h2>Feminine hygiene</h2><h2>Home essentials</h2></div></section>

    <section className="sf-contact"><div data-reveal><p className="sf-label">(Find Dextron)</p><h2>Care should<br />always feel <i>close.</i></h2></div><div className="sf-contact-action" data-reveal><p>Find a stockist nearby or talk to our team about products for your home, shop or community.</p><Link href="/where-to-buy">Find a stockist <MapPin /></Link></div></section>
  </main>;
}
