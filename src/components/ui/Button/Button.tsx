import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";

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
    // Base styles are now handled by CSS classes, but we keep the logic for variant class names
    // We can simplify this since the CSS classes handle most of it

    const variantClass = variant === "primary" ? styles['btn-primary'] : styles['btn-secondary'];
    const combinedClassName = `${styles.btn} ${variantClass} ${className}`;

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
