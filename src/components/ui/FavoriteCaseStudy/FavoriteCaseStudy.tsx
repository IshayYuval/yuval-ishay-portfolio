import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import { CaseStudy, favorites } from "@/data/portfolio";
import styles from "./FavoriteCaseStudy.module.css";

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

  return (
    <section
      className="w-full pt-0 pb-[3rem] md:py-[6rem] min-h-[calc(100vh-var(--header-height))] flex items-center overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 xl:gap-24 items-center ">

        {/* COLUMN 1: Text Container */}
        <div className="order-2 md:order-1 flex flex-col justify-center px-8 md:pr-0 md:pl-8 lg:pl-32 xl:pl-64">
          <h3
            className={`${styles.title} text-4xl md:text-5xl lg:text-6xl mb-3`}
            style={headingColor ? { color: headingColor } : undefined}
          >
            {work.title}
          </h3>
          <p
            className="text-body-large mb-10"
            style={textColor ? { color: textColor } : undefined}
          >
            {work.excerpt}
          </p>
          <div className="flex gap-2 md:gap-4 w-full md:flex-wrap flex-nowrap">
            <Button className="min-w-[180px] w-full md:w-auto" variant="primary" theme={favoriteConfig?.buttonTheme || "light"} href={`/${work.slug}`}>
              Full Case Study
            </Button>
            <Button className="min-w-[180px] w-full md:w-auto" variant="secondary" theme={favoriteConfig?.buttonTheme || "light"} href={`/${work.collectionSlug}`}>
              {collectionTitle} Projects
            </Button>
          </div>
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
