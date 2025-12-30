
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button/Button";

export default function PrivacyPolicyPage() {
    return (
        <div className="pt-[var(--header-height)] bg-[var(--color-brand-secondary-950)] min-h-screen">
            <Section>
                <h1 className="mb-1">Privacy Policy</h1>

                <div className="pt-4 max-w-3xl">
                    <p className="text-xl leading-relaxed mb-8 text-[var(--color-text-secondary)]">
                        This website does not collect any personal information from visitors. This website uses a secure protocol (HTTPS) to protect your information during transmission. No cookies are used on this website for advertising or analytics purposes.
                    </p>
                    <Button href="/" variant="primary">
                        Back to Home
                    </Button>
                </div>
            </Section>
        </div>
    );
}
