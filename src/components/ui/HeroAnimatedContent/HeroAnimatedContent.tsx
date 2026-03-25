"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button/Button";

const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
        },
    },
};

const wordVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
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
            delayChildren: 1.0,
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

const captionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 1.4,
            duration: 0.8,
        },
    },
};

export default function HeroAnimatedContent() {
    const h1Text = "I'M YUVAL, TURNING IDEAS INTO REAL-WORLD PRODUCTS.";
    const subText = "Multidisciplinary designer, specializing in branding, product design and AI-driven development.";

    const { scrollY } = useScroll();
    // Assuming a standard screen height is around 800-1000px, 600px of scroll is a good point to fully fade out.
    const opacity = useTransform(scrollY, [0, 600], [1, 0]);

    return (
        <motion.div className="container-custom z-10" style={{ opacity }}>
            <motion.h1
                className="mb-1 ml-0.5"
                variants={textContainerVariants}
                initial="hidden"
                animate="visible"
            >
                {h1Text.split(" ").map((word, index) => (
                    <motion.span key={index} className="inline-block mr-[0.25em]" variants={wordVariants}>
                        {word}
                    </motion.span>
                ))}
            </motion.h1>

            <motion.div
                className="subhero ml-0.5 block"
                variants={subheroContainerVariants}
                initial="hidden"
                animate="visible"
            >
                {subText.split(" ").map((word, index) => (
                    <motion.span key={index} className="inline-block mr-[0.25em]" variants={subWordVariants}>
                        {word}
                    </motion.span>
                ))}
            </motion.div>

            <motion.div
                className="flex gap-4 sm:flex-row flex-col mt-16 mb-2"
                variants={buttonContainerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={buttonVariants} className="w-full sm:w-[200px]">
                    <Button variant="primary" targetId="featured-works" className="w-full justify-center">
                        Show me the work!
                    </Button>
                </motion.div>
                <motion.div variants={buttonVariants} className="w-full sm:w-[200px]">
                    <Button variant="secondary" href="/about" className="w-full justify-center">
                        What's your story?
                    </Button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
