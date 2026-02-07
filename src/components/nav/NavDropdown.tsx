"use client";

import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface NavDropdownProps {
    label: string;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    id?: string;
    overrideColor?: string; // Added overrideColor prop
}

export default function NavDropdown({ label, isOpen, onOpenChange, id, overrideColor }: NavDropdownProps) {
    const pathname = usePathname();
    // Check if any child route is active (assuming visual-communication routes start with /collections/)
    // This is a simplification; ideally pass specific active state or check against children
    const isActive = pathname.includes("visual-communication") ||
        ["typography", "conceptual-design", "photography"].some(slug => pathname.includes(slug));

    // Close on Escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onOpenChange(false);
            }
        };
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onOpenChange]);

    // Apply override if not active/open and override exists
    const shouldUseOverride = !isActive && !isOpen && overrideColor;
    const textStyle = shouldUseOverride ? { color: overrideColor } : {};
    // For Chevron, we use currentColor if text color is set, or explicit style

    return (
        <div
            id={id}
            className="h-full group relative cursor-pointer"
            onMouseEnter={() => onOpenChange(true)}
        >
            <button
                className={`nav-link text-sm flex flex-row items-center gap-1`}
                onClick={() => onOpenChange(!isOpen)}
                aria-expanded={isOpen}
                style={{ backgroundColor: "transparent", outline: "none", border: "none" }}
            >
                <span
                    className={`transition-colors duration-300 ${isActive || isOpen ? 'text-[var(--color-brand-primary)]' : (shouldUseOverride ? '' : 'text-[var(--color-typography-header)]')}`}
                    style={textStyle}
                >
                    {label}
                </span>
                <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-[var(--color-brand-primary)]" : "" /* Let it inherit or set explicitly? Original was text-[var(--color-typography-header)]. If override, we want it to match text. If I remove class, it might default to currentColor? Need to be sure. */}`}
                    style={isOpen ? {} : (shouldUseOverride ? { color: overrideColor } : { color: 'var(--color-typography-header)' })} /* Using style for standard color too to be safe/consistent? Or class? Original used class. */
                />
            </button>

            {/* Underline Animation */}
            <span
                className={`h-[2px] w-full origin-center transform transition-transform duration-300 ease-out ${isActive || isOpen ? 'scale-x-100 bg-[var(--color-brand-primary)]' : 'scale-x-0 group-hover:scale-x-100 bg-[var(--color-typography-header)]'}`}
                style={!isActive && !isOpen && shouldUseOverride ? { backgroundColor: overrideColor } : {}}
            />
        </div>
    );
}
