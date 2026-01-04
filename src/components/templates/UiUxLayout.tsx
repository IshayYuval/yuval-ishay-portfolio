import React from "react";
import Link from "next/link";
import Image from "next/image"; // Added Image import
import { CaseStudy } from "@/data/portfolio";
import ZigZagRow from "@/components/case-study-parts/ZigZagRow";
import DynamicGrid from "@/components/case-study-parts/DynamicGrid";
import { renderTextWithBreaks } from "@/utils/text";
import Button from "../ui/Button/Button";
import Tag from "../ui/Tag/Tag";

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
                    <h1 className="mb-2 text-center">About the Project</h1>

                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {data.tags.map(tag => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                    </div>
                    {data.introText && (
                        <p className="text-body mb-8">
                            {renderTextWithBreaks(data.introText)}
                        </p>
                    )}
                    {data.projectUrl && (
                        <Button
                            href={data.projectUrl}
                            target="_blank"
                            className=""
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
                                <h3>{renderTextWithBreaks(step.title)}</h3>
                                {step.text && <p className="text-body">{renderTextWithBreaks(step.text)}</p>}
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
                                {step.textAfter && <p className="text-body">{renderTextWithBreaks(step.textAfter)}</p>}
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
            </div>
        </article>
    );
}
