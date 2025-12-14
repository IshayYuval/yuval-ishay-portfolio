import Link from "next/link";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      {/* Masthead */}
      <section
        className="min-h-screen flex items-center pt-20 px-[7.5rem] relative overflow-hidden"
        style={{
          backgroundImage: 'url(/web-assets/hero-image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* <div className="absolute inset-0 bg-black/30" /> Overlay for readability */}
        <div className="container-custom z-10">
          <h1 className="mb-6">
            I'M YUVAL, TURNING VISIONS INTO VIBRANT VISUAL REALITIES.
          </h1>
          <p className="text-xl mb-10 max-w-2xl text-white/90">
            Graphic designer specializes in UX/UI & branding.
          </p>
          <div className="flex gap-4">
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
          <div className="flex gap-4">
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
      <Section className="border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Selected Clients</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-60">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-16 flex items-center justify-center border border-dashed rounded" style={{ borderColor: 'var(--border)' }}>
              <span className="text-xs font-medium" style={{ color: 'var(--muted)' }}>CLIENT {i + 1}</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
