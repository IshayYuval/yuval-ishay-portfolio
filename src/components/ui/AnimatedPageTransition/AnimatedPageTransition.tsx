"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useContext } from "react";
import { AnimationContext } from "@/components/utils/AnimationProvider";

interface AnimatedPageTransitionProps {
    children: ReactNode;
}

export default function AnimatedPageTransition({ children }: AnimatedPageTransitionProps) {
  const isBackNav = useContext(AnimationContext);
    return (
        <motion.div
            initial={isBackNav ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1], // Very soft, custom easing
            }}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
}
