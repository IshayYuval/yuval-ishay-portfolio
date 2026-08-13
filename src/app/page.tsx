"use client";
import { motion, Variants } from "framer-motion";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button/Button";
import ReviewCard from "@/components/ui/ReviewCard/ReviewCard";
import ScrollDownButton from "@/components/ui/ScrollDownButton/ScrollDownButton";
import HeroAnimatedContent from "@/components/ui/HeroAnimatedContent/HeroAnimatedContent";
import ScrollToTop from "@/components/ui/ScrollToTop/ScrollToTop";
import { caseStudies, collections, favorites } from "@/data/portfolio";
import CollectionCard from "@/components/ui/CollectionCard/CollectionCard";
import FavoriteCaseStudy from "@/components/ui/FavoriteCaseStudy/FavoriteCaseStudy";
import Image from "next/image";
import TypewriterWordReplace from "@/components/ui/TypewriterWordReplace/TypewriterWordReplace";
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
  const favoriteWorks = favorites
    .sort((a, b) => a.appearanceOrder - b.appearanceOrder)
    .reduce((acc, fav) => {
      const study = caseStudies.find(s => s.slug === fav.slug);
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
            backgroundImage: 'url(/web-assets/hero-image.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <HeroAnimatedContent />
          <ScrollDownButton targetId="featured-works" />
        </section>
      </div>

      <div className="relative z-10 bg-[var(--color-brand-secondary-950)]">
        {/* Featured Works */}
        <section id="featured-works" className="relative w-full">
          {/* Absolute Header Container */}
          {/* <div className="absolute top-0 left-0 w-full z-20 pointer-events-none">
            <div className="w-full flex flex-col pt-7 pb-4 md:pt-14 md:pb-6 px-6 lg:px-32 xl:px-46">
              <h2 className="m-0 pt-4">
                <TypewriterWordReplace
                  baseText="My favorite "
                  words={["projects", "exhibitions", "products", "editorials"]}
                  delay={0}
                />
              </h2>
            </div>
          </div> */}

          {/* Content */}
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

        {/* Wanna see more? */}
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

        {/* Clients */}
        {/* <Section>
          <div className="text-left mb-12">
            <h2>Some of my very happy clients ;)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </Section> */}
      </div>
      <ScrollToTop />
    </>
  );
}
