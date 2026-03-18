"use client";
import Image from "next/image";
import "./about.css";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button/Button";

export default function AboutPage() {
    return (
        <div className="flex flex-col lg:flex-row w-full bg-[var(--color-brand-secondary-950)] min-h-screen relative">

            {/* Left side: Sticky Image */}
            <motion.div
                className="w-full lg:w-1/2 h-[50vh] lg:h-screen sticky top-0 shrink-0 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Image
                    src="/web-assets/about-me.jpg"
                    alt="Yuval Ishay profile picture"
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                />
                {/* Gradient Fade */}
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-brand-secondary-950)] to-transparent pointer-events-none hidden lg:block" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--color-brand-secondary-950)] to-transparent pointer-events-none lg:hidden" />
            </motion.div>

            {/* Right side: Scrolling text content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-start pr-6 pl-6 md:pr-12 md:pl-6 lg:pr-24 lg:pl-12 z-0 pt-[var(--header-height)] bg-[var(--color-brand-secondary-950)] lg:bg-transparent shadow-[-10px_0_20px_rgba(21,30,61,1)] lg:shadow-none">
                <div className="flex flex-col gap-12 lg:gap-32 max-w-xl pb-32">

                    {/* Section 1 */}
                    <div className="min-h-auto lg:min-h-[calc(100vh-var(--header-height))] flex flex-col justify-center gap-8 py-4 lg:py-12">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
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
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
                            className="max-w-xl text-body"
                        >
                            I am a multidisciplinary designer based in Israel, currently in my second year of the Visual Communication B.A. program at the Holon Institute of Technology (HIT).
                            <br />
                            <br />
                            My work is driven by curiosity, research, and a search for narrative—whether through strict typographic grids or conceptual packaging. To bridge the gap between static concepts and functioning reality, I deeply integrate AI frameworks into my workflow. Tools like Antigravity (which I used to code this very portfolio) and Base44 serve as my creative amplifiers, empowering me to turn abstract design thinking into living, interactive digital products autonomously.
                        </motion.p>
                        <motion.div className="flex gap-4 sm:flex-row flex-col mb-6">
                            <motion.div className="w-full sm:w-[200px]">
                                <Button variant="primary" targetId="background" className="w-full justify-center">
                                    How did you start?
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Section 2 */}
                    <div id="background" className="min-h-auto lg:min-h-[calc(100vh-var(--header-height))] flex flex-col justify-center gap-8 py-12">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={{
                                hidden: { opacity: 1 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.04,
                                    }
                                }
                            }}
                            className="mb-0"
                        >
                            {"My ".split("").map((char, index) => (
                                <motion.span
                                    key={`part1-sec2-${index}`}
                                    variants={{
                                        hidden: { opacity: 0, display: "none" },
                                        visible: { opacity: 1, display: "inline-block" }
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                            <span className="emphasized-text">
                                {"Background".split("").map((char, index) => (
                                    <motion.span
                                        key={`part2-sec2-${index}`}
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
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="max-w-xl text-body"
                        >
                            Before trading my office chair for a student desk, I spent about a decade out in the wild working on product design (UX/UI) and branding.
                            So, why go back to school?
                            <br />
                            <br />
                            Honestly, just making things look good and work smoothly wasn't enough anymore. I came to HIT to geek out on the
                            why behind it all; the conceptual storytelling that turns a nice design into something with an actual soul.
                        </motion.p>
                        <motion.div className="flex gap-4 sm:flex-row flex-col mb-6">
                            <motion.div className="w-full sm:w-[200px]">
                                <Button variant="primary" targetId="hobbies" className="w-full justify-center">
                                    Do you ever log off?
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Section 3 */}
                    <div id="hobbies" className="min-h-auto lg:min-h-[calc(100vh-var(--header-height))] flex flex-col justify-center gap-8 py-12">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={{
                                hidden: { opacity: 1 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.04,
                                    }
                                }
                            }}
                            className="mb-0"
                        >
                            {"Outside the ".split("").map((char, index) => (
                                <motion.span
                                    key={`part1-sec3-${index}`}
                                    variants={{
                                        hidden: { opacity: 0, display: "none" },
                                        visible: { opacity: 1, display: "inline-block" }
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                            <span className="emphasized-text">
                                {"Studio".split("").map((char, index) => (
                                    <motion.span
                                        key={`part2-sec3-${index}`}
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
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="max-w-xl text-body"
                        >
                            When I'm not obsessing over micro-typography or experimenting with new AI models, I'm usually practicing martial arts,
                            following football, or listening to music. I'm constantly seeking to step out of my comfort zone, it applies to my hobbies, it applies to my lifestyle and it applies to how I design.
                        </motion.p>
                        <motion.div className="flex gap-4 sm:flex-row flex-col mb-6">
                            <motion.div className="w-full sm:w-auto">
                                <Button variant="primary" href="/" className="w-full justify-center">
                                    Show me the work!
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
}
