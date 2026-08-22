import React from 'react';
import { motion } from 'framer-motion';

// Shared easing so every entrance on the site decelerates the same way.
export const EASE = [0.22, 1, 0.36, 1];

/**
 * Fades and lifts its children into place the first time they scroll into
 * view. `delay` staggers siblings; `y` sets how far they travel.
 */
const Reveal = ({ children, className, delay = 0, y = 24, amount = 0.2 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount }}
    transition={{ duration: 0.55, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export default Reveal;
