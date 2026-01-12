"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/data/portfolio";
import StopMotion from "@/components/ui/StopMotion/StopMotion";
import Skeleton from "@/components/ui/Skeleton/Skeleton";
import styles from "./CaseStudyCard.module.css";

interface CaseStudyCardProps {
    study: CaseStudy;
    hideExcerpt?: boolean;
    hideTags?: boolean;
}

export default function CaseStudyCard({ study, hideExcerpt = false, hideTags = false }: CaseStudyCardProps) {
    const formattedDate = new Date(study.date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    });

    // Default loading to true until loaded.
    // NOTE: For Next/Image, it defaults to blurred placeholder if configured, but here we want a skeleton.
    const [isLoading, setIsLoading] = useState(true);

    return (
        <Link href={`/${study.slug}`} className={`${styles.card} group relative block overflow-hidden rounded-[var(--radius)]`}>
            <div className={`${styles['card-image-wrapper']} relative aspect-[4/3] w-full bg-[var(--color-brand-secondary-800)]`}>
                {study.stopMotionData ? (
                    <StopMotion
                        images={study.stopMotionData.images}
                        duration={study.stopMotionData.duration}
                        alt={study.stopMotionData.alt}
                    />
                ) : study.cover?.endsWith('.mp4') ? (
                    <video
                        src={study.cover}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />
                ) : study.cover ? (
                    <>
                        {isLoading && <Skeleton className="absolute inset-0 z-10 w-full h-full" />}
                        <Image
                            src={study.cover}
                            alt={study.title}
                            fill
                            className={`object-cover transition-transform duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            onLoad={() => setIsLoading(false)}
                        />
                    </>
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-[var(--muted)]">
                    </div>
                )}

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-10 py-4 transition-all duration-300 opacity-0 group-hover:opacity-100 bg-[var(--color-brand-secondary-700)]/70 backdrop-blur-[4px]">
                    <h3 className={`mb-2 px-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300`}>{study.title}</h3>
                    <span className="px-1 block text-white/70 mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-50">
                        {formattedDate}
                    </span>
                    {!hideExcerpt && <p className={`mb-4 px-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75`}>{study.excerpt}</p>}
                    {!hideTags && (
                        <div className="flex gap-2 flex-wrap translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                            {study.tags.map(tag => (
                                <span key={tag} className="text-[10px] uppercase tracking-wider border border-white/40 text-white px-2 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}
