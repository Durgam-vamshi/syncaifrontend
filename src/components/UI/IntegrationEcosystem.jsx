

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "../../styles/integrationEcosystem.css";

const FILTERS = [
  { key: "all", label: "All (50)" },
  { key: "crm", label: "CRM (12)" },
  { key: "erp", label: "ERP (8)" },
  { key: "communication", label: "Communication (15)" },
  { key: "analytics", label: "Analytics (10)" },
  { key: "ai", label: "AI / ML (5)" },
];

const TOOLS = [
  { name: "Salesforce", tag: "Sa", category: "crm", color: "blue" },
  { name: "HubSpot", tag: "Hu", category: "crm", color: "orange" },
  { name: "SAP", tag: "SA", category: "erp", color: "navy" },
  { name: "Oracle", tag: "Or", category: "erp", color: "red" },
  { name: "Slack", tag: "Sl", category: "communication", color: "purple" },
  { name: "Teams", tag: "Te", category: "communication", color: "sky" },
  { name: "Tableau", tag: "Ta", category: "analytics", color: "lightblue" },
  { name: "Power BI", tag: "Po", category: "analytics", color: "gold" },
  { name: "OpenAI", tag: "Op", category: "ai", color: "green" },
  { name: "Anthropic", tag: "An", category: "ai", color: "burnt" },
  { name: "Zoom", tag: "Zo", category: "communication", color: "blue" },
  { name: "Asana", tag: "As", category: "communication", color: "pink" },
];

export default function IntegrationEcosystem() {
  const [active, setActive] = useState("all");
  const gridRef = useRef(null);

  const visibleTools =
    active === "all"
      ? TOOLS
      : TOOLS.filter((tool) => tool.category === active);

  /* 🎬 Animate cards on filter change */
  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.children;

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 24,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.06,
      }
    );
  }, [active]);

  return (
    <section className="integration-section">
      <div className="integration-inner">
        {/* Title */}
        <h2 className="integration-title">
          Our <span>Integration</span> Playbook
        </h2>

        <p className="integration-subtitle">
          We connect the tools you already rely on.
        </p>

        {/* Filters */}
        <div className="integration-filters">
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${
                active === filter.key ? "active" : ""
              }`}
              onClick={() => setActive(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="integration-grid" ref={gridRef}>
          {visibleTools.map((tool) => (
            <div
              key={tool.name}
              className={`integration-card ${tool.color}`}
            >
              <span className="integration-tag">{tool.tag}</span>
              <span className="integration-name">{tool.name}</span>
            </div>
          ))}
        </div>

        {/* Reassurance */}
        <p className="integration-footnote">
          No rip-and-replace. No disruption. Your systems stay — we design the
          layer that brings them together.
        </p>
      </div>
    </section>
  );
}
