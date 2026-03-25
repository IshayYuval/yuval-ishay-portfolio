import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import { CaseStudy, favorites } from "@/data/portfolio";
import styles from "./FavoriteCaseStudy.module.css";
import { motion, Variants } from "framer-motion";

interface FavoriteCaseStudyProps {
  work: CaseStudy;
  collectionTitle: string;
}

export default function FavoriteCaseStudy({ work, collectionTitle }: FavoriteCaseStudyProps) {
  const favoriteConfig = favorites.find(f => f.slug === work.slug);

  const bgColor = favoriteConfig?.backgroundColor || work.backgroundColor || 'var(--color-brand-secondary-950)';
  const headingColor = favoriteConfig?.headingColor;
  const textColor = favoriteConfig?.textColor;
  const coverSrc = favoriteConfig?.coverSrc || work.cover;

  const isVideo = coverSrc?.match(/\.(mp4|webm|ogg)$/i);

  const buttonContainerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
          opacity: 1,
          transition: {
              staggerChildren: 0.2,
              delayChildren: 0.8,
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

  return (
    <section
      className="w-full pt-0 pb-[3rem] md:py-[6rem] min-h-[calc(100vh-var(--header-height))] flex items-center overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 xl:gap-24 items-center ">

        {/* COLUMN 1: Text Container */}
        <div className="order-2 md:order-1 flex flex-col justify-center px-8 md:pr-0 md:pl-8 lg:pl-32 xl:pl-64">
          <motion.h3
            className={`${styles.title} text-4xl md:text-5xl lg:text-6xl mb-3`}
            style={headingColor ? { color: headingColor } : undefined}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
                hidden: { opacity: 1 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.04 }
                }
            }}
          >
            {work.title.split("").map((char, index) => (
                <motion.span
                    key={`title-char-${index}`}
                    variants={{
                        hidden: { opacity: 0, display: "none" },
                        visible: { opacity: 1, display: "inline-block" }
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
          </motion.h3>
          <motion.p
            className="text-body-large mb-10"
            style={textColor ? { color: textColor } : undefined}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            {work.excerpt}
          </motion.p>
          <motion.div 
            className="flex gap-2 md:gap-4 w-full md:flex-wrap flex-nowrap"
            variants={buttonContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div variants={buttonVariants} className="min-w-[180px] w-full md:w-auto">
                <Button className="w-full" variant="primary" theme={favoriteConfig?.buttonTheme || "light"} href={`/${work.slug}`}>
                  Full Case Study
                </Button>
            </motion.div>
            <motion.div variants={buttonVariants} className="min-w-[180px] w-full md:w-auto">
                <Button className="w-full" variant="secondary" theme={favoriteConfig?.buttonTheme || "light"} href={`/${work.collectionSlug}`}>
                  {collectionTitle} Projects
                </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* COLUMN 2: Image Container (1:1 Aspect Ratio) */}
        <div
          className="order-1 lg:order-2 rounded-[var(--radius-md)] flex-none lg:flex-1 flex justify-center items-center relative w-full h-auto max-h-[55vh] lg:max-h-[calc(100vh-var(--header-height)-6rem)] pointer-events-none"
        // [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)]
        >
          {coverSrc && (
            isVideo ? (
              <video
                src={coverSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full max-h-[60vh] lg:max-h-[calc(100vh-var(--header-height)-6rem)] object-contain"
              />
            ) : (
              <Image
                src={coverSrc}
                alt={`${work.title} cover`}
                width={1200}
                height={1200}
                unoptimized
                className="w-full h-full max-h-[60vh] lg:max-h-[calc(100vh-var(--header-height)-6rem)] object-contain"
              />
            )
          )}
        </div>

      </div>
    </section>
  );
}
