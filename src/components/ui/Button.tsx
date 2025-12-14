import Link from "next/link";
import React from "react";

type ButtonBaseProps = {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
    className?: string;
};

type ButtonAsButton = ButtonBaseProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: undefined;
    };

type ButtonAsLink = ButtonBaseProps &
    React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
    };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
    variant = "primary",
    className = "",
    children,
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center px-6 py-3 min-w-[120px] text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variants = {
        primary:
            "bg-[var(--color-brand-primary-500)] text-[var(--color-brand-secondary-900)] hover:bg-[var(--color-brand-primary-600)] focus:ring-[var(--color-brand-primary-500)]",
        secondary:
            "bg-transparent border border-[var(--color-brand-primary-500)] text-[var(--color-brand-primary-500)] hover:bg-[var(--color-brand-secondary-700)] focus:ring-[var(--color-brand-primary-500)]",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (props.href) {
        const { href, ...linkProps } = props as ButtonAsLink;
        return (
            <Link href={href} className={combinedClassName} {...linkProps}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...(props as ButtonAsButton)}>
            {children}
        </button>
    );
}
