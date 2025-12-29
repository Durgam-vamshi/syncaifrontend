


import { motion } from "framer-motion";

export default function AnimatedCard({ title, description, highlight }) {
  return (

    <motion.div
  className="card"
  whileHover={{ y: -12 }}
  transition={{ type: "spring", stiffness: 180, damping: 18 }}
>

      <span className="card-highlight">{highlight}</span>

      <h3 className="card-title">{title}</h3>

      <p className="card-description">{description}</p>
    </motion.div>
  );
}
