import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'none';
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const yOffset = direction === 'up' ? 40 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for a premium feel
        delay: delay / 1000 // framer-motion uses seconds for delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
