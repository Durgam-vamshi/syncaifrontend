import { useEffect, useRef, useState } from "react";
import "../../styles/problems.css";

export default function Problems() {
  const [isSynced, setIsSynced] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const steps = [
    { id: 1, label: "CRM Process", pain: "Manual Data Silos", gain: "Unified Intelligence", x: 15, y: 30 },
    { id: 2, label: "Lead Qualification", pain: "Inconsistent Vetting", gain: "Autonomous Precision", x: 40, y: 65 },
    { id: 3, label: "Strategy Planning", pain: "Fragmented Data", gain: "Predictive Clarity", x: 65, y: 25 },
    { id: 4, label: "Onboarding SOP", pain: "Operational Friction", gain: "Seamless Velocity", x: 88, y: 55 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsSynced(true);
    }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    const handleMouseMove = (e) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 20, y: (e.clientY / window.innerHeight) * 20 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section ref={sectionRef} className={`trans-section ${isSynced ? "is-synced" : ""}`}>
      {/* Dynamic Background Paralax */}
      <div 
        className="trans-bg-text"
        style={{ transform: `translate(calc(-50% + ${mousePos.x}px), calc(-50% + ${mousePos.y}px))` }}
      >
        STRATEGY
      </div>
      
      <div className="trans-container">
        <header className="trans-header">
          <span className="trans-eyebrow">THE ARCHITECTURE OF EFFICIENCY</span>
          <h2 className="trans-title">
            From <span className="chaos-word">Fragmented Tool Sprawl</span><br />
            to <span className="sync-word">Unified Autonomous Flow</span>
          </h2>
        </header>

        <div className="pipeline-visual">
          <svg className="pipeline-svg" viewBox="0 0 1000 400">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(249, 115, 22, 0)" />
                <stop offset="50%" stopColor="rgba(249, 115, 22, 1)" />
                <stop offset="100%" stopColor="rgba(249, 115, 22, 0)" />
              </linearGradient>
            </defs>
            
            {/* The "Chaos" Tangle Lines (Fades out on Sync) */}
            <g className="chaos-lines">
              <path d="M0,200 Q250,50 500,350 T1000,200" className="tangle t1" />
              <path d="M0,200 Q350,350 500,50 T1000,200" className="tangle t2" />
            </g>

            {/* The "Order" Path (Glows on Sync) */}
            <path 
              className="main-path" 
              d="M 0 200 L 1000 200" 
            />

            {/* Kinetic Data Particles */}
            <circle r="3" className="data-blob">
               <animateMotion dur="3s" repeatCount="indefinite" path="M 0 200 L 1000 200" />
            </circle>
          </svg>

          {steps.map((step) => (
            <div 
              key={step.id} 
              className="step-node" 
              style={{ left: `${step.x}%`, top: `${step.y}%` }}
            >
              <div className="node-glass">
                <div className="node-indicator"></div>
                <div className="node-info">
                  <span className="node-tag">PHASE 0{step.id}</span>
                  <h4>{step.label}</h4>
                  <div className="transformation-box">
                    <span className="status-label">CURRENT</span>
                    <p className="val-pain">{step.pain}</p>
                    <div className="arrow-transition">↓</div>
                    <span className="status-label optimized">OPTIMIZED</span>
                    <p className="val-gain">{step.gain}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}