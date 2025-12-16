import Section from "@/components/layout/Section";
import Image from "next/image";
import "./about.css";
import Button from "@/components/ui/Button/Button";

export default function AboutPage() {
    return (
        <div className="pt-[var(--header-height)]">
            <Section>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                    <Image src="/web-assets/profile-image.jpg" alt="Hero Image" width={504} height={504} />
                    <div className="max-w-3xl">
                        <h1 className="mb-8">Hey there, I'm <span className="emphasized-text">Yuval!</span></h1>
                        <p className="mb-6 max-w-xl">
                            I'm a professional product designer and logo designer working as a freelancer on Fiverr, based in Rishon Letzion, Israel
                            and I only have one mission - to solve your problems using my skills. I bring a wealth of expertise to the table in both
                            the UX/UI and logo design field, and I'm here to help.
                            <br />
                            <br />
                            Over the last 10 years I had the pleasure to craft my art and improve it
                            with every project I worked on, and I believe my path isn't much different than
                            yours - we're all trying to leverage our skills to boost our businesses.
                            <br />
                            <br />
                            A little bit on a personal note, I love lots of sports, from football to martial arts,
                            and I'm an enthusiast music fan. In addition, I took upon myself to expand my knowledge and
                            improve myself as a designer, by starting my Visual Communication BA in
                            the Holon Institute of Technology.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-12">
                    <h4 className="mb-4">Well, are you convinced? let's build something amazing together!</h4>
                    <Button variant="primary" href="https://www.fiverr.com/yuvalishay">
                        Order Now via Fiverr
                    </Button>
                </div>

            </Section>
        </div>
    );
}
