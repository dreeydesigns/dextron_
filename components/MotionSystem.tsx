'use client';

import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

export default function MotionSystem() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Custom cursor
    const cursorDot = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorDot) {
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
      }
    });

    function animateCursor() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (cursorRing) {
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';
      }
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    document.querySelectorAll('.hover-target, a, button').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    // Magnetic buttons
    document.querySelectorAll<HTMLElement>('.btn, .nav-cta').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
      });
    });

    // Hero animations
    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) {
      const split = new SplitType(heroTitle, { types: 'words, chars' });
      
      split.words.forEach(word => {
        word.querySelectorAll('.char').forEach((ch: Element) => {
          (ch as HTMLElement).style.display = 'inline-block';
          (ch as HTMLElement).style.transform = 'translateY(110%)';
        });
      });

      gsap.to(heroTitle.querySelectorAll('.char'), {
        y: '0%',
        duration: 1.4,
        ease: 'power4.out',
        stagger: 0.025,
        delay: 0.2
      });
    }

    // Scroll reveals
    gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
      if (el.closest('.hero')) return;

      gsap.fromTo(el,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // Image reveals with clip-path
    gsap.utils.toArray<HTMLElement>('.brand-showcase .img-wrap').forEach(wrap => {
      gsap.to(wrap, {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.6,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: wrap,
          start: 'top 75%'
        }
      });
    });

    // Section titles parallax
    gsap.utils.toArray<HTMLElement>('.section-title').forEach(title => {
      gsap.fromTo(title,
        { y: 40, opacity: 0.3 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1
          }
        }
      );
    });

    // CTA title split
    const ctaTitle = document.querySelector('.cta-title');
    if (ctaTitle) {
      const ctaSplit = new SplitType(ctaTitle, { types: 'words' });
      ctaSplit.words.forEach(w => {
        const inner = document.createElement('div');
        inner.style.overflow = 'hidden';
        inner.style.display = 'inline-block';
        inner.style.verticalAlign = 'top';
        w.parentNode?.insertBefore(inner, w);
        inner.appendChild(w);
        (w as HTMLElement).style.transform = 'translateY(110%)';
        (w as HTMLElement).style.display = 'inline-block';
      });

      ScrollTrigger.create({
        trigger: ctaTitle,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(ctaTitle.querySelectorAll('.word'), {
            y: '0%', duration: 1.4, ease: 'power4.out', stagger: 0.05
          });
        },
        once: true
      });
    }

    // Marquee parallax
    gsap.to('.marquee-track', {
      xPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.marquee',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    // Nav background on scroll
    const nav = document.querySelector<HTMLElement>('.site-nav');
    ScrollTrigger.create({
      start: 'top -80',
      end: 99999,
      onUpdate: (self) => {
        if (!nav) return;
        if (self.direction === 1 && self.scroll() > 100) {
          nav.style.background = 'rgba(250,250,250,0.95)';
          nav.style.backdropFilter = 'blur(20px)';
          nav.style.color = '#0a0a0a';
          nav.style.mixBlendMode = 'normal';
          nav.style.borderBottom = '1px solid #e5e5e5';
        } else if (self.scroll() < 100) {
          nav.style.background = 'transparent';
          nav.style.backdropFilter = 'none';
          nav.style.color = '#fff';
          nav.style.mixBlendMode = 'difference';
          nav.style.borderBottom = 'none';
        }
      }
    });

    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null;
}
