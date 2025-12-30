
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button/Button";

export default function NotFound() {
    return (
        <div className="pt-[var(--header-height)] bg-[var(--color-brand-secondary-950)] min-h-screen flex items-center">
            <Section className="w-full">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-[12rem] font-bold mb-4 opacity-10 leading-none select-none text-[var(--color-accent-primary)]">404</h1>
                    <div className="-mt-20 z-10">
                        <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
                        <p className="text-[var(--color-text-secondary)] mb-10 max-w-md mx-auto text-lg">
                            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                        </p>
                        <Button href="/" variant="primary">
                            Return Home
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    )
}
