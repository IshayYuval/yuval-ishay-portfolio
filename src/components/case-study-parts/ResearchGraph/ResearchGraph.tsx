import React from "react";
import PieGraph, { PieGraphProps } from "@/components/ui/PieGraph/PieGraph";
import { renderTextWithBreaks } from "@/utils/text";
import styles from "./ResearchGraph.module.css";

export interface ResearchGraphItem extends Partial<PieGraphProps> {
    label?: string;
    labelColor?: string;
    labelWeight?: string | number;
    text: string;
    percentage?: number;
    value?: number;
}

export interface ResearchGraphProps {
    title?: string;
    description?: string;
    text?: string; // alias for description
    graphs?: (ResearchGraphItem | string)[];
    items?: (ResearchGraphItem | string)[];
    bullets?: (ResearchGraphItem | string)[]; // alias for compatibility
    textAfter?: string;
    className?: string;
}

export default function ResearchGraph({
    title,
    description,
    text,
    graphs,
    items,
    bullets,
    textAfter,
    className = "",
}: ResearchGraphProps) {
    const rawItems = graphs || items || bullets || [];
    const desc = description || text;

    if (!title && !desc && rawItems.length === 0 && !textAfter) {
        return null;
    }

    return (
        <div className={`${styles.section} ${className}`}>
            {title && (
                <h3 className={styles.title}>
                    {renderTextWithBreaks(title)}
                </h3>
            )}

            {desc && (
                <p className={`text-body ${styles.description}`}>
                    {renderTextWithBreaks(desc)}
                </p>
            )}

            {rawItems.length > 0 && (
                <div className={styles.graphsGrid}>
                    {rawItems.map((item, index) => {
                        if (typeof item === "string") {
                            return <PieGraph key={index} text={item} />;
                        }
                        return (
                            <PieGraph
                                key={index}
                                percentage={item.percentage}
                                value={item.value}
                                label={item.label}
                                labelColor={item.labelColor}
                                labelWeight={item.labelWeight}
                                text={item.text}
                                color={item.color}
                                trackColor={item.trackColor}
                                size={item.size}
                                strokeWidth={item.strokeWidth}
                            />
                        );
                    })}
                </div>
            )}

            {textAfter && (
                <p className={`text-body ${styles.textAfter}`}>
                    {renderTextWithBreaks(textAfter)}
                </p>
            )}
        </div>
    );
}
