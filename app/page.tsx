import Link from 'next/link';
import { MessageCircle, Phone, ArrowRight, ArrowUpRight } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function HomePage() {
  return <main>
    {/* Hero */}
    <section className="hero">
      <div className="hero-meta reveal" style={{ marginBottom: '4rem' }}>
        <span>— Proudly Kenyan FMCG Manufacturer · Est. 2018</span>
      </div>
      <div>
        <h1 className="hero-title" id="heroTitle">
          Nurturing Kenyan<br />
          Families with <span className="accent">Quality</span><br />
          <span className="accent">Care.</span>
        </h1>
        <p className="hero-sub reveal">
          Premium baby diapers, fortified infant cereals, feminine hygiene pads, and household detergents — made for Kenyan families, priced for real life.
        </p>
        <div className="reveal" style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <a href={getWhatsAppLink('Hello Dextron Enterprise! I would like to order products.')} target="_blank" rel="noopener noreferrer" className="btn btn-primary hover-target" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem' }}>
            <MessageCircle style={{ width: '16px', height: '16px' }} />
            Order on WhatsApp
          </a>
          <a href="#brands" className="btn btn-outline hover-target" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem' }}>
            Explore Brands
            <ArrowRight style={{ width: '16px', height: '16px' }} />
          </a>
        </div>
      </div>
      <div className="reveal" style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: '2rem', fontWeight: '900', letterSpacing: '-0.03em' }}>500+</div>
          <div style={{ fontSize: '0.6875rem', color: '#737373', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem' }}>Stockists Nationwide</div>
        </div>
        <div>
          <div style={{ fontSize: '2rem', fontWeight: '900', letterSpacing: '-0.03em' }}>100%</div>
          <div style={{ fontSize: '0.6875rem', color: '#737373', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem' }}>KEBS Certified</div>
        </div>
        <div>
          <div style={{ fontSize: '2rem', fontWeight: '900', letterSpacing: '-0.03em' }}>50K+</div>
          <div style={{ fontSize: '0.6875rem', color: '#737373', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem' }}>Happy Households</div>
        </div>
      </div>
    </section>

    {/* Marquee */}
    <div className="marquee">
      <div className="marquee-track">
        <span>NUNA</span> · DIAPERS <span>·</span> NUNALAC <span>·</span> CEREAL <span>·</span> BILAN <span>·</span> PADS <span>·</span> SOFRESH <span>·</span> HOME <span>·</span>
        <span>NUNA</span> · DIAPERS <span>·</span> NUNALAC <span>·</span> CEREAL <span>·</span> BILAN <span>·</span> PADS <span>·</span> SOFRESH <span>·</span> HOME <span>·</span>
      </div>
    </div>

    {/* Brand 01: Nuna */}
    <section id="brands" className="brand-showcase">
      <div className="img-wrap hover-target" style={{ aspectRatio: '4/5' }}>
        <img src="/images/Nuna_Daipers_Front.jpg" alt="Nuna Diapers" />
      </div>
      <div className="meta">
        <div className="number">01 — Baby Care</div>
        <h3>Nuna<br />Diapers</h3>
        <p>12-hour leak protection with premium Japanese absorbent polymers. Designed for Kenyan babies, tested to KEBS standards.</p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <span className="tag">Hypoallergenic</span>
          <span className="tag">12h Protection</span>
          <span className="tag">Soft Touch</span>
        </div>
        <Link href="/brands/nuna-diapers" className="btn btn-outline hover-target" style={{ alignSelf: 'flex-start', marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.625rem' }}>
          View Product
          <ArrowUpRight style={{ width: '16px', height: '16px' }} />
        </Link>
      </div>
    </section>

    {/* Brand 02: Nunalac */}
    <section className="brand-showcase reverse">
      <div className="img-wrap hover-target" style={{ aspectRatio: '4/5' }}>
        <img src="/images/Nunalac_Infant_formula.jpg" alt="Nunalac Cereal" />
      </div>
      <div className="meta">
        <div className="number">02 — Infant Nutrition</div>
        <h3>Nunalac<br />Cereal</h3>
        <p>Iron and vitamin fortified infant cereal. Nurturing growth from the very first spoonful with natural wheat and prebiotics.</p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <span className="tag">Iron Fortified</span>
          <span className="tag">Vitamin D</span>
          <span className="tag">Prebiotics</span>
        </div>
        <Link href="/brands/nunalac" className="btn btn-outline hover-target" style={{ alignSelf: 'flex-start', marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.625rem' }}>
          View Product
          <ArrowUpRight style={{ width: '16px', height: '16px' }} />
        </Link>
      </div>
    </section>

    {/* Brand 03: Bilan */}
    <section className="brand-showcase">
      <div className="img-wrap hover-target" style={{ aspectRatio: '4/5' }}>
        <img src="/images/BilanAlwaysRegular.webp" alt="Bilan Pads" />
      </div>
      <div className="meta">
        <div className="number">03 — Feminine Care</div>
        <h3>Bilan<br />Pads</h3>
        <p>Superior comfort with hypoallergenic fibers. Designed for Kenyan women, tested rigorously to meet KEBS standards KS EAS 96 & 72.</p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <span className="tag">Superior Comfort</span>
          <span className="tag">Hypoallergenic</span>
          <span className="tag">KEBS Certified</span>
        </div>
        <Link href="/brands/bilan" className="btn btn-outline hover-target" style={{ alignSelf: 'flex-start', marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.625rem' }}>
          View Product
          <ArrowUpRight style={{ width: '16px', height: '16px' }} />
        </Link>
      </div>
    </section>

    {/* Advantage */}
    <section id="advantage" style={{ padding: '8rem 2.5rem', background: '#fafafa' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', marginBottom: '6rem' }}>
          <div>
            <div className="section-label reveal">The Dextron Advantage</div>
            <h2 className="section-title reveal">Quality should be<br />a right, not<br />a luxury.</h2>
          </div>
          <div className="reveal" style={{ alignSelf: 'end' }}>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.6', color: '#525252' }}>
              For years, Kenyan families had to choose between paying exorbitant prices for imported multinational brands or settling for inferior alternatives. Dextron was founded to change that.
            </p>
          </div>
        </div>

        <div>
          <div className="adv-item reveal">
            <div className="num">01</div>
            <div>
              <h4>30% to 40% More Value</h4>
              <p>Direct manufacturing in Nairobi removes foreign import tariffs, passing major savings directly to Kenyan shoppers without compromising on material quality.</p>
            </div>
          </div>
          <div className="adv-item reveal">
            <div className="num">02</div>
            <div>
              <h4>Zero Compromise on Safety</h4>
              <p>We use premium Japanese absorbent polymers and hypoallergenic fibers, tested rigorously to meet and exceed KEBS standards (KS EAS 96 & 72).</p>
            </div>
          </div>
          <div className="adv-item reveal">
            <div className="num">03</div>
            <div>
              <h4>Dependable Retail Restocking</h4>
              <p>No shipping delays or stockouts. Our distribution warehouse supplies retailers across Kenya with guaranteed weekly stock.</p>
            </div>
          </div>
          <div className="adv-item reveal">
            <div className="num">04</div>
            <div>
              <h4>Under One Roof</h4>
              <p>From the first concept to the day your family trusts our products — our architects, designers and builders all work under one roof.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section id="voices" style={{ padding: '8rem 2.5rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end', marginBottom: '6rem' }}>
          <div>
            <div className="section-label reveal">Customer Voices</div>
          </div>
          <div>
            <h2 className="section-title reveal">Trusted by Kenyan<br />mothers &amp; stockists.</h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          <div className="testimonial reveal hover-target">
            <div style={{ color: '#f59e0b', fontSize: '0.875rem' }}>★★★★★</div>
            <p className="quote">"Affordable, dependable, and trusted by mothers. Nuna diapers have been a game-changer for my family."</p>
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #e5e5e5' }}>
              <div style={{ fontWeight: '700', fontSize: '0.9375rem' }}>Wanjiku M.</div>
              <div style={{ fontSize: '0.75rem', color: '#737373', marginTop: '0.25rem' }}>Nairobi · Nuna Diapers</div>
            </div>
          </div>

          <div className="testimonial reveal hover-target">
            <div style={{ color: '#f59e0b', fontSize: '0.875rem' }}>★★★★★</div>
            <p className="quote">"My baby loves Nunalac cereal. The iron fortification gives me peace of mind as a first-time mother."</p>
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #e5e5e5' }}>
              <div style={{ fontWeight: '700', fontSize: '0.9375rem' }}>Achieng O.</div>
              <div style={{ fontSize: '0.75rem', color: '#737373', marginTop: '0.25rem' }}>Mombasa · Nunalac Cereal</div>
            </div>
          </div>

          <div className="testimonial reveal hover-target">
            <div style={{ color: '#f59e0b', fontSize: '0.875rem' }}>★★★★★</div>
            <p className="quote">"As a retailer, Dextron's restocking is reliable. My customers keep coming back for Bilan pads."</p>
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #e5e5e5' }}>
              <div style={{ fontWeight: '700', fontSize: '0.9375rem' }}>James K.</div>
              <div style={{ fontSize: '0.75rem', color: '#737373', marginTop: '0.25rem' }}>Nakuru · Retail Partner</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section id="contact" className="cta-section">
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.6875rem', fontWeight: '500', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#737373' }}>Instant Customer Care &amp; Ordering</div>
        </div>
        <h2 className="cta-title reveal">
          Ready to experience<br />
          the <span className="accent">Dextron</span><br />
          difference?
        </h2>
        <p className="reveal" style={{ fontSize: '1.125rem', color: '#a3a3a3', maxWidth: '32rem', marginTop: '3rem', lineHeight: '1.6' }}>
          Our sales team in Nairobi is ready to connect you with the nearest stockist or arrange direct doorstep dispatch for cartons and retail packs.
        </p>
        <div className="reveal" style={{ marginTop: '4rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <a href={getWhatsAppLink('Hello Dextron Enterprise! I would like to order products.')} target="_blank" rel="noopener noreferrer" className="btn btn-primary hover-target" style={{ background: '#16a34a', display: 'inline-flex', alignItems: 'center', gap: '0.625rem' }}>
            <MessageCircle style={{ width: '16px', height: '16px' }} />
            Chat on WhatsApp
          </a>
          <a href="tel:+254722750766" className="btn btn-outline hover-target" style={{ borderColor: '#404040', color: '#fff', display: 'inline-flex', alignItems: 'center', gap: '0.625rem' }}>
            <Phone style={{ width: '16px', height: '16px' }} />
            Call +254 722 750766
          </a>
        </div>
      </div>
    </section>
  </main>;
}
