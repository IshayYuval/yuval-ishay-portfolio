import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/data/portfolio";
import ZigZagRow from "@/components/case-study-parts/ZigZagRow";
import DynamicGrid from "@/components/case-study-parts/DynamicGrid";
import Button from "../ui/Button/Button";
import { renderTextWithBreaks } from "@/utils/text";

export default function BrandingLayout({ data }: { data: CaseStudy }) {
    return (
        <article className="min-h-screen pb-24" style={{ backgroundColor: data.backgroundColor }}>
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

            <div className="container-custom mx-auto px-6">
                {/* Intro Section */}
                <section className="max-w-4xl mx-auto pt-24">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center">About the Project</h1>
                    {data.introText && (
                        <p className="text-xl md:text-2xl text-left text-[var(--foreground)] opacity-90 font-light mb-6">
                            {renderTextWithBreaks(data.introText)}
                        </p>
                    )}
                    {data.projectUrl && (
                        <Button
                            href={data.projectUrl}
                            target="_blank"
                            className="bg-[var(--foreground)] mb-8 text-[var(--background)] rounded-full font-medium hover:opacity-90 transition-opacity"
                        >
                            Visit Website
                        </Button>
                    )}
                </section>

                {data.processSteps && (
                    <section className="grid grid-cols-1 gap-12 mb-16 max-w-4xl mx-auto">
                        {data.processSteps.map((step, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <h3 className="font-bold">{renderTextWithBreaks(step.title)}</h3>
                                {step.text && <p className="text-[var(--foreground)]/80 leading-relaxed font-light">{renderTextWithBreaks(step.text)}</p>}
                                {step.bullets && step.bullets.length > 0 && (
                                    <ul className="list-disc pl-5 text-[var(--foreground)]/80 space-y-2">
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
                        <h1 className="mb-2 text-center">Visual Language</h1>
                        {data.contentSections.map((section, index) => (
                            <ZigZagRow key={index} {...section} />
                        ))}
                    </section>
                )}

                {/* Showcase / Gallery */}
                {(data.gallery && data.gallery.length > 0) && (
                    <section className="py-24">
                        <h1 className="text-5xl md:text-7xl font-bold text-center mb-8">The brand in action</h1>
                        <DynamicGrid items={data.gallery} />
                    </section>
                )}
            </div>
        </article>
    );
}
