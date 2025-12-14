import Link from "next/link";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import ReviewCard from "@/components/ui/ReviewCard";
import { reviews } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      {/* Masthead */}
      <section
        className="min-h-screen flex items-center pt-20 px-8 md:px-[7.5rem] relative overflow-hidden"
        style={{
          backgroundImage: 'url(/web-assets/hero-image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* <div className="absolute inset-0 bg-black/30" /> Overlay for readability */}
        <div className="container-custom z-10">
          <h1 className="mb-1">
            I'M YUVAL, TURNING VISIONS INTO VIBRANT VISUAL REALITIES.
          </h1>
          <span className="subheader">
            Graphic designer specializes in UX/UI & branding.
          </span>
          <div className="flex gap-4 md:flex-row flex-col mt-16">
            <Button variant="primary" href="/collections/branding">
              Order Now via Fiverr
            </Button>
            <Button variant="secondary" href="/about">
              Send me an email
            </Button>
          </div>
        </div>
      </section>

      {/* About Me */}
      <Section className="flex items-center justify-center">
        <div className="gap-12 max-w-2xl">
          <h2 className="mb-4">SO WHO AM I EXACTLY?</h2>
          <p className="text-body text-lg mb-6">
            Hey there! I'm Yuval, a 26-year-old graphic designer, artist, football fan and a traveler, living my dream as a freelancer.
            While I might be young, I've been pursuing my love for the arts since I was 13, giving me a wealth of experience in building
            unique user experiences and
            creating strong connections between business owners and their clients through amazing brand identities.
          </p>
        </div>
      </Section>


      <Section className="flex items-center justify-center">
        <div className="gap-12 max-w-2xl">
          <h2 className="mb-4">VISUAL IDENTITY & PRODUCT DESIGN ARE MY TRUE PASSION.</h2>
          <p className="text-body text-lg mb-6">
            Although at first glance branding and product design seem different niches, branding and product design go hand in hand.
            Just like your logo, your user experience should appeal to the same people your brand appeals to.
            <br />
            Some will agree, and some will define me as a 'multidisciplinary' designer. Bottom line, those two are what gets me out of bed every morning.
            <br />
            So do you wanna see some of that passion visually? I've hand picked some of my case studies just for you!
          </p>
          <div className="flex gap-4 md:flex-row flex-col">
            <Button variant="secondary" href="/collections/product-design">
              Product Design Case Studies
            </Button>
            <Button variant="secondary" href="/collections/branding">
              Branding Case Studies
            </Button>
          </div>
        </div>
      </Section>

      {/* Clients */}
      <Section>
        <div className="text-center mb-12">
          <h2>a glance of my very happy clients ;)</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </Section>
    </>
  );
}
