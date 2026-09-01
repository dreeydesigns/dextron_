'use client';

import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

export default function MotionSystem() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    const frame = (time: number) => { lenis.raf(time); requestAnimationFrame(frame); };
    requestAnimationFrame(frame);
    const timer = window.setTimeout(() => setLoaded(true), 850);
    const cursor = document.querySelector<HTMLElement>('.cursor-dot');
    const moveCursor = (event: MouseEvent) => {
      if (!cursor) return;
      cursor.style.opacity = '1';
      cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    };
    window.addEventListener('mousemove', moveCursor);
    const ctx = gsap.context(() => {
      document.querySelectorAll<HTMLElement>('[data-split]').forEach((element) => {
        const split = new SplitType(element, { types: 'lines,words', lineClass: 'split-line' });
        gsap.from(split.words, { yPercent: 115, rotate: 3, opacity: 0, stagger: 0.035, duration: 1.15, ease: 'power4.out', delay: .55 });
      });
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.from(element, { y: 60, opacity: 0, duration: .95, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 84%' } });
      });
      gsap.utils.toArray<HTMLElement>('[data-image-reveal]').forEach((element) => {
        const image = element.querySelector('img');
        if (!image) return;
        gsap.fromTo(image, { scale: 1.18 }, { scale: 1, duration: 1.45, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 84%' } });
      });
    });
    return () => { window.clearTimeout(timer); window.removeEventListener('mousemove', moveCursor); lenis.destroy(); ctx.revert(); };
  }, []);

  return <><div className={`site-loader ${loaded ? 'is-loaded' : ''}`} aria-hidden="true"><div className="loader-orbit"><img src="/images/Dextron_logo.png" alt="" /></div><span>Dextron Enterprise</span></div><div className="cursor-dot" /></>;
}
