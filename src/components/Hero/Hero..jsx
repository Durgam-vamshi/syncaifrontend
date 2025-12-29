
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./Hero.module.css";

import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // 1. Pre-warm the video for smoother playback
    if (videoRef.current) {
      videoRef.current.defaultPlaybackRate = 1.0;
      videoRef.current.playbackRate = 1.0;
    }

    const ctx = gsap.context(() => {
      // Entry Animation: Use Force3D for GPU acceleration
      const tl = gsap.timeline({ defaults: { ease: "power4.out", force3D: true } });

      tl.from(titleRef.current.children, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
      })
      .from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
      }, "-=0.8");

      // Scroll Animation: Using 'will-change' in CSS + scrub: 1 for smoothing
      gsap.to(videoRef.current, {
        scale: 1.1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1, // Adds a slight catch-up delay to eliminate jitter
          invalidateOnRefresh: true, // Optimizes for resize
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      {/* Video with optimization attributes */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onCanPlayThrough={() => setIsVideoLoaded(true)}
        className={`${styles.video} ${isVideoLoaded ? styles.loaded : ""}`}
        poster="/assets/hero-placeholder.jpg" // Essential for fast perceived load
      >
        <source src="/assets/videohero.mp4" type="video/mp4" />
      </video>

      <div className={styles.overlay} />
      
      <div className={styles.content}>
        <h2 className={styles.kicker}>
          Strategic <span className={styles.accent}>AI</span> Integration
        </h2>

        <h1 ref={titleRef} className={styles.mainTitle}>
          <span className={styles.block}>You’ve tried the AI tools.</span>
          <span className={styles.highlightLine}>
            Now it’s time for an AI strategy.
          </span>
        </h1>

        <p ref={subtitleRef} className={styles.subtitle}>
          Stop juggling disconnected tools. Transform scattered solutions into a 
          <span className={styles.highlight}> unified, intelligent system.</span>
        </p>

        <div className={styles.ctaWrapper}>
          {/* <a href="#book-session" className={styles.cta}>
            Book Your Free Strategy Session
          </a> */}
          <Link to="/lead-form" className={styles.cta}>
  Book Your Free Strategy Session
</Link>

        </div>
      </div>
    </section>
  );
}