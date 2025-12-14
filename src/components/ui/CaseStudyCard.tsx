import Link from "next/link";
import { CaseStudy } from "@/data/portfolio";

interface CaseStudyCardProps {
    study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
    return (
        <Link href={`/case-studies/${study.slug}`} className="card group relative block overflow-hidden rounded-[var(--radius)]">
            <div className="relative aspect-[4/3] w-full bg-[var(--muted-light)]">
                {/* Placeholder for image */}
                <div className="w-full h-full flex items-center justify-center text-[var(--muted)]">
                    <span className="text-sm font-medium">Cover Image</span>
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-all duration-300 opacity-0 group-hover:opacity-100 bg-black/50 backdrop-blur-[2px]">
                    <h3 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{study.title}</h3>
                    <p className="text-white/90 text-sm mb-4 line-clamp-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{study.excerpt}</p>
                    <div className="flex gap-2 flex-wrap justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
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
