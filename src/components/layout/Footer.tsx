"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { caseStudies } from "@/data/portfolio";
import { getResolvedPageBackground } from "@/utils/themeUtils";

export default function Footer() {
    const pathname = usePathname();
    const currentSlug = pathname.replace(/\/$/, '').split('/').pop() || "";
    const currentCaseStudy = caseStudies.find(cs => cs.slug === currentSlug);

    const pageBg = currentCaseStudy ? getResolvedPageBackground(currentCaseStudy) : undefined;

    return (
        <footer
            className="relative z-10 py-6 transition-colors duration-300"
            style={{ backgroundColor: pageBg || 'var(--color-brand-secondary-950)' }}
        >
            <div className="nav-bar-container flex justify-between items-center">
                <p className="text-caption">© 2026 Yuval Ishay <br /> All rights reserved</p>
                <Link href="/privacy-policy" className="footer-item">
                    Privacy Policy
                </Link>
            </div>
        </footer>
    );
}
