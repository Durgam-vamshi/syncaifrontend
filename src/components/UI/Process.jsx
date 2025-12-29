


import { useEffect, useRef, useState } from "react";
import "../../styles/process.css";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  const steps = [
    {
      title: "Audit",
      subtitle: "Understand reality",
      deliverables: ["System map", "Hidden bottlenecks", "True priorities"],
    },
    {
      title: "Build",
      subtitle: "Design systems",
      deliverables: [
        "Custom workflows",
        "AI decision logic",
        "Resilient architecture",
      ],
    },
    {
      title: "Unify",
      subtitle: "Make everything talk",
      deliverables: [
        "Single source of truth",
        "Synced tools & data",
        "Operational clarity",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveStep(index);
          }
        });
      },
      {
        root: null,
        threshold: 0,
        // 🎯 Center-based activation (works for small steps)
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="process-stepper">
      <span className="process-eyebrow">THE PROCESS</span>

      <h2 className="process-title">How We Untangle the Mess</h2>

      <div className="stepper">
        <div className="stepper-line" />

        {steps.map((step, i) => (
          <div
            key={i}
            ref={(el) => (stepRefs.current[i] = el)}
            data-index={i}
            className={`step ${activeStep === i ? "active" : ""}`}
          >
            <div className="step-indicator">
              <span className="step-index">0{i + 1}</span>
            </div>

            <div className="step-content">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-subtitle">{step.subtitle}</p>

              <div className="step-details">
                <ul>
                  {step.deliverables.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}




