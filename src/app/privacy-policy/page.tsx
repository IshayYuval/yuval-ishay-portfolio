"use client";

import { motion, Variants } from "framer-motion";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button/Button";
import BoundingBoxAnimation from "@/components/ui/BoundingBoxAnimation/BoundingBoxAnimation";
import DotPattern from "@/components/ui/Patterns";
import { useRouter } from "next/navigation";

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

export default function PrivacyPolicyPage() {
    const router = useRouter();

    const handleGoBack = () => {
        if (window.history.length > 1) {
            router.back();
        } else {
            router.push("/");
        }
    };

    return (
        <DotPattern className="flex-1 pt-[var(--header-height)]">
            <Section>
                <h1 className="sr-only">Privacy Policy</h1>
                <h1 aria-hidden="true">
                    <BoundingBoxAnimation text="Privacy Policy" delay={0.2} />
                </h1>

                <div className="pt-4 max-w-2xl px-[.75rem]">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                        className="text-body mb-8"
                    >

                        Oh, you’re checking the privacy policy? Fair enough ;)
                        <br />
                        I’m just a designer sharing my work. No tracking, no analytics, no cookies.
                        <br />
                        Just a portfolio and someone who probably spent too long deciding which font you’re reading this in.
                        <br />
                        <br />
                        The connection is encrypted with HTTPS, too. So grab your coffee (or tea, I don’t judge), make yourself comfortable, and have a look around.
                    </motion.p>
                    <motion.div
                        variants={buttonContainerVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-fit"
                    >
                        <motion.div variants={buttonVariants} className="w-fit flex gap-4">
                            <Button variant="primary" onClick={handleGoBack}>
                                Previous Page
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </Section >
        </DotPattern>
    );
}
