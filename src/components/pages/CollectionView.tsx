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
        },
    },
};

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
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute top-0 left-0 right-0 pt-38 md:pt-48 pb-12 md:pb-16 px-12 md:px-24 lg:px-48 mb-16 bg-[var(--color-brand-secondary-900)] w-full"
                >
                    <h5 className="text-body ">{collection.title}</h5>
                    <h1 className="mb-1">Case Studies</h1>
                    <span className="text-body">{collection.description}</span>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 gap-x-4 gap-y-4 pt-60"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    transition={{
                        delay: 3,
                        duration: 0.6,
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
