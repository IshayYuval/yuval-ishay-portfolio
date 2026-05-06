import { CaseStudy } from "@/data/portfolio";
import BrandingLayout from "@/components/templates/BrandingLayout";
import UiUxLayout from "@/components/templates/UiUxLayout";
import VisualLayout from "@/components/templates/VisualLayout";
import ScrollToTop from "@/components/ui/ScrollToTop/ScrollToTop";
import AnimatedPageTransition from "@/components/ui/AnimatedPageTransition/AnimatedPageTransition";
import "./case-study.css";

interface CaseStudyViewProps {
    study: CaseStudy;
}

export default function CaseStudyView({ study }: CaseStudyViewProps) {
    let content;

    // Layout switching logic based on collectionSlug
    switch (study.collectionSlug) {
        case "branding":
            content = <BrandingLayout data={study} />;
            break;

        case "product-design":
            content = <UiUxLayout data={study} />;
            break;

        case "photography":
        case "editorial-and-print":
        case "video-installations":
        case "packaging-design":
            content = <VisualLayout data={study} />;
            break;

        default:
            // Fallback
            content = <div className="pt-32 text-center text-red-500">Unknown layout type: {study.collectionSlug}</div>;
    }

    return (
        <>
            <AnimatedPageTransition>
                {content}
            </AnimatedPageTransition>
            <ScrollToTop />
        </>
    );
}
