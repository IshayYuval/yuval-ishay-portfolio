import { CaseStudy } from "../types";

export const productDesignCaseStudies: CaseStudy[] = [

  // notch
  {
    slug: "notch",
    title: "Notch",
    cover: "/case-studies/product-design/notch/page-cover.webp",
    excerpt:
      "Notch is a fashionable smart medical patch that connects to your phone, monitors allergic reactions, and protects you when every second matters.",
    tags: [
      "App Design",
      "Landing Page Design",
      "Packaging Design",
      "Wearable Patch",
      "Branding"
    ],
    heroBackgroundColor: "#FDF9EF",
    navbarTextColor: "#AD857A",
    backgroundColor: "#4D3A35",
    projectUrl: "https://noakuterman.myportfolio.com",
    projectUrlText: "Noa's Portfolio",
    projectUrlVariant: "secondary",
    heroImage: "/case-studies/product-design/notch/hero-video.mp4",
    collectionSlug: "product-design",
    date: "2026-07-01",
    introText:
      "Notch is a smart wearable patch designed for people with severe allergies. It monitors vital signs to detect an allergic reaction and can automatically inject epinephrine when needed. The connected app also lets users trigger an injection manually and alert family members in an emergency. <br/>Notch was designed as the final project for the Designing Interactive Products course, as a collaborative effort with my friend and amazing designer in her own right, Noa Kuterman.",
    processSteps: [
      {
        title: "The Problem",
        text: "For people with severe allergies, staying safe still depends on carrying an EpiPen at all times — a bulky, visible device that can be inconvenient and socially uncomfortable. At the same time, allergic reactions can be difficult to identify with certainty, making the decision to use it even more complicated.",
      },
      {
        title: "The Research",
        text: "We conducted extensive research with people living with allergies to better understand their everyday challenges.",
        bullets: [
          {
            label: "100%",
            labelColor: "white",
            labelWeight: "bold",
            text: " of respondents have experienced a severe allergic reaction.",
          },
          {
            label: "54%",
            labelColor: "white",
            labelWeight: "bold",
            text: " have not carried an EpiPen when they were supposed to.",
          },
          {
            label: "23%",
            labelColor: "white",
            labelWeight: "bold",
            text: " are confident they could use an EpiPen correctly in an emergency.",
          },
          {
            label: "77%",
            labelColor: "white",
            labelWeight: "bold",
            text: " try to determine whether they are actually experiencing an allergic reaction.",
          },
          {
            label: "70%",
            labelColor: "white",
            labelWeight: "bold",
            text: " take more than 10 seconds to access their EpiPen.",
          },
          {
            label: "69%",
            labelColor: "white",
            labelWeight: "bold",
            text: " are concerned they may not be able to respond in time during an allergic emergency.",
          },
        ],
      },
    ],

    contentSections: [
      {
        image: "/case-studies/product-design/notch/home-page.jpg",
        title:
          "A simple dashboard that helps users understand whether they’re having an allergic reaction.",
        text: "",
      },
      {
        image: "/case-studies/product-design/notch/anaphylaxis-detected.jpg",
        title:
          "Using iOS Critical Alerts to ensure an anaphylactic reaction is never missed.<br><br> Slide to Inject button makes sure the user doesn't inject accidentally. <br><br>First responders are automatically alerted as soon as the user injects.",
        text: "",
      },
      {
        image: "/case-studies/product-design/notch/tutorial-flow.jpg",
        title:
          "Illustrated guidance showing users how and where to place the patch.",
        text: "",
      },
      {
        image: "/case-studies/product-design/notch/my-patch.jpg",
        title:
          "Signup use college credentials to pull the student’s presentation schedule based on their department and year, without manual input.<br/><br/> Signup happens during the reservation flow, so the podium is saved for the specific student who booked it, and only for them.",
        text: "",
      },
      {
        image: "/case-studies/product-design/notch/nfc-connection.jpg",
        title:
          "Simply bring the patch close to your iPhone to pair it with the app via NFC.",
        text: "",
      },
    ],
  },


  // spod
  {
    slug: "spod",
    title: "Spod",
    cover: "/case-studies/product-design/spod/page-cover.webp",
    excerpt:
      "Spod was created to solve the podium shortage problem during presentations for visual communication students across academic institutions nationwide.",
    tags: [
      "App Design",
      "Branding",
    ],
    heroBackgroundColor: "#FCF0FF",
    navbarTextColor: "#9600A6",
    backgroundColor: "#400047",
    projectUrl: "https://noakuterman.myportfolio.com",
    projectUrlText: "Noa's Portfolio",
    projectUrlVariant: "secondary",
    secondaryProjectUrl: "https://sharonkisil.myportfolio.com",
    secondaryProjectUrlText: "Sharon's Portfolio",
    secondaryProjectUrlVariant: "secondary",
    heroLottie: "/lottie/spod/hero-case-study.json",
    collectionSlug: "product-design",
    date: "2026-02-01",
    introText:
      "A bit of context: at HIT, the standard for presenting our work is just as high as the standard for the work itself. The presentation is expected to be impressive and polished, something that respects and elevates the project, not something that weakens it. <br/> <br/> Across the hallways, colored podiums are present for students to use during their presentations. To secure one, students physically come to campus sometimes a week in advance, tape a note with their name and date, and pray no one takes it or that the note doesn’t fall off. Spod was designed to end this nonsense; bringing presentation prep into 2026 and giving students one less thing to worry about. <br/><br/> Spod was designed as part of a semester project in the Introduction to Interactive Design course, under the guidance of Iris Duani. I've worked on it with 2 good friends of mine and amazing designers on their own right: Noa Kuterman and <br/> Sharon Kisilevich. You're welcome to check their amazing work in their portfolios:",
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
            text: " of students arrive ahead of time physically to campus to check for available podiums",
          },
          {
            label: "60%",
            labelColor: "white",
            labelWeight: "bold",
            text: " of students reported running into overload and chaos during submission week due to poor organization.",
          },
          {
            label: "42%",
            labelColor: "white",
            labelWeight: "bold",
            text: " of students use a podium more than five times a year.",
          },
          {
            label: "90%",
            labelColor: "white",
            labelWeight: "bold",
            text: " of students rated their desire for a podium reservation app at 4 or higher out of 5, with 5 being the strongest interest.",
          },
          {
            label: "40%",
            labelColor: "white",
            labelWeight: "bold",
            text: " of students signed up for the newsletter to receive project updates, join the pilot, and get notified when it launches.",
          },
        ],
        textAfter:
          "The numbers are clear. We've found a real problem that needs solving.",
      },
      {
        title: "User Interviews & Personas",
        text: "To get a deeper understanding of the problem, we conducted deep user interviews with 5 students from different departments and years. based on the interviews we created 3 personas that represent the different types of users we are designing for:",
        bulletSections: [
          {
            title: "Netanel Plank",
            bullets: [
              {
                text: "26-year-old student balancing studies, work, and commuting, constantly short on time",
              },
              {
                text: "Values strong visual presentation but is frustrated by disorder and unnecessary hassle",
              },
              {
                text: "Tends to improvise under pressure when no clear system supports him",
              },
              {
                text: "Sensitive to deadline stress and seeks certainty and control",
              },
              {
                text: "Wants to focus on creating, not on the logistics.",
              },
            ],
          },
          {
            title: "Marina Milderman",
            bullets: [
              {
                text: "24-year-old student juggling studies, work, and a packed weekly schedule",
              },
              {
                text: "Highly organized and practical, plans ahead to avoid last-minute stress",
              },
              {
                text: "Treats presentation as part of the work, not an afterthought",
              },
              {
                text: "Relies on structure and clear systems to manage her time",
              },
              {
                text: "Wants a smooth process so she can stay focused on learning and creating",
              },
            ],
          },
        ],
      },
    ],
    contentSections: [
      {
        image: "/case-studies/product-design/spod/explore-page.jpg",
        title:
          "A single place that shows the full podium inventory, with filters so users can quickly find what they need <br/><br/> Icons that show podium material, cable hole availability, and height for fast scanning of key details <br/><br/>The Explore page is available without signup, so users can confirm what they need exists before registering",
        text: "",
      },
      {
        image: "/case-studies/product-design/spod/hit-registration.jpg",
        title:
          "Signup use college credentials to pull the student’s presentation schedule based on their department and year, without manual input.<br/><br/> Signup happens during the reservation flow, so the podium is saved for the specific student who booked it, and only for them.",
        text: "",
      },
      {
        image: "/case-studies/product-design/spod/home.jpg",
        title:
          "Home screen with one place to see all upcoming presentations<br><br>Presentations are sorted with those missing a podium first, then by the closest date<br><br>Shows how many podiums are still available for the selected presentation<br><br>For presentations without a booked podium, the app suggests suitable podiums to reduce unnecessary searching<br><br>App reminders, with an option to turn them off, about a week in advance",
        text: "",
      },
      {
        image: "/case-studies/product-design/spod/my-podiums.jpg",
        title:
          "One place to see all reserved podiums and locate them in the building<br><br>AirTag-based tracking for live directions on presentation day",
        text: "",
      },
      {
        image: "/case-studies/product-design/spod/qr-code.jpg",
        title:
          "A QR code that shows who reserved the podium and for which date, to prevent someone from taking a podium that’s already claimed.",
        text: "",
      },
      {
        image: "/case-studies/product-design/spod/custom-date.jpg",
        title:
          "A visual calendar indicator showing podium availability for each day, so students can understand availability without checking dates one by one.",
        text: "",
      },
    ],
  },

  // name-the-font-uxui
  {
    slug: "namethefont",
    title: "Name the Font",
    cover: "/case-studies/product-design/name-the-font/cover.webp",
    excerpt:
      "Name the font (Hebrew: זהה את הגופן) is a game bringing the fonts you see around you to the main stage. How many of them can you recognize?",
    tags: ["Web App Design", "Branding", "Gaming", "Web Development"],
    heroImage: "/case-studies/branding/name-the-font/hero-image.svg",
    heroBackgroundColor: "#4673b0",
    backgroundColor: "#133C66",
    projectUrl: "http://namethefont.com",
    projectUrlText: "Play now!",
    collectionSlug: "product-design",
    date: "2025-10-31",
    introText:
      "During my first year studying Visual Communication, a friend from class and I discovered a shared obsession with Hebrew typography — and an ongoing debate about who was better at identifying fonts by sight. What started as a playful rivalry quickly turned into an idea for a game that could settle it once and for all. <br/><br/> That’s how Name the Font was born — a browser-based game that challenges players to recognize Hebrew typefaces used in our daily life, under time pressure. I led the UX/UI design and front-end development using the Next.js framework, crafting a clean, competitive experience that celebrates typography through play. <br/><br/> Wanna see for yourselves? Let's go! Grab your place at the leaderboards table!",
    processSteps: [
      {
        title: "Project Requirements Document",
        text: "We started by sitting with my friend and deciding on the needed features for the MVP version: How users are gonna interact, the basic game logic, the all-around experience, the authentication, the competitive aspects and more:",
        bulletSections: [
          {
            title: "Game Logic",
            bullets: [
              {
                text: "10 questions per round, because we wanted depth, but a continuous experience to discover more fonts.",
              },
              {
                text: "Time-based points, to add additional challenge to player who know a lot of fonts",
              },
              {
                text: "Motion Design using gamification principles, so the whole experience will fill alive.",
              },
            ],
          },
          {
            title: "Authentication",
            bullets: [
              {
                text: "Google-based social login, to disappear the need to remember yet another password.",
              },
              {
                text: "Magic-Link authentication, to cover the edge cases of those who don't have a google account.",
              },
              {
                text: "Combined sign-up and sign-in, to make everything at one place.",
              },
            ],
          },
          {
            title: "Leaderboards and Profile",
            bullets: [
              {
                text: "Personal profile page, with the relevant statistics about the player's performance, with weekly and all-time views.",
              },
              {
                text: "Leaderboards table with points based rankings with logic to rank properly in-case of a tie.",
              },
            ],
          },
        ],
        textAfter:
          "Once I had the PRD, I started designing the UI, not before creating user flows, and design guidelines the game needed.",
      },
      {
        title: "User Interface",
        text: "The UI was designed around the brand of name the font, which we designed together. This case study is available in the branding section of my portfolio. For now, here’s a glimpse of the final design:",
      },
    ],
    contentSections: [
      {
        image: "/case-studies/product-design/name-the-font/landing-page.jpg",
        title:
          "Landing page with a clear call-to-play <br/><br/> Homage to the top-ranked players <br/><br/>Rotating header to show different typefaces",
        text: "",
      },
      {
        image: "/case-studies/product-design/name-the-font/table.jpg",
        title:
          "Clean table for scanning data fast <br/><br/> Search bar for easy filtering <br/><br/>Tabs to switch between all-times leaders or weekly leaders <br/><br/>visual difference between the top-3 and the rest of the players.",
        text: "",
      },
      {
        image: "/case-studies/product-design/name-the-font/authentication.jpg",
        title:
          "Combined sign-up and sign-in <br/><br/>Redirecting to this page, in-case a player starts a game as a guest <br/><br/>Google & Magic Link for a password-free experience",
        text: "",
      },
      {
        image: "/case-studies/product-design/name-the-font/gameplay-1.jpg",
        title:
          "Clear feedback about the wrong and correct answers <br/><br/>Large image in high-quality, emphasizing the typeface characteristics",
        text: "",
      },
    ],
  },

  // infowork
  {
    slug: "infowork",
    title: "Infowork",
    cover: "/case-studies/product-design/infowork/page-cover.webp",
    excerpt:
      "Smart content management system I designed to organize, track, and simplify my social media work for Informat.",
    tags: ["Web App Design", "Web App Development"],
    collectionSlug: "product-design",
    date: "2025-10-01",
    heroImage: "/case-studies/product-design/infowork/hero-image.svg",
    heroBackgroundColor: "#4f46e4",
    introText:
      "Informat, founded in 1994, is one of Israel’s leading IT companies, offering advanced computing solutions, infrastructure, hardware, licensing, and support services across industries. <br/><br/> When I joined as a part-time Social Media Designer, I was responsible for creative concepts for Facebook, LinkedIn, and newsletters. The creative side was fun, but managing the work was messy. I kept losing track of how many posts I had made, when they were scheduled, and what content belonged where. Everything got buried in my inbox and in my excel sheet. What should have been an inspiring process turned into something frustrating and overwhelming. <br/><br/> That was the trigger for Infowork – my own smart tool to manage social content.",
    backgroundColor: "#232066",
    processSteps: [
      {
        title: "User Research",
        text: "I started by looking at my own pain points and why my Excel sheet failed me. The problems were clear:",
        bullets: [
          "Excel isn’t suited for large text blocks.",
          "It doesn’t offer different views, so I couldn’t easily scan information or see how new posts fit with existing ones",
          "Filters are clumsy, limited and slow to apply.",
          "Everything had to be done manually, with no real automation.",
          "Had no easy way to track my incomes from month to month.",
        ],
        textAfter:
          "Once I had the problem outlined, I wrote a PRD that defined the features, database structure, user flows, and design guidelines the system needed.",
      },
      {
        title: "User Interface",
        text: "Since I am the target audience, I designed the UI around my own preferences. I chose purple as the primary color, paired with a simple grayscale palette. The goal was clarity and ease of use, with no unnecessary noise – just a smooth, elegant interface that makes managing content simple. <br/> Here’s a glimpse of the final design.",
      },
    ],
    contentSections: [
      {
        image: "/case-studies/product-design/infowork/overview-1.png",
        title:
          "Quick view of my work this month <br/><br/> Notifications if something needs to be uploaded today<br/><br/>One-click export of monthly work",
        text: "",
      },
      {
        image: "/case-studies/product-design/infowork/table.png",
        title:
          "Clean table for scanning data fast<br/><br/>Tags by type and status for quick filtering<br/><br/>Tabs to switch between all work or just this month<br/><br/>Highlighted cost column to easily track incomes",
        text: "",
      },
      {
        image: "/case-studies/product-design/infowork/form.png",
        title:
          "Custom date-picker that shows when other posts are scheduled<br/><br/>Automatic cost calculation",
        text: "",
      },
      {
        image: "/case-studies/product-design/infowork/details.png",
        title:
          "Detailed view with all relevant info<br/><br/>Dedicated content area with “copy to clipboard” buttons",
        text: "",
      },
      {
        image: "/case-studies/product-design/infowork/statistics.png",
        title:
          "Progress overview with graphs<br/><br/>Filters to see data by time period<br/><br/>Income graphs with quick PDF export for invoices",
        text: "",
      },
      {
        image: "/case-studies/product-design/infowork/calendar.png",
        title:
          "Calendar showing post/mail upload dates<br/><br/>Expandable navigation for fast access without endless scrolling",
        text: "",
      },
    ],
  },

  // lushay-docs
  {
    slug: "lushay-docs",
    title: "Lushay Docs",
    excerpt:
      "A documentation site for learning and enhancing FPGA knowledge.",
    tags: ["Web App Design"],
    collectionSlug: "product-design",
    date: "2024-05-22",
    cover: "/case-studies/product-design/lushay-docs/page-cover.webp",
    backgroundColor: "#1A254D",
    heroImage: "/case-studies/product-design/lushay-docs/hero-image.svg",
    heroBackgroundColor: "#233266",
    introText:
      "Lushay Labs is a company specializing in electrical engineering, focusing on creating educational content in the FPGA domain. For this project, I crafted a new user experience for their website, Lushay Docs. This site offers comprehensive class documentation for all built-in FPGA primitives.",
    processSteps: [
      {
        title: "The Goals:",
        text: "",
        bullets: [
          "Create a clean and clutter-free UI, giving the best learning experience possible.",
          "Maintain the company's existing brand and engage with the company's clients in new areas",
          "Show the company's knowledge and professionalism in the educational world",
        ],
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
        title:
          "Clean landing page with flat illustration, to show professionalism and playfulness.<br/><br/> A prominent call to action directs clients to the desired collection.<br/><br/>Custom brand icons and a glimpse of the owner's story create a client connection.",
        text: "",
      },
      {
        image: "/case-studies/product-design/lushay-docs/documentation.jpg",
        title:
          "Distraction-free interface with high contrast to ensure focus on what matters.<br/><br/>A smart navigator to guide you to the perfect lesson.​​​​​​​",
        text: "",
      },
      {
        image: "/case-studies/product-design/lushay-docs/responsiveness.jpg",
        title:
          "Mobile & tablet support for learning anywhere, anytime.​​​​​​​",
        text: "",
      },
    ],
  },

  // upllery
  {
    slug: "upllery",
    title: "Upllery Event Manager",
    excerpt:
      "Web management platform for Upllery events - Use your audience Instagram stories as your events content!",
    tags: ["Web App Design"],
    collectionSlug: "product-design",
    date: "2021-12-25",
    cover: "/case-studies/product-design/upllery/page-cover.webp",
    heroImage: "/case-studies/product-design/upllery/hero-image.svg",
    heroBackgroundColor: "#000000",
    introText:
      "Upllery boosts brand engagement and exposure across social media, transforming fans' posts into promotional content for wider reach. My objective was to design Upllery's management platform for real-time interaction with event attendees.",
    backgroundColor: "#1B1B1B",
    processSteps: [
      {
        title: "The Goals:",
        text: "",
        bullets: [
          "Providing an overview of all scheduled events.",
          "Enabling selection and analysis of engagement data for specific events.",
          "Creating a filter for inappropriate content in Instagram stories displayed on event screens.",
          "Ensuring proper display of Instagram stories on landscape screens.​​​​​​​",
        ],
        textAfter: "",
      },
    ],
    contentSections: [
      {
        image: "/case-studies/product-design/upllery/event-dashboard.jpg",
        title:
          "Clean dashboard to quickly the events performance and engagement data.  <br/><br/> 2 action btns to quickly start an event.<br/><br/>Branded UI to create a connection of Upllery employees to the product.",
        text: "",
      },
      {
        image: "/case-studies/product-design/upllery/events-table.jpg",
        title:
          "Sortable table to show all events according to the needed order.<br/><br/> CTA button to quickly creare a new one.",
        text: "",
      },
      {
        image: "/case-studies/product-design/upllery/stories-filter.webp",
        title:
          "An overview of all pending stories for a quick scan.<br/><br/>Pagination to avoid cognitive load by placing too much stories at once.",
        text: "",
      },
      {
        image: "/case-studies/product-design/upllery/stories-lightbox.jpg",
        title:
          "Dedicated lightbox to avoid visual load while approving stories.<br/><br/> Navigation buttons to approve multiple stories quickly without leaving the lightbox.",
        text: "",
      },
    ],
  },

  // 3dmylev
  {
    slug: "3dmylev",
    title: "3DMylev",
    excerpt: "An online business for 3D Printing designers furnitures",
    tags: ["E-commerce Shopify Store Design"],
    collectionSlug: "product-design",
    date: "2024-7-2",
    cover: "/case-studies/product-design/3dmylev/page-cover.webp",
    heroImage: "/case-studies/product-design/3dmylev/hero-image.svg",
    heroBackgroundColor: "#fefbfc",
    navbarTextColor: "#f2194b",
    introText:
      "3D Mylev is a company specializes in 3D printing, with a huge passion for arts. In this design, I’ve tried to create a smooth user experience for their online shop, which capturing the essence of 3D Mylev - creating amazing art while changing the public’s point of view about Autism through design and art.",
    backgroundColor: "#5C0009",
    processSteps: [
      {
        title: "The Challenges:",
        text: "",
        bullets: [
          "Create a smooth and clutter-free UI, giving the owner's products the stage to shine.",
          "Increase the business's income with each purchase a client makes.",
          "Generate more return clients by improving the overall user experience.",
        ],
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
        title:
          "A wide use of whitespace to ensure a luxury, yet friendly and clean UI.<br/><br/> A prominent call to action directs clients to the desired collection.<br/><br/>Custom brand icons and a glimpse of the owner's story create a client connection.",
        text: "",
      },
      {
        image: "/case-studies/product-design/3dmylev/shop.jpg",
        title:
          "Large product cards and minimalistic buttons highlight the products and ensure they have the focus.​​​​​​​ <br/><br/>Filter and sorting tools, along with pagination and collection tabs, ensure users find exactly what they want​​​​​​​.",
        text: "",
      },
      {
        image: "/case-studies/product-design/3dmylev/you-may-also-like.jpg",
        title:
          "A \"you may also like\" section before checkout maximizes revenue per purchase",
        text: "",
      },
      {
        image: "/case-studies/product-design/3dmylev/product-page.jpg",
        title:
          "Added information about current sells, to maximize business revenue. <br/><br/> Information about how many items are left in stock, to encourage clients to buy them before they run out.",
        text: "",
      },
    ],
  },
];
