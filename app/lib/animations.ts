import { Variants } from "framer-motion";

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Fade in up animation
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Fade in down animation
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Scale up animation
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Stagger container for children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger container with more delay
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

// Item for stagger children
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Hover scale effect
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

// Hover lift effect
export const hoverLift = {
  y: -8,
  transition: { duration: 0.3 },
};

// Tap scale effect
export const tapScale = {
  scale: 0.95,
};

// Counter animation for stats
export const counterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Image reveal animation
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Line draw animation (for decorative elements)
export const lineDraw: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

// Accordion expand animation
export const accordionContent: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// Card hover variants
export const cardHover: Variants = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 },
  },
};

// Button hover variants
export const buttonHover: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

// Page transition
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

// Viewport settings for scroll animations
export const viewportSettings = {
  once: true,
  margin: "-100px",
  amount: 0.2,
};

