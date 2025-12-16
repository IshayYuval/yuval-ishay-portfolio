import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/data/portfolio";
import styles from "./CaseStudyCard.module.css";

interface CaseStudyCardProps {
    study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
    return (
        <Link href={`/case-studies/${study.slug}`} className={`${styles.card} group relative block overflow-hidden rounded-[var(--radius)]`}>
            <div className={`${styles['card-image-wrapper']} relative aspect-[4/3] w-full bg-[var(--color-brand-secondary-800)]`}>
                {study.cover ? (
                    <Image
                        src={study.cover}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-[var(--muted)]">
                    </div>
                )}

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-center px-10 py-4 transition-all duration-300 opacity-0 group-hover:opacity-100 bg-[var(--color-brand-secondary-700)]/70 backdrop-blur-[4px]">
                    <h3 className={`mb-2 px-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300`}>{study.title}</h3>
                    <p className={`mb-4 px-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75`}>{study.excerpt}</p>
                    <div className="flex gap-2 flex-wrap translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                        {study.tags.map(tag => (
                            <span key={tag} className="text-[10px] uppercase tracking-wider border border-white/40 text-white px-2 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}
