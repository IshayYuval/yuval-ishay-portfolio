import React from "react";
import { CaseStudy } from "@/data/portfolio";
import DynamicGrid from "@/components/case-study-parts/DynamicGrid";
import { renderTextWithBreaks } from "@/utils/text";
import Tag from "../ui/Tag/Tag";
import Button from "../ui/Button/Button";

export default function VisualLayout({ data }: { data: CaseStudy }) {
    return (
        <article className="min-h-screen pt-[var(--header-height)] pb-24" style={{ backgroundColor: data.backgroundColor }}>
            <div className="container-custom mx-auto px-6">
                <header className="pt-24 max-w-4xl mx-auto">
                    <div className="text-body text-center">
                        {new Date(data.date).toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                        })}
                    </div>
                    <h1 className="text-center">about the project</h1>
                    <div className="flex flex-wrap justify-center gap-2 mt-2 mb-8">
                        {data.tags.map(tag => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                    </div>
                    {data.introText && (
                        <p className="text-body">
                            {renderTextWithBreaks(data.introText)}
                        </p>
                    )}
                    {data.projectUrl && (
                        <div className="flex mt-6">
                            <Button
                                href={data.projectUrl}
                                target="_blank"
                                variant="secondary"
                            >
                                {data.projectUrlText || "Visit Project"}
                            </Button>
                        </div>
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
