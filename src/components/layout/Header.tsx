"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import NavItem from "../nav/NavItem";
import BrandMark from "../ui/BrandMark/BrandMark";
import NavDropdown from "../nav/NavDropdown";
import MobileMenuToggle from "../nav/MobileMenuToggle";
import MobileMenu from "../nav/MobileMenu";
import { collections, caseStudies } from "@/data/portfolio";

export default function Header() {
    const pathname = usePathname();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const visualCommItems = collections.filter(c => c.parentNav === "visual-communication");

    // Find current case study to check for specific navbar color requirements
    const currentSlug = pathname.replace(/\/$/, '').split('/').pop() || "";
    const currentCaseStudy = caseStudies.find(cs => cs.slug === currentSlug);

    // Dynamic Color Logic
    // Apply override ONLY when header is transparent (top of page, closed menu/dropdown)
    const isHeaderTransparent = !isScrolled && !isDropdownOpen && !isMobileMenuOpen && !isHovered;
    const dynamicTextColor = isHeaderTransparent && currentCaseStudy?.navbarTextColor
        ? currentCaseStudy.navbarTextColor
        : undefined;

    useEffect(() => {
        const handleScroll = () => {
            // Add a small buffer to avoid flickering on initial load or tiny scrolls
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        // Check initial scroll position immediately
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Header background logic
    const headerBg = isDropdownOpen || isScrolled || isHovered || isMobileMenuOpen
        ? 'var(--color-brand-secondary-900)'
        : 'transparent';

    const handleDropdownEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleDropdownLeave = () => {
        setIsDropdownOpen(false);
    };

    const handleOtherItemEnter = () => {
        setIsDropdownOpen(false);
    };

    return (
        <>
            <header
                className="fixed top-0 left-0 w-full right-0 z-50 transition-all duration-300 ease-in-out overflow-hidden"
                style={{
                    backgroundColor: (isScrolled || isDropdownOpen ||
                        // isHovered ||
                        isMobileMenuOpen) ? headerBg : 'transparent',
                    maxHeight: isDropdownOpen ? '600px' : 'var(--header-height)',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false);
                    handleDropdownLeave();
                }}
            >
                <div className="w-full nav-bar-container gap-4 h-[var(--header-height)] flex items-center justify-between relative z-50">
                    {/* Logo */}
                    <div className="flex items-center">

                        <Link href="/" className="logo flex items-center group" aria-label="home page">
                            <BrandMark
                                className="w-16 h-16 transition-colors duration-300"
                                style={{ color: dynamicTextColor || 'var(--color-brand-primary-500)' }}
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-4 lg:gap-8 h-full ml-[1.5rem] lg:ml-[2rem]">
                            <NavItem
                                href="/product-design"
                                onMouseEnter={handleOtherItemEnter}
                                overrideColor={dynamicTextColor}
                            >
                                Product Design
                            </NavItem>
                            <NavItem
                                href="/branding"
                                onMouseEnter={handleOtherItemEnter}
                                overrideColor={dynamicTextColor}
                            >
                                Branding
                            </NavItem>

                            <div onMouseEnter={handleDropdownEnter}>
                                <NavDropdown
                                    label="Visual Communication"
                                    isOpen={isDropdownOpen}
                                    onOpenChange={setIsDropdownOpen}
                                    overrideColor={dynamicTextColor}
                                />
                            </div>

                            <NavItem
                                href="/about"
                                onMouseEnter={handleOtherItemEnter}
                                overrideColor={dynamicTextColor}
                            >
                                My Story
                            </NavItem>
                        </nav>
                    </div>

                    <div className="hidden md:flex gap-4 items-center">
                        <a href="https://www.instagram.com/yuvalishay.art" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" style={{ color: dynamicTextColor || 'var(--color-typography-header)' }}>
                            <svg
                                className="w-6 h-6 transition-colors duration-300"
                                viewBox="0 0 30 24"
                                fill="currentColor"
                            >
                                <g>
                                    <path d="M15,5.4c2.1,0,2.4,0,3.2,0c0.8,0,1.2,0.2,1.5,0.3c0.4,0.1,0.6,0.3,0.9,0.6c0.3,0.3,0.5,0.5,0.6,0.9 c0.1,0.3,0.2,0.7,0.3,1.5c0,0.8,0,1.1,0,3.2s0,2.4,0,3.2c0,0.8-0.2,1.2-0.3,1.5c-0.1,0.4-0.3,0.6-0.6,0.9c-0.3,0.3-0.5,0.5-0.9,0.6 c-0.3,0.1-0.7,0.2-1.5,0.3c-0.8,0-1.1,0-3.2,0s-2.4,0-3.2,0c-0.8,0-1.2-0.2-1.5-0.3c-0.4-0.1-0.6-0.3-0.9-0.6 c-0.3-0.3-0.5-0.5-0.6-0.9c-0.1-0.3-0.2-0.7-0.3-1.5c0-0.8,0-1.1,0-3.2s0-2.4,0-3.2c0-0.8,0.2-1.2,0.3-1.5c0.1-0.4,0.3-0.6,0.6-0.9 c0.3-0.3,0.5-0.5-0.9-0.6c0.3-0.1,0.7-0.2,1.5-0.3C12.6,5.4,12.9,5.4,15,5.4 M15,4c-2.2,0-2.4,0-3.3,0c-0.9,0-1.4,0.2-1.9,0.4 c-0.5,0.2-1,0.5-1.4,0.9C7.9,5.8,7.6,6.2,7.4,6.8C7.2,7.3,7.1,7.9,7,8.7C7,9.6,7,9.8,7,12s0,2.4,0,3.3c0,0.9,0.2,1.4,0.4,1.9 c0.2,0.5,0.5,1,0.9,1.4c0.4,0.4,0.9,0.7,1.4,0.9c0.5,0.2,1.1,0.3,1.9,0.4c0.9,0,1.1,0,3.3,0s2.4,0,3.3,0c0.9,0,1.4-0.2,1.9-0.4 c0.5-0.2,1-0.5,1.4-0.9c0.4-0.4,0.7-0.9,0.9-1.4c0.2-0.5,0.3-1.1,0.4-1.9c0-0.9,0-1.1,0-3.3s0-2.4,0-3.3c0-0.9-0.2-1.4-0.4-1.9 c-0.2-0.5-0.5-1-0.9-1.4c-0.4-0.4-0.9-0.7-1.4-0.9c-0.5-0.2-1.1-0.3-1.9-0.4C17.4,4,17.2,4,15,4L15,4L15,4z" />
                                    <path d="M15,7.9c-2.3,0-4.1,1.8-4.1,4.1s1.8,4.1,4.1,4.1s4.1-1.8,4.1-4.1S17.3,7.9,15,7.9L15,7.9z M15,14.7c-1.5,0-2.7-1.2-2.7-2.7 c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7C17.7,13.5,16.5,14.7,15,14.7L15,14.7z" />
                                    <path d="M20.2,7.7c0,0.5-0.4,1-1,1s-1-0.4-1-1s0.4-1,1-1S20.2,7.2,20.2,7.7L20.2,7.7z" />
                                </g>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/yuvalishay-art" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" style={{ color: dynamicTextColor || 'var(--color-typography-header)' }}>
                            <svg
                                className="w-6 h-6 transition-colors duration-300"
                                viewBox="0 0 30 24"
                                fill="currentColor"
                            >
                                <path d="M19.6,19v-5.8c0-1.4-0.5-2.4-1.7-2.4c-1,0-1.5,0.7-1.8,1.3C16,12.3,16,12.6,16,13v6h-3.4 c0,0,0.1-9.8,0-10.8H16v1.5c0,0,0,0,0,0h0v0C16.4,9,17.2,7.9,19,7.9c2.3,0,4,1.5,4,4.9V19H19.6z M8.9,6.7L8.9,6.7 C7.7,6.7,7,5.9,7,4.9C7,3.8,7.8,3,8.9,3s1.9,0.8,1.9,1.9C10.9,5.9,10.1,6.7,8.9,6.7z M10.6,19H7.2V8.2h3.4V19z" />
                            </svg>
                        </a>
                    </div>

                </div>

                {/* Mobile Menu Toggle */}
                <div className="absolute top-0 right-0 h-[var(--header-height)] flex items-center px-6 md:hidden z-[61]">
                    <MobileMenuToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        overrideColor={dynamicTextColor}
                    />
                </div>

                {/* Dropdown Content - Rendered inside Header */}
                <div
                    className={`w-full transition-opacity duration-300 ${isDropdownOpen ? 'opacity-100 delay-100' : 'opacity-0 pointer-events-none'}`}
                    aria-hidden={!isDropdownOpen}
                >
                    <div className="container-custom py-12">
                        <div className="flex flex-col gap-4">
                            {visualCommItems.map((item) => (
                                <NavItem
                                    key={item.slug}
                                    href={`/${item.slug}`}
                                    onClick={() => setIsDropdownOpen(false)}
                                    className="w-fit items-start"
                                >
                                    {item.title}
                                </NavItem>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                />
            </header>

            {/* Backdrop Overlay */}
            <div
                className={`fixed inset-0 backdrop-overlay transition-opacity duration-300 ${isDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                style={{
                    top: 0,
                    zIndex: 40
                }}
                aria-hidden="true"
            />
        </>
    );
}
