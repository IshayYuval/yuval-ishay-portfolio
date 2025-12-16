import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { collections } from "@/data/portfolio";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const pathname = usePathname();
    const [view, setView] = useState<"main" | "visual-communication">("main");
    const [isAnimating, setIsAnimating] = useState(false);

    // Reset view when menu closes
    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => setView("main"), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const visualCommItems = collections.filter(c => c.parentNav === "visual-communication");

    const handleViewChange = (newView: "main" | "visual-communication") => {
        setIsAnimating(true);
        setView(newView);
        setTimeout(() => setIsAnimating(false), 300);
    };

    const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);
    const isVisualCommActive = visualCommItems.some(item => isActive(`/collections/${item.slug}`));

    const MobileNavItem = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick: () => void }) => {
        const active = isActive(href);
        return (
            <Link
                href={href}
                onClick={onClick}
                className={`nav-link relative w-fit ${active ? 'text-[var(--color-brand-primary-500)]' : ''}`}
            >
                {children}
                <span className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left transform transition-transform duration-300 ease-out ${active ? 'scale-x-100 bg-[var(--color-brand-primary-500)]' : 'scale-x-0'}`} />
            </Link>
        );
    };

    return (
        <div
            className={`fixed inset-0 z-[60] bg-[var(--color-brand-secondary-900)] transition-transform duration-500 ease-in-out origin-top md:hidden ${isOpen ? "scale-y-100 pointer-events-auto" : "scale-y-0 pointer-events-none"
                }`}
            style={{ top: 0 }}
        >
            <div className="container-custom h-full flex flex-col relative overflow-hidden">

                {/* Top Bar for Back Button */}
                <div className="h-[var(--header-height)] flex items-center absolute top-0 left-0 w-full z-20 pointer-events-none">
                    <div className="container-custom w-full flex items-center pointer-events-auto">
                        <button
                            onClick={() => handleViewChange("main")}
                            className={`flex items-center gap-2 nav-link text-[var(--foreground)] transition-all duration-500 delay-200 ease-out ${view === "visual-communication" ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 -translate-x-4 pointer-events-none"}`}
                        >
                            <ChevronLeft size={30} />
                        </button>
                    </div>
                </div>

                {/* Main Menu View */}
                <div
                    className={`absolute inset-0 pt-[var(--header-height)] px-6 transition-transform duration-300 ease-in-out ${view === "main" ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <nav className={`flex flex-col gap-8 text-2xl font-bold mt-8 uppercase tracking-wide transition-all duration-700 delay-300 ease-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <MobileNavItem href="/collections/product-design" onClick={onClose}>
                            Product Design
                        </MobileNavItem>
                        <MobileNavItem href="/collections/branding" onClick={onClose}>
                            Branding
                        </MobileNavItem>

                        <button
                            onClick={() => handleViewChange("visual-communication")}
                            className={`flex nav-link gap-1 items-center relative ${isVisualCommActive ? 'text-[var(--color-brand-primary-500)]' : ''}`}
                        >
                            <span>Visual Communication</span>
                            <ChevronRight size={20} />
                            <span className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left transform transition-transform duration-300 ease-out ${isVisualCommActive ? 'scale-x-100 bg-[var(--color-brand-primary-500)]' : 'scale-x-0'}`} />
                        </button>

                        <MobileNavItem href="/about" onClick={onClose}>
                            About Me
                        </MobileNavItem>
                    </nav>
                </div>

                {/* Submenu View */}
                <div
                    className={`absolute inset-0 pt-[var(--header-height)] px-6 transition-transform duration-300 ease-in-out ${view === "visual-communication" ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {/* Spacer for top bar */}
                    <div className="mb-8 mt-8 h-6"></div>

                    <nav className="flex flex-col gap-6 text-xl font-medium">
                        {visualCommItems.map((item) => (
                            <MobileNavItem
                                key={item.slug}
                                href={`/collections/${item.slug}`}
                                onClick={onClose}
                            >
                                {item.title}
                            </MobileNavItem>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}
