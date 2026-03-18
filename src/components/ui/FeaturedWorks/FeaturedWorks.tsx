import { caseStudies } from "@/data/portfolio";
import VerticalCarousel from "./VerticalCarousel";

export default function FeaturedWorks() {
    const favoriteWorks = caseStudies.filter((study) => study.favorite);

    if (favoriteWorks.length === 0) {
        return null;
    }

    return (
        <div className="w-full h-full relative">
            <VerticalCarousel caseStudies={favoriteWorks} />
        </div>
    );
}
