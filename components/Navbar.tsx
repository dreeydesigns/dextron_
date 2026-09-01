'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

const links = [
  { name: 'Home', href: '/' }, { name: 'Our brands', href: '/brands' }, { name: 'Our story', href: '/about' }, { name: 'Stockists', href: '/where-to-buy' }, { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="foundry-nav"><Link href="/" className="nav-logo" aria-label="Dextron Enterprise home"><img src="/images/Dextron_logo.png" alt="Dextron Enterprise" /></Link><button className="nav-menu" onClick={() => setOpen(true)} aria-label="Open menu"><span /><span /> <b>Menu</b></button><div className={`menu-panel ${open ? 'is-open' : ''}`}><div className="menu-head"><span>Navigation</span><button onClick={() => setOpen(false)} aria-label="Close menu"><X /></button></div><nav>{links.map((link, index) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}><small>0{index + 1}</small><span>{link.name}</span><ArrowUpRight /></Link>)}</nav><div className="menu-foot"><p>Dextron Enterprise<br />Nairobi, Kenya</p><a href="mailto:info@dextron.co.ke">info@dextron.co.ke</a></div></div></header>;
}
