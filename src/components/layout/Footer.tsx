"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { caseStudies } from "@/data/portfolio";
import { getResolvedPageBackground } from "@/utils/themeUtils";

export default function Footer() {
    const pathname = usePathname();
    const currentSlug = pathname.replace(/\/$/, '').split('/').pop() || "";
    const currentCaseStudy = caseStudies.find(cs => cs.slug === currentSlug);

    const pageBg = currentCaseStudy ? getResolvedPageBackground(currentCaseStudy) : undefined;
    const isAbout = pathname === "/about" || pathname?.startsWith("/about");

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        if (!isAbout) return;
        const handleScroll = () => {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            // Appear only after the scrolling of the text has finished
            setIsScrolled(maxScroll > 0 && window.scrollY >= maxScroll - 35);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [isAbout]);

    return (
        <footer
            data-bg-color={pageBg || "#10162C"}
            className={`${
                isAbout
                    ? `relative lg:fixed lg:bottom-0 lg:left-0 lg:right-0 lg:z-30 ${
                        isScrolled
                            ? "lg:translate-y-0 lg:opacity-100 lg:pointer-events-auto"
                            : "lg:translate-y-full lg:opacity-0 lg:pointer-events-none"
                      }`
                    : "relative z-10"
            } pt-6 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] transition-all duration-500 ease-out`}
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
