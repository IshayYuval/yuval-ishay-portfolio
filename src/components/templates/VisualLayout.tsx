import React from "react";
import { CaseStudy } from "@/data/portfolio";
import DynamicGrid from "@/components/case-study-parts/DynamicGrid";
import { renderTextWithBreaks } from "@/utils/text";

export default function VisualLayout({ data }: { data: CaseStudy }) {
    return (
        <article className="min-h-screen pt-[var(--header-height)] pb-24">
            <div className="container-custom mx-auto px-6">
                <header className="py-24 max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">{data.title}</h1>
                    {data.introText && (
                        <p className="text-xl md:text-2xl leading-relaxed text-[var(--foreground)] opacity-90 font-light">
                            {renderTextWithBreaks(data.introText)}
                        </p>
                    )}
                </header>

                {/* Gallery */}
                {(data.gallery && data.gallery.length > 0) && (
                    <section className="py-12">
                        <DynamicGrid items={data.gallery} />
                    </section>
                )}
            </div>
        </article>
    );
}
