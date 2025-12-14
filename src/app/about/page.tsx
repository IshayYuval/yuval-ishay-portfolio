import Section from "@/components/layout/Section";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="pt-[var(--header-height)]">
            <Section>
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <Image src="/web-assets/profile-image.jpg" alt="Hero Image" width={600} height={600} />
                    <div className="max-w-3xl mx-auto">
                        <h1 className="h1 mb-8">Hey there, I'm Yuval!</h1>
                        <div className="text-body text-lg">
                            <p className="mb-6">
                                I'm a professional product designer and logo designer working as a freelancer on Fiverr, based in Rishon Letzion, Israel
                                and I only have one mission - to solve your problems using my skills. I bring a wealth of expertise to the table in both
                                the UX/UI and logo design field, and I'm here to help.
                                Over the last 10 years I had the pleasure to craft my art and improve it
                                with every project I worked on, and I believe my path isn't much different than
                                yours - we're all trying to leverage our skills to boost our businesses.
                                A little bit on a personal note, I love lots of sports, from football to martial arts,
                                and I'm an enthusiast music fan. In addition, I took upon myself to expand my knowledge and
                                improve myself as a designer, by starting my Visual Communication BA in
                                the Holon Institute of Technology.
                            </p>
                        </div>
                    </div>
                </div>

            </Section>
        </div>
    );
}
