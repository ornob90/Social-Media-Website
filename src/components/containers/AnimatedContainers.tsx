import React, { ReactNode } from "react";
import { motion, AnimatePresence, MotionProps } from "framer-motion";

interface AnimatedContainerProps extends MotionProps {
  children: ReactNode;
  className?: string;
  isVisible?: boolean; // Determines if the component should be visible
}

const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  children,
  className = "",
  initial = { opacity: 0, y: -50 }, // Start slightly above
  animate = { opacity: 1, y: 0 }, // Move to its required position
  exit = { opacity: 0, y: 50 }, // Move down and disappear
  transition = { duration: 0.3 }, // Control the speed of the animation
  isVisible = true,
  ...rest
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={className}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
          {...rest} // Spread any additional props to motion.div
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedContainer;
