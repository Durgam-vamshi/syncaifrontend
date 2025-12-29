




// import AnimatedCard from "../components/UI/AnimatedCard";
// import "../styles/features.css"

// export default function Features() {
//   return (
//     <section data-scroll-section className="features">
//       <AnimatedCard
//         title="AI Strategy"
//         description="We design a clear AI roadmap aligned to your business goals — no tool chaos, no guesswork. Just a system that makes sense."
//         highlight="From idea to execution"
//       />

//       <AnimatedCard
//         title="System Integration"
//         description="Your tools shouldn’t work in silos. We connect models, data, and workflows into one reliable, scalable AI system."
//         highlight="One unified intelligence layer"
//       />

//       <AnimatedCard
//         title="Automation Pipelines"
//         description="We build production-ready automation that removes manual work, reduces errors, and scales without breaking."
//         highlight="Built for real-world scale"
//       />
//     </section>
//   );
// }
import "../styles/features.css";

export default function Features() {
  return (
    <section data-scroll-section className="features">
      {/* Card 1 */}
      <div className="feature-card">
        <span className="feature-highlight">From idea to execution</span>
        <h3 className="feature-title">AI Strategy</h3>
        <p className="feature-description">
          We design a clear AI roadmap aligned to your business goals — no tool
          chaos, no guesswork. Just a system that makes sense.
        </p>
      </div>

      {/* Card 2 */}
      <div className="feature-card">
        <span className="feature-highlight">One unified intelligence layer</span>
        <h3 className="feature-title">System Integration</h3>
        <p className="feature-description">
          Your tools shouldn’t work in silos. We connect models, data, and
          workflows into one reliable, scalable AI system.
        </p>
      </div>

      {/* Card 3 */}
      <div className="feature-card">
        <span className="feature-highlight">Built for real-world scale</span>
        <h3 className="feature-title">Automation Pipelines</h3>
        <p className="feature-description">
          We build production-ready automation that removes manual work,
          reduces errors, and scales without breaking.
        </p>
      </div>
    </section>
  );
}
