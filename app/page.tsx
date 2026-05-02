import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Architecture from "@/components/Architecture";
import Contact from "@/components/Contact";
import CursorGlow from "@/components/CursorGlow";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";
import TechBackdrop from "@/components/TechBackdrop";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <ScrollProgress />
      <TechBackdrop />
      <div className="noise-layer" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Architecture />
        <Process />
        <TechStack />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
