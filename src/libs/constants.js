export const workExpArray = {
  workArray: [
    {
      key: "desig1",
      designation: "Software Developer",
      workDates: "July 2025 — Present",
      platform: "Music Platform",
      bulletPoints: [
        "Established the frontend architecture from the ground up",
        "Designed reusable UI components and global state with Zustand",
        "Built cores playlist and track views features",
      ],
      techStack: [
        "Next.js",
        "Zustand",
        "Tailwind CSS",
        "Storybook",
        "Playwright",
        "TypeScript",
        "Vitest",
      ],
    },
    {
      key: "desig2",
      designation: "Associate Software Developer",
      workDates: "Sept 2023 — Jul 2025",
      platform: "B2B Partner Platform",
      bulletPoints: [
        "Built a drag-and-drop widget system for customizable dashboards",
        "Developed the Finance module supporting core business workflows",
        "Implemented cart validations and checkout logic for high-value transactions",
        "Led the migration from JavaScript to TypeScript format",
      ],
      techStack: [
        "React.js",
        "Redux-toolkit",
        "Jest",
        "TypeScript",
        "Styled Components",
      ],
    },
    {
      key: "desig3",
      designation: "Python/Django Intern",
      workDates: "",
      platform: "",
      bulletPoints: [
        "Built a local food discovery app using Python and Django with preference-based recommendations",
        "Implemented Google Maps API for real-time, proximity-based food suggestions",
      ],
      techStack: [],
    },
  ],
};

export const imageCards = [
  {
    src: "/images/1000049413.jpg",
    title: "Valtech India Hackthon 2nd Prize",
    rotate: "-rotate-6",
    hoverRotate: "hover:-rotate-1",
    offset: "sm:translate-x-6 sm:translate-y-6",
  },
  {
    src: "/images/1000024594.png",
    title: "Jewels of Valtech Award",
    rotate: "rotate-6",
    hoverRotate: "hover:rotate-1",
    offset: "sm:-translate-x-2 sm:-translate-y-2",
  },
];

export const renderRepo = [
  "autodev-iq",
  "blog-project-VUE",
  "lynx-pinterest",
  "password-validation",
  "todo-list",
];

export const CARD_VARIANTS = [
  {
    cardBg: "bg-[#f3f3f3]",
    titleBg: "bg-[#B9FF66]",
    titleText: "text-black",
    arrowBg: "bg-black",
    arrowText: "text-[#B9FF66]",
    ctaText: "text-black",
  },
  {
    cardBg: "bg-[#B9FF66]",
    titleBg: "bg-white",
    titleText: "text-black",
    arrowBg: "bg-black",
    arrowText: "text-[#B9FF66]",
    ctaText: "text-black",
  },
  {
    cardBg: "bg-[#191a23]",
    titleBg: "bg-white",
    titleText: "text-black",
    arrowBg: "bg-white",
    arrowText: "text-black",
    ctaText: "text-white",
  },
];

/* Images from https://icons8.com/illustrations/style--scribbles/free--y */
export const projectConfig = {
  "autodev-iq": {
    title: "AutoDev IQ",
    image: "/assets/scribbles-scribbles-32.svg",
  },
  "blog-project-VUE": {
    title: "Blog Creator Application",
    image: "/assets/scribbles-scribbles-35.svg",
  },
  "lynx-pinterest": {
    title: "Pinterest Layout with Lynx",
    image: "/assets/scribbles-scribbles-47.svg",
  },
  "password-validation": {
    title: "Form Validator",
    image: "/assets/scribbles-scribbles-43.svg",
  },
  "todo-list": {
    title: "Todo List",
    image: "/assets/scribbles-scribbles-80.svg",
  },
};
