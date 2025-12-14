"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import NavItem from "../nav/NavItem";
import NavDropdown from "../nav/NavDropdown";
import MobileMenuToggle from "../nav/MobileMenuToggle";
import MobileMenu from "../nav/MobileMenu";
import { collections } from "@/data/portfolio";

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const visualCommItems = collections.filter(c => c.parentNav === "visual-communication");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
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
                    backgroundColor: (isScrolled || isDropdownOpen || isHovered || isMobileMenuOpen) ? headerBg : 'transparent',
                    maxHeight: isDropdownOpen ? '600px' : 'var(--header-height)',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false);
                    handleDropdownLeave();
                }}
            >
                <div className=" container-custom h-[var(--header-height)] flex items-center justify-between md:justify-start relative z-50">
                    {/* Logo */}
                    <Link href="/" className="logo flex items-center">
                        <Image
                            src="/web-assets/Brandmark.svg"
                            alt="Brandmark"
                            width={40}
                            height={40}
                            className="w-16 h-16"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-[2rem] h-full ml-[2rem]">
                        <NavItem
                            href="/collections/product-design"
                            onMouseEnter={handleOtherItemEnter}
                        >
                            Product Design
                        </NavItem>
                        <NavItem
                            href="/collections/branding"
                            onMouseEnter={handleOtherItemEnter}
                        >
                            Branding
                        </NavItem>

                        <div onMouseEnter={handleDropdownEnter}>
                            <NavDropdown
                                label="Visual Communication"
                                isOpen={isDropdownOpen}
                                onOpenChange={setIsDropdownOpen}
                            />
                        </div>

                        <NavItem
                            href="/about"
                            onMouseEnter={handleOtherItemEnter}
                        >
                            About Me
                        </NavItem>
                    </nav>

                </div>

                {/* Mobile Menu Toggle - Positioned absolutely to break out of container stacking context if needed, or just z-index */}
                <div className="absolute top-0 right-0 h-[var(--header-height)] flex items-center px-6 md:hidden z-[61]">
                    <MobileMenuToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                                <Link
                                    key={item.slug}
                                    href={`/collections/${item.slug}`}
                                    className="group block nav-link"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    <span className="mb-2 group-hover:text-[var(--color-brand-primary)] transition-colors">{item.title}</span>
                                </Link>
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

            {/* Backdrop Overlay - Starts below the expanded header if open, or standard header if closed (but opacity 0) */}
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
