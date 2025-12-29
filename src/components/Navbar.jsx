

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import "../styles/navbar.css";

export default function Navbar() {
  const navRef = useRef(null);
  const ctaRef = useRef(null);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const lastScroll = useRef(0);

  useEffect(() => {
    const nav = navRef.current;
    const btn = ctaRef.current;
    if (!nav || !btn) return;

    const onScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll.current && current > 120) {
        gsap.to(nav, { y: -120, duration: 0.5, ease: "power3.out" });
      } else {
        gsap.to(nav, { y: 0, duration: 0.5, ease: "power3.out" });
      }
      lastScroll.current = current;
    };

    window.addEventListener("scroll", onScroll);

    const strength = 16;
    const move = (e) => {
      if (window.innerWidth < 900) return;
      const rect = btn.getBoundingClientRect();
      gsap.to(btn, {
        x: (e.clientX - rect.left - rect.width / 2) / strength,
        y: (e.clientY - rect.top - rect.height / 2) / strength,
        duration: 0.4,
        ease: "power3.out"
      });
    };

    const reset = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "power3.out" });
    };

    btn.addEventListener("mousemove", move);
    btn.addEventListener("mouseleave", reset);

    return () => {
      window.removeEventListener("scroll", onScroll);
      btn.removeEventListener("mousemove", move);
      btn.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <motion.nav
      ref={navRef}
      className={`navbar ${menuOpen ? "menu-open" : ""}`}
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
    >
      <div className="nav-inner">
        {/* LEFT */}
        {/* <div className="nav-left">
          <Link to="/" className="logo">SynchronizeAI</Link>
        </div> */}

     <div className="nav-left">
  <Link to="/" className="logo">
    <img
      src="/assets/syncailogo.png"
      alt="SynchronizeAI logo"
      className="logo-img"
    />
  </Link>
</div>



        {/* CENTER (DESKTOP) */}
        <div className="nav-center">
          <Link to="/problems">Challenges</Link>
          <Link to="/philosophy">Philosophy</Link>
          <Link to="/process">Process</Link>
          <Link to="/ecosystem">Ecosystem</Link>
          <Link to="/insights">Insights</Link>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          <button
            ref={ctaRef}
            className="nav-cta"
            onClick={() => navigate("/lead-form")}
          >
            Book Session
          </button>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-links">
          <Link onClick={() => setMenuOpen(false)} to="/problems">Challenges</Link>
          <Link onClick={() => setMenuOpen(false)} to="/philosophy">Philosophy</Link>
          <Link onClick={() => setMenuOpen(false)} to="/process">Process</Link>
          <Link onClick={() => setMenuOpen(false)} to="/ecosystem">Ecosystem</Link>
          <Link onClick={() => setMenuOpen(false)} to="/insights">Insights</Link>
        </div>

        <button
          className="mobile-cta"
          onClick={() => {
            setMenuOpen(false);
            navigate("/lead-form");
          }}
        >
          Book Session
        </button>
      </div>
    </motion.nav>
  );
}