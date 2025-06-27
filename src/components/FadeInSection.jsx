import { motion } from "framer-motion";

export function FadeInSection({ children, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}