"use client";

import { motion, Variants } from "framer-motion";
import { Collection, caseStudies } from "@/data/portfolio";
import Section from "@/components/layout/Section";
import CaseStudyCard from "@/components/ui/CaseStudyCard/CaseStudyCard";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.5,
        },
    },
};

const wordVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    },
};

function AnimatedText({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) {
    if (!text) return null;
    return (
        <motion.span
            className={`inline-block ${className}`}
            initial="hidden"
            animate="show"
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.04, delayChildren: delay }
                }
            }}
        >
            {text.split(" ").map((word, index) => (
                <motion.span key={index} className="inline-block mr-[0.25em]" variants={wordVariants}>
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 200, damping: 20 }
    },
};

interface CollectionViewProps {
    collection: Collection;
}

export default function CollectionView({ collection }: CollectionViewProps) {
    const studies = caseStudies.filter((s) => s.collectionSlug === collection.slug);

    return (
        <div className="pt-[var(--header-height)] bg-[var(--color-brand-secondary-950)]">
            <Section>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-0 left-0 right-0 pt-38 md:pt-48 pb-12 md:pb-16 px-12 md:px-30 lg:px-56 mb-16 bg-[var(--color-brand-secondary-900)] w-full"
                >
                    <motion.h5
                        className="text-body min-h-[1.25rem]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
                    >
                        {collection.title || " "}
                    </motion.h5>

                    <motion.h1
                        className="mb-1 uppercase"
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
                        {"Case Studies".split("").map((char, index) => (
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

                    <motion.span
                        className="text-body block min-h-[1rem]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                    >
                        {collection.description || " "}
                    </motion.span>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 gap-x-4 gap-y-4 pt-60"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    transition={{
                        duration: 0.4,
                        ease: "easeOut",
                    }}
                >
                    {studies.length > 0 ? (
                        studies.map((study) => (
                            <motion.div key={study.slug} variants={itemVariants}>
                                <CaseStudyCard study={study} />
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-muted">No case studies found in this collection.</p>
                    )}
                </motion.div>
            </Section>
        </div>
    );
}
