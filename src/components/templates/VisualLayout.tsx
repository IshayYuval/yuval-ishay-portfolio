import React from "react";
import { CaseStudy } from "@/data/portfolio";
import DynamicGrid from "@/components/case-study-parts/DynamicGrid";
import PrototypeSection from "@/components/case-study-parts/PrototypeSection";
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

                {/* Prototype */}
                {data.prototype && (
                    <PrototypeSection title={data.prototype.title} src={data.prototype.src} />
                )}
            </div>
        </article>
    );
}
