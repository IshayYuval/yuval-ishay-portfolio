import React from "react";
import styles from "./Skeleton.module.css";

interface SkeletonProps {
    className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = "" }) => {
    return <div className={`${styles.skeleton} ${className}`} />;
};

export default Skeleton;
