import { notFound } from "next/navigation";
import { caseStudies } from "@/data/portfolio";
import BrandingLayout from "@/components/templates/BrandingLayout";
import UiUxLayout from "@/components/templates/UiUxLayout";
import VisualLayout from "@/components/templates/VisualLayout";
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

    // Layout switching logic based on collectionSlug
    switch (study.collectionSlug) {
        case "branding":
            return <BrandingLayout data={study} />;

        case "product-design":
            return <UiUxLayout data={study} />;

        case "photography":
        case "conceptual-design":
        case "typography":
            return <VisualLayout data={study} />;

        default:
            // Fallback or 404 if slug matches but collection type is unknown
            return <div className="pt-32 text-center text-red-500">Unknown layout type: {study.collectionSlug}</div>;
    }
}
