import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  width = "100%",
  className = "",
  delay = 0.25,
  direction = "up"
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const getVariants = () => {
    const distance = 75;
    const variants: { hidden: any; visible: any } = {
      hidden: { opacity: 0, y: 0, x: 0 },
      visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.5, delay } }
    };

    switch (direction) {
      case "up":
        variants.hidden.y = distance;
        break;
      case "down":
        variants.hidden.y = -distance;
        break;
      case "left":
        variants.hidden.x = distance;
        break;
      case "right":
        variants.hidden.x = -distance;
        break;
      case "none":
        variants.hidden.scale = 0.95;
        variants.visible = { ...variants.visible, scale: 1 };
        break;
    }

    return variants;
  };

  return (
    <div ref={ref} style={{ position: "relative", width }} className={className}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={mainControls}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};
