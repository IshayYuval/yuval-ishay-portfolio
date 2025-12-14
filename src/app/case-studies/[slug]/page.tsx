import { notFound } from "next/navigation";
import { caseStudies } from "@/data/portfolio";
import Section from "@/components/layout/Section";

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

    return (
        <article className="pt-[var(--header-height)]">
            <Section className="pb-0">
                <h1 className="h1 mb-6">{study.title}</h1>
                <p className="text-xl text-body max-w-3xl mb-8">{study.excerpt}</p>
                <div className="flex gap-2 mb-12">
                    {study.tags.map(tag => (
                        <span key={tag} className="text-sm uppercase tracking-wider border px-3 py-1 rounded-full" style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </Section>

            <div className="w-full h-[60vh] mb-16 flex items-center justify-center" style={{ backgroundColor: 'var(--muted-light)' }}>
                <span style={{ color: 'var(--muted)' }}>Hero Image Placeholder</span>
            </div>

            <Section className="pt-0">
                <div className="max-w-3xl mx-auto text-body text-lg">
                    <p className="mb-6">
                        This is a placeholder for the case study content. In a real application, this would be populated from a CMS or Markdown files.
                    </p>
                    <h2 className="h3 mb-4" style={{ color: 'var(--foreground)' }}>The Challenge</h2>
                    <p className="mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h2 className="h3 mb-4" style={{ color: 'var(--foreground)' }}>The Solution</h2>
                    <p className="mb-6">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </Section>
        </article>
    );
}
