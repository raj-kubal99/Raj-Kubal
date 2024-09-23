import About from "./components/About";
import Achievements from "./components/Achievements";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ExperienceDetails from "./components/ExperienceDetails";
import { ScrollContextProvider } from "./context/ScrollContext";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <ScrollContextProvider>
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <Hero />
          <Achievements />
          <About />
          <Projects />
          <ExperienceDetails />
          <ContactMe />
        </div>
        <Footer />
      </ScrollContextProvider>
    </main>
  );
}
