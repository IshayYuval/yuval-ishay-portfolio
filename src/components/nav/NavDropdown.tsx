"use client";

import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface NavDropdownProps {
    label: string;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    id?: string;
}

export default function NavDropdown({ label, isOpen, onOpenChange, id }: NavDropdownProps) {
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

    return (
        <div
            id={id}
            className="h-full group relative cursor-pointer"
            onMouseEnter={() => onOpenChange(true)}
        >
            <button
                className={`nav-link flex flex-row items-center gap-1`}
                onClick={() => onOpenChange(!isOpen)}
                aria-expanded={isOpen}
                style={{ backgroundColor: "transparent", outline: "none", border: "none" }}
            >
                <span
                    className={`transition-colors duration-300 ${isActive || isOpen ? 'text-[var(--color-brand-primary)]' : 'text-[var(--color-typography-header)]'}`}
                >
                    {label}
                </span>
                <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-[var(--color-brand-primary)]" : "text-[var(--color-typography-header)]"}`}
                />
            </button>

            {/* Underline Animation */}
            <span
                className={`h-[2px] w-full origin-center transform transition-transform duration-300 ease-out ${isActive || isOpen ? 'scale-x-100 bg-[var(--color-brand-primary)]' : 'scale-x-0 group-hover:scale-x-100 bg-[var(--color-typography-header)]'}`}
            />
        </div>
    );
}
