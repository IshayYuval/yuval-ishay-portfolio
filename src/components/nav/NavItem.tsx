"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function NavItem({ href, children, className = "", ...props }: NavItemProps) {
    const pathname = usePathname();
    const isActive = pathname === href || pathname.startsWith(`${href}/`);

    return (
        <Link
            href={href}
            className={`nav-link relative group flex flex-col items-center ${className}`}
            {...props}
        >
            <span
                className={`uppercase text-sm transition-colors duration-300 ${isActive ? 'text-[var(--color-brand-primary)]' : 'text-[var(--color-typography-header)]'}`}
            >
                {children}
            </span>

            {/* Underline Animation */}
            <span
                className={`h-[1px] w-full origin-center transform transition-transform duration-300 ease-out ${isActive ? 'scale-x-100 bg-[var(--color-brand-primary)]' : 'scale-x-0 group-hover:scale-x-100 bg-[var(--color-typography-header)]'}`}
            />
        </Link>
    );
}
