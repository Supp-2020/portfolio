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
      <main className="flex-1 px-16 space-y-5">
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
