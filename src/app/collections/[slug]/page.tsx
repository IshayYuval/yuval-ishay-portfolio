import { notFound } from "next/navigation";
import { collections, caseStudies } from "@/data/portfolio";
import Section from "@/components/layout/Section";
import CaseStudyCard from "@/components/ui/CaseStudyCard";

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
        <div className="pt-[var(--header-height)]">
            <Section>
                <div className="mb-16">
                    <h1 className="h1 mb-4">Case Studies</h1>
                    <p className="text-xl text-body max-w-2xl">{collection.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
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
