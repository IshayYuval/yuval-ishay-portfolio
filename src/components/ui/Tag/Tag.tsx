import React from "react";
import styles from "./Tag.module.css";

interface TagProps {
    children: React.ReactNode;
    className?: string; // Optional className prop
}

export default function Tag({ children, className = "" }: TagProps) {
    return (
        <span className={`${styles.tag} px-3 py-1 inline-block ${className}`}>
            {children}
        </span>
    );
}
