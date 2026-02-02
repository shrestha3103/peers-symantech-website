import { motion } from "framer-motion";
import GradientCircle from "./GradientCircle";

export default function FloatingCircle({ size, position, delay }) {
  return (
    <motion.div
      className={`absolute ${position}`}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <GradientCircle size={size} />
    </motion.div>
  );
}
