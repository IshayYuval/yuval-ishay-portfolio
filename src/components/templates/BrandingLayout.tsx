import Image from "next/image";
import { CaseStudy } from "@/data/portfolio";
import ZigZagRow from "@/components/case-study-parts/ZigZagRow";
import DynamicGrid from "@/components/case-study-parts/DynamicGrid";
import PrototypeSection from "@/components/case-study-parts/PrototypeSection";
import MoreLikeThis from "@/components/case-study-parts/MoreLikeThis";
import Button from "../ui/Button/Button";
import Tag from "../ui/Tag/Tag";
import { renderTextWithBreaks } from "@/utils/text";
import { formatCaseStudyDate } from "@/utils/dateUtils";

export default function BrandingLayout({ data }: { data: CaseStudy }) {
    const resolveGalleryData = (gallery?: CaseStudy["gallery"], defaultTitle?: string, defaultDesc?: string) => {
        if (!gallery) return null;
        if (Array.isArray(gallery)) {
            if (gallery.length === 0) return null;
            return {
                items: gallery,
                title: defaultTitle,
                description: defaultDesc,
            };
        }
        if (gallery && typeof gallery === "object" && "items" in gallery && Array.isArray(gallery.items)) {
            if (gallery.items.length === 0) return null;
            return {
                items: gallery.items,
                title: gallery.title || defaultTitle,
                description: gallery.description || defaultDesc,
            };
        }
        return null;
    };

    const renderSection = (key: string) => {
        switch (key) {
            case "processSteps":
                if (!data.processSteps || data.processSteps.length === 0) return null;
                return (
                    <section key="processSteps" className="grid grid-cols-1 gap-12 mb-16 max-w-4xl mx-auto">
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
                );

            case "contentSections":
                if (!data.contentSections || data.contentSections.length === 0) return null;
                return (
                    <section key="contentSections" className="pt-14">
                        <h1 className="mb-2 text-center">Visual Language</h1>
                        {data.contentSections.map((section, index) => (
                            <ZigZagRow key={index} {...section} />
                        ))}
                    </section>
                );

            case "gallery": {
                const galleryData = resolveGalleryData(data.gallery, data.galleryTitle || "The brand in action", data.galleryDescription);
                if (!galleryData) return null;
                return (
                    <section key="gallery" className="py-24">
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
                        <DynamicGrid items={galleryData.items} />
                    </section>
                );
            }

            case "galleries":
                if (!data.galleries || data.galleries.length === 0) return null;
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
                                <DynamicGrid items={gallerySection.items} />
                            </section>
                        ))}
                    </div>
                );

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

    return (
        <article className="min-h-screen pb-24" style={{ backgroundColor: data.backgroundColor }}>
            {/* Hero Image */}
            {data.heroImage && (
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

            <div className="container-custom mx-auto">
                {/* Intro Section */}
                <header className="max-w-4xl mx-auto pt-12 sm:pt-16">
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
                    {(data.projectUrl || data.secondaryProjectUrl) && (
                        <div className="flex flex-col sm:flex-row gap-4 mb-8 mt-6">
                            {data.projectUrl && (
                                <Button
                                    href={data.projectUrl}
                                    target="_blank"
                                    variant={data.projectUrlVariant || "primary"}
                                    className="bg-[var(--foreground)] text-[var(--background)] rounded-full font-medium hover:opacity-90 transition-opacity"
                                >
                                    {data.projectUrlText || "Visit Website"}
                                </Button>
                            )}
                            {data.secondaryProjectUrl && (
                                <Button
                                    href={data.secondaryProjectUrl}
                                    target="_blank"
                                    variant={data.secondaryProjectUrlVariant || "primary"}
                                    className="bg-[var(--foreground)] text-[var(--background)] rounded-full font-medium hover:opacity-90 transition-opacity"
                                >
                                    {data.secondaryProjectUrlText || "Visit Website"}
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
