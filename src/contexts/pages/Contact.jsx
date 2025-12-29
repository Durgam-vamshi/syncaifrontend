import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="page contact" data-scroll-section>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1>Let’s Talk</h1>
        <p>Book a strategy session to align your AI.</p>

        <button className="primary-btn">
          Schedule Call
        </button>
      </motion.div>
    </section>
  );
}
