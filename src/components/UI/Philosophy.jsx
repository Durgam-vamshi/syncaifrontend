
import "../../styles/philosophy.css";

export default function Philosophy() {
  return (
    <section className="philosophy">
      <div className="philosophy-inner">
        <span className="philosophy-eyebrow">
          OUR PHILOSOPHY
        </span>

        <h2 className="philosophy-title">
          Synchronize,<br /> Don’t Just Automate
        </h2>

        <blockquote className="philosophy-manifesto">
          We don’t believe AI transformation is about adding more tools.
          <br />
          <br />
          It’s about aligning systems, people, and decisions
          so work flows naturally — without friction, without noise,
          without constant human correction.
        </blockquote>

        <div className="philosophy-divider" />

        <p className="philosophy-explanation">
          Automation without strategy accelerates chaos.
          <br />
          Strategy without execution stays theoretical.
          <br />
          <br />
          Synchronization is where leverage lives.
        </p>

        <p className="philosophy-footnote">
          This is why we don’t sell tools.
          <br />
          We design systems that think.
        </p>
      </div>
    </section>
  );
}
