import Header from "@/components/Header";
import Home from "@/components/Home";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import GithubSection from "@/components/GithubSection";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-16 space-y-5">
        <Home />
        <WorkExperience />
        <Projects />
        <GithubSection />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
