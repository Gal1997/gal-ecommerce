"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode } from "react";

const PageAnimationWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.3, duration: 0.75 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageAnimationWrapper;
