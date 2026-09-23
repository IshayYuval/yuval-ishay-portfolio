import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { collections } from "@/data/portfolio";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

interface MobileNavItemProps {
    href: string;
    children: React.ReactNode;
    onClick: () => void;
    active: boolean;
}

function MobileNavItem({ href, children, onClick, active }: MobileNavItemProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`nav-link relative w-fit group pl-4 ${active ? 'text-[var(--color-brand-primary-500)]' : 'hover:text-[var(--foreground)]'}`}
        >
            {children}
            <span className={`absolute left-0 top-0 h-full w-[2px] origin-center transform transition-transform duration-300 ease-out ${active ? 'scale-y-100 bg-[var(--color-brand-primary-500)]' : 'scale-y-0 group-hover:scale-y-100 bg-[var(--foreground)]'}`} />
        </Link>
    );
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const pathname = usePathname();

    const myWorkItems = collections.filter(c => c.parentNav === "my-work");

    const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

    return (
        <div
            className={`fixed inset-0 z-[60] bg-[var(--color-brand-secondary-900)] transition-transform duration-500 ease-in-out origin-top md:hidden ${isOpen ? "scale-y-100 pointer-events-auto visible" : "scale-y-0 pointer-events-none invisible"
                }`}
            style={{ top: 0 }}
        >
            <div className="container-custom h-full flex flex-col relative overflow-hidden">
                <div
                    className="absolute inset-0 pt-[var(--header-height)] pb-[calc(2rem+env(safe-area-inset-bottom,0px))] px-[calc(1.5rem+env(safe-area-inset-left,0px))] pr-[calc(1.5rem+env(safe-area-inset-right,0px))] overflow-y-auto"
                >
                    <nav className={`flex flex-col mt-8 uppercase transition-all duration-700 delay-300 ease-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <div className="flex flex-col gap-6">
                            <span className="text-xs tracking-widest opacity-50 uppercase mb-2">My Work</span>

                            {myWorkItems.map((item) => (
                                <MobileNavItem
                                    key={item.slug}
                                    href={`/${item.slug}`}
                                    onClick={onClose}
                                    active={isActive(`/${item.slug}`)}
                                >
                                    {item.title}
                                </MobileNavItem>
                            ))}
                        </div>

                        <div className="w-full h-px bg-[var(--foreground)] opacity-20 my-8" />

                        <div className="flex flex-col gap-8">
                            <MobileNavItem href="/about" onClick={onClose} active={isActive("/about")}>
                                My Story
                            </MobileNavItem>

                            <div className="flex gap-4 items-center">
                                <a href="https://www.instagram.com/yuvalishay.art" aria-label="Yuval Ishay on Instagram" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                    <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} className="w-6 h-6 invert" />
                                </a>
                                <a href="https://www.linkedin.com/in/yuvalishay-art" aria-label="Yuval Ishay on LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                    <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} className="w-6 h-6 invert" />
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}
