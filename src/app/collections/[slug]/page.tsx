import { notFound } from "next/navigation";
import { collections, caseStudies } from "@/data/portfolio";
import Section from "@/components/layout/Section";
import CaseStudyCard from "@/components/ui/CaseStudyCard/CaseStudyCard";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return collections.map((collection) => ({
        slug: collection.slug,
    }));
}

export default async function CollectionPage({ params }: PageProps) {
    const { slug } = await params;
    const collection = collections.find((c) => c.slug === slug);

    if (!collection) {
        notFound();
    }

    const studies = caseStudies.filter((s) => s.collectionSlug === slug);

    return (
        <div className="pt-[var(--header-height)] bg-[var(--color-brand-secondary-950)]">
            <Section>
                <div className="absolute top-0 left-0 right-0 pt-50 pb-20 px-45 mb-16 bg-[var(--color-brand-secondary-900)] w-full">
                    <h1 className="h1 mb-4">Case Studies</h1>
                    <span className="">{collection.description}</span>
                </div>

                <div className="grid md:grid-cols-2 gap-x-4 gap-y-4 pt-60">
                    {studies.length > 0 ? (
                        studies.map((study) => (
                            <CaseStudyCard key={study.slug} study={study} />
                        ))
                    ) : (
                        <p className="text-muted">No case studies found in this collection.</p>
                    )}
                </div>
            </Section>
        </div>
    );
}
