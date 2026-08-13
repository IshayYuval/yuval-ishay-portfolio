import React from "react";
import Image from "next/image";
import { CaseStudy } from "@/data/portfolio";
import DynamicGrid from "@/components/case-study-parts/DynamicGrid";
import PrototypeSection from "@/components/case-study-parts/PrototypeSection";
import MoreLikeThis from "@/components/case-study-parts/MoreLikeThis";
import { renderTextWithBreaks } from "@/utils/text";
import Tag from "../ui/Tag/Tag";
import Button from "../ui/Button/Button";
import { formatCaseStudyDate } from "@/utils/dateUtils";

export default function VisualLayout({ data }: { data: CaseStudy }) {
    return (
        <article className="min-h-screen pb-24" style={{ backgroundColor: data.backgroundColor }}>
            {/* Hero Section */}
            {(data.heroImage) && (
                <div
                    className="relative w-full h-[24vh] md:h-[40vh]"
                    style={{ backgroundColor: data.heroBackgroundColor }}
                >
                    {data.heroImage.endsWith(".mp4") ? (
                        <video
                            src={data.heroImage}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <Image
                            src={data.heroImage}
                            alt={`${data.title} Hero`}
                            fill
                            className="object-cover"
                            priority
                        />
                    )}
                </div>
            )}

            <div className={`container-custom mx-auto ${!data.heroImage ? 'pt-[var(--header-height)]' : ''}`}>
                <header className="max-w-4xl mx-auto pt-12 sm:pt-16">
                    <div className="text-body text-center">
                        {formatCaseStudyDate(data)}
                    </div>
                    <h1 className="text-center">About the Project</h1>
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
                    {(data.projectUrl || data.secondaryProjectUrl) && (
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            {data.projectUrl && (
                                <Button
                                    href={data.projectUrl}
                                    target="_blank"
                                    variant={data.projectUrlVariant || "secondary"}
                                >
                                    {data.projectUrlText || "Visit Project"}
                                </Button>
                            )}
                            {data.secondaryProjectUrl && (
                                <Button
                                    href={data.secondaryProjectUrl}
                                    target="_blank"
                                    variant={data.secondaryProjectUrlVariant || "secondary"}
                                >
                                    {data.secondaryProjectUrlText || "Visit Project"}
                                </Button>
                            )}
                        </div>
                    )}
                </header>



                {/* Process Steps */}
                {data.processSteps && (
                    <section className="grid grid-cols-1 gap-12 mb-16 max-w-4xl mx-auto mt-12">
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

                {/* Gallery */}
                {(data.gallery && data.gallery.length > 0) && (
                    <section className="py-12">
                        <DynamicGrid items={data.gallery} />
                    </section>
                )}

                {/* Multiple Galleries */}
                {data.galleries && data.galleries.length > 0 && (
                    <div className="flex flex-col gap-12 py-12">
                        {data.galleries.map((gallerySection, idx) => (
                            <section key={idx} className="w-full">
                                {gallerySection.title && (
                                    <div className="max-w-4xl mx-auto mb-6">
                                        <h2 className="text-5xl md:text-7xl font-bold text-center mb-8">{renderTextWithBreaks(gallerySection.title)}</h2>
                                    </div>
                                )}
                                <DynamicGrid items={gallerySection.items} />
                            </section>
                        ))}
                    </div>
                )}

                {/* Prototype */}
                {data.prototype && (
                    <PrototypeSection {...data.prototype} />
                )}

                <MoreLikeThis currentSlug={data.slug} collectionSlug={data.collectionSlug} />
            </div>
        </article>
    );
}
