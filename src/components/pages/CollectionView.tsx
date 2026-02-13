import { Collection, caseStudies } from "@/data/portfolio";
import Section from "@/components/layout/Section";
import CaseStudyCard from "@/components/ui/CaseStudyCard/CaseStudyCard";

interface CollectionViewProps {
    collection: Collection;
}

export default function CollectionView({ collection }: CollectionViewProps) {
    const studies = caseStudies.filter((s) => s.collectionSlug === collection.slug);

    return (
        <div className="pt-[var(--header-height)] bg-[var(--color-brand-secondary-950)]">
            <Section>
                <div className="absolute top-0 left-0 right-0 pt-38 md:pt-48 pb-12 md:pb-16 px-12 md:px-24 lg:px-48 mb-16 bg-[var(--color-brand-secondary-900)] w-full">
                    <h5 className="text-body ">{collection.title}</h5>
                    <h1 className="mb-1">Case Studies</h1>
                    <span className="text-body">{collection.description}</span>
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
