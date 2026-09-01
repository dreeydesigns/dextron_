'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  return (
    <nav className="site-nav">
      <Link href="/" className="nav-logo">DEXTRON®</Link>
      <div className="nav-links">
        <a href="#brands" className="hover-target">Brands</a>
        <a href="#advantage" className="hover-target">Advantage</a>
        <a href="#voices" className="hover-target">Voices</a>
        <a href="#contact" className="hover-target">Contact</a>
      </div>
      <Link href="#contact" className="nav-cta hover-target">Order Now</Link>
    </nav>
  );
}
