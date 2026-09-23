import Image from "next/image";
import { CaseStudy } from "@/data/portfolio";
import DynamicGrid from "@/components/case-study-parts/DynamicGrid";
import ZigZagRow from "@/components/case-study-parts/ZigZagRow";
import PrototypeSection from "@/components/case-study-parts/PrototypeSection";
import MoreLikeThis from "@/components/case-study-parts/MoreLikeThis";
import ResearchGraph from "@/components/case-study-parts/ResearchGraph/ResearchGraph";
import { renderTextWithBreaks } from "@/utils/text";
import Tag from "../ui/Tag/Tag";
import Button from "../ui/Button/Button";
import { formatCaseStudyDate } from "@/utils/dateUtils";
import { resolveGalleryData, resolveContentSectionsData, getCaseStudySlides } from "@/utils/lightboxUtils";
import { getCaseStudyThemeStyles, getResolvedPageBackground, getResolvedHeroBackground } from "@/utils/themeUtils";

export default function VisualLayout({ data }: { data: CaseStudy }) {
    const { slides, sectionStartIndices } = getCaseStudySlides(data);

    const renderSection = (key: string) => {
        switch (key) {
            case "researchGraph": {
                if (!data.researchGraph) return null;
                const graphsList = Array.isArray(data.researchGraph) ? data.researchGraph : [data.researchGraph];
                return (
                    <section key="researchGraph" className="grid grid-cols-1 gap-12 mb-16 max-w-4xl mx-auto mt-12">
                        {graphsList.map((graphData, index) => (
                            <ResearchGraph key={index} {...graphData} />
                        ))}
                    </section>
                );
            }

            case "researchGraphs": {
                if (!data.researchGraphs || data.researchGraphs.length === 0) return null;
                return (
                    <section key="researchGraphs" className="grid grid-cols-1 gap-12 mb-16 max-w-4xl mx-auto mt-12">
                        {data.researchGraphs.map((graphData, index) => (
                            <ResearchGraph key={index} {...graphData} />
                        ))}
                    </section>
                );
            }

            case "processSteps":
                if (!data.processSteps || data.processSteps.length === 0) return null;
                return (
                    <section key="processSteps" className="grid grid-cols-1 gap-12 mb-16 max-w-4xl mx-auto mt-12">
                        {data.processSteps.map((step, index) => {
                            if (step.graphs || step.researchGraph) {
                                return (
                                    <div key={index} className="flex flex-col gap-4">
                                        <ResearchGraph
                                            title={step.title}
                                            description={step.text}
                                            graphs={step.graphs || step.researchGraph?.graphs}
                                            textAfter={step.textAfter || step.researchGraph?.textAfter}
                                        />
                                    </div>
                                );
                            }
                            return (
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
                        );
                    })}
                </section>
            );

            case "gallery": {
                const galleryData = resolveGalleryData(data.gallery, data.galleryTitle, data.galleryDescription);
                if (!galleryData) return null;
                const galleryStartIndex = typeof sectionStartIndices["gallery"] === "number" ? sectionStartIndices["gallery"] : 0;
                return (
                    <section key="gallery" className="py-12">
                        {(galleryData.title || galleryData.description) && (
                            <div className="max-w-4xl mx-auto mb-8">
                                {galleryData.title && (
                                    <h1 className="mb-4 text-center">{renderTextWithBreaks(galleryData.title)}</h1>
                                )}
                                {galleryData.description && (
                                    <p className="text-body">{renderTextWithBreaks(galleryData.description)}</p>
                                )}
                            </div>
                        )}
                        <DynamicGrid
                            items={galleryData.items}
                            lightboxSlides={slides}
                            startIndex={galleryStartIndex}
                        />
                    </section>
                );
            }

            case "galleries":
                if (!data.galleries || data.galleries.length === 0) return null;
                const galleriesIndices = Array.isArray(sectionStartIndices["galleries"]) ? sectionStartIndices["galleries"] : [];
                return (
                    <div key="galleries" className="flex flex-col gap-12 py-12">
                        {data.galleries.map((gallerySection, idx) => (
                            <section key={idx} className="w-full">
                                {(gallerySection.title || gallerySection.description) && (
                                    <div className="max-w-4xl mx-auto mb-8">
                                        {gallerySection.title && (
                                            <h1 className="mb-6 text-center">{renderTextWithBreaks(gallerySection.title)}</h1>
                                        )}
                                        {gallerySection.description && (
                                            <p className="text-body">{renderTextWithBreaks(gallerySection.description)}</p>
                                        )}
                                    </div>
                                )}
                                <DynamicGrid
                                    items={gallerySection.items}
                                    lightboxSlides={slides}
                                    startIndex={galleriesIndices[idx] ?? 0}
                                />
                            </section>
                        ))}
                    </div>
                );

            case "contentSections": {
                const contentData = resolveContentSectionsData(data.contentSections, data.contentSectionsTitle, data.contentSectionsDescription);
                if (!contentData || contentData.items.length === 0) return null;
                const contentStartIndex = typeof sectionStartIndices["contentSections"] === "number" ? sectionStartIndices["contentSections"] : 0;
                return (
                    <section key="contentSections" className="py-12">
                        {(contentData.title || contentData.description) && (
                            <div className="max-w-4xl mx-auto mb-8 flex flex-col gap-4">
                                {contentData.title && (
                                    <h3>{renderTextWithBreaks(contentData.title)}</h3>
                                )}
                                {contentData.description && (
                                    <p className="text-body">{renderTextWithBreaks(contentData.description)}</p>
                                )}
                            </div>
                        )}
                        {contentData.items.map((section, index) => (
                            <ZigZagRow
                                key={index}
                                {...section}
                                enableLightbox={true}
                                lightboxSlides={slides}
                                lightboxIndex={contentStartIndex + index}
                            />
                        ))}
                    </section>
                );
            }

            case "prototype":
                if (!data.prototype) return null;
                return (
                    <PrototypeSection key="prototype" {...data.prototype} />
                );

            default:
                return null;
        }
    };

    const contentKeys = Object.keys(data);
    const themeStyles = getCaseStudyThemeStyles(data.theme);
    const pageBackground = getResolvedPageBackground(data);
    const heroBackground = getResolvedHeroBackground(data);

    return (
        <article
            data-bg-color={pageBackground}
            className="min-h-screen pb-24"
            style={{
                ...themeStyles,
                backgroundColor: pageBackground,
            }}
        >
            {/* Hero Section */}
            {(data.heroImage) && (
                <div
                    className="relative w-full h-[24vh] md:h-[40vh]"
                    style={{ backgroundColor: heroBackground }}
                >
                    {data.heroImage.endsWith(".mp4") ? (
                        <video
                            src={data.heroImage}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-contain"
                        />
                    ) : (
                        <Image
                            src={data.heroImage}
                            alt={`${data.title} Hero`}
                            fill
                            className="object-contain"
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

                {/* Dynamically Ordered Content Sections */}
                {contentKeys.map((key) => renderSection(key))}

                <MoreLikeThis currentSlug={data.slug} collectionSlug={data.collectionSlug} />
            </div>
        </article>
    );
}
