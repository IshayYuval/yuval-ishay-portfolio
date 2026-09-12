"use client";

import Link from "next/link";
import React from "react";
import { motion, TargetAndTransition, VariantLabels } from "framer-motion";
import styles from "./Button.module.css";

const MotionLink = motion.create(Link);

type ButtonBaseProps = {
    variant?: "primary" | "secondary";
    theme?: "light" | "dark";
    children: React.ReactNode;
    className?: string;
    targetId?: string;
    whileTap?: TargetAndTransition | VariantLabels;
};

type ConflictingProps = "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd";

type ButtonAsButton = ButtonBaseProps &
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, ConflictingProps> & {
        href?: undefined;
    };

type ButtonAsLink = ButtonBaseProps &
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, ConflictingProps> & {
        href: string;
    };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
    variant = "primary",
    theme = "light",
    className = "",
    children,
    targetId,
    whileTap = { scale: 0.98 },
    ...props
}: ButtonProps) {
    const isDark = theme === "dark";
    
    let variantClass = "";
    if (variant === "primary") {
        variantClass = isDark ? styles['btn-primary-dark'] : styles['btn-primary'];
    } else {
        variantClass = isDark ? styles['btn-secondary-dark'] : styles['btn-secondary'];
    }
    
    const combinedClassName = `${styles.btn} ${variantClass} ${className}`;

    if (props.href) {
        const { href, ...linkProps } = props as ButtonAsLink;
        return (
            <MotionLink
                href={href}
                whileTap={whileTap}
                className={combinedClassName}
                {...linkProps}
            >
                {children}
            </MotionLink>
        );
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (targetId) {
            const element = document.getElementById(targetId);
            if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - offset;

                const targetPosition = offsetPosition;
                const startPosition = window.scrollY;
                const distance = targetPosition - startPosition;
                const duration = 1500; // 1.5 seconds scroll duration
                let start: number | null = null;

                function animation(currentTime: number) {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const progress = Math.min(timeElapsed / duration, 1);

                    // easeInOutCubic easing function
                    const ease = progress < 0.5
                        ? 4 * progress * progress * progress
                        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

                    window.scrollTo(0, startPosition + distance * ease);

                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    }
                }

                requestAnimationFrame(animation);
            }
        }

        if ((props as ButtonAsButton).onClick) {
            (props as ButtonAsButton).onClick!(e);
        }
    };

    return (
        <motion.button
            whileTap={whileTap}
            className={combinedClassName}
            {...(props as ButtonAsButton)}
            onClick={handleClick}
        >
            {children}
        </motion.button>
    );
}
