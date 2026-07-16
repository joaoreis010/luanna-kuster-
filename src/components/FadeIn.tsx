import React from 'react';
import { motion } from 'motion/react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  y = 20, 
  x = 0, 
  className = "",
  direction
}) => {
  let initialX = x;
  let initialY = y;

  if (direction === 'left') initialX = 40;
  if (direction === 'right') initialX = -40;
  if (direction === 'up') initialY = 40;
  if (direction === 'down') initialY = -40;

  return (
    <motion.div
      initial={{ opacity: 0, y: initialY, x: initialX }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
