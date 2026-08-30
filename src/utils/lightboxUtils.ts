import { CaseStudy } from "@/data/portfolio";

export const resolveGalleryData = (
    gallery?: CaseStudy["gallery"],
    defaultTitle?: string,
    defaultDesc?: string
) => {
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

export interface CaseStudySlidesResult {
    slides: { src: string }[];
    sectionStartIndices: Record<string, number | number[]>;
}

/**
 * Collects all image slides on a case study page across all content sections in their visual display order.
 */
export function getCaseStudySlides(data: CaseStudy): CaseStudySlidesResult {
    const slides: { src: string }[] = [];
    const sectionStartIndices: Record<string, number | number[]> = {};
    const contentKeys = Object.keys(data);

    for (const key of contentKeys) {
        if (key === "contentSections" && data.contentSections && data.contentSections.length > 0) {
            sectionStartIndices["contentSections"] = slides.length;
            for (const section of data.contentSections) {
                if (section.image && section.image.length > 0) {
                    slides.push({ src: section.image });
                }
            }
        } else if (key === "gallery" && data.gallery) {
            const galleryData = resolveGalleryData(data.gallery);
            if (galleryData && galleryData.items) {
                sectionStartIndices["gallery"] = slides.length;
                for (const item of galleryData.items) {
                    if (item.src && item.src.length > 0) {
                        slides.push({ src: item.src });
                    }
                }
            }
        } else if (key === "galleries" && data.galleries && data.galleries.length > 0) {
            const indices: number[] = [];
            for (const gallerySection of data.galleries) {
                indices.push(slides.length);
                if (gallerySection.items) {
                    for (const item of gallerySection.items) {
                        if (item.src && item.src.length > 0) {
                            slides.push({ src: item.src });
                        }
                    }
                }
            }
            sectionStartIndices["galleries"] = indices;
        }
    }

    return { slides, sectionStartIndices };
}
