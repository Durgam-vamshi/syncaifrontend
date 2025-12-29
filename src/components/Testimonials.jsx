
import { motion } from "framer-motion";
import "../styles/testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Founder, SaaS Company",
      quote:
        "This AI strategy actually worked in production. No buzzwords — just execution.",
      video: "/assets/testimonial.mp4",
    },
    {
      name: "CTO, Fintech Startup",
      quote:
        "Clear systems. Clear thinking. Our AI stack finally makes sense.",
      video: "/assets/testimonial.mp4",
    },
    {
      name: "CEO, B2B Platform",
      quote:
        "Finally someone who understands both AI and real business constraints.",
      video: "/assets/testimonial.mp4",
    },
  ];

  return (
    <section className="testimonials">
      <h2 className="testimonials-title">
        Trusted by Founders & Builders
      </h2>

      <div className="testimonial-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <motion.div
              className="testimonial-card-inner"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
            >
              {/* VIDEO */}
              <div className="testimonial-video">
                <video
                  src={t.video}
                  muted   // starts muted (required for autoplay/hover-play)
                  loop
                  playsInline
                  preload="metadata"
                  controls   // user can unmute using volume control
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                  className="testimonial-video-element"
                />
              </div>
              {/* TEXT */}
              <div className="testimonial-content">
                <p className="testimonial-quote">“{t.quote}”</p>
                <span className="testimonial-name">{t.name}</span>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}


