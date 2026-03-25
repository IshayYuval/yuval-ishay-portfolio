import { caseStudies } from "@/data/portfolio";
import HorizontalScroll from "./HorizontalScroll";

export default function FeaturedWorks() {
    const favoriteWorks = caseStudies
        .filter((study) => study.favorite)
        .sort((a, b) => (a.appearanceOrder ?? 99) - (b.appearanceOrder ?? 99));

    if (favoriteWorks.length === 0) {
        return null;
    }

    return (
        <div className="w-full h-full relative">
            <HorizontalScroll caseStudies={favoriteWorks} />
        </div>
    );
}
