import { CaseStudy } from "../types";
import { brandingCaseStudies } from "./branding";
import { videoInstallationsCaseStudies } from "./video-installations";
import { packagingDesignCaseStudies } from "./packaging-design";
import { photographyCaseStudies } from "./photography";
import { editorialAndPrintCaseStudies } from "./editorial-and-print";
import { productDesignCaseStudies } from "./product-design";

/**
 * All case studies combined across categories.
 * The order in this array matches the original portfolio sequence.
 */
export const caseStudies: CaseStudy[] = [
  ...brandingCaseStudies,
  ...videoInstallationsCaseStudies,
  ...packagingDesignCaseStudies,
  ...photographyCaseStudies,
  ...editorialAndPrintCaseStudies,
  ...productDesignCaseStudies,
];

// Re-export individual category arrays for direct targeted imports
export {
  brandingCaseStudies,
  videoInstallationsCaseStudies,
  packagingDesignCaseStudies,
  photographyCaseStudies,
  editorialAndPrintCaseStudies,
  productDesignCaseStudies,
};
