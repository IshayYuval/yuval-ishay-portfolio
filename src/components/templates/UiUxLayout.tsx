import React from "react";
import Link from "next/link";
import Image from "next/image"; // Added Image import
import { CaseStudy } from "@/data/portfolio";
import ZigZagRow from "@/components/case-study-parts/ZigZagRow";
import DynamicGrid from "@/components/case-study-parts/DynamicGrid";
import { renderTextWithBreaks } from "@/utils/text";
import Button from "../ui/Button/Button";

export default function UiUxLayout({ data }: { data: CaseStudy }) {
    return (
        <article className="min-h-screen pb-24" style={{ backgroundColor: data.backgroundColor }}> {/* Adjusted padding */}
            {/* Hero Image */}
            {data.heroImage && (
                <div className="relative w-full h-[20vh] md:h-[40vh]">
                    <Image
                        src={data.heroImage}
                        alt={`${data.title} Hero`}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            <div className={`container-custom max-w-4xl mx-auto px-6 ${!data.heroImage ? 'pt-[var(--header-height)]' : ''}`}> {/* Adjusted padding */}
                {/* Header */}
                <header className="py-20 max-w-4xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-2 mb-3">
                        {data.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 border border-[var(--foreground)]/20 rounded-full text-sm">{tag}</span>
                        ))}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center">About the Project</h1>
                    {data.introText && (
                        <p className="text-xl md:text-2xl leading-relaxed text-[var(--foreground)] opacity-90 font-light mb-8">
                            {renderTextWithBreaks(data.introText)}
                        </p>
                    )}
                    {data.projectUrl && (
                        <Button
                            href={data.projectUrl}
                            target="_blank"
                            className="inline-block px-8 py-3 border border-[var(--foreground)] rounded-full font-medium hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
                        >
                            View Live Project
                        </Button>
                    )}
                </header>


                {/* Process Steps */}
                {data.processSteps && (
                    <section className="grid grid-cols-1 gap-12 mb-16 max-w-4xl mx-auto">
                        {data.processSteps.map((step, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <h3 className="font-bold">{renderTextWithBreaks(step.title)}</h3>
                                {step.text && <p className="text-[var(--foreground)]/80 leading-relaxed font-light">{renderTextWithBreaks(step.text)}</p>}
                                {step.bullets && step.bullets.length > 0 && (
                                    <ul className="list-disc pl-5 text-[var(--foreground)]/80 leading-relaxed font-light space-y-2">
                                        {step.bullets.map((bullet, i) => (
                                            <li key={i}>
                                                {typeof bullet === "string" ? (
                                                    renderTextWithBreaks(bullet)
                                                ) : (
                                                    <>
                                                        {bullet.label && (
                                                            <span style={{ color: bullet.labelColor, fontWeight: bullet.labelWeight }}>
                                                                {bullet.label}
                                                            </span>
                                                        )}
                                                        {renderTextWithBreaks(bullet.text)}
                                                    </>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {step.textAfter && <p className="text-[var(--foreground)]/80 leading-relaxed font-light">{renderTextWithBreaks(step.textAfter)}</p>}
                            </div>
                        ))}
                    </section>
                )}

                {/* Content Sections */}
                {data.contentSections && (
                    <section className="py-12">
                        {data.contentSections.map((section, index) => (
                            <ZigZagRow key={index} {...section} />
                        ))}
                    </section>
                )}

                {/* Gallery */}
                {(data.gallery && data.gallery.length > 0) && (
                    <section className="py-24">
                        <DynamicGrid items={data.gallery} />
                    </section>
                )}

            </div>
        </article>
    );
}
