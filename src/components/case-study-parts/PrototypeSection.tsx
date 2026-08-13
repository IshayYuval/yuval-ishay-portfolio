"use client";

import React, { useState, useEffect, useRef } from "react";

interface PrototypeSectionProps {
    title: string;
    src: string;
    width?: number | string;
    height?: number | string;
    aspectRatio?: string;
}

export default function PrototypeSection({
    title,
    src,
    width,
    height,
    aspectRatio: customAspectRatio,
}: PrototypeSectionProps) {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [dynamicHeight, setDynamicHeight] = useState<number | null>(null);

    // 1. Attempt to measure iframe height dynamically if same-origin / accessible
    const measureHeight = () => {
        try {
            if (iframeRef.current && iframeRef.current.contentDocument) {
                const doc = iframeRef.current.contentDocument;
                const measured = Math.max(
                    doc.body?.scrollHeight || 0,
                    doc.body?.offsetHeight || 0,
                    doc.documentElement?.scrollHeight || 0,
                    doc.documentElement?.offsetHeight || 0
                );
                if (measured > 0) {
                    setDynamicHeight(measured);
                }
            }
        } catch {
            // Cross-origin security restrictions are expected for external embeds (e.g. Figma)
        }
    };

    useEffect(() => {
        // Listen for postMessage resize events if emitted by prototype host
        const handleMessage = (event: MessageEvent) => {
            if (event.data && typeof event.data === "object") {
                const data = event.data;
                if (data.type === "resize" && typeof data.height === "number") {
                    setDynamicHeight(data.height);
                } else if (typeof data.height === "number" && data.height > 0) {
                    setDynamicHeight(data.height);
                }
            }
        };

        window.addEventListener("message", handleMessage);
        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, []);

    if (!src) return null;

    // 2. Fallback sizing & container styles logic
    const numWidth = typeof width === "number" ? width : (typeof width === "string" && !isNaN(Number(width)) ? Number(width) : null);
    const numHeight = typeof height === "number" ? height : (typeof height === "string" && !isNaN(Number(height)) ? Number(height) : null);

    let calculatedAspectRatio: string | undefined = customAspectRatio;
    if (!calculatedAspectRatio && numWidth && numHeight) {
        calculatedAspectRatio = `${numWidth} / ${numHeight}`;
    }

    const containerStyle: React.CSSProperties = {};

    if (numWidth) {
        containerStyle.maxWidth = `min(100%, ${numWidth}px)`;
    } else if (typeof width === "string") {
        containerStyle.maxWidth = width;
    }

    if (dynamicHeight) {
        containerStyle.height = `${dynamicHeight}px`;
    } else if (height) {
        containerStyle.height = typeof height === "number" ? `${height}px` : height;
    }

    if (calculatedAspectRatio && !containerStyle.height) {
        containerStyle.aspectRatio = calculatedAspectRatio;
    }

    const useDefaultAspect = !dynamicHeight && !height && !calculatedAspectRatio;

    return (
        <section className="py-24 w-full">
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-16">{title}</h1>
            <div className="w-full flex justify-center items-center px-4">
                <div
                    className={`w-full relative max-w-5xl ${useDefaultAspect ? "aspect-video" : ""}`}
                    style={containerStyle}
                >
                    <iframe
                        ref={iframeRef}
                        onLoad={measureHeight}
                        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                        src={src}
                        allowFullScreen
                        className="w-full h-full rounded-lg shadow-sm"
                        title={title}
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
