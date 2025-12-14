import React from "react";

interface MobileMenuToggleProps {
    isOpen: boolean;
    onClick: () => void;
}

export default function MobileMenuToggle({ isOpen, onClick }: MobileMenuToggleProps) {
    return (
        <button
            onClick={onClick}
            className="relative w-8 h-8 flex flex-col justify-center items-center group focus:outline-none z-[61] md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
        >
            {/* Top Line */}
            <span
                className={`block w-6 h-[2px] bg-[var(--foreground)] transition-transform duration-300 ease-in-out origin-center ${isOpen ? "rotate-45 translate-y-[1px]" : "-translate-y-[3px]"
                    }`}
            />
            {/* Bottom Line */}
            <span
                className={`block w-6 h-[2px] bg-[var(--foreground)] transition-transform duration-300 ease-in-out origin-center ${isOpen ? "-rotate-45 -translate-y-[1px]" : "translate-y-[3px]"
                    }`}
            />
        </button>
    );
}
