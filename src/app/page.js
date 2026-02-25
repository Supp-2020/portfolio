"use client";

import Header from "@/components/Header";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
// import GithubSection from "@/components/GithubSection";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import LandingScreen from "@/components/LandingScreen";

export default function App() {

  return (
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
  );
}
