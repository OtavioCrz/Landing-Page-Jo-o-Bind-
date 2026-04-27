import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useAnimations() {
  useEffect(() => {
    // Small delay to let images load
    const timer = setTimeout(() => init(), 100)
    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])
}

function init() {
  const ctx = gsap.context(() => {

    // ═══════════════════════════
    // HERO — cinematic entrance
    // ═══════════════════════════

    const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } })

    heroTl
      .fromTo('.hero__img',
        { scale: 1.15 },
        { scale: 1, duration: 2.2, ease: 'power2.out' }
      )
      .fromTo('.hero__overlay',
        { opacity: 0 },
        { opacity: 1, duration: 1.5 },
        0
      )
      .fromTo('.hero__intro',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.7
      )
      .fromTo('.hero__line',
        { opacity: 0, y: 60, skewY: 3 },
        { opacity: 1, y: 0, skewY: 0, duration: 1, stagger: 0.15 },
        0.8
      )
      .fromTo('.hero__desc',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.9 },
        1.4
      )
      .fromTo('.hero__actions',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        1.6
      )
      .fromTo('.hero__side',
        { opacity: 0 },
        { opacity: 1, duration: 1.2 },
        1.9
      )
      .fromTo('.hero__scroll',
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        2
      )

    // Header entrance
    gsap.fromTo('.hdr',
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5, clearProps: 'transform' }
    )

    // Hero parallax on scroll
    gsap.to('.hero__img', {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })

    // ═══════════════════════════
    // GENERAL REVEALS
    // ═══════════════════════════

    // All .reveal elements — elegant fade in
    gsap.utils.toArray('.reveal').forEach(el => {
      // Skip hero elements (already animated)
      if (el.closest('.hero') || el.closest('.hdr')) return

      gsap.fromTo(el,
        { opacity: 0, y: 30, visibility: 'hidden' },
        {
          opacity: 1,
          y: 0,
          visibility: 'visible',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          }
        }
      )
    })

    // ═══════════════════════════
    // SECTION-SPECIFIC
    // ═══════════════════════════

    // Method hero image parallax
    if (document.querySelector('.method__hero-img img')) {
      gsap.to('.method__hero-img img', {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: '.method__hero',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      })
    }

    // Method steps stagger
    const stepsList = document.querySelector('.method__steps-list')
    if (stepsList) {
      gsap.fromTo(stepsList.children,
        { opacity: 0, y: 30, visibility: 'hidden' },
        {
          opacity: 1,
          y: 0,
          visibility: 'visible',
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stepsList,
            start: 'top 80%',
          }
        }
      )
    }

    // Method steps image parallax
    if (document.querySelector('.method__steps-image img')) {
      gsap.to('.method__steps-image img', {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: '.method__steps-image',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      })
    }

    // Transform visual parallax
    if (document.querySelector('.transform__visual img')) {
      gsap.to('.transform__visual img', {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.transform__visual',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      })
    }

    // Transform items stagger
    const transformGrid = document.querySelector('.transform__grid')
    if (transformGrid) {
      gsap.fromTo(transformGrid.children,
        { opacity: 0, y: 24, visibility: 'hidden' },
        {
          opacity: 1,
          y: 0,
          visibility: 'visible',
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: transformGrid,
            start: 'top 85%',
          }
        }
      )
    }

    // Credibility cards stagger
    const credGrid = document.querySelector('.cred__grid')
    if (credGrid) {
      gsap.fromTo(credGrid.children,
        { opacity: 0, y: 30, visibility: 'hidden' },
        {
          opacity: 1,
          y: 0,
          visibility: 'visible',
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: credGrid,
            start: 'top 80%',
          }
        }
      )
    }

    // FAQ items stagger
    const faqList = document.querySelector('.faq__list')
    if (faqList) {
      gsap.fromTo(faqList.children,
        { opacity: 0, y: 20, visibility: 'hidden' },
        {
          opacity: 1,
          y: 0,
          visibility: 'visible',
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: faqList,
            start: 'top 82%',
          }
        }
      )
    }

  })

  return () => ctx.revert()
}
