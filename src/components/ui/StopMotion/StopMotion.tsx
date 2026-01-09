"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./StopMotion.module.css";

interface StopMotionProps {
    images: string[];
    duration: number; // Duration in seconds
    alt: string;
}

const StopMotion: React.FC<StopMotionProps> = ({ images, duration, alt }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, duration * 1000);

        return () => clearInterval(interval);
    }, [images, duration]);

    if (images.length === 0) return null;

    return (
        <div className={styles.container}>
            <Image
                src={images[currentIndex]}
                alt={`${alt} - Frame ${currentIndex + 1}`}
                className={styles.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
            />
        </div>
    );
};

export default StopMotion;
