import { title } from "process";

export type Collection = {
  slug: string;
  title: string;
  description: string;
  parentNav?: "visual-communication" | null;
};

export type ZigZagSection = {
  image: string;
  title?: string;
  text: string;
  reverse?: boolean;
};

export type GalleryItem = {
  src: string;
  alt: string;
  colSpan: "full" | "half";
  vimeoSrc?: string;
  width?: number;
  height?: number;
};

export type ProcessStepBullet = string | {
  label?: string;
  labelColor?: string;
  labelWeight?: string;
  text: string;
};

export type ProcessStep = {
  title: string;
  text: string;
  bulletsTitle?: string;
  bullets?: ProcessStepBullet[];
  bulletSections?: {
    title?: string;
    bullets: ProcessStepBullet[];
  }[];
  textAfter?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  collectionSlug: string;
  cover?: string;
  date: string;
  // New fields
  introText?: string;
  heroImage?: string; // specific for Branding top section
  heroBackgroundColor?: string; // optional background color for hero section
  heroLottie?: string; // specific for Lottie hero animation
  navbarTextColor?: string; // optional override for navbar text color (e.g. "black" or hex)
  projectUrl?: string; // optional external link
  projectUrlVariant?: "primary" | "secondary";
  processSteps?: ProcessStep[]; // mainly for UX/UI
  contentSections?: ZigZagSection[];
  gallery?: GalleryItem[];
  backgroundColor?: string;
  projectUrlText?: string;
  stopMotionData?: {
    images: string[];
    duration: number;
    alt: string;
  };
  prototype?: {
    title: string;
    src: string;
  };
};

export const collections: Collection[] = [
  {
    slug: "branding",
    title: "Branding",
    description:
      "Discover my branding projects and case studies that reflect my approach and extensive work across various industries.",
    parentNav: null,
  },
  {
    slug: "product-design",
    title: "Product Design",
    description:
      "Explore my past projects and detailed case studies showcasing my product design work and broad expertise across diverse industry sectors.",
    parentNav: null,
  },
  {
    slug: "typography",
    title: "Typography",
    description: "See some amazing typography project, in a new area I fell in love with during my bachelor's visual communication studies.",
    parentNav: "visual-communication",
  },
  {
    slug: "conceptual-design",
    title: "Conceptual Design",
    description: "My thoughts and beliefs, in personal and general topics, communicating through design.",
    parentNav: "visual-communication",
  },
  {
    slug: "photography",
    title: "Photography",
    description: "My view of the world, and my view of the ideal world, through the lens.",
    parentNav: "visual-communication",
  },
];

