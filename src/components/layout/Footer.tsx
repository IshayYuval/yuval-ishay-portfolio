import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 bg-[var(--color-brand-secondary-950)]">
            <div className="container-custom flex justify-between items-center">
                <p className="text-small">© 2025 Yuval Ishay</p>
                <Link href="/privacy-policy" className="text-small hover:opacity-70 transition-opacity text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]">
                    Privacy Policy
                </Link>
            </div>
        </footer>
    );
}
