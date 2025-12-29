
import { useEffect, useRef, useState } from "react";
import "../../styles/valuesection.css";

export default function ValueSection() {
  const sectionRef = useRef(null);
  const [isExploded, setIsExploded] = useState(false);
  const [active, setActive] = useState(null);

  const nodes = [
    { title: "Employee Satisfaction", text: "Systems that empower rather than drain." },
    { title: "Retention", text: "Keep your talent by respecting their focus." },
    { title: "Creativity Unlocked", text: "Original thinking resurfaces naturally." },
    { title: "Leadership Clarity", text: "See reality clearly when the noise stops." },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsExploded(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`hidden-roi ${isExploded ? "explode" : ""}`}>
      <div className="roi-header">
        <span className="roi-eyebrow">THE HUMAN ADVANTAGE</span>
        <h2 className="roi-main-title">
          Unleash <span className="text-gradient">Human Potential</span> 
          <br />Beyond the Machine
        </h2>
      </div>

      <div className="people-system">
        {/* Decorative Background Rings */}
        <div className="orbital-ring ring-1"></div>
        <div className="orbital-ring ring-2"></div>

        {/* LARGE CORE BUBBLE */}
        <div className="people-core">
          <div className="core-glow"></div>
          <span className="core-label">CORE</span>
          <h3 className="core-title">PEOPLE</h3>
          <p className="core-text">The heart of every breakthrough.</p>
        </div>

        {/* BURSTING NODES */}
        {nodes.map((n, i) => (
          <div
            key={i}
            className={`roi-node ${active === i ? "active" : ""}`}
            data-pos={i}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            <div className="node-glass-card">
              <span className="node-dot" />
              <h4>{n.title}</h4>
              <p>{n.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}