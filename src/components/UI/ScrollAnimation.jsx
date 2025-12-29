import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* --------------------------------------------------
   GLOBAL SCROLLER (Locomotive compatible)
-------------------------------------------------- */

export const SCROLLER = "[data-scroll-container]";

/* --------------------------------------------------
   BASIC REVEAL (fade + move)
-------------------------------------------------- */

export const revealUp = (element, options = {}) => {
  gsap.fromTo(
    element,
    {
      y: options.fromY ?? 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: options.duration ?? 1.2,
      ease: options.ease ?? "power4.out",
      scrollTrigger: {
        trigger: element,
        scroller: SCROLLER,
        start: options.start ?? "top 80%"
      }
    }
  );
};

/* --------------------------------------------------
   STAGGER CHILDREN (cards, lists, grids)
-------------------------------------------------- */

export const staggerChildren = (container, selector, options = {}) => {
  gsap.from(container.querySelectorAll(selector), {
    y: options.fromY ?? 80,
    opacity: 0,
    stagger: options.stagger ?? 0.15,
    duration: options.duration ?? 1,
    ease: options.ease ?? "power3.out",
    scrollTrigger: {
      trigger: container,
      scroller: SCROLLER,
      start: options.start ?? "top 75%"
    }
  });
};

/* --------------------------------------------------
   PARALLAX (slow background / image movement)
-------------------------------------------------- */

export const parallaxY = (element, options = {}) => {
  gsap.fromTo(
    element,
    { y: options.from ?? -80 },
    {
      y: options.to ?? 80,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        scroller: SCROLLER,
        scrub: true,
        start: "top bottom",
        end: "bottom top"
      }
    }
  );
};

/* --------------------------------------------------
   PIN SECTION (award-style storytelling)
-------------------------------------------------- */

export const pinSection = (element, options = {}) => {
  ScrollTrigger.create({
    trigger: element,
    scroller: SCROLLER,
    start: options.start ?? "top top",
    end: options.end ?? "+=200%",
    pin: true,
    pinSpacing: true
  });
};

/* --------------------------------------------------
   SCALE IN (hero elements, media)
-------------------------------------------------- */

export const scaleIn = (element, options = {}) => {
  gsap.fromTo(
    element,
    { scale: 0.9, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: options.duration ?? 1.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        scroller: SCROLLER,
        start: options.start ?? "top 80%"
      }
    }
  );
};

/* --------------------------------------------------
   HORIZONTAL SCROLL (award galleries)
-------------------------------------------------- */

export const horizontalScroll = (container, options = {}) => {
  const sections = gsap.utils.toArray(container.children);

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: container,
      scroller: SCROLLER,
      pin: true,
      scrub: 1,
      end: options.end ?? `+=${container.offsetWidth}`
    }
  });
};
