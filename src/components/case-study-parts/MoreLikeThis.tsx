"use client";

import React from "react";
import { caseStudies } from "@/data/portfolio";
import CaseStudyCard from "@/components/ui/CaseStudyCard/CaseStudyCard";

interface MoreLikeThisProps {
    currentSlug: string;
    collectionSlug: string;
}

export default function MoreLikeThis({ currentSlug, collectionSlug }: MoreLikeThisProps) {
    const [relatedStudies, setRelatedStudies] = React.useState<typeof caseStudies>([]);
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        // Filter case studies from same collection, excluding current one
        const candidates = caseStudies.filter(
            study => study.collectionSlug === collectionSlug && study.slug !== currentSlug
        );

        // Shuffle array using Durstenfeld shuffle
        const shuffled = [...candidates];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        // Take top 4
        setRelatedStudies(shuffled.slice(0, 4));
        setIsLoaded(true);
    }, [currentSlug, collectionSlug]);

    if (!isLoaded || relatedStudies.length === 0) return null;

    return (
        <section className="py-8">
            <div className="container-custom mx-auto px-6">
                <h3 className="mb-6">You may also like</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
                    {relatedStudies.map(study => (
                        <CaseStudyCard key={study.slug} study={study} hideExcerpt={true} hideTags={true} />
                    ))}
                </div>
            </div>
        </section>
    );
}
