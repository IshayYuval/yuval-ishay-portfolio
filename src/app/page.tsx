"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button/Button";
import ReviewCard from "@/components/ui/ReviewCard/ReviewCard";
import ScrollDownButton from "@/components/ui/ScrollDownButton/ScrollDownButton";
import HeroAnimatedContent from "@/components/ui/HeroAnimatedContent/HeroAnimatedContent";
import ScrollToTop from "@/components/ui/ScrollToTop/ScrollToTop";
import { reviews } from "@/data/portfolio";

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
          <ScrollDownButton targetId="about-me" />
        </section>
      </div>

      <div className="relative z-10 bg-[var(--color-brand-secondary-900)]">
        {/* About Me */}
        <Section id="about-me" className="flex items-center justify-center min-h-[calc(100vh-var(--header-height))] md:min-h-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start w-full"
          >
            <div className="gap-12 max-w-2xl">
              <h2 className="mb-4">SO WHO AM I EXACTLY?</h2>
              <p className="text-body mb-6">
                Hey! I'm Yuval, UX and brand designer, building products and experiences with concept-driven design and AI-driven software development.
                I started designing at 13, and over the years I've grown into building digital products, brands, and experiences that connect people, technology, and business.
                Outside of work I'm a football fan and a traveler, love exploring the world and trying new things.
              </p>
            </div>
            <Button variant="secondary" href="/about">
              More about my story
            </Button>
          </motion.div>
        </Section>

        {/* Me as a designer */}
        <Section className="flex items-center justify-center min-h-[calc(100vh-var(--header-height))] md:min-h-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start w-full"
          >
            <div className="gap-12 max-w-2xl">
              <h2 className="mb-4">VISUAL IDENTITY & PRODUCT DESIGN ARE MY TRUE PASSION.</h2>
              <p className="text-body text-lg mb-6">
                Although at first glance branding and product design seem different niches, branding and product design go hand in hand.
                Just like your logo, your user experience should appeal to the same people your brand appeals to.
                In the world of AI, I took my abilities to the next level, by shipping my designs to the real-world, mastering tools like Base44, Antigravity, and more.
                <br />
                <br />
                That's right, I'm a one man show, and that's what gets me out of bed every morning.
                <br />
                Do you wanna see that passion visually? I've hand picked some of my case studies just for you!
              </p>
              <div className="flex gap-4 sm:flex-row flex-col">
                <Button variant="secondary" href="/product-design">
                  Product Design Case Studies
                </Button>
                <Button variant="secondary" href="/branding">
                  Branding Case Studies
                </Button>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* Clients */}
        <Section>
          <div className="text-center mb-12">
            <h2>a glance of my very happy clients ;)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </Section>
        <ScrollToTop />
      </div>
    </>
  );
}
