import React from "react";
import { Review } from "@/data/portfolio";
import Image from "next/image";

interface ReviewCardProps {
    review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
    return (
        <div className="group relative block overflow-hidden rounded-[var(--radius)] aspect-square">
            {/* Default State: Image & Company */}
            <Image
                src={review.image}
                alt={review.companyName}
                fill
                className="object-contain"
            />

            {/* Hover State: Review Message Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-all duration-300 opacity-0 group-hover:opacity-100 bg-black/40">
                <p className="text-white/90 text-sm italic leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    "{review.reviewMessage}"
                </p>
            </div>
        </div>
    );
}
