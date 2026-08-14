"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button/Button";
import RevealTextHeader from "@/components/ui/RevealTextHeader/RevealTextHeader";
import { useContext } from "react";
import { AnimationContext } from "@/components/utils/AnimationProvider";

const subheroContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.02,
            delayChildren: 0.5,
        },
    },
};

const subWordVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    },
};

const buttonContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.8,
        },
    },
};

const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function HeroAnimatedContent() {
    const isBackNav = useContext(AnimationContext);
    const subText = "Multidisciplinary designer, specializing in branding, product design and AI-driven development.";
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 600], [1, 0]);

    return (
        <motion.div className="px-0 sm:px-[4rem] z-10" style={{ opacity }}>
            <RevealTextHeader />

            <motion.div
                className="subhero ml-0.5 block mt-6"
                variants={subheroContainerVariants}
                initial={isBackNav ? false : "hidden"}
                animate="visible"
            >
                {subText.split(" ").map((word, index) => (
                    <motion.span key={index} className="inline-block mr-[0.25em]" variants={subWordVariants}>
                        {word}
                    </motion.span>
                ))}
            </motion.div>

            <motion.div
                className="flex gap-2 sm:gap-4 sm:flex-row flex-col mt-12 mb-2"
                variants={buttonContainerVariants}
                initial={isBackNav ? false : "hidden"}
                animate="visible"
            >
                <motion.div variants={buttonVariants} className="w-full sm:w-[212px]">
                    <Button variant="primary" targetId="featured-works" className="w-full justify-center">
                        Let me show you around!
                    </Button>
                </motion.div>
                <motion.div variants={buttonVariants} className="w-full sm:w-[212px]">
                    <Button variant="secondary" href="/about" className="w-full justify-center">
                        A little bit about me :)
                    </Button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
