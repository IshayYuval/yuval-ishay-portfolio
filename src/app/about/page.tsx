"use client";
import Section from "@/components/layout/Section";
import Image from "next/image";
import "./about.css";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="pt-[var(--header-height)]">
            <Section>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}>
                        <Image src="/web-assets/profile-picture.webp" alt="Hero Image" width={504} height={504} className="rounded-xl" />
                    </motion.div>

                    <div className="max-w-3xl flex flex-col items-start gap-8">
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 1 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.04,
                                    }
                                }
                            }}
                            className="mb-0 leading-tight"
                        >
                            {"Hey there, I'm ".split("").map((char, index) => (
                                <motion.span
                                    key={`part1-${index}`}
                                    variants={{
                                        hidden: { opacity: 0, display: "none" },
                                        visible: { opacity: 1, display: "inline-block" }
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                            <span className="emphasized-text">
                                {"Yuval!".split("").map((char, index) => (
                                    <motion.span
                                        key={`part2-${index}`}
                                        variants={{
                                            hidden: { opacity: 0, display: "none" },
                                            visible: { opacity: 1, display: "inline-block" }
                                        }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
                            className="mb-6 max-w-xl text-body"
                        >
                            I'm a professional product designer and logo designer, based in Rishon Letzion, Israel.
                            I only have one mission - to solve your problems using my skills. I bring a wealth of expertise to the table in both
                            the UX/UI and logo design field, and I'm here to help.
                            <br />
                            <br />
                            Over the last 10 years I had the pleasure to craft my art and improve it
                            with every project I worked on, and I believe my path isn't much different than
                            yours - we're all trying to leverage our skills to boost our businesses.
                            <br />
                            <br />
                            A little bit on a personal note, I love lots of sports, from football to martial arts,
                            and I'm an enthusiast music fan. In addition, I took upon myself to expand my knowledge and
                            improve myself as a designer, by starting my Visual Communication BA in
                            the Holon Institute of Technology.
                        </motion.p>
                    </div>
                </div>

            </Section>
        </div>
    );
}
