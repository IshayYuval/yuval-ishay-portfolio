"use client";

import { motion, Variants } from "framer-motion";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button/Button";
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
        <div className="pt-[var(--header-height)] bg-[var(--color-brand-secondary-950)] min-h-screen">
            <Section>
                <motion.h1
                    className="mb-1"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 1 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.04
                            }
                        }
                    }}
                >
                    {"Privacy Policy".split("").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={{
                                hidden: { opacity: 0, display: "none" },
                                visible: { opacity: 1, display: "inline-block" }
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h1>

                <div className="pt-4 max-w-2xl">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                        className="text-body mb-8"
                    >
                        Looks like you're worried if you're here, so let me reassure you ;)
                        <br />
                        I'm just a designer showcasing his work, so I collect absolutely nothing.
                        Not cookies, not your browsing information, not tracking of any kind, nothing.
                        <br />
                        <br />
                        In addition, I'm using a secure HTTPS protocol to protect your information while here, so you can get comfortable, drink your coffee (or tea, I don't judge), and watch my work with a peace of mind!
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
        </div >
    );
}
