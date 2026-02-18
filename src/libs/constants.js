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

export const funWebsites = [
  {
    key: "Swap Window",
    href: "https://www.window-swap.com/Window",
    emoji: "🙂",
  },
  {
    key: "Bruno Simon Portfolio",
    href: "https://bruno-simon.com/",
    emoji: "🚗",
  },
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
    featured: true,
    carouselImages: [
      "/images/readme-1.png",
      "/images/readme-2.png",
      "/images/readme-4.png",
      "/images/readme-5.png",
      "/images/readme-6.png",
      "/images/readme-9.png",
      "/images/readme-11.png",
      "/images/readme-13.jpg",
      "/images/readme-12.png",
    ],
  },
  "blog-project-VUE": {
    title: "Blog Creator Application",
    image: "/assets/scribbles-scribbles-35.svg",
    featured: true,
    carouselImages: [
      "/images/blog_image4.png",
      "/images/blog_image8.png",
      "/images/blog_image3.png",
      "/images/blog_image5.png",
      "/images/blog_image6.png",
    ],
  },
  "lynx-pinterest": {
    title: "Pinterest Layout with Lynx",
    image: "/assets/scribbles-scribbles-47.svg",
    carouselImages: ["/images/lynx_image.jpg"],
  },
  "password-validation": {
    title: "Form Validator",
    image: "/assets/scribbles-scribbles-43.svg",
    carouselImages: ["/images/form_validation_image.png"],
  },
  "todo-list": {
    title: "Todo List",
    image: "/assets/scribbles-scribbles-80.svg",
    carouselImages: ["/images/todo_image.png"],
  },
};

export const jsQuestions = [
  {
    question: "console.log([] == ![]);",
    hint: "// Think about coercion order",
    answer: "true",
    explanation:
      "![] becomes false. Then [] == false → [] becomes '' → 0 → false → true.",
  },
  {
    question: "console.log(NaN === NaN);",
    hint: "// Special numeric case",
    answer: "false",
    explanation:
      "NaN is the only value in JavaScript that is not equal to itself.",
  },
  {
    question: "console.log(Object.is(NaN, NaN));",
    hint: "// Compare with previous question",
    answer: "true",
    explanation: "Object.is treats NaN as equal to NaN, unlike ===.",
  },
  {
    question: "console.log(typeof document?.all);",
    hint: "// Browser quirk",
    answer: "undefined",
    explanation:
      "document.all is a weird legacy object that typeof reports as 'undefined'.",
  },
  {
    question: "console.log([1,2] + [3]);",
    hint: "// Arrays convert to strings",
    answer: "1,23",
    explanation:
      "Arrays stringify to '1,2' and '3'. Then string concatenation happens.",
  },
  {
    question: "console.log(0.1 + 0.2 === 0.3);",
    hint: "// Floating point precision",
    answer: "false",
    explanation:
      "0.1 + 0.2 equals 0.30000000000000004 due to binary floating point math.",
  },
  {
    question: "console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());",
    hint: "// What does + 'a' evaluate to?",
    answer: "banana",
    explanation:
      "+'a' becomes NaN. So the expression becomes 'b' + 'a' + NaN + 'a' → 'baNaNa'. Then toLowerCase() makes it 'banana'.",
  },
  {
    question: "console.log(Math.max() < Math.min());",
    hint: "// Default values",
    answer: "true",
    explanation: "Math.max() returns -Infinity, Math.min() returns Infinity.",
  },
  {
    question: "console.log(typeof null);",
    hint: "// Historical bug",
    answer: "object",
    explanation:
      "This is a legacy bug in JavaScript — null is not actually an object.",
  },
  {
    question: "console.log([] === []);",
    hint: "// Reference comparison",
    answer: "false",
    explanation:
      "Arrays are objects. Different references are never strictly equal.",
  },
];
