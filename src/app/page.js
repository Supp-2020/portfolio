import Header from "@/components/Header";
import Home from "@/components/Home";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-16">
        <Home />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
