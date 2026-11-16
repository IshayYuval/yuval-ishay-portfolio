"use client";
import "./about.css";
import { motion, Variants } from "framer-motion";
import Button from "@/components/ui/Button/Button";
import AnimatedText from "@/components/ui/AnimatedText/AnimatedText";
import AboutImageStack from "@/components/ui/AboutImageStack/AboutImageStack";
import { useContext } from "react";
import { AnimationContext } from "@/components/utils/AnimationProvider";

const buttonContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 1.2,
        },
    },
};

const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function AboutPage() {
    const isBackNav = useContext(AnimationContext);
    const handleEmailClick = () => {
        // Prevent basic HTML scrapers from detecting the raw email string in the DOM
        const user = "yuvalishay14";
        const domain = "gmail.com";
        window.location.href = `mailto:${user}@${domain}`;
    };

    return (
        <div className="flex flex-col lg:flex-row w-full bg-[var(--color-brand-secondary-950)] min-h-screen relative">

            {/* Left side: Sticky Image Stack (Top on mobile, left on desktop) */}
            <motion.div
                className="w-full lg:w-1/2 h-[46vh] lg:h-screen sticky top-0 shrink-0 z-20 flex items-center justify-center overflow-hidden bg-[var(--color-brand-secondary-950)] pt-[var(--header-height)] lg:pt-0"
                initial={isBackNav ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <AboutImageStack />
            </motion.div>

            {/* Right side: Scrolling text content (Bottom on mobile, right on desktop) */}
            <div className="w-full lg:w-1/2 flex flex-col justify-start pr-6 pl-6 md:pr-12 md:pl-6 lg:pr-24 lg:pl-12 z-10 pt-6 lg:pt-0 bg-transparent">
                <div className="flex flex-col gap-12 lg:gap-0 max-w-xl pb-24 lg:pb-0">

                    {/* Section 1 */}
                    <div className="min-h-[50vh] lg:min-h-screen flex flex-col justify-center py-6 lg:py-0 pt-2 lg:pt-[var(--header-height)]">
                        <h1 className="sr-only">Hey there, I&#39;m Yuval!</h1>
                        <motion.h1
                            aria-hidden="true"
                            initial={isBackNav ? false : "hidden"}
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
                            className="mb-[var(--gap-md)]"
                        >
                            <AnimatedText text="Hey there, " />
                            <span className="inline-block whitespace-nowrap">
                                <AnimatedText text="I'm " />
                                <AnimatedText text="Yuval!" className="emphasized-text" />
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={isBackNav ? false : { opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
                            className="max-w-xl text-body"
                        >
                            I am a multidisciplinary designer living in Rishon LeZion (which is like Tel-Aviv, but with a lot of malls). I’m currently in my second year of the Visual Communication B.A. program at HIT.
                            <br />
                            <br />
                            My love story with design began in elementary school, when I discovered a weird program on my computer called Photoshop. I started experimenting with brushes and uploading my work to a graphic design community on the Ikariam forum.

                            Everybody told me to quit and that design wasn’t for me.
                            <br />
                            Well, I didn’t ;)
                        </motion.p>
                        <motion.div
                            className="flex mt-[var(--gap-xl)]"
                            variants={buttonContainerVariants}
                            initial={isBackNav ? false : "hidden"}
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <motion.div variants={buttonVariants} className="w-full sm:w-[160px]">
                                <Button variant="primary" targetId="background" className="w-full justify-center">
                                    See how I think
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Section 2 */}
                    <div id="background" className="min-h-[50vh] lg:min-h-screen flex flex-col justify-center py-6 lg:py-0">
                        <h1 className="sr-only">My Approach</h1>
                        <motion.h1
                            aria-hidden="true"
                            initial={isBackNav ? false : "hidden"}
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
                            className="mb-[var(--gap-md)]"
                        >
                            <AnimatedText text="My " />
                            <AnimatedText text="Approach" className="emphasized-text" />
                        </motion.h1>

                        <motion.p
                            initial={isBackNav ? false : { opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="max-w-xl text-body"
                        >
                            My approach to design comes down to two things: having a story worth telling, and caring about every little detail that helps tell it.
                            <br />
                            Without a story, design might look good, but it doesn’t have much to say. And if that story doesn’t work at every level, from the overall concept to the smallest detail, the work feels unfinished.
                            <br />
                            <br />
                            A lot of what I know, I taught myself. I believe that part of being a designer today is to never stop learning and picking up new tools. Not just for the sake of knowing more, but because every new tool gives me another way to bring ideas to life and tell better stories.
                        </motion.p>
                        <motion.div
                            className="mt-[var(--gap-xl)]"
                            variants={buttonContainerVariants}
                            initial={isBackNav ? false : "hidden"}
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <motion.div variants={buttonVariants} className="w-full sm:w-[120px]">
                                <Button variant="primary" onClick={handleEmailClick} className="w-full justify-center">
                                    Say hello
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
