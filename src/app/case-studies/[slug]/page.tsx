import { notFound } from "next/navigation";
import { caseStudies } from "@/data/portfolio";
import BrandingLayout from "@/components/templates/BrandingLayout";
import UiUxLayout from "@/components/templates/UiUxLayout";
import VisualLayout from "@/components/templates/VisualLayout";
import ScrollToTop from "@/components/ui/ScrollToTop/ScrollToTop";
import "./case-study.css";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.slug === slug);

    if (!study) {
        notFound();
    }

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
        case "conceptual-design":
        case "typography":
            content = <VisualLayout data={study} />;
            break;

        default:
            // Fallback or 404 if slug matches but collection type is unknown
            content = <div className="pt-32 text-center text-red-500">Unknown layout type: {study.collectionSlug}</div>;
    }

    return (
        <>
            {content}
            <ScrollToTop />
        </>
    );
}
