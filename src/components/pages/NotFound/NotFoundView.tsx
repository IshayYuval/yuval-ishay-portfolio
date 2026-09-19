"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Button from "@/components/ui/Button/Button";
import NotFound404 from "./NotFound404";
import DotPattern from "@/components/ui/Patterns";

const contentContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function NotFoundView() {
  return (
    <DotPattern
      className="relative flex-1 flex flex-col items-center justify-center pt-[var(--header-height)] px-4 sm:px-6 md:px-8 py-8 md:py-12 overflow-hidden"
    >
      <motion.div
        variants={contentContainerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center text-center max-w-xl mx-auto my-auto"
      >
        {/* 1. 404 Component with interactive Bounding Box '0' */}
        <motion.div variants={itemVariants} className="mb-8 sm:mb-20">
          <NotFound404 />
        </motion.div>

        {/* 2. Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-[var(--color-typography-header)] mb-2 uppercase"
        >
          Empty Canvas
        </motion.h1>

        {/* 3. Description */}
        <motion.p
          variants={itemVariants}
          className="text-body mx-auto mb-8 sm:mb-10 px-2"
        >
          {"I'm sorry, but I haven't designed and built what you're looking for (yet…)."}
          <br />
          {"Don't worry, I'll take you somewhere interesting instead!"}
        </motion.p>

        {/* 4. Return Home Button */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4"
        >
          <Button href="/" variant="primary" className="min-w-[180px] justify-center shadow-lg">
            My Favorite Projects
          </Button>
          <Button href="/about" variant="secondary" className="min-w-[180px] justify-center shadow-lg">
            My Story
          </Button>
        </motion.div>
      </motion.div>
    </DotPattern>
  );
}
