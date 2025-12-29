import "../styles/insightsection.css";

export default function InsightSection() {
  return (
    <section className="insight-section">
      <div className="insight-inner">
        {/* Context label */}
        <p className="insight-eyebrow">Perspective</p>

        {/* Title */}
        <h2 className="insight-title">
          The <span>“Aha”</span> Moment
        </h2>

        {/* Conceptual lead */}
        <p className="insight-lead">
          Most teams don’t realize what’s slowing them down until they step
          back and look at the system as a whole.
        </p>

        {/* Insight block */}
        <article className="insight-block">
          <div className="insight-left">
            <h3 className="insight-heading">
              Automation doesn’t fail — fragmented thinking does
            </h3>

            <p className="insight-excerpt">
              When AI tools are added one by one, without a unifying design,
              teams end up accelerating confusion instead of progress.
              Synchronization is not a technical problem — it’s a systems one.
            </p>

            <div className="insight-meta">
              <span className="insight-author">Vamshi Durgam</span>
              <span className="insight-separator">—</span>
              <span>Aug 12, 2025</span>
              <span className="insight-separator">•</span>
              <span>4 min read</span>
            </div>
          </div>

          {/* Visual anchor */}
          <div className="insight-right">
            <span className="insight-mark">?</span>
          </div>
        </article>

        {/* Why this matters */}
        <p className="insight-why">
          <strong>Why this matters:</strong> Organizations that think in systems
          make better decisions, scale more calmly, and extract real value
          from AI — long before others notice the difference.
        </p>
      </div>
    </section>
  );
}
