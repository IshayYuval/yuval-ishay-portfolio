import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative z-10 py-6 bg-[var(--color-brand-secondary-950)]">
            <div className="container-custom flex justify-between items-center">
                <p className="text-caption">© 2025 Yuval Ishay <br /> All rights reserved</p>
                <Link href="/privacy-policy" className="footer-item">
                    Privacy Policy
                </Link>
            </div>
        </footer>
    );
}