export const caseStudies: CaseStudy[] = [
  // branding - cheetah
  {
    slug: "cheetah",
    title: "Cheetah",
    excerpt:
      "During my first year in my Visual Communication B.A, we've got an assignment to select an animal and build a comprehensive visual identity around it",
    tags: ["HIT Visual Communication BA", "Graphic Fundamentals 1", "1st Year"],
    collectionSlug: "branding",
    cover: "/case-studies/branding/cheetah/page-cover.svg",
    date: "2025-01-18",
    introText:
      "During my first year of my Visual Communication B.A, we got an exercise to research an animal of our choice, and based on that animal, to create a visual identity for an imaginary company, which could be represented in theory by the animal we chose. Since a cheetah is one of my favorite wild animals, I knew in the very first second I'll choose it.",
    heroImage: "/case-studies/branding/cheetah/hero-image.svg",
    backgroundColor: "#1D2855",
    processSteps: [
      {
        title: "",
        text: "",
        bullets: [
          {
            label: "Target Audience: ",
            labelWeight: "bold",
            labelColor: "#EFAF22",
            text: "Medium to large companies that require reliable, and fast services, in addition to individual shoppers from amazon, aliexpress etc."
          },
          {
            label: "The Mission: ",
            labelWeight: "bold",
            labelColor: "#EFAF22",
            text: "To create a logo that reflects speed and trust, 2 values which are the fundamentals of the company."
          },
          {
            label: "Creative Concept: ",
            labelWeight: "bold",
            labelColor: "#EFAF22",
            text: "Develop a visual identity by the cheetah characteristics, based on speed and trust."
          },
        ],
        textAfter: "This concept defines not only the look of the logo but also the tone and visual identity of the brand, including colors, typography, and applications across different mediums.",
      },
    ],
    contentSections: [
      {
        image: "/case-studies/branding/cheetah/brandmark.svg",
        title: "The Brandmark",
        text: "The brandmark is a cheetah, constructed using rectangular and sharp lines to emphasize speed and movement. The shape is designed with only four angles, creating a geometric and memorable form while ensuring consistency.",
      },
      {
        image: "/case-studies/branding/cheetah/typography.svg",
        title: "Typography",
        text: "Savanna is a dynamic sans serif font that pushes geometric typefaces further with expressive character variations. Based on the characteristics of the font Geom, Savanna was designed specifically for the brand, reflecting movement and speed.",
        reverse: true,
      },
      {
        image: "/case-studies/branding/cheetah/color-palette.svg",
        title: "Color Palette",
        text: "The selected color palette is based on the cheetah's colors, in addition to the blue color palette, which conveys trust.",
      },
    ],
    gallery: [
      {
        src: "/case-studies/branding/cheetah/mockups/brand-guidelines.jpg",
        alt: "Cheetah 1",
        colSpan: "half",
        width: 3000,
        height: 2250,
      },
      {
        src: "/case-studies/branding/cheetah/mockups/packages.jpg",
        alt: "Cheetah 2",
        colSpan: "half",
        width: 2339,
        height: 3307,
      },
      {
        src: "/case-studies/branding/cheetah/mockups/app.jpg",
        alt: "Cheetah 3",
        colSpan: "full",
      },
      {
        src: "/case-studies/branding/cheetah/mockups/building.jpg",
        alt: "Cheetah 3",
        colSpan: "half",
        width: 4000,
        height: 3000,
      },
      {
        src: "/case-studies/branding/cheetah/mockups/business-cards.jpg",
        alt: "Cheetah 3",
        colSpan: "half",
        width: 3307,
        height: 2339,
      },
      {
        src: "/case-studies/branding/cheetah/mockups/delivery-van.jpg",
        alt: "Cheetah 3",
        colSpan: "full",
      },
    ],
  },

  //branding - name the font
  {
    slug: "branding-namethefont",
    title: "Name the Font",
    excerpt:
      "Name the font (Hebrew: זהה את הגופן) is a game bringing the fonts you see around you to the main stage. How many of them can you recognize?",
    tags: ["Passion Project", "Gaming"],
    collectionSlug: "branding",
    cover: "/case-studies/branding/name-the-font/page-cover.svg",
    date: "2025-11-01",
    heroImage: "/case-studies/branding/name-the-font/hero-image.svg",
    introText: "During my first year studying Visual Communication, a friend from class and I discovered a shared obsession with Hebrew typography — and an ongoing debate about who was better at identifying fonts by sight. What started as a playful rivalry quickly turned into an idea for a game that could settle it once and for all. That’s how Name the Font was born — a browser-based game that challenges players to recognize Hebrew typefaces used in our daily life, under time pressure. <br/> <br/> Wanna see for yourselves? Let's go! Grab your place at the leaderboards table!",
    processSteps: [
      {
        title: "",
        text: "",
        bullets: [
          {
            label: "Target Audience: ",
            labelWeight: "bold",
            labelColor: "#FADA7A",
            text: "Typographers, graphic designers, UX/UI designers, artists and people who love to see how typography builds the world around us"
          },
          {
            label: "The Mission: ",
            labelWeight: "bold",
            labelColor: "#FADA7A",
            text: "To create a playful, yet visually pleasing brand identity that reflects the characteristics of the game."
          },
          {
            label: "Creative Concept: ",
            labelWeight: "bold",
            labelColor: "#FADA7A",
            text: "Typefaces will be the core elements of the visual identity. The logo will contain 3 different typefaces, and the whole brand will explore how different typefaces work with each other."
          },
        ],
        textAfter: "This concept defines not only the look of the logo but also the tone and visual identity of the brand, including colors, typography, and applications across different mediums.",
      },
    ],
    backgroundColor: "#133C66",
    projectUrl: "http://namethefont.com",
    contentSections: [
      {
        image: "/case-studies/branding/name-the-font/logotype.svg",
        title: "The Logotype",
        text: "The logotype is built from 3 different typefaces, in order to invoke the question of what is the font straight from the beginning. Each font is distinctively different from the other, to show the wide range of typography. by implementing different kerning, size and weight to each, we were able to make them work one with the other, and to create a single logotype which is unique, playful and harmonious.",
      },
      {
        image: "/case-studies/branding/name-the-font/brandmark.svg",
        title: "The Brandmark",
        text: "The brandmark is the first letter of the Hebrew alphabet, Alef (א) The letter is built from 3 different typefaces, each contributing his own uniqueness.",
        reverse: true,
      },
      {
        image: "/case-studies/branding/name-the-font/color-palette.svg",
        title: "Color Palette",
        text: "The selected color palette is playful, easy on the eyes and suited for a game. the Ocean hue is calm and trustworthy, and the Sand hue brings in the energy, and the playfulness.",
      },
    ],
    gallery: [
      {
        src: "/case-studies/branding/name-the-font/mockups/brand-guidelines.jpg",
        alt: "brand-guidelines",
        colSpan: "half",
      },
      {
        src: "/case-studies/branding/name-the-font/mockups/tote-bag.jpg",
        alt: "tote-bag",
        colSpan: "half",
      },
      {
        src: "/case-studies/branding/name-the-font/mockups/shirt.jpg",
        alt: "shirt",
        colSpan: "full",
      },
      {
        src: "/case-studies/branding/name-the-font/mockups/notebook-1.jpg",
        alt: "notebook-1",
        colSpan: "half",
      },
      {
        src: "/case-studies/branding/name-the-font/mockups/notebook-2.jpg",
        alt: "notebook-2",
        colSpan: "half",
      },
      {
        src: "/case-studies/branding/name-the-font/mockups/pin.jpg",
        alt: "pin",
        colSpan: "half",
      },
      {
        src: "/case-studies/branding/name-the-font/mockups/business-cards.jpg",
        alt: "business-cards",
        colSpan: "half",
      },
    ],
  },

  //branding - unique freight
  {
    slug: "unique-freight",
    title: "Unique Freight",
    excerpt:
      "Unique Freight is a freight forwarding company offering end-to-end logistics solutions with personalized service, client-focused support, and free consulting for regular clients.",
    tags: ["Client Project", "Delivery"],
    projectUrlVariant: "primary",
    // navbarTextColor: "black", // Removed temporary
    collectionSlug: "branding",
    cover: "/case-studies/branding/unique-freight/page-cover.svg",
    date: "2024-01-12",
    introText: "Unique Freight is a freight forwarding company specializing in providing end-to-end logistics solutions, including air and sea freight, customs brokerage, and tax payments. The company serves medium to large-sized businesses, offering dedicated and personalized service with a strong emphasis on client satisfaction. Their commitment to going the extra mile, alongside free consulting for regular clients, sets them apart in the industry.",
    processSteps: [
      {
        title: "",
        text: "",
        bullets: [
          {
            label: "Target Audience: ",
            labelWeight: "bold",
            labelColor: "#FF7176",
            text: "Medium to large companies that require reliable, customized freight forwarding and logistics services."
          },
          {
            label: "The Mission: ",
            labelWeight: "bold",
            labelColor: "#FF7176",
            text: "To create a logo that reflects Unique Freight’s promise of an end-to-end freighting experience tailored to each client’s needs—whether through air or sea—while embodying speed, flexibility, and exceptional service."
          },
          {
            label: "Creative Concept: ",
            labelWeight: "bold",
            labelColor: "#FF7176",
            text: "Incorporating elements of motion and fluidity to symbolize speed and flexibility, paired with a professional and trustworthy design language that conveys the company’s dedication to client satisfaction. "
          },
        ],
        textAfter: "This concept defines not only the look of the logo but also the tone and visual identity of the brand, including colors, typography, and applications across different mediums.",
      },
    ],
    heroImage: "/case-studies/branding/unique-freight/hero.svg",
    backgroundColor: "#1D2855",
    contentSections: [
      {
        image: "/case-studies/branding/unique-freight/brandmark.svg",
        title: "The Brandmark",
        text: "Using the initials of the company, U&F, is a great way to make your brand recognizable and build a strong connection with your target audience. Sharp angles and linework emphasize the commitment to speed and efficiency, while the diamond adds a touch of the company’s dedication to excellence. The intersection demonstrates the company’s ability to craft a flexible, unique experience tailored to clients’ needs, emphasizing the company’s commitment to excellent service.",
        reverse: true,
      },
      {
        image: "/case-studies/branding/unique-freight/logotype.svg",
        title: "Typography",
        text: "Hanken Grotesk is a sans serif typeface inspired by the classic grotesques, with identical features to linear grotesk, yet available for commercial use.   by modifing some letters of the font, such as the F and T, I was able to much the font to the brandmark and achieve the sense of speed.",
      },
      {
        image: "/case-studies/branding/unique-freight/color-palette.svg",
        title: "Color Palette",
        text: "The selected color palette combines deep blues and bold reds to balance trust, reliability, and authority with energy, passion, and boldness. The darker blues evoke stability, intelligence, and sophistication, reinforcing a sense of security and professionalism. In contrast, the reds introduce strength, warmth, and urgency, creating a dynamic visual presence that grabs attention while communicating confidence and vitality. Together, this palette reflects a brand identity that is both dependable and energetic, grounded yet forward-driven.",
      },
    ],
    gallery: [
      {
        src: "/case-studies/branding/unique-freight/mockups/notebook.jpg",
        alt: "brand-guidelines",
        colSpan: "half",
      },
      {
        src: "/case-studies/branding/unique-freight/mockups/binder.jpg",
        alt: "tote-bag",
        colSpan: "half",
      },
      {
        src: "/case-studies/branding/unique-freight/mockups/linkedin.jpg",
        alt: "linkedin",
        colSpan: "full",
      },
      {
        src: "/case-studies/branding/unique-freight/mockups/building.jpg",
        alt: "building",
        colSpan: "half",
      },
      {
        src: "/case-studies/branding/unique-freight/mockups/office.jpg",
        alt: "notebook-2",
        colSpan: "half",
      },
      {
        src: "/case-studies/branding/unique-freight/mockups/van.jpg",
        alt: "van",
        colSpan: "full",
      },
    ],
  },

  // branding - onyx
  {
    slug: "onyx",
    title: "Onyx",
    excerpt:
      "Onyx is a product team in a web services company, which responsible for creating the long term strategy of their company's product. ",
    tags: ["Client Project", "Software", "Digital"],
    collectionSlug: "branding",
    cover: "/case-studies/branding/onyx/page-cover.svg",
    date: "2023-11-28",
    introText: "Onyx is an in-organization team, responsible for creating the long-term strategy and working methods for their organization. Onyx is also responsible for the product of the company, as the team is built from product managers, QA's and product designers.",
    processSteps: [
      {
        title: "",
        text: "",
        bullets: [
          {
            label: "Target Audience: ",
            labelWeight: "bold",
            labelColor: "#55FF99",
            text: "Software teams within the organizations, as well as the company's clients, which are also  technically and technologically oriented."
          },
          {
            label: "The Mission: ",
            labelWeight: "bold",
            labelColor: "#55FF99",
            text: "To achieve a sleek and modern logo, symbolizing the team's commitment to growing and evolving their product while collaborating with the rest of the organization's teams."
          },
          {
            label: "Creative Concept: ",
            labelWeight: "bold",
            labelColor: "#55FF99",
            text: "Using the onyx stone to establish a technological, elegant look, while providing the stability and sense of confidence in the brand."
          },
        ],
        textAfter: "The concept will be the source of the tone of the brand, as well as the looks, the feel and the entire visual identity, including the logo, the colors, the typography and the applications of the brand.",
      },
    ],
    heroImage: "/case-studies/branding/onyx/hero.svg",
    backgroundColor: "#171918",
    contentSections: [
      {
        image: "/case-studies/branding/onyx/brandmark.svg",
        title: "The Brandmark",
        text: "Creating a visual identity inspired by the stability, elegance, and strong presence of the onyx stone. By removing two sections from the stone’s frame, the brandmark consists of two elements forming a single frame—symbolizing collaboration and teamwork. The negative space within the brandmark forms a path with two possible crossings, representing the versatility and out-of-the-box thinking essential for an excellent product team.",
        reverse: true,
      },
      {
        image: "/case-studies/branding/onyx/logotype.svg",
        title: "The Logotype",
        text: "The logotype is based on the Poppins typeface, a clean sans-serif font. Paired with our brandmark and refined through a few visual adjustments, it results in a sleek, modern logo that resonates perfectly with the team’s target audience.",
      },
      {
        image: "/case-studies/branding/onyx/color-palette.svg",
        title: "Color Palette",
        text: "The brand’s color palette is based on the dark gray of the onyx stone, complemented by a bright mint green to symbolize growth and a fresh path forward for the organization.",
        reverse: true,
      },
    ],
    gallery: [
      {
        src: "/case-studies/branding/onyx/mockups/office.webp",
        alt: "brand-guidelines",
        colSpan: "half",
      },
      {
        src: "/case-studies/branding/onyx/mockups/mugs.webp",
        alt: "tote-bag",
        colSpan: "half",
      },
      {
        src: "/case-studies/branding/onyx/mockups/card.webp",
        alt: "linkedin",
        colSpan: "full",
      },
      {
        src: "/case-studies/branding/onyx/mockups/notebook.webp",
        alt: "building",
        colSpan: "full",
      },
    ],
  },

  // branding - nouvelle
  {
    slug: "nouvelle",
    title: "Nouvelle",
    excerpt:
      "Nouvelle is an emerging patisserie specializing in high-quality baking services including desserts, bread, cakes, and pralines. ",
    tags: ["Client Project", "Bakery", "Print & Digital"],
    collectionSlug: "branding",
    cover: "/case-studies/branding/nouvelle/page-cover.svg",
    date: "2024-05-03",
    introText: "Nouvelle is an emerging patisserie specializing in high-quality baking services including desserts, bread, cakes, and pralines. The business prides itself on offering personal treatment, boutique services, and the unique ability to fulfill special requests as per customer preference.",

    processSteps: [
      {
        title: "",
        text: "",
        bullets: [
          {
            label: "Target Audience: ",
            labelWeight: "bold",
            labelColor: "#E4B397",
            text: "Individuals, wanting to up their game and eat in the top French patisseries, as well as restaurants who want to serve their guests the French-inpired dishes."
          },
          {
            label: "The Mission: ",
            labelWeight: "bold",
            labelColor: "#E4B397",
            text: "To create a visual identity which reflects Nouvelle's commitment to quality, beauty, and deliciousness, capturing the artistic character of the chef and owner. It should stand out in the competitive market and be recognizable as a symbol of unique and aesthetically pleasing desserts."
          },
          {
            label: "Creative Concept: ",
            labelWeight: "bold",
            labelColor: "#E4B397",
            text: "Using the Pastry Chef's initials, and made them look like piped cream, to emphasize the hand-made and artistic feel of the brand."
          },
        ],
        textAfter: "This concept defines not only the look of the logo but also the tone and visual identity of the brand, including colors, typography, and applications across different mediums.",
      },
    ],
    heroImage: "/case-studies/branding/nouvelle/hero.svg",
    backgroundColor: "#1B3F4C",
    gallery: [
      {
        src: "/case-studies/branding/nouvelle/mockups/patisserie.webp",
        alt: "brand-guidelines",
        colSpan: "half",
      },
      {
        src: "/case-studies/branding/nouvelle/mockups/package.webp",
        alt: "tote-bag",
        colSpan: "half",
      },
      {
        src: "/case-studies/branding/nouvelle/mockups/instagram.webp",
        alt: "linkedin",
        colSpan: "full",
      },
      {
        src: "/case-studies/branding/nouvelle/mockups/recipes-book.webp",
        alt: "building",
        colSpan: "half",
      },
      {
        src: "/case-studies/branding/nouvelle/mockups/hadash.webp",
        alt: "notebook-2",
        colSpan: "half",
      },
    ],
  },

  // branding - united future fa
  {
    slug: "united-future-fa",
    title: "United Future FA",
    excerpt:
      "United Future Football Academy is a premier institution dedicated to developing young football talent and nurture a deep love for the game.",
    tags: ["Passion Project", "Football Club"],
    collectionSlug: "branding",
    cover: "/case-studies/branding/uffa/page-cover.svg",
    date: "2024-04-03",
    backgroundColor: "#072131",
    heroImage: "/case-studies/branding/uffa/hero.svg",
    introText: "United Future Football Academy is a premier institution dedicated to cultivating young soccer talent and instilling a deep love for the game. It stands out for its comprehensive approach to player development, combining physical training, tactical knowledge, and mental resilience. The academy is committed to shaping well-rounded athletes who excel on the pitch and demonstrate integrity off it. <br/> <br/>This project is a part of my ChatGPT challenge, in which I design a comprehensive visual identity according to the briefs provided by the Chat :)",
    processSteps: [
      {
        title: "",
        text: "",
        bullets: [
          {
            label: "Target Audience: ",
            labelWeight: "bold",
            labelColor: "#EFAF22",
            text: "Young soccer enthusiasts aged 8-18 eager to develop their skills, as well as their parents seeking a reputable academy for their children. The academy also appeals to soccer coaches, local sports communities, and potential sponsors interested in supporting youth sports."
          },
          {
            label: "The Mission: ",
            labelWeight: "bold",
            labelColor: "#EFAF22",
            text: "To create a design that reflects the area of the academy in an innovative and futuristic way, which will establish trust and professionalism in the market. Although I was aiming for a futuristic look, I also wanted to design a timeless logo, a one that’s gonna become traditional over time, while unitying the community behind it."
          },
          {
            label: "Creative Concept: ",
            labelWeight: "bold",
            labelColor: "#EFAF22",
            text: "Incorporating a house and a shield to symbolize strength and a home-like feeling, paired with a design language that conveys the academy's dedication to unity, friendship and excellence both on and outside the pitch."
          },
        ],
        textAfter: "This concept defines not only the look of the logo but also the tone and visual identity of the brand, including colors, typography, and applications across different mediums.",
      },
    ],
    contentSections: [
      {
        image: "/case-studies/branding/uffa/brandmark.svg",
        title: "The Brandmark",
        text: "The logo combines the initials UFFA in an abstract way, giving it a timeless, traditional feel. The 'A' suggests a house and the 'U' a shield, symbolizing unity and community values. Three stars highlight the academy’s drive to excel, improve, and win with modern methods.",
        reverse: true,
      },
      {
        image: "/case-studies/branding/uffa/color-palette.svg",
        title: "Color Palette",
        text: "The palette was chosen to balance trust and energy. Dark navy and teal convey stability for parents and coaches, while bright blue adds youthful energy. Golden yellow highlights ambition and achievement, making the brand both approachable for players and reliable for the wider community.",
      },
      {
        image: "/case-studies/branding/uffa/pattern.svg",
        title: "The Pattern",
        text: "The brand pattern is built from the abstract shapes of the logo, repeating the house form to create a strong and recognizable visual texture. Its geometric rhythm conveys structure and unity. This pattern extends the identity beyond the logo, giving the academy a consistent and memorable presence across applications.",
        reverse: true,
      },

    ],
    gallery: [
      {
        src: "/case-studies/branding/uffa/mockups/football.webp",
        alt: "brand-guidelines",
        colSpan: "half",
      },
      {
        src: "/case-studies/branding/uffa/mockups/uniform.webp",
        alt: "tote-bag",
        colSpan: "half",
      },

      {
        src: "/case-studies/branding/uffa/mockups/shirt.webp",
        alt: "building",
        colSpan: "full",
      },
      {
        src: "/case-studies/branding/uffa/mockups/instagram.webp",
        alt: "linkedin",
        colSpan: "half",
      },
      {
        src: "/case-studies/branding/uffa/mockups/cap.webp",
        alt: "building",
        colSpan: "half",
      },
      {
        src: "/case-studies/branding/uffa/mockups/diary.webp",
        alt: "building",
        colSpan: "full",
      },
    ],
  },

  // branding - cloudeye
  {
    slug: "branding-cloudeye",
    title: "Cloudeye",
    excerpt:
      "Web platform for managing web services status (Cloudeye is not available in the worldwide web)",
    tags: ["Client Project", "SaaS"],
    collectionSlug: "branding",
    cover: "/case-studies/branding/cloudeye/page-cover.svg",
    date: "2022-5-18",
    introText: "Cloudeye is a web platform for managing the web services of an organization. It's packed with useful features like monitoring, automations, reported tickets with live  status updates, and a record of past tickets to help solve problems faster in the future. This variety of functions highlighted the need for a strong and clear brand identity.",
    heroImage: "/case-studies/branding/cloudeye/hero.svg",
    processSteps: [
      {
        title: "",
        text: "",
        bullets: [
          {
            label: "Target Audience: ",
            labelWeight: "bold",
            labelColor: "#69fff3",
            text: "The employees of the organization, IT support teams,  electronic engineers, material engineers, software developers,  and everything in between."
          },
          {
            label: "The Mission: ",
            labelWeight: "bold",
            labelColor: "#69fff3",
            text: "To create a simple brand identity that is clear and understandable, without unnecessary complications, which will also appear friendly and easy to use."
          },
          {
            label: "Creative Concept: ",
            labelWeight: "bold",
            labelColor: "#69fff3",
            text: "Using 2 elements, the security camera and the cloud, to create a smooth connection between the two. The goal was to make the visual identity straight-forward as possible, but still modern and appealing to the users."
          },
        ],
        textAfter: "This concept defines not only the look of the logo but also the tone and visual identity of the brand, including colors, typography, and applications across different mediums.",
      },
    ],
    gallery: [
      {
        src: "/case-studies/branding/cloudeye/logo-mockup.webp",
        alt: "logo-mockup",
        colSpan: "full",
      },
      {
        src: "/case-studies/branding/cloudeye/notebook-mockup.webp",
        alt: "logo-mockup",
        colSpan: "full",
      },
      {
        src: "/case-studies/branding/cloudeye/illustrations.jpg",
        alt: "illustrations",
        colSpan: "full",
      },
    ],
  },

  // conceptual art - Supporters Voice
  {
    slug: "social-campaign",
    title: "Social Campaign - Supporters Voice",
    excerpt: "My social campaign is a protest campaign called “The Supporters’ Protest.” The protest aims to unite all sports supporters against the disgraceful practice of broadcasting games in bars without sound. #משחקלארואיםמושתק #מחאתהאוהדים #תפסיקולשדראושתפסיקולשקר",
    tags: ["HIT", "Visual Communication BA", "VC", "2nd Year"],
    collectionSlug: "conceptual-design",
    date: "2026-02-04",
    introText: "In the last assignment of the VC course in my Visual Communication BA, we were asked to create a social campaign that expresses support or protest around a chosen social issue and translate it into a clear visual and verbal language across multiple formats.<br><br>For this exercise, I created a protest campaign addressing the phenomenon of broadcasting sports games in bars without sound, an experience many supporters find frustrating because audio is an essential part of watching a match.<br><br>The campaign calls on bars to stop muting games and includes three advertisements, a sticker sheet designed to be placed on bars that ruin the shared experience, and a testimonial series from supporters whose viewing moments were spoiled.",
    cover: "/case-studies/conceptual-design/social-campaign/case-study-hero.mp4",
    heroBackgroundColor: "#000000",
    heroImage: "/case-studies/conceptual-design/social-campaign/case-study-hero.mp4",
    processSteps: [
      {
        title: "The Problem",
        text: "The 2023/24 season, Champions League final. My team, Borussia Dortmund, reached the final against Real Madrid. I reserved spots for myself and two friends at our favorite bar, which said it would broadcast the match. <br/>We arrived, ordered food and beers, everything was ready for kickoff. The game started, but the sound didn’t. I asked about it, and they said they didn’t have a license to play the broadcast with audio.<br/>They ruined the biggest moment of the season for us, a moment we had been waiting for two full months, simply because they didn’t bother telling us the game would be muted. This phenomenon is far from a one-time case. Bars across the country keep broadcasting matches without sound. Not anymore.",
      },
      {
        title: "The Research",
        text: "I've commited a survey among football and basketball fans, to see if other fans are pissed about this phenomenon:",
        bullets: [
          {
            label: "95%",
            labelColor: "white",
            labelWeight: "bold",
            text: " of voters go to watch a sports match at least once a month."
          },
          {
            label: "68%",
            labelColor: "white",
            labelWeight: "bold",
            text: " of voters came across this horrific issue in a medium-high frequency."
          },
          {
            label: "74%",
            labelColor: "white",
            labelWeight: "bold",
            text: " of voters will stay at the bar, but will be pissed about it."
          },
          {
            label: "50%",
            labelColor: "white",
            labelWeight: "bold",
            text: " of voters have experienced a situation where the bar said he's broadcasting the game, but didn't mention the lack of sound issue."
          },
        ],
        textAfter: "The numbers are clear. This is annoying. Very annoying."
      },
      {
        title: "Campaign Materials",
        text: "The protest campaign includes several digital and printed materials:",
        bullets: [
          {
            label: "3 TV Commercials: ",
            labelColor: "white",
            labelWeight: "bold",
            text: "Took the sound from my game? I'll take it from yours. I created 3 commercials with iconic cinematic scenes, ones that everybody recognizes and ones that won't be the same without the sound, and I've took it away."
          },
          {
            label: "Testimonial Series: ",
            labelColor: "white",
            labelWeight: "bold",
            text: "A series of testimonials from supporters whose viewing moments were spoiled."
          },
          {
            label: "Sticker Sheet: ",
            labelColor: "white",
            labelWeight: "bold",
            text: "Found a bar/pub that destroys everyone's experience? Let's mark it and ad it to the blacklist."
          },
        ],
      }
    ],
    gallery: [
      {
        src: "", // Placeholder or thumbnail if needed, but the loop video acts as cover
        vimeoSrc: "https://player.vimeo.com/video/1164704125?",
        alt: "Long Distance Love Video",
        colSpan: "full",
      },
      {
        src: "", // Placeholder or thumbnail if needed, but the loop video acts as cover
        vimeoSrc: "https://player.vimeo.com/video/1164701933?",
        alt: "Long Distance Love Video",
        colSpan: "full",
      },
      {
        src: "", // Placeholder or thumbnail if needed, but the loop video acts as cover
        vimeoSrc: "https://player.vimeo.com/video/1164701016?",
        alt: "Long Distance Love Video",
        colSpan: "full",
      },
      {
        src: "/case-studies/conceptual-design/social-campaign/stickers.webp",
        alt: "stickers",
        colSpan: "half",
        width: 2528,
        height: 1696,
      },
      {
        src: "/case-studies/conceptual-design/social-campaign/stickers-closeup.webp",
        alt: "de-jora",
        colSpan: "half",
        width: 1080,
        height: 1350,
      },
    ],
    prototype: {
      title: "Instagram Page",
      src: "https://embed.figma.com/proto/FKruVguhZxLd0fXj7ml062/Instagram-Page?page-id=0%3A1&node-id=5-464&p=f&viewport=-304%2C249%2C0.26&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5%3A464&embed-host=share"
    }


  },
  // conceptual art - chicha
  {
    slug: "basic-food-packaging-series",
    title: "Basic Food Packaging Series",
    excerpt: "A conceptual packaging series for a basic food product, re-examining cultural, social, and political meanings through visual language rather than functional solutions.",
    tags: ["HIT", "Visual Communication BA", "2nd Year"],
    collectionSlug: "conceptual-design",
    date: "2025-12-26",
    introText: "This project explores the design of a packaging series for a basic food product — an everyday, essential item that is usually taken for granted. The starting point was an in-depth research process into the product’s cultural, historical, and social contexts, deliberately moving away from packaging as a purely functional solution.<br><br>The packaging is treated as a conceptual medium: a visual system that communicates values, ideas, and a new point of view. Throughout the process, a unified visual language was developed for the entire series, while questioning the product’s conventional associations and stretching the boundaries of how it is typically perceived.<br><br>The result is a packaging series that prioritizes idea over utility, positioning design as a critical and expressive tool rather than a purely commercial object.<br/><br/> The food product I've chose is Corn.",
    cover: "/case-studies/conceptual-design/basic-food-packaging/page-cover.webp",
    processSteps: [
      {
        title: "The Creative Process",
        text: "",
        bullets: [
          {
            label: "Research: ",
            labelWeight: "bold",
            labelColor: "white",
            text: "Using Perplexity, I've done a deep dive into the history, cultural significance, and social context of corn. From that research I've learned about the ancient alchoholic beverage called Chicha, a drink associated with the Inca Empire, rooted in the sanctity of corn and pagan culture."
          },
          {
            label: "The Mission: ",
            labelWeight: "bold",
            labelColor: "white",
            text: "To create 3 beverages collection, which visually communicates the history and cultural significance of the corn-based beverage, while connecting it to the modern alchoholic world."
          },
          {
            label: "The Bottles: ",
            labelWeight: "bold",
            labelColor: "white",
            text: "I've designed the bottles myself, using the visual features of old chicha vessels used in ancient history. then I've 3D-printed them, polished and painted."
          },
          {
            label: "The Labels: ",
            labelWeight: "bold",
            labelColor: "white",
            text: "For the labels design I've kept it clean, using only the ancient inca gods and the typography as visuals, to emphasise the significance of the gods in the culture. I've used Procreate to draw the gods, and each drink belongs to a different god."
          },
          {
            label: "Landing Page: ",
            labelWeight: "bold",
            labelColor: "white",
            text: "I've also created a landing page for the collection, in order to add realism to the project as a whole, and as another tool to expand the story. "
          }
        ],
        textAfter: "",
      },
    ],
    gallery: [
      {
        src: "/case-studies/conceptual-design/basic-food-packaging/page-cover.webp",
        alt: "page-cover",
        colSpan: "half",
        width: 2528,
        height: 1696,
      },
      {
        src: "/case-studies/conceptual-design/basic-food-packaging/de-jora.webp",
        alt: "de-jora",
        colSpan: "half",
        width: 1080,
        height: 1350,
      },
      {
        src: "/case-studies/conceptual-design/basic-food-packaging/morada.webp",
        alt: "morada",
        colSpan: "full",
        width: 2528,
        height: 1696,
      },
      {
        src: "/case-studies/conceptual-design/basic-food-packaging/yamor-aca.webp",
        alt: "yamor-aca",
        colSpan: "full",
        width: 2528,
        height: 1696,
      }
    ],
    prototype: {
      title: "Landing Page Prototype",
      src: "https://embed.figma.com/proto/t2I3v6JqCmHO2ASReYvhA0/Landing-Page?page-id=99%3A1157&node-id=104-916&p=f&viewport=100%2C324%2C0.04&scaling=scale-down-width&content-scaling=fixed&embed-host=share"
    }
  },

  // conceptual art - long distance love
  {
    slug: "long-distance-love",
    title: "Long-Distance Love",
    excerpt: "Conceptual video and print project showing me and my life partner's way for success in a long-distance relationship.",
    tags: ["HIT", "Visual Communication BA", "1st Year"],
    collectionSlug: "conceptual-design",
    date: "2025-07-11",
    cover: "/case-studies/conceptual-design/long-distance-love/page-cover.mp4",
    introText: "This is the final project of my Creative Thinking course in the HIT Visual Communication BA program. The subject of the project was love. From the very first minute we got the brief, I knew I wanted to share my unique story of my long-distance relationship with my partner. <br/> <br/> Let's approach the brainstorming and research; I noticed a lot of couples don't survive this type of a relationship, yet we do. Why is that? What are we doing differently? <br/>I continued my research and started thinking about different aspects of life in which we have to follow guidelines, or else we won't survive. that's how I got the medium to deliver my guide for long-distance relationships.",
    gallery: [
      {
        src: "", // Placeholder or thumbnail if needed, but the loop video acts as cover
        vimeoSrc: "https://player.vimeo.com/video/1153221759?badge=0&autopause=0&player_id=0&app_id=58479",
        alt: "Long Distance Love Video",
        colSpan: "full",
      },
      {
        src: "/case-studies/conceptual-design/long-distance-love/leaflet-mockup.webp",
        alt: "Long Distance Love Video",
        // The user set them to colSpan="full" in their edit, but implying they want them on the same row?
        // "if I have one image larger than the other on the same row".
        // Previously they were likely half.
        // I will assume for the sake of the "equal height" logic that they should be "half" (or dynamic width sharing a row).
        // But wait, the user set them to "full" in the previous step (Step 99).
        // "right now the height is the real heigh, but if I have one image larger than the other on the same row"
        // Use logic: if 2 items are meant to be on the same row, they share the row.
        // I should probably switch them back to "half" (or just let the Grid logic decide based on pairing).
        // The Grid logic usually relies on `colSpan` to decide if it's a standalone full row or a split row.
        // I will set them to "half" for the purpose of this test, or design the grid to group ANY consecutive "half" items.
        // Let's set them to "half" and add dims.
        colSpan: "half",
        width: 3190,
        height: 2226,
      },
      {
        src: "/case-studies/conceptual-design/long-distance-love/safety-card-mockup.webp",
        alt: "Long Distance Love Video",
        colSpan: "half",
        width: 1920,
        height: 1080,
      }
    ]
  },

  // conceptual art - tarantino homage 
  {
    slug: "tarantino-homage",
    title: "Tarantino Homage",
    excerpt: "A conceptual tribute to Quentin Tarantino, inspired by his cinematic style and his alleged fascination with feet.",
    tags: ["HIT", "Visual Communication BA", "1st Year"],
    collectionSlug: "conceptual-design",
    stopMotionData: {
      images: [
        "/case-studies/conceptual-design/tarantino/cover/cover-1.webp",
        "/case-studies/conceptual-design/tarantino/cover/cover-2.webp"
      ],
      duration: 0.8,
      alt: "Tarantino Homage Cover"
    },
    date: "2025-03-22",
    introText: "This project is a visual tribute to Quentin Tarantino, built around his quote: \"I don’t take it seriously… it’s just good direction… There’s a lot of feet in a lot of good directors’ movies.\" <br/> <br/>The goal was to translate Tarantino and his words into a clear visual idea. The concept takes his alleged foot fetish and expresses it through a collection of high-heel shoes, chosen specifically for their stronger connection to foot fetish imagery compared to sneakers or sandals.",
    gallery: [
      {
        src: "/case-studies/conceptual-design/tarantino/cover/cover-1.webp",
        alt: "Image 1",
        colSpan: "full",
      },
      {
        src: "/case-studies/conceptual-design/tarantino/cover/cover-2.webp",
        alt: "Image 2",
        colSpan: "full",
      },
      {
        src: "/case-studies/conceptual-design/tarantino/glamour/glamour-1.webp",
        alt: "Image 1",
        colSpan: "full",
      },
      {
        src: "/case-studies/conceptual-design/tarantino/glamour/glamour-2.webp",
        alt: "Image 2",
        colSpan: "full",
      },
      {
        src: "/case-studies/conceptual-design/tarantino/glamour/glamour-3.webp",
        alt: "Image 3",
        colSpan: "full",
      },
    ],
  },



  // // conceptual art - city activism
  // {
  //   slug: "city-activism",
  //   title: "City Activism",
  //   excerpt: "A video-based activist project that places wealth and hunger side by side, confronting the viewer with social gaps and personal responsibility.",
  //   tags: ["HIT", "Visual Communication BA", "1st Year"],
  //   collectionSlug: "conceptual-design",
  //   date: "2025-04-25",
  //   introText: "Dummy intro for City Activism.",
  // },

  // photography - hunger
  {
    slug: "hunger",
    title: "Hunger",
    excerpt: "A photographic essay that explores raw materials, ritual, and instinct, revealing the passion behind food through process rather than the final dish.",
    tags: ["HIT", "Visual Communication BA", "2nd Year"],
    collectionSlug: "photography",
    cover: "/case-studies/photography/hunger/page-cover.webp",
    date: "2025-12-29",
    backgroundColor: "black",
    introText: "This project is a photographic essay created as part of a food photography assignment, centered around an underground <br/> pop-up called Hunger. The work explores the figure of “the butcher,” focusing on raw materials, hands-on process, and the ritual around meat rather than the final dish. Through a dark, moody visual language, the goal was to add value for the viewer by revealing the passion, tension, and instinct behind the act of cooking.",
    gallery: [
      {
        src: "/case-studies/photography/hunger/raw-meat.webp",
        alt: "Image 1",
        colSpan: "full",
      },
      {
        src: "/case-studies/photography/hunger/whiskey.webp",
        alt: "Image 2",
        colSpan: "full",
      },
      {
        src: "/case-studies/photography/hunger/preparing-meat.webp",
        alt: "Image 3",
        colSpan: "full",
      },
      {
        src: "/case-studies/photography/hunger/butcher-burner.webp",
        alt: "Image 4",
        colSpan: "full",
      },
      {
        src: "/case-studies/photography/hunger/butcher-whiskey.webp",
        alt: "Image 5",
        colSpan: "full",
      },
      {
        src: "/case-studies/photography/hunger/wine-and-meat.webp",
        alt: "Image 6",
        colSpan: "full",
      },
      {
        src: "/case-studies/photography/hunger/dinner.webp",
        alt: "Image 7",
        colSpan: "full",
      },
      {
        src: "/case-studies/photography/hunger/hunger.webp",
        alt: "Image 7",
        colSpan: "full",
      },
    ],
  },

  // photography - out of bounds
  {
    slug: "out-of-bounds",
    title: "Out of Bounds",
    excerpt: "A portrait series that captures the human moments, imperfections, and quiet breaks hidden within the act of running.",
    tags: ["HIT", "Visual Communication BA", "1st Year"],
    collectionSlug: "photography",
    date: "2025-07-22",
    cover: "/case-studies/photography/out-of-bounds/page-cover.webp",
    introText: "This project is a portrait series created as part of a photography course, focusing on moments that break the routine of running. Instead of portraying running as a perfect, ideal action, the work highlights small mistakes, pauses, and human imperfections. <br/> <br/> The goal was to slow time and  revealing the vulnerability and humanity hidden within a repetitive act.",
    gallery: [
      {
        src: "/case-studies/photography/out-of-bounds/page-cover.webp",
        alt: "Image 1",
        colSpan: "full",
      },
      {
        src: "/case-studies/photography/out-of-bounds/first.webp",
        alt: "Image 1",
        colSpan: "full",
      },
      {
        src: "/case-studies/photography/out-of-bounds/third.webp",
        alt: "Image 2",
        colSpan: "full",
      },
      {
        src: "/case-studies/photography/out-of-bounds/fourth.webp",
        alt: "Image 3",
        colSpan: "full",
      },
      {
        src: "/case-studies/photography/out-of-bounds/fifth.webp",
        alt: "Image 4",
        colSpan: "full",
      },
      {
        src: "/case-studies/photography/out-of-bounds/sixth.webp",
        alt: "Image 5",
        colSpan: "full",
      },
      {
        src: "/case-studies/photography/out-of-bounds/seventh.webp",
        alt: "Image 6",
        colSpan: "full",
      },
    ],
  },

  // typography - liebling haus
  {
    slug: "cinemateque-magazine",
    title: "Liebling Haus Poster",
    excerpt: "An infographic poster, based on the architectual style of Liebling Haus.",
    tags: ["HIT", "Visual Communication BA", "2nd Year", "Typography Studio"],
    collectionSlug: "typography",
    date: "2025-12-23",
    heroImage: "/case-studies/typography/cinemateque/Masthead.svg",
    introText: "In this typography studio assignment, we were asked to design a paged editorial format based on a long article, using a structured grid and a typographic system to create an engaging reading experience. The goal was to translate text and imagery into a cohesive booklet that balances hierarchy, rhythm, and visual storytelling across multiple spreads. The text I selected is a cinema article from the Tel Aviv Cinematheque about the presence of the automobile in film and its function as a space that drives narrative events.",
    cover: "/case-studies/typography/cinemateque/cover-mockup.webp",
    gallery: [
      {
        src: "/case-studies/typography/cinemateque/cover-mockup.webp",
        alt: "page-cover",
        colSpan: "full",
      },
      {
        src: "/case-studies/typography/cinemateque/intro-section.webp",
        alt: "page-cover",
        colSpan: "half",
      },
      {
        src: "/case-studies/typography/cinemateque/first-section.webp",
        alt: "page-cover",
        colSpan: "half",
      },
      {
        src: "/case-studies/typography/cinemateque/second-section.webp",
        alt: "page-cover",
        colSpan: "full",
      },
      {
        src: "/case-studies/typography/cinemateque/third-section.webp",
        alt: "page-cover",
        colSpan: "full",
      },
      {
        src: "/case-studies/typography/cinemateque/fourth-section.webp",
        alt: "page-cover",
        colSpan: "full",
      },
      {
        src: "/case-studies/typography/cinemateque/fifth-section.webp",
        alt: "page-cover",
        colSpan: "half",
      },
      {
        src: "/case-studies/typography/cinemateque/outro-section.webp",
        alt: "page-cover",
        colSpan: "half",
      },
    ],
  },
  // typography - liebling haus
  {
    slug: "liebling-haus",
    title: "Liebling Haus Poster",
    excerpt: "An infographic poster, based on the architectual style of Liebling Haus.",
    tags: ["HIT", "Visual Communication BA", "2nd Year", "Typography Studio"],
    collectionSlug: "typography",
    date: "2025-12-23",
    introText: "This project focuses on designing a large-format, content-rich poster with a strong emphasis on typography, grid, and clear hierarchy. I worked with content from Beit Liebling, developing a conceptual approach that translates its design-driven values into a typographic visual language. <br/> <br/> The goal was to create a clear, readable layout that reflects the spirit and design culture the institution is built on.",
    cover: "/case-studies/typography/liebling-haus/page-cover.webp",
    gallery: [
      {
        src: "/case-studies/typography/liebling-haus/page-cover.webp",
        alt: "page-cover",
        colSpan: "full",
      },
    ],
  },

  // typography - dance tel aviv
  {
    slug: "dance-tel-aviv",
    title: "Dance Tel-Aviv",
    cover: "/case-studies/typography/dance-tel-aviv/page-cover.webp",
    excerpt: "A typographic flyer, capturing the movement and soul of the festival",
    tags: ["HIT", "Visual Communication BA", "2nd Year", "Typography Studio"],
    collectionSlug: "typography",
    date: "2025-11-20",
    introText: "This project is an event flyer designed around the idea of expressing human movement through typography, inspired by a dance-focused festival. The concept is translated through the use of the Ezer Dialogue typeface, combined with folding and a grid system that emerges from the physical format itself. Together, these elements create a dynamic layout that reflects rhythm, motion, and the body in motion.",
    projectUrl: "https://www.ezertypehouse.com/fonts/ezerdialogue",
    projectUrlText: "The Ezer Dialogue typeface",
    gallery: [
      {
        src: "/case-studies/typography/dance-tel-aviv/two-flyers.webp",
        alt: "Image 1",
        colSpan: "full",
      },
      {
        src: "/case-studies/typography/dance-tel-aviv/triangle.webp",
        alt: "Image 2",
        colSpan: "half",
      },
      {
        src: "/case-studies/typography/dance-tel-aviv/closeup-intro.webp",
        alt: "Image 2",
        colSpan: "half",
      },
      {
        src: "/case-studies/typography/dance-tel-aviv/inside.webp",
        alt: "Image 2",
        colSpan: "full",
      },
      {
        src: "/case-studies/typography/dance-tel-aviv/single.webp",
        alt: "Image 2",
        colSpan: "full",
      },
    ],
  },

  // typography - ezer alchemist homage
  {
    slug: "ezer-alchemist-homage",
    title: "Ezer Alchemist Homage",
    excerpt: "A typographic tribute to Ezer Alchemist, using its ink traps as a visual tool to teach and reveal the character of the typeface.",
    tags: ["HIT", "Visual Communication BA", "1st Year", "Typography"],
    collectionSlug: "typography",
    date: "2025-05-28",
    cover: "/case-studies/typography/alchemist-homage/page-cover.webp",
    introText: "This project is a typographic tribute poster to the Hebrew typeface Ezer Alchemist, developed through a research-driven and concept-led process. I began by studying the typeface and identified its most distinctive feature—its ink traps—which became the core visual concept of the poster. <br/> <br/> The goal was to create a clear and precise visual that adds value for the viewer by teaching something new about the typeface through design itself.",
    gallery: [
      {
        src: "/case-studies/typography/alchemist-homage/alchemist-poster.svg",
        alt: "poster",
        colSpan: "full",
      },
      {
        src: "/case-studies/typography/alchemist-homage/page-cover.webp",
        alt: "page-cover",
        colSpan: "full",
      },
      {
        src: "/case-studies/typography/alchemist-homage/zoom-in-alchemist.svg",
        alt: "poster",
        colSpan: "full",
      },
    ],
  },

  // typography - theory of relativity
  // {
  //   slug: "theory-of-relativity",
  //   title: "Theory of Relativity",
  //   excerpt: "A typographic poster, capturing the movement and soul of the festival",
  //   tags: ["HIT", "Visual Communication BA", "1st Year"],
  //   collectionSlug: "typography",
  //   date: "2025-05-28",
  //   introText: "This project is an informational leaflet built around a text from Einstein’s Theory of Relativity, which I selected from several text options. The core concept is space–time, translated into typography through layout, spacing, and structure to visually express relativity and perception. The goal was to add value for the viewer by teaching the idea through the visual language itself, not just the written content",
  // },


  // product design

  // spod
  {
    slug: "spod",
    title: "Spod",
    cover: "/case-studies/product-design/spod/page-cover.jpg",
    excerpt:
      "Spod was created to solve the podium shortage problem during presentations for visual communication students across academic institutions nationwide.",
    tags: ["HIT", "Visual Communication BA", "2nd Year", "App Design"],
    heroBackgroundColor: "#FCF0FF",
    navbarTextColor: "#36437A",
    backgroundColor: "#400047",
    projectUrl: "https://noakuterman.myportfolio.com",
    projectUrlText: "Noa Kuterman's Portfolio",
    projectUrlVariant: "secondary",
    heroLottie: "/lottie/spod/hero-case-study.json",
    collectionSlug: "product-design",
    date: "2026-02-01",
    introText: "A bit of context: at HIT, the standard for presenting our work is just as high as the standard for the work itself. The presentation is expected to be impressive and polished, something that respects and elevates the project, not something that weakens it. <br/> <br/> Across the hallways, colored podiums are present for students to use during their presentations. To secure one, students physically come to campus sometimes a week in advance, tape a note with their name and date, and pray no one takes it or that the note doesn’t fall off. Spod was designed to end this nonsense; bringing presentation prep into 2026 and giving students one less thing to worry about. <br/><br/> Spod was designed as part of a semester project in the Introduction to Interactive Design course, under the guidance of Iris Duani. I've worked on it with 2 good friends of mine and amazing designers on their own right: Noa Kuterman and <br/> Sharon Kisilevich. You're welcome to check their amazing work in their portfolios:",
    processSteps: [
      {
        title: "The Problem",
        text: "As Visual Communication students, we are expected to present our work in the best possible way, using podiums. Meaning, we need to search the building, floor by floor, a podiums that fits our concept by color shape and size, a one that isn't broken or saved by someone else. Until this moment, we written our name and phone number on a note. Did it help? Not always. There was always the fear the podium will be gone until the day of the presentation.",
      },
      {
        title: "The Research",
        text: "We've commited a deep user research to see how many of the students have the same worries as us. here are the numbers:",
        bullets: [
          {
            label: "70%",
            labelColor: "white",
            labelWeight: "bold",
            text: " of students arrive ahead of time physically to campus to check for available podiums"
          },
          {
            label: "60%",
            labelColor: "white",
            labelWeight: "bold",
            text: " of students reported running into overload and chaos during submission week due to poor organization."
          },
          {
            label: "42%",
            labelColor: "white",
            labelWeight: "bold",
            text: " of students use a podium more than five times a year."
          },
          {
            label: "90%",
            labelColor: "white",
            labelWeight: "bold",
            text: " of students rated their desire for a podium reservation app at 4 or higher out of 5, with 5 being the strongest interest."
          },
          {
            label: "40%",
            labelColor: "white",
            labelWeight: "bold",
            text: " of students signed up for the newsletter to receive project updates, join the pilot, and get notified when it launches."
          },
        ],
        textAfter: "The numbers are clear. We've found a real problem that needs solving."
      },
      {
        title: "User Interviews & Personas",
        text: "To get a deeper understanding of the problem, we conducted deep user interviews with 5 students from different departments and years. based on the interviews we created 3 personas that represent the different types of users we are designing for:",
        bulletSections: [
          {
            title: "Netanel Plank",
            bullets: [
              {
                text: "26-year-old student balancing studies, work, and commuting, constantly short on time"
              },
              {
                text: "Values strong visual presentation but is frustrated by disorder and unnecessary hassle"
              },
              {
                text: "Tends to improvise under pressure when no clear system supports him"
              },
              {
                text: "Sensitive to deadline stress and seeks certainty and control"
              },
              {
                text: "Wants to focus on creating, not on the logistics."
              }
            ]
          },
          {
            title: "Marina Milderman",
            bullets: [
              {
                text: "24-year-old student juggling studies, work, and a packed weekly schedule"
              },
              {
                text: "Highly organized and practical, plans ahead to avoid last-minute stress"
              },
              {
                text: "Treats presentation as part of the work, not an afterthought"
              },
              {
                text: "Relies on structure and clear systems to manage her time"
              },
              {
                text: "Wants a smooth process so she can stay focused on learning and creating"
              }
            ]
          }
        ]
      }
    ],
    contentSections: [
      {
        image: "/case-studies/product-design/spod/explore-page.jpg",
        title: "A single place that shows the full podium inventory, with filters so users can quickly find what they need <br/><br/> Icons that show podium material, cable hole availability, and height for fast scanning of key details <br/><br/>The Explore page is available without signup, so users can confirm what they need exists before registering",
        text: "",
      },
      {
        image: "/case-studies/product-design/spod/hit-registration.jpg",
        title: "Signup use college credentials to pull the student’s presentation schedule based on their department and year, without manual input.<br/><br/> Signup happens during the reservation flow, so the podium is saved for the specific student who booked it, and only for them.",
        text: "",
      },
      {
        image: "/case-studies/product-design/spod/home.jpg",
        title: "Home screen with one place to see all upcoming presentations<br><br>Presentations are sorted with those missing a podium first, then by the closest date<br><br>Shows how many podiums are still available for the selected presentation<br><br>For presentations without a booked podium, the app suggests suitable podiums to reduce unnecessary searching<br><br>App reminders, with an option to turn them off, about a week in advance",
        text: "",
      },
      {
        image: "/case-studies/product-design/spod/my-podiums.jpg",
        title: "One place to see all reserved podiums and locate them in the building<br><br>AirTag-based tracking for live directions on presentation day",
        text: "",
      },
      {
        image: "/case-studies/product-design/spod/qr-code.jpg",
        title: "A QR code that shows who reserved the podium and for which date, to prevent someone from taking a podium that’s already claimed.",
        text: "",
      },
      {
        image: "/case-studies/product-design/spod/custom-date.jpg",
        title: "A visual calendar indicator showing podium availability for each day, so students can understand availability without checking dates one by one.",
        text: "",
      },
    ],
  },

  // name-the-font-uxui
  {
    slug: "namethefont",
    title: "Name the Font",
    cover: "/case-studies/product-design/name-the-font/page-cover.jpg",
    excerpt:
      "Name the font (Hebrew: זהה את הגופן) is a game bringing the fonts you see around you to the main stage. How many of them can you recognize?",
    tags: ["Passion Project", "Typography", "Gaming", "Software Development"],
    heroImage: "/case-studies/branding/name-the-font/hero-image.svg",
    backgroundColor: "#133C66",
    projectUrl: "http://namethefont.com",
    projectUrlText: "Play now!",
    collectionSlug: "product-design",
    date: "2025-10-31",
    introText: "During my first year studying Visual Communication, a friend from class and I discovered a shared obsession with Hebrew typography — and an ongoing debate about who was better at identifying fonts by sight. What started as a playful rivalry quickly turned into an idea for a game that could settle it once and for all. <br/><br/> That’s how Name the Font was born — a browser-based game that challenges players to recognize Hebrew typefaces used in our daily life, under time pressure. I led the UX/UI design and front-end development using the Next.js framework, crafting a clean, competitive experience that celebrates typography through play. <br/><br/> Wanna see for yourselves? Let's go! Grab your place at the leaderboards table!",
    processSteps: [
      {
        title: "Project Requirements Document",
        text: "We started by sitting with my friend and deciding on the needed features for the MVP version: How users are gonna interact, the basic game logic, the all-around experience, the authentication, the competitive aspects and more:",
        bulletSections: [
          {
            title: "Game Logic",
            bullets: [
              {
                text: "10 questions per round, because we wanted depth, but a continuous experience to discover more fonts."
              },
              {
                text: "Time-based points, to add additional challenge to player who know a lot of fonts"
              },
              {
                text: "Motion Design using gamification principles, so the whole experience will fill alive."
              },
            ],
          },
          {
            title: "Authentication",
            bullets: [
              {
                text: "Google-based social login, to disappear the need to remember yet another password."
              },
              {
                text: "Magic-Link authentication, to cover the edge cases of those who don't have a google account."
              },
              {
                text: "Combined sign-up and sign-in, to make everything at one place."
              },
            ],
          },
          {
            title: "Leaderboards and Profile",
            bullets: [
              {
                text: "Personal profile page, with the relevant statistics about the player's performance, with weekly and all-time views."
              },
              {
                text: "Leaderboards table with points based rankings with logic to rank properly in-case of a tie."
              },
            ],
          },
        ],
        textAfter: "Once I had the PRD, I started designing the UI, not before creating user flows, and design guidelines the game needed.",
      },
      { title: "User Interface", text: "The UI was designed around the brand of name the font, which we designed together. This case study is available in the branding section of my portfolio. For now, here’s a glimpse of the final design:" },
    ],
    contentSections: [
      {
        image: "/case-studies/product-design/name-the-font/landing-page.jpg",
        title: "Landing page with a clear call-to-play <br/><br/> Homage to the top-ranked players <br/><br/>Rotating header to show different typefaces",
        text: "",
      },
      {
        image: "/case-studies/product-design/name-the-font/table.jpg",
        title: "Clean table for scanning data fast <br/><br/> Search bar for easy filtering <br/><br/>Tabs to switch between all-times leaders or weekly leaders <br/><br/>visual difference between the top-3 and the rest of the players.",
        text: "",
      },
      {
        image: "/case-studies/product-design/name-the-font/authentication.jpg",
        title: "Combined sign-up and sign-in <br/><br/>Redirecting to this page, in-case a player starts a game as a guest <br/><br/>Google & Magic Link for a password-free experience",
        text: "",
      },
      {
        image: "/case-studies/product-design/name-the-font/gameplay-1.jpg",
        title: "Clear feedback about the wrong and correct answers <br/><br/>Large image in high-quality, emphasizing the typeface characteristics",
        text: "",
      },
    ],
  },

  // infowork
  {
    slug: "infowork",
    title: "Infowork",
    cover: "/case-studies/product-design/infowork/page-cover.jpg",
    excerpt:
      "Smart content management system I designed to organize, track, and simplify my social media work for Informat.",
    tags: ["Personal Project", "SaaS"],
    collectionSlug: "product-design",
    date: "2025-10-01",
    heroImage: "/case-studies/product-design/infowork/hero.svg",
    introText: "Informat, founded in 1994, is one of Israel’s leading IT companies, offering advanced computing solutions, infrastructure, hardware, licensing, and support services across industries. <br/><br/> When I joined as a part-time Social Media Designer, I was responsible for creative concepts for Facebook, LinkedIn, and newsletters. The creative side was fun, but managing the work was messy. I kept losing track of how many posts I had made, when they were scheduled, and what content belonged where. Everything got buried in my inbox and in my excel sheet. What should have been an inspiring process turned into something frustrating and overwhelming. <br/><br/> That was the trigger for Infowork – my own smart tool to manage social content.",
    backgroundColor: "#232066",
    processSteps: [
      {
        title: "User Research",
        text: "I started by looking at my own pain points and why my Excel sheet failed me. The problems were clear:",
        bullets: ["Excel isn’t suited for large text blocks.",
          "It doesn’t offer different views, so I couldn’t easily scan information or see how new posts fit with existing ones",
          "Filters are clumsy, limited and slow to apply.",
          "Everything had to be done manually, with no real automation.",
          "Had no easy way to track my incomes from month to month."],
        textAfter: "Once I had the problem outlined, I wrote a PRD that defined the features, database structure, user flows, and design guidelines the system needed.",
      },
      {
        title: "User Interface",
        text: "Since I am the target audience, I designed the UI around my own preferences. I chose purple as the primary color, paired with a simple grayscale palette. The goal was clarity and ease of use, with no unnecessary noise – just a smooth, elegant interface that makes managing content simple. <br/> Here’s a glimpse of the final design.",
      },
    ],
    contentSections: [
      {
        image: "/case-studies/product-design/infowork/overview-1.png",
        title: "Quick view of my work this month <br/><br/> Notifications if something needs to be uploaded today<br/><br/>One-click export of monthly work",
        text: "",
      },
      {
        image: "/case-studies/product-design/infowork/table.png",
        title: "Clean table for scanning data fast<br/><br/>Tags by type and status for quick filtering<br/><br/>Tabs to switch between all work or just this month<br/><br/>Highlighted cost column to easily track incomes",
        text: "",
      },
      {
        image: "/case-studies/product-design/infowork/form.png",
        title: "Custom date-picker that shows when other posts are scheduled<br/><br/>Automatic cost calculation",
        text: "",
      },
      {
        image: "/case-studies/product-design/infowork/details.png",
        title: "Detailed view with all relevant info<br/><br/>Dedicated content area with “copy to clipboard” buttons",
        text: "",
      },
      {
        image: "/case-studies/product-design/infowork/statistics.png",
        title: "Progress overview with graphs<br/><br/>Filters to see data by time period<br/><br/>Income graphs with quick PDF export for invoices",
        text: "",
      },
      {
        image: "/case-studies/product-design/infowork/calendar.png",
        title: "Calendar showing post/mail upload dates<br/><br/>Expandable navigation for fast access without endless scrolling",
        text: "",
      },
    ],
  },

  // lushay-docs
  {
    slug: "lushay-docs",
    title: "Lushay Docs",
    excerpt: "A documentation site for learning and enhancing FPGA knowledge.",
    tags: ["Client Project", "Documentation", "Learning Platform"],
    collectionSlug: "product-design",
    date: "2024-05-22",
    cover: "/case-studies/product-design/lushay-docs/page-cover.svg",
    backgroundColor: "#1A254D",
    heroImage: "/case-studies/product-design/lushay-docs/hero.svg",
    introText: "Lushay Labs is a company specializing in electrical engineering, focusing on creating educational content in the FPGA domain. For this project, I crafted a new user experience for their website, Lushay Docs. This site offers comprehensive class documentation for all built-in FPGA primitives.",
    processSteps: [
      {
        title: "The Goals:",
        text: "",
        bullets: [
          "Create a clean and clutter-free UI, giving the best learning experience possible.",
          "Maintain the company's existing brand and engage with the company's clients in new areas",
          "Show the company's knowledge and professionalism in the educational world",],
        textAfter: "",
      },
      {
        title: "User Interface",
        text: "The UI design prioritizes clarity and intent, using a prominent call to action and a smart navigator to guide users seamlessly toward the right collection or lesson. A distraction-free, high-contrast interface keeps the focus on essential content, while custom brand icons and subtle storytelling create a personal connection.",
      },
    ],
    contentSections: [
      {
        image: "/case-studies/product-design/lushay-docs/landing-page.jpg",
        title: "Clean landing page with flat illustration, to show professionalism and playfulness.<br/><br/> A prominent call to action directs clients to the desired collection.<br/><br/>Custom brand icons and a glimpse of the owner's story create a client connection.",
        text: "",
      },
      {
        image: "/case-studies/product-design/lushay-docs/documentation.jpg",
        title: "Distraction-free interface with high contrast to ensure focus on what matters.<br/><br/>A smart navigator to guide you to the perfect lesson.​​​​​​​",
        text: "",
      },
      {
        image: "/case-studies/product-design/lushay-docs/responsiveness.jpg",
        title: "Mobile & tablet support for learning anywhere, anytime.​​​​​​​",
        text: "",
      },
    ],
  },

  // cloudeye
  // {
  //   slug: "product-design-cloudeye",
  //   title: "Cloudeye",
  //   excerpt:
  //     "Web platform for managing web services status (Cloudeye is not available in the worldwide web)",
  //   tags: ["Client Project", "SaaS"],
  //   collectionSlug: "product-design",
  //   date: "2025-10-10",
  //   cover: "/case-studies/product-design/cloudeye/page-cover.svg",
  //   heroImage: "/case-studies/product-design/cloudeye/hero.svg",
  //   introText: "Cloudeye is a platform responsible for managing web services. Given its extensive capabilities, creating a smooth user experience and a clutter-free, appealing, and friendly user interface was essential.​​​​​​​<br/><br/>Since the product is proprietary to a private company, I cannot explain every detail of the UX research I conducted. However, my approach remained consistent, which is vital for such a significant platform:",
  //   backgroundColor: "#161F40",
  //   processSteps: [
  //     {
  //       title: "",
  //       text: "",
  //       bullets: [
  //         {
  //           label: "User Research: ",
  //           labelWeight: "bold",
  //           labelColor: "#69fff3",
  //           text: "Initially, I aimed to interview both users and clients to understand why the platform was necessary. I proceeded to identify what was lacking and pinpoint the users' pain points."
  //         },
  //         {
  //           label: "User Personas & Wireframes: ",
  //           labelWeight: "bold",
  //           labelColor: "#69fff3",
  //           text: "Establishing user personas was crucial to keep the pain points organized and focused, given the large number of users with overlapping issues. Although wireframes are not always necessary and can be time-consuming, I found them to be particularly beneficial in providing extra clarity for the clients during presentations, which is especially important for a large platform."
  //         },
  //         {
  //           label: "User Interface: ",
  //           labelWeight: "bold",
  //           labelColor: "#69fff3",
  //           text: "I chose a dark theme based on user needs and designed the interface to be clean and organized, ensuring every piece of information has its proper place. "
  //         },
  //       ],
  //       textAfter: "Here's a glimpse of the beautiful, and elegant UI.",
  //     },
  //   ],
  //   gallery: [
  //     {
  //       src: "/case-studies/product-design/cloudeye/ui.webp",
  //       alt: "UI",
  //       colSpan: "full",
  //     },
  //   ],

  // },

  // upllery
  {
    slug: "upllery",
    title: "Upllery Event Manager",
    excerpt:
      "Web management platform for Upllery events - Use your audience Instagram stories as your events content!",
    tags: ["Client Project", "SaaS"],
    collectionSlug: "product-design",
    date: "2021-12-25",
    cover: "/case-studies/product-design/upllery/page-cover.jpg",
    heroImage: "/case-studies/product-design/upllery/hero.svg",
    introText: "Upllery boosts brand engagement and exposure across social media, transforming fans' posts into promotional content for wider reach. My objective was to design Upllery's management platform for real-time interaction with event attendees.",
    backgroundColor: "#1B1B1B",
    processSteps: [
      {
        title: "The Goals:",
        text: "",
        bullets: [
          "Providing an overview of all scheduled events.",
          "Enabling selection and analysis of engagement data for specific events.",
          "Creating a filter for inappropriate content in Instagram stories displayed on event screens.",
          "Ensuring proper display of Instagram stories on landscape screens.​​​​​​​"],
        textAfter: "",
      },
    ],
    contentSections: [
      {
        image: "/case-studies/product-design/upllery/event-dashboard.jpg",
        title: "Clean dashboard to quickly the events performance and engagement data.  <br/><br/> 2 action btns to quickly start an event.<br/><br/>Branded UI to create a connection of Upllery employees to the product.",
        text: "",
      },
      {
        image: "/case-studies/product-design/upllery/events-table.jpg",
        title: "Sortable table to show all events according to the needed order.<br/><br/> CTA button to quickly creare a new one.",
        text: "",
      },
      {
        image: "/case-studies/product-design/upllery/stories-filter.webp",
        title: "An overview of all pending stories for a quick scan.<br/><br/>Pagination to avoid cognitive load by placing too much stories at once.",
        text: "",
      },
      {
        image: "/case-studies/product-design/upllery/stories-lightbox.jpg",
        title: "Dedicated lightbox to avoid visual load while approving stories.<br/><br/> Navigation buttons to approve multiple stories quickly without leaving the lightbox.",
        text: "",
      },
    ],
  },

  // 3dmylev
  {
    slug: "3dmylev",
    title: "3DMylev",
    excerpt: "An online business for 3D Printing designers furnitures",
    tags: ["Client Project", "E-commerce", "Shopify"],
    collectionSlug: "product-design",
    date: "2024-7-2",
    cover: "/case-studies/product-design/3dmylev/page-cover.jpg",
    heroImage: "/case-studies/product-design/3dmylev/hero.svg",
    introText: "3D Mylev is a company specializes in 3D printing, with a huge passion for arts. In this design, I’ve tried to create a smooth user experience for their online shop, which capturing the essence of 3D Mylev - creating amazing art while changing the public’s point of view about Autism through design and art.",
    backgroundColor: "#5C0009",
    processSteps: [
      {
        title: "The Challenges:",
        text: "",
        bullets: [
          "Create a smooth and clutter-free UI, giving the owner's products the stage to shine.",
          "Increase the business's income with each purchase a client makes.",
          "Generate more return clients by improving the overall user experience.",],
        textAfter: "",
      },
      {
        title: "User Interface",
        text: "The UI approach emphasizes a refined balance between luxury and approachability through generous whitespace and a clean visual language. Large product cards, minimalistic buttons, and a clear call to action keep attention on the products, while smart filtering, sorting, and navigation tools help users find exactly what they’re looking for. Subtle brand storytelling and a “you may also like” section near checkout strengthen emotional connection and optimize purchase value.",
      },
    ],
    contentSections: [
      {
        image: "/case-studies/product-design/3dmylev/landing.jpg",
        title: "A wide use of whitespace to ensure a luxury, yet friendly and clean UI.<br/><br/> A prominent call to action directs clients to the desired collection.<br/><br/>Custom brand icons and a glimpse of the owner's story create a client connection.",
        text: "",
      },
      {
        image: "/case-studies/product-design/3dmylev/shop.jpg",
        title: "Large product cards and minimalistic buttons highlight the products and ensure they have the focus.​​​​​​​ <br/><br/>Filter and sorting tools, along with pagination and collection tabs, ensure users find exactly what they want​​​​​​​.",
        text: "",
      },
      {
        image: "/case-studies/product-design/3dmylev/you-may-also-like.jpg",
        title: "A \"you may also like\" section before checkout maximizes revenue per purchase",
        text: "",
      },
      {
        image: "/case-studies/product-design/3dmylev/product-page.jpg",
        title: "Added information about current sells, to maximize business revenue. <br/><br/> Information about how many items are left in stock, to encourage clients to buy them before they run out.",
        text: "",
      },
    ],
  },
];

