"use client";

import Header from "@/components/Header";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
// import GithubSection from "@/components/GithubSection";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import LandingScreen from "@/components/LandingScreen";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://supreet-pradhan.vercel.app";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Supreet Pradhan Portfolio",
      url: siteUrl,
      description:
        "Portfolio website for Supreet Pradhan, a software developer building polished web experiences with React, Next.js, and TypeScript.",
      inLanguage: "en",
      author: {
        "@type": "Person",
        name: "Supreet Pradhan",
      },
    },
    {
      "@type": "Person",
      name: "Supreet Pradhan",
      jobTitle: "Software Developer",
      url: siteUrl,
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Frontend Engineering",
        "Full Stack Development",
      ],
      sameAs: [
        "https://www.linkedin.com/in/supreetpradhan/",
        "https://github.com/Supp-2020",
        "https://dev.to/supreet_pradhan",
        "https://codepen.io/supp-2020",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressCountry: "IN",
      },
    },
  ],
};

export default function App() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 px-4 md:px-8 lg:px-16 pt-0 md:pt-4 pb-12 md:pb-20 lg:pb-28 space-y-16 md:space-y-16 lg:space-y-20">
          <LandingScreen />
          <WorkExperience />
          <Projects />
          {/* <GithubSection /> */}
          <ContactUs />
        </main>
        <Footer />
      </div>
    </>
  );
}
