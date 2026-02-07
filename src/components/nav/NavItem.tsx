"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties; // Added style prop
    overrideColor?: string; // Explicit color override
}

export default function NavItem({ href, children, className = "", overrideColor, style, ...props }: NavItemProps) {
    const pathname = usePathname();
    const isActive = pathname === href || pathname.startsWith(`${href}/`);

    // If overrideColor is present, use it for non-active, non-hover states? 
    // Or just force it? The requirement suggests "dark colors to black". 
    // Usually hover/active might still want to be the brand color.
    // Let's assume the "base" text color changes, but active/hover highlights remain brand color if desired, 
    // OR if the user wants "black" nav, maybe active is also black? 
    // User said: "color of the nav-items to be determined by the background".
    // I will apply overrideColor to the base text color. Active state is currently brand-primary.
    // If background is light, active brand-primary might be hard to see? 
    // Brand primary is #EFAF22 (gold-ish) or similar? 
    // Current code: active ? 'text-[var(--color-brand-primary-500)]' : 'text-[var(--color-typography-header)]'
    // I will replace 'text-[var(--color-typography-header)]' with the override if present.

    const textColorClass = isActive
        ? 'text-[var(--color-brand-primary-500)]'
        : (overrideColor ? '' : 'text-[var(--color-typography-header)]');

    const textStyle = (!isActive && overrideColor) ? { color: overrideColor } : {};

    return (
        <Link
            href={href}
            className={`nav-link relative group flex flex-col items-center ${className}`}
            style={style}
            {...props}
        >
            <span
                className={`uppercase text-sm transition-colors duration-300 ${textColorClass}`}
                style={textStyle}
            >
                {children}
            </span>

            {/* Underline Animation */}
            <span
                className={`h-[1px] w-full origin-center transform transition-transform duration-300 ease-out ${isActive ? 'scale-x-100 bg-[var(--color-brand-primary-500)]' : 'scale-x-0 group-hover:scale-x-100 bg-[var(--color-typography-header)]'}`}
                style={!isActive && overrideColor ? { backgroundColor: overrideColor } : {}}
            />
        </Link>
    );
}
