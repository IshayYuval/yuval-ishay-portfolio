import React from "react";

interface PrototypeSectionProps {
    title: string;
    src: string;
}

export default function PrototypeSection({ title, src }: PrototypeSectionProps) {
    if (!src) return null;

    return (
        <section className="py-24 w-full">
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-16">{title}</h1>
            <div className="w-full flex justify-center items-center">
                <div className="w-full max-w-5xl aspect-video relative">
                    <iframe
                        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                        src={src}
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-sm"
                        title={title}
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
