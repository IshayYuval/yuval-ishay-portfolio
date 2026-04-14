"use client";

import { useEffect, useState, useRef, createContext, useContext } from "react";
import { usePathname } from "next/navigation";
import { MotionConfig } from "framer-motion";

export const AnimationContext = createContext(false);

export default function AnimationProvider({ children }: { children: React.ReactNode }) {
    const [isBFCache, setIsBFCache] = useState(false);
    const pathname = usePathname();
    const isBackNav = useRef(false);

    useEffect(() => {
        const handlePageShow = (event: PageTransitionEvent) => {
            if (event.persisted) {
                isBackNav.current = true;
                setIsBFCache(true);
            }
        };

        const handlePopState = () => {
            isBackNav.current = true;
            setIsBFCache(true);
        };

        window.addEventListener("pageshow", handlePageShow);
        window.addEventListener("popstate", handlePopState);
        return () => {
            window.removeEventListener("pageshow", handlePageShow);
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    useEffect(() => {
        if (isBackNav.current) {
            isBackNav.current = false;
            const timer = setTimeout(() => {
                setIsBFCache(false);
            }, 500);
            return () => clearTimeout(timer);
        } else {
            setIsBFCache(false);
        }
    }, [pathname]);

    return (
        <AnimationContext.Provider value={isBFCache}>
            <MotionConfig reducedMotion={isBFCache ? "always" : "user"}>
                {children}
            </MotionConfig>
        </AnimationContext.Provider>
    );
}
