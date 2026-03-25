import Link from "next/link";
import { Collection } from "@/data/portfolio";
import styles from "./CollectionCard.module.css";

interface CollectionCardProps {
  collection: Collection;
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link href={`/${collection.slug}`} className="block group h-full">
      <div className={`${styles.container} h-full p-8 md:p-10 transition-all duration-300 group-hover:bg-[var(--color-brand-secondary-800)] group-hover:border-[var(--color-brand-primary)] group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex flex-col`}>
        <h4 className="mb-2 group-hover:text-[var(--color-brand-primary)] transition-colors">
          {collection.title}
        </h4>
        <p className="text-body opacity-80 text-white leading-relaxed">
          {collection.description}
        </p>
      </div>
    </Link>
  );
}
