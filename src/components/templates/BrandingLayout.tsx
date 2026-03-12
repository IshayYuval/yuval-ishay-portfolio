import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/data/portfolio";
import ZigZagRow from "@/components/case-study-parts/ZigZagRow";
import DynamicGrid from "@/components/case-study-parts/DynamicGrid";
import MoreLikeThis from "@/components/case-study-parts/MoreLikeThis";
import Button from "../ui/Button/Button";
import Tag from "../ui/Tag/Tag";
import { renderTextWithBreaks } from "@/utils/text";
import { formatCaseStudyDate } from "@/utils/dateUtils";

export default function BrandingLayout({ data }: { data: CaseStudy }) {
    return (
        <article className="min-h-screen pb-24" style={{ backgroundColor: data.backgroundColor }}>
            {/* Hero Image */}
            {data.heroImage && (
                <div
                    className="relative w-full h-[20vh] md:h-[40vh]"
                    style={{ backgroundColor: data.heroBackgroundColor }}
                >
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
                <section className="max-w-4xl mx-auto pt-22">
                    <div className="text-body text-center">
                        {formatCaseStudyDate(data)}
                    </div>
                    <h1 className="mb-2 text-center">About the Project</h1>
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {data.tags.map(tag => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                    </div>
                    {data.introText && (
                        <p className="text-body mb-6">
                            {renderTextWithBreaks(data.introText)}
                        </p>
                    )}
                    {data.projectUrl && (
                        <Button
                            href={data.projectUrl}
                            target="_blank"
                            variant={data.projectUrlVariant || "primary"}
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
                                {step.text && <p className="text-body">{renderTextWithBreaks(step.text)}</p>}
                                {step.bulletsTitle && <h4 className="font-bold mt-2">{renderTextWithBreaks(step.bulletsTitle)}</h4>}
                                {step.bullets && step.bullets.length > 0 && (
                                    <ul className="list-disc pl-5 text-body space-y-1.5">
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
                                {step.bulletSections && step.bulletSections.map((section, sIndex) => (
                                    <div key={sIndex} className="mt-4">
                                        {section.title && <h4 className="font-bold mt-2">{renderTextWithBreaks(section.title)}</h4>}
                                        <ul className="list-disc pl-5 text-body space-y-1.5">
                                            {section.bullets.map((bullet, bIndex) => (
                                                <li key={bIndex}>
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
                                    </div>
                                ))}
                                {step.textAfter && <p className="text-body">{renderTextWithBreaks(step.textAfter)}</p>}
                            </div>
                        ))}
                    </section>
                )}

                {/* Content Sections */}
                {data.contentSections && (
                    <section className="pt-14">
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

                <MoreLikeThis currentSlug={data.slug} collectionSlug={data.collectionSlug} />
            </div>
        </article>
    );
}
