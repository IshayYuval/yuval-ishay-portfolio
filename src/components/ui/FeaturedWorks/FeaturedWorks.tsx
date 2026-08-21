import { caseStudies, favorites } from "@/data/portfolio";
import HorizontalScroll from "./HorizontalScroll";

export default function FeaturedWorks() {
    const favoriteWorks = favorites.reduce((acc, fav) => {
        const study = caseStudies.find((s) => s.slug === fav.slug);
        if (study) acc.push(study);
        return acc;
    }, [] as typeof caseStudies);

    if (favoriteWorks.length === 0) {
        return null;
    }

    return (
        <div className="w-full h-full relative">
            <HorizontalScroll caseStudies={favoriteWorks} />
        </div>
    );
}
