"use client";
import { motion, Variants } from "framer-motion";
import ScrollDownButton from "@/components/ui/ScrollDownButton/ScrollDownButton";
import HeroAnimatedContent from "@/components/ui/HeroAnimatedContent/HeroAnimatedContent";
import ScrollToTop from "@/components/ui/ScrollToTop/ScrollToTop";
import { caseStudies, collections, favorites } from "@/data/portfolio";
import CollectionCard from "@/components/ui/CollectionCard/CollectionCard";
import FavoriteCaseStudy from "@/components/ui/FavoriteCaseStudy/FavoriteCaseStudy";
import AnimatedText from "@/components/ui/AnimatedText/AnimatedText";
import { useContext } from "react";
import { AnimationContext } from "@/components/utils/AnimationProvider";
const cardContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const isBackNav = useContext(AnimationContext);
  const favoriteWorks = favorites.reduce((acc, fav) => {
    const study = caseStudies.find((s) => s.slug === fav.slug);
    if (study) acc.push(study);
    return acc;
  }, [] as typeof caseStudies);

  return (
    <>
      <div className="relative w-full h-screen">
        {/* Masthead */}
        <section
          className="fixed top-0 left-0 w-full h-screen flex items-center pt-20 px-4 md:px-5 lg:px-[7.5rem] overflow-hidden z-0"
          style={{
            backgroundColor: 'var(--color-brand-secondary-950)',
            backgroundImage: 'radial-gradient(rgba(139, 252, 244, 0.15) 1.25px, transparent 1.25px)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0'
          }}
        >
          <HeroAnimatedContent />
          <ScrollDownButton targetId="featured-works" />
        </section>
      </div>

      <div className="relative z-10 bg-[var(--color-brand-secondary-950)]">
        <section id="featured-works" className="relative w-full">
          <div className="relative z-10 flex flex-col">
            {favoriteWorks.map((work) => (
              <FavoriteCaseStudy
                key={work.slug}
                work={work}
                collectionTitle={collections.find(c => c.slug === work.collectionSlug)?.shortTitle || collections.find(c => c.slug === work.collectionSlug)?.title || "View"}
              />
            ))}
          </div>
        </section>

        <section id="wanna-see-more" className="relative w-full min-h-[calc(100vh-var(--header-height))] py-24 md:py-32 px-8 lg:px-32 xl:px-64 bg-[var(--color-brand-secondary-950)] text-white">
          <motion.h2
            className="mb-12 text-white"
            initial={isBackNav ? false : "hidden"}
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
            <AnimatedText text="Wanna see more?" />
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
            variants={cardContainerVariants}
            initial={isBackNav ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {collections.map(collection => (
              <motion.div key={collection.slug} variants={cardVariants}>
                <CollectionCard collection={collection} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
      <ScrollToTop />
    </>
  );
}
