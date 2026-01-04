import React from "react";
import styles from "./Tag.module.css";

interface TagProps {
    children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
    return (
        <span className={`${styles.tag} px-3 py-1 inline-block`}>
            {children}
        </span>
    );
}
