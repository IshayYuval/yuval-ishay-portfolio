import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function Section({ children, className = "", id, ...props }: SectionProps) {
    return (
        <section id={id} className={`pt-12 pb-4 md:pt-24 md:pb-8 ${className}`} {...props}>
            <div className="container-custom">
                {children}
            </div>
        </section>
    );
}
