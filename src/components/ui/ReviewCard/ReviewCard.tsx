import React from "react";
import { Review } from "@/data/portfolio";
import Image from "next/image";
import styles from "./ReviewCard.module.css";

interface ReviewCardProps {
    review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
    return (
        <div className={`group ${styles['review-card']}`}>
            {/* Default State: Image & Company */}
            <Image
                src={review.image}
                alt={review.companyName}
                fill
                className="object-contain"
            />

            {/* Hover State: Review Message Overlay */}
            <div className={styles['review-card-overlay']}>
                <p className={styles['review-card-text']}>
                    "{review.reviewMessage}" - {review.companyName}
                </p>
            </div>
        </div>
    );
}
