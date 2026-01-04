import React from "react";
import { CaseStudy } from "@/data/portfolio";
import DynamicGrid from "@/components/case-study-parts/DynamicGrid";
import { renderTextWithBreaks } from "@/utils/text";
import Tag from "../ui/Tag/Tag";

export default function VisualLayout({ data }: { data: CaseStudy }) {
    return (
        <article className="min-h-screen pt-[var(--header-height)] pb-24">
            <div className="container-custom mx-auto px-6">
                <header className="py-24 max-w-4xl mx-auto">
                    <h1 className="mb-2 text-center">about the project</h1>

                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {data.tags.map(tag => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                    </div>
                    {data.introText && (
                        <p className="text-body">
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
