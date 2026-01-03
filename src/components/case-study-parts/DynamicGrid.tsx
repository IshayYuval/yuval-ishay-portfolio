import React from "react";
import Image from "next/image";
import { GalleryItem } from "@/data/portfolio";

interface DynamicGridProps {
    items: GalleryItem[];
}

export default function DynamicGrid({ items }: DynamicGridProps) {
    if (!items || items.length === 0) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full my-12">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`relative overflow-hidden rounded-lg ${item.colSpan === "full" ? "md:col-span-2 aspect-video" : "aspect-square"
                        }`}
                >
                    <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
                    />
                </div>
            ))}
        </div>
    );
}
