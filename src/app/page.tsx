"use client";
import { motion, Variants } from "framer-motion";
import ScrollDownButton from "@/components/ui/ScrollDownButton/ScrollDownButton";
import HeroAnimatedContent from "@/components/ui/HeroAnimatedContent/HeroAnimatedContent";
import ScrollToTop from "@/components/ui/ScrollToTop/ScrollToTop";
import { caseStudies, collections, favorites } from "@/data/portfolio";
import CollectionCard from "@/components/ui/CollectionCard/CollectionCard";
import FavoriteCaseStudy from "@/components/ui/FavoriteCaseStudy/FavoriteCaseStudy";
import BoundingBoxAnimation from "@/components/ui/BoundingBoxAnimation/BoundingBoxAnimation";
import DotPattern from "@/components/ui/Patterns";
import { useContext, useState, useEffect, useRef } from "react";
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
  const heroRef = useRef<HTMLDivElement>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Once scrolled past the hero wrapper height, hide it so it doesn't stay fixed in the viewport
      const heroHeight = heroRef.current ? heroRef.current.offsetHeight : window.innerHeight;
      setIsHeroVisible(window.scrollY < heroHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const favoriteWorks = favorites.reduce((acc, fav) => {
    const study = caseStudies.find((s) => s.slug === fav.slug);
    if (study) acc.push(study);
    return acc;
  }, [] as typeof caseStudies);

  return (
    <>
      <div ref={heroRef} data-bg-color="#10162C" className="relative w-full min-h-screen min-h-[100lvh] h-[100lvh]">
        {/* Masthead */}
        <DotPattern
          as="section"
          data-bg-color="#10162C"
          className={`fixed inset-0 w-full min-h-screen min-h-[100lvh] h-[100lvh] flex items-center pt-20 px-4 md:px-5 lg:px-[7.5rem] overflow-hidden z-0 transition-opacity duration-300 ${
            isHeroVisible ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <HeroAnimatedContent />
          <ScrollDownButton targetId="featured-works" />
        </DotPattern>
      </div>

      <div className="relative z-10">
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

        <section
          id="wanna-see-more"
          data-bg-color="#10162C"
          className="relative w-full min-h-[calc(100vh-var(--header-height))] py-24 md:py-32 px-8 lg:px-32 xl:px-64 bg-[var(--color-brand-secondary-950)] text-white"
        >
          <h2 className="sr-only">Wanna see more?</h2>
          <h2 aria-hidden="true" className="mb-12 text-white">
            <BoundingBoxAnimation text="Wanna see more?" triggerOnView delay={0.2} />
          </h2>
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
