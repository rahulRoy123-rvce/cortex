"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export const ResizableNavbar = () => {
  const { scrollYProgress } = useScroll();
  
  const height = useTransform(scrollYProgress, [0, 0.2], [80, 50]);
  const padding = useTransform(scrollYProgress, [0, 0.2], [24, 12]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.2], [16, 8]);
  
  return (
    <motion.div
      style={{
        height,
        padding,
        borderRadius,
      }}
      className="fixed top-4 left-4 right-4 bg-black/50 backdrop-blur-xl border border-white/10 z-50"
    >
      <nav className="flex items-center justify-between h-full">
        <div className="text-white font-bold">Cortex IDE</div>
        <div className="flex items-center gap-4">
          <a href="#features" className="text-white/70 hover:text-white">Features</a>
          <a href="#security" className="text-white/70 hover:text-white">Security</a>
          <a href="#chains" className="text-white/70 hover:text-white">Chains</a>
          <a href="#demo" className="text-white/70 hover:text-white">Demo</a>
          <a href="#get-started" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Get Started
          </a>
        </div>
      </nav>
    </motion.div>
  );
}; 