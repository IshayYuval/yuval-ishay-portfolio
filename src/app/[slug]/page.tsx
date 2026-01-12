import { notFound } from "next/navigation";
import { collections, caseStudies } from "@/data/portfolio";
import CollectionView from "@/components/pages/CollectionView";
import CaseStudyView from "@/components/pages/CaseStudyView";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const collectionParams = collections.map((collection) => ({
        slug: collection.slug,
    }));

    const caseStudyParams = caseStudies.map((study) => ({
        slug: study.slug,
    }));

    return [...collectionParams, ...caseStudyParams];
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;

    // 1. Try to find a collection
    const collection = collections.find((c) => c.slug === slug);
    if (collection) {
        return <CollectionView collection={collection} />;
    }

    // 2. Try to find a case study
    const study = caseStudies.find((s) => s.slug === slug);
    if (study) {
        return <CaseStudyView study={study} />;
    }

    // 3. Not found
    notFound();
}
