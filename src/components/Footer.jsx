import "../styles/footer.css";

export default function Footer() {


  
  return (
    <footer className="footer">
      <div className="footer-glow" />

      <div className="footer-inner">
        {/* Brand Promise */}
        <p className="footer-promise">
          We design{" "}
          <span className="promise-highlight">
            systems that think
            <span className="promise-underline" />
          </span>{" "}
          — so people don’t have to fight them.
        </p>

        {/* Meta Links */}
        <nav className="footer-links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Copyright */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Synchronize AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
