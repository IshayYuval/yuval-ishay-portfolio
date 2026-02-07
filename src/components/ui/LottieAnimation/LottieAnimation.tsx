"use client";

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface LottieAnimationProps {
    animationPath: string;
    className?: string;
    loop?: boolean;
    autoplay?: boolean;
}

export default function LottieAnimation({
    animationPath,
    className = "",
    loop = true,
    autoplay = true,
}: LottieAnimationProps) {
    const [animationData, setAnimationData] = useState<any>(null);

    useEffect(() => {
        const fetchAnimation = async () => {
            try {
                const response = await fetch(animationPath);
                if (!response.ok) {
                    throw new Error(`Failed to fetch animation: ${response.statusText}`);
                }
                const data = await response.json();
                setAnimationData(data);
            } catch (error) {
                console.error("Error loading Lottie animation:", error);
            }
        };

        if (animationPath) {
            fetchAnimation();
        }
    }, [animationPath]);

    if (!animationData) {
        return null; // Or a loading spinner/placeholder
    }

    return (
        <div className={className}>
            <Lottie
                animationData={animationData}
                loop={loop}
                autoplay={autoplay}
                className="w-full h-full"
            />
        </div>
    );
}
