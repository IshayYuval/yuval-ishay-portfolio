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
  bullets?: ProcessStepBullet[];
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
  projectUrl?: string; // optional external link
  processSteps?: ProcessStep[]; // mainly for UX/UI
  contentSections?: ZigZagSection[];
  gallery?: GalleryItem[];
  backgroundColor?: string;
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
    description: "Type design and typographic systems.",
    parentNav: "visual-communication",
  },
  {
    slug: "conceptual-design",
    title: "Conceptual Design",
    description: "Experimental and theoretical design projects.",
    parentNav: "visual-communication",
  },
  {
    slug: "photography",
    title: "Photography",
    description: "Visual storytelling through the lens.",
    parentNav: "visual-communication",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    // branding
    slug: "cheetah",
    title: "Cheetah",
    excerpt:
      "During my first year in my Visual Communication B.A, we've got an assignment to select an animal and build a comprehensive visual identity around it",
    tags: ["HIT Visual Communication BA", "Graphic Fundamentals"],
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
      },
      {
        src: "/case-studies/branding/cheetah/mockups/packages.jpg",
        alt: "Cheetah 2",
        colSpan: "half",
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
      },
      {
        src: "/case-studies/branding/cheetah/mockups/business-cards.jpg",
        alt: "Cheetah 3",
        colSpan: "half",
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
    slug: "name-the-font",
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
        title: "The Logotype",
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
    introText: "United Future Football Academy is a premier institution dedicated to cultivating young soccer talent and instilling a deep love for the game. It stands out for its comprehensive approach to player development, combining physical training, tactical knowledge, and mental resilience. The academy is committed to shaping well-rounded athletes who excel on the pitch and demonstrate integrity off it. This project is a part of my ChatGPT challenge, in which I design a comprehensive visual identity according to the briefs provided by the Chat :)",
    heroImage: "/case-studies/branding/uffa/hero.svg",
    backgroundColor: "#072131",
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
    slug: "cloudeye",
    title: "Cloudeye",
    excerpt:
      "Web platform for managing web services status (Cloudeye is not available in the worldwide web)",
    tags: ["Client Project", "SaaS"],
    collectionSlug: "branding",
    cover: "/case-studies/branding/cloudeye/page-cover.svg",
    date: "2022-5-18",
    introText: "Cloudeye is a web platform for managing the web services of an organization. It's packed with useful features like monitoring, automations, reported tickets with live  status updates, and a record of past tickets to help solve problems faster in the future. This variety of functions highlighted the need for a strong and clear brand identity.",
    heroImage: "/case-studies/branding/cloudeye/hero.svg",
  },

  // conceptual art - tarantino homage 
  {
    slug: "tarantino-homage",
    title: "Tarantino Homage",
    excerpt: "A photographic exploration of light and shadow in the city.",
    tags: ["HIT", "Visual Communication BA"],
    collectionSlug: "conceptual-design",
    date: "2025-03-22",
    introText: "Dummy intro for Tarantino Homage.",
    gallery: [
      {
        src: "/case-studies/conceptual/tarantino/img1.jpg",
        alt: "Image 1",
        colSpan: "full",
      },
    ],
  },

  // conceptual art - long distance love
  {
    slug: "long-distance-love",
    title: "Long Distance Love",
    excerpt: "A photographic exploration of light and shadow in the city.",
    tags: ["HIT", "Visual Communication BA"],
    collectionSlug: "conceptual-design",
    date: "2025-07-11",
    introText: "Dummy intro for Long Distance Love.",
  },

  // conceptual art - city activism
  {
    slug: "city-activism",
    title: "City Activism",
    excerpt: "A photographic exploration of light and shadow in the city.",
    tags: ["HIT", "Visual Communication BA"],
    collectionSlug: "conceptual-design",
    date: "2025-04-25",
    introText: "Dummy intro for City Activism.",
  },

  // photography
  {
    slug: "hunger",
    title: "Hunger",
    excerpt: "A photographic exploration of light and shadow in the city.",
    tags: ["HIT", "Visual Communication BA"],
    collectionSlug: "photography",
    date: "2025-12-29",
    introText: "Dummy intro for Hunger.",
  },
  {
    slug: "out-of-bounds",
    title: "Out of Bounds",
    excerpt: "A photographic exploration of light and shadow in the city.",
    tags: ["HIT", "Visual Communication BA"],
    collectionSlug: "photography",
    date: "2025-07-22",
    introText: "Dummy intro for Out of Bounds.",
  },

  // typography
  {
    slug: "ezer-alchemist-homage",
    title: "Ezer Alchemist Homage",
    excerpt: "A photographic exploration of light and shadow in the city.",
    tags: ["HIT", "Visual Communication BA"],
    collectionSlug: "typography",
    date: "2025-05-28",
    introText: "Dummy intro for Ezer Alchemist Homage.",
  },

  // product design
  {
    slug: "name-the-font-uxui",
    title: "Name the Font",
    cover: "/case-studies/product-design/name-the-font/page-cover.svg",
    excerpt:
      "Name the font (Hebrew: זהה את הגופן) is a game bringing the fonts you see around you to the main stage. How many of them can you recognize?",
    tags: ["Passion Project", "Typography"],
    heroImage: "/case-studies/branding/name-the-font/hero-image.svg",
    backgroundColor: "#133C66",
    projectUrl: "http://namethefont.com",
    collectionSlug: "product-design",
    date: "2025-10-31",
    introText: "During my first year studying Visual Communication, a friend from class and I discovered a shared obsession with Hebrew typography — and an ongoing debate about who was better at identifying fonts by sight. What started as a playful rivalry quickly turned into an idea for a game that could settle it once and for all. <br/> That’s how Name the Font was born — a browser-based game that challenges players to recognize Hebrew typefaces used in our daily life, under time pressure. I led the UX/UI design and front-end development using the Next.js framework, crafting a clean, competitive experience that celebrates typography through play. <br/> Wanna see for yourselves? Let's go! Grab your place at the leaderboards table!",
    processSteps: [
      { title: "Project Requirements Document", text: "We started by sitting with my friend and deciding on the needed features for the MVP version: How users are gonna interact, the basic game logic, the all-around experience, the authentication, the competitive aspects and more:" },
      { title: "User Interface", text: "The UI was designed around the brand of name the font, which we designed together. This case study is available in the branding section of my portfolio. For now, For now, here’s a glimpse of the final design:" },
    ],
    contentSections: [
      {
        image: "/case-studies/product-design/name-the-font/landing-page.svg",
        title: "Landing page with a clear call-to-play <br/><br/> Homage to the top-ranked players <br/><br/>Rotating header to show different typefaces",
        text: "",
      },
      {
        image: "/case-studies/product-design/name-the-font/table.svg",
        title: "Clean table for scanning data fast <br/><br/> Search bar for easy filtering <br/><br/>Tabs to switch between all-times leaders or weekly leaders <br/><br/>visual difference between the top-3 and the rest of the players.",
        text: "",
      },
      {
        image: "/case-studies/product-design/name-the-font/authentication.svg",
        title: "Combined sign-up and sign-in <br/><br/>Redirecting to this page, in-case a player starts a game as a guest <br/><br/>Google & Magic Link for a password-free experience",
        text: "",
      },
      {
        image: "/case-studies/product-design/name-the-font/gameplay.svg",
        title: "Clear feedback about the wrong and correct answers <br/><br/>Large image in high-quality, emphasizing the typeface characteristics",
        text: "",
      },
    ],
  },
  {
    slug: "infowork",
    title: "Infowork",
    cover: "/case-studies/product-design/infowork/page-cover.svg",
    excerpt:
      "Smart content management system I designed to organize, track, and simplify my social media work for Informat.",
    tags: ["Personal Project", "SaaS"],
    collectionSlug: "product-design",
    date: "2025-10-01",
    heroImage: "/case-studies/product-design/infowork/hero.svg",
    introText: "Informat, founded in 1994, is one of Israel’s leading IT companies, offering advanced computing solutions, infrastructure, hardware, licensing, and support services across industries. <br/> When I joined as a part-time Social Media Designer, I was responsible for creative concepts for Facebook, LinkedIn, and newsletters. The creative side was fun, but managing the work was messy. I kept losing track of how many posts I had made, when they were scheduled, and what content belonged where. Everything got buried in my inbox and in my excel sheet. What should have been an inspiring process turned into something frustrating and overwhelming. <br/> That was the trigger for Infowork – my own smart tool to manage social content.",
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
        image: "/case-studies/product/infowork/img1.jpg",
        title: "Feature 1",
        text: "Dummy text.",
      },
    ],
  },
  {
    slug: "lushay-docs",
    title: "Lushay Docs",
    excerpt: "A documentation site for learning and enhancing FPGA knowledge.",
    tags: ["Client Project", "Documentation", "Learning Platform"],
    collectionSlug: "product-design",
    date: "2024-05-22",
    cover: "/case-studies/product-design/lushay-docs/page-cover.svg",
    introText: "Dummy intro for Lushay Docs.",
    backgroundColor: "#161F40",
  },
  {
    slug: "cloudeye",
    title: "Cloudeye",
    excerpt:
      "Web platform for managing web services status (Cloudeye is not available in the worldwide web)",
    tags: ["Client Project", "SaaS"],
    collectionSlug: "product-design",
    date: "2025-10-10",
    cover: "/case-studies/product-design/cloudeye/page-cover.svg",
    introText: "Dummy intro for Cloudeye (Product).",
    backgroundColor: "#161F40",
  },
  {
    slug: "upllery",
    title: "Upllery Event Manager",
    excerpt:
      "Web management platform for Upllery events - Use your audience Instagram stories as your events content!",
    tags: ["Client Project", "SaaS"],
    collectionSlug: "product-design",
    date: "2025-12-25",
    cover: "/case-studies/product-design/upllery/page-cover.svg",
    introText: "Dummy intro for Upllery.",
    backgroundColor: "#1B1B1B",
  },
  {
    slug: "3dmylev",
    title: "3DMylev",
    excerpt: "An online business for 3D Printing designers furnitures",
    tags: ["Client Project", "E-commerce", "Shopify"],
    collectionSlug: "product-design",
    date: "2025-7-2",
    cover: "/case-studies/product-design/3dmylev/page-cover.jpg",
    introText: "Dummy intro for 3DMylev.",
    backgroundColor: "#1B1B1B",
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
