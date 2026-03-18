"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button/Button";
import ReviewCard from "@/components/ui/ReviewCard/ReviewCard";
import ScrollDownButton from "@/components/ui/ScrollDownButton/ScrollDownButton";
import HeroAnimatedContent from "@/components/ui/HeroAnimatedContent/HeroAnimatedContent";
import ScrollToTop from "@/components/ui/ScrollToTop/ScrollToTop";
import FeaturedWorks from "@/components/ui/FeaturedWorks/FeaturedWorks";
import { reviews } from "@/data/portfolio";
import Image from "next/image";

export default function Home() {
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
        <section id="featured-works" className="w-full h-screen flex flex-col pt-8 sm:pt-16 pb-12 overflow-hidden bg-[var(--color-brand-secondary-950)]">
          <div className="px-8 lg:px-32 xl:px-64 flex-1 flex flex-col min-h-0">
            <div className="w-full flex justify-start md:justify-center text-center shrink-0">
              <h2 className="mb-6 lg:mb-12">My favorite projects</h2>
            </div>
            <div className="flex-1 w-full min-h-0 overflow-hidden relative">
              <FeaturedWorks />
            </div>
          </div>
        </section>

        {/* About Me */}
        <Section id="about-me" className="flex items-center justify-center min-h-[calc(100vh-var(--header-height))]">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <Image src="/web-assets/profile-picture.webp" height={600} width={600} unoptimized className="rounded-[var(--radius-lg)] w-full h-auto object-cover" alt="Yuval's Profile Picture" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-start w-full md:w-1/2"
            >
              <div className="max-w-xl">
                <h2 className="mb-4">SO WHO AM I EXACTLY?</h2>
                <p className="text-body mb-6">
                  I'm Yuval, a multidisciplinary designer with an extensive background in UX design, branding, and conceptual storytelling.
                  I bridge the gap between visual identity, product design, and functioning reality. Using deep conceptual storytelling and AI-driven frameworks, I don't just design digital experiences I actually build them.
                </p>
              </div>
              <Button variant="secondary" href="/about">
                Cool! Tell me more
              </Button>
            </motion.div>
          </div>
        </Section>

        {/* Clients */}
        <Section>
          <div className="text-left md:text-center mb-12">
            <h2>Some of my very happy clients ;)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </Section>
      </div>
      <ScrollToTop />
    </>
  );
}