export type Review = {
  id: string;
  clientName: string;
  companyName: string;
  image: string;
  reviewMessage: string;
};

export const reviews: Review[] = [
  {
    id: "1",
    clientName: "Valeria",
    companyName: "Onyx",
    image: "/reviews/onyx.svg",
    reviewMessage:
      "Yuval is a true professional who knows his craft and executes it perfectly. He chose the exact colors and shapes that fit, providing a thorough and detailed explanation behind every element of the logo. The result is an impressive, professional, and precise logo, and the experience throughout the process was both pleasant and highly professional. Highly recommended!",
  },
  {
    id: "2",
    clientName: "Guy Hadash",
    companyName: "Nouvelle",
    image: "/reviews/nouvelle.svg",
    reviewMessage: "Simply Amazing!",
  },
  {
    id: "3",
    clientName: "Giorgi",
    companyName: "Unique Freight",
    image: "/reviews/unique-freight.svg",
    reviewMessage:
      "Yuval did an amazing job with meticulous attention to detail! In the end, we received an incredible product that met all the requirements of our company! I highly recommend Yuval's services to anyone looking for a personal touch and top-level professionalism!",
  },
  {
    id: "4",
    clientName: "Avi",
    companyName: "Yuroneti",
    image: "/reviews/yuroneti.svg",
    reviewMessage:
      "Yuval gave me the feeling I made the right choice. He's very professional and creative, which is very important in design. He has a high sense of service. Many THX Yuval!",
  },
  {
    id: "5",
    clientName: "Yehiel",
    companyName: "3D Mylev",
    image: "/reviews/3dmylev.svg",
    reviewMessage:
      "The guy knows how to work. And knows what he's doing He seems to have years of experience and the Work was above the expected",
  },
  {
    id: "6",
    clientName: "Tom Wilson",
    companyName: "Lushay Docs",
    image: "/reviews/lushay-docs.svg",
    reviewMessage:
      "Delivered an amazing design and a great experience working together, above and beyond expectations, and would love to work together again in the future!",
  },
];
